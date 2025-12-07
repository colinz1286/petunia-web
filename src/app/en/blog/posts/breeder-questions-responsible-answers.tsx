'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BreederQuestionsResponsibleAnswers() {
  const locale = useLocale();

  const title =
    'Questions Responsible Breeders Should Be Ready to Answer (and Prove): A Practical, Evidence-Informed Foundation for Puppy Buyers';
  const date = 'June 12, 2025';
  const categories = ['breeder', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breeder: 'Breeders',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    food: 'Dog Food & Nutrition',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="A long-form, source-backed guide to the questions ethical breeders should be prepared to answer—covering health testing (OFA/CHIC, BVA, PennHIP), infectious-disease screening (Brucella canis), pregnancy and whelping protocols, early socialization, temperament, contracts and pet-purchase laws, microchipping, vaccination and deworming schedules, genetic diversity and COI, after-sale support, and what documents to show buyers."
        />
      </Head>

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

        {/* INTRO */}
        <p className="text-lg mb-4">
          Ethical, skilled breeding is not a vibe or a marketing page—it is a disciplined workflow
          you can <em>show</em>. The strongest breeders we know treat questions from potential
          clients as an invitation to demonstrate planning, documentation, veterinary collaboration,
          and long-term commitment to the dogs they produce. This article lays out a practical,
          evidence-informed foundation of questions responsible breeders should be ready to answer
          (and prove) before placing puppies. It is not exhaustive; it is a solid base you can adapt
          to your breed, country, and veterinary guidance.
        </p>

        <p className="mb-4">
          For buyers, use this as a conversation map. For breeders, treat it as a quality-control
          checklist. For both, remember that local law, your primary veterinarian, and your breed
          club&rsquo;s published testing scheme outrank any generalized internet advice.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">How to Read &amp; Use This Guide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Each section presents <strong>Buyer Questions</strong> (what an informed client will
              ask), <strong>Why It Matters</strong> (the health/behavior/ethics rationale), and{' '}
              <strong>What Good Looks Like</strong> (documents or data to show).
            </li>
            <li>
              We include primary references at the end (OFA/CHIC, BVA/KC schemes, AAHA vaccination
              guidance, CAPC parasites, CDC <em>Brucella canis</em>, Kennel Club &amp; AKC resources,
              etc.).
            </li>
            <li>
              Replace examples with your breed&rsquo;s specific requirements (hips/elbows, eyes,
              cardiac, breed-specific DNA tests, temperament standards, working titles).
            </li>
          </ul>
        </div>

        {/* SECTION 1: ETHOS & LIFETIME COMMITMENT */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">1) Ethos, Code of Ethics &amp; Lifetime Commitment</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>What guiding code of ethics or breeder standards do you follow?</li>
          <li>Do you take back or help rehome your dogs at any age if a buyer&rsquo;s situation changes?</li>
          <li>How do you screen buyers—and what placements will you decline?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Good breeders are custodians of a bloodline and of canine welfare. A written ethos and a
          lifetime take-back policy reduce shelter intakes and protect dogs from being sold on
          classifieds. Screening buyers (housing, work schedules, expectations, prior dog
          experience, budget for veterinary care, temperament fit) is a welfare tool, not gatekeeping.
          Reputable registries and veterinary organizations explicitly promote ethics, education, and
          buyer counseling as part of responsible breeding.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            A concise <strong>breeder statement</strong> or code of ethics aligned with reputable
            bodies (e.g., national kennel clubs, veterinary guidance) and breed-club testing lists.
          </li>
          <li>
            A <strong>take-back/rehoming clause</strong> in the sales contract that applies for the
            dog&rsquo;s lifetime and is actually honored in practice.
          </li>
          <li>
            A written <strong>screening process</strong> (application, interview, references) and
            clear criteria for declining a placement—plus help for the buyer to prepare for a future
            puppy if now is not the right time.
          </li>
        </ul>

        {/* SECTION 2: HEALTH TESTING & DOCUMENTATION */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">2) Health Testing: Orthopedic, Cardiac, Ophthalmic &amp; DNA</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>What <strong>orthopedic</strong> screenings (hips, elbows) do the sire and dam have?</li>
          <li>What <strong>eye</strong> (ophthalmic) and <strong>cardiac</strong> certifications are current?</li>
          <li>Which <strong>breed-specific DNA tests</strong> were run (e.g., PRA variants, DM, MDR1, breed-relevant conditions)?</li>
          <li>Do you use <strong>PennHIP</strong> (with DI values and percentile) or OFA/BVA for hips?</li>
          <li>Can I see <strong>proof</strong>—official certificate numbers, links to public databases, and dates?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Orthopedic dysplasias and inherited conditions vary by breed. High-quality programs follow
          the breed club&rsquo;s testing scheme and publish results (OFA/CHIC in the U.S.; BVA/KC in
          the UK; FCI equivalents elsewhere). PennHIP measures passive hip laxity and reports a
          distraction index (lower is better) with breed percentile—useful for selection. DNA tests
          are not a substitute for phenotypic screens (e.g., hip radiographs, auscultation/echo,
          ophthalmology exams), but they help avoid risk matings when variants are known. Buyers do
          not need a genomics lecture; they need proof the parents were screened and that those
          results informed mating decisions.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Certificates in a single folder</strong> (PDFs or printed) with easy-to-read
            summaries: OFA or BVA/KC numbers, dates, results, links to public listings, DNA panel
            results with variant statuses, ophthalmology (CAER), cardiac clearances.
          </li>
          <li>
            <strong>Breed-specific plan</strong> referencing the CHIC or breed-club testing list (for
            example: hips, elbows, eyes annually, cardiac, and named DNA tests). Note any tests not
            relevant to your line and why.
          </li>
          <li>
            <strong>Context talk</strong>: not just &ldquo;we tested&rdquo; but how results shaped
            the mating (e.g., avoiding carrier-to-carrier; preferring lower PennHIP DI; choosing
            mates with complementary strengths).
          </li>
        </ul>

        {/* SECTION 3: INFECTIOUS DISEASE CONTROL */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">3) Infectious-Disease Control (with <em>Brucella canis</em>)</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Do you screen breeding stock for <em>Brucella canis</em> before mating or import?</li>
          <li>What quarantine, sanitation, and visitor policies protect neonates and dams?</li>
          <li>
            How do you manage vaccination timing for dams and puppies, and how are high-risk
            exposures (parks, shows, pet-store floors) avoided until the series is underway?
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          <em>Brucella canis</em> compromises fertility, causes abortion, and poses a zoonotic risk
          to people. Responsible programs test new additions, screen prior to mating, and follow
          their veterinarian&rsquo;s protocols for isolation if there is any suspect result.
          Neonates are immunologically vulnerable; hygiene, limited traffic, and clean whelping
          spaces reduce pathogen load. Vaccine timing and deworming are coordinated with the
          veterinarian and documented for buyers.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Recent <em>Brucella canis</em> test results</strong> for sire/dam from a
            reputable lab, with your vet&rsquo;s sign-off.
          </li>
          <li>
            A short <strong>biosecurity SOP</strong> (handwashing, footwear policy, visitor limits,
            how you sanitize whelping boxes, when puppies first meet vetted adult dogs).
          </li>
          <li>
            <strong>Vaccine/deworming plan</strong> on a timeline (what the dam received pre-breeding,
            what the puppies receive and when).
          </li>
        </ul>

        {/* SECTION 4: PREGNANCY, WHELPING & NEONATAL CARE */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">4) Pregnancy, Whelping &amp; Neonatal Care</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>How do you confirm pregnancy and monitor dam health (nutrition, weight, calcium strategy)?</li>
          <li>What is your whelping plan (who attends, 24/7 observation, emergency vet on call)?</li>
          <li>Do you record birth weights, colostrum intake, and growth curves for each puppy?</li>
          <li>How do you prevent fading puppy syndrome and manage weak neonates?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Whelping is medical and logistical, not just sentimental. Weight charts detect failure to
          thrive. Backup colostrum/milk replacer planning matters. Calcium management reduces
          eclampsia risk. Temperature, humidity, and sanitation affect survival. A breeder who has a
          veterinary relationship and a written plan for complications is protecting both dam and
          litter.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>A concise <strong>whelping protocol</strong> with emergency contacts and criteria for transport.</li>
          <li>
            <strong>Daily weight charts</strong> for each puppy; notes on nursing, supplementation,
            and milestone checks (eyes/ears opening, thermoregulation, early elimination).
          </li>
          <li>
            A <strong>post-partum plan</strong> for the dam (nutrition, mastitis watch, uterine
            involution checks).
          </li>
        </ul>

        {/* SECTION 5: EARLY SOCIALIZATION & RAISING PUPPIES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">5) Early Socialization, Behavior &amp; Rearing Protocols</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>How do you socialize puppies before homing? What do their days look like from weeks 3–8+</li>
          <li>Do you introduce crate time, short car rides, novel surfaces and sounds, and handling?</li>
          <li>What temperament observations do you track, and how do you match puppies to homes?</li>
          <li>Do you start house-training habits and basic name/recall foundations?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          The socialization period (roughly 3–14 weeks) is uniquely sensitive. Early, controlled,
          positive exposures reduce fear later in life. Puppies raised with intentional handling,
          surfaces, sounds, and short separations tend to transition more smoothly to their homes.
          A breeder&rsquo;s daily routine shapes attention, startle recovery, and human trust long
          before a trainer ever meets the dog.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            A <strong>weekly plan</strong> of exposures: gentle handling, different textures, sound
            desensitization, car rides, calm visits outdoors (low-risk spaces), supervised meets with
            known, vaccinated adult dogs.
          </li>
          <li>
            <strong>Short crate sessions</strong> paired with chews; quiet-reward rules at night.
          </li>
          <li>
            <strong>House-training starts</strong>: predictable feeding, out-the-same-door, praise
            after elimination, enzyme cleanup for accidents.
          </li>
          <li>
            <strong>Observations log</strong> (individual notes rather than one-day &ldquo;tests&rdquo;),
            used to advise buyers on fit—active sport vs. mellow family, confident vs. sensitive, etc.
          </li>
        </ul>

        {/* SECTION 6: VACCINATION, DEWORMING, MICROCHIP, RECORDS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">6) Vaccination, Deworming, Microchipping &amp; Records</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Which core vaccines have puppies received, and on what schedule should buyers continue?</li>
          <li>What deworming products and fecal testing schedule were used?</li>
          <li>Are puppies <strong>microchipped</strong> before placement? Which registry is used?</li>
          <li>Do you provide a single packet with veterinary records, lot numbers, feeding plan, and care instructions?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Consistent, veterinarian-guided vaccination reduces parvo and distemper risk; deworming and
          fecal checks address common intestinal parasites. Microchipping improves return-to-owner
          rates if a dog is lost. Clear records reduce missed boosters and help the buyer&rsquo;s vet
          continue care seamlessly.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            A <strong>vaccine/deworming sheet</strong> (dates, products, lot numbers) and a vet
            record or signed health certificate at go-home.
          </li>
          <li>
            <strong>Microchip</strong> implanted and pre-registered (or registration instructions)
            plus the microchip number printed on contract and medical sheet; link to the AAHA
            universal lookup tool.
          </li>
          <li>
            A <strong>feeding &amp; transition plan</strong>, starter food, and instructions to keep
            treats &lt; 10% of daily calories.
          </li>
        </ul>

        {/* SECTION 7: GENETIC DIVERSITY, COI & EBV */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">7) Genetic Diversity, COI &amp; (Where Available) EBVs</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Do you track inbreeding (COI) in matings? What tools or registries do you use?</li>
          <li>In countries offering <strong>Estimated Breeding Values</strong> (EBVs) for hips/elbows, do you use them?</li>
          <li>How do you balance type, work, and diversity over multiple generations?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Concentrating genes can lock in excellence—and risk. Tracking COI and using mate-selection
          tools help reduce the chance of pairing carriers or shrinking the gene pool. Where EBVs are
          supported (e.g., The Kennel Club in the UK), they provide data-driven hip/elbow risk
          predictions beyond a single dog&rsquo;s score. Transparency about how diversity is managed
          shows buyers you are thinking beyond one litter.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>COI printout</strong> from your registry&rsquo;s mate-selection tool and a short
            note on why the proposed COI is acceptable for this pairing.
          </li>
          <li>
            If available, <strong>EBV screenshots</strong> for hips/elbows and how they informed
            selection.
          </li>
          <li>
            A <strong>3–5 year plan</strong> for rotating lines, occasional outcross within breed,
            and keeping multiple keepers to evaluate.
          </li>
        </ul>

        {/* SECTION 8: TEMPERAMENT & MATCHING */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">8) Temperament Selection &amp; Matching to Homes</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>What temperamental traits do you select for in the sire and dam?</li>
          <li>How do you observe puppies and advise on matches (sport vs. family vs. working placements)?</li>
          <li>What is your return-and-support policy if a match is not working out?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          A calm, curious, biddable dog is a safer, happier family member. Breeding decisions should
          weigh nerves and clarity, not just looks or titles. Matching is not a one-day &ldquo;test&rdquo;;
          it is longitudinal observation across weeks (startle recovery, human orientation, toy
          interest, environmental comfort). A return-and-support policy prevents failed matches from
          becoming crises.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Notes or short videos</strong> of each puppy in similar scenarios (new room,
            novel surface, gentle restraint, tug/food motivation, response to name) used to advise
            buyers honestly.
          </li>
          <li>
            A <strong>matching conversation</strong> that weighs lifestyle, prior experience, and
            expectations—not just &ldquo;first pick&rdquo;.
          </li>
          <li>
            <strong>Contract language</strong> allowing returns with breeder rehoming help and clear
            refund/credit terms.
          </li>
        </ul>

        {/* SECTION 9: CONTRACTS, WARRANTIES & LAW */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">9) Contracts, Warranties &amp; Pet-Purchase Laws</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>What does your sales contract include (identity, microchip, limited vs. full registration)?</li>
          <li>What health warranty do you provide, and how does it interact with state/provincial pet-purchase laws?</li>
          <li>What are your spay/neuter or breeding-rights terms? Do you require co-ownerships?</li>
          <li>Do you guarantee to take the dog back if the buyer cannot keep them?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Clear contracts protect both parties and the dog. Many jurisdictions have pet-purchase
          protection (&ldquo;lemon&rdquo;) laws that set minimum remedies. A warranty should never
          limit statutory rights. Spay/neuter timing and breeding-rights decisions are medical and
          ethical choices; they warrant individualized discussion with the buyer&rsquo;s veterinarian.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            A <strong>plain-language contract</strong> reviewed by counsel and aligned with local
            law, with microchip number, buyer and seller info, and disclosures.
          </li>
          <li>
            <strong>Warranty terms</strong> that complement, not reduce, statutory remedies; clear
            process for veterinary diagnosis and remedy (refund/replacement/medical contribution).
          </li>
          <li>
            Thoughtful <strong>spay/neuter guidance</strong> that references veterinary counsel and
            breed considerations; ethical, sparing use of co-ownerships.
          </li>
        </ul>

        {/* SECTION 10: TRANSPARENCY ABOUT LIMITS & TRADEOFFS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">10) Transparency About Limits, Tradeoffs &amp; Known Risks</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>What health risks are known in this breed/line, and how are you mitigating them?</li>
          <li>What traits are you still working to improve—and how?</li>
          <li>What support do you offer if medical or behavioral issues appear?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          No line is perfect. Honesty builds trust. Sharing OFA breed-statistics links, discussing
          the limits of DNA panels, acknowledging orthopedic or temperament risks, and explaining how
          you weigh mates shows the buyer you are not selling a fantasy—you are managing a living
          population with intention.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Links to <strong>breed statistics</strong> (hips, elbows, congenital issues) and a
            simple paragraph on how your program responds.
          </li>
          <li>
            <strong>After-sale support</strong>: response times, vet referrals, training resources,
            and an owner group or chat for your litters (with privacy boundaries).
          </li>
        </ul>

        {/* SECTION 11: LOGISTICS, HOMING AGE & SUPPORT */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">11) Homing Age, Travel, Starter Kits &amp; Ongoing Support</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Buyer Questions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>At what age do puppies go home, and why? Do littermates ever stay longer for observation?</li>
          <li>How do you handle shipping or ground transport—if at all?</li>
          <li>What starter kit, instructions, and check-ins do you provide after placement?</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Why It Matters</h3>
        <p className="mb-4">
          Most jurisdictions and veterinarians advise homing around eight weeks, when puppies have
          had foundational socialization with dam and litter but are ready to bond to people. Some
          breeds or individuals benefit from a few extra weeks (confidence, bite inhibition).
          Ethical transport minimizes stress and disease risk. Early check-ins reduce preventable
          problems during the transition week.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What Good Looks Like</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            A <strong>go-home packet</strong>: veterinary records, microchip, feeding plan, crate
            and potty routines, safe socialization checklist, and how to reach you.
          </li>
          <li>
            <strong>Scheduled follow-ups</strong> (24–48 hours, one week, one month) and an open
            door for training questions.
          </li>
        </ul>

        {/* SECTION 12: A PRACTICAL Q&A CHECKLIST */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">12) Practical Checklist: Ask &amp; Answer</h2>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Core Proof to Show a Buyer</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>OFA/BVA numbers, PennHIP DI reports, CAER eye exams, cardiac clearances.</li>
            <li>DNA panel results for breed-relevant variants; explanation of how they informed mating.</li>
            <li>Recent <em>Brucella canis</em> screens for breeding stock.</li>
            <li>Whelping records, neonatal weight charts, vaccine/deworm logs with products and lot numbers.</li>
            <li>Microchip number; registry info; breeder&rsquo;s lifetime take-back policy in writing.</li>
            <li>Contract reviewed for compliance with pet-purchase laws; clear warranty and refunds/returns process.</li>
            <li>COI/EBV tools (where available) and a short program-planning note.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Red Flags Buyers Should Notice</h3>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>No proof of health testing or reluctance to share official numbers/dates.</li>
          <li>Unwillingness to discuss <em>Brucella canis</em>, vaccine/deworming specifics, or biosecurity.</li>
          <li>Pressure selling, no buyer screening, &ldquo;first-come&rdquo; deposits with no conversation.</li>
          <li>Contracts that waive statutory rights or omit take-back/rehoming terms.</li>
          <li>Promises of &ldquo;no health problems in this line&rdquo; or guarantees not aligned with veterinary reality.</li>
        </ul>

        {/* OWNER EDUCATION SIDEBAR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner Education: Set Your Puppy Up to Win</h2>
        <p className="mb-4">
          A responsible breeder&rsquo;s job does not end at placement; a buyer&rsquo;s job begins.
          Before pickup, read your vet&rsquo;s vaccine schedule plan, understand safe early
          socialization (controlled exposures before the series is complete), and prepare a boredom-proof
          house: crate, pen, enzyme cleaner, safe chews, training treats, and a short daily schedule.
          Choose a local veterinary clinic, enroll in a vet-verified puppy class, and plan a humane
          training approach anchored in clarity and consistency rather than intimidation.
        </p>

        {/* SAMPLE BUYER EMAIL TEMPLATE */}
        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-10">
          <h3 className="text-lg font-semibold mb-2">Template: Buyer Questions Email (Copy &amp; Paste)</h3>
          <p className="mb-2">
            Hi &lt;Breeder Name&gt;, I love your program and am interested in a &lt;breed&gt; puppy.
            To help me learn, could you share:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>OFA/BVA or PennHIP results for the parents (links or PDFs), eye and cardiac clearances.</li>
            <li>DNA test results for breed-relevant conditions (carrier/clear), and how you used them for this mating.</li>
            <li>Recent <em>Brucella canis</em> screens for breeding stock.</li>
            <li>Whelping and neonatal care plan; sample daily weight chart; vaccine/deworm schedule.</li>
            <li>Microchip policy; example contract with warranty and take-back clause.</li>
            <li>How you track COI and (if available) EBVs; what diversity targets you aim for.</li>
            <li>How you socialize and match puppies; how you support owners after go-home.</li>
          </ul>
          <p className="mt-2">Thanks for your time—looking forward to learning more about your dogs.</p>
        </div>

        {/* KEY TAKEAWAYS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            Responsible breeders welcome questions and answer with <strong>evidence</strong>—test
            numbers, veterinary letters, logs, and clear policies.
          </li>
          <li>
            Health testing is <strong>multi-modal</strong>: orthopedic imaging, eye/cardiac exams,
            breed-specific DNA panels, and infectious-disease screening.
          </li>
          <li>
            Early socialization and rearing routines are daily work, not a weekend photoshoot; they
            shape adult behavior.
          </li>
          <li>
            Contracts and laws exist to protect the dog and both parties; clarity and fairness are
            part of ethics.
          </li>
          <li>
            Diversity management (COI, EBV where offered) and long-term planning prove that a program
            thinks beyond a single litter.
          </li>
        </ul>

        {/* REFERENCES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            OFA—Orthopedic Foundation for Animals: health testing, CHIC program, breed-specific
            recommendations.{' '}
            <a className="underline" href="https://www.ofa.org/" target="_blank" rel="noopener noreferrer">
              ofa.org
            </a>{' '}
            · CHIC overview.{' '}
            <a className="underline" href="https://www.ofa.org/chic-programs" target="_blank" rel="noopener noreferrer">
              ofa.org/chic-programs
            </a>
          </li>
          <li>
            PennHIP—University of Pennsylvania: methodology and distraction index information.{' '}
            <a
              className="underline"
              href="https://www.vet.upenn.edu/research/centers-labs/sections/orthopedic-surgery-research/pennhip"
              target="_blank"
              rel="noopener noreferrer"
            >
              vet.upenn.edu (PennHIP)
            </a>
          </li>
          <li>
            BVA/Kennel Club Canine Health Schemes—Hip &amp; Elbow.{' '}
            <a className="underline" href="https://www.bva.co.uk/canine-health-schemes/hip-scheme/" target="_blank" rel="noopener noreferrer">
              bva.co.uk (Hip Scheme)
            </a>{' '}
            ·{' '}
            <a className="underline" href="https://www.bva.co.uk/canine-health-schemes/elbow-scheme/" target="_blank" rel="noopener noreferrer">
              bva.co.uk (Elbow Scheme)
            </a>
          </li>
          <li>
            The Kennel Club (UK)—Mate Select &amp; COI; Estimated Breeding Values (where available).{' '}
            <a className="underline" href="https://www.thekennelclub.org.uk/health-and-dog-care/health/mate-select/" target="_blank" rel="noopener noreferrer">
              thekennelclub.org.uk (Mate Select)
            </a>
          </li>
          <li>
            AAHA—2022 Canine Vaccination Guidelines (core and non-core; schedules and considerations).{' '}
            <a
              className="underline"
              href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaha.org
            </a>
          </li>
          <li>
            CAPC—Companion Animal Parasite Council (puppy deworming, fecal testing, prevention).{' '}
            <a className="underline" href="https://capcvet.org/guidelines/general-guidelines/" target="_blank" rel="noopener noreferrer">
              capcvet.org
            </a>
          </li>
          <li>
            CDC—<em>Brucella canis</em> information for dog breeders and owners (zoonosis, testing).{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/brucellosis/clinicians/canine-brucellosis.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            AVSAB—Position Statement on Puppy Socialization (early, controlled socialization rationale).{' '}
            <a
              className="underline"
              href="https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              avsab.org (PDF)
            </a>
          </li>
          <li>
            AKC—Breeder Code of Ethics (example policies and breeder responsibilities).{' '}
            <a
              className="underline"
              href="https://www.akc.org/breeder-programs/code-of-ethics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org
            </a>{' '}
            · AKC DNA &amp; parentage verification.{' '}
            <a
              className="underline"
              href="https://www.akc.org/dna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org/dna
            </a>
          </li>
          <li>
            AAHA—Universal Pet Microchip Lookup Tool (aggregator of participating registries).{' '}
            <a
              className="underline"
              href="https://www.petmicrochiplookup.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              petmicrochiplookup.org
            </a>
          </li>
          <li>
            AVMA—Pet purchase protection (&ldquo;lemon&rdquo;) laws overview (U.S. state variability).{' '}
            <a
              className="underline"
              href="https://www.avma.org/resources-tools/animal-health-and-welfare/pet-purchase-protection-laws"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
          </li>
          <li>
            The Kennel Club—Assured Breeder Scheme resources (UK ethical framework).{' '}
            <a
              className="underline"
              href="https://www.thekennelclub.org.uk/dog-breeding/assured-breeder-scheme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              thekennelclub.org.uk
            </a>
          </li>
          <li>
            USDA APHIS—Animal Welfare Act breeder licensing overview (U.S.; where applicable).{' '}
            <a
              className="underline"
              href="https://www.aphis.usda.gov/aphis/ourfocus/animalwelfare/SA_Animal_Welfare_Act"
              target="_blank"
              rel="noopener noreferrer"
            >
              aphis.usda.gov
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general informational purposes and does not replace individualized
          legal, medical, or veterinary advice. Always follow your veterinarian&rsquo;s guidance and
          your jurisdiction&rsquo;s laws and breed-club requirements.
        </p>
      </main>
    </>
  );
}
