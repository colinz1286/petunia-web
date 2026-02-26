'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CrocsBlogPost() {
  const locale = useLocale();

  const title = 'Are Crocs Safe to Wear at Dog Boarding & Daycare Facilities?';
  const date = 'January 3, 2024';
  const categories = ['boarding', 'sitter', 'walker'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        <p className="text-lg mb-4">
          When working in a dog boarding or daycare facility, staff footwear is more than just a fashion choice — it’s about comfort, safety, and functionality. One common question is:
        </p>

        <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4">
          “Are Crocs (shoes) allowed to be worn? Pros and cons.”
        </blockquote>

        <p className="text-lg mb-4">
          This article explores the pros and cons of wearing Crocs in a pet care environment, based on real-world experience from facilities, safety considerations, and the evolving needs of pet professionals.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Do Facilities Allow Crocs?</h2>
        <p className="mb-4">
          Many facilities — including ours — do allow Crocs, with precautions. Flip-flops are discouraged due to safety risks, but certain Crocs work well, especially for bathing dogs or cleaning. We’ve had no incidents, though tread can wear out over time and become slippery.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Pros of Wearing Crocs</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Waterproof and easy to clean</li>
          <li>Breathable and lightweight for long shifts</li>
          <li>Some models offer non-slip traction</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">⚠️ Cons and Safety Concerns</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Tread wears down and may become slick</li>
          <li>Lack of toe protection in most models</li>
          <li>Not OSHA-recommended in hazard zones</li>
          <li>Open holes can allow splashes or debris</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Industry Perspective</h2>
        <p className="mb-4">
          Many grooming and vet staff use Crocs, but often prefer closed-heel, slip-resistant styles. Peer discussions online show a split: some love the comfort and water resistance, while others prefer sneakers or waterproof clogs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Summary Table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm text-left border border-[#d9cfc2]">
            <thead className="bg-[#f6efe4]">
              <tr>
                <th className="p-2 border border-[#d9cfc2]">Footwear</th>
                <th className="p-2 border border-[#d9cfc2]">Pros</th>
                <th className="p-2 border border-[#d9cfc2]">Cons</th>
                <th className="p-2 border border-[#d9cfc2]">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#d9cfc2]">Non-slip Crocs</td>
                <td className="p-2 border border-[#d9cfc2]">Waterproof, breathable, easy to rinse</td>
                <td className="p-2 border border-[#d9cfc2]">Can wear down, not toe-protective</td>
                <td className="p-2 border border-[#d9cfc2]">Bathing, cleaning, wet areas</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#d9cfc2]">Tennis Shoes</td>
                <td className="p-2 border border-[#d9cfc2]">Supportive, safer traction</td>
                <td className="p-2 border border-[#d9cfc2]">Not waterproof, slower to dry</td>
                <td className="p-2 border border-[#d9cfc2]">Active shifts, dry work zones</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Final Thoughts</h2>
        <p className="mb-6">
          Crocs can be a practical footwear choice in pet care environments when used appropriately. Facilities should monitor tread wear, choose closed-heel designs, and allow flexibility while maintaining safety.
        </p>

        <p className="mb-6">
          <strong>Have questions or your own experience with Crocs in pet care?</strong>
          <br />
          We’d love to hear from you — email us at{' '}
          <a
            href="mailto:admin@petuniapets.com"
            className="underline text-[#2c4a30]"
          >
            admin@petuniapets.com
          </a>
          .
        </p>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
