'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ChristmasFoodsDogsShouldNotEat() {
  const locale = useLocale();

  const title =
    'Christmas Foods Dogs Should Not Eat: Holiday Hazards, Symptoms, and What to Do';
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
    'A practical Christmas safety guide to the foods and ingredients that are dangerous for dogs, why they are risky, common holiday symptoms to watch for, and what to do right away to avoid ER visits.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/christmas-foods-dogs-should-not-eat`}
        />
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
              <a href="#why-holidays-are-risky" className="underline hover:opacity-80">
                Why Holidays Are Risky
              </a>
            </li>
            <li>
              <a href="#top-holiday-food-hazards" className="underline hover:opacity-80">
                Top Food Hazards
              </a>
            </li>
            <li>
              <a href="#hidden-ingredients" className="underline hover:opacity-80">
                Hidden Ingredients
              </a>
            </li>
            <li>
              <a href="#bones-trash-wrappers" className="underline hover:opacity-80">
                Bones, Trash, Wrappers
              </a>
            </li>
            <li>
              <a href="#symptoms-timeline" className="underline hover:opacity-80">
                Symptoms &amp; Timeline
              </a>
            </li>
            <li>
              <a href="#what-to-do" className="underline hover:opacity-80">
                What to Do Right Away
              </a>
            </li>
            <li>
              <a href="#prevention-plan" className="underline hover:opacity-80">
                Prevention Plan
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
            The biggest Christmas food dangers for dogs are familiar, but they show up in
            surprising places: chocolate, grapes and raisins, onions and garlic (including powders),
            alcohol, and products containing xylitol. Fatty scraps (like turkey skin, drippings, and
            gravy) can also trigger serious GI problems in some dogs, including pancreatitis. Keep
            dessert tables, trash, and bones out of reach, and treat any known toxin exposure as urgent.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick reminder:</strong> If you suspect ingestion of a toxic food, save the packaging,
            estimate how much was eaten, and call your veterinarian or an emergency clinic right away.
            If you need poison guidance fast, the ASPCA lists a poison control contact and advises getting
            help when a pet eats harmful foods.
          </div>
        </section>

        {/* WHY HOLIDAYS ARE RISKY */}
        <section id="why-holidays-are-risky" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Christmas Is a High-Risk Time for Food Accidents</h2>
          <p className="mb-4">
            Most holiday emergencies happen for two reasons: (1) dogs get access to rich food that
            is normally off-limits, and (2) well-meaning guests share a bite without realizing what
            is inside it. During Christmas week, many homes have candy bowls, charcuterie boards,
            baked goods, and cooking prep happening all day. That means more chances for a dog to
            grab something unsafe.
          </p>
          <p className="mb-4">
            A third factor is &ldquo;hidden ingredients.&rdquo; Dogs do not necessarily get sick from the
            plain turkey. They get sick from the garlic powder in the rub, the onion in the stuffing,
            the butter in the mash, or the fatty drippings poured over everything.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-lg font-semibold mb-2">The holiday rule that prevents most problems</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Assume any seasoned, sauced, or baked holiday food is unsafe unless you know every ingredient.</li>
              <li>Anything sweet or sugar-free is a red flag until you confirm ingredients.</li>
              <li>Fatty scraps and greasy leftovers are common triggers for vomiting and diarrhea.</li>
              <li>Trash is a bigger risk than the dinner plate (bones, foil, wrappers, and leftovers).</li>
            </ul>
          </div>
        </section>

        {/* TOP HAZARDS */}
        <section id="top-holiday-food-hazards" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Christmas Foods and Treats That Are Dangerous for Dogs</h2>
          <p className="mb-4">
            This section covers the most common holiday hazards. Some of these are toxic foods, while others
            are &ldquo;high-risk&rdquo; because they can cause pancreatitis, choking, or intestinal obstruction.
            The ASPCA lists multiple people foods to avoid for pets, including chocolate, grapes and raisins,
            onions and garlic, alcohol, and products containing xylitol.
          </p>

          <h3 className="text-lg font-semibold mb-2">Chocolate and cocoa desserts</h3>
          <p className="mb-4">
            Chocolate toxicity is a classic holiday emergency because it is everywhere in December.
            The Merck Veterinary Manual explains that chocolate contains methylxanthines (notably theobromine
            and caffeine) that can cause serious clinical signs in animals.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Brownies, cookies, cocoa bombs, hot cocoa mix, chocolate bars, truffles</li>
            <li>Chocolate-covered pretzels and chocolate gift tins</li>
            <li>Dark chocolate and baking chocolate are typically more concentrated than milk chocolate</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Grapes and raisins</h3>
          <p className="mb-4">
            Grapes and raisins show up in fruitcakes, trail mixes, snack boards, and baked goods.
            They are widely listed by veterinary and poison resources as foods to avoid for dogs.
            Because the response can be unpredictable, the safest approach is zero exposure.
          </p>

          <h3 className="text-lg font-semibold mb-2">Onions and garlic (including powders)</h3>
          <p className="mb-4">
            Onion and garlic are common in stuffing, gravy, rubs, and soups. They can also be present as
            onion powder or garlic powder, which is easy to miss on a label. The ASPCA includes onions
            and garlic on its list of people foods to avoid feeding pets.
          </p>

          <h3 className="text-lg font-semibold mb-2">Alcohol and boozy desserts</h3>
          <p className="mb-4">
            Alcohol can appear in drinks left within reach and in desserts made with spirits.
            The ASPCA lists alcohol as a food item to avoid for pets.
          </p>

          <h3 className="text-lg font-semibold mb-2">Sugar-free products containing xylitol</h3>
          <p className="mb-4">
            Xylitol is a sweetener that can be found in some sugar-free gums, candies, baked goods,
            and peanut butters. The FDA warns that xylitol is dangerous for dogs and describes symptoms
            that can include vomiting and signs related to low blood sugar.
          </p>
        </section>

        {/* HIDDEN INGREDIENTS */}
        <section id="hidden-ingredients" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hidden Holiday Ingredients That Surprise Owners</h2>
          <p className="mb-4">
            Many owners do not intentionally feed a dog &ldquo;bad food.&rdquo; Instead, the dog gets a bite of something
            that seems harmless, but contains unsafe ingredients. This is why holiday sharing is tricky:
            you may not know what is in the dish.
          </p>

          <h3 className="text-lg font-semibold mb-2">The most common hidden problems</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Seasoning blends:</strong> onion powder and garlic powder are common in rubs, gravies, and stuffing mixes
            </li>
            <li>
              <strong>Rich fats:</strong> butter, bacon grease, pan drippings, turkey skin, and cream-based sauces
            </li>
            <li>
              <strong>Nuts:</strong> snack mixes and baked goods can contain nuts that are not appropriate for dogs (and are very fatty)
            </li>
            <li>
              <strong>Sweeteners:</strong> sugar-free or &ldquo;reduced sugar&rdquo; foods can contain xylitol, which the FDA warns is toxic for dogs
            </li>
            <li>
              <strong>Garnishes:</strong> raisins, currants, chives, and onion-based toppings can appear on salads and boards
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            If you want a safer way to include your dog in Christmas dinner without the risky ingredients,
            you can use a small, plain topper approach from our companion guide:{' '}
            <Link
              href={`/${locale}/blog/what-dogs-can-eat-on-christmas`}
              className="underline font-medium hover:opacity-80"
            >
              What Can Dogs Eat on Christmas?
            </Link>
            .
          </div>
        </section>

        {/* BONES/TRASH/WRAPPERS */}
        <section id="bones-trash-wrappers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bones, Trash, and Wrappers: The Christmas Trio That Sends Dogs to the Vet</h2>
          <p className="mb-4">
            Christmas week is prime time for trash-related accidents. Even if you never feed your dog from the table,
            a counter-surfing dog can pull down foil, napkins, skewers, bones, and rich leftovers.
          </p>

          <h3 className="text-lg font-semibold mb-2">Cooked bones</h3>
          <p className="mb-4">
            Cooked bones can splinter, causing injury to the mouth or GI tract, and they can also contribute to constipation
            or obstruction. Bones are a common holiday issue because there are more leftovers and more opportunities.
          </p>

          <h3 className="text-lg font-semibold mb-2">Foil, plastic wrap, string, and skewers</h3>
          <p className="mb-4">
            Dogs do not chew these items safely. They swallow them. This can lead to choking, blockage, or dangerous
            &ldquo;linear foreign body&rdquo; situations when string-like material is involved.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-lg font-semibold mb-2">High-risk items to keep sealed away</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Turkey carcasses and cooked bones</li>
              <li>Foil trays, foil-wrapped leftovers, plastic wrap</li>
              <li>Skewers, toothpicks, corn cob pieces</li>
              <li>String from roasts or gift ribbons that smell like food</li>
              <li>Greasy napkins and paper plates in open trash</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            If you want a deeper walkthrough on blockage warning signs owners miss, see:{' '}
            <Link
              href={`/${locale}/blog/intestinal-blockage-dogs-symptoms`}
              className="underline font-medium hover:opacity-80"
            >
              Intestinal Blockages in Dogs
            </Link>
            .
          </p>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms-timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Symptoms to Watch For and When They Can Show Up</h2>
          <p className="mb-4">
            Timing varies based on what was eaten and how much. Some exposures can cause signs quickly, while others
            develop over hours. If you know a toxin was consumed, do not wait for symptoms.
          </p>

          <h3 className="text-lg font-semibold mb-2">Common holiday GI symptoms</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Vomiting or repeated retching</li>
            <li>Diarrhea or very soft stool</li>
            <li>Drooling, lip-licking, nausea</li>
            <li>Abdominal discomfort (hunched posture, guarding, restlessness)</li>
            <li>Loss of appetite or refusing water</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Signs that can suggest a toxin or severe reaction</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tremors, agitation, unusual restlessness (can occur with stimulant-type toxicities)</li>
            <li>Collapse, weakness, staggering</li>
            <li>Seizures</li>
            <li>Pale gums, rapid heart rate, trouble breathing</li>
            <li>Black/tarry stool or blood in vomit or stool</li>
          </ul>

          <p className="mb-4">
            Some foods are dangerous in a different way: fatty holiday scraps can trigger pancreatitis in some dogs.
            VCA notes pancreatitis may be triggered in some cases by a fatty meal.
          </p>

          <p className="text-sm text-gray-700">
            If you are trying to make sense of vomiting, diarrhea, and vet-recommended GI meds during the holidays,
            this overview may help you understand what vets commonly prescribe and why:{' '}
            <Link
              href={`/${locale}/blog/common-gi-medications-for-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Common GI Medications for Dogs
            </Link>
            .
          </p>
        </section>

        {/* WHAT TO DO */}
        <section id="what-to-do" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Do Right Away If Your Dog Eats a Dangerous Christmas Food</h2>
          <p className="mb-4">
            The best action depends on what was eaten, how much, and your dog&rsquo;s size and medical history. When a known toxin is
            involved (chocolate, xylitol, grapes/raisins, alcohol, onions/garlic), treat it as urgent and contact a professional.
            The FDA specifically warns xylitol can be dangerous for dogs and lists symptoms; it also emphasizes the need to contact
            a veterinarian if exposure is suspected.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">A practical checklist</h3>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li><strong>Remove access immediately</strong> (pick up candy bowls, close trash, secure leftovers).</li>
              <li><strong>Save packaging</strong> or write down the recipe ingredients and estimate the amount eaten.</li>
              <li><strong>Call your veterinarian or an emergency clinic</strong> and follow their instructions.</li>
              <li><strong>Do not guess at home remedies</strong> (especially if your dog is weak, vomiting, or lethargic).</li>
              <li><strong>Monitor closely</strong> and be ready to go in if symptoms develop or worsen.</li>
            </ol>
          </div>

          <p className="mb-4">
            For chocolate exposures specifically, Merck Veterinary Manual notes the toxic compounds in chocolate and discusses the potential
            for serious cardiac and neurologic signs.
          </p>
        </section>

        {/* PREVENTION */}
        <section id="prevention-plan" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">A Simple Christmas Prevention Plan That Works in Real Homes</h2>
          <p className="mb-4">
            Prevention is less about perfect discipline and more about making it hard for accidents to happen. The most effective changes are
            physical: where food is placed, how trash is managed, and what guests are asked to do.
          </p>

          <h3 className="text-lg font-semibold mb-2">Host-ready rules for guests and family</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>No feeding from plates.</strong> If you want to give a treat, ask first.</li>
              <li><strong>Desserts stay up high.</strong> Coffee tables and low side tables are the danger zone.</li>
              <li><strong>Trash is lidded.</strong> All bones and leftovers go into a sealed bin immediately.</li>
              <li><strong>Snacks are supervised.</strong> Candy bowls and snack boards should not be left unattended.</li>
              <li><strong>Designate a dog-safe zone.</strong> If the house gets busy, give your dog a calm room with water.</li>
            </ul>
          </div>

          <p className="mb-4">
            If you still want to include your dog in the celebration, the safest approach is offering a small, plain topper prepared without
            seasoning and without rich fats. A little planning prevents most &ldquo;Christmas stomach&rdquo; problems and keeps the week enjoyable.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is turkey itself dangerous for dogs?</strong>
            <br />
            Plain, cooked, skinless turkey breast is usually not the problem. The problem is the seasoning, skin, fatty drippings, gravy, and
            side dishes that contain onions, garlic, and high fat.
          </p>

          <p className="mb-3">
            <strong>Are grapes and raisins really that serious?</strong>
            <br />
            They are widely listed as foods to avoid for dogs by poison-control and veterinary resources, including the ASPCA.
            If exposure happens, it is safest to treat it as urgent and call a professional.
          </p>

          <p className="mb-3">
            <strong>What about a tiny piece of chocolate?</strong>
            <br />
            Risk depends on the type of chocolate, the amount, and your dog&rsquo;s size. Because chocolate contains methylxanthines like theobromine
            and caffeine, it can cause serious signs at higher exposures. If you know chocolate was eaten, call your vet for guidance.
          </p>

          <p className="mb-3">
            <strong>Why are sugar-free foods such a big deal?</strong>
            <br />
            Some sugar-free products contain xylitol, and the FDA warns xylitol is dangerous for dogs and describes symptoms that can begin with vomiting
            and progress to weakness, collapse, and seizures.
          </p>

          <p>
            <strong>My dog got into fatty leftovers. Should I worry about pancreatitis?</strong>
            <br />
            Some dogs are more susceptible than others, but VCA notes pancreatitis may be triggered in some cases by a fatty meal.
            If you see repeated vomiting, significant pain, severe lethargy, or refusal to drink, seek veterinary care.
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
              ASPCApro: People Foods Pets Should Never Eat:{' '}
              <a
                href="https://www.aspcapro.org/resource/people-foods-pets-should-never-eat"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aspcapro.org/resource/people-foods-pets-should-never-eat
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
              FDA: Paws Off! Xylitol is Toxic to Dogs:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-toxic-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-toxic-dogs
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
              VCA Hospitals: Pancreatitis in Dogs:{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs
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
