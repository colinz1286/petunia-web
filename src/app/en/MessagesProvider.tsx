// src/app/en/MessagesProvider.tsx
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

import messagesLoader from '../../../messages';

export default async function MessagesProvider({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // messages.ts exports default { en: () => ({...}) }
  const loader = messagesLoader as unknown as { en?: () => Record<string, unknown> };

  // You are using /en routes, so always load English messages
  const messages = loader.en ? loader.en() : {};

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
