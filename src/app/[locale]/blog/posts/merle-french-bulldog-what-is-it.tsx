'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MerleFrenchBulldogWhatIsIt() {
  const locale = useLocale();

  const title = 'Merle French Bulldog: What Is It?';
  const date = 'August 28, 2025';
  const categories = ['owner', 'breed_specific_guides', 'breeder'] as const;

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

  const description =
    'A comprehensive, evidence-informed guide to merle French Bulldogs: what merle is (genetics and patterns), breed-standard status, ethics, typical asking-price dynamics, health considerations (hearing, eye, skin), care and grooming, buyer due diligence, responsible breeding cautions, and practical checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/merle-french-bulldog-what-is-it`}
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
            <li><a href="#what" className="underline hover:opacity-80">What Is Merle?</a></li>
            <li><a href="#recognition" className="underline hover:opacity-80">Recognition & Ethics</a></li>
            <li><a href="#cost" className="underline hover:opacity-80">Cost & Market Reality</a></li>
            <li><a href="#appearance" className="underline hover:opacity-80">How Merle Looks (vs. Other Frenchies)</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Considerations</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Care & Grooming</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Temperament & Training</a></li>
            <li><a href="#breeding" className="underline hover:opacity-80">Breeding Cautions</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Daycare/Boarding Notes</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              A <strong>merle French Bulldog</strong> is a Frenchie whose coat shows a mottled or marbled pattern due to the <strong>merle gene</strong> at the M locus. The pattern can lighten base color in irregular patches and sometimes accompanies light eyes. <strong>Most breed standards do not recognize merle</strong> in French Bulldogs, and responsible breeding requires genetic testing and strict pairing rules. Health risks rise sharply if two merles are bred together (<em>double merle</em>), which is why <strong>merle-to-merle breeding is unsafe</strong>.
            </p>
            <p className="mb-2">
              <strong>Cost:</strong> sellers often advertise merle Frenchies at a premium versus standard colors. Pricing varies widely by region, breeder quality, and demand. Health testing, temperament, and breeder accountability should matter far more than color.
            </p>
            <p className="mb-0">
              <strong>Care:</strong> daily fold and ear hygiene, heat awareness (brachycephalic safety), and routine training/socialization are the priorities. Ask your veterinarian about <strong>BAER hearing</strong> testing and a <strong>puppy eye exam</strong>, especially for merles.
            </p>
          </div>
        </section>

        {/* WHAT IS MERLE */}
        <section id="what" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is Merle? Genetics, Variants & Why It Matters</h2>
          <p className="mb-3">
            <strong>Merle</strong> is a coat pattern caused by variation at the <strong>M locus</strong>, affecting pigment distribution. At the cellular level, merle alters how pigment cells deposit color in hair and sometimes in the iris and inner ear tissues. The result can be <em>mottled patches</em>, <em>marbling</em>, and <em>lighter areas</em> that overlay a base coat like fawn, brindle, or chocolate. Some merle dogs have <strong>blue or partially blue eyes</strong>, and many have <strong>pink skin on the nose or paws</strong> where pigment is reduced.
          </p>
          <p className="mb-3">
            Modern genetic testing describes not just a simple merle vs. non-merle state, but a <strong>spectrum of merle-length alleles</strong> (sometimes called <em>cryptic</em>, <em>atypical</em>, <em>classic</em> merle, etc.). Why does this matter for a family choosing a puppy? Because pairing a merle with another merle (even a cryptic variant) can produce a <strong>double merle</strong> puppy. Double merles have <em>very high risk</em> of serious <strong>hearing and eye abnormalities</strong>. In plain language: <strong>do not breed merle to merle</strong>. Ethical breeders confirm merle status by DNA test and avoid risky pairings.
          </p>
          <p className="mb-3">
            The presence of merle in French Bulldogs is controversial. The traditional Frenchie color palette does not include merle in most breed standards, and its appearance in the population is often linked to historical crossbreeding with merle-carrying breeds. That history explains both the <strong>recognition debate</strong> and the need for extra diligence about health testing.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key takeaway:</strong> Merle itself is a pigment pattern, not a temperament. The <em>risk</em> is in the genetics of pairings and in unscrupulous breeding practices. DNA testing and responsible mate selection make the difference.
          </div>
        </section>

        {/* RECOGNITION & ETHICS */}
        <section id="recognition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Recognition & Ethics: What Do Registries Say?</h2>
          <p className="mb-3">
            In many countries, <strong>merle is not a recognized pattern for French Bulldogs</strong> in conformation show standards. Breed clubs and registries emphasize preserving health and type; patterns outside the standard raise concerns about historic crossbreeding and welfare due to increased risk if bred irresponsibly. This does not mean a merle Frenchie cannot be loved, trained, and healthy. It does mean that buyers should be <strong>skeptical of hype</strong> and should demand transparent, health-first breeding practices when purchasing any puppy, merle or not.
          </p>
          <p className="mb-3">
            Ethical signals to look for include: transparent pedigree information; <strong>DNA testing for merle status</strong>; a contract that <strong>forbids merle-to-merle breeding</strong>; BAER hearing test availability; early eye exam by a veterinary ophthalmologist; and breeder willingness to discuss the breed standard and why they made their choices. If a seller leans heavily on <em>rare color</em> marketing while downplaying health and temperament, treat that as a red flag.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Plain English:</strong> You can love the look and still make a health-first choice. Ask to see test results. Ask to meet the dam and, when possible, the sire. Ask about socialization and returns. Pick people before pigment.
          </div>
        </section>

        {/* COST */}
        <section id="cost" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cost & Market Reality: Why Prices Vary</h2>
          <p className="mb-3">
            Families often ask, &ldquo;How much does a merle Frenchie cost?&rdquo; The honest answer is that <strong>prices vary widely</strong> by region, breeder expertise, demand, lines, and what is included (health testing, early training, guarantees, support). Sellers frequently advertise <strong>premium prices</strong> for unusual colors or patterns. Price is not a proxy for quality. Some of the most responsible breeders charge <em>less</em> than flashy marketers because they are not monetizing color as a luxury feature; they are investing in health, temperament, and post-placement support.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Drivers of price:</strong> breeder reputation and accountability; proven health testing; scarcity marketing; included veterinary care; early training and socialization; geography; and contract terms.</li>
            <li><strong>Healthy skepticism:</strong> a large price tag should come with <em>more</em> proof of quality, not less. Request BAER hearing results, eye exam notes, and DNA test summaries for the parents.</li>
            <li><strong>Ongoing costs:</strong> consider insurance, preventive care, grooming supplies, training classes, and potentially higher out-of-pocket costs if hearing or eye issues are detected later.</li>
          </ul>
          <p>
            Bottom line: <strong>do not let color drive your budget</strong>. Pay for ethics, testing, and fit. If a price premium is justified, it should be tied to objective care and support, not just a pigment pattern.
          </p>
        </section>

        {/* APPEARANCE */}
        <section id="appearance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Merle Looks (and How It Differs from Other Frenchies)</h2>
          <p className="mb-3">
            Merle overlays a <em>marbled</em> pattern on the base coat. You might see lightened patches that look swirled or stippled. Contrast this with <strong>brindle</strong> (tiger-like striping on a darker base), <strong>pied</strong> (clear patches of white with color), <strong>fawn</strong> (uniform tan to red with or without a black mask), or <strong>dilutes</strong> like blue (a soft grey tone). Merle is <em>pattern, not color</em>, and it can coexist with other color genetics.
          </p>
          <p className="mb-3">
            Because merle reduces pigment, you may also notice <strong>light eye color</strong> (blue or partially blue) and <strong>pink skin</strong> on lips, nose, or paw pads. Some merles are subtle (<em>cryptic</em> merle) and look like non-merle dogs until DNA testing reveals their status. This subtlety is one reason why untested breedings can accidentally create double merles.
          </p>
          <p className="mb-3">
            A merle Frenchie does <strong>not</strong> have a different temperament because of merle alone. Temperament is the product of genetics across the whole dog and of early socialization. Visual differences should not change your expectations for training, manners, or affection. Choose for <strong>fit with your home</strong>, not a pattern.
          </p>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Considerations: Hearing, Eyes, Skin & General Frenchie Care</h2>
          <p className="mb-3">
            French Bulldogs, regardless of pattern, are <strong>brachycephalic</strong> and require heat awareness and airway-smart routines. Add merle genetics and you introduce a <strong>pairing-dependent</strong> risk layer. The largest red flags concentrate in <strong>double merles</strong>, yet even single merles deserve thoughtful screening.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hearing (BAER) & Inner Ear Development</h3>
          <p className="mb-3">
            The same pigment pathways that lighten coat may also affect structures in the inner ear. That is why merle patterns are associated with a higher incidence of <strong>congenital sensorineural deafness</strong> in some breeds, especially when two merles are bred. Ask for a <strong>BAER test</strong> (Brainstem Auditory Evoked Response) result if available, or schedule one with your veterinarian or a referral center after adoption.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Eyes (Ophthalmology Exam)</h3>
          <p className="mb-3">
            Double merles can present with <strong>ocular abnormalities</strong> such as microphthalmia (abnormally small eyes), colobomas, or vision deficits. Single merles may not have these issues, but an <strong>early baseline eye exam</strong> by a veterinary ophthalmologist is an excellent idea, especially if you notice unusual eye color or light sensitivity.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Skin & Sun Sensitivity</h3>
          <p className="mb-3">
            Areas of diluted pigment may be <strong>more sun sensitive</strong>. Limit intense midday sun exposure and provide shade. Skin folds, a Frenchie hallmark, still need daily attention regardless of pattern. Use gentle wipes and <strong>dry thoroughly</strong> to reduce yeast or bacterial overgrowth. Report redness, odor, or discomfort to your veterinarian early.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Frenchie Baseline Risks Still Apply</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Heat intolerance:</strong> plan walks for cool hours, prioritize indoor climate control, and watch for labored breathing.</li>
            <li><strong>Ear care:</strong> check weekly; clean only when waxy or as advised by your veterinarian.</li>
            <li><strong>Orthopedic/back awareness:</strong> limit stairs and jumping; keep nails trimmed for posture.</li>
            <li><strong>Weight management:</strong> a lean body condition helps breathing, joints, and skin.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical plan:</strong> request BAER results, schedule an eye exam, keep a photo log of any skin or eye changes, and share these with your veterinarian at wellness visits.
          </div>
        </section>

        {/* CARE & GROOMING */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Care & Grooming: Simple Systems That Work</h2>
          <p className="mb-3">
            Merle Frenchies do not require exotic products. They do benefit from <strong>consistent routines</strong> and a few pattern-aware habits. Build a weekly rhythm and write it down so everyone in the household follows the same playbook.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Rhythm (20–30 Minutes Total)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Brush:</strong> 3–5 minutes with a rubber curry mitt or hound glove to lift loose hair and dander.</li>
            <li><strong>Fold care:</strong> gentle wipe and thorough dry; catch problems early.</li>
            <li><strong>Ears:</strong> visual check; clean with a vet-approved solution only when needed.</li>
            <li><strong>Nails:</strong> trim or grind weekly to protect posture and prevent splits.</li>
            <li><strong>Bath:</strong> monthly or as advised; rinse well and dry folds and ears completely.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Sun & Skin Management</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Prefer shade during peak hours; use light-colored cooling mats indoors.</li>
            <li>For lightly pigmented noses, ask your veterinarian about safe sun strategies.</li>
            <li>Rinse and dry after water play; moisture in folds invites yeast and bacteria.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> store your grooming stack and set repeat reminders. Add photos of folds, ears, and any skin hotspots so trends are easy to review.
          </div>
        </section>

        {/* TEMPERAMENT & TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament & Training: Pattern Does Not Define Personality</h2>
          <p className="mb-3">
            Merle does not alter temperament. Choose and raise your dog for the <strong>life you want together</strong>: polite greetings, loose-leash walks, calm crate time, and reliable recall. Use short, frequent sessions with food and praise. Socialize thoughtfully: sights, sounds, surfaces, people, and polite dogs in clean spaces that verify vaccines.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reward quiet attention and relaxation on a mat. Calm beats hype.</li>
            <li>Practice cooperative care: chin rest for brushing, stillness for nail trims, and brief ear looks.</li>
            <li>Leash skills in cool hours with a comfortable harness. Avoid intense heat.</li>
          </ul>
        </section>

        {/* BREEDING CAUTIONS */}
        <section id="breeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breeding Cautions: Why Merle-to-Merle Is Not Acceptable</h2>
          <p className="mb-3">
            To repeat the core rule: <strong>never breed merle to merle</strong>. The risk of deafness and serious eye defects in double merles is unacceptably high. Responsible breeding pairs a <strong>merle to a confirmed non-merle</strong>, and ideally uses DNA testing to avoid cryptic-merle surprises. Contracts should forbid merle-to-merle matings in pet homes and require spay/neuter when appropriate.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>DNA test both parents for merle status and other relevant color genes that can interact with merle expression.</li>
            <li>Perform BAER testing on litters where feasible. Keep detailed records and disclose results.</li>
            <li>Make placement decisions that prioritize health and temperament over color marketing.</li>
          </ul>
          <p>
            If you are buying as a family companion, choose a breeder who <strong>acts like a steward</strong> rather than a hype merchant. If you are rescuing, partner with your veterinarian to set up smart screening and care over the first months.
          </p>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daycare & Boarding: Practical Notes for Merle Frenchies</h2>
          <p className="mb-3">
            Great facilities use a <em>play → rest → hygiene</em> rhythm for all breeds. For merle Frenchies, add explicit <strong>heat-awareness rules</strong> and <strong>fold-dry routines</strong>. Provide staff your Petunia profile with your dog&rsquo;s gear and comfort notes so everyone follows the same plan.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Share harness fit preferences and cooldown schedules.</li>
            <li>Request post–water play fold drying and same-day alerts for any redness or odor.</li>
            <li>Confirm indoor climate control during heat waves and ask for shorter outdoor blocks.</li>
          </ul>
        </section>

        {/* TEMPLATES & CHECKLISTS */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Buyer Due Diligence (Merle-Specific)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ask for <strong>DNA test summaries</strong> for both parents confirming merle status and excluding a second merle pairing.</li>
            <li>Request any <strong>BAER hearing</strong> results and early <strong>eye exam</strong> notes for the puppy or past litters.</li>
            <li>Review contract language that <strong>forbids merle-to-merle breeding</strong> and details health guarantees.</li>
            <li>Meet the dam and, if possible, the sire. Observe temperament. Ask about socialization practices.</li>
            <li>Ask how the breeder screens homes and supports families after the sale. Accountability matters.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Veterinary First-Visit Plan (Merle)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bring all paperwork: vaccine and deworming dates, diet, microchip number, and any test summaries.</li>
            <li>Discuss scheduling <strong>BAER testing</strong> if not already completed.</li>
            <li>Ask for a baseline <strong>ophthalmology exam</strong> if eyes appear unusually light or if there is light sensitivity.</li>
            <li>Review heat safety, harness fit, and any airway concerns typical for brachycephalics.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly Grooming Rhythm (Merle Frenchie)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Brush with rubber mitt → quick ear glance → fold wipe and dry → reward calm chin rest.</li>
            <li>Swap throws and wash crate pads weekly; rinse and dry after water play.</li>
            <li>Keep nails short and log dates in Petunia. Short nails protect posture.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> save your due-diligence checklist, upload test summaries, and set recurring grooming and climate-control reminders so family, sitters, and daycare stay in sync.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are merle French Bulldogs purebred?</strong><br />
            Many merle Frenchies are sold as purebred, but merle is not part of the historical Frenchie palette in most breed standards. Transparency about pedigree and DNA testing is essential. Ask tough questions and prioritize health and temperament.
          </p>

          <p className="mb-3">
            <strong>Are merles recognized by registries?</strong><br />
            In many countries and in many breed clubs, merle is <strong>not recognized</strong> for French Bulldogs in conformation standards. Policies differ by registry and change over time. If showing matters to you, verify the current standard before purchase.
          </p>

          <p className="mb-3">
            <strong>Is merle dangerous?</strong><br />
            Merle is a pattern. The <strong>danger</strong> is in <strong>merle-to-merle breeding</strong>, which creates double merles at high risk for serious hearing and eye defects. Responsible breeders avoid this pairing and use DNA tests to prevent cryptic-merle surprises.
          </p>

          <p className="mb-3">
            <strong>Do merle Frenchies have more health problems than other Frenchies?</strong><br />
            A single merle pattern does not guarantee health problems. However, double merles carry markedly higher risk of hearing and eye defects. All Frenchies, regardless of pattern, need brachycephalic-aware care, skin-fold hygiene, and smart heat management.
          </p>

          <p className="mb-3">
            <strong>Why are merle Frenchies so expensive?</strong><br />
            Many sellers market unusual patterns at a premium. Price alone does not equal quality. Ask for proof of testing, training, and support; do not pay more for color while getting less care.
          </p>

          <p>
            <strong>Can a merle Frenchie have blue eyes?</strong><br />
            Yes, merle can be associated with blue or partially blue eyes. Eye color by itself tells you little about health; pair it with hearing and eye exams for a full picture.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              UC Davis Veterinary Genetics Laboratory (VGL). <em>Merle (M Locus) Overview & Testing</em> (genetics, cryptic merle, breeding cautions).{' '}
              <a href="https://vgl.ucdavis.edu/test/merle" target="_blank" rel="noopener noreferrer">
                https://vgl.ucdavis.edu/test/merle
              </a>
            </li>
            <li>
              George M. Strain, PhD. <em>Deafness in Dogs & Cats</em> (pigment-associated deafness background; BAER testing).{' '}
              <a href="http://www.lsu.edu/deafness/" target="_blank" rel="noopener noreferrer">
                http://www.lsu.edu/deafness/
              </a>
            </li>
            <li>
              The Kennel Club (UK). French Bulldog breed information &amp; color guidance (recognition context).{' '}
              <a href="https://www.thekennelclub.org.uk/search/breeds-a-to-z/breeds/utility/french-bulldog/" target="_blank" rel="noopener noreferrer">
                thekennelclub.org.uk &ndash; French Bulldog
              </a>
            </li>
            <li>
              French Bull Dog Club of America (FBDCA). Breed standard and color notes (recognition context).{' '}
              <a href="https://frenchbulldogclub.org/breed-standard/" target="_blank" rel="noopener noreferrer">
                frenchbulldogclub.org &ndash; Breed Standard
              </a>
            </li>
            <li>
              American Kennel Club (AKC). French Bulldog breed overview (standard colors, health overview).{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                akc.org &ndash; French Bulldog
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Congenital and Hereditary Deafness</em>; <em>Ocular Disorders</em> (background on sensory defects; veterinary references).{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                merckvetmanual.com
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Guidelines. <em>Selecting a Pet Food</em> (general diet quality principles for all dogs).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                wsava.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and individualized care.
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
