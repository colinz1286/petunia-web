'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogFallAllergiesUSCanadaWithANZCallouts() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Dog Fall Allergies: U.S./Canada Guide with Australia/NZ Spring Callouts</title>
        <meta
          name="description"
          content="A veterinary-informed 2025 guide to dog fall allergies across the U.S. and Canada, with seasonal callouts for Australia and New Zealand. Learn symptom patterns, pollen calendars, home care that helps, and when to involve your veterinarian."
        />
        {/* House rule: robots=all */}
        <meta name="robots" content="all" />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Allergies</span>
          <span className="rounded-full border px-3 py-1 text-sm">Dermatology</span>
          <span className="rounded-full border px-3 py-1 text-sm">Seasonal Care</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Dog Fall Allergies: U.S./Canada Guide with Australia/NZ Spring Callouts
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Fall in North America often means ragweed, moldy leaves, indoor heat turning on, and itchy dogs. Across the
          Pacific, Australia and New Zealand are heading into spring with similar pollen surges and longer daylight.
          This guide translates veterinary dermatology best practices into clear, owner-friendly steps. You will learn
          how to read patterns, what home routines actually help, which products are worth discussing with your
          veterinarian, and when a deeper plan (like immunotherapy) makes sense. The goal is fewer flares, better
          comfort, and a sustainable routine you can keep up through the season.
        </p>

        {/* Anchor nav (explicit, no array mapping) */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#patterns" className="underline">How Fall Allergies Look in Dogs</a></li>
            <li><a href="#pollen" className="underline">Pollen &amp; Mold Calendars (U.S./Canada + AU/NZ)</a></li>
            <li><a href="#indoor" className="underline">The Indoor Factor: Heat, Dust Mites &amp; Damp</a></li>
            <li><a href="#home-care" className="underline">Home Care That Actually Helps</a></li>
            <li><a href="#meds" className="underline">Medications &amp; Topicals: What Vets Use</a></li>
            <li><a href="#immunotherapy" className="underline">When to Consider Immunotherapy</a></li>
            <li><a href="#fleas" className="underline">Why Flea Control Still Matters in Fall</a></li>
            <li><a href="#diet" className="underline">Is It Food? Separating Overlap from Allergy Seasons</a></li>
            <li><a href="#checklist" className="underline">SOP / Weekly Checklist</a></li>
            <li><a href="#region" className="underline">Regional Notes: U.S., Canada, Australia, New Zealand</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Fall flares in U.S./Canada are usually linked to ragweed, sagebrush, drying grasses, leaf-mold, and the
                switch to indoor heat. AU/NZ see similar patterns in spring.
              </li>
              <li>
                Classic signs: paw licking, face rubbing, red ears, belly rash, &ldquo;hot spots,&rdquo; and post-walk
                itch spikes. Dogs often get secondary ear or skin infections that amplify itch.
              </li>
              <li>
                Rinse-off routines, paw wipes, weekly baths, environmental hygiene, and year-round parasite prevention
                are the best home foundations. Many dogs also need vet-directed meds or topicals during peak weeks.
              </li>
              <li>
                If seasons repeat or meds alone aren&rsquo;t enough, ask your vet about allergen testing and
                immunotherapy to target the specific pollens/mites.
              </li>
            </ul>
          </div>
        </section>

        {/* Patterns */}
        <section id="patterns" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">How Fall Allergies Look in Dogs</h2>
          <p className="mb-4">
            Veterinarians don&rsquo;t rely on a single symptom; they look for patterns. In fall, dogs commonly show:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Paw &amp; face focus:</strong> licking/chewing paws; rubbing face on carpet or furniture.</li>
            <li><strong>Ear inflammation:</strong> head shaking, odor, redness; recurrent otitis is common.</li>
            <li><strong>Underside rash:</strong> armpits, groin, and belly with reddish or darkened skin.</li>
            <li><strong>Seasonal rhythm:</strong> flares tied to outdoor exposure, leaf piles, dry windy days.</li>
            <li><strong>Itch after walks:</strong> signs spike 30–120 minutes after returning inside.</li>
          </ul>
          <p className="mt-4">
            Overlap happens. Some dogs carry a spring + fall pattern, others morph into year-round itch as indoor
            dust-mite sensitivity grows. That&rsquo;s why a structured plan beats guesswork.
          </p>
        </section>

        {/* Pollen */}
        <section id="pollen" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Pollen &amp; Mold Calendars (U.S./Canada + AU/NZ)</h2>
          <p className="mb-4">
            No two cities are identical, but broad seasonal tendencies help you anticipate spikes:
          </p>
          <div className="rounded-lg border p-4 mb-4">
            <h3 className="mb-2 text-xl font-semibold">U.S./Canada (Northern Hemisphere, Fall)</h3>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Ragweed &amp; weed pollens:</strong> late August &rarr; October/November peak.</li>
              <li><strong>Leaf-mold:</strong> wet piles and composting leaves expand fungal spores.</li>
              <li><strong>Dry, windy days:</strong> pollen dispersal jumps; post-walk rinses help.</li>
              <li><strong>First frost:</strong> often ends weed pollen &mdash; but mold can linger.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Australia/New Zealand (Southern Hemisphere, Spring)</h3>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Grasses &amp; weeds:</strong> rising through spring, peaking late spring/early summer.</li>
              <li><strong>Windy fronts:</strong> coastal and plains regions see sharp pollen surges.</li>
              <li><strong>High UV + dry days:</strong> outdoor allergens cling to coats; quick rinse-offs help.</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Tip: Track local pollen reports (weather apps, allergy services). When levels spike, tighten routines
            (shorter walks on high-pollen afternoons, more rinses, indoor enrichment).
          </p>
        </section>

        {/* Indoor */}
        <section id="indoor" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">The Indoor Factor: Heat, Dust Mites &amp; Damp</h2>
          <p className="mb-4">
            Many fall flares accelerate when indoor heat kicks on. Warm, dry air irritates skin and stirs settled
            dust, while damp basements and bathrooms feed molds. Practical tweaks:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Change HVAC filters; consider a higher MERV rating if your system allows.</li>
            <li>Vacuum with a HEPA filter 2–3x per week; launder dog bedding weekly on hot.</li>
            <li>Manage humidity ~40–50% if possible; use dehumidifiers in damp areas.</li>
            <li>Keep sleeping areas off the floor and away from drafty vents.</li>
          </ul>
        </section>

        {/* Home care */}
        <section id="home-care" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Home Care That Actually Helps</h2>
          <p className="mb-4">
            The simplest routines often deliver the biggest gains. Build a consistent base so medications can work
            better at lower doses:
          </p>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Rinse-off routine after high-pollen outings</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Wipe paws, muzzle, and belly with a damp microfiber cloth; quick lukewarm rinse if heavily exposed.</li>
              <li>Pat dry thoroughly (moisture trapped between toes can feed yeast).</li>
              <li>Brush out dried plant bits; check armpits, groin, and ear margins.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Bathing cadence</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Weekly gentle baths during peak season; follow with a leave-on conditioner or mousse when advised.</li>
              <li>For recurrent infections, your vet may prescribe medicated shampoos/wipes (chlorhexidine, miconazole).</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Skin-barrier support</h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Balanced diet appropriate for life stage; discuss omega-3 (EPA/DHA) supplementation with your vet.</li>
              <li>Keep nails tidy; long nails change gait and increase paw irritation.</li>
              <li>Use soft cones or recovery collars temporarily if self-trauma is severe.</li>
            </ul>
          </div>
        </section>

        {/* Meds */}
        <section id="meds" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Medications &amp; Topicals: What Vets Use</h2>
          <p className="mb-4">
            Many dogs need pharmaceutical help during peak weeks. Your veterinarian may recommend:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Anti-itch agents:</strong> short steroid tapers for acute flares; longer plans may use oclacitinib,
              lokivetmab, or ciclosporin depending on severity and co-morbidities.
            </li>
            <li>
              <strong>Topical therapy:</strong> medicated shampoos/conditioners; antimicrobial/antifungal wipes for paws,
              chin, and skin folds.
            </li>
            <li>
              <strong>Ear care:</strong> cleaning solutions, steroid/antimicrobial drops for recurrent otitis.
            </li>
            <li>
              <strong>Antimicrobials:</strong> if secondary infection (bacterial/yeast) is confirmed on cytology.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            Medication choices, dosages, and duration are individualized. Always follow your veterinarian&rsquo;s advice.
          </p>
        </section>

        {/* Immunotherapy */}
        <section id="immunotherapy" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">When to Consider Immunotherapy</h2>
          <p className="mb-4">
            If your dog&rsquo;s allergy pattern repeats every year, or meds/topicals aren&rsquo;t enough, allergen-specific
            immunotherapy can lower sensitivity to identified pollens/mites. Steps typically include:
          </p>
          <ol className="list-inside list-decimal space-y-2">
            <li>Clinical workup to rule out parasites and infections; solid home routine in place.</li>
            <li>Allergy testing (intradermal or serum) to identify relevant allergens.</li>
            <li>Custom extract formulated as injections or sublingual drops; gradual dose build-up, then maintenance.</li>
          </ol>
          <p className="mt-4">
            Many dogs still need adjunct care in peak weeks, but overall itch and infection frequency often fall over
            months. Immunotherapy is the only modality that can modify the allergic threshold rather than just masking
            signs.
          </p>
        </section>

        {/* Fleas */}
        <section id="fleas" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Why Flea Control Still Matters in Fall</h2>
          <p className="mb-4">
            Even one flea bite can trigger a major flare in sensitive dogs (flea-allergy dermatitis). Adult fleas often
            ride into homes on warm pets while eggs/larvae persist in rugs and upholstery. Year-round preventatives for
            <em> every</em> pet in the household are the simplest insurance policy. Without this baseline, you can&rsquo;t
            judge if your fall plan is working.
          </p>
        </section>

        {/* Diet */}
        <section id="diet" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Is It Food? Separating Overlap from Allergy Seasons</h2>
          <p className="mb-4">
            Seasonal itch points toward environmental triggers, but food allergy can coexist. If your dog has strong
            ear involvement year-round or shows nonseasonal signs, talk to your veterinarian about whether a properly
            run elimination diet (8–12 weeks, then a planned challenge) is appropriate &mdash; preferably after any
            active skin/ear infections are treated.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">SOP / Weekly Checklist</h2>
          <div className="rounded-lg border p-4">
            <ol className="list-inside list-decimal space-y-3">
              <li><strong>Parasite prevention</strong> confirmed for all pets in the home.</li>
              <li><strong>Pollen tracking:</strong> screenshot local reports; tighten routines on spike days.</li>
              <li><strong>Walk plan:</strong> shorter outdoor windows on dry windy afternoons; rinse-off on return.</li>
              <li><strong>Bathing:</strong> weekly gentle bath; apply leave-on conditioner if advised.</li>
              <li><strong>Paw care:</strong> daily wipe; inspect for redness, sweat-gland scabs, or yeast odor.</li>
              <li><strong>Indoor hygiene:</strong> HEPA vacuum 2–3x/week; hot-wash bedding; swap HVAC filters.</li>
              <li><strong>Ear check:</strong> clean as instructed; if odor/black debris returns, call your vet.</li>
              <li><strong>Symptom log:</strong> 0–10 itch score, photos of hot spots, ear score, product notes.</li>
              <li><strong>Vet plan:</strong> ensure you have refills before holiday weekends and travel.</li>
            </ol>
          </div>
        </section>

        {/* Region */}
        <section id="region" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Regional Notes: U.S., Canada, Australia, New Zealand</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>United States:</strong> Ragweed drives much of the fall spike east of the Rockies; leaf-mold after
              rain is a common second hit. Indoor heat &rarr; dry skin &amp; dust stirs up early.
            </li>
            <li>
              <strong>Canada:</strong> Weed pollens in southern provinces mirror northern U.S.; coastal dampness sustains
              mold. First hard frost often ends peak pollen but not indoor triggers.
            </li>
            <li>
              <strong>Australia:</strong> Spring grass pollens rise; windy fronts &amp; dry days increase exposure. Rinse-off
              routines and paw care are especially helpful after park runs.
            </li>
            <li>
              <strong>New Zealand:</strong> Similar spring pattern; microclimates matter (windy plains vs. damp coastal).
              Track local pollen advisories for timing.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can I use human antihistamines for my dog?</summary>
            <p className="mt-2">
              Some are used in dogs, but dosing varies and many aren&rsquo;t very effective alone for moderate/severe
              itch. Always ask your veterinarian before giving any medication.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How long does a fall flare usually last?</summary>
            <p className="mt-2">
              Many dogs improve after the first hard frost, but mold, dust mites, and indoor dryness can sustain itch.
              Think in terms of a seasonal plan rather than a single fix.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Do air purifiers help?</summary>
            <p className="mt-2">
              HEPA filtration can reduce airborne particles indoors; it&rsquo;s most effective combined with laundry,
              vacuuming, and pet rinse-offs after outdoor exposure.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">My dog&rsquo;s ears keep flaring. What should I do?</summary>
            <p className="mt-2">
              Recurrent otitis is common with environmental allergy. Prompt vet care, ear cytology, appropriate drops,
              and maintenance cleaning are key. Don&rsquo;t wait; ear infections quickly worsen comfort.
            </p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>American Veterinary Medical Association (AVMA) allergy and dermatology resources.</li>
            <li>World Small Animal Veterinary Association (WSAVA) guidelines on allergic skin disease.</li>
            <li>Royal College of Veterinary Surgeons (RCVS) owner-facing allergy summaries.</li>
            <li>Regional pollen/mold surveillance from meteorological services and allergy networks.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care. If your dog is itchy,
            painful, or developing sores, consult your veterinarian promptly.
          </p>
        </section>

        <div className="mt-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-block rounded-xl border px-4 py-2 font-semibold underline"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}