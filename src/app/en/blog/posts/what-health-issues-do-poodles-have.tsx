'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHealthIssuesDoPoodlesHave() {
  const locale = useLocale();

  const title =
    'What Health Issues Do Poodles Have? A Practical, Vet-Informed Guide (Standard, Miniature & Toy)';
  const date = 'December 28, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
            <li>
              <a href="#summary" className="underline hover:opacity-80">
                TL;DR Summary
              </a>
            </li>
            <li>
              <a href="#how-to-think" className="underline hover:opacity-80">
                How to Think About Poodle Health
              </a>
            </li>
            <li>
              <a href="#varieties" className="underline hover:opacity-80">
                By Variety (Standard • Miniature • Toy)
              </a>
            </li>
            <li>
              <a href="#top-risks" className="underline hover:opacity-80">
                Top Risks (At a Glance)
              </a>
            </li>
            <li>
              <a href="#quick-triage" className="underline hover:opacity-80">
                Quick Triage: What to Do When You Notice a Symptom
              </a>
            </li>
            <li>
              <a href="#endocrine" className="underline hover:opacity-80">
                Endocrine: Addison’s, Cushing’s, Thyroid
              </a>
            </li>
            <li>
              <a href="#skin-coat" className="underline hover:opacity-80">
                Skin &amp; Coat: Sebaceous Adenitis, Allergies
              </a>
            </li>
            <li>
              <a href="#eyes" className="underline hover:opacity-80">
                Eyes: PRA, Cataracts &amp; When It&apos;s Urgent
              </a>
            </li>
            <li>
              <a href="#orthopedic" className="underline hover:opacity-80">
                Orthopedic: Hips, Patellas, Legg–Calvé–Perthes
              </a>
            </li>
            <li>
              <a href="#airway-dental" className="underline hover:opacity-80">
                Airway &amp; Dental: Trachea, Teeth, Ears
              </a>
            </li>
            <li>
              <a href="#hematology" className="underline hover:opacity-80">
                Hematology: von Willebrand Disease
              </a>
            </li>
            <li>
              <a href="#gastro" className="underline hover:opacity-80">
                GI: Bloat (GDV) in Standards
              </a>
            </li>
            <li>
              <a href="#neuro" className="underline hover:opacity-80">
                Neurology: Seizures
              </a>
            </li>
            <li>
              <a href="#cardiac" className="underline hover:opacity-80">
                Cardiac Notes
              </a>
            </li>
            <li>
              <a href="#lifestage" className="underline hover:opacity-80">
                Life-Stage Vet Care
              </a>
            </li>
            <li>
              <a href="#nutrition" className="underline hover:opacity-80">
                Nutrition &amp; Supplements
              </a>
            </li>
            <li>
              <a href="#fitness-grooming" className="underline hover:opacity-80">
                Fitness, Grooming &amp; Recovery
              </a>
            </li>
            <li>
              <a href="#daycare-boarding" className="underline hover:opacity-80">
                Boarding &amp; Daycare Notes
              </a>
            </li>
            <li>
              <a href="#checklists" className="underline hover:opacity-80">
                Owner Checklists
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
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>

          <p className="mb-4">
            Poodles are brilliant, athletic, and often long-lived, but each size variety has predictable health patterns.
            <strong> Standard Poodles</strong> deserve special attention for <strong>Addison&apos;s disease</strong> (hypoadrenocorticism),
            <strong> sebaceous adenitis</strong> (a chronic skin disease), and <strong>gastric dilatation-volvulus (bloat/GDV)</strong>,
            plus orthopedic and eye conditions that can show up in specific lines.
            <strong> Miniature</strong> and <strong>Toy Poodles</strong> more commonly face <strong>patellar luxation</strong>,
            <strong> Legg–Calvé–Perthes</strong> (especially Toys), <strong>dental disease</strong>, and <strong>tracheal collapse</strong>.
            All varieties benefit from a <strong>lean body condition</strong>, planned exercise (not random high-impact jumping),
            routine dental and ear care, and periodic eye screening when recommended.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Two owner goals that prevent the most problems:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Keep your dog <strong>lean</strong> (protects joints, airways, and endocrine comfort).
              </li>
              <li>
                Treat recurring symptoms like a pattern, not a one-off (ear infections, cough, waxing/waning GI upset, intermittent limps).
              </li>
            </ul>
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Poodle Health</h2>

          <p className="mb-3">
            Most Poodle health concerns fall into two buckets: (1) <strong>inherited or structural risks</strong> you cannot fully prevent,
            but can often <strong>detect earlier</strong>, and (2) <strong>management-sensitive issues</strong> where your routines matter a lot
            (weight, traction, dental care, ear drying, gradual conditioning).
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>When something feels &ldquo;off,&rdquo; bring the right information.</strong> It shortens the path to answers.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Video</strong> of the symptom (limp, cough, seizure, odd gait, vision confusion).
              </li>
              <li>
                <strong>Timeline</strong> (first time vs recurring; what changed in the last 7–14 days).
              </li>
              <li>
                <strong>Triggers</strong> (after meals, after exercise, after grooming/baths, after stress, at night).
              </li>
              <li>
                <strong>Baseline changes</strong> (water intake, appetite, sleep, accidents, stamina, weight trend).
              </li>
            </ul>
          </div>

          <p className="mb-3">
            Genetics still matter. Responsible breeders aim to reduce risk using variety-appropriate screening (hips or patellas,
            annual eye exams, and DNA tests where relevant). For owners, the most reliable day-to-day levers are:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Lean body condition:</strong> you should easily feel ribs with light pressure and see a waist from above.
            </li>
            <li>
              <strong>Traction + impact control:</strong> slick floors and repetitive jumping are a common &ldquo;invisible injury&rdquo; driver.
            </li>
            <li>
              <strong>Dental + ear routines:</strong> small-breed mouths and moisture-prone ears create predictable problems if ignored.
            </li>
            <li>
              <strong>Pattern recognition:</strong> intermittent symptoms (GI, cough, skin flare, limp) often matter more than a single bad day.
            </li>
          </ul>
        </section>

        {/* BY VARIETY */}
        <section id="varieties" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">By Variety: Standard • Miniature • Toy</h2>

          <p className="mb-4">
            These are not guarantees. They are &ldquo;most common patterns&rdquo; that help you and your vet prioritize the right checks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Standard</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Addison&apos;s disease (often vague early)</li>
                <li>Sebaceous adenitis (chronic scaling/hair loss patterns)</li>
                <li>GDV/bloat (deep-chested risk)</li>
                <li>Hip dysplasia and arthritis in some lines</li>
                <li>Eye disease screening (PRA variants/cataracts)</li>
                <li>Seizure disorders reported in lines</li>
              </ul>
            </div>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Miniature</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Patellar luxation</li>
                <li>PRA variants (including prcd in some lines)</li>
                <li>Dental disease (small-breed pattern)</li>
                <li>Senior endocrine disease patterns (Cushing&apos;s-type signs)</li>
                <li>Recurrent ear/skin allergy patterns</li>
              </ul>
            </div>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Toy</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Patellar luxation</li>
                <li>Legg–Calvé–Perthes (young dog, painful lameness)</li>
                <li>Tracheal collapse (honk cough)</li>
                <li>Dental crowding and periodontal disease</li>
                <li>PRA variants and cataracts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOP RISKS */}
        <section id="top-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Risks (At a Glance)</h2>

          <p className="mb-4">
            If you want a quick way to prioritize, think in terms of <strong>timing</strong> (what age it tends to show up),
            <strong> urgency</strong> (monitor vs call today vs emergency), and <strong>your best prevention lever</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Often Modifiable (Your Routines Matter)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Excess weight &amp; deconditioning (all sizes):</strong> worsens joints, airways, heat tolerance, and endocrine stress.
                </li>
                <li>
                  <strong>Ear infections (all sizes):</strong> commonly linked to moisture and allergies; treat the pattern, not just the episode.
                </li>
                <li>
                  <strong>Dental disease (Minis/Toys):</strong> crowding creates predictable tartar and gum inflammation without brushing.
                </li>
                <li>
                  <strong>Slips and impact injuries (all sizes):</strong> slick floors + jumping off furniture are a frequent hidden trigger for limps.
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Mostly Inherited/Structural (Early Detection Helps)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Addison&apos;s (Standards):</strong> may be subtle early; can become an emergency during crisis.
                </li>
                <li>
                  <strong>PRA/cataracts (all sizes):</strong> often progressive; early safety planning matters.
                </li>
                <li>
                  <strong>Sebaceous adenitis (Standards):</strong> chronic skin disease; early dermatology guidance improves comfort.
                </li>
                <li>
                  <strong>Patellar luxation &amp; Legg–Calvé–Perthes (Toys/Minis):</strong> can progress from mild skipping to painful lameness.
                </li>
                <li>
                  <strong>Hip dysplasia (Standards):</strong> weight and conditioning influence symptoms even when genetics play a role.
                </li>
                <li>
                  <strong>vWD (some lines):</strong> matters most around procedures or unusual bleeding history.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-4">
            <p className="mb-2">
              <strong>If you only remember one rule:</strong> sudden collapse, severe weakness, trouble breathing, unproductive retching with a swollen belly,
              or eye pain are &ldquo;do not wait&rdquo; situations.
            </p>
            <p className="mb-0">
              When in doubt, call your veterinarian or an emergency clinic and describe what you see. A brief phone triage can prevent a dangerous delay.
            </p>
          </div>
        </section>

        {/* QUICK TRIAGE */}
        <section id="quick-triage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quick Triage: What to Do When You Notice a Symptom</h2>

          <p className="mb-4">
            This is not a diagnosis tool. It is a practical &ldquo;what next&rdquo; guide that helps you communicate clearly and avoid common mistakes.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 mb-4">
            <h3 className="font-semibold mb-2">Call an emergency clinic now if you see:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Unproductive retching with a swollen or tight belly (GDV risk in Standards)</li>
              <li>Collapse, extreme weakness, pale gums, or severe dehydration</li>
              <li>Labored breathing, blue/purple gums, or sudden severe coughing fits with distress</li>
              <li>Eye pain (squinting, pawing, sudden severe redness) or sudden vision loss</li>
              <li>A seizure lasting more than a few minutes, repeated seizures, or poor recovery afterward</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <h3 className="font-semibold mb-2">Common scenarios and a sensible next step</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Waxing and waning vomiting/diarrhea + lethargy (Standards):</strong> track episodes, appetite, water intake, and energy.
                If it keeps recurring or includes weakness, talk to your vet about endocrine screening and whether Addison&apos;s should be ruled out.
              </li>
              <li>
                <strong>&ldquo;Goose-honk&rdquo; cough (Toys) or cough with excitement:</strong> switch to a harness, avoid smoke/fragrances,
                record a video, and schedule a vet visit if it persists. If breathing effort increases, treat it as urgent.
              </li>
              <li>
                <strong>Skipping gait or intermittent hind-leg hop (Toys/Minis):</strong> reduce jumping, add traction, keep walks controlled,
                and schedule an orthopedic exam if it repeats. Sudden severe pain or refusal to bear weight deserves prompt evaluation.
              </li>
              <li>
                <strong>Itchy ears, odor, head shaking:</strong> avoid random drops unless prescribed, schedule an exam to confirm infection type,
                and ask about an allergy plan if it keeps recurring.
              </li>
              <li>
                <strong>Cloudy eyes or bumping at night:</strong> treat red, painful eyes as urgent. For gradual vision changes, schedule an exam,
                add safe lighting at night, and keep furniture layout consistent.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            Helpful data for your vet: videos, a symptom timeline, water intake changes, appetite changes, weight trend, and what triggers symptoms
            (meals, exercise, stress, grooming, heat).
          </p>
        </section>

        {/* ENDOCRINE */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Endocrine: Addison&apos;s, Cushing&apos;s &amp; Thyroid Disease</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Addison&apos;s Disease (Hypoadrenocorticism)</h3>
          <p className="mb-3">
            Addison&apos;s is a classic Standard Poodle concern. It is a deficiency of adrenal hormones and it can look deceptively mild at first:
            intermittent GI upset, low energy, poor appetite, and weight loss that comes and goes. Because the signs can be vague, owners sometimes
            attribute them to stress, food changes, or &ldquo;sensitive stomach&rdquo; until a more severe episode happens.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>When to take it seriously:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recurring vomiting/diarrhea plus unusual fatigue or weakness</li>
              <li>Episodes that worsen during stress (travel, boarding, heat, intense activity)</li>
              <li>Shaking, collapse, or profound lethargy (possible crisis)</li>
            </ul>
            <p className="mt-3 mb-0">
              Diagnosis is confirmed with an <em>ACTH stimulation test</em>.
            </p>
          </div>

          {/* Backlink #1 (supporting article to be written) */}
          <p className="mb-3">
            If you have a Standard Poodle and this topic worries you, read our deeper owner guide here:{' '}
            <Link
              href={`/${locale}/blog/addisons-disease-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Addison&apos;s in Standard Poodles: early signs, crisis red flags, and what daily management looks like
            </Link>
            .
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Cushing&apos;s Disease (Hyperadrenocorticism)</h3>
          <p className="mb-3">
            Cushing&apos;s is usually seen in older dogs. The classic owner story is &ldquo;my dog suddenly got very hungry, drinks more, has accidents,
            pants a lot, and seems weaker.&rdquo; Coat thinning, pot-bellied appearance, and recurrent skin or urinary infections can also show up.
            A veterinarian typically uses a combination of history, physical exam, and targeted tests to confirm.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
            <li>
              Track: water intake changes, urination changes, panting, belly shape changes, stamina, and skin infection frequency.
            </li>
            <li>
              If the pattern is persistent, ask your vet what screening path makes sense for your dog (age, symptoms, concurrent diseases).
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Hypothyroidism</h3>
          <p className="mb-3">
            Hypothyroidism can show up in middle age with low energy, weight gain without a clear reason, cold intolerance, and coat or skin changes.
            It can also overlap with chronic ear and skin infections. Diagnosis is by bloodwork, and treatment is typically daily medication with
            follow-up testing to ensure the dose is appropriate.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Common owner confusion: &ldquo;Is my dog lazy or sick?&rdquo; A persistent pattern plus coat/skin changes is a good reason to ask for testing.
            </li>
            <li>
              Expectation setting: some improvements (energy) can be faster, while coat recovery can take longer.
            </li>
          </ul>
        </section>

        {/* SKIN & COAT */}
        <section id="skin-coat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Coat: Sebaceous Adenitis, Allergies</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Sebaceous Adenitis (SA)</h3>
          <p className="mb-3">
            SA is a chronic inflammatory skin disease strongly associated with Standard Poodles. Owners often notice a change in coat quality first:
            increased scaling, brittle hair, patchy hair loss, a dull look, or recurrent secondary infections.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Practical action steps if SA is on your radar:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Take clear photos of the coat, skin scaling, and any patchy hair loss over time (weekly helps)</li>
              <li>Do not assume it is just grooming or seasonal shedding if the pattern keeps progressing</li>
              <li>Schedule a veterinary exam and ask what diagnostics make sense (infection checks first; biopsy is used to confirm SA)</li>
            </ul>
          </div>
          <p className="mb-3">
            Diagnosis may require a skin biopsy. Management is long-term and often combines topical therapy, bathing plans, and targeted medications when needed.
            Many dogs improve significantly with a consistent plan guided by a veterinarian or dermatologist.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Allergic Skin &amp; Ear Disease</h3>
          <p className="mb-3">
            Allergies often show up as paw licking, face rubbing, recurrent ear infections, or itchy skin rather than dramatic full-body hives.
            The hard part is that the itch-infection cycle can keep repeating without a multi-step plan.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Start with basics: consistent parasite prevention and thorough drying after swims or baths.
            </li>
            <li>
              If infections keep recurring, ask your vet about an allergy plan that focuses on prevention, not just treating flare-ups.
            </li>
            <li>
              Avoid random ear drops unless prescribed (wrong products can worsen certain ear problems).
            </li>
          </ul>
        </section>

        {/* EYES */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: PRA, Cataracts &amp; When It&apos;s Urgent</h2>

          <p className="mb-3">
            Poodles can inherit progressive retinal atrophy (PRA) and can also develop cataracts. PRA is typically progressive, while cataracts can be
            gradual or more noticeable over time. Because some inherited eye conditions develop later, breeders and owners often follow
            <strong> annual ACVO/CAER eye exams</strong> during breeding years and beyond when advised.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>What owners notice first (common patterns):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hesitation in dim light, bumping at dusk, reluctance on stairs at night</li>
              <li>New clumsiness in unfamiliar rooms</li>
              <li>Cloudiness that seems to increase over time</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Eye symptoms that should be treated as urgent:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Squinting, pawing at the eye, sudden redness, or obvious pain</li>
              <li>Sudden severe cloudiness or rapid vision change</li>
              <li>Thick discharge with swelling</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            If vision changes are gradual and painless, schedule a veterinary exam and consider an ophthalmology referral if recommended. Meanwhile,
            keep your home layout consistent, use night lights, and avoid sudden furniture changes.
          </p>
        </section>

        {/* ORTHOPEDIC */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic: Hips, Patellas &amp; Legg–Calvé–Perthes</h2>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Limp rule of thumb:</strong> if your dog refuses to bear weight, cries in pain, has swelling, or the limp persists beyond a short rest window,
              schedule a prompt exam. Sudden severe pain in a young Toy deserves extra urgency.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Immediate steps: stop jumping, keep walks short and controlled, add traction, and record a gait video</li>
              <li>Do not give human pain meds unless your veterinarian explicitly instructs you (some are toxic to dogs)</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hip Dysplasia (Standards)</h3>
          <p className="mb-3">
            Hip dysplasia is a structural problem that can lead to arthritis. Signs include stiffness after rest, reluctance to jump, bunny-hopping,
            and reduced endurance. Genetics play a role, but management strongly influences comfort.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Prevention leverage: screened parents (OFA/PennHIP), lean weight, and gradual conditioning</li>
            <li>Comfort plan: veterinary-guided pain control plus rehab and strength work when appropriate</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Patellar Luxation (Toys/Minis)</h3>
          <p className="mb-3">
            Patellar luxation often looks like a quick &ldquo;skip&rdquo; or hop that resolves, especially early on. Severity ranges from occasional slipping
            to persistent displacement that causes arthritis and pain.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Helpful home changes: traction, nail trims, controlled exercise, and avoiding repetitive jumping off furniture</li>
            <li>When to recheck sooner: frequency increases, limping lasts longer, or your dog seems painful</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Legg–Calvé–Perthes (Toys)</h3>
          <p className="mb-3">
            Legg–Calvé–Perthes is a painful hip disorder in young small-breed dogs (often 5–10 months). It frequently presents as one-sided hindlimb lameness
            that worsens over time. Surgery plus rehab can restore comfort and function for many dogs.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>If suspected: restrict activity and schedule a prompt orthopedic evaluation</li>
            <li>Bring a timeline and videos of gait changes to your appointment</li>
          </ul>
        </section>

        {/* AIRWAY & DENTAL */}
        <section id="airway-dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airway &amp; Dental: Tracheal Collapse, Teeth, Ears</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Tracheal Collapse (Toys)</h3>
          <p className="mb-3">
            Tracheal collapse is a small-breed issue that can cause a classic &ldquo;goose-honk&rdquo; cough, often triggered by excitement, pulling, or irritants.
            Many dogs improve with management, but persistent cough deserves a veterinary evaluation because cough has multiple causes.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Use a harness, not a neck collar</li>
            <li>Keep weight lean and reduce irritants (smoke, strong fragrances)</li>
            <li>Record a cough video for your vet</li>
            <li>Urgent signs: breathing effort increases, gums change color, or your dog cannot settle</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Dental Disease (Toys/Minis)</h3>
          <p className="mb-3">
            Small mouths crowd teeth, increasing periodontal risk. Dental pain can look like picky eating, dropping kibble, avoiding hard chews,
            pawing at the mouth, bad breath, or behavioral irritability.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
            <li>Best prevention: daily or near-daily brushing (consistency beats perfection)</li>
            <li>Ask your vet about professional cleanings based on gum inflammation and tartar, not just age</li>
            <li>Use VOHC-accepted products if you want evidence-based chews or rinses</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Ears (All Sizes)</h3>
          <p className="mb-3">
            Poodles can be ear-trouble-prone due to hair, moisture, and allergy patterns. Guidance varies on routine plucking, so use your veterinarian&apos;s plan.
            What is universal: dry thoroughly after water exposure, and treat recurrent ear issues as an underlying pattern.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Red flags: odor, discharge, pain, frequent head shaking, or repeated infections</li>
            <li>Avoid random drops unless prescribed, especially if the ear is painful or swollen</li>
          </ul>
        </section>

        {/* HEMATOLOGY */}
        <section id="hematology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hematology: von Willebrand Disease (vWD)</h2>
          <p className="mb-3">
            vWD is an inherited clotting disorder reported in many breeds and in some Poodle lines. For most pet owners, it matters in a practical way when
            a dog has an unusual bleeding history or is planning a procedure.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>When owners should consider discussing testing:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Unusual bruising or bleeding (gums, nosebleeds, prolonged bleeding after nail trims)</li>
              <li>Unexpected bleeding during a past surgery or dental procedure</li>
              <li>Before elective procedures if your vet recommends it based on history or line information</li>
            </ul>
          </div>
        </section>

        {/* GI */}
        <section id="gastro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">GI: Bloat (GDV) in Standard Poodles</h2>
          <p className="mb-3">
            Large, deep-chested dogs like Standard Poodles have an elevated risk of gastric dilatation-volvulus (GDV), commonly called bloat.
            It is an emergency. The warning pattern owners describe most often is sudden restlessness, a tight belly, and repeated unproductive retching.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>If you suspect bloat:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not wait for it to &ldquo;pass&rdquo;</li>
              <li>Do not try home remedies</li>
              <li>Go to an emergency clinic immediately and call ahead if possible</li>
            </ul>
          </div>

          <p className="mb-3">
            Ask your vet about <em>prophylactic gastropexy</em> if your Standard is already undergoing anesthesia for another reason.
            Gastropexy can reduce the risk of the stomach twisting, but it does not make GI problems impossible, so urgent symptoms still matter.
          </p>

          {/* Backlink #2 (existing article) */}
          <p className="mb-3">
            For a detailed, owner-first guide (risk factors, early warning signs, what to do on the way to the ER, hospital treatment, and preventive gastropexy), see:{' '}
            <Link
              href={`/${locale}/blog/bloat-gdv-in-large-breed-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Bloat (GDV) in Large Breed Dogs: Recognizing the Warning Signs and Reducing Risk
            </Link>
            .
          </p>
        </section>

        {/* NEURO */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neurology: Seizures (Including Idiopathic Epilepsy)</h2>
          <p className="mb-3">
            Seizure disorders occur across many breeds and have been reported in Standard Poodle lines. Your veterinarian will typically rule out metabolic
            and structural causes before settling on an idiopathic epilepsy diagnosis. Many dogs live well with a plan that may include medications and lifestyle adjustments.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2">
              <strong>Seizure safety basics (owner-first):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Time the episode and record a video if safe to do so</li>
              <li>Move furniture away and protect from stairs or sharp edges</li>
              <li>Do not put hands in the mouth</li>
              <li>Afterward, keep the environment calm and dim while your dog recovers</li>
            </ul>
          </div>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>When it is urgent:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Seizure lasts more than a few minutes</li>
              <li>Repeated seizures close together</li>
              <li>Severe trouble recovering or breathing concerns</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            Keep a log of events (time, trigger, duration, recovery). Videos are extremely helpful for your veterinarian.
          </p>
        </section>

        {/* CARDIAC */}
        <section id="cardiac" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cardiac Notes</h2>
          <p className="mb-3">
            Parent-club health statements list certain congenital heart conditions among those reported in Standard Poodles, including atrial septal defects.
            Most owners first encounter heart concerns when a veterinarian hears a murmur or when a dog shows reduced stamina.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Signs worth discussing promptly:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exercise intolerance that is new or worsening</li>
              <li>Fainting episodes, collapse, or sudden weakness</li>
              <li>Persistent cough (especially if paired with fatigue)</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            If a murmur is found, your vet may recommend follow-up testing. Ask your breeder about any family history of cardiac screening if you are evaluating a puppy.
          </p>
        </section>

        {/* LIFESTAGE CARE */}
        <section id="lifestage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life-Stage Veterinary Care &amp; Screenings</h2>

          <p className="mb-4">
            A good plan is not just &ldquo;annual shots.&rdquo; It is a repeating schedule that targets the problems your dog is most likely to face based on size and age.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              <strong>Bring these topics up at annual visits (variety-aware):</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Standards:</strong> intermittent GI/weakness patterns (Addison&apos;s), bloat risk planning, hip comfort, skin scaling patterns
              </li>
              <li>
                <strong>Minis/Toys:</strong> patella stability, dental plan timing, cough history, recurring ear infections
              </li>
              <li>
                <strong>All sizes:</strong> weight trend, exercise tolerance, eye changes, skin/ear recurrence patterns
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (8 weeks–12 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccinations per AAHA/WSAVA and consistent parasite prevention.</li>
            <li>Growth management: limit repetitive high-impact jumping; teach traction and calm routines.</li>
            <li>Discuss breeder testing: hips (Standards), patellas (Toys/Minis), and DNA tests where relevant.</li>
            <li>Plan spay/neuter timing with your vet based on size, lifestyle, and risk factors.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adult (1–7 years; Toys/Minis often longer)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual physicals; dental plan; weight checks at home.</li>
            <li>Eye exams as recommended (especially for breeding programs or if symptoms appear).</li>
            <li>Address recurring patterns early (ears, itch, cough, GI flares, intermittent limps).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (Standards ≈7+, Minis/Toys often later)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Twice-yearly visits; arthritis plans; traction and ramp strategies; cognitive health checks.</li>
            <li>Bloodwork/urinalysis as advised; screen endocrine disease based on symptom patterns.</li>
            <li>Vision/hearing accommodations: lighting, predictable layout, verbal cues.</li>
          </ul>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements (With Your Vet)</h2>
          <p className="mb-3">
            Feed a complete, balanced diet for life stage and activity. If you do only one nutrition-related thing, keep your Poodle lean.
            It is one of the strongest modifiable levers for orthopedic comfort, airway ease, and overall longevity.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              If you use supplements, ask your vet for guidance on evidence-based options and appropriate dosing (especially omega-3s).
            </li>
            <li>
              If you suspect food-related itch or GI sensitivity, avoid endless random diet changes and ask your vet about a structured plan.
            </li>
          </ul>
        </section>

        {/* FITNESS & GROOMING */}
        <section id="fitness-grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Fitness, Grooming &amp; Recovery</h2>
          <p className="mb-3">
            Poodles thrive with structured routines: warm-up, focused activity, cool-down, then real rest. Build fitness gradually, avoid repetitive high jumps,
            and add traction mats on slick floors. For grooming, keep a comfortable coat length for your climate, brush consistently, and follow a veterinarian-guided ear-care plan if your dog is infection-prone.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2">
              <strong>Simple recovery rules that prevent flare-ups:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>After big play days, plan a calmer next day (especially for dogs with patella/hip issues)</li>
              <li>Dry ears after water exposure</li>
              <li>Watch for &ldquo;delayed soreness&rdquo; the next morning as an early orthopedic signal</li>
            </ul>
          </div>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Notes for Poodles</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>
              <strong>Rest cycles:</strong> intelligent, sensitive dogs often do best with play → rest → enrichment rhythms rather than nonstop stimulation.
            </li>
            <li>
              <strong>Ear care:</strong> if your Poodle gets wet, request drying and a quick check afterward.
            </li>
            <li>
              <strong>Heat &amp; airway:</strong> Toys with cough history should use harnesses and have calm spaces; Standards should avoid intense activity right after meals.
            </li>
            <li>
              <strong>Medication &amp; diet notes:</strong> keep your Petunia profile updated so staff follow your veterinarian&apos;s plan precisely.
            </li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly &ldquo;Nose-to-Tail&rdquo; Scan (5 Minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh or track a waist trend; adjust food if weight creeps upward.</li>
            <li>Run hands over skin; note new lumps/bumps; check for scaling, odor, or sore spots.</li>
            <li>Check ears for odor/discharge; note head shaking or frequent scratching.</li>
            <li>Look at gums and teeth; note tartar and breath changes.</li>
            <li>Watch gait after rest and after exercise; note stiffness or skipping.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call the Vet Now</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unproductive retching or abdominal swelling (suspect GDV in Standards): emergency.</li>
            <li>Collapse, severe weakness, or persistent vomiting/diarrhea: urgent (possible crisis or other emergency).</li>
            <li>Sudden one-leg severe lameness in a young Toy: prompt evaluation.</li>
            <li>New seizures, repeated seizures, or prolonged episodes.</li>
            <li>Non-clotting bleeding, easy bruising, or unusual surgical bleeding history.</li>
            <li>Eye pain, sudden severe redness, or sudden vision change.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are Poodles &ldquo;prone&rdquo; to Addison&apos;s?</strong>
            <br />
            Standard Poodles have a documented association. The practical owner takeaway is to treat recurring GI plus unusual fatigue as a pattern worth discussing with your vet, especially if episodes worsen during stress.
          </p>

          <p className="mb-3">
            <strong>Do all Toy and Miniature Poodles get bad knees?</strong>
            <br />
            No, but patellar luxation is common in small breeds. Traction, weight control, and reducing repetitive jumping can reduce flare-ups and slow wear-and-tear.
          </p>

          <p className="mb-3">
            <strong>What eye screening should I ask about?</strong>
            <br />
            Breeding programs often use ACVO/CAER exams and relevant DNA tests. For pet owners, the most important step is to schedule an exam when you notice visual changes or your veterinarian recommends screening based on risk.
          </p>

          <p className="mb-3">
            <strong>My Toy Poodle has a honking cough. Is it always tracheal collapse?</strong>
            <br />
            Not always. Collapse is common, but cough has multiple causes. Record a video, use a harness, and schedule a vet visit if it persists. Treat breathing distress as urgent.
          </p>

          <p className="mb-3">
            <strong>How often should I brush my Poodle&apos;s teeth?</strong>
            <br />
            Daily or near-daily is the best goal, especially for Toys and Minis. Consistency matters more than perfection.
          </p>

          <p className="mb-3">
            <strong>Is ear plucking necessary?</strong>
            <br />
            Guidance varies and should be individualized. What is consistent is drying after water exposure and getting recurring infections evaluated so you treat the underlying pattern.
          </p>

          <p className="mb-3">
            <strong>Does Petunia replace veterinary care?</strong>
            <br />
            No. Petunia organizes information and routines. Your veterinarian provides diagnosis and treatment. Petunia helps keep care teams aligned.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Poodle Club of America—Health Concerns &amp; Health Statements (Addison&apos;s, SA, GDV, ASD, epilepsy, etc.).{' '}
              <a href="https://poodleclubofamerica.org/health-concerns/" target="_blank" rel="noopener noreferrer">
                https://poodleclubofamerica.org/health-concerns/
              </a>{' '}
              •{' '}
              <a
                href="https://poodleclubofamerica.org/wp-content/uploads/pca-health-statement-for-akc-december-11-2024-.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PCA Health Statement (2024)
              </a>
            </li>
            <li>
              Addison&apos;s disease clinical overview &amp; diagnosis. Merck Veterinary Manual (pro).{' '}
              <a
                href="https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/addison-disease-hypoadrenocorticism-in-animals"
                target="_blank"
                rel="noopener noreferrer"
              >
                merckvetmanual.com …/addison-disease
              </a>
            </li>
            <li>
              Addison&apos;s heritability in Standard Poodles. PubMed (Famula et&nbsp;al.).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/12570345/" target="_blank" rel="noopener noreferrer">
                pubmed.ncbi.nlm.nih.gov/12570345
              </a>
            </li>
            <li>
              Sebaceous adenitis—breed predisposition (Standard Poodle). VIN &amp; Today&apos;s Veterinary Practice; PMC review.{' '}
              <a href="https://veterinarypartner.vin.com/doc/?id=4952762&pid=19239" target="_blank" rel="noopener noreferrer">
                VIN
              </a>{' '}
              •{' '}
              <a
                href="https://todaysveterinarypractice.com/dermatology/sebaceous-adenitis-in-companion-animals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TVP 2023
              </a>{' '}
              •{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7877684/" target="_blank" rel="noopener noreferrer">
                PMC review
              </a>
            </li>
            <li>
              PRA in Poodles (prcd in Toy/Mini; other variants in Standards). VIPoodle fact sheet; UC Davis VGL.{' '}
              <a href="https://vipoodle.org/fact_sheet/pra/" target="_blank" rel="noopener noreferrer">
                vipoodle.org/fact_sheet/pra
              </a>{' '}
              •{' '}
              <a href="https://vgl.ucdavis.edu/test/pra-prcd" target="_blank" rel="noopener noreferrer">
                vgl.ucdavis.edu/test/pra-prcd
              </a>
            </li>
            <li>
              Annual ACVO/CAER eye screening guidance (Blue Book). OFA/ACVO.{' '}
              <a href="https://ofa.org/wp-content/uploads/2024/05/ACVO-Blue-Book-2023.pdf" target="_blank" rel="noopener noreferrer">
                ACVO Blue Book
              </a>{' '}
              •{' '}
              <a href="https://www.acvo.org/tips-treatments-tricks/ofa-exams" target="_blank" rel="noopener noreferrer">
                ACVO CAER
              </a>
            </li>
            <li>
              Patellar luxation (toy breeds). ACVS overview &amp; VIN.{' '}
              <a href="https://www.acvs.org/small-animal/patellar-luxations/" target="_blank" rel="noopener noreferrer">
                acvs.org …/patellar-luxations
              </a>{' '}
              •{' '}
              <a
                href="https://veterinarypartner.vin.com/default.aspx?catId=254100&id=4952566&pid=19239"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIN
              </a>
            </li>
            <li>
              Legg–Calvé–Perthes (Toys). VCA &amp; VIN owner resources.{' '}
              <a href="https://vcahospitals.com/know-your-pet/necrosis-of-the-femoral-head-in-dogs" target="_blank" rel="noopener noreferrer">
                VCA
              </a>{' '}
              •{' '}
              <a
                href="https://veterinarypartner.vin.com/default.aspx?catId=254100&id=4952619&pid=19239"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIN
              </a>
            </li>
            <li>
              GDV/bloat (Standards—deep-chested risk). Cornell &amp; VCA; TVP review mentions Standards among at-risk breeds.{' '}
              <a
                href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/gastric-dilatation-volvulus-gdv-or-bloat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornell
              </a>{' '}
              •{' '}
              <a href="https://vcahospitals.com/know-your-pet/bloat-gastric-dilatation-and-volvulus-in-dogs" target="_blank" rel="noopener noreferrer">
                VCA
              </a>{' '}
              •{' '}
              <a
                href="https://todaysveterinarypractice.com/gastroenterology/gastric-dilatation-volvulus-stabilization-surgery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TVP
              </a>
            </li>
            <li>
              Tracheal collapse (toy breeds, including Toy Poodles). Merck, ACVS, VCA.{' '}
              <a
                href="https://www.merckvetmanual.com/dog-owners/lung-and-airway-disorders-of-dogs/tracheal-collapse-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merck
              </a>{' '}
              •{' '}
              <a href="https://www.acvs.org/small-animal/tracheal-collapse/" target="_blank" rel="noopener noreferrer">
                ACVS
              </a>{' '}
              •{' '}
              <a href="https://vcahospitals.com/know-your-pet/tracheal-collapse-in-dogs" target="_blank" rel="noopener noreferrer">
                VCA
              </a>
            </li>
            <li>
              Dental disease (small-breed risk); Toy Poodle risk signals. Cornell Riney Center; RVC VetCompass.{' '}
              <a
                href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/health-topics/canine-health-information/periodontal-disease"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornell
              </a>{' '}
              •{' '}
              <a href="https://www.rvc.ac.uk/vetcompass/news/new-rvc-research-gets-to-the-root-of-dental-disease-in-dogs" target="_blank" rel="noopener noreferrer">
                RVC
              </a>
            </li>
            <li>
              von Willebrand disease overview &amp; testing. VIN; Cornell; UC Davis VGL.{' '}
              <a href="https://veterinarypartner.vin.com/default.aspx?id=4952042&pid=19239" target="_blank" rel="noopener noreferrer">
                VIN
              </a>{' '}
              •{' '}
              <a
                href="https://www.vet.cornell.edu/animal-health-diagnostic-center/laboratories/comparative-coagulation/clinical-topics/canine-von-willebrand-disease"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornell
              </a>{' '}
              •{' '}
              <a href="https://vgl.ucdavis.edu/test/vwd-type-1" target="_blank" rel="noopener noreferrer">
                VGL Type I
              </a>
            </li>
            <li>
              Idiopathic epilepsy—Standard Poodle family report; IVETF context. PubMed; IVETF consensus.{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/18020993/" target="_blank" rel="noopener noreferrer">
                Standard Poodle family study
              </a>{' '}
              •{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4552344/" target="_blank" rel="noopener noreferrer">
                IVETF overview
              </a>
            </li>
            <li>
              CHIC/parent-club testing (variety-specific): OFA &amp; PCA guidance.{' '}
              <a href="https://ofa.org/chic-programs/browse-by-breed/" target="_blank" rel="noopener noreferrer">
                OFA CHIC by Breed
              </a>{' '}
              •{' '}
              <a
                href="https://poodleclubofamerica.org/wp-content/uploads/poodle_health_screening_2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PCA Screening PDF
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
