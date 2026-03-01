'use client';

import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 sm:px-6 py-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-10 text-center">
        {/* Logo */}
        <Image
          src="/petunia_logo.png"
          alt="Petunia Logo"
          width={160}
          height={0}
          className="w-36 sm:w-40 h-auto mx-auto"
          priority
        />

        {/* Milo Intro Image */}
        <Image
          src="/IMG_0354.jpeg"
          alt="Milo"
          width={640}
          height={0}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          priority
        />

        {/* Intro */}
        <h1 className="text-3xl font-bold">Why We Built Petunia</h1>
        <div className="md:hidden rounded-xl border border-[#d9cfc2] bg-white/40 p-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2c4a30] mb-2">On this page</p>
          <div className="flex flex-wrap gap-2">
            <a href="#about-milo-story" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Milo&rsquo;s Story</a>
            <a href="#about-final-gift" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Final Gift</a>
            <a href="#about-petunia" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Meet Petunia</a>
            <a href="#about-closing" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30]">Closing Note</a>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Petunia was created in memory of a dog named <strong>Milo</strong> — a dog who changed our lives in ways we never expected.
          This app isn&rsquo;t just software. It&rsquo;s a tribute. A continuation of Milo&rsquo;s legacy. A way to bring light, warmth, and connection
          to other pet lovers and businesses who share the same love we had for him.
        </p>

        {/* Milo’s Story */}
        <h2 id="about-milo-story" className="text-2xl font-semibold scroll-mt-24">Milo&rsquo;s Story</h2>
        <p className="text-lg leading-relaxed">
          Milo came into our lives in December of 2017, during a time when his original family could no longer care for him.
          He arrived quietly, unsure of where he belonged — and within hours, we knew he had found his forever home with us.
        </p>
        <p className="text-lg leading-relaxed">
          That first night, he jumped onto the bed and laid his head on Erin&rsquo;s chest. From that moment on, he never left our side.
          He wasn&rsquo;t just a dog — he was a healer, a companion, and the missing piece of our family.
        </p>
        <p className="text-lg leading-relaxed">
          Over time, Milo overcame his fears, passed his therapy dog exam, and developed a gift for connecting deeply with people.
          His most famous gesture, lying down and lifting his paw into someone&rsquo;s hand, became the way he expressed his love — and his only goal was to be your friend.
        </p>

        <div className="text-center">
          <Image
            src="/IMG_6110.jpeg"
            alt="Milo, Erin, and Mia"
            width={1200}
            height={0}
            className="mx-auto rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[60%]"
            priority
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Starting from left: Milo, Erin, and Mia on one of our final walks together.
          </p>
        </div>

        {/* Gift to You */}
        <h2 id="about-final-gift" className="text-2xl font-semibold scroll-mt-24">His Final Gift To Us – Our Gift To You</h2>
        <p className="text-lg leading-relaxed">
          In November of 2024, Milo was diagnosed with cancer. We spent every day of his final months making him feel cherished.
          We cooked for him, stayed by his side, and soaked in every quiet moment. On December 21st, Milo passed peacefully in Erin&rsquo;s arms — the same way he entered our lives.
        </p>
        <p className="text-lg leading-relaxed">
          Milo&rsquo;s life was about connection, comfort, and love. This app — Petunia — is about exactly that. It&rsquo;s our way of continuing what he started:
          making people feel seen, supported, and never alone in the world of pet care.
        </p>
        <p className="text-lg leading-relaxed">
          Here at Petunia, we know how much of yourselves — and your personal lives — you give up to care for animals.
          It&rsquo;s time there was a company that truly understands not just the depth of that sacrifice, but the needs of those doing this extraordinary work around the world.
          We&rsquo;re not just building a business that supports your needs — we want you to feel like you are our friend.
        </p>

        <ul className="list-disc list-inside space-y-2 text-lg text-left sm:text-center px-4 sm:px-0">
          <li>For pet businesses: a tool to operate with ease and connect with their clients.</li>
          <li>For pet owners: a place to organize, track, and protect what matters most — especially your time with the ones you love.</li>
          <li>For every animal lover: a community that listens and evolves with your needs.</li>
        </ul>

        {/* Petunia Section */}
        <h2 id="about-petunia" className="text-2xl font-semibold scroll-mt-24">A New Chapter: Meet Petunia</h2>
        <p className="text-lg leading-relaxed">
          After Milo passed, our hearts felt empty — but love has a way of finding its way back in. Not long after, we welcomed a new dog into our family.
          Her name is Petunia. From the moment she arrived, she brought with her a gentle spirit, a sense of calm, and a new kind of hope.
        </p>
        <p className="text-lg leading-relaxed">
          It only felt right that we name this app after her — a symbol of continuity, love, and new beginnings.
          Petunia represents the future, the families yet to be touched, and the stories still being written.
        </p>

        <div className="text-center">
          <Image
            src="/RachelRowland-59.jpg"
            alt="Petunia and Mia"
            width={1200}
            height={0}
            className="mx-auto rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[60%]"
            priority
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Petunia (left) and Mia (right) — the next generation of love.
          </p>
        </div>

        {/* Closing Note */}
        <p id="about-closing" className="text-lg mt-10 italic text-[#444] leading-relaxed scroll-mt-24">
          Thank you for visiting our page. Whether you&rsquo;re a business owner trying to build something meaningful,
          or a pet parent looking for connection, we hope Milo&rsquo;s story creates a feeling of love that will stay with you forever.
          <br /><br />
          He wasn&rsquo;t just a dog. He was a reminder that loyalty still matters — and that love, real lasting love, is worth building around.
          <br /><br />
          That&rsquo;s what Petunia is. And we&rsquo;re grateful you&rsquo;re here.
        </p>
      </div>
    </main>
  );
}
