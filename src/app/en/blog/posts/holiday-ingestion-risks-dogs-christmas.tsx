'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HolidayIngestionRisksDogsChristmas() {
  const locale = useLocale();

  const title =
    'Holiday Ingestion Risks for Dogs: Christmas Foods, Wrappers, Toys, Symptoms, and When to Go to the ER';
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

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((keyName) => (
            <span
              key={keyName}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[keyName] ?? keyName}
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
              <a href="#why-holidays-risky" className="underline hover:opacity-80">
                Why Holidays Are Risky
              </a>
            </li>
            <li>
              <a href="#food-risks" className="underline hover:opacity-80">
                Food Risks
              </a>
            </li>
            <li>
              <a href="#non-food-risks" className="underline hover:opacity-80">
                Wrappers, Toys, and Other Items
              </a>
            </li>
            <li>
              <a href="#symptoms" className="underline hover:opacity-80">
                Signs &amp; Symptoms
              </a>
            </li>
            <li>
              <a href="#emergency-vs-monitor" className="underline hover:opacity-80">
                ER vs Monitor at Home
              </a>
            </li>
            <li>
              <a href="#what-to-do-now" className="underline hover:opacity-80">
                What to Do Right Now
              </a>
            </li>
            <li>
              <a href="#prevention" className="underline hover:opacity-80">
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
            Christmas week is a perfect storm for accidental ingestion: more food at dog-height, more guests
            sharing bites, more trash and leftovers, and more tempting non-food items (wrapping paper, ribbon,
            ornaments, kids&rsquo; toys). The top urgent risks include chocolate, xylitol-containing products,
            grapes/raisins, onions/garlic (including powders), alcohol, fatty scraps that can trigger pancreatitis,
            and foreign objects that can cause choking or intestinal blockage. The ASPCA lists many of these
            common foods as items to avoid feeding pets, and advises contacting a veterinarian or poison control
            if ingestion is suspected.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Fast rule:</strong> If you know your dog ate a high-risk toxin (like xylitol or a large amount
            of chocolate) or swallowed something that could get stuck (ribbon, toy parts, bones), do not wait for
            symptoms. Call your vet or an emergency clinic right away.
          </div>
        </section>

        {/* WHY HOLIDAYS ARE RISKY */}
        <section id="why-holidays-risky" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why the Holidays Create More Accidental Ingestion</h2>
          <p className="mb-4">
            Most dogs do not &ldquo;plan&rdquo; to eat unsafe things. The holidays just create more opportunity:
            tables are full, coats and bags are on the floor, candy is in bowls, and the trash fills quickly.
            Dogs also pick up on excitement, which can increase scavenging and speed-eating.
          </p>
          <p className="mb-4">
            The two patterns that lead to most emergencies are (1) a dog gets access to something toxic, and
            (2) a dog swallows a non-food item that becomes a foreign body. Both can happen fast, even in a
            loving, careful home.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-lg font-semibold mb-2">Common &ldquo;how did this happen?&rdquo; holiday scenarios</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>A guest offers a bite of stuffing or gravy (hidden onion/garlic).</li>
              <li>A dog steals candy or baked goods from a low table.</li>
              <li>Trash bags sit by the door and contain bones, foil, and greasy leftovers.</li>
              <li>A child leaves a toy on the floor (pieces get chewed and swallowed).</li>
              <li>Wrapping paper and ribbon smell like food and get eaten.</li>
            </ul>
          </div>
        </section>

        {/* FOOD RISKS */}
        <section id="food-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Holiday Foods That Dogs Commonly Get Into</h2>
          <p className="mb-4">
            Some holiday foods are toxic in small amounts, while others cause problems because they are rich,
            fatty, salty, or full of hidden ingredients. The ASPCA includes chocolate, grapes/raisins,
            onions/garlic, alcohol, and xylitol among common people foods to avoid feeding pets.
          </p>

          <h3 className="text-lg font-semibold mb-2">Chocolate, cocoa, and baked goods</h3>
          <p className="mb-4">
            Chocolate is a holiday staple and a common emergency. Veterinary references explain that chocolate
            contains methylxanthines (notably theobromine and caffeine) that can cause significant clinical signs.
            Dark chocolate and baking chocolate are typically more concentrated than milk chocolate, and
            cocoa powder products can be especially concerning.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Chocolate bars, truffles, brownie trays, cocoa bombs, hot cocoa mix</li>
            <li>Chocolate-covered pretzels and gift tins left within reach</li>
            <li>Holiday baking scraps in the trash (batter, frosting, chocolate chips)</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Sugar-free products and xylitol</h3>
          <p className="mb-4">
            Xylitol is a sweetener found in some sugar-free gum, candies, baked goods, and even some peanut
            butters. The FDA warns that xylitol is dangerous for dogs and describes signs that can begin with
            vomiting and progress to weakness, collapse, and seizures.
          </p>

          <h3 className="text-lg font-semibold mb-2">Grapes and raisins (fruitcake, trail mix, snack boards)</h3>
          <p className="mb-4">
            Grapes and raisins show up in fruitcakes, baked goods, and snack mixes. They are commonly listed
            by veterinary and poison resources as foods to avoid because they can be associated with kidney
            failure.
          </p>

          <h3 className="text-lg font-semibold mb-2">Onions and garlic (including powders)</h3>
          <p className="mb-4">
            Stuffing, gravy, rubs, sauces, and soups often contain onion, garlic, or powders. These are
            easy to miss when you only see &ldquo;seasoning&rdquo; on a label. The ASPCA includes onions and garlic
            in its list of foods to avoid feeding pets.
          </p>

          <h3 className="text-lg font-semibold mb-2">Fatty scraps, skin, gravy, and drippings</h3>
          <p className="mb-4">
            Even when an ingredient is not a classic toxin, fat can still cause real harm. VCA notes that
            pancreatitis may be triggered in some cases by a fatty meal.
            Turkey skin, bacon grease, buttery mashed potatoes, and rich gravy are common &ldquo;Christmas stomach&rdquo; triggers.
          </p>

          <h3 className="text-lg font-semibold mb-2">Bones and the trash problem</h3>
          <p className="mb-4">
            Cooked bones, foil, plastic wrap, and greasy napkins create a high-risk mix. Bones can splinter
            or contribute to obstruction, while foil and plastic can cause choking or blockages.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            For a dedicated, safety-first breakdown of holiday foods to avoid (and what to do if your dog ate them),
            see:{' '}
            <Link
              href={`/${locale}/blog/christmas-foods-dogs-should-not-eat`}
              className="underline font-medium hover:opacity-80"
            >
              Christmas Foods Dogs Should Not Eat
            </Link>
            .
          </div>
        </section>

        {/* NON-FOOD RISKS */}
        <section id="non-food-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Non-Food Items Dogs Accidentally Swallow Over Christmas</h2>
          <p className="mb-4">
            Many holiday emergencies are not food-related at all. Dogs chew and swallow items because they are
            novel, exciting, and sometimes smell like food (especially anything that touched a meal).
          </p>

          <h3 className="text-lg font-semibold mb-2">Wrapping paper, ribbon, bows, and tape</h3>
          <p className="mb-4">
            Plain paper often passes in small amounts, but it is still a foreign object and can contribute to
            vomiting, choking, or obstruction depending on the amount and your dog&rsquo;s size. Ribbon and
            string-like items are more concerning because they can become stuck and cause serious internal injury.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Ribbon, string, twine from roasts, curling bows</li>
            <li>Sticky tape, gift tags, plastic ornament hooks</li>
            <li>Foil gift wrap and cellophane</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Kids&rsquo; toys and small parts</h3>
          <p className="mb-4">
            Holiday toys often have detachable pieces: tiny wheels, squeakers, button eyes, plastic clips,
            and stuffing. The danger is choking and obstruction, especially if your dog chews quickly.
          </p>

          <h3 className="text-lg font-semibold mb-2">Batteries (especially button batteries)</h3>
          <p className="mb-4">
            Remotes, singing cards, small toys, and decorations can contain batteries. Battery ingestion is
            urgent because it can cause severe injury. If you suspect battery chewing or swallowing, treat it as
            an emergency and call a veterinarian right away.
          </p>

          <h3 className="text-lg font-semibold mb-2">Ornaments, hooks, tinsel, and tree items</h3>
          <p className="mb-4">
            Ornament shards can cause mouth injury, hooks can be swallowed, and tinsel is a high-risk string-like
            item for cats and can also be problematic for dogs. Tree water can also contain additives, so keep it
            covered if possible.
          </p>

          <h3 className="text-lg font-semibold mb-2">Medications and &ldquo;dropped pills&rdquo;</h3>
          <p className="mb-4">
            Travel and guests increase the chance of dropped human medications. Many human medications can be
            dangerous for dogs. If a pill is missing and your dog might have eaten it, do not wait.
          </p>

          <p className="text-sm text-gray-700">
            If you are worried your dog swallowed something that could get stuck, this guide can help you recognize
            early warning signs owners miss:{' '}
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
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs and Symptoms to Watch For</h2>
          <p className="mb-4">
            Symptoms depend on what was swallowed, how much, and your dog&rsquo;s size and health history. Some
            dogs show signs quickly, while others look normal for hours. If you know a high-risk ingestion happened,
            it is safer to call early rather than waiting for symptoms.
          </p>

          <h3 className="text-lg font-semibold mb-2">Common GI upset signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Vomiting (one episode or repeated vomiting)</li>
            <li>Diarrhea or very soft stool</li>
            <li>Drooling, lip licking, nausea</li>
            <li>Decreased appetite</li>
            <li>Gassiness or abdominal discomfort</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Signs that suggest a foreign object or blockage</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated retching or vomiting, especially after eating or drinking</li>
            <li>Not keeping water down</li>
            <li>Straining, little stool, or no stool passage</li>
            <li>Distended abdomen or obvious pain (hunched posture, guarding)</li>
            <li>Sudden lethargy, restlessness, or inability to get comfortable</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Signs that can suggest toxin exposure</h3>
          <p className="mb-4">
            Different toxins cause different patterns. For example, the FDA lists xylitol poisoning signs that can
            include vomiting, decreased activity, weakness, collapse, and seizures.
            Chocolate toxicity is associated with GI signs and can include neurologic or cardiac effects at higher
            exposures, and veterinary references emphasize methylxanthines like theobromine and caffeine as the cause.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tremors, agitation, pacing, or unusual restlessness</li>
            <li>Weakness, wobbliness, collapse</li>
            <li>Seizures</li>
            <li>Rapid heart rate or abnormal heart rhythm</li>
            <li>Pale gums, trouble breathing</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Signs that can suggest pancreatitis</h3>
          <p className="mb-4">
            After a fatty holiday meal, watch for repeated vomiting, abdominal pain, and significant lethargy.
            VCA notes pancreatitis may be triggered in some cases by a fatty meal and emphasizes low-fat nutrition
            strategies for dogs affected by pancreatic disease.
          </p>
        </section>

        {/* EMERGENCY VS MONITOR */}
        <section id="emergency-vs-monitor" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Seek Emergency Help vs When You May Be Okay</h2>
          <p className="mb-4">
            Use this section as a practical guide, not a substitute for veterinary advice. When in doubt, calling
            your veterinarian is the safest move. The ASPCA explicitly advises contacting a veterinarian or poison
            control if you suspect your pet has eaten harmful foods.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Go to an emergency clinic now (or call urgently) if:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your dog ate xylitol (or a sugar-free product and you cannot confirm ingredients).</li>
              <li>Your dog ate a significant amount of chocolate, baking chocolate, or cocoa products.</li>
              <li>Your dog swallowed ribbon, string, toy parts, bones, a battery, or a sharp object.</li>
              <li>There is repeated vomiting, inability to keep water down, severe lethargy, collapse, tremors, or seizures.</li>
              <li>You see blood in vomit or stool, black/tarry stool, or obvious abdominal pain and bloating.</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-2">You may be okay to monitor (with common sense) when:</h3>
          <p className="mb-4">
            Monitoring is only reasonable if the item ingested is low risk, your dog is acting normally, and there
            are no red-flag symptoms. For example, a healthy dog that ate a tiny amount of plain, low-fat food might
            have mild, short-lived soft stool. That is different from known toxin exposure or foreign-object ingestion.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Your dog ate a very small amount of a plain, dog-safe food and is otherwise normal.</li>
            <li>There is one mild episode of soft stool without lethargy, pain, or repeated vomiting.</li>
            <li>Your dog is drinking water, keeping it down, and has normal energy.</li>
          </ul>

          <p className="text-sm text-gray-700">
            If symptoms begin to escalate, do not &ldquo;wait it out.&rdquo; Holiday problems can change quickly.
          </p>
        </section>

        {/* WHAT TO DO NOW */}
        <section id="what-to-do-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Do Right Now If Your Dog Eats Something Over the Holidays</h2>
          <p className="mb-4">
            Your goal is to collect information and act quickly, especially when a toxin or foreign object is involved.
            If possible, save packaging, estimate how much was eaten, and note the time. This helps your veterinarian
            decide what to do next.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Holiday ingestion checklist</h3>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li><strong>Remove access immediately</strong> (pick up wrappers, secure trash, move desserts out of reach).</li>
              <li><strong>Identify the item</strong> (food ingredient list, toy type, battery size, amount missing).</li>
              <li><strong>Estimate amount and time</strong> (how much and when it happened).</li>
              <li><strong>Call your veterinarian or an emergency clinic</strong> for specific guidance.</li>
              <li><strong>Watch closely</strong> for vomiting, lethargy, tremors, or abdominal pain.</li>
            </ol>
          </div>

          <p className="mb-4">
            If you are specifically deciding what holiday foods are safe to share (and how much), these companion guides
            are designed to help you avoid the most common mistakes:{' '}
            <Link
              href={`/${locale}/blog/what-dogs-can-eat-on-christmas`}
              className="underline font-medium hover:opacity-80"
            >
              What Can Dogs Eat on Christmas?
            </Link>{' '}
            and{' '}
            <Link
              href={`/${locale}/blog/homemade-christmas-dog-treats-recipes`}
              className="underline font-medium hover:opacity-80"
            >
              Homemade Christmas Dog Treats
            </Link>
            .
          </p>
        </section>

        {/* PREVENTION */}
        <section id="prevention" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">A Practical Prevention Plan for Christmas Week</h2>
          <p className="mb-4">
            You do not need a perfect household to prevent most accidents. You need a few physical barriers and a clear plan
            for guests, trash, and kid activity.
          </p>

          <h3 className="text-lg font-semibold mb-2">Christmas-proof your home in 10 minutes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Move candy bowls and dessert trays to a high counter (not a coffee table).</li>
            <li>Use a lidded trash can and take out trash more often.</li>
            <li>Keep wrapping supplies (ribbon, tape, tags) in a closed bin.</li>
            <li>Collect kids&rsquo; toys in a basket or closed room at night.</li>
            <li>Cover tree water and pick up ornament hooks off the floor.</li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <h3 className="text-lg font-semibold mb-2">Guest message you can copy-paste</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Please do not feed the dog from plates.</strong> Holiday foods can be unsafe.</li>
              <li><strong>No desserts.</strong> Chocolate and sugar-free items can be dangerous.</li>
              <li><strong>Trash stays sealed.</strong> Bones, foil, and leftovers go straight into a lidded bin.</li>
              <li><strong>If you want to give a treat, ask first.</strong> We have safe treats ready.</li>
            </ul>
          </div>

          <p className="mb-4">
            If your dog has a history of pancreatitis or gets sick after fatty foods, it is worth being extra strict.
            VCA notes pancreatitis may be triggered by a fatty meal in some cases.
            For a deeper explanation, see:{' '}
            <Link
              href={`/${locale}/blog/pancreatitis-and-fatty-foods-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Pancreatitis and High-Fat Foods in Dogs
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>My dog ate wrapping paper. Should I panic?</strong>
            <br />
            A tiny amount may pass, but the risk depends on the amount, whether tape or ribbon was swallowed, and whether your dog is vomiting or painful. If ribbon, string, sharp pieces, or large amounts are involved, call your vet.
          </p>

          <p className="mb-3">
            <strong>Is it safe if my dog only had a little gravy or turkey skin?</strong>
            <br />
            Some dogs tolerate it, but fatty foods are a common holiday trigger for GI upset and can be associated with pancreatitis in susceptible dogs. VCA notes pancreatitis may be triggered in some cases by a fatty meal.
          </p>

          <p className="mb-3">
            <strong>What if I cannot confirm whether something contains xylitol?</strong>
            <br />
            Treat it as urgent. The FDA warns xylitol is dangerous for dogs and lists serious symptoms that can follow exposure.
          </p>

          <p className="mb-3">
            <strong>What is a reasonable &ldquo;monitor at home&rdquo; window?</strong>
            <br />
            If your dog is acting normal, keeping water down, and symptoms are mild (and the item was low risk), you may be able to monitor briefly. But if vomiting repeats, your dog becomes lethargic, or pain appears, call your veterinarian promptly.
          </p>

          <p>
            <strong>Where can I learn about common vet-prescribed GI medications?</strong>
            <br />
            If your vet recommends medication for vomiting or diarrhea, this guide explains common options and why they are used:{' '}
            <Link
              href={`/${locale}/blog/common-gi-medications-for-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Common GI Medications for Dogs
            </Link>
            .
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
              VCA: Xylitol Toxicity in Dogs:{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/xylitol-toxicity-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/xylitol-toxicity-in-dogs
              </a>{' '}
            </li>
            <li>
              MSD Veterinary Manual: Chocolate Toxicity Calculator (methylxanthines overview):{' '}
              <a
                href="https://www.msdvetmanual.com/multimedia/clinical-calculator/chocolate-toxicity-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.msdvetmanual.com/multimedia/clinical-calculator/chocolate-toxicity-calculator
              </a>{' '}
            </li>
            <li>
              American College of Veterinary Pharmacists: Chocolate (signs and symptoms):{' '}
              <a
                href="https://vetmeds.org/pet-poison-control-list/chocolate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vetmeds.org/pet-poison-control-list/chocolate/
              </a>{' '}
            </li>
            <li>
              VCA: Pancreatitis in Dogs:{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/pancreatitis-in-dogs
              </a>{' '}
            </li>
            <li>
              VCA: Nutrition and Pancreatic Disease in Dogs:{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/nutrition-and-pancreatic-disease-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vcahospitals.com/know-your-pet/nutrition-and-pancreatic-disease-in-dogs
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
