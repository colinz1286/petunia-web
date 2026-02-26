'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatTypeOfDogIsBestForMe() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'What Type of Dog Is Best for Me? A Practical, Evidence-Informed Owner Guide';
  const date = 'August 17, 2025';
  const categories = ['owner'] as const;

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#fit-mindset" className="underline hover:opacity-80">How to Think About Fit</a></li>
            <li><a href="#big-five" className="underline hover:opacity-80">The Big Five Constraints</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament &amp; Trainability</a></li>
            <li><a href="#age-choice" className="underline hover:opacity-80">Puppy vs Adolescent vs Adult vs Senior</a></li>
            <li><a href="#size-housing" className="underline hover:opacity-80">Size &amp; Housing Compatibility</a></li>
            <li><a href="#coat-allergy" className="underline hover:opacity-80">Coats, Shedding, &amp; Allergy Reality</a></li>
            <li><a href="#health-screening" className="underline hover:opacity-80">Health Risks &amp; Screening</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Budget Math &amp; Insurance</a></li>
            <li><a href="#archetypes" className="underline hover:opacity-80">Lifestyle Archetypes &amp; Shortlists</a></li>
            <li><a href="#multi-pet-kids" className="underline hover:opacity-80">Kids, Seniors, &amp; Multi-Pet Homes</a></li>
            <li><a href="#adopt-vs-breeder" className="underline hover:opacity-80">Shelter, Rescue, or Breeder</a></li>
            <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Printable Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-4">
            The best dog for you is the one whose daily needs and lifetime risks fit your real life. Map five constraints first: time, space, energy, grooming, and budget. Choose temperament before looks. Shortlists come from verified health screening, realistic exercise needs, coat care you can sustain, and a budget that covers preventive care plus emergencies.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In the app, add a note titled &quot;Dog Fit Profile&quot; and store your answers to the checklists below. If a rescue, shelter, or breeder asks about lifestyle fit, you can share specifics quickly and avoid mismatches.
          </div>
        </section>

        {/* Fit mindset */}
        <section id="fit-mindset" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Fit</h2>
          <p className="mb-3">
            Fit is not about a perfect breed; it is about a dog whose predictable traits align with your day to day reality. Dogs vary within any breed, yet the original purpose of a breed still informs common tendencies such as stamina, prey drive, sociability, and grooming load. Build your decision around repeatable daily behaviors you can deliver for years, not a single weekend vibe.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Predictability beats aesthetics:</strong> Coat color and viral popularity do not walk themselves or pay vet bills. Select for temperament and care needs you can meet.</li>
            <li><strong>Systems over motivation:</strong> A realistic routine, budget envelope, and training plan will carry you farther than bursts of enthusiasm.</li>
            <li><strong>Evidence over myths:</strong> Verify health claims and &quot;hypoallergenic&quot; marketing against authoritative veterinary sources.</li>
          </ul>
        </section>

        {/* Big Five */}
        <section id="big-five" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Big Five Constraints</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Time</h3>
          <p className="mb-2">
            Dogs need daily care windows for exercise, training, play, feeding, and elimination. Puppies and adolescents require multiple short sessions spread across the day; adults do better with consistent blocks. If your workdays are long, plan for dog walkers, daycare, or help from family to protect the dog&apos;s welfare and your sanity.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Space</h3>
          <p className="mb-2">
            Square footage matters less than access to safe, regular movement and enrichment. Many small, athletic dogs need more exercise than large couch companions. Apartments can be great with a tight routine and good sound management for neighbors.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Energy</h3>
          <p className="mb-2">
            Match a dog&apos;s drive to your bandwidth for daily activity and training. Working and herding types often need structured outlets that are as mental as they are physical. If you dislike brisk weather or late-night walks, favor moderate-energy companions or breeds developed for easy home life.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Grooming</h3>
          <p className="mb-2">
            Coat types come with commitments: brushing cadence, professional grooming cycles, and seasonal sheds. A low-shedding coat can require intensive salon work, while a shedding coat may be DIY-friendly with consistent brushing and bathing.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Budget</h3>
          <p>
            Budget for preventive care, food, grooming, training, and emergencies. Pet insurance can smooth volatility; self-insurance via a savings buffer is also useful. Build costs into your monthly plan before you choose the dog.
          </p>
        </section>

        {/* Temperament & Trainability */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament &amp; Trainability</h2>
          <p className="mb-3">
            Temperament is the everyday feel of life with a dog: sociability, resilience, startle recovery, energy rhythms, and how a dog responds to guidance. Trainability is a mix of biddability and reward interest. Choose lines known for steady nerves and easy reinforcement strategies if your household is busy or you are new to training.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>New owners:</strong> Favor calm, people-focused dogs that enjoy food and play rewards and recover quickly from novelty.</li>
            <li><strong>Noise &amp; neighbors:</strong> Select for low vocalization and stable startle if you share walls.</li>
            <li><strong>Enthusiasts:</strong> If you love training sports, pick dogs with strong reinforcement histories and hobbies you enjoy such as scentwork, rally, or agility.</li>
          </ul>
        </section>

        {/* Age choice */}
        <section id="age-choice" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppy vs Adolescent vs Adult vs Senior</h2>
          <p className="mb-3">
            Age changes daily life. Puppies offer a clean slate and high workload. Adolescents can feel like a roller coaster as brains mature. Adults are more predictable and often a great fit for busy families. Seniors are calm companions with medical needs that you can plan for.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Puppy:</strong> House training, socialization windows, frequent naps, lots of short training.</li>
            <li><strong>Adolescent:</strong> Physical energy spikes and boundary testing; double down on consistency.</li>
            <li><strong>Adult:</strong> Known temperament; often easier integration into routines.</li>
            <li><strong>Senior:</strong> Gentle pace; budget for age-related care and adapt home layouts for comfort.</li>
          </ul>
        </section>

        {/* Size & housing */}
        <section id="size-housing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Size &amp; Housing Compatibility</h2>
          <p className="mb-3">
            Size affects access, transport, and care logistics. Tiny dogs can thrive in small spaces but may be fragile around toddlers. Giant dogs can be calm but require strength for handling, larger crates, higher food budgets, and vehicles with safe loading height. In rentals, verify pet policies and realistic noise management before selecting a vocal or high-energy companion.
          </p>
        </section>

        {/* Coats & allergy */}
        <section id="coat-allergy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coats, Shedding, &amp; Allergy Reality</h2>
          <p className="mb-3">
            No breed is truly allergen-free. The major dog allergen is Can f 1, present in dander and saliva. Some low-shedding coats may help with hair in the home, but they do not guarantee lower allergen load. If allergies are a concern, consult an allergist, trial contact with individual dogs, and build a cleaning protocol you can sustain.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li><strong>Shedding coats:</strong> Regular brushing and bathing can keep hair manageable with less salon time.</li>
            <li><strong>Low-shedding coats:</strong> Expect professional grooming every 4 to 8 weeks plus home brushing.</li>
            <li><strong>Allergy hygiene:</strong> HEPA filtration, bedroom-free zones, frequent laundry for dog beds, and hand-washing after play.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Avoid making a medical decision on marketing terms alone; verify with your medical team and real exposure trials.
          </p>
        </section>

        {/* Health & screening */}
        <section id="health-screening" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Risks &amp; Screening</h2>
          <p className="mb-3">
            Choose for health as much as for looks. Some breeds carry higher risks for specific conditions. Seek dogs from lines that complete recommended health tests and avoid extreme anatomy that compromises breathing or heat tolerance. Ask shelters and rescues for available medical history and follow up with your veterinarian soon after adoption.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Screening:</strong> Parent-club or OFA/CHIC recommendations help you verify hips, elbows, eyes, heart, and breed-specific DNA panels.</li>
            <li><strong>Anatomy:</strong> Short-muzzled dogs can struggle with heat and breathing; honest assessment protects welfare.</li>
            <li><strong>Longevity:</strong> Life-table research can inform expectations by breed, though individual care and luck matter.</li>
          </ul>
        </section>

        {/* Budget */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget Math &amp; Insurance</h2>
          <p className="mb-3">
            Build a first-year setup and a steady-state monthly budget. Include food, routine veterinary care, preventives, training, grooming, supplies, pet sitting or daycare if needed, and a reserve for emergencies. Insurance can offset volatility; confirm waiting periods and exclusions and compare two or three plans against your risk tolerance.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick benchmark:</strong> Industry data suggest average accident-and-illness premiums for dogs in the United States are in the mid-hundreds annually, with wide variation by breed, age, and location. Use this as a starting point, not a promise; build your own quotes and a parallel savings buffer.
          </div>
        </section>

        {/* Archetypes */}
        <section id="archetypes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifestyle Archetypes &amp; Shortlists</h2>
          <p className="mb-3">
            Use these archetypes to start conversations with shelters, rescues, or breeders. They are not exhaustive; individual dogs vary. Always meet candidates and discuss temperament in detail.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Apartment &amp; Urban Routine</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traits:</strong> Low to moderate energy, good elevator and hallway manners, minimal vocalization, easy handling in tight spaces.</li>
            <li><strong>Care notes:</strong> Prioritize calm temperament, crate comfort, and enrichment toys for indoor time. Add brisk, consistent walks and weekend exploration.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">First-Time Dog Owner</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traits:</strong> People-oriented, biddable, resilient to normal household noise, moderate exercise needs.</li>
            <li><strong>Care notes:</strong> Choose lines known for steady nerves. Book group classes, and build a daily training micro-routine of 10 to 15 minutes.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Runner or Hiker</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traits:</strong> Endurance, joint soundness, heat tolerance, and recall you will train carefully over months.</li>
            <li><strong>Care notes:</strong> Ramp distance gradually, monitor pads, and watch heat and humidity; prioritize early morning in summer.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Low-Shedding Priority</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traits:</strong> Hair that grows and requires grooming versus coats that shed seasonally.</li>
            <li><strong>Care notes:</strong> Budget for salon visits every 4 to 8 weeks and practice home brushing to avoid painful matting.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Multi-Dog or Cat Household</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Traits:</strong> Social flexibility, low prey drive for cats, and easy sharing of resources with other dogs.</li>
            <li><strong>Care notes:</strong> Controlled introductions, parallel walks, and clear management of feeding and rest zones.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Calm Companion for Seniors</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Traits:</strong> Moderate size for handling, gentle pace, predictable routines, friendly with visitors and care teams.</li>
            <li><strong>Care notes:</strong> Adult and senior dogs from shelters often shine here with known temperaments and established house manners.</li>
          </ul>
        </section>

        {/* Kids & multi-pet */}
        <section id="multi-pet-kids" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kids, Seniors, &amp; Multi-Pet Homes</h2>
          <p className="mb-3">
            Family homes benefit from dogs with resilient, people-centric temperaments and low startle. Teach kids how to interact kindly, model consent-based petting, and protect sleep. For multi-pet homes, supervise early weeks and secure feeding, toys, and rest spaces to prevent conflict while relationships form.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dog zones:</strong> Provide gated rest areas and clear off-limits spaces for recovery and sleep.</li>
            <li><strong>Routine:</strong> Predictable walks, meals, training, and quiet time stabilize the home quickly.</li>
            <li><strong>Visitors:</strong> Practice door routines and settle mats to reduce chaotic greetings.</li>
          </ul>
        </section>

        {/* Adopt vs breeder */}
        <section id="adopt-vs-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shelter, Rescue, or Breeder</h2>
          <p className="mb-3">
            Great dogs come from all three. Your job is to verify welfare practices, transparency, and fit. Shelters and rescues can match known temperaments and adult energy levels. Ethical breeders preserve predictable traits and invest in health screening and socialization foundations. Wherever you look, insist on candor about behavior and health.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Shelter or rescue:</strong> Ask about behavior assessments, foster notes, and medical records. Plan a decompression period at home.</li>
            <li><strong>Breeder:</strong> Ask for health test results published in recognized databases, contract terms, and lifetime return policy. Meet adult relatives when possible.</li>
          </ul>
        </section>

        {/* Operator systems */}
        <section id="operator-systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) The Fit Worksheet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily minutes for walks, play, and training you will deliver even on busy days.</li>
            <li>Noise tolerance in your building or neighborhood and what you will do about barking.</li>
            <li>Grooming cadence you can afford and perform.</li>
            <li>Medical budget plan and how you will handle a middle-of-the-night emergency.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Temperament Interview</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ask about sociability with people and other dogs in calm and busy contexts.</li>
            <li>Discuss noise sensitivity, body-handling tolerance, and recovery from startle.</li>
            <li>Confirm house skills: crate, alone time, car rides, and basic cues.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Health Verification</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Request breed-specific screening per OFA/CHIC or rescue medical records with vet follow-up.</li>
            <li>Review anatomy that impacts welfare, especially breathing and heat tolerance.</li>
            <li>Book an early new-pet exam and build your preventive care calendar.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) First 30 Days Plan</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>One stable routine for meals, walks, and sleep; limit novelty at first.</li>
            <li>Teach a calm &quot;go to mat&quot; and a recall; reward generously to build communication.</li>
            <li>Secure ID, microchip registration, and a weather-appropriate walking kit.</li>
          </ul>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Lifestyle &amp; Care Capacity</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Workday schedule and coverage plan for midday needs.</li>
            <li>Exercise windows on weekdays and weekends, rain or shine.</li>
            <li>Travel frequency and pet care backup plan.</li>
            <li>Noise tolerance and neighbor considerations.</li>
            <li>Grooming cadence: brushing per week and salon cycle.</li>
            <li>Monthly budget line for food, insurance, preventives, and training.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Temperament &amp; Skills</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Comfort with polite strangers vs protective tendencies you will manage.</li>
            <li>Dog-dog sociability for your park and neighborhood culture.</li>
            <li>Body-handling and grooming tolerance.</li>
            <li>Alone-time comfort and crate skills if needed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Health &amp; Welfare</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verified screenings per breed club or rescue records.</li>
            <li>Veterinary relationship and 24&times;7 emergency hospital mapped.</li>
            <li>Heat, cold, and air-quality plans for safe exercise year-round.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is there a single best family dog?</strong><br />
            No. Families differ in schedules, noise, space, energy, and support. Choose temperament and care requirements you can sustain for the dog&apos;s lifetime.
          </p>

          <p className="mb-3">
            <strong>Are low-shedding dogs always better for allergies?</strong><br />
            Not necessarily. Hair management and allergy biology are different topics. Work with your medical team and test real exposure to individual dogs before deciding.
          </p>

          <p className="mb-3">
            <strong>Do mixed-breed dogs have fewer health problems?</strong><br />
            Mixed-breed and purebred dogs both benefit from preventive care and thoughtful selection. Health testing for known risks and avoiding extreme anatomy matter more than labels.
          </p>

          <p className="mb-3">
            <strong>How much exercise does a dog need?</strong><br />
            It depends on age, health, and individual drive. Plan for daily movement and mental work; some dogs thrive on long hikes while others prefer steady neighborhood walks plus puzzle play.
          </p>

          <p>
            <strong>Is pet insurance worth it?</strong><br />
            It can be valuable for unexpected costs. Compare quotes, read exclusions, and decide how you prefer to manage risk alongside a dedicated savings buffer.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Royal Veterinary College (RVC) VetCompass. <em>Life Tables: Remaining Life Expectancy of Dogs</em>.{' '}
              <a href="https://www.rvc.ac.uk/Media/Default/VetCompass/Infograms/220422%20Life%20Tables.pdf" target="_blank" rel="noopener noreferrer">
                rvc.ac.uk &rsaquo; VetCompass &rsaquo; Life Tables
              </a>
            </li>
            <li>
              RVC VetCompass. <em>Health Risks in Flat-Faced Dogs; Noisy Breathing Guidance</em>.{' '}
              <a href="https://www.rvc.ac.uk/research/facilities-and-resources/animal-welfare-science-and-ethics/news/international-experts-warn-noisy-breathing-could-signal-suffering-in-popular-flat-faced-dogs" target="_blank" rel="noopener noreferrer">
                rvc.ac.uk &rsaquo; 2025 guidance
              </a>
              {' '}and{' '}
              <a href="https://www.rvc.ac.uk/vetcompass/news/new-research-shows-pugs-have-high-health-risks-and-can-no-longer-be-considered-a-typical-dog-from-a-health-perspective" target="_blank" rel="noopener noreferrer">
                rvc.ac.uk &rsaquo; Pug risk profile
              </a>
              .
            </li>
            <li>
              American Animal Hospital Association (AAHA). <em>2019 Canine Life Stage Guidelines</em>.{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/canine-life-stage-2019/2019-aaha-canine-life-stage-guidelines-final.pdf" target="_blank" rel="noopener noreferrer">
                aaha.org &rsaquo; PDF
              </a>
            </li>
            <li>
              AVMA. <em>Selecting a Pet Dog</em> and <em>Selecting a Pet for Your Family</em>.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/selecting-pet-dog" target="_blank" rel="noopener noreferrer">
                avma.org &rsaquo; Selecting a Pet Dog
              </a>
              {' '}|{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/selecting-pet-your-family" target="_blank" rel="noopener noreferrer">
                avma.org &rsaquo; Selecting a Pet for Your Family
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA) &amp; CHIC. <em>Health Testing &amp; Breed-Specific Screening</em>.{' '}
              <a href="https://ofa.org/chic-programs/" target="_blank" rel="noopener noreferrer">
                ofa.org &rsaquo; CHIC Program
              </a>
              {' '}|{' '}
              <a href="https://ofa.org/chic-programs/browse-by-breed/" target="_blank" rel="noopener noreferrer">
                ofa.org &rsaquo; Browse by Breed
              </a>
            </li>
            <li>
              Nicholas CE et&nbsp;al. <em>Dog allergen levels in homes with hypoallergenic vs non-hypoallergenic dogs</em>.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3680143/" target="_blank" rel="noopener noreferrer">
                NIH PMC
              </a>
              . See also: Lockey RF. <em>Myth of hypoallergenic dogs</em>.{' '}
              <a href="https://www.jacionline.org/article/S0091-6749(12)01380-2/fulltext" target="_blank" rel="noopener noreferrer">
                JACI editorial
              </a>
              .
            </li>
            <li>
              North American Pet Health Insurance Association (NAPHIA). <em>2024 Average Premiums</em>.{' '}
              <a href="https://naphia.org/industry-data/section-3-average-premiums/" target="_blank" rel="noopener noreferrer">
                naphia.org &rsaquo; Industry Data
              </a>
            </li>
            <li>
              ASPCA. <em>Cutting Pet Care Costs</em> (benchmark first-year and special cost lines).{' '}
              <a href="https://www.aspca.org/pet-care/general-pet-care/cutting-pet-care-costs" target="_blank" rel="noopener noreferrer">
                aspca.org &rsaquo; General Pet Care
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
