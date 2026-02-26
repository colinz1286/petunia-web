'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FDARawPetFoodAdvisoryJuly2025() {
  const locale = useLocale();

  const title =
    'FDA Advises: Do Not Feed Certain Darwin’s Raw Dog Food Lots; FDA Warning Letter to Answers Pet Food — A Practical Owner’s Guide to Risks, Symptoms, Cleanup, Reporting & Refunds';
  const date = 'August 19, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

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

        {/* Intro */}
        <p className="text-lg mb-4">
          In late July 2025, the U.S. Food and Drug Administration (FDA) issued a
          &quot;Do Not Feed&quot; advisory for specific frozen raw dog food lots from Darwin’s
          Natural Pet Products. Testing identified <em>E. coli</em> O157:H7 in a beef recipe that
          was genetically matched to a child’s illness, and <em>Salmonella</em> in chicken and duck
          recipes from other lots. The agency recommended a voluntary recall; as of the advisory,
          the company had not recalled those lots. Because these products were manufactured in May–June
          2024 and sold frozen with no expiration date, affected packages may still be in home freezers.
        </p>

        <p className="mb-4">
          Separately, on July 8, 2025 the FDA posted a formal Warning Letter (dated June 18, 2025) to
          Lystn LLC, doing business as Answers Pet Food, after inspectors and FDA laboratory sampling
          documented <em>Salmonella</em> and <em>Listeria monocytogenes</em> across multiple sampled
          lots, along with violations of current good manufacturing practices and preventive controls
          requirements. A Warning Letter is an enforcement action and not a product recall, but it
          signals serious regulatory concerns that firms are expected to correct.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What Happened — The Short Version</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Darwin’s advisory (July 29, 2025):</strong> FDA cautioned owners not to feed
            three specific lots of Darwin’s frozen raw dog food. Closed product tested by a private
            LAAF-accredited lab in May–June 2025 showed contamination. Whole genome sequencing linked
            the <em>E. coli</em> O157:H7 in a beef product to a four-year-old child’s illness with
            hemolytic uremic syndrome in 2024.
          </li>
          <li>
            <strong>Affected Darwin’s lots &amp; MFG dates:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                BioLogics All-Natural &amp; Grain Free <strong>Beef Recipe for Dogs</strong> — Lot{' '}
                <strong>10662</strong>, MFG date <strong>May 30, 2024</strong>
              </li>
              <li>
                BioLogics All-Natural &amp; Grain Free <strong>Chicken Recipe for Dogs</strong> —
                Lot <strong>10683</strong>, MFG date <strong>June 5, 2024</strong>
              </li>
              <li>
                Natural Selections <strong>Duck Recipe for Dogs</strong> — Lot{' '}
                <strong>10638</strong>, MFG date <strong>May 22, 2024</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Company status:</strong> FDA recommended a recall; according to the advisory,
            the firm had not recalled these lots at the time of posting. FDA instructed consumers to
            <strong> discard</strong> affected products and <strong>not donate</strong> them.
          </li>
          <li>
            <strong>Answers Warning Letter (posted July 8, 2025; dated June 18):</strong> FDA found
            <em>Salmonella</em> (Newport, Kentucky, Typhimurium) and <em>Listeria monocytogenes</em>{' '}
            in multiple sampled Answers raw products and detected <em>Listeria</em> on food-contact
            and other surfaces during inspection. FDA cited violations under 21 CFR part 507 (CGMPs
            and preventive controls). This is <strong>not</strong> a recall by itself.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Why This Matters (Even If Your Dog Seems Fine)</h2>
        <p className="mb-4">
          Raw pet foods can harbor pathogens that make both <strong>people</strong> and{' '}
          <strong>pets</strong> sick. Dogs and cats can shed <em>Salmonella</em> or Shiga
          toxin–producing <em>E. coli</em> (STEC) even without obvious symptoms, contaminating
          bowls, floors, bedding, and surfaces. Freezing does <em>not</em> reliably kill these
          bacteria. People in higher-risk groups (young children, older adults, pregnant individuals,
          and those with weakened immune systems) are more likely to suffer severe disease, including
          kidney failure from STEC or invasive listeriosis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Step-by-Step: How to Check Your Freezer</h2>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>
            <strong>Find the lot code.</strong> For Darwin’s products identified in the advisory,
            the lot code is printed on the front of the lower-left unit of the 2-lb package. Compare
            your package to the lot list above.
          </li>
          <li>
            <strong>If it matches, do not feed it.</strong> Do not open it &mdash; keep it sealed to
            avoid spreading contamination.
          </li>
          <li>
            <strong>Dispose of it securely.</strong> Place the unopened package in a sealed bag and
            discard it in a trash container that animals can’t access. Do not donate it or share it.
          </li>
          <li>
            <strong>Clean and disinfect.</strong> Wash hands thoroughly and clean any surfaces,
            containers, or utensils that contacted the product. See the <em>Cleanup</em> section
            below for safe, food-grade sanitizing guidance.
          </li>
          <li>
            <strong>Document and report.</strong> Photograph the label and lot code before disposal.
            If your pet or a family member is ill, contact your veterinarian or physician and report
            the product via FDA’s Safety Reporting Portal.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Symptoms to Watch For — People</h2>
        <p className="mb-2">
          <strong>Salmonella (people):</strong> Watery diarrhea (sometimes with blood or mucus),
          stomach cramps, fever, headache, nausea, and vomiting. Symptoms typically begin <em>6
          hours to 6 days</em> after exposure and often last 4–7 days. Seek medical care if symptoms
          are severe (e.g., bloody diarrhea, signs of dehydration) or if the patient is very young,
          elderly, pregnant, or immunocompromised.
        </p>
        <p className="mb-2">
          <strong>Shiga toxin–producing E. coli (STEC), including O157:H7:</strong> Severe stomach
          cramps, diarrhea that is often <em>bloody</em>, and vomiting, typically starting <em>3–4
          days</em> after exposure (range 1–10 days). Do <strong>not</strong> use anti-diarrheals in
          suspected or confirmed STEC unless told by a clinician; they can increase the risk of
          hemolytic uremic syndrome (HUS), a kidney emergency marked by decreased urination, pale
          skin, fatigue/irritability, unusual bruising, and sometimes fever. Seek immediate care if
          HUS is suspected.
        </p>
        <p className="mb-4">
          <strong>Listeria (people):</strong> In higher-risk groups, symptoms can include fever,
          muscle aches, nausea, vomiting, and diarrhea, and may progress to headache, stiff neck,
          confusion, loss of balance, or convulsions. Pregnant people can have mild flu-like
          symptoms, but infection may lead to pregnancy loss, preterm labor, or serious newborn
          illness. Anyone with signs of invasive listeriosis should seek care promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Symptoms to Watch For — Dogs &amp; Cats</h2>
        <p className="mb-4">
          Pets exposed to <em>Salmonella</em> or STEC may show vomiting, diarrhea (sometimes
          bloody), fever, lethargy, and loss of appetite, or they may be asymptomatic carriers that
          still shed bacteria. In vulnerable animals (very young, senior, pregnant, or otherwise
          immunocompromised), disease can be more severe. Contact your veterinarian if your pet has
          concerning symptoms or was exposed to a product under an FDA advisory.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">If You Already Fed the Food</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Monitor for symptoms</strong> in the household and in pets for at least 10 days
            after exposure (to cover typical incubation windows).
          </li>
          <li>
            <strong>Do not self-treat suspected STEC</strong> with anti-diarrheals unless instructed
            by a clinician. For people, this can increase the risk of HUS.
          </li>
          <li>
            <strong>Call your veterinarian</strong> if your dog or cat develops gastrointestinal
            signs, is very young or immunocompromised, or if you have specific product exposure
            concerns. Your vet may recommend stool testing, supportive care, and isolation
            precautions to reduce environmental contamination.
          </li>
          <li>
            <strong>Practice strict hygiene</strong> during potty breaks and cleanup. Bag pet feces,
            wash hands thoroughly, and disinfect soiled areas promptly.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Cleanup &amp; Disinfection: Food-Safe Basics</h2>
        <p className="mb-4">
          First, <strong>wash</strong> hands and surfaces with hot, soapy water. For food-contact
          surfaces (bowls, scoops, counters, cutting boards), <strong>sanitize</strong> after
          cleaning. A simple food-contact sanitizing solution is <strong>1 tablespoon of unscented
          liquid chlorine bleach per 1 gallon</strong> of clean water. Flood the surface, allow
          appropriate contact time, then <strong>rinse</strong> and air dry. For non-food-contact
          areas (e.g., floors, trash bins), you can use an EPA-registered disinfectant per label
          directions or a stronger bleach solution frequently cited by CDC for general disinfection:
          <strong> 5 tablespoons (1/3 cup) bleach per 1 gallon</strong> of water (or 4 teaspoons per
          quart). Always follow product labels, ensure good ventilation, never mix bleach with
          ammonia or acids, and keep chemicals away from children and pets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Safe Handling for All Pet Foods (Extra Care with Raw)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Begin and end with clean hands; scrub for at least 20 seconds before and after handling
            pet food and treats.
          </li>
          <li>
            Wash bowls, scoops, storage containers, and prep surfaces after each use. Do not use the
            pet’s bowl as a scoop.
          </li>
          <li>
            Keep raw pet food <strong>separate</strong> from human food; use dedicated utensils and
            containers. Avoid thawing raw diets where human food is prepped.
          </li>
          <li>
            Clean refrigerators and freezers periodically; remember that freezing does not kill
            <em> Salmonella</em> or STEC.
          </li>
          <li>
            Vulnerable households (young children, older adults, pregnant, or immunocompromised) may
            wish to avoid raw diets entirely given added risk.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Reporting &amp; Documentation</h2>
        <p className="mb-4">
          If you suspect a pet food made someone or a pet sick, save photos of packaging and lot
          codes (if available) and <strong>report</strong> via FDA’s Safety Reporting Portal. Your
          veterinarian can also report on your behalf. You may additionally contact your state feed
          control program (often within the state department of agriculture), which collaborates
          with FDA on animal feed and pet food oversight.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Refunds, Returns &amp; Disposal — What Are Your Options?</h2>
        <p className="mb-4">
          When a company or retailer <strong>recalls</strong> a food, the recall notice often
          explains how to obtain a refund or replacement, and many retailers accept returns for a
          full refund. In a <em>Do Not Feed</em> advisory where a firm has <strong>not</strong>{' '}
          initiated a recall (as FDA noted for the Darwin’s lots at the time of the advisory), your
          options may be limited to disposal, and refund policies will generally depend on the
          retailer or manufacturer. In all cases: do not donate potentially contaminated food; bag
          and discard it securely to prevent access by other animals.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>If there is an official recall:</strong> Follow the recall notice; return the
            product as directed for a refund when allowed.
          </li>
          <li>
            <strong>If there is only an advisory:</strong> Contact the seller or manufacturer and
            ask about their return or credit policy; results will vary by business policy. Keep your
            proof of purchase and product photos.
          </li>
          <li>
            <strong>Always prioritize safety:</strong> If instructed to discard, do so securely.
            Never share or donate suspect lots.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Answers Pet Food: What a Warning Letter Means</h2>
        <p className="mb-4">
          An FDA Warning Letter outlines observed violations and contamination findings and demands
          corrective action. It is not a recall by itself, but it is serious. In the June 18, 2025
          letter posted July 8, 2025, FDA detailed multiple findings at Answers’ facility, including
          <em> Salmonella</em> (Newport, Kentucky, Typhimurium) and <em>Listeria monocytogenes</em>{' '}
          in sampled lots and <em>Listeria</em> on equipment and environmental surfaces, along with
          deficiencies under the animal food preventive controls regulation (21 CFR part 507). If
          you feed products from any raw manufacturer, monitor FDA’s recall and advisory pages,
          follow label instructions closely, and observe strict hygiene at home.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">For Boarding &amp; Daycare Operators</h2>
        <p className="mb-4">
          Facilities serving many dogs shoulder higher cross-contamination risk. Consider a written
          policy that either prohibits raw diets on premises or requires tightly controlled handling:
          sealed, clearly labeled containers; separate storage; dedicated utensils; staff PPE; and
          mandatory sanitizing of feeding areas after every meal. Log brand, product, and lot codes
          for anything handled onsite. In higher-risk settings or when puppies, pregnant dogs, or
          immunocompromised people frequent your facility, a <strong>no-raw</strong> policy can be a
          defensible choice aligned with major veterinary organizations that discourage raw or
          undercooked animal-source diets because of pathogen risk to humans and pets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            FDA’s July 29, 2025 advisory instructs owners to <strong>not feed</strong> specific
            Darwin’s lots and to <strong>discard</strong> them; the company had not recalled them at
            the time of the advisory.
          </li>
          <li>
            <em>E. coli</em> O157:H7 in one lot was genetically matched to a child’s illness in
            2024; other lots tested positive for <em>Salmonella</em>. Freezing does not kill these
            pathogens.
          </li>
          <li>
            FDA’s Warning Letter to Answers Pet Food (posted July 8, 2025; dated June 18) cites{' '}
            <em>Salmonella</em> and <em>Listeria</em> across sampled lots and CGMP/preventive-controls
            violations. A Warning Letter is not a recall.
          </li>
          <li>
            Know the symptoms, clean and sanitize properly, and report suspected food problems to
            FDA’s Safety Reporting Portal.
          </li>
          <li>
            Refunds are typically outlined for <strong>recalls</strong>; when only an advisory
            exists, retailer or manufacturer policies govern returns. When in doubt, prioritize safe
            disposal.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            FDA Advisory (July 29, 2025): Do Not Feed Certain Lots of Darwin’s Natural Pet Products
            Pet Food Due to <em>E. coli</em> O157:H7 and <em>Salmonella</em>.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/fda-advisory-do-not-feed-certain-lots-darwins-natural-pet-products-pet-food-due-e-coli-o157h7-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            FDA Warning Letter (posted July 8, 2025; dated June 18, 2025): Lystn LLC dba Answers Pet
            Food.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/lystn-llc-dba-answers-pet-food-694680-06182025"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            CDC — <em>Salmonella</em> Infection: Symptoms &amp; Timeline.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/salmonella/signs-symptoms/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            CDC — About <em>E. coli</em> (incl. STEC) &amp; Treatment Guidance.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/ecoli/about/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/ecoli/treatment/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov (treatment)
            </a>
          </li>
          <li>
            CDC — Symptoms of <em>Listeria</em> Infection; FDA — Listeria Overview.{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/listeria/signs-symptoms/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://www.fda.gov/food/foodborne-pathogens/listeria-listeriosis"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            FDA — Tips for Safe Handling of Pet Food &amp; Treats.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            USDA FSIS — Cutting Boards: Sanitizing with 1 tbsp bleach per gallon.{' '}
            <a
              className="underline"
              href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/cutting-boards"
              target="_blank"
              rel="noopener noreferrer"
            >
              fsis.usda.gov
            </a>
          </li>
          <li>
            CDC — Cleaning &amp; Disinfecting with Bleach (general disinfection ratios).{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            FDA — How to Report a Pet Food Complaint (Safety Reporting Portal).{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/report-problem/how-report-pet-food-complaint"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            AAFCO — Where to File a Complaint (State Feed Control Programs).{' '}
            <a
              className="underline"
              href="https://www.aafco.org/consumers/file-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aafco.org
            </a>
          </li>
          <li>
            FoodSafety.gov — Food Recalls: What You Need to Know (refunds &amp; disposal basics).{' '}
            <a
              className="underline"
              href="https://www.fda.gov/food/buy-store-serve-safe-food/food-recalls-what-you-need-know"
              target="_blank"
              rel="noopener noreferrer"
            >
              foodsafety.gov
            </a>
          </li>
          <li>
            FDA — Pet Food Regulation Overview (FD&amp;C Act; sanitary conditions; truthful
            labeling).{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/animal-foods-feeds/pet-food"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            AVMA Policy — Raw or Undercooked Animal-Source Protein in Cat &amp; Dog Diets.{' '}
            <a
              className="underline"
              href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
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
          This article is for general informational purposes and does not replace medical or
          veterinary advice. If you suspect illness related to pet food exposure, contact your
          physician or veterinarian promptly.
        </p>
      </main>
    </>
  );
}
