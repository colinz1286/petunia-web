'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ContactPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans px-6 py-20 text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">We’d love to hear from you!</h1>
      <p className="text-lg max-w-xl">
        Whether you have a question, suggestion, or just want to say hello —
        we’re here for you. Please feel free to reach out anytime at{' '}
        <a
          href="mailto:admin@petuniapets.com"
          className="underline text-[#2c4a30]"
        >
          admin@petuniapets.com
        </a>. We’ll get back to you as soon as we can!
      </p>
    </main>
  );
}
