'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomemadeChristmasDogTreatsRecipes() {
  const locale = useLocale();

  const title =
    'Homemade Christmas Dog Treats: Safe Recipes, Portions, and Holiday Prep Tips';
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
              <a href="#holiday-safety-rules" className="underline hover:opacity-80">
                Safety Rules
              </a>
            </li>
            <li>
              <a href="#portion-guidelines" className="underline hover:opacity-80">
                Portions
              </a>
            </li>
            <li>
              <a href="#pantry-safe-ingredients" className="underline hover:opacity-80">
                Safe Ingredients
              </a>
            </li>
            <li>
              <a href="#recipes" className="underline hover:opacity-80">
                Recipes
              </a>
            </li>
            <li>
              <a href="#storage-and-make-ahead" className="underline hover:opacity-80">
                Storage
              </a>
            </li>
            <li>
              <a href="#gi-upset" className="underline hover:opacity-80">
                GI Upset
              </a>
            </li>
            <li>
              <a href="#when-to-call-vet" className="underline hover:opacity-80">
                When to Call a Vet
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
            The safest homemade Christmas treats for dogs are simple, low-fat, lightly cooked options
            made from a short ingredient list: plain turkey or chicken, pumpkin (plain), sweet potato,
            oats, eggs, and dog-safe fruits like apple (no seeds). Keep portions small, introduce new
            foods slowly, and avoid holiday hazards like chocolate, raisins, onions/garlic (including
            powders), alcohol, and anything with xylitol. Xylitol is specifically warned against by
            the FDA because it can be dangerous for dogs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Best practice:</strong> Treat homemade goodies as a small &ldquo;bonus,&rdquo; not a meal replacement,
            and keep the rest of the day&rsquo;s routine normal.
          </div>
        </section>

        {/* SAFETY RULES */}
        <section id="holiday-safety-rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Holiday Safety Rules for Homemade Dog Treats</h2>
          <p className="mb-4">
            Homemade can be safer than table scraps, but only if you keep the recipe dog-appropriate.
            The most common holiday issues are too much fat, too many new ingredients at once, and
            hidden &ldquo;human&rdquo; add-ins that are unsafe for dogs. The ASPCA lists multiple people foods
            to avoid feeding pets, including chocolate, grapes/raisins, onions/garlic, alcohol, and xylitol.
          </p>

          <h3 className="text-lg font-semibold mb-2">Non-negotiable rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>No sweeteners:</strong> never use xylitol; verify labels on peanut butter and &ldquo;sugar-free&rdquo; items.
            </li>
            <li>
              <strong>No chocolate or cocoa:</strong> chocolate toxicosis is well-described in veterinary references.
            </li>
            <li>
              <strong>No grapes/raisins:</strong> keep fruitcake-style ingredients fully out of recipes.
            </li>
            <li>
              <strong>No onion/garlic:</strong> skip powders, seasoning blends, and broths with these ingredients.
            </li>
            <li>
              <strong>Go low-fat:</strong> fatty meals can trigger pancreatitis in some dogs.
            </li>
          </ul>

          <p className="mb-4">
            If you want a simple overview of what is safe to share on Christmas (and how much),
            start here:{' '}
            <Link
              href={`/${locale}/blog/what-dogs-can-eat-on-christmas`}
              className="underline font-medium hover:opacity-80"
            >
              What Can Dogs Eat on Christmas?
            </Link>
            .
          </p>
        </section>

        {/* PORTIONS */}
        <section id="portion-guidelines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Homemade Treat Is Safe on Christmas?</h2>
          <p className="mb-4">
            Portion size is where most well-meaning owners accidentally cause vomiting or diarrhea.
            Even a safe ingredient can cause trouble if your dog gets a large amount or a new &ldquo;mix&rdquo;
            of foods. Keep treats small and consistent, and aim for &ldquo;holiday extras&rdquo; to be a modest part
            of the day.
          </p>

          <h3 className="text-lg font-semibold mb-2">A conservative holiday portion guide</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Small dogs (under 15 lb):</strong> 1–2 small treats or 1–2 tablespoons total of homemade toppers
            </li>
            <li>
              <strong>Medium dogs (15–50 lb):</strong> 2–3 small treats or 2–4 tablespoons total of homemade toppers
            </li>
            <li>
              <strong>Large dogs (50–90 lb):</strong> 3–4 small treats or 1/4 to 1/2 cup total of homemade toppers
            </li>
            <li>
              <strong>Giant breeds (90+ lb):</strong> 4–5 small treats or 1/2 to 3/4 cup total of homemade toppers
            </li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-lg font-semibold mb-2">The safest strategy</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Choose one recipe and stick with it for the day.</li>
              <li>Make treats small (training-treat size) so you can control intake.</li>
              <li>Skip fatty ingredients if your dog has a sensitive stomach or past pancreatitis concerns.</li>
            </ul>
          </div>
        </section>

        {/* SAFE INGREDIENTS */}
        <section id="pantry-safe-ingredients" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog-Safe Ingredients You Can Use at Home</h2>
          <p className="mb-4">
            If you keep your ingredient list short and plain, homemade treats become much safer.
            The foods below are common, accessible, and easy to prepare without risky seasonings.
          </p>

          <h3 className="text-lg font-semibold mb-2">Great Christmas treat staples</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Plain cooked turkey or chicken:</strong> skinless, boneless, unseasoned
            </li>
            <li>
              <strong>Plain pumpkin:</strong> pure pumpkin, not pie filling
            </li>
            <li>
              <strong>Sweet potato:</strong> baked or steamed, no butter or sugar
            </li>
            <li>
              <strong>Oats:</strong> simple binder for baked treats (avoid heavily sweetened granola)
            </li>
            <li>
              <strong>Eggs:</strong> common binder and protein source (best cooked)
            </li>
            <li>
              <strong>Apples:</strong> remove seeds and core; serve in small amounts
            </li>
            <li>
              <strong>Unsweetened plain yogurt:</strong> only if your dog tolerates dairy
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Ingredients to avoid entirely in homemade treats</h3>
          <p className="mb-4">
            For a full hazard list and what to do if your dog gets into something unsafe, see:{' '}
            <Link
              href={`/${locale}/blog/christmas-foods-dogs-should-not-eat`}
              className="underline font-medium hover:opacity-80"
            >
              Christmas Foods Dogs Should Not Eat
            </Link>
            .
          </p>
        </section>

        {/* RECIPES */}
        <section id="recipes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Homemade Christmas Treat Recipes for Dogs</h2>
          <p className="mb-4">
            All recipes below are designed to be plain, low-fat, and easy to portion. If your dog has medical conditions
            (like pancreatitis history, IBD, diabetes, kidney disease, or multiple food allergies), ask your veterinarian
            before introducing new treats.
          </p>

          <h3 className="text-lg font-semibold mb-2">Recipe 1: Turkey &amp; Pumpkin Soft Bites</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Ingredients:</strong> 1 cup cooked shredded turkey breast, 1/2 cup plain pumpkin, 1 egg, 1 cup oats (blend to oat flour if you want smoother texture)</li>
            <li><strong>Directions:</strong> mix into a thick dough, roll into small balls, flatten slightly, bake at 350°F for 15–20 minutes until set</li>
            <li><strong>Portion tip:</strong> make them pea-sized; these are treats, not biscuits</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Recipe 2: Sweet Potato &amp; Oat Mini Cookies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Ingredients:</strong> 1 cup mashed cooked sweet potato, 1 egg, 1 1/2 cups oats (or oat flour), water as needed</li>
            <li><strong>Directions:</strong> mix, shape into small rounds, bake at 350°F for 18–22 minutes</li>
            <li><strong>Optional add-in:</strong> a spoon of plain pumpkin for moisture (skip spices and sugar)</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Recipe 3: Frozen Pumpkin Yogurt Cubes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Ingredients:</strong> 1/2 cup plain unsweetened yogurt, 1/4 cup plain pumpkin</li>
            <li><strong>Directions:</strong> stir, spoon into silicone molds or an ice cube tray, freeze until solid</li>
            <li><strong>Notes:</strong> skip this recipe if dairy makes your dog gassy or loose-stooled</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Recipe 4: No-Salt Broth Ice Licks (Hydration Treat)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Ingredients:</strong> low-sodium broth that has <strong>no onion or garlic</strong> in the ingredient list</li>
            <li><strong>Directions:</strong> freeze small portions; offer as a supervised lick treat</li>
            <li><strong>Safety note:</strong> many broths contain onion or garlic, so label-checking matters.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Recipe 5: Apple &amp; Oat Holiday Crunch (No Bake)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Ingredients:</strong> finely chopped apple (no seeds/core), oats, a spoon of plain pumpkin</li>
            <li><strong>Directions:</strong> mix and roll into tiny bite-size pieces; refrigerate for firmer texture</li>
            <li><strong>Notes:</strong> keep portions small, especially for small dogs</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            If your dog is sensitive to fatty foods, be extra cautious with holiday treats.
            Some veterinary guidance notes pancreatitis may be triggered in some cases by a fatty meal.
            For a deeper explanation, see:{' '}
            <Link
              href={`/${locale}/blog/pancreatitis-and-fatty-foods-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Pancreatitis and High-Fat Foods in Dogs
            </Link>
            .
          </div>
        </section>

        {/* STORAGE */}
        <section id="storage-and-make-ahead" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Storage, Shelf Life, and Make-Ahead Tips</h2>
          <p className="mb-4">
            Homemade treats usually have fewer preservatives, so storage matters. If a recipe contains meat, egg,
            or dairy, treat it like &ldquo;people food&rdquo; for safety.
          </p>

          <h3 className="text-lg font-semibold mb-2">Simple storage rules</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Refrigerate</strong> soft treats (especially meat-based) and use within 3–5 days.</li>
            <li><strong>Freeze</strong> extras and thaw small portions as needed.</li>
            <li><strong>Dry baked treats</strong> a little longer (lower temp) if you want a firmer, longer-lasting texture.</li>
            <li><strong>Label containers</strong> so guests do not confuse dog treats with people cookies.</li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <h3 className="text-lg font-semibold mb-2">Avoid accidental access</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Keep treats on a high shelf, not on the counter edge.</li>
              <li>Use a lidded bin for baking scraps and food wrappers.</li>
              <li>Do not leave cooling trays unattended if your dog is a counter surfer.</li>
            </ul>
          </div>
        </section>

        {/* GI UPSET */}
        <section id="gi-upset" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Should You Expect Mild GI Upset from New Holiday Treats?</h2>
          <p className="mb-4">
            Sometimes, yes. Even safe ingredients can cause mild stomach upset if your dog is not used to them,
            if portions are too large, or if multiple new foods appear in the same day. Holiday weeks also come with
            changes in routine, more excitement, and more &ldquo;extra bites&rdquo; from guests.
          </p>

          <h3 className="text-lg font-semibold mb-2">How to reduce GI risk</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Start with a tiny test portion first (especially for sensitive dogs).</li>
            <li>Offer one new recipe at a time instead of a mix of treats.</li>
            <li>Keep treats small and count them as part of the day&rsquo;s intake.</li>
            <li>Skip high-fat ingredients because fatty meals can trigger pancreatitis in some dogs.</li>
          </ul>

          <p className="mb-4">
            If your dog commonly has recurring soft stool when routines change, it can help to stay consistent with diet
            and avoid frequent ingredient switching. For more context on chronic sensitivity patterns, see:{' '}
            <Link
              href={`/${locale}/blog/gut-dysbiosis-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Gut Dysbiosis in Dogs
            </Link>
            .
          </p>
        </section>

        {/* WHEN TO CALL VET */}
        <section id="when-to-call-vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call Your Vet During Christmas Week</h2>
          <p className="mb-4">
            If your dog ate a known hazard (chocolate, xylitol, grapes/raisins, alcohol, onions/garlic),
            treat it as urgent. The FDA warns that xylitol can be dangerous for dogs and describes serious symptoms that
            can follow exposure.
          </p>

          <h3 className="text-lg font-semibold mb-2">Seek urgent care if you see</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated vomiting or inability to keep water down</li>
            <li>Blood in stool or vomit, or black/tarry stool</li>
            <li>Severe lethargy, collapse, tremors, or seizures</li>
            <li>Obvious abdominal pain or repeated retching</li>
            <li>Known ingestion of chocolate or cocoa products</li>
            <li>Known ingestion of anything that may contain xylitol</li>
          </ul>

          <p className="text-sm text-gray-700">
            Chocolate toxicosis is a well-described emergency in veterinary references.
            If you are unsure what to do after an ingestion, calling your veterinarian quickly is safer than waiting.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can I use peanut butter in homemade dog treats?</strong>
            <br />
            Only if you confirm it does not contain xylitol. The FDA warns xylitol is dangerous for dogs, so label-checking is essential.
          </p>

          <p className="mb-3">
            <strong>Can I make dog treats with holiday spices?</strong>
            <br />
            It is safer to skip spices and seasoning blends because onion and garlic powders are common in mixes and are listed by the ASPCA among foods to avoid for pets.
          </p>

          <p className="mb-3">
            <strong>Are homemade treats better than store-bought?</strong>
            <br />
            Homemade can be safer if your ingredient list is short and plain, but store-bought can be perfectly fine too. The biggest advantage of homemade is you control fat content and avoid risky add-ins.
          </p>

          <p className="mb-3">
            <strong>My dog has had pancreatitis before. Can they have holiday treats?</strong>
            <br />
            Be cautious and speak with your veterinarian. Veterinary guidance notes pancreatitis may be triggered in some cases by a fatty meal, and low-fat choices are often recommended for sensitive dogs.
          </p>

          <p>
            <strong>What is the safest &ldquo;last-minute&rdquo; treat if I have no time to bake?</strong>
            <br />
            A small amount of plain cooked turkey breast or a spoonful of plain pumpkin mixed into your dog&rsquo;s regular meal is often a safer choice than a new baked recipe.
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
            <li>
              VCA Hospitals: Nutrition and Pancreatic Disease in Dogs:{' '}
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
