'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HypoallergenicDogBreedsGuide() {
  const locale = useLocale();

  const title =
    'Which Dog Breeds Are Truly Hypoallergenic? A Helpful Guide for Families Seeking Low-Shedding Dogs';
  const date = 'November 22, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    food: 'Dog Food & Nutrition',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    breed_specific_guides: 'Breed-Specific Guides',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="A practical guide to hypoallergenic dog breeds, how allergies actually work, and which low-shedding breeds may be better for families sensitive to pet dander. Includes breed descriptions and tips for choosing a dog that fits your home and health needs."
        />
        <meta name="robots" content="all" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Tags */}
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

        {/* INTRO */}
        <p className="text-lg mb-4">
          Many families searching for a new dog hope to find a “hypoallergenic” breed—one that won’t
          trigger allergies or leave hair all over the house. But what does hypoallergenic actually
          mean, and do these dogs really exist? The short answer: some breeds shed far less and may
          reduce allergic reactions, but no dog is 100% allergy-proof.
        </p>

        <p className="mb-6">
          If you want a deeper understanding of how allergies work (and why no dog is completely
          hypoallergenic), we recommend reading our helpful guide:{' '}
          <a
            href="https://www.petuniapets.com/en/blog/what-does-hypoallergenic-mean"
            className="underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            What Does Hypoallergenic Mean?
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Are Hypoallergenic Dogs Real?</h2>
        <p className="mb-4">
          The term “hypoallergenic” usually refers to breeds that shed minimally and produce less
          dander—small skin particles that commonly trigger allergies. However, dogs also produce
          allergens in saliva and urine, meaning no dog is completely allergen-free.
        </p>
        <p className="mb-6">
          That said, some breeds are far more tolerable for allergy-sensitive families due to their
          coat type, grooming needs, and shedding frequency.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Breeds Commonly Considered Hypoallergenic
        </h2>
        <p className="mb-4">
          Below are the most well-known low-shedding breeds, along with a brief description of each
          to help families understand which dog may best fit their lifestyle.
        </p>

        {/* BREEDS LIST */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Poodle (All Sizes)</h3>
        <p className="mb-4">
          Poodles come in Toy, Miniature, and Standard sizes—all with a tightly curled coat that
          traps loose hair rather than shedding it. They are highly intelligent, active, and excellent
          family companions. Their coat requires regular grooming but is one of the most allergy-friendly.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Labradoodle &amp; Goldendoodle</h3>
        <p className="mb-4">
          These popular mixed breeds often inherit the Poodle’s low-shedding coat. However, coat
          type varies by breeder and lineage—some doodles shed very little, while others shed
          moderately. They are affectionate, energetic dogs that do best in active households.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Bichon Frise</h3>
        <p className="mb-4">
          Bichons have a soft, fluffy, curly coat that sheds minimally. They are cheerful,
          people-oriented dogs, great for apartment living and families with children. Regular
          grooming is essential to avoid matting.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Portuguese Water Dog</h3>
        <p className="mb-4">
          With a curly or wavy coat similar to a Poodle’s, the Portuguese Water Dog sheds very
          little and has a reputation for being highly compatible with allergy sufferers. They are
          athletic, water-loving dogs ideal for active families.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Schnauzer (Miniature, Standard, Giant)</h3>
        <p className="mb-4">
          All Schnauzer varieties have a wiry, low-shedding coat that produces far fewer allergens
          than heavily shedding breeds. They are smart, loyal, and make excellent watchdogs without
          excessive grooming demands.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Soft-Coated Wheaten Terrier</h3>
        <p className="mb-4">
          Wheatens have a silky, single-layer coat that sheds lightly and typically releases less
          dander. They are friendly, medium-energy dogs that fit well in family environments.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Yorkshire Terrier</h3>
        <p className="mb-4">
          Yorkies have a long, hair-like coat similar to human hair, making them one of the more
          allergy-friendly toy breeds. They are affectionate and adaptable, though regular brushing
          is necessary to prevent tangles.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Maltese</h3>
        <p className="mb-4">
          Maltese dogs have a long, silky coat that sheds very little. They are gentle, devoted
          companions with low exercise needs, perfect for quieter households.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Havanese</h3>
        <p className="mb-4">
          Known for their charming personality, Havanese shed minimally and are well suited for
          families, seniors, and apartment living. Their coat can be worn long or trimmed short.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Shih Tzu</h3>
        <p className="mb-4">
          Although they have a long double coat, Shih Tzus shed minimally because their hair grows
          continuously. With proper grooming, many allergy-prone families tolerate them well.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How to Choose a Dog If You Have Allergies
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Spend time with the breed before adopting—sensitivity varies person to person.</li>
          <li>Meet individual dogs; even within a breed, allergen levels differ.</li>
          <li>Look for single-coated, curly, or wiry coat types.</li>
          <li>Plan for professional grooming every 4–8 weeks.</li>
          <li>Use HEPA air purifiers and wash bedding frequently.</li>
          <li>Keep up with regular baths and brushing to reduce dander.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Breeds to Avoid If You Want Minimal Shedding
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Huskies &amp; Malamutes (heavy seasonal shedding)</li>
          <li>German Shepherds (year-round shedders)</li>
          <li>Labradors &amp; Golden Retrievers (dense double coats)</li>
          <li>Corgis (thick undercoat)</li>
          <li>Akitas &amp; Shibas (high dander output)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Bottom Line</h2>
        <p className="mb-10">
          Hypoallergenic dogs aren’t completely allergen-free—but many breeds shed so little that
          families with allergies can comfortably live with them. Meeting the dog in person,
          maintaining grooming routines, and choosing a low-shedding breed greatly increases your
          chances of finding the right fit.
        </p>

        {/* REFERENCES */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>

        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>American College of Allergy, Asthma &amp; Immunology (ACAAI)</li>
          <li>AKC breed coat type and shedding data</li>
          <li>
            Petunia article:{' '}
            <a
              href="https://www.petuniapets.com/en/blog/what-does-hypoallergenic-mean"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              What Does Hypoallergenic Mean?
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for informational purposes only and does not replace medical or allergy
          testing advice from healthcare professionals.
        </p>
      </main>
    </>
  );
}
