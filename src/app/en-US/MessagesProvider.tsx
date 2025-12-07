// src/app/[locale]/MessagesProvider.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function MessagesProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  let messages;

  try {
    messages = await getMessages();
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
