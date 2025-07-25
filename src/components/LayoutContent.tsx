'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState, type ReactNode } from 'react';

export default function LayoutContent({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    import(`../../../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => setMessages({}));
  }, [locale]);

  if (!messages) return null; // or a loading spinner if you prefer

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
