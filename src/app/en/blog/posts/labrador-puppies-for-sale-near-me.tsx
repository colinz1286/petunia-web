'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LabradorPuppiesForSaleNearMeGuide() {
  const locale = useLocale();

  const title = 'Labrador puppies for sale near me – a guide to finding the right dog';
  const date = 'August 28, 2025';
  const categories = ['owner', 'breeder', 'rescue'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breeder: 'Breeders',
    rescue: 'Rescues',
    boarding: 'Boarding',
    daycare: 'Daycare',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A practical, vet-informed guide for families searching “Labrador puppies for sale near me.” Learn how to evaluate rescues and responsible breeders, what health testing to ask for (hips, elbows, eyes, DNA), what contracts and guarantees should say, how to spot red flags, and how to assess puppy temperament so you find the right Lab for your home.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per your strict preference */}
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR Summary</a></li>
            <li><a href="#start-here" className="underline hover:opacity-80">Start Here: What “near me” actually means</a></li>
            <li><a href="#adoption-vs-breeder" className="underline hover:opacity-80">Adoption vs. Responsible Breeder</a></li>
            <li><a href="#find-rescue" className="underline hover:opacity-80">How to Find a Good Rescue or Shelter</a></li>
            <li><a href="#questions-rescue" className="underline hover:opacity-80">Questions to Ask a Rescue/Shelter</a></li>
            <li><a href="#find-breeder" className="underline hover:opacity-80">How to Find a Responsible Breeder</a></li>
            <li><a href="#questions-breeder" className="underline hover:opacity-80">Questions to Ask a Breeder</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Testing &amp; Veterinary Basics</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament Testing &amp; Aptitude Checks</a></li>
            <li><a href="#contracts" className="underline hover:opacity-80">Contracts, Guarantees &amp; Red Flags</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Budgeting: Upfront &amp; Lifetime Costs</a></li>
            <li><a href="#bring-home" className="underline hover:opacity-80">Bring-Home Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
          <p className="mb-4">
            Searching “Labrador puppies for sale near me” is a starting point, not a finish line. The right Labrador for your family is the dog whose
            health testing, temperament, and early upbringing match your home and goals. If you adopt, look for transparent medical and behavioral
            histories plus support after placement. If you work with a breeder, prioritize health screening (hips, elbows, eyes, and relevant DNA),
            puppy socialization, and a take-back promise. In both paths, ask detailed questions, review documentation, and meet the dog or litter
            in person whenever possible.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> After you choose your Lab, add vaccine dates, feeding notes, and vet contacts to your Petunia profile so your
            daycare or boarding provider can follow your veterinarian&#39;s plan exactly. Shared records prevent mix-ups and reduce stress on Day 1.
          </div>
        </section>

        {/* Start here */}
        <section id="start-here" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Start Here: What “near me” actually means</h2>
          <p className="mb-3">
            “Near me” is about more than distance on a map. It is also about fit. A breeder or rescue thirty minutes away with transparent practices,
            health testing, and good communication is “closer” to your long-term success than a questionable source five minutes down the road. Many
            families end up traveling for the right dog. That is normal for Labs, which are in high demand. Think of travel as part of the investment
            in the next decade of your family&#39;s life with a companion who truly matches your household.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Be flexible on driving radius.</strong> A safe, ethical source beats an easy pickup.</li>
            <li><strong>In-person matters.</strong> Seeing the living conditions and meeting people face to face reduces risk.</li>
            <li><strong>Verify digitally.</strong> Videos of the litter, the dam, and the facility can supplement—but not replace—visits.</li>
          </ul>
        </section>

        {/* Adoption vs breeder */}
        <section id="adoption-vs-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adoption vs. Responsible Breeder: Two good paths</h2>
          <p className="mb-3">
            Both adoption and responsible breeding can be excellent ways to welcome a Labrador. Neither path is automatically “better.” Each has a
            different process and paperwork, and each demands due diligence. Adoption can be faster and often helps a dog in immediate need. Working
            with a responsible breeder can give you more documented information about health testing and early socialization, plus support tailored to
            a specific bloodline and activity goals (family companion, field, service prospect, or sport).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Adoption: Strengths</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Helps a dog that needs a home; ethical and community-minded.</li>
                <li>Transparent rescues provide vetting records, behavior notes, and support.</li>
                <li>Often faster availability; sometimes adult Labs with known personalities.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Responsible Breeder: Strengths</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Documented health testing on parents (hips, elbows, eyes, DNA as appropriate).</li>
                <li>Predictable size, temperament tendencies, and activity level within a line.</li>
                <li>Structured socialization and lifetime take-back support are common.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Find rescue */}
        <section id="find-rescue" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Find a Good Rescue or Shelter</h2>
          <p className="mb-3">
            Excellent organizations are transparent about veterinary care, behavior evaluation, and post-adoption support. Many shelters post full
            records and invite meet-and-greets. Breed-specific Lab rescues are also strong options, because they understand typical Lab traits and
            can match energy levels and training histories to your home.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Transparency:</strong> They share medical intake records, vaccinations, deworming, spay/neuter status, microchip details, and any known concerns.</li>
            <li><strong>Behavior assessment:</strong> They provide notes on sociability, handling tolerance, startle recovery, resource guarding, and play style with dogs.</li>
            <li><strong>Meet-and-greet:</strong> They encourage multiple visits and allow you to bring family members and, if appropriate, your resident dog.</li>
            <li><strong>Return policy:</strong> Ethical rescues emphasize a safety net—dogs can be returned if the placement does not fit.</li>
            <li><strong>Foster insights:</strong> Foster-based rescues share detailed home notes about activity needs and routines.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask whether the rescue can share digital vaccine records. You can upload PDFs or images into Petunia so your
            boarding/daycare provider sees due dates and medications at a glance.
          </div>
        </section>

        {/* Questions for rescue */}
        <section id="questions-rescue" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask a Rescue or Shelter</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Medical:</strong> What vaccinations, deworming, microchip, and testing has the dog received? Any surgeries, injuries, or chronic issues noted by the veterinarian?</li>
            <li><strong>Behavior:</strong> How does the dog handle new people, new places, and routine handling? Any resource guarding observed with food or toys? Any noise sensitivity?</li>
            <li><strong>Dog-to-dog:</strong> Has the dog been introduced to calm dogs, puppies, or high-energy dogs? What supervision and decompression plan do you recommend for first weeks?</li>
            <li><strong>Activity:</strong> What daily structure keeps the dog calm and settled? How much exercise leads to overtired, overstimulated behavior?</li>
            <li><strong>History &amp; unknowns:</strong> What do you know about the dog&#39;s background? If unknown, what early training plan do you advise to fill in gaps?</li>
            <li><strong>Support:</strong> What is your return policy? Do you offer post-adoption training resources or behavior consults?</li>
          </ul>
        </section>

        {/* Find breeder */}
        <section id="find-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Find a Responsible Breeder</h2>
          <p className="mb-3">
            Look for people who breed with a purpose beyond sales: improving health, structure, and temperament; participating in field work, service,
            sport, or conformation; and standing behind every puppy for life. Responsible breeders plan litters, limit numbers, screen homes, and
            happily answer hard questions. Many work within Labrador breed clubs and follow published health screening guidelines.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Health testing on parents:</strong> OFA or PennHIP hips; OFA elbows; current ophthalmology exam; relevant DNA tests (e.g., EIC, PRA variants, CNM, HNPK) as indicated for Labradors.</li>
            <li><strong>Environment:</strong> Clean whelping and raising areas; appropriate surfaces; early neurological stimulation and socialization.</li>
            <li><strong>Purposeful pairings:</strong> They can articulate what they hoped to produce in structure and temperament and how the parents complement each other.</li>
            <li><strong>Limited registration for pets:</strong> Most companion puppies are sold on limited registration with spay/neuter timing discussed with your veterinarian.</li>
            <li><strong>Lifetime take-back:</strong> If life changes, the breeder will accept the dog back and help place responsibly.</li>
          </ul>
        </section>

        {/* Questions for breeder */}
        <section id="questions-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask a Breeder</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Health testing:</strong> May I see the sire and dam certificates? (OFA/PennHIP numbers for hips and elbows; current eye exam; DNA panels relevant to Labs such as EIC, PRA variants, CNM, HNPK.)</li>
            <li><strong>Temperament:</strong> How would you describe the parents&#39; biddability, human focus, and off-switch in the home? How have previous offspring performed as family companions or in work/sport?</li>
            <li><strong>Puppy raising:</strong> What socialization and enrichment do you use from weeks 3–8 (surfaces, sounds, handling, problem-solving games)? How do you introduce crates and car rides?</li>
            <li><strong>Placement:</strong> How do you match puppies to homes? Do you use aptitude observations and veterinarian input?</li>
            <li><strong>Contract &amp; support:</strong> What are the take-back terms, health guarantees, and expectations for training and care? Do you help owners troubleshoot during adolescence?</li>
            <li><strong>References:</strong> May I speak with owners of dogs from prior litters and with your veterinarian?</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask for digital copies of parent test results. You can store PDFs in your Petunia profile with notes, so
            future vets and boarding/daycare teams can see the dog&#39;s background quickly.
          </div>
        </section>

        {/* Health */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Testing &amp; Veterinary Basics for Labradors</h2>
          <p className="mb-3">
            Labradors are generally robust, but certain inherited conditions are well known. The goal is not to chase perfection; it is to reduce
            predictable risk. Ethical breeders follow screening recommendations, and good rescues disclose veterinary findings and provide recent
            care records.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Core screening you should expect to see in parents</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Hips:</strong> OFA rating or PennHIP distraction values. This addresses hip dysplasia risk at the parental level.</li>
            <li><strong>Elbows:</strong> OFA evaluation for elbow dysplasia.</li>
            <li><strong>Eyes:</strong> Current ophthalmology exam (often through the ACVO/CAER program).</li>
            <li><strong>DNA tests (as indicated):</strong> Exercise-Induced Collapse (EIC), certain PRA variants, CNM (centronuclear myopathy), and HNPK (hereditary nasal parakeratosis). Ask what the parents&#39; results mean for puppies.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">For the individual puppy or dog</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccinations:</strong> Age-appropriate series per AAHA/WSAVA guidance, documented by a veterinarian.</li>
            <li><strong>Deworming &amp; parasite control:</strong> Dates and products used; fecal exam results if available.</li>
            <li><strong>Microchip:</strong> Chip number, registration transfer instructions, and a plan to update contact details.</li>
            <li><strong>Exam findings:</strong> Any murmurs, hernias, bite alignment notes, or orthopedic concerns should be documented with next-step recommendations.</li>
          </ul>
        </section>

        {/* Temperament */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament Testing &amp; Aptitude Checks (Practical &amp; Gentle)</h2>
          <p className="mb-3">
            No single test can “predict” a dog&#39;s life. Temperament is about tendencies that show up across contexts. Your job is to observe calmly,
            avoid over-arousal during visits, and look for recovery and human orientation. When in doubt, bring a trainer or behavior professional.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Observation framework you can use in a short visit</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Social approach:</strong> Does the puppy seek you out with soft body language? How quickly does the dog re-engage after a neutral pause?</li>
            <li><strong>Startle and recovery:</strong> A light novel sound (drop a soft object at a distance) should prompt brief orienting, then a quick return to baseline with support.</li>
            <li><strong>Handling tolerance:</strong> Brief, gentle touches of ears, paws, and tail. Look for relaxed acceptance rather than stiff withdrawal. Keep sessions short.</li>
            <li><strong>Toy and food engagement:</strong> Does the dog enjoy a toy but disengage when you end the game? Can you trade a chew for a higher-value treat without conflict?</li>
            <li><strong>Problem-solving:</strong> Low-stakes puzzles (towel over a toy) show curiosity and persistence without frustration meltdown.</li>
            <li><strong>Energy regulation:</strong> After a few minutes of play, can the dog settle on a mat with you? Labs benefit from a strong “off switch.”</li>
          </ul>
          <p className="mb-3">
            Breeders who track aptitude observations often help match puppies to homes. Rescues may rely on foster notes across many days, which is
            equally valuable because it reflects real-home rhythms. Use both types of information to pick a dog that fits your routine rather than
            a romantic idea of what a Lab “should” be.
          </p>
        </section>

        {/* Contracts */}
        <section id="contracts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Contracts, Guarantees &amp; Red Flags</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Healthy contracts include</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Identification:</strong> Dog&#39;s microchip number, birth date or estimated age, color/markings, and registration info where applicable.</li>
            <li><strong>Veterinary care up to transfer:</strong> Vaccines, deworming, exam notes, and any medications provided at pickup.</li>
            <li><strong>Return/take-back:</strong> Clear language that the dog can return to the organization or breeder at any time if needed.</li>
            <li><strong>Health guarantee (breeder):</strong> What is covered, for how long, and what documentation or second opinions are required?</li>
            <li><strong>Owner commitments:</strong> Basic care, humane training methods, supervision around children, and spay/neuter timing to be decided with your veterinarian.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Red flags to avoid</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Pressure to wire funds or pay by gift cards, reluctance to meet in person, or refusal to show living conditions.</li>
            <li>“Paperwork lost” or vague promises to send health testing later.</li>
            <li>Unrealistic guarantees (perfect health for life) or punitive clauses that discourage returning a dog if the placement fails.</li>
            <li>Multiple breeds and large, constant availability with little screening of buyers—this can signal volume over welfare.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your signed contract, parent health testing PDFs, and vet records in Petunia. It keeps your care team
            organized and makes future boarding/daycare bookings smoother.
          </div>
        </section>

        {/* Budget */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budgeting: Upfront &amp; Lifetime Costs</h2>
          <p className="mb-3">
            Finding the right Labrador is a multi-year commitment. Plan for veterinary care, nutrition, training, and activity gear. Adoption fees
            and breeder prices vary by region and pedigree. Regardless of how you bring your dog home, you will benefit from budgeting for preventive
            care, dental cleanings, training classes, and unexpected issues.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Upfront:</strong> Adoption or purchase fee, initial vet visit, vaccines as due, starter crate and safe chew toys, leash/harness, training sessions.</li>
            <li><strong>Recurring:</strong> Food, parasite prevention, grooming basics, dental care, replacement of toys and training equipment.</li>
            <li><strong>Contingency:</strong> Savings for injuries, orthopedic concerns, or specialist visits as recommended by your veterinarian.</li>
          </ul>
        </section>

        {/* Bring home checklist */}
        <section id="bring-home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bring-Home Checklist (Practical &amp; Calm)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Records:</strong> Printed or digital copies of vaccines, deworming, microchip, and any eye/hip/elbow/DNA results available.</li>
            <li><strong>Crate and mat:</strong> A safe den and a predictable rest routine. Rest is part of safety for energetic Labs.</li>
            <li><strong>Nutrition plan:</strong> Food brand, measured amounts, and transition instructions. Avoid rapid diet changes without veterinary guidance.</li>
            <li><strong>Parasite prevention:</strong> Verify dosing dates and next due dates; add to Petunia reminders.</li>
            <li><strong>Vet appointment:</strong> Schedule a wellness visit quickly to establish care and complete any due vaccines or microchip registration.</li>
            <li><strong>Training structure:</strong> Short daily sessions, calm household rules, and decompression walks. A predictable rhythm prevents problems.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>How old should a Labrador puppy be at pickup from a breeder?</strong><br />
            In many regions, ethical transfers occur at eight weeks or later, allowing for adequate weaning, social learning, and early vet checks. Local laws and breeder policies vary; ask for specifics and confirm the puppy&#39;s readiness with the breeder and your veterinarian.
          </p>
          <p className="mb-3">
            <strong>Can I find a purebred Lab through rescue?</strong><br />
            Yes. Breed-specific rescues commonly place purebred Labs and Lab mixes. Many dogs are adults with known personalities, which can make matching easier for some families.
          </p>
          <p className="mb-3">
            <strong>Do I need pet insurance?</strong><br />
            It is a personal choice. Some families prefer predictable monthly premiums; others self-insure by saving for emergencies. Discuss options with your veterinarian; choose what fits your risk comfort and budget.
          </p>
          <p className="mb-3">
            <strong>What training approach fits most Labs?</strong><br />
            Reward-based methods, structure, and daily movement. Labs are intelligent and human-oriented. Clear, consistent routines and humane training keep arousal in check and build great manners.
          </p>
          <p>
            <strong>Does this article replace veterinary advice?</strong><br />
            No. It is educational. Your veterinarian should guide medical decisions, and a qualified trainer or behavior professional can help with temperament questions and early training plans.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Responsible breeder guidance and Labrador breed overview.{' '}
              <a href="https://www.akc.org" target="_blank" rel="noopener noreferrer">https://www.akc.org</a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Canine health testing (hips, elbows, eyes) and CHIC program.{' '}
              <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">https://ofa.org</a>
            </li>
            <li>
              PennHIP. Canine hip screening methodology resources for veterinarians and breeders.{' '}
              <a href="https://antechimagingservices.com/pennhip/" target="_blank" rel="noopener noreferrer">https://antechimagingservices.com/pennhip/</a>
            </li>
            <li>
              American College of Veterinary Ophthalmologists (ACVO/CAER). Eye exam information and resources.{' '}
              <a href="https://www.acvo.org" target="_blank" rel="noopener noreferrer">https://www.acvo.org</a>
            </li>
            <li>
              University of Minnesota Canine Genetics Lab. Exercise-Induced Collapse (EIC) information.{' '}
              <a href="https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic" target="_blank" rel="noopener noreferrer">
                https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Owner resources on preventive care and behavior.{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Vaccination Guidelines.{' '}
              <a href="https://www.aaha.org/aaha-guidelines/" target="_blank" rel="noopener noreferrer">https://www.aaha.org/aaha-guidelines/</a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Global Vaccination &amp; Socialization guidance.{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">https://wsava.org/global-guidelines/</a>
            </li>
            <li>
              Humane Society/Rescue best practices (foster programs, adoption counseling, transparency).{' '}
              <a href="https://www.humanesociety.org/resources" target="_blank" rel="noopener noreferrer">https://www.humanesociety.org/resources</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Canine cruciate disease overview.{' '}
              <a href="https://www.acvs.org/small-animal" target="_blank" rel="noopener noreferrer">https://www.acvs.org/small-animal</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
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
