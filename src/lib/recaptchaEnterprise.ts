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

const SCRIPT_READY_TIMEOUT_MS = 10_000;
const POLL_INTERVAL_MS = 50;

function getRecaptchaEnterpriseSiteKey(): string {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY?.trim();
  if (!siteKey) {
    throw new Error('Missing NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY.');
  }
  return siteKey;
}

function waitForEnterpriseClient(): Promise<GrecaptchaEnterpriseClient> {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();

    const poll = () => {
      const enterpriseClient = window.grecaptcha?.enterprise;
      if (enterpriseClient) {
        resolve(enterpriseClient);
        return;
      }

      if (Date.now() - startedAt >= SCRIPT_READY_TIMEOUT_MS) {
        reject(new Error('reCAPTCHA Enterprise script was not ready in time.'));
        return;
      }

      window.setTimeout(poll, POLL_INTERVAL_MS);
    };

    poll();
  });
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
  const enterpriseClient = await waitForEnterpriseClient();

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
