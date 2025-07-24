'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AboutUsPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 sm:px-6 py-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-10 text-center">
        {/* Logo */}
        <img
          src="/petunia_logo.png"
          alt="Petunia Logo"
          className="w-36 sm:w-40 h-auto mx-auto"
        />

        {/* Milo Intro Image */}
        <img
          src="/IMG_0354.jpeg"
          alt="Milo"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />

        {/* Intro */}
        <h1 className="text-3xl font-bold">Why We Built Petunia</h1>
        <p className="text-lg leading-relaxed">
          Petunia was created in memory of a dog named <strong>Milo</strong> — a dog who changed our lives in ways we never expected.
          This app isn’t just software. It’s a tribute. A continuation of Milo’s legacy. A way to bring light, warmth, and connection
          to other pet lovers and businesses who share the same love we had for him.
        </p>

        {/* Milo’s Story */}
        <h2 className="text-2xl font-semibold">Milo’s Story</h2>
        <p className="text-lg leading-relaxed">
          Milo came into our lives in December of 2017, during a time when his original family could no longer care for him.
          He arrived quietly, unsure of where he belonged — and within hours, we knew he had found his forever home with us.
        </p>
        <p className="text-lg leading-relaxed">
          That first night, he jumped onto the bed and laid his head on Erin’s chest. From that moment on, he never left our side.
          He wasn't just a dog — he was a healer, a companion, and the missing piece of our family.
        </p>
        <p className="text-lg leading-relaxed">
          Over time, Milo overcame his fears, passed his therapy dog exam, and developed a gift for connecting deeply with people.
          His most famous gesture, lying down and lifting his paw into someone’s hand, became the way he expressed his love — and his only goal was to be your friend.
        </p>

        <div className="text-center">
          <img
            src="/IMG_6110.jpeg"
            alt="Milo, Erin, and Mia"
            className="mx-auto rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[60%]"
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Starting from left: Milo, Erin, and Mia on one of our final walks together.
          </p>
        </div>

        {/* Gift to You */}
        <h2 className="text-2xl font-semibold">His Final Gift To Us – Our Gift To You</h2>
        <p className="text-lg leading-relaxed">
          In November of 2024, Milo was diagnosed with cancer. We spent every day of his final months making him feel cherished.
          We cooked for him, stayed by his side, and soaked in every quiet moment. On December 21st, Milo passed peacefully in Erin’s arms — the same way he entered our lives.
        </p>
        <p className="text-lg leading-relaxed">
          Milo’s life was about connection, comfort, and love. This app — Petunia — is about exactly that. It’s our way of continuing what he started:
          making people feel seen, supported, and never alone in the world of pet care.
        </p>
        <p className="text-lg leading-relaxed">
          Here at Petunia, we know how much of yourselves — and your personal lives — you give up to care for animals.
          It’s time there was a company that truly understands not just the depth of that sacrifice, but the needs of those doing this extraordinary work around the world.
          We're not just building a business that supports your needs — we want you to feel like you are our friend.
        </p>

        <ul className="list-disc list-inside space-y-2 text-lg text-left sm:text-center px-4 sm:px-0">
          <li>For pet businesses: a tool to operate with ease and connect with their clients.</li>
          <li>For pet owners: a place to organize, track, and protect what matters most — especially your time with the ones you love.</li>
          <li>For every animal lover: a community that listens and evolves with your needs.</li>
        </ul>

        {/* Petunia Section */}
        <h2 className="text-2xl font-semibold">A New Chapter: Meet Petunia</h2>
        <p className="text-lg leading-relaxed">
          After Milo passed, our hearts felt empty — but love has a way of finding its way back in. Not long after, we welcomed a new dog into our family.
          Her name is Petunia. From the moment she arrived, she brought with her a gentle spirit, a sense of calm, and a new kind of hope.
        </p>
        <p className="text-lg leading-relaxed">
          It only felt right that we name this app after her — a symbol of continuity, love, and new beginnings.
          Petunia represents the future, the families yet to be touched, and the stories still being written.
        </p>

        <div className="text-center">
          <img
            src="/rachelrowland-59.jpg"
            alt="Petunia and Mia"
            className="mx-auto rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[60%]"
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Petunia (left) and Mia (right) — the next generation of love.
          </p>
        </div>

        {/* Closing Note */}
        <p className="text-lg mt-10 italic text-[#444] leading-relaxed">
          Thank you for visiting our page. Whether you’re a business owner trying to build something meaningful,
          or a pet parent looking for connection, we hope Milo’s story creates a feeling of love that will stay with you forever.
          <br /><br />
          He wasn’t just a dog. He was a reminder that loyalty still matters — and that love, real lasting love, is worth building around.
          <br /><br />
          That’s what Petunia is. And we’re grateful you’re here.
        </p>
      </div>
    </main>
  );
}
