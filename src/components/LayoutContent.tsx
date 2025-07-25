'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState, type ReactNode } from 'react';
import messageLoader from '../../messages';

export default function LayoutContent({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const [messages, setMessages] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    try {
      const load = messageLoader[locale as keyof typeof messageLoader];
      if (load) {
        setMessages(load());
      } else {
        console.error(`No messages found for locale: ${locale}`);
        setMessages({});
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
      setMessages({});
    }
  }, [locale]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
