'use client';

import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] font-sans px-4 sm:px-6 py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-xl space-y-6">
        <Image
          src="/ChatGPT Image Jul 24, 2025 at 04_29_11 PM.png"
          alt="Contact Us Visual"
          width={1200}
          height={0}
          className="mx-auto w-[90%] sm:w-[80%] md:w-[60%] rounded-lg shadow-lg mb-8"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold">We&rsquo;d love to hear from you</h1>
        <p className="text-lg leading-relaxed">
          Whether you have a question, suggestion, or just want to say hello — we&rsquo;re always here.
        </p>
        <p className="text-lg leading-relaxed">
          Feel free to reach out anytime at{' '}
          <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30] font-medium">
            admin@petuniapets.com
          </a>
          . We&rsquo;ll get back to you as soon as we can!
        </p>
        <p className="text-lg italic text-[#444]">
          Thank you for being part of the Petunia community.
        </p>
      </div>
    </main>
  );
}
