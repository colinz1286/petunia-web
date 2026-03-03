type GrecaptchaEnterpriseClient = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: GrecaptchaEnterpriseClient;
    };
  }
}

const SCRIPT_READY_TIMEOUT_MS = 20_000;
const POLL_INTERVAL_MS = 50;
const SCRIPT_HOSTS = ['www.google.com', 'www.recaptcha.net'] as const;
const SCRIPT_DATA_ATTR = 'data-petunia-recaptcha-enterprise';

let ensureClientPromise: Promise<GrecaptchaEnterpriseClient> | null = null;

function getRecaptchaEnterpriseSiteKey(): string {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY?.trim();
  if (!siteKey) {
    throw new Error('Missing NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY.');
  }
  return siteKey;
}

function waitForEnterpriseClient(timeoutMs: number): Promise<GrecaptchaEnterpriseClient> {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const poll = () => {
      const enterpriseClient = window.grecaptcha?.enterprise;
      if (enterpriseClient) {
        resolve(enterpriseClient);
        return;
      }

      if (Date.now() - startedAt >= timeoutMs) {
        reject(new Error('reCAPTCHA Enterprise script was not ready in time.'));
        return;
      }

      window.setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();
  });
}

function buildScriptUrl(siteKey: string, host: (typeof SCRIPT_HOSTS)[number]): string {
  return `https://${host}/recaptcha/enterprise.js?render=${encodeURIComponent(siteKey)}`;
}

function ensureScriptTag(src: string): void {
  if (typeof document === 'undefined') return;

  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existingScript) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.defer = true;
  script.setAttribute(SCRIPT_DATA_ATTR, 'true');
  document.head.appendChild(script);
}

async function ensureEnterpriseClient(siteKey: string): Promise<GrecaptchaEnterpriseClient> {
  const existingClient = window.grecaptcha?.enterprise;
  if (existingClient) {
    return existingClient;
  }

  if (!ensureClientPromise) {
    ensureClientPromise = (async () => {
      let lastError: Error | null = null;

      for (const host of SCRIPT_HOSTS) {
        const src = buildScriptUrl(siteKey, host);
        ensureScriptTag(src);

        try {
          return await waitForEnterpriseClient(SCRIPT_READY_TIMEOUT_MS);
        } catch (error) {
          lastError = error instanceof Error
            ? error
            : new Error('Failed to initialize reCAPTCHA Enterprise client.');
        }
      }

      throw lastError ?? new Error('reCAPTCHA Enterprise script was not ready in time.');
    })().finally(() => {
      ensureClientPromise = null;
    });
  }

  return ensureClientPromise;
}

export async function executeRecaptchaEnterpriseAction(action: string): Promise<string> {
  if (typeof window === 'undefined') {
    throw new Error('reCAPTCHA Enterprise can only run in the browser.');
  }

  const trimmedAction = action.trim();
  if (!trimmedAction) {
    throw new Error('reCAPTCHA action is required.');
  }

  const siteKey = getRecaptchaEnterpriseSiteKey();
  const enterpriseClient = await ensureEnterpriseClient(siteKey);

  return new Promise((resolve, reject) => {
    enterpriseClient.ready(async () => {
      try {
        const token = await enterpriseClient.execute(siteKey, { action: trimmedAction });
        if (!token) {
          reject(new Error('reCAPTCHA Enterprise returned an empty token.'));
          return;
        }
        resolve(token);
      } catch (error) {
        if (error instanceof Error) {
          reject(error);
          return;
        }
        reject(new Error('Failed to execute reCAPTCHA Enterprise.'));
      }
    });
  });
}
