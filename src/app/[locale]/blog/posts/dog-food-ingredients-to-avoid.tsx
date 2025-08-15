'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogFoodIngredientsToAvoid() {
  const locale = useLocale();

  const title = 'Dog Food Ingredients To Avoid: A Practical, Evidence-Informed Guide for Pet Owners';
  const date = 'August 2, 2025';
  const categories = ['owner', 'vet'] as const;

  // Use the exact labels object from prior posts (unchanged keys/labels)
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

  const slug = 'dog-food-ingredients-to-avoid';

  const description =
    'A practical guide to dog food ingredients to avoid (and why), how to read labels, red flags vs. myths, and how to choose safer, complete-and-balanced products. Includes toxic ingredients (xylitol, allium powders), higher-risk preservatives or colorants, contamination risks (aflatoxin, pentobarbital), raw-pathogen concerns, boutique/BEG diet cautions, and a copy-paste shopping checklist with operator-grade detail. Professionally cited.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#how-to-read-labels" className="underline hover:opacity-80">How To Read Labels</a></li>
            <li><a href="#toxic-ingredients" className="underline hover:opacity-80">Toxic Ingredients (Never)</a></li>
            <li><a href="#higher-risk-additives" className="underline hover:opacity-80">Higher-Risk Additives</a></li>
            <li><a href="#contaminants" className="underline hover:opacity-80">Contaminants & Manufacturing Risks</a></li>
            <li><a href="#raw-diets" className="underline hover:opacity-80">Raw Diets & Pathogen Risk</a></li>
            <li><a href="#beg-diets" className="underline hover:opacity-80">BEG/Legume-Heavy Diets & DCM</a></li>
            <li><a href="#special-populations" className="underline hover:opacity-80">Puppies, Seniors & Medical</a></li>
            <li><a href="#myths" className="underline hover:opacity-80">Myths vs. Red Flags</a></li>
            <li><a href="#checklist" className="underline hover:opacity-80">Shopping Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Focus on two things: (1) <strong>avoid truly dangerous ingredients</strong> (e.g., xylitol, onion/garlic powders in treats), and (2) <strong>reduce known risk patterns</strong> (e.g., untested raw products, vague unnamed animal ingredients, poor quality-control claims). Choose a diet that is <strong>complete and balanced</strong> for your dog&apos;s life stage and made by a company that performs <strong>digestibility testing, nutrient validation, and contamination screening</strong>. When in doubt, ask the manufacturer the WSAVA questions and your veterinarian for case-specific advice.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Bottom line:</strong> Never feed dog foods or treats that list xylitol (a.k.a. birch sugar), and avoid products with onion or garlic powders. Be cautious with raw products (pathogens), unnamed meats/fats (traceability), and headline ingredients that crowd out balanced formulations. Confirm an AAFCO nutritional adequacy statement on the label and favor companies with strong QA/QC and published expertise.
          </div>
        </section>

        {/* How to read labels */}
        <section id="how-to-read-labels" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How To Read Dog Food Labels (What Matters Most)</h2>
          <p className="mb-3">
            Before debating individual ingredients, verify that the product is nutritionally appropriate. In the U.S., most complete diets carry an <em>AAFCO Nutritional Adequacy Statement</em> indicating whether the food is formulated to meet AAFCO profiles or proven by feeding trials for a specific life stage (growth, reproduction, adult maintenance, or all life stages). That statement is more important than any single ingredient claim because it addresses the <em>entire</em> nutrient profile rather than one component.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Find the AAFCO statement</strong> on the label. It should clearly state the life stage and whether the diet is complete and balanced by formulation or by feeding trials.</li>
            <li><strong>Ingredient list</strong> is ordered by weight as fed (with moisture). Fresh meats can appear high but dilute on a dry-matter basis; meat meals are denser. Use this list to spot red flags (e.g., xylitol, onion/garlic powders) and to understand sources of protein, fat, and carbohydrate.</li>
            <li><strong>Manufacturer transparency</strong>: companies that publish their nutrition team credentials, conduct digestibility testing, and perform contaminant screening inspire more confidence.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf1] p-4 text-sm">
            <strong>Pro tip:</strong> Compare labels side-by-side. Prioritize a clear AAFCO adequacy statement, named animal proteins/fats, and evidence of robust quality control over marketing superlatives.
          </div>
        </section>

        {/* Toxic ingredients */}
        <section id="toxic-ingredients" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Toxic Ingredients (Never in Dog Food or Treats)</h2>
          <p className="mb-3">
            A few ingredients are truly unsafe for dogs and should never appear on a label or in a recipe you offer. These belong in the hard-avoid category.
          </p>
          <h3 className="text-lg font-semibold mb-2">1) Xylitol (also labeled as birch sugar or wood sugar)</h3>
          <p className="mb-2">
            Xylitol is a sugar alcohol used as a sweetener in human products (gum, candies, peanut butter, toothpaste, syrups) and can be <strong>life-threatening</strong> to dogs due to hypoglycemia and potential liver injury. It has no place in dog food or treats. If you see it, skip the product immediately. Recheck peanut butter labels before using it to hide medications or stuff enrichment toys.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Other names: birch sugar, birch bark extract, wood sugar.</li>
            <li>Signs of poisoning can begin within minutes to hours; emergency care is essential.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">2) Onion or Garlic Powders (Allium species)</h3>
          <p className="mb-2">
            Concentrated onion or garlic powders can damage red blood cells and cause Heinz body hemolytic anemia in dogs. Tiny flavoring amounts in some human foods can be enough to cause problems, and powdered forms are more potent than fresh. Remove any treat or topper that lists these.
          </p>

          <h3 className="text-lg font-semibold mb-2">3) Grapes, Raisins, or Extracts</h3>
          <p className="mb-2">
            Grapes and raisins are toxic to many dogs and can lead to acute kidney injury. Avoid any dog product containing grape derivatives (e.g., extract, pomace) intended for flavor or antioxidants unless specifically validated as safe by the manufacturer and your veterinarian.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Non-negotiable rule:</strong> If a label lists xylitol/birch sugar, onion or garlic powder, or grape/raisin derivatives, <em>do not buy it</em>. Verify ingredient panels on treats as carefully as you do on complete diets.
          </div>
        </section>

        {/* Higher-risk additives */}
        <section id="higher-risk-additives" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Higher-Risk Additives (Proceed Carefully or Avoid)</h2>
          <p className="mb-3">
            Not every additive is dangerous; many serve legitimate functions (e.g., antioxidants to protect fats from oxidation). But some categories deserve scrutiny, either because they offer no nutritional value or carry regulatory caveats or consumer concerns.
          </p>

          <h3 className="text-lg font-semibold mb-2">1) Artificial Colors (e.g., FD&amp;C dyes; titanium dioxide)</h3>
          <p className="mb-2">
            Colorants do not improve nutrition. The European Union banned titanium dioxide (E171) for human foods and later removed authorization in feed for all animal species; the U.S. still allows certain colorants within limits. While an occasional colored kibble is unlikely to harm most dogs, many owners choose to avoid artificial colors entirely because the benefit is cosmetic only.
          </p>

          <h3 className="text-lg font-semibold mb-2">2) Certain Synthetic Antioxidants (BHA, BHT, Ethoxyquin) vs. Mixed Tocopherols</h3>
          <p className="mb-2">
            Antioxidants protect fats from rancidity. BHA, BHT, and ethoxyquin are permitted in U.S. animal foods within specific limits, and many large manufacturers have long safety experience using them. However, some brands voluntarily use mixed tocopherols (vitamin E) or rosemary extract instead to satisfy consumer preferences. If you prefer to avoid older synthetic preservatives, look for clearly stated alternatives and check best-by dates to ensure stability.
          </p>

          <h3 className="text-lg font-semibold mb-2">3) Propylene Glycol in Dog Treats</h3>
          <p className="mb-2">
            Propylene glycol helps keep semi-moist treats soft. It is <em>prohibited</em> in cat food because cats are sensitive to related hemolytic effects, but it is allowed in dog foods within limits. Some owners choose to avoid it for dogs as well, especially if their dog has a sensitive GI tract or multiple food intolerances. Choose freeze-dried or baked treats without humectants if you want to minimize additives.
          </p>

          <h3 className="text-lg font-semibold mb-2">4) Flavorings and Unnamed Animal Digests</h3>
          <p className="mb-0">
            Palatants and digests make food taste great. Prefer <strong>named</strong> sources (e.g., chicken fat, beef liver digest) over generic terms like "animal fat" or "meat digest" because named sources improve traceability and help you avoid specific allergens. Unnamed ingredients are not necessarily unsafe, but they offer less clarity when troubleshooting sensitivities or recalls.
          </p>
        </section>

        {/* Contaminants & manufacturing risks */}
        <section id="contaminants" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Contaminants &amp; Manufacturing Risks (What History Teaches)</h2>
          <p className="mb-3">
            Ingredient quality is only half the story; contamination risk and quality controls matter just as much. Several high-profile events have shaped modern pet food safety.
          </p>

          <h3 className="text-lg font-semibold mb-2">1) Aflatoxins (Mycotoxins) in Grains</h3>
          <p className="mb-2">
            Aflatoxins are natural toxins produced by certain molds that can grow on crops like corn or peanuts. They have caused multiple recalls when concentrations exceeded safe limits in finished dog foods. Reputable manufacturers test incoming lots and finished product to keep levels below regulatory thresholds.
          </p>

          <h3 className="text-lg font-semibold mb-2">2) Pentobarbital Adulteration</h3>
          <p className="mb-2">
            Trace pentobarbital, a euthanasia drug, has been detected in a few canned dog foods in the past, prompting recalls and investigations. While rare, these incidents underline why <strong>traceability of animal ingredients</strong> and strong supplier controls are vital. Responsible companies implement preventive controls and supplier verification to keep hazards out.
          </p>

          <h3 className="text-lg font-semibold mb-2">3) Melamine Crisis (2007)</h3>
          <p className="mb-0">
            In 2007, melamine and cyanuric acid adulteration of imported plant proteins led to a massive multinational recall and stricter oversight. The Food Safety Modernization Act (FSMA) and modern quality expectations arose in part from that episode. Today, established companies perform routine testing, supplier audits, and hazard analyses to prevent repeats.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf1] p-4 text-sm mt-3">
            <strong>What you can do:</strong> Prefer brands that can summarize their <em>hazard analysis and preventive controls</em>, provide lot-level recall lookups, and publish contact info for their in-house nutrition and QA teams.
          </div>
        </section>

        {/* Raw diets & pathogens */}
        <section id="raw-diets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Raw Diets &amp; Pathogen Risk (Know the Tradeoffs)</h2>
          <p className="mb-3">
            Raw and lightly cooked diets are popular, but raw animal-source proteins can carry pathogens such as Salmonella and Listeria. Studies have found contamination rates high enough to warrant caution. Professional organizations caution against raw feeding, especially in households with young children, elderly, pregnant, or immunocompromised people, and for dogs that serve as therapy animals visiting vulnerable populations.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Most dogs are asymptomatic carriers when exposed; the risk is often to <em>people</em> handling food or feces.</li>
            <li>Some therapy-dog programs prohibit raw-fed animals due to shedding risk.</li>
            <li>If you pursue raw, select companies that validate pathogen control (e.g., HPP with verification) and publish testing results. Store, thaw, and clean surfaces meticulously.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Risk management tip:</strong> Consider fully cooked, complete diets or balanced home-cooked recipes formulated by a board-certified veterinary nutritionist when immunocompromised people or therapy work are in the picture.
          </div>
        </section>

        {/* BEG diets & DCM */}
        <section id="beg-diets" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">BEG/Legume-Heavy Diets &amp; DCM (Where We Are Now)</h2>
          <p className="mb-3">
            Since 2018, the FDA has investigated reports of canine dilated cardiomyopathy (DCM) potentially associated with certain diets, often grain-free formulas high in legumes/potatoes or made by smaller brands. As of the latest updates, the FDA has <em>not</em> established a single causal ingredient or proven that diet alone causes all cases. That said, the signal led many clinicians to prefer established manufacturers with strong nutrition teams and to avoid boutique/exotic formulations lacking robust research.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>For breeds predisposed to DCM or dogs with cardiac history, consult your veterinarian before using grain-free or legume-heavy diets.</li>
            <li>Ensure any selected diet meets AAFCO standards for your dog&apos;s life stage and comes from a company with published expertise and quality controls.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf1] p-4 text-sm">
            <strong>Nuance matters:</strong> Some dogs thrive on carefully formulated grain-free diets. The problem is not the absence of grains per se, but inadequate formulation, sourcing, or testing in some products.
          </div>
        </section>

        {/* Special populations */}
        <section id="special-populations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Seniors, and Medical Considerations</h2>
          <p className="mb-3">
            Ingredient cautions change with life stage and medical status. Always match the diet to the dog in front of you and run changes by your veterinarian, especially if your dog has a chronic condition.
          </p>
          <h3 className="text-lg font-semibold mb-2">Puppies (Growth)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Choose products labeled complete and balanced for <strong>growth</strong> or <strong>all life stages</strong>. Large-breed puppies need controlled calcium and energy density to support joint health; confirm the AAFCO life-stage statement and ask the manufacturer for calcium and energy data.</li>
            <li>Avoid excessive boutique ingredients that displace essential nutrients, and avoid raw diets in households with vulnerable people due to pathogen risks.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Seniors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Senior dogs vary widely. Ask your vet about protein targets, joint support, and calorie adjustments. Prioritize digestibility, stable fats (protected by antioxidants), and clear sourcing.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Dogs with Medical Conditions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li><strong>Food allergies</strong>: Avoid vague, unnamed animal sources; prefer single-protein diets with named ingredients or use hydrolyzed veterinary diets during elimination trials.</li>
            <li><strong>GI sensitivities</strong>: Minimize humectants and rich palatants; choose moderate fat and proven digestibility.</li>
            <li><strong>Urinary, hepatic, renal</strong>: Work with your veterinarian on prescription formulations and avoid unsupervised supplements or extreme ingredient choices.</li>
          </ul>
        </section>

        {/* Myths vs red flags */}
        <section id="myths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myths vs. Real Red Flags</h2>
          <h3 className="text-lg font-semibold mb-2">Myth: All by-products are bad.</h3>
          <p className="mb-3">
            Not true. AAFCO-defined by-products often include nutrient-dense organ meats (liver, heart) that can be excellent sources of vitamins and minerals when used properly. The issue is not the term itself but <em>quality and balance</em>. Many board-certified nutritionists consider properly sourced by-products perfectly acceptable.
          </p>

          <h3 className="text-lg font-semibold mb-2">Myth: Grain-free automatically means healthier.</h3>
          <p className="mb-3">
            Also not true. Grain-free formulas can be fine when well formulated, but the absence of grains does not guarantee improved health. Evaluate the whole diet, the company behind it, and your individual dog&apos;s needs.
          </p>

          <h3 className="text-lg font-semibold mb-2">Real Red Flags</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>No AAFCO nutritional adequacy statement.</li>
            <li>Unwillingness to answer WSAVA-style questions (Who formulates your diets? What testing do you perform? Do you have a nutritionist on staff?).</li>
            <li>Unnamed animal ingredients like "meat" or "animal fat" without species, especially when paired with minimal quality assurances.</li>
            <li>Prominent use of marketing terms with little technical detail about safety testing or nutrient validation.</li>
          </ul>
        </section>

        {/* Shopping checklist */}
        <section id="checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Copy-Paste Shopping Checklist</h2>
          <h3 className="text-lg font-semibold mb-2">Green Lights (Look For)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Clear <strong>AAFCO nutritional adequacy statement</strong> for the correct life stage.</li>
            <li><strong>Named</strong> animal proteins and fats (e.g., chicken, beef liver, salmon oil).</li>
            <li>Manufacturer provides <strong>team credentials</strong>, <strong>digestibility data</strong>, and <strong>contaminant testing</strong> summaries.</li>
            <li>Antioxidants listed (mixed tocopherols or clearly dosed permitted preservatives) with a sensible best-by date.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Yellow Lights (Use Judgment)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Colorants and heavy flavor sprays that add no nutritional benefit.</li>
            <li>Propylene glycol in soft treats if your dog has a sensitive GI tract.</li>
            <li>Generic "animal fat" or "meat digest" without species, unless the company provides strong QA documentation and you are not managing an allergy.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Red Lights (Avoid)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Xylitol</strong> (also listed as birch sugar or wood sugar) in any pet product.</li>
            <li><strong>Onion or garlic powders</strong> in dog foods, toppers, or treats.</li>
            <li>Products from companies that cannot provide basic safety and nutrition answers on request.</li>
            <li>Raw products in homes with infants, elderly, immunocompromised people, or therapy-dog work without verified pathogen control and hygiene plans.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is "natural" always safer?</strong>
            <br />
            Not necessarily. The term has flexible meaning. Focus on life-stage adequacy, quality controls, and transparency. Many safe, high-quality diets use a mix of natural and synthetic nutrients to ensure stability and completeness.
          </p>

          <p className="mb-3">
            <strong>Are synthetic vitamins or minerals a problem?</strong>
            <br />
            No. They are routinely used to meet precise nutrient targets and ensure completeness. Problems arise from <em>deficiency or excess</em>, not from the synthetic nature per se.
          </p>

          <p className="mb-3">
            <strong>Should I avoid all by-products?</strong>
            <br />
            No. Properly sourced by-products can be nutritious. Evaluate the company&apos;s sourcing and quality control, not just the word on the label.
          </p>

          <p className="mb-3">
            <strong>How do I know a company is reputable?</strong>
            <br />
            Use the WSAVA questions: Who formulates the diets? What are the formulator&apos;s credentials? Do you run feeding trials and digestibility tests? Do you screen ingredients and finished products for contaminants (mycotoxins, pathogens, heavy metals)? Reputable companies answer readily.
          </p>

          <p className="mb-0">
            <strong>What if my dog is thriving on a diet that has one yellow-flag item?</strong>
            <br />
            Discuss with your veterinarian. One additive is rarely decisive in isolation; the overall formulation, testing, and your dog&apos;s health matter most. Keep records of body weight, stool quality, coat, and energy over time.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

          <h3 className="text-lg font-semibold mb-2">Labeling, Adequacy, and Selecting Foods</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              AAFCO. <em>Reading Pet Food Labels: A Quick Guide.</em>{' '}
              <a href="https://www.aafco.org/consumers/understanding-pet-food/reading-pet-food-labels/" target="_blank" rel="noopener noreferrer">
                https://www.aafco.org/consumers/understanding-pet-food/reading-pet-food-labels/
              </a>
            </li>
            <li>
              AAFCO. <em>Pet Food Labeling: Nutrition Facts, Ingredient Lists and More.</em>{' '}
              <a href="https://www.aafco.org/consumers/understanding-pet-food/" target="_blank" rel="noopener noreferrer">
                https://www.aafco.org/consumers/understanding-pet-food/
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Committee. <em>Selecting Pet Foods: Questions for Manufacturers.</em>{' '}
              <a href="https://wsava.org/wp-content/uploads/2020/01/Selecting-the-Best-Food-for-your-Pet.pdf" target="_blank" rel="noopener noreferrer">
                https://wsava.org/.../Selecting-the-Best-Food-for-your-Pet.pdf
              </a>
            </li>
            <li>
              FDA. <em>FDA’s Regulation of Pet Food.</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/fdas-regulation-pet-food" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../fdas-regulation-pet-food
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Toxic Ingredients</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              FDA. <em>Paws Off! Xylitol Is Toxic to Dogs.</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/paws-xylitol-toxic-dogs" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../paws-xylitol-toxic-dogs
              </a>
            </li>
            <li>
              FDA. <em>Paws Off! Xylitol (PDF handout).</em>{' '}
              <a href="https://www.fda.gov/media/150544/download" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/media/150544/download
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Food Hazards (Pet Owner Version).</em>{' '}
              <a href="https://www.merckvetmanual.com/special-pet-topics/poisoning/food-hazards" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../food-hazards
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Garlic and Onion (Allium spp) Toxicosis.</em>{' '}
              <a href="https://www.merckvetmanual.com/toxicology/food-hazards/garlic-and-onion-allium-spp-toxicosis-in-animals" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../allium-spp-toxicosis-in-animals
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Grape/Raisin Toxicity in Dogs.</em>{' '}
              <a href="https://www.merckvetmanual.com/toxicology/food-hazards/grape-raisin-and-tamarind-vitis-spp-tamarindus-spp-toxicosis-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/.../grape-raisin...toxicosis-in-dogs
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Additives &amp; Colorants</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              EU Commission. <em>Implementing Regulation (EU) 2022/63: Titanium Dioxide (E171) – Feed Additives.</em>{' '}
              <a href="https://eur-lex.europa.eu/eli/reg_impl/2022/63/oj" target="_blank" rel="noopener noreferrer">
                https://eur-lex.europa.eu/eli/reg_impl/2022/63/oj
              </a>
            </li>
            <li>
              EFSA. <em>Safety of Titanium Dioxide as a Food Additive: Not Considered Safe (2021 Opinion).</em>{' '}
              <a href="https://www.efsa.europa.eu/en/efsajournal/pub/6585" target="_blank" rel="noopener noreferrer">
                https://www.efsa.europa.eu/.../pub/6585
              </a>
            </li>
            <li>
              U.S. 21 CFR 573.100 (BHA); 573.940 (BHT); 573.380 (Ethoxyquin) – <em>Food Additives Permitted in Feed and Drinking Water of Animals.</em>{' '}
              <a href="https://www.ecfr.gov/current/title-21/part-573" target="_blank" rel="noopener noreferrer">
                https://www.ecfr.gov/current/title-21/part-573
              </a>
            </li>
            <li>
              AAFCO. <em>Propylene Glycol Is Not Allowed in Cat Foods.</em>{' '}
              <a href="https://www.aafco.org/consumers/what-is-in-pet-food/" target="_blank" rel="noopener noreferrer">
                https://www.aafco.org/consumers/what-is-in-pet-food/
              </a>{' '}
              &amp; 21 CFR 500.77.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Contaminants &amp; Recalls</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              FDA. <em>Cases of Aflatoxin Poisoning in Dogs – Midwestern Pet Foods (2021) and Related Recalls.</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/recalls-and-safety-alerts" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../recalls-and-safety-alerts
              </a>
            </li>
            <li>
              FDA. <em>Warning Letter: Midwestern Pet Foods, Inc. (Aug 2021).</em>{' '}
              <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/midwestern-pet-foods-inc-614255-08092021" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../midwestern-pet-foods-inc-614255-08092021
              </a>
            </li>
            <li>
              FDA. <em>Investigation: Pentobarbital in Certain Canned Dog Foods (2018).</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/cvm-updates/fda-alerts-pet-owners-and-veterinarians-pentobarbital-certain-canned-dog-foods" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../pentobarbital-certain-canned-dog-foods
              </a>
            </li>
            <li>
              FDA CVM. <em>2007 Melamine Pet Food Investigation (Background &amp; FSMA Context).</em>{' '}
              <a href="https://www.fda.gov/food/food-defense-initiatives/protein-surveillance-assignment-psa-summary-report" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../protein-surveillance-assignment-psa-summary-report
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Raw Diets &amp; Pathogens</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li>
              AVMA. <em>Policy: Raw or Undercooked Animal-Source Protein in Cat and Dog Diets.</em>{' '}
              <a href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/.../raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              FDA CVM. <em>Raw Pet Food Study: Salmonella and Listeria Findings.</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/news-events/raw-pet-foods-and-food-safety" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../raw-pet-foods-and-food-safety
              </a>
            </li>
            <li>
              CDC. <em>Outbreaks Linked to Raw Pet Foods: Salmonella Guidance.</em>{' '}
              <a href="https://www.cdc.gov/salmonella/pet-food-05-21/index.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/salmonella/pet-food-05-21/index.html
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">DCM &amp; Diet</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              FDA CVM. <em>FDA Investigation into Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy (DCM).</em>{' '}
              <a href="https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy" target="_blank" rel="noopener noreferrer">
                https://www.fda.gov/.../fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized nutrition and safety advice. Regulatory statuses can change; verify details on official agency websites and with manufacturers. Avoid any product that lists xylitol, onion or garlic powders, or grape/raisin derivatives in the ingredient panel.
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
