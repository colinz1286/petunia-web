'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoDoodlesShedFactOrFiction() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'Do Doodles Shed? Fact or Fiction — Science, Genetics, and Buying Smart';
  const date = 'August 3, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-is-a-doodle" className="underline hover:opacity-80">What &ldquo;Doodle&rdquo; Means</a></li>
            <li><a href="#allergies-101" className="underline hover:opacity-80">Dog Allergies 101</a></li>
            <li><a href="#shedding-vs-allergens" className="underline hover:opacity-80">Shedding vs Allergens</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Genetics Behind Shedding</a></li>
            <li><a href="#generations" className="underline hover:opacity-80">F1/F1B/Multigen Reality</a></li>
            <li><a href="#buyer-checklist" className="underline hover:opacity-80">Buyer Checklist</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Maintenance</a></li>
            <li><a href="#allergy-management" className="underline hover:opacity-80">Allergy-Management Plan</a></li>
            <li><a href="#myths" className="underline hover:opacity-80">Common Myths</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Some doodles shed very little; some shed a surprising amount.</strong> Shedding varies by genetics, not by marketing. Poodles tend to be
            low-shedding, but crossing a Poodle with a heavy-shedding breed (Golden, Lab, Bernese, etc.) produces a spectrum. Even when shedding is low,
            <strong> dog allergens come mostly from dander, saliva, and urine</strong>, not the hair itself, and no breed is truly &ldquo;hypoallergenic.&rdquo; The most reliable
            signals for a lower-shedding doodle are <strong>RSPO2 furnishings</strong> (beard/brows), <strong>favorable MC5R shedding genotype</strong>, and a dense single-coat
            phenotype with consistent grooming. Plan for professional grooming, at-home brushing, and environmental allergen control.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save your doodle’s DNA coat report, grooming cadence, and cleaning checklist in Petunia. Consistency across family,
            sitters, and groomers is what turns &ldquo;low-shedding&rdquo; from a promise into reality.
          </div>
        </section>

        {/* What is a doodle */}
        <section id="what-is-a-doodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &ldquo;Doodle&rdquo; Actually Means</h2>
          <p className="mb-3">
            &ldquo;Doodle&rdquo; is an umbrella term for <strong>Poodle crosses</strong> such as Goldendoodles, Labradoodles, Bernedoodles, Sheepadoodles, Aussiedoodles, and many others.
            The Poodle brings a curly, continuously growing coat with minimal free-fall shedding; the other parent often brings a dense <em>double coat</em> that is engineered
            by nature to shed. Blend those genomes and you get a <em>spectrum</em> of possible coats: tightly curled and low-shedding, open-wave coats that trap loose hair,
            or flat/unfurnished coats that shed more like the non-Poodle parent. There is no single &ldquo;doodle coat&rdquo; and there is <strong>no genetic guarantee</strong> of
            non-shedding in first-generation crosses.
          </p>
          <p>
            To make sense of all the claims, we need to separate <strong>allergy biology</strong> from <strong>coat genetics</strong>, then layer on practical grooming and home strategies.
          </p>
        </section>

        {/* Allergies 101 */}
        <section id="allergies-101" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Allergies 101: Where Symptoms Really Come From</h2>
          <p className="mb-3">
            Allergic symptoms are not caused by fur length. They are sparked by immune reactions to <strong>proteins</strong> found in canine <strong>dander (skin flakes)</strong>,
            <strong> saliva</strong>, and <strong>urine</strong>. The best-studied major dog allergens are <em>Can f 1</em> and <em>Can f 2</em>, both lipocalin proteins described in the scientific
            literature decades ago. Because these proteins hitchhike on microscopic particles, they can become airborne and linger in dust even in homes without dogs.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>No breed is truly &ldquo;hypoallergenic.&rdquo;</strong> Professional allergy organizations consistently state that there is <em>no</em> breed that is allergen-free.</li>
            <li>Peer-reviewed studies measuring <em>Can f 1</em> in hair and dust have found <strong>no consistent reduction</strong> in so-called &ldquo;hypoallergenic&rdquo; breeds; some even showed <em>higher</em> levels.</li>
            <li>Individual responses vary: some people react to different dog allergen components (for example, <em>Can f 5</em> is a male-dog prostatic protein), which is why one person can tolerate a given dog while another cannot.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If allergies matter, consider component-resolved allergy testing with your allergist (e.g., <em>Can f 1, 2, 3, 5</em>) before you adopt. It can inform your plan and set expectations.
          </div>
        </section>

        {/* Shedding vs allergens */}
        <section id="shedding-vs-allergens" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding vs Allergens: Related but Not the Same</h2>
          <p className="mb-3">
            Shedding is the <strong>mechanical release of hair</strong>. Allergen exposure is the <strong>biological load of proteins</strong> (mostly from skin and saliva) that end up on hair,
            floors, furniture, and in the air. Low-shedding coats can help <em>contain</em> loose hair, but shedding is not a reliable proxy for allergen output. A low-shedding dog
            can still spread saliva proteins while licking or drooling, and dander is constantly produced as skin renews. Conversely, good grooming and home hygiene can reduce
            allergen exposure even if a dog sheds moderately.
          </p>
          <p className="mb-3">
            This is why &ldquo;hair vs fur&rdquo; debates miss the point. Chemically, mammalian hair and fur are both keratin; what differs is <strong>growth cycle and structure</strong>.
            Poodles have coats that keep growing and tend to trap loose hairs until brushed or clipped; many shedding breeds have a double coat engineered to release hair seasonally.
            In doodle crosses, you mix these systems and get many possible outcomes.
          </p>
        </section>

        {/* Genetics */}
        <section id="genetics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Genetics Behind Shedding (Why One Doodle Sheds and Another Doesn’t)</h2>
          <p className="mb-3">
            Three foundational coat genes describe most visible coat differences in dogs: <strong>RSPO2</strong> (furnishings), <strong>FGF5</strong> (hair length), and <strong>KRT71</strong> (curl).
            Later work and veterinary genetic testing add <strong>MC5R</strong> as a shedding-related signal in many non-wire-haired breeds. Put simply:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>RSPO2 (Furnishings/Improper Coat):</strong> A dominant RSPO2 insertion drives the classic Poodle-style &ldquo;furnishings&rdquo; (beard/brows). Doodles lacking it can show an <em>improper coat</em> (flat, unfurnished face) and typically shed more, often like the non-Poodle parent.</li>
            <li><strong>MC5R (Shedding):</strong> Certain MC5R results are associated with heavier seasonal shedding in breeds without wire/furnished coats; favorable MC5R results trend lighter-shedding.</li>
            <li><strong>FGF5 (Length):</strong> Governs long vs short hair growth cycle; interacts with grooming needs.</li>
            <li><strong>KRT71 (Curl):</strong> Affects curl/tightness, which changes how hair is retained vs released.</li>
          </ul>
          <p className="mb-3">
            A doodle with <strong>furnishings (RSPO2)</strong>, favorable <strong>MC5R</strong>, sufficient <strong>curl (KRT71)</strong>, and routine grooming is most likely to be low-shedding. An unfurnished doodle
            will almost always shed more. This is why DNA testing of breeding dogs and puppies can better predict shedding phenotype than vague labels.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask for the actual RSPO2 and MC5R genotype printouts for the parents and the puppy you are considering. Store them in Petunia with your contract.
          </div>
        </section>

        {/* Generations */}
        <section id="generations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">F1, F1B, Multigen: What Generations Really Tell You</h2>
          <p className="mb-3">
            Generation labels can <em>suggest</em> probabilities but do not guarantee outcomes:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>F1:</strong> Poodle × shedding breed (e.g., Golden). Outcomes are variable: some puppies shed very little, others shed a lot.</li>
            <li><strong>F1B:</strong> F1 backcrossed to Poodle. On average, more puppies inherit Poodle-leaning coat genetics, but variability remains without DNA screening.</li>
            <li><strong>Multigen:</strong> Doodle × doodle or further backcrosses. Lines selected for furnished, curly coats can converge toward Poodle-like coats, but testing still matters.</li>
          </ul>
          <p>
            A breeder who DNA-tests for <strong>RSPO2</strong> and <strong>MC5R</strong> and selects breeding pairs accordingly can offer better transparency than one who only cites &ldquo;generation.&rdquo;
          </p>
        </section>

        {/* Buyer checklist */}
        <section id="buyer-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Buyer Checklist: Reducing Shedding Risk Before You Commit</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Ask for DNA coat results</strong> for both parents and your specific puppy: RSPO2 (furnishings), MC5R (shedding), KRT71 (curl), FGF5 (length). Prefer furnished puppies with favorable MC5R.</li>
            <li><strong>Confirm coat phenotype by sight and touch:</strong> furnished face/beard, dense single-coat feel, and curl/wave pattern that retains hair.</li>
            <li><strong>Request grooming videos</strong> from the breeder: line brushing demo, tools used, and an honest shedding demonstration (brush pass on a dark towel).</li>
            <li><strong>Get a written grooming cadence:</strong> weekly brushing plan, professional grooming every 6–8 weeks, and exact tools (slicker, comb, dryer).</li>
            <li><strong>Allergy plan:</strong> agree on 2-week trial with frequent bathing and limited bedroom access while you test symptoms; clarify return policies if allergies are severe.</li>
            <li><strong>Contracts and ethics:</strong> health testing (hips, elbows where relevant), vaccine and deworming records, and transparent spay/neuter expectations.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Upload the breeder’s coat DNA PDFs, grooming plan, and your allergy trial notes into Petunia so the whole household stays aligned.
          </div>
        </section>

        {/* Grooming */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Maintenance: The Practical Side of &ldquo;Low-Shedding&rdquo;</h2>
          <p className="mb-3">
            Low-shedding does not mean low-maintenance. Doodle coats trap loose hair until it mats or is brushed out. Consistency is everything:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Weekly at minimum:</strong> line brush with a quality slicker, then chase with a metal greyhound comb to skin. Do not skip friction zones (behind ears, armpits, tail base, hocks).</li>
            <li><strong>Bath &amp; blowout every 3–6 weeks:</strong> bathe with gentle dog shampoo, rinse thoroughly, and use a high-velocity dryer to lift under-coat debris and dander.</li>
            <li><strong>Pro groom every 6–8 weeks:</strong> keep to a manageable length if you prefer sport/puppy cuts; longer coats require more at-home work.</li>
            <li><strong>Nails, ears, teeth:</strong> trim nails every 2–4 weeks; clean ears as advised; brush teeth 4–7 days per week.</li>
          </ul>
          <p>
            Regular grooming reduces the <em>spread</em> of allergen-laden dander and saliva on hair. It also prevents mats that can pull on skin and trap moisture.
          </p>
        </section>

        {/* Allergy management */}
        <section id="allergy-management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergy-Management Plan: Layer Simple Wins</h2>
          <p className="mb-3">
            Because allergens ride on particles, the best home strategy is layered:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ventilation &amp; filtration:</strong> use a true HEPA air cleaner sized for the room; consider MERV-13 HVAC filters if your system supports them. Run fans and crack windows when weather allows.</li>
            <li><strong>Cleaning rhythm:</strong> vacuum carpets and upholstery with a sealed-system HEPA vacuum; damp-dust hard surfaces; launder dog bedding weekly.</li>
            <li><strong>Bathing:</strong> frequent bathing can temporarily lower recoverable allergen on hair; effect is short-lived without repetition, so pair with brushing and environmental cleaning.</li>
            <li><strong>Zones:</strong> make bedrooms low-allergen spaces; keep the dog off beds and soft head-level furniture if symptoms persist.</li>
            <li><strong>Medical care:</strong> talk to an allergist about medications and whether allergen immunotherapy fits your case; outcomes vary but can help selected patients.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add repeating tasks in Petunia: filter change dates, vacuum schedule, laundry, and a monthly &ldquo;grooming audit&rdquo; with photos to catch creeping mats.
          </div>
        </section>

        {/* Myths */}
        <section id="myths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Myths — and What the Evidence Says</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 1: &ldquo;Doodles do not shed.&rdquo;</h3>
          <p className="mb-3">
            False as a blanket statement. Some doodles are truly low-shedding; others shed moderately to heavily. Furnishings and MC5R matter far more than a &ldquo;doodle&rdquo; label.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 2: &ldquo;Hypoallergenic breeds produce fewer allergens.&rdquo;</h3>
          <p className="mb-3">
            High-quality studies have not shown reliable reductions in <em>Can f 1</em> from so-called hypoallergenic breeds. Individual fit still varies by patient sensitivity and allergen components.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 3: &ldquo;Hair, not fur, means no allergies.&rdquo;</h3>
          <p className="mb-3">
            Hair and fur are both keratin. Growth patterns differ, which changes how hair is released and retained; the allergens are proteins from dander and saliva that ride on hair and in dust.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 4: &ldquo;If there is no visible shedding, there will be no symptoms.&rdquo;</h3>
          <p>
            Not necessarily. Invisible dander and dried saliva particles can still trigger reactions. Pair coat selection with systematic cleaning and smart room rules.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Will an F1B doodle always be non-shedding?</strong><br />
            No. F1B skews the odds toward a Poodle-leaning coat, but there is still variability. DNA results for RSPO2 and MC5R are more informative than generation labels alone.
          </p>

          <p className="mb-3">
            <strong>Is a furnished doodle automatically low-shedding?</strong><br />
            Furnishings are a strong positive sign, but MC5R and curl also influence how much hair is retained versus released. Grooming discipline remains essential.
          </p>

          <p className="mb-3">
            <strong>Can bathing reduce dog allergens?</strong><br />
            Yes, but only temporarily without repetition. Pair frequent bathing with brushing, HEPA filtration, and cleaning to keep exposure down.
          </p>

          <p className="mb-3">
            <strong>Do Poodles shed?</strong><br />
            All dogs lose hair, but Poodle hair tends to be retained in the coat until brushed or clipped, so free-fall shedding is typically low. That is one reason Poodles are widely used in crosses.
          </p>

          <p>
            <strong>Is immunotherapy worth considering?</strong><br />
            It can help selected patients after evaluation by an allergist. Evidence quality varies for pet dander compared with pollens, and outcomes are individualized. Discuss risks, dosing, and expectations with your specialist.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAAAI. Pet allergies &amp; &ldquo;hypoallergenic&rdquo; dog myths (overview; no truly hypoallergenic breeds).
              <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/dog-myths" target="_blank" rel="noopener noreferrer"> Article</a> |
              <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/pet" target="_blank" rel="noopener noreferrer"> Pet allergy basics</a>
            </li>
            <li>
              Vredegoor DW et al. <em>Can f 1</em> levels in hair and homes of different dog breeds: lack of evidence for hypoallergenic breeds. J Allergy Clin Immunol (2012).
              <a href="https://pubmed.ncbi.nlm.nih.gov/22728082/" target="_blank" rel="noopener noreferrer"> PubMed</a> |
              <a href="https://www.jacionline.org/article/S0091-6749(12)00793-2/fulltext" target="_blank" rel="noopener noreferrer"> Full text</a>
            </li>
            <li>
              Cadieu E et al. Coat variation in the domestic dog governed by variants in <strong>RSPO2</strong>, <strong>FGF5</strong>, and <strong>KRT71</strong>. <em>Science</em> (2009).
              <a href="https://www.science.org/doi/10.1126/science.1177808" target="_blank" rel="noopener noreferrer"> Paper</a>
            </li>
            <li>
              UC Davis Veterinary Genetics Laboratory. Furnishings/Improper Coat (RSPO2) and Shedding+ (MC5R &amp; RSPO2).
              <a href="https://vgl.ucdavis.edu/test/furnishings-and-improper-coat" target="_blank" rel="noopener noreferrer"> RSPO2</a> |
              <a href="https://vgl.ucdavis.edu/test/shedding" target="_blank" rel="noopener noreferrer"> Shedding+</a>
            </li>
            <li>
              Embark. Dog shedding explained (MC5R; consumer explainer).
              <a href="https://embarkvet.com/resources/dog-shedding-explained/" target="_blank" rel="noopener noreferrer"> Article</a>
            </li>
            <li>
              Hodson T et al. Washing the dog reduces allergen levels, but the effect is short-lived without repetition. J Allergy Clin Immunol (1999).
              <a href="https://pubmed.ncbi.nlm.nih.gov/10200004/" target="_blank" rel="noopener noreferrer"> PubMed</a> |
              <a href="https://www.jacionline.org/article/S0091-6749(99)70227-7/pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              EPA. Guide to air cleaners in the home (HEPA &amp; filtration basics).
              <a href="https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home" target="_blank" rel="noopener noreferrer"> EPA page</a>
            </li>
            <li>
              Schoos AMM et al. Component-resolved diagnostics in pet allergy (review). J Allergy Clin Immunol (2021).
              <a href="https://www.jacionline.org/article/S0091-6749(21)00003-8/fulltext" target="_blank" rel="noopener noreferrer"> Review</a>
            </li>
            <li>
              Ali MB et al. Genetic analysis of the modern Australian Labradoodle: excess of Poodle genome (coat allele enrichment). PLoS Genet (2020).
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7482835/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              AKC. Poodle coat basics; Labrador double-coat shedding guidance.
              <a href="https://www.akc.org/dog-breeds/poodle-standard/" target="_blank" rel="noopener noreferrer"> Poodle</a> |
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer"> Labrador</a> |
              <a href="https://www.akc.org/expert-advice/health/dog-shedding-what-to-expect-and-how-to-manage-it/" target="_blank" rel="noopener noreferrer"> Shedding overview</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your allergist and veterinarian for individualized medical and grooming guidance.
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
