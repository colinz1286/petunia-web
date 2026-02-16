'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatDogsCanEatOnChristmas() {
  const locale = useLocale();

  const title =
    'What Can Dogs Eat on Christmas? Safe Holiday Foods, Portion Sizes, and What to Avoid';
  const date = 'December 22, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A practical Christmas guide to safe dog-friendly holiday foods, how much is okay by dog size, simple prep tips, and which festive ingredients to avoid to reduce vomiting, diarrhea, pancreatitis, and ER visits.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#portion-rules" className="underline hover:opacity-80">
                Portion Rules
              </a>
            </li>
            <li>
              <a href="#safe-christmas-foods" className="underline hover:opacity-80">
                Safe Christmas Foods
              </a>
            </li>
            <li>
              <a href="#how-to-prepare" className="underline hover:opacity-80">
                How to Prepare at Home
              </a>
            </li>
            <li>
              <a href="#new-foods-gi" className="underline hover:opacity-80">
                New Foods &amp; GI Upset
              </a>
            </li>
            <li>
              <a href="#what-to-avoid" className="underline hover:opacity-80">
                What to Avoid
              </a>
            </li>
            <li>
              <a href="#emergency-signs" className="underline hover:opacity-80">
                When It&rsquo;s an Emergency
              </a>
            </li>
            <li>
              <a href="#holiday-prevention" className="underline hover:opacity-80">
                Prevention Tips
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most dogs can safely enjoy small amounts of plain, low-fat &ldquo;holiday foods&rdquo; like
            skinless turkey, plain chicken, cooked carrots, green beans, plain sweet potato, or a
            spoonful of pure pumpkin. Keep portions modest, avoid rich/fatty scraps, and stay away
            from ingredients that are dangerous to dogs (like chocolate, grapes/raisins, onions/garlic,
            alcohol, and products sweetened with xylitol). If you want the safest approach, treat
            holiday add-ons as a small topper rather than a second meal.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Health note:</strong> This guide is educational and not a substitute for veterinary care.
            If your dog has a history of pancreatitis, inflammatory bowel disease, food allergies,
            diabetes, or kidney disease, talk with your veterinarian before sharing holiday foods.
          </div>
        </section>

        {/* PORTION RULES */}
        <section id="portion-rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Portion Rules That Keep Christmas Food Safe</h2>
          <p className="mb-4">
            The most common holiday problem is not the &ldquo;safe food&rdquo; itself. It&rsquo;s the portion,
            the fat content, and the number of different new foods introduced at once. A small amount
            of a plain, low-fat food is usually fine for a healthy dog, but a large serving of rich food
            can trigger vomiting, diarrhea, or even pancreatitis in some dogs. Veterinary resources
            describe pancreatitis as potentially triggered by a fatty meal in some cases.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">The simplest rule</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Keep holiday extras to about <strong>10% or less</strong> of your dog&rsquo;s total daily calories.
              </li>
              <li>
                Choose <strong>one</strong> new food at a time (not five different bite-sized surprises).
              </li>
              <li>
                Prefer <strong>plain, cooked, low-fat</strong> options (no skin, no gravy, no butter, no seasoning).
              </li>
            </ul>
            <p className="text-sm text-gray-700 mt-3">
              Why the 10% guideline matters: VCA notes that non-balanced toppers should generally stay
              under about 10% of calories to avoid unbalancing the diet over time.
            </p>
          </div>

          <h3 className="text-lg font-semibold mb-2">A practical &ldquo;safe amount&rdquo; guide by dog size</h3>
          <p className="mb-4">
            These are conservative, holiday-safe ranges for <strong>plain</strong> foods (like cooked turkey breast,
            plain sweet potato, or green beans). If your dog is tiny, senior, overweight, or has a sensitive
            stomach, stay at the low end.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Small dogs (under 15 lb):</strong> 1–2 tablespoons total of holiday add-ons for the day
            </li>
            <li>
              <strong>Medium dogs (15–50 lb):</strong> 2–4 tablespoons total of holiday add-ons for the day
            </li>
            <li>
              <strong>Large dogs (50–90 lb):</strong> 1/4 to 1/2 cup total of holiday add-ons for the day
            </li>
            <li>
              <strong>Giant breeds (90+ lb):</strong> 1/2 to 3/4 cup total of holiday add-ons for the day
            </li>
          </ul>
          <p className="text-sm text-gray-700">
            If you are unsure, go smaller. You can always offer another bite tomorrow. You cannot undo a
            holiday stomach upset tonight.
          </p>
        </section>

        {/* SAFE FOODS */}
        <section id="safe-christmas-foods" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe Christmas Foods for Dogs</h2>
          <p className="mb-4">
            Here are dog-friendly options that usually sit well when served plain and in small portions.
            Think of these as &ldquo;safe toppers&rdquo; for a meal, not a replacement for a complete and balanced dog diet.
          </p>

          <h3 className="text-lg font-semibold mb-2">Lean proteins</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Turkey breast (cooked, skinless, unseasoned):</strong> shred or dice; avoid skin and fatty dark meat
            </li>
            <li>
              <strong>Chicken breast (cooked, skinless, unseasoned):</strong> a simple fallback if turkey is seasoned
            </li>
            <li>
              <strong>White fish (plain, cooked):</strong> mild option for many sensitive dogs
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Gentle carbs and veggies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Plain sweet potato or yam (cooked):</strong> no sugar, butter, marshmallows, or spices
            </li>
            <li>
              <strong>Pure pumpkin:</strong> plain canned pumpkin (not pie filling) as a small topper
            </li>
            <li>
              <strong>Green beans:</strong> plain and cooked (or plain canned with no added salt if that is what you have)
            </li>
            <li>
              <strong>Carrots:</strong> cooked is easiest for many dogs to digest; raw is fine for some dogs but can be harder
            </li>
            <li>
              <strong>Plain rice:</strong> small amount as a bland option if the stomach is sensitive
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            If your dog has had pancreatitis before (or gets &ldquo;holiday diarrhea&rdquo; easily), consider reading our
            deeper guide on fatty foods and pancreatitis risk:{' '}
            <Link
              href={`/${locale}/blog/pancreatitis-and-fatty-foods-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Pancreatitis and High-Fat Foods in Dogs
            </Link>
            .
          </div>
        </section>

        {/* PREP */}
        <section id="how-to-prepare" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Prepare Dog-Safe Holiday Foods at Home</h2>
          <p className="mb-4">
            The goal is to reduce fat, remove unsafe parts, and keep things bland. Most holiday seasoning blends
            are the issue, not the turkey itself.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple prep rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Serve <strong>plain</strong> food: no garlic powder, onion powder, butter, salt-heavy rubs, or gravy.</li>
            <li>Remove <strong>skin</strong> and visible fat (skin is a common problem for stomachs).</li>
            <li>Avoid <strong>bones</strong> completely (cooked bones can splinter and cause serious injury).</li>
            <li>Cut food into <strong>pea-sized</strong> bites for small dogs to reduce choking risk.</li>
            <li>Use holiday foods as <strong>toppers</strong>, not a second dinner.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Easy &ldquo;Christmas bowl&rdquo; (balanced as a topper)</h3>
          <p className="mb-4">
            Combine a small amount of shredded plain turkey breast + a spoonful of plain sweet potato + a few
            green beans. Mix into your dog&rsquo;s regular meal. Keep the total topper portion within the size guide above.
          </p>

          <p className="text-sm text-gray-700">
            If you want to go deeper on why &ldquo;strings and wrappers&rdquo; are dangerous when dogs grab holiday items,
            see:{' '}
            <Link
              href={`/${locale}/blog/intestinal-blockage-dogs-symptoms`}
              className="underline font-medium hover:opacity-80"
            >
              Intestinal Blockages in Dogs
            </Link>
            .
          </p>
        </section>

        {/* GI UPSET */}
        <section id="new-foods-gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Can New Foods Cause Mild GI Upset? Yes, Sometimes</h2>
          <p className="mb-4">
            Even safe foods can cause mild stomach upset if they are new, fed in large amounts, or combined
            with multiple new items. A dog&rsquo;s GI tract is not always happy about a sudden holiday &ldquo;buffet,&rdquo;
            and it is common for owners to see short-lived soft stool after introducing something new.
          </p>

          <h3 className="text-lg font-semibold mb-2">What mild GI upset can look like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Softer stool for 12–24 hours</li>
            <li>A single episode of vomiting (especially if food was eaten quickly)</li>
            <li>Gassiness</li>
            <li>Decreased appetite for one meal</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">How to reduce the chance of stomach upset</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Offer a <strong>tiny test portion</strong> first (especially for sensitive dogs).</li>
            <li>Pick <strong>one</strong> new food and keep everything else normal.</li>
            <li>Skip rich items completely (fatty foods are a common holiday trigger for pancreatitis).</li>
            <li>Keep treats and extras consistent across the day (no constant grazing from guests).</li>
          </ul>

          <p className="mb-4">
            If your dog struggles with recurring GI issues, the gut can become sensitive to repeated dietary
            swings. We cover this pattern in more detail here:{' '}
            <Link
              href={`/${locale}/blog/gut-dysbiosis-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Gut Dysbiosis in Dogs
            </Link>
            .
          </p>
        </section>

        {/* AVOID */}
        <section id="what-to-avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Christmas Foods to Avoid (Even in Small Amounts)</h2>
          <p className="mb-4">
            Some holiday ingredients are not &ldquo;maybe&rdquo; foods. They are known hazards for dogs, and the safest choice
            is to keep them fully out of reach. The ASPCA and FDA list several common kitchen items that can be dangerous,
            including chocolate, grapes/raisins, onions/garlic, alcohol, and xylitol.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Avoid these holiday hazards</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Chocolate:</strong> can cause toxicity from methylxanthines like theobromine and caffeine.
              </li>
              <li>
                <strong>Xylitol:</strong> a sweetener in some sugar-free foods and dental products; can be dangerous to dogs.
              </li>
              <li>
                <strong>Grapes and raisins:</strong> can be associated with kidney failure; safest to avoid entirely.
              </li>
              <li>
                <strong>Onions and garlic (including powders):</strong> avoid in stuffing, sauces, and seasoning mixes.
              </li>
              <li>
                <strong>Alcohol:</strong> keep drinks and desserts out of reach.
              </li>
              <li>
                <strong>Cooked bones:</strong> splinter risk and potential GI injury or blockage.
              </li>
              <li>
                <strong>Fatty scraps (skin, drippings, gravy, fried foods):</strong> higher pancreatitis risk in some dogs.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700">
            If your dog is vomiting and you are trying to figure out whether it is a simple upset stomach or something that needs
            medication, this overview can help you think through common vet-prescribed GI meds and why they are used:{' '}
            <Link
              href={`/${locale}/blog/common-gi-medications-for-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Common GI Medications for Dogs
            </Link>
            .
          </p>
        </section>

        {/* EMERGENCY */}
        <section id="emergency-signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When It&rsquo;s an Emergency (Call Your Vet)</h2>
          <p className="mb-4">
            Around the holidays, owners often wait too long because they assume &ldquo;it&rsquo;s just a stomach bug.&rdquo;
            If your dog ate a known toxin (like chocolate or xylitol) or is showing serious symptoms, call your veterinarian
            or an emergency clinic right away. The ASPCA Poison Control Center specifically advises contacting a vet or poison
            control if you suspect your pet has eaten something harmful.
          </p>

          <h3 className="text-lg font-semibold mb-2">Seek urgent care if you see</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated vomiting or inability to keep water down</li>
            <li>Blood in vomit or stool, or black/tarry stool</li>
            <li>Severe lethargy, collapse, tremors, or seizures</li>
            <li>Distended abdomen, repeated retching, or obvious abdominal pain</li>
            <li>Suspected ingestion of chocolate, xylitol, grapes/raisins, onions/garlic, alcohol, or medication</li>
            <li>Vomiting with no stool passage and a history of chewing toys, wrappers, or string-like items</li>
          </ul>

          <p className="mb-4">
            If pancreatitis is a concern (especially after fatty foods), do not try to tough it out at home. Veterinary guidance
            notes pancreatitis can require prompt intervention.
          </p>
        </section>

        {/* PREVENTION */}
        <section id="holiday-prevention" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Holiday Prevention Tips That Prevent Most Accidents</h2>
          <p className="mb-4">
            The easiest way to keep Christmas safe is to reduce the number of opportunities for your dog to grab unsafe foods,
            wrappers, or dessert trays. A few small household rules make a big difference.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Guest-friendly rules (copy/paste)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Please do not feed the dog from the table.</strong> We are keeping portions small to prevent stomach upset.</li>
              <li><strong>No desserts.</strong> Chocolate and sugar-free products can be dangerous for dogs.</li>
              <li><strong>Trash stays secured.</strong> Leftovers, bones, foil, and wrappers go straight to a lidded bin.</li>
              <li><strong>One approved treat only.</strong> If you want to give a treat, please ask first.</li>
              <li><strong>Kids help by keeping plates high.</strong> Coffee tables and low surfaces are the danger zone.</li>
            </ul>
          </div>

          <p className="mb-4">
            If your dog is extra sensitive during holidays, it can help to keep meal timing and routine consistent and use a small
            plain topper rather than a full meal change. Consistency is often the difference between &ldquo;happy holiday&rdquo; and
            a midnight cleanup.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can I give my dog a full Christmas dinner instead of their regular food?</strong>
            <br />
            It is safer not to. A full meal replacement is more likely to cause GI upset or provide too much fat and salt.
            Use small portions as a topper and keep the regular diet as the main meal.
          </p>

          <p className="mb-3">
            <strong>Is turkey skin okay if it&rsquo;s only a little?</strong>
            <br />
            Many dogs tolerate it, but it is higher fat and more likely to trigger vomiting or pancreatitis in sensitive dogs.
            If you are choosing the safest path, skip skin and fatty drippings.
          </p>

          <p className="mb-3">
            <strong>Can my dog have stuffing?</strong>
            <br />
            Usually no. Stuffing often contains onions/garlic (or powders), butter, and high salt. The ASPCA lists onions and garlic
            among foods to avoid for pets.
          </p>

          <p className="mb-3">
            <strong>What if my dog already ate something unsafe?</strong>
            <br />
            Save the packaging (or recipe details) and call your veterinarian or an emergency clinic. If chocolate or xylitol is involved,
            treat it as urgent.
          </p>

          <p>
            <strong>Is a little vomiting after a new food always dangerous?</strong>
            <br />
            Not always, but repeated vomiting, lethargy, pain, blood, collapse, or any known toxin exposure should be treated urgently.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Veterinary References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              ASPCA: People Foods to Avoid Feeding Your Pets:{' '}
              <a
                href="https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets
              </a>{' '}
            </li>
            <li>
              FDA: Paws Off Xylitol; It&rsquo;s Dangerous for Dogs:{' '}
              <a
                href="https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs
              </a>{' '}
            </li>
            <li>
              FDA: Paws Off! Xylitol is Toxic to Dogs (symptoms overview):{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-toxic-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-toxic-dogs
              </a>{' '}
            </li>
            <li>
              VCA Hospitals: Pancreatitis in Dogs:{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs
              </a>{' '}
            </li>
            <li>
              Merck Veterinary Manual: Chocolate Toxicosis in Animals:{' '}
              <a
                href="https://www.merckvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.merckvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals
              </a>{' '}
            </li>
            <li>
              ASPCA Poison Control:{' '}
              <a
                href="https://www.aspca.org/pet-care/aspca-poison-control"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aspca.org/pet-care/aspca-poison-control
              </a>{' '}
            </li>
          </ul>
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
