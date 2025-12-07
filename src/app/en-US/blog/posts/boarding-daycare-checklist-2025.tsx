'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingDaycareChecklist2025() {
  const locale = useLocale();

  const title = 'What to Pack for Dog Boarding and Daycare (Owner’s Checklist)';
  const date = 'October 13, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare Facilities',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Packing the right essentials for your dog's boarding or daycare stay can make the experience calmer and safer. Use this printable checklist of must-bring items for food, comfort, identification, and medical care."
        />
        <meta name="robots" content="all" />
      </Head>

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

        {/* INTRO */}
        <p className="text-lg mb-4">
          Preparing for your dog’s boarding or daycare stay is a little like packing for a
          toddler’s overnight trip—you want comfort, consistency, and safety covered.
          Whether it’s your dog’s first visit or a routine stay, a well-packed bag helps
          staff provide the best care possible and helps your pup feel right at home.
        </p>

        <p className="mb-6">
          This comprehensive packing checklist is built on input from professional
          boarding and daycare facilities, veterinarians, and seasoned dog owners. Feel
          free to print or download the checklist below—perfect for pre-travel
          organization and peace of mind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Bring your dog’s regular food in labeled, portioned containers.</li>
          <li>Include emergency contact info, vet details, and medication instructions.</li>
          <li>Pack comfort items like a blanket or toy to reduce stress.</li>
          <li>Never forget identification tags and proof of vaccinations.</li>
          <li>Leave unsafe or irreplaceable items at home.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — Why Packing Matters
        </h2>
        <p className="mb-4">
          Boarding and daycare environments are carefully managed, but every dog’s comfort
          level is unique. Consistency in food, bedding, and scent helps reduce stress
          hormones and maintains digestive and emotional stability during their stay
          (American Kennel Club, 2024). Packing the right items minimizes adjustment time
          and helps staff replicate your home routine accurately.
        </p>

        <p className="mb-6">
          A detailed checklist also protects against misunderstandings—labeling everything
          ensures items don’t get mixed up in shared spaces or laundry cycles.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — The Essential Boarding & Daycare Packing Checklist
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Items to Pack</th>
                <th className="p-2 text-left">Why It’s Important</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Food & Treats</td>
                <td className="p-2">
                  Pre-measured meals, labeled containers, and a few comfort treats
                </td>
                <td className="p-2">Prevents digestive upset and maintains routine.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Medications</td>
                <td className="p-2">
                  Labeled bottles with dosage and schedule, plus written instructions
                </td>
                <td className="p-2">Ensures staff administer safely and on time.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Bedding</td>
                <td className="p-2">Blanket or small bed with familiar scent</td>
                <td className="p-2">Provides comfort and reassurance in new settings.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Leash & Collar</td>
                <td className="p-2">Durable leash and collar with ID tags</td>
                <td className="p-2">Essential for safety and identification.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Toys</td>
                <td className="p-2">
                  One or two washable toys (avoid sentimental or small choking hazards)
                </td>
                <td className="p-2">Keeps dogs mentally engaged and relaxed.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Health Records</td>
                <td className="p-2">Proof of vaccinations, emergency vet contact</td>
                <td className="p-2">Required for admission and emergencies.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Comfort Items</td>
                <td className="p-2">
                  T-shirt or towel that smells like home (optional but calming)
                </td>
                <td className="p-2">Helps with decompression during rest times.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Download or print the full checklist below to keep in your travel folder or post
          on your fridge before drop-off days.
        </p>

        <div className="border border-[#d9cfc2] rounded-xl p-4 bg-[#f5f2ed] mb-8">
          <h3 className="text-xl font-semibold mb-3">
            🐾 Printable Packing Checklist (PDF)
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
            <li>✔ Dog food (labeled and portioned)</li>
            <li>✔ Medication and dosage notes</li>
            <li>✔ Bed or blanket</li>
            <li>✔ Leash, collar, and tags</li>
            <li>✔ Favorite toy</li>
            <li>✔ Vet contact and vaccination proof</li>
            <li>✔ Comfort item from home</li>
            <li>✔ Emergency contact info</li>
          </ul>
          <p className="text-sm">
            <a
              href="/downloads/petunia-dog-boarding-checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2c4a30] font-medium hover:opacity-80"
            >
              Download PDF Checklist →
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — What Not to Bring
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            ❌ Large beds or bulky crates (facilities provide their own sleeping setups).
          </li>
          <li>❌ Rawhide chews or bones that splinter easily.</li>
          <li>❌ Expensive toys or sentimental items—loss or damage risk is high.</li>
          <li>❌ Glass containers or non-sealable bags for food.</li>
          <li>
            ❌ Personal bowls—unless your dog requires a specific slow-feeder or medical
            dish.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Preparing for Drop-Off Day
        </h2>
        <p className="mb-4">
          The morning of drop-off sets the tone for your dog’s experience. Keep it calm,
          structured, and positive:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Exercise lightly before arrival—avoid over-tiring or over-exciting.</li>
          <li>Feed a normal meal (unless instructed otherwise).</li>
          <li>Double-check medication timing with staff.</li>
          <li>Label your bag and confirm pickup time and emergency contacts.</li>
        </ul>

        <p className="mb-6">
          Avoid emotional goodbyes. Dogs sense our tone; calm confidence helps them settle
          faster into the new routine.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — Tips for Smooth Returns
        </h2>
        <p className="mb-4">
          When you pick your dog up, they may be tired from stimulation or need quiet time.
          Offer hydration, rest, and a familiar space before returning to full activity.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Allow decompression days post-boarding—especially after long stays.</li>
          <li>
            Monitor for appetite or behavior changes; mild fatigue is normal for 24 hours.
          </li>
          <li>Reconfirm vaccination due dates before your next visit.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Final Takeaway
        </h2>
        <p className="mb-6">
          Packing with care transforms your dog’s daycare or boarding stay from a basic
          service into a positive, stress-free experience. A few labeled essentials ensure
          safety, comfort, and seamless communication between owners and caregivers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Kennel Club. (2024). <em>Preparing for Your Dog’s Boarding Stay.</em>
          </li>
          <li>
            Pet Care Services Association. (2023). <em>Boarding Intake and Owner
            Communication Standards.</em>
          </li>
          <li>
            American Veterinary Medical Association. (2023). <em>Travel and Boarding Safety
            Guidelines for Companion Animals.</em>
          </li>
          <li>
            Fear Free Pets. (2024). <em>Reducing Canine Stress During Transitions and
            Travel.</em>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes and does not replace veterinary advice.
          Always confirm your boarding or daycare facility’s specific policies before
          drop-off, and update vaccination and medication details regularly.
        </p>
      </main>
    </>
  );
}
