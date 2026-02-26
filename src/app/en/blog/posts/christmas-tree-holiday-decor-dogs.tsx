'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ChristmasTreeHolidayDecorDogs() {
  const locale = useLocale();

  const title =
    'Christmas Tree & Holiday Decor Dangers for Dogs: Tinsel, Ornaments, Tree Water, and What to Do';
  const date = 'December 22, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key] ?? key}
            </span>
          ))}
        </div>

        {/* Anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#why-trees-risky" className="underline hover:opacity-80">Why Trees Are Risky</a></li>
            <li><a href="#tinsel-ribbon" className="underline hover:opacity-80">Tinsel &amp; Ribbon</a></li>
            <li><a href="#ornaments-hooks" className="underline hover:opacity-80">Ornaments &amp; Hooks</a></li>
            <li><a href="#tree-water" className="underline hover:opacity-80">Tree Water</a></li>
            <li><a href="#lights-cords" className="underline hover:opacity-80">Lights &amp; Cords</a></li>
            <li><a href="#holiday-plants" className="underline hover:opacity-80">Holiday Plants</a></li>
            <li><a href="#symptoms" className="underline hover:opacity-80">Symptoms</a></li>
            <li><a href="#when-to-act" className="underline hover:opacity-80">When to Seek Help</a></li>
            <li><a href="#prevention" className="underline hover:opacity-80">Prevention</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Christmas trees and holiday decor create multiple ingestion and injury risks for dogs,
            especially tinsel, ribbon, ornament hooks, tree water, electrical cords, and decorative plants.
            Many problems happen quietly and escalate overnight. If your dog swallows string-like items,
            sharp objects, batteries, or shows repeated vomiting, pain, lethargy, or neurological signs,
            seek veterinary care promptly.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line:</strong> Tree-related emergencies are often preventable with a few physical
            barriers and early symptom recognition.
          </div>
        </section>

        {/* WHY RISKY */}
        <section id="why-trees-risky" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Christmas Trees Are So Tempting (and Dangerous)</h2>
          <p className="mb-4">
            To a dog, a Christmas tree is not decor. It is a new, exciting object that smells like outdoors,
            food, and human activity. Ornaments move, lights sparkle, and many decorations are at nose or mouth
            level. Add wrapping paper and food smells, and the risk increases significantly.
          </p>
          <p className="mb-4">
            The biggest dangers fall into three categories: foreign-body ingestion, electrical injury,
            and mild-to-severe toxicity from plants or water additives.
          </p>
        </section>

        {/* TINSEL */}
        <section id="tinsel-ribbon" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Tinsel, Ribbon, and String-Like Decorations</h2>
          <p className="mb-4">
            Tinsel and ribbon are among the most dangerous holiday items for dogs. These materials are shiny,
            lightweight, and easy to swallow. Once ingested, they can act like a rope inside the intestines,
            bunching the gut and causing serious injury.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tinsel (metallic or plastic)</li>
            <li>Curling ribbon and bows</li>
            <li>String lights with exposed wires</li>
            <li>Twine from tree skirts or decor</li>
          </ul>
          <p className="mb-4">
            Never pull ribbon or string from your dog’s mouth or rear end. This can cause internal damage.
            Secure the area and contact a veterinarian.
          </p>
        </section>

        {/* ORNAMENTS */}
        <section id="ornaments-hooks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ornaments, Hooks, and Fragile Decorations</h2>
          <p className="mb-4">
            Ornaments break easily and often shatter into sharp fragments. Metal hooks can be swallowed
            whole. Even plastic ornaments can splinter or lodge in the throat.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Glass ornaments (cut risk)</li>
            <li>Metal hooks and hangers</li>
            <li>Wooden or painted decorations</li>
            <li>Scented ornaments</li>
          </ul>
          <p className="mb-4">
            Keep fragile or hook-hung ornaments off lower branches if you have a curious dog.
          </p>
        </section>

        {/* TREE WATER */}
        <section id="tree-water" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Christmas Tree Water</h2>
          <p className="mb-4">
            Tree water often contains sap, bacteria, fertilizer residue, or preservative products.
            Dogs may drink it because it smells interesting, especially if their regular water bowl
            is empty.
          </p>
          <p className="mb-4">
            Even plain tree water can cause stomach upset. Additives increase risk. Cover the tree stand
            or block access completely.
          </p>
        </section>

        {/* LIGHTS */}
        <section id="lights-cords" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lights, Cords, and Electrical Hazards</h2>
          <p className="mb-4">
            Electrical cords can cause mouth burns, shock, or secondary injuries if chewed. Puppies
            and young dogs are at higher risk.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>String lights</li>
            <li>Extension cords</li>
            <li>Timer plugs and adapters</li>
          </ul>
          <p className="mb-4">
            Use cord covers, tape cords out of reach, and unplug decorations when unsupervised.
          </p>
        </section>

        {/* PLANTS */}
        <section id="holiday-plants" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Holiday Plants That Can Cause Problems</h2>
          <p className="mb-4">
            Several traditional holiday plants can cause irritation or illness if chewed or swallowed.
            Severity varies depending on the plant and amount.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Poinsettias</li>
            <li>Mistletoe</li>
            <li>Holly</li>
            <li>Amaryllis</li>
            <li>Lilies (especially dangerous for cats, still best kept away from dogs)</li>
          </ul>
          <p className="mb-4">
            Keep plants out of reach or choose artificial alternatives if your dog chews.
          </p>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs and Symptoms to Watch For</h2>
          <h3 className="text-lg font-semibold mb-2">Digestive signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Vomiting or repeated retching</li>
            <li>Diarrhea</li>
            <li>Loss of appetite</li>
            <li>Abdominal pain or bloating</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Foreign-body warning signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated vomiting after eating or drinking</li>
            <li>No stool or straining</li>
            <li>Lethargy or restlessness</li>
            <li>Whining or guarding the belly</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Neurological or urgent signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tremors or seizures</li>
            <li>Collapse or weakness</li>
            <li>Burns or bleeding in the mouth</li>
          </ul>
        </section>

        {/* WHEN TO ACT */}
        <section id="when-to-act" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Seek Emergency Care vs Monitor</h2>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Seek emergency care immediately if:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your dog swallowed ribbon, string, hooks, batteries, or glass</li>
              <li>There is repeated vomiting or inability to keep water down</li>
              <li>You see severe lethargy, collapse, or seizures</li>
              <li>Your dog chewed electrical cords and has mouth burns</li>
            </ul>
          </div>

          <p className="mb-4">
            Monitoring may be reasonable only if the exposure was minimal, your dog is acting normal,
            and no high-risk item was involved.
          </p>
        </section>

        {/* PREVENTION */}
        <section id="prevention" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">How to Christmas-Proof Your Tree and Decor</h2>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Skip tinsel entirely</li>
            <li>Use shatterproof ornaments on lower branches</li>
            <li>Cover or block access to tree water</li>
            <li>Secure cords and unplug when unsupervised</li>
            <li>Pick up wrapping materials immediately</li>
          </ul>

          <p className="mb-4">
            For related holiday risks, see:{' '}
            <Link
              href={`/${locale}/blog/holiday-ingestion-risks-dogs-christmas`}
              className="underline font-medium hover:opacity-80"
            >
              Holiday Ingestion Risks for Dogs
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is artificial tinsel safer than metallic tinsel?</strong><br />
            No. Any string-like material poses a risk if swallowed.
          </p>

          <p className="mb-3">
            <strong>What if my dog only licked tree water?</strong><br />
            Mild stomach upset is possible. Monitor closely and block access.
          </p>

          <p>
            <strong>Can I still have a Christmas tree with a dog?</strong><br />
            Yes. Physical barriers and thoughtful decoration placement prevent most accidents.
          </p>
        </section>

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
