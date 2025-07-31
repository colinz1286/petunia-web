'use client';

import Link from 'next/link';

export default function DogBoardingSoftwarePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-5 bg-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-[#f0f7f2] rounded-xl shadow-sm text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] leading-tight mb-4">
          This Isn&#39;t Software. It&#39;s Sanity.
        </h1>
        <p className="text-base sm:text-lg text-gray-800 max-w-md mx-auto">
          Imagine a world where no client is forgotten, no dog file misplaced, and no booking missed.
          Petunia turns the chaos of daily operations into something beautiful — calm, reliable, and human.
        </p>
      </section>

      {/* What Is Dog Boarding Software? */}
      <section className="py-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2c4a30]">
          It&#39;s Not Just Software — It&#39;s Peace of Mind
        </h2>
        <p className="text-base leading-7 text-gray-700 max-w-md mx-auto">
          Dog boarding software isn&#39;t about tech. It&#39;s about trust. It&#39;s about waking up and knowing that every reservation, every reminder, every detail about every dog is right where it needs to be — no notebooks, no guesswork, no stress.
        </p>
        <p className="text-base leading-7 text-gray-700 mt-4 max-w-md mx-auto">
          Whether you&#39;re caring for ten dogs or a hundred, Petunia gives you a system that thinks like you do. It&#39;s not built for engineers. It&#39;s built for dog people.
        </p>
      </section>

      {/* Pricing Comparison */}
      <section className="py-8 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2c4a30]">
          The Truth About Software Pricing
        </h2>
        <div className="max-w-md mx-auto space-y-3 text-base leading-7 text-gray-700">
          <p>Competitor – $105/mo</p>
          <p>Competitor – $150/mo</p>
          <p>Competitor – $99.99/mo</p>
          <p>Competitor – $79.99/mo</p>
          <p>Competitor – $55/mo</p>
          <p className="font-bold text-green-700 text-lg pt-2">Petunia – $20/mo</p>
        </div>
        <div className="mt-6 max-w-md mx-auto text-base text-gray-700">
          <p>
            Servers aren&#39;t expensive. Storage isn&#39;t expensive. So why are other companies charging you so much?
          </p>
          <p className="mt-4 font-semibold text-[#2c4a30]">
            At Petunia, we charge $20 because that&#39;s what it should cost. We are charing you a price we think it should cost. Not charing you as much as we can get away with.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2c4a30]">
          Key Features to Look For in Dog Boarding Software
        </h2>
        <ul className="space-y-4 text-base leading-7 text-gray-700 list-disc list-inside text-left max-w-md mx-auto">
          <li><strong>Online Booking:</strong> Let clients reserve services 24/7 without phone calls or emails.</li>
          <li><strong>Client & Pet Profiles:</strong> Store vaccination records, feeding instructions, and emergency contacts.</li>
          <li><strong>Reservation Management:</strong> View, edit, and organize upcoming stays in one clean calendar view.</li>
          <li><strong>Automated Reminders:</strong> Reduce no-shows with automated texts and email confirmations.</li>
          <li><strong>Payments & Invoicing (coming soon):</strong> Accept deposits or payments online with detailed receipts and pricing flexibility.</li>
          <li><strong>Staff Scheduling (coming soon):</strong> Assign roles, track availability, and manage shift coverage with ease.</li>
          <li><strong>Mobile-Friendly Access:</strong> Manage your business on the go from any device.</li>
        </ul>
      </section>

      {/* Emotional Value Proposition */}
      <section className="py-8 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2c4a30]">
          Built for People Who Love Dogs — Not Dashboards
        </h2>
        <p className="text-base leading-7 text-gray-700 mb-4 max-w-md mx-auto">
          You didn&#39;t get into this business to answer emails and organize spreadsheets. You&#39;re here for wagging tails, loyal clients, and the feeling that everything&#39;s under control.
        </p>
        <p className="text-base leading-7 text-gray-700 max-w-md mx-auto">
          Petunia is for the boarding professional who wants to run smoother, communicate better, and sleep at night. The essentials are already here — and the future is already underway.
        </p>
      </section>

      {/* Simplicity Message */}
      <section className="py-8 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2c4a30]">
          Other Platforms Feel Like Work. Petunia Feels Like Breathing.
        </h2>
        <p className="text-base leading-7 text-gray-700 mb-4 max-w-md mx-auto">
          Most software asks you to learn it. Petunia learns you. No clunky menus. Just an interface so intuitive it disappears behind what really matters — the care, the people, the dogs.
        </p>
        <p className="text-base leading-7 text-gray-700 max-w-md mx-auto">
          It doesn&#39;t get in the way of your work. It helps focus on the important things.
        </p>
      </section>

      {/* How to Choose */}
      <section className="py-8 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2c4a30]">
          You&#39;re Not Choosing Software. You&#39;re Choosing a Way of Life.
        </h2>
        <p className="text-base leading-7 text-gray-700 mb-4 max-w-md mx-auto">
          The right platform doesn&#39;t just manage your day. It gives it back to you. That means fewer fires to put out, fewer tasks to track, and more time doing what you actually care about.
        </p>
        <ul className="list-disc list-inside space-y-3 text-base leading-7 text-gray-700 text-left max-w-md mx-auto">
          <li>It&#39;s with you everywhere that your clients need you to be.</li>
          <li>It remembers every dog, every note, every client detail — so you don&#39;t have to.</li>
          <li>It&#39;s priced like a tool, not a tax on your hard earned money.</li>
          <li>It grows with you — not past you.</li>
          <li>And above all, it makes your life simpler.</li>
        </ul>
        <p className="text-base leading-7 text-gray-700 mt-4 max-w-md mx-auto">
          That&#39;s why we built Petunia. Because the best part of your day shouldn&#39;t be figuring out your system. It should be using it and moving on.
        </p>
      </section>

      {/* CTA */}
      <section className="py-8 border-t border-gray-200 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2c4a30]">
          Ready to Modernize Your Boarding Business?
        </h2>
        <p className="text-base text-gray-700 max-w-md mx-auto mb-6">
          Create your free Petunia account and see how simple it can be to manage dogs, clients, and your daily operations — all from one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            href="/en/createnewaccount"
            className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition text-center"
          >
            Get Started Free
          </Link>
          <Link
            href="/en/contact"
            className="border border-[#2c4a30] text-[#2c4a30] px-6 py-3 rounded-md hover:bg-[#f0f0f0] transition text-center"
          >
            Contact Our Team
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-[#2c4a30] mb-2">Visit Our Educational Blog</h3>
          <Link
            href="/en/blog"
            className="text-base text-blue-700 underline hover:text-blue-900"
          >
            Visit our free educational blog. This can be a helpful resource whether you are just starting out, or already a well established business. →
          </Link>
        </div>
      </section>
    </main>
  );
}
