'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function RawDogFoodSafety() {
  const locale = useLocale();

  const title = 'Raw Dog Food Safety: How to Handle & Prepare Raw Diets Without Risk';
  const date = 'December 4, 2025';
  const categories = ['owner','food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-risk-actually-means" className="underline hover:opacity-80">
                What &ldquo;Risk&rdquo; Means
              </a>
            </li>
            <li>
              <a href="#who-should-avoid" className="underline hover:opacity-80">
                Who Should Avoid
              </a>
            </li>
            <li>
              <a href="#kitchen-setup" className="underline hover:opacity-80">
                Kitchen Setup
              </a>
            </li>
            <li>
              <a href="#shopping-storage" className="underline hover:opacity-80">
                Shopping &amp; Storage
              </a>
            </li>
            <li>
              <a href="#thawing-prep" className="underline hover:opacity-80">
                Thawing &amp; Prep
              </a>
            </li>
            <li>
              <a href="#feeding-cleanup" className="underline hover:opacity-80">
                Feeding &amp; Cleanup
              </a>
            </li>
            <li>
              <a href="#household-risk" className="underline hover:opacity-80">
                Household Precautions
              </a>
            </li>
            <li>
              <a href="#if-someone-gets-sick" className="underline hover:opacity-80">
                If Someone Gets Sick
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
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Raw feeding can be done more safely, but it is never &ldquo;zero risk.&rdquo; The most realistic goal is to
            reduce the chance of contamination in your kitchen and prevent exposure for higher-risk people and pets.
            That means strict storage, careful thawing, dedicated prep habits, thorough cleaning, and smart feeding
            routines that limit mess and contact time. If your household includes infants, elderly family members,
            pregnant people, or anyone immunocompromised, talk with your veterinarian before choosing a raw diet.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This page is educational and not medical or veterinary advice. If your dog
            has chronic gastrointestinal disease, is on immune-suppressing medication, or has a complex medical history,
            get professional guidance before changing diets.
          </div>
        </section>

        {/* WHAT RISK ACTUALLY MEANS */}
        <section id="what-risk-actually-means" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &ldquo;Bacterial Risk&rdquo; Actually Means (In Plain English)</h2>
          <p className="mb-4">
            When people talk about raw feeding safety, they are usually talking about bacteria that can live on raw meat
            (and sometimes on surfaces or in the environment). The concern is not that every raw meal is contaminated,
            or that every exposure causes illness. The concern is that raw animal products can carry pathogens, and
            sloppy handling can spread those pathogens to countertops, hands, sinks, sponges, bowls, floors, and
            ultimately to humans or other pets.
          </p>
          <p className="mb-4">
            There are two separate safety questions you should keep distinct:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Food safety for the household:</strong> Are you preventing cross-contamination during storage, prep,
              and cleanup?
            </li>
            <li>
              <strong>Tolerance for the dog:</strong> Is your dog handling the diet without persistent vomiting, diarrhea,
              or weight loss?
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            If you want the bigger picture on benefits, drawbacks, and how vets evaluate raw claims, read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food Diet Pros &amp; Cons: What Science and Vets Say
            </Link>
            .
          </p>
        </section>

        {/* WHO SHOULD AVOID */}
        <section id="who-should-avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who Should Avoid Raw Feeding (or Be Extra Cautious)</h2>
          <p className="mb-4">
            Risk is not the same for every home. Some situations deserve a more conservative approach because the
            consequences of infection are higher, or because sanitation is harder to keep consistent.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Proceed only with veterinary guidance, or consider avoiding raw, if:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Your household includes infants, elderly family members, pregnant people, or anyone immunocompromised.
              </li>
              <li>Your dog is immunocompromised, medically fragile, or has recurring pancreatitis or severe GI disease.</li>
              <li>You regularly foster, board, or have frequent contact with many dogs (higher exposure stakes).</li>
              <li>You cannot reliably keep raw prep separate from human food prep.</li>
              <li>You need a tightly controlled prescription diet for a medical condition.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            This is also a good moment to be honest about your routine. If you are consistently rushed, tired, or short
            on fridge and freezer space, it becomes much harder to handle raw food the way food-safety guidance expects.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Busy household with shared kitchen space</li>
            <li>Limited freezer capacity or unreliable cold storage</li>
            <li>Multiple pets that compete for bowls or scatter food</li>
            <li>Dogs that drag food onto carpets or furniture</li>
          </ul>
        </section>

        {/* KITCHEN SETUP */}
        <section id="kitchen-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A Safer Raw Feeding Setup (Tools and Habits That Matter)</h2>
          <p className="mb-4">
            The easiest way to reduce risk is to treat raw pet food like raw poultry for your household: keep it cold,
            keep it contained, and clean thoroughly. You do not need a laboratory setup, but you do need consistency.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Helpful &ldquo;low effort, high impact&rdquo; items:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>One dedicated cutting board (only for raw pet food)</li>
              <li>Disposable gloves (optional, but useful for messy prep)</li>
              <li>Kitchen scale (for portioning and reducing repeated handling)</li>
              <li>Reusable containers or freezer bags for pre-portioned meals</li>
              <li>Paper towels (avoid shared kitchen cloths for raw cleanup)</li>
              <li>A dedicated pet-food sponge or brush (or disposable scrub pads)</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            If you prepare homemade meals, pre-portioning is your friend. The fewer times you open packages and handle
            raw ingredients, the fewer opportunities for contamination.
          </p>

          <p className="text-sm text-gray-700">
            If you are building homemade meals, bookmark the safety section in:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-recipes-you-can-make-at-home`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Recipes You Can Make at Home
            </Link>
            .
          </p>
        </section>

        {/* SHOPPING & STORAGE */}
        <section id="shopping-storage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shopping, Transport, and Storage: The Cold Chain Is the Whole Game</h2>
          <p className="mb-4">
            The most common safety failures are simple: food warms up too long in the car, packages leak in the fridge,
            thawed food is re-frozen repeatedly, or open containers drip onto shelves. If you get the cold chain right,
            everything else becomes easier.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Shop last:</strong> Pick up raw pet food at the end of your trip so it stays cold.
            </li>
            <li>
              <strong>Use a cooler:</strong> Especially for longer drives or warm weather.
            </li>
            <li>
              <strong>Contain leaks:</strong> Store raw food in a bin or on a tray in the fridge to prevent drips.
            </li>
            <li>
              <strong>Freeze in portions:</strong> Smaller portions thaw faster and reduce handling time.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical rule:</strong> If you would not serve it to your family because it was warm too long, do not
            feed it to your dog. When in doubt, throw it out.
          </div>

          <p className="mt-4 mb-4">
            Commercial raw and homemade raw have different risk patterns. Commercial products may have more consistent
            packaging and instructions, but you still need correct handling at home. Homemade prep gives you more
            control, but it also increases the number of steps where mistakes can happen.
          </p>

          <p className="text-sm text-gray-700">
            For the full context on what raw feeding is (and what it is not), start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* THAWING & PREP */}
        <section id="thawing-prep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Thawing and Prep: The Steps Most People Get Wrong</h2>
          <p className="mb-4">
            Most avoidable risk happens during thawing and prep because bacteria multiply fastest when food sits in the
            temperature &ldquo;danger zone.&rdquo; You do not have to become obsessed with numbers, but you do need to
            avoid extended room-temperature thawing.
          </p>

          <h3 className="text-xl font-semibold mb-2">Safer thawing methods</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Refrigerator thawing:</strong> Slow, controlled, and the easiest to manage safely.
            </li>
            <li>
              <strong>Cold-water thawing:</strong> Use a sealed bag and cold water, change the water regularly, and feed
              promptly.
            </li>
            <li>
              <strong>Portion-and-thaw:</strong> Freeze meals in thin portions so they thaw quickly in the fridge.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Prep habits that reduce cross-contamination</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use a dedicated board and utensils for raw pet food.</li>
            <li>Keep raw prep away from human food prep areas when possible.</li>
            <li>Clean as you go (do not let raw residue sit on counters).</li>
            <li>Wash hands thoroughly after handling raw ingredients or bowls.</li>
            <li>Do not rinse raw meat in the sink (it can spread droplets and residue).</li>
          </ul>

          <p className="mt-4 mb-4">
            If you are prepping meals that include bone, safety becomes about more than bacteria. Bone introduces
            choking, tooth fracture, and gastrointestinal risks. That is why bone selection and feeding style matters.
          </p>

          <p className="text-sm text-gray-700">
            If bones are part of your plan, read this before you begin:{' '}
            <Link
              href={`/${locale}/blog/raw-bones-and-dogs-benefits-risks-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Bones &amp; Dogs: Benefits, Risks &amp; Safety
            </Link>
            .
          </p>
        </section>

        {/* FEEDING & CLEANUP */}
        <section id="feeding-cleanup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Feeding and Cleanup: Make the Meal Less Messy (and Safer)</h2>
          <p className="mb-4">
            Feeding routines affect safety more than most people realize. A dog that drags food onto rugs, licks the
            couch after eating, or shares bowls with another pet increases exposure opportunities for everyone in the
            home. Your goal is a contained, low-contact feeding routine.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Simple ways to reduce mess and exposure:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Feed on a washable surface (a mat, tile, or a crate tray).</li>
              <li>Use stainless steel bowls that clean easily.</li>
              <li>Pick up the bowl promptly when the meal is done.</li>
              <li>Do not allow licking of faces, hands, or shared household items immediately after meals.</li>
              <li>Wash bowls with hot soapy water or a dishwasher safe cycle.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            A common mistake is letting raw residue sit in a sink with a shared sponge. If you use a sponge, keep a
            dedicated one for pet dishes only (or use disposable scrub pads). Drying also matters: bacteria thrive on
            wet tools left at room temperature.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Use paper towels for raw surface wipes, then discard.</li>
            <li>Clean the sink and faucet handles after washing raw bowls.</li>
            <li>Sanitize prep surfaces according to product instructions.</li>
            <li>Keep dish towels away from raw prep zones.</li>
          </ul>
        </section>

        {/* HOUSEHOLD RISK */}
        <section id="household-risk" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Household Risk Mitigation: Kids, Elderly Family, Guests, and Other Pets</h2>
          <p className="mb-4">
            The biggest real-world safety gap is not the dog. It is the household. Raw feeding can be especially risky
            when there are vulnerable people in the home, or when other pets have access to bowls, leftovers, or
            preparation areas.
          </p>

          <h3 className="text-xl font-semibold mb-2">If your home has higher-risk people</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Feed in a contained space (like a crate or a gated area) and clean immediately.</li>
            <li>Prevent face licking after meals, and wash hands after pet contact.</li>
            <li>Keep raw food and prep supplies physically separated from human food items.</li>
            <li>Consider non-raw options if consistent separation is unrealistic.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">If you have multiple pets</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Feed separately to prevent resource guarding and shared saliva exposure.</li>
            <li>Pick up leftovers immediately to avoid scavenging.</li>
            <li>Do not let cats or other pets access raw dog bowls (or prep scraps).</li>
            <li>Clean floors and mats, not just bowls.</li>
          </ul>

          <p className="mt-4 mb-4">
            If you are seeing digestive changes (diarrhea, vomiting, constipation, or sudden appetite shifts), treat
            that as a signal to slow down and reassess. Some issues are normal during diet changes. Others are a sign
            that the plan is not working for your dog.
          </p>

          <p className="text-sm text-gray-700">
            For common problems and practical fixes, read:{' '}
            <Link
              href={`/${locale}/blog/raw-diet-troubleshooting-common-issues`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Diet Troubleshooting: Common Issues
            </Link>
            .
          </p>
        </section>

        {/* IF SOMEONE GETS SICK */}
        <section id="if-someone-gets-sick" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Do If Your Dog or Someone in the Home Gets Sick</h2>
          <p className="mb-4">
            Most stomach bugs are not caused by raw feeding, but you should take symptoms seriously and protect your
            household. If anyone develops severe symptoms (dehydration, high fever, bloody diarrhea, persistent vomiting,
            or weakness), seek medical care promptly.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>If your dog has ongoing vomiting or diarrhea:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pause raw feeding and contact your veterinarian if symptoms persist.</li>
              <li>Ensure hydration and monitor energy level and appetite.</li>
              <li>Bring diet details: product brand, batch info, proteins used, and transition timeline.</li>
              <li>Clean and sanitize bowls and feeding areas thoroughly.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            If a person in the household becomes ill and you suspect food exposure, do not guess. Talk with a healthcare
            professional and share the context: raw pet food in the home, your handling routine, and symptom timing.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Stop feeding from the same package until you get guidance.</li>
            <li>Wash hands and disinfect high-touch kitchen surfaces.</li>
            <li>Replace sponges or scrub tools used during the exposure window.</li>
            <li>Document product details (brand, lot, and purchase date) in case you need them.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is commercial raw safer than homemade raw?</strong>
            <br />
            Sometimes it can be simpler to handle because packaging and feeding instructions are standardized, but it is
            not automatically safer. Food safety still depends on cold storage, thawing, preventing leaks, and cleaning.
            Homemade plans increase the number of handling steps, which is why routine and hygiene matter so much.
          </p>

          <p className="mb-3">
            <strong>Can I just &ldquo;wipe down&rdquo; surfaces after prep?</strong>
            <br />
            Wiping alone can spread contamination. A safer approach is to remove residue first (paper towel), then clean
            with soap and water, and sanitize according to the product instructions if appropriate for your surface.
          </p>

          <p className="mb-3">
            <strong>How long can raw food sit out while my dog eats?</strong>
            <br />
            Shorter is better. A clean, contained feeding routine that ends with immediate bowl pickup and cleaning is
            safer than letting food sit out or be carried around the house.
          </p>

          <p>
            <strong>Where should I start if I&rsquo;m still deciding?</strong>
            <br />
            Begin with the full decision framework and the definitions, then come back here for the day-to-day safety
            practices once you are confident the approach fits your household.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              U.S. FDA guidance on safe handling of pet food and treats:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats
              </a>
            </li>
            <li>
              AVMA policy on raw or undercooked animal-source protein in pet diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              CDC food safety education (general prevention concepts for cross-contamination):{' '}
              <a
                href="https://www.cdc.gov/foodsafety/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cdc.gov/foodsafety/
              </a>
            </li>
            <li>
              WSAVA nutrition resources for pet owners and diet evaluation concepts:{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
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
