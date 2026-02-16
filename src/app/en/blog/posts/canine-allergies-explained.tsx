'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanineAllergiesExplained() {
  const locale = useLocale();

  const title =
    'Canine Allergies Explained: Food vs. Environmental Triggers and How to Help Your Dog Thrive';
  const date = 'September 8, 2025';
  const categories = ['owner'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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

  const slug = 'canine-allergies-explained';

  const description =
    'A practical, evidence-aware guide to dog allergies: food vs. environmental triggers, flea allergy dermatitis, how to run an elimination diet, ear/skin flare protocols, meds and nutraceuticals, home tweaks, grooming, and SOPs for daily management.';

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#overview" className="underline hover:opacity-80">Overview: What &amp; Why</a></li>
            <li><a href="#patterns" className="underline hover:opacity-80">Food vs. Environmental Patterns</a></li>
            <li><a href="#flea-allergy" className="underline hover:opacity-80">Flea Allergy Dermatitis</a></li>
            <li><a href="#ears-skin" className="underline hover:opacity-80">Ears, Skin &amp; Hot Spots</a></li>
            <li><a href="#elimination" className="underline hover:opacity-80">The Elimination Diet (Step by Step)</a></li>
            <li><a href="#testing" className="underline hover:opacity-80">Allergy Testing &amp; Immunotherapy</a></li>
            <li><a href="#meds" className="underline hover:opacity-80">Medications &amp; Supplements</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Home Environment</a></li>
            <li><a href="#diet-ops" className="underline hover:opacity-80">Diet Ops: Labels, Treats, &amp; Travel</a></li>
            <li><a href="#facility" className="underline hover:opacity-80">Boarding/Daycare Notes</a></li>
            <li><a href="#sops" className="underline hover:opacity-80">Owner SOPs &amp; Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Dog allergies are most commonly <strong>environmental</strong> (pollens, dust mites, molds) or <strong>flea-related</strong>; true <strong>food allergies</strong> are less common but very real. The best outcomes come from a <strong>system</strong>: identify the likely trigger type, run a <strong>methodical elimination diet</strong> if food is suspected, use <strong>preventive flea control</strong> year-round, maintain <strong>ear/skin hygiene</strong>, and work with your vet on <strong>medications or immunotherapy</strong> as needed. Small daily habits—baths, wipe-downs, bedding routines, treat policies—add up to big relief.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this into your allergy <em>playbook</em>. Store elimination diet rules, allowed treat lists, bath cadence, ear-care protocol, and meds schedule in Petunia so every caregiver follows the same plan.
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Overview: What Allergies Are (and Aren&#39;t)</h2>
          <p className="mb-3">
            An allergy is an <strong>immune overreaction</strong> to a typically harmless substance—an <em>allergen</em>. In dogs, the immune system can be primed by genetics and environment to view proteins from pollen, dust mites, molds, insect saliva, or foods as threats. The reaction releases inflammatory mediators (histamine and others), leading to <strong>itching, redness, ear infections, paw chewing, face rubbing</strong>, or recurrent hot spots.
          </p>
          <p className="mb-3">
            Itching from allergies is not the only reason a dog scratches. <strong>Infections, parasites, endocrine disease, pain, and boredom</strong> can cause similar behaviors. That&#39;s why a <strong>vet exam</strong> matters before assuming &quot;it&#39;s food.&quot; Your plan is strongest when it addresses the right category and removes confounders.
          </p>
          <p className="mb-0">
            Think in layers: identify probable trigger → calm current inflammation → prevent new exposures → track and tune. This layered approach turns a frustrating cycle into a manageable routine.
          </p>
        </section>

        {/* PATTERNS */}
        <section id="patterns" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food vs. Environmental: Pattern Recognition</h2>
          <p className="mb-3">
            While only testing and trials can confirm, these <strong>patterns</strong> help you and your vet form a working hypothesis:
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggestive of Environmental (Atopy)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Seasonal flares</strong> (worse in spring/fall) that improve in winter.</li>
            <li>Itch focused on <strong>paws, armpits, groin, face</strong>; frequent <strong>ear infections</strong>.</li>
            <li>Partial response to baths, wipe-downs after grass exposure, or indoor air improvements.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Suggestive of Food Allergy</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Non-seasonal</strong> itch (present year-round) with or without GI signs (soft stool, gas, intermittent vomiting).</li>
            <li>Flares in multi-dog homes where treats or table food are shared.</li>
            <li>Ear infections that <strong>recur despite</strong> environmental controls; hives after specific treats.</li>
          </ul>
          <p className="mb-0">
            Many dogs have <strong>mixed triggers</strong>. It&#39;s common to see environmental allergies plus an ingredient sensitivity. The goal is not to guess perfectly on day one—it&#39;s to <strong>systematically eliminate</strong> suspects and measure results.
          </p>
        </section>

        {/* FLEA ALLERGY */}
        <section id="flea-allergy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Flea Allergy Dermatitis (FAD): The Underestimated Culprit</h2>
          <p className="mb-3">
            A single flea bite can set off <strong>weeks</strong> of misery in a sensitized dog. FAD typically shows as intense itching and hair loss over the <strong>rump, tail base, and hindquarters</strong>. Because fleas can be hard to spot on thick coats—and bites may happen outdoors—owners sometimes dismiss fleas as &quot;not the issue.&quot;
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use <strong>year-round veterinary flea prevention</strong> for all pets in the household.</li>
            <li>Treat the environment if you live in high-pressure regions; wash bedding hot; vacuum frequently.</li>
            <li>If FAD is suspected, your vet may add short courses of anti-itch medication and topicals while prevention kicks in.</li>
          </ul>
          <p className="mb-0">
            Rule out FAD before deep-diving into diets—you&#39;ll save time, money, and a lot of scratching.
          </p>
        </section>

        {/* EARS & SKIN */}
        <section id="ears-skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ears, Skin, and Hot Spots: Why They Flare</h2>
          <p className="mb-3">
            Allergic inflammation disrupts the skin barrier and ear canal environment, inviting <strong>yeast and bacteria</strong>. Dogs itch, scratch, and lick, which worsens damage and moisture, creating a vicious cycle. Hot spots (acute moist dermatitis) can appear and spread rapidly.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Act early:</strong> at first sign of ear shake/odor/redness or a moist patch, call your vet.</li>
            <li><strong>Ears:</strong> vet-prescribed cleaners and drops; avoid harsh home remedies inside canals.</li>
            <li><strong>Skin:</strong> clip/clean hot spots as directed; short anti-itch/antibiotic courses when needed.</li>
          </ul>
          <p className="mb-0">
            Long term, the plan is to <strong>reduce triggers</strong> and <strong>maintain the barrier</strong> with baths, wipes, and nutrition—all while using medications responsibly to control flares.
          </p>
        </section>

        {/* ELIMINATION DIET */}
        <section id="elimination" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Elimination Diet: Step-by-Step to Real Answers</h2>
          <p className="mb-3">
            A properly run elimination diet is the <strong>gold standard</strong> for diagnosing food allergy. It&#39;s not forever, but it does require discipline for 8–12+ weeks. Your veterinarian will help choose a <strong>novel protein</strong> your dog has never eaten (e.g., rabbit, venison) or a <strong>hydrolyzed protein</strong> diet where proteins are broken into fragments less likely to trigger reactions.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Rules (No Exceptions)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Only</strong> the prescribed diet. No other foods, table scraps, flavored meds, or &quot;just one&quot; treat.</li>
            <li>Use vet-approved <strong>compatible treats</strong> or bake single-ingredient treats (e.g., dehydrated novel protein).</li>
            <li>Check <strong>medications</strong> and supplements for flavorings; ask your vet for alternatives if needed.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Timeline &amp; Measurement</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weeks 0–2: inflammation control and strict diet start; expect gradual change.</li>
            <li>Weeks 3–6: many dogs show clear improvement; keep logs of itch scores (0–10), stool quality, and ear/skin status.</li>
            <li>Weeks 8–12: if much improved, discuss <strong>rechallenge</strong>—adding previous proteins one at a time to confirm triggers.</li>
          </ul>
          <p className="mb-3">
            If your dog improves on the elimination diet and then relapses when a protein is reintroduced, that protein is a <strong>confirmed trigger</strong>. Your long-term plan becomes easy: avoid triggers, maintain the base diet, and use a small list of safe treats.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track meals in grams, allowed treats, and weekly itch scores in Petunia. Share the list with family and sitters to prevent &quot;accidental&quot; exposures.
          </div>
        </section>

        {/* TESTING & IMMUNOTHERAPY */}
        <section id="testing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergy Testing &amp; Immunotherapy (For Environmental Triggers)</h2>
          <p className="mb-3">
            For suspected environmental allergies, your vet may refer you to a veterinary dermatologist for testing to guide <strong>allergen-specific immunotherapy</strong> (ASIT). ASIT doesn&#39;t just mask symptoms; it can reduce the immune overreaction over time.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Intradermal testing:</strong> small injections of allergens under the skin; gold standard for selecting ASIT mixes.</li>
            <li><strong>Serum allergy testing:</strong> blood tests; used by some clinicians to formulate immunotherapy.</li>
            <li><strong>ASIT delivery:</strong> injections at home or oral drops under the tongue; months to see full benefit.</li>
          </ul>
          <p className="mb-0">
            Many dogs still need adjunct meds during peak seasons, but ASIT can reduce severity and frequency of flares—and medication reliance—over time.
          </p>
        </section>

        {/* MEDS & SUPPS */}
        <section id="meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications &amp; Supplements: What Actually Helps</h2>
          <p className="mb-3">
            Work with your veterinarian to tailor a regimen. Choices depend on trigger type, severity, seasonality, and your dog&#39;s health history.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Anti-itch &amp; Anti-inflammatory</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Apoquel&#174; (oclacitinib)</strong>: fast itch relief; often used for atopic flares.</li>
            <li><strong>Cytopoint&#174;</strong>: monoclonal antibody injection; provides weeks of itch control for many dogs.</li>
            <li><strong>Short steroid courses</strong>: for severe flares; use judiciously under veterinary guidance.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Antimicrobials (When Indicated)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Topical or oral antibiotics/antifungals if secondary infection is present.</li>
            <li>Culture/cytology help target treatment and avoid overuse.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Nutraceuticals &amp; Diet Adjuncts</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Omega-3 fatty acids (EPA/DHA)</strong>: support skin barrier and reduce inflammation; among the most consistent adjuncts.</li>
            <li>Skin-barrier diets or supplements with ceramides, vitamin E, zinc—discuss quality with your vet.</li>
            <li>Probiotics may help some dogs with GI signs; evidence is variable among products.</li>
          </ul>
          <p className="mb-0">
            Avoid random over-the-counter mixes. Choose products with veterinary guidance and brand quality control.
          </p>
        </section>

        {/* GROOMING & HOME */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Home Environment: Small Changes, Big Relief</h2>
          <p className="mb-3">
            Your home routine can cut exposure and soothe skin between flares. The theme: lower allergen load, improve barrier function, and keep moisture where it belongs.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Bathing &amp; Wipes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bathe with a vet-recommended shampoo (antimicrobial or barrier-friendly) weekly or as advised; rinse thoroughly.</li>
            <li>Use <strong>paw and belly wipe-downs</strong> after grass exposure to remove pollen residue.</li>
            <li>Dry ears after baths or swims; use prescribed cleaners to prevent moisture build-up.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Bedding &amp; Air</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Wash bedding weekly on hot; consider hypoallergenic covers and frequent vacuuming.</li>
            <li>HEPA filtration and humidity control (not too dry, not too damp) help many households.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Yard &amp; Seasonality</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Mow and rinse outdoor patios to reduce pollen/tracking.</li>
            <li>On high-pollen days, shorten outdoor time and increase wipe-downs.</li>
          </ul>
        </section>

        {/* DIET OPS */}
        <section id="diet-ops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diet Ops: Labels, Treat Policies, and Travel</h2>
          <p className="mb-3">
            If food triggers are confirmed or suspected, the system around food becomes part of medical care. It&#39;s logistics: labels, shopping lists, and human behavior.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Labels:</strong> store brand/flavor, batch, and grams per meal; post safe treat list on the fridge.</li>
            <li><strong>Shared households:</strong> one person controls treat jar; guests are briefed; no table scraps.</li>
            <li><strong>Travel:</strong> pack pre-portioned meals (by grams) and safe treats; avoid last-minute store runs that risk ingredient swaps.</li>
          </ul>
          <p className="mb-0">
            A few minutes of organization prevents weeks of scratching.
          </p>
        </section>

        {/* FACILITY NOTES */}
        <section id="facility" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding/Daycare Notes: Keeping Allergic Dogs Comfortable</h2>
          <p className="mb-3">
            If your dog attends daycare or boarding, share the allergy plan ahead of time. Facilities do best when they can set lanes for diet and cleaning.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Provide <strong>labeled food</strong> and treats only; list off-limits ingredients clearly.</li>
            <li>Ask for <strong>wipe-downs</strong> after yard time during peak seasons.</li>
            <li>Note <strong>ear-care</strong> instructions and any topical meds with dosing windows.</li>
            <li>Request documentation of any itch, ear shake, or hot spot formation with timestamps.</li>
          </ul>
          <p className="mb-0">
            Good communication prevents accidental exposures and speeds treatment if a flare begins during a stay.
          </p>
        </section>

        {/* SOPs */}
        <section id="sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Allergy SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>AM: check ears/skin; note itch score (0–10); give meds/supplements with measured breakfast.</li>
            <li>Midday: wipe paws/belly after outdoor time; quick recheck of ear comfort.</li>
            <li>PM: measured dinner; document any scratching, chewing, or GI changes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bath &amp; Ear-Care SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weekly bath with vet-approved shampoo; 10-minute contact time if directed; rinse thoroughly.</li>
            <li>Dry ears; apply cleaner per label; never insert cotton swabs into canals.</li>
            <li>Record date/time and any reactions.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Elimination Diet SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Only the prescribed food and approved treats; meds checked for flavorings.</li>
            <li>Log meal grams, itch score, stool, and ear/skin status daily.</li>
            <li>At weeks 8–12, discuss rechallenge plan with your veterinarian.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Flare Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Signs: ear shake/odor, hot spot, sudden paw chewing, hives, facial swelling.</li>
            <li>Action: start vet-directed ear/skin meds; schedule appointment if no improvement in 24–48 hours or immediately for facial swelling.</li>
            <li>Document triggers (yard, new treat) and timing; take photos.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Save these SOPs and share with family, sitters, and facilities so your dog&#39;s allergy management is consistent everywhere.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are food allergies really that common?</strong><br />
            They are less common than environmental allergies but absolutely real. The only reliable way to diagnose is a strict elimination diet followed by a controlled rechallenge.
          </p>

          <p className="mb-3">
            <strong>What ingredients most often cause issues?</strong><br />
            Common triggers include proteins like chicken, beef, dairy, and sometimes grains—<em>but it varies by dog</em>. Avoid assuming based on lists; run a proper trial.
          </p>

          <p className="mb-3">
            <strong>Do &quot;hypoallergenic&quot; labels on store foods mean my dog is safe?</strong><br />
            Not necessarily. Terminology isn&#39;t regulated uniformly. Veterinary therapeutic diets for elimination trials have stricter controls on cross-contact and ingredients.
          </p>

          <p className="mb-3">
            <strong>How long until I see improvement?</strong><br />
            Some dogs improve in 2–4 weeks, others need 8–12. Secondary infections must be treated or you won&#39;t see the full benefit of the diet or environmental controls.
          </p>

          <p className="mb-0">
            <strong>Will my dog need medications forever?</strong><br />
            Many dogs cycle medications seasonally or during flares while relying on environmental controls and diet the rest of the year. Your vet will tailor a plan to minimize long-term drug exposure while keeping your dog comfortable.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              MSD/Merck Veterinary Manual. Canine Atopic Dermatitis &amp; Food Allergy resources (owner &amp; professional).{' '}
              <a
                href="https://www.merckvetmanual.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.merckvetmanual.com/
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines (elimination diet best practices; caregiver communication).{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              American College of Veterinary Dermatology (ACVD). Client education on allergy testing &amp; immunotherapy.{' '}
              <a
                href="https://www.acvd.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvd.org/
              </a>
            </li>
            <li>
              AAHA. Canine skin/ear care and chronic disease management resources.{' '}
              <a
                href="https://www.aaha.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aaha.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized diagnosis and treatment. Do not start or stop medications without veterinary guidance.
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
