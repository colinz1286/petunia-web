'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHealthIssuesDoPoodlesHave() {
  const locale = useLocale();

  const title =
    'What Health Issues Do Poodles Have? A Practical, Vet-Informed Guide (Standard, Miniature & Toy)';
  const date = 'August 26, 2025';
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

  const description =
    'Common health issues in Poodles—by size variety—with clear prevention and action steps. Covers Addison’s disease, sebaceous adenitis, PRA/cataracts, patellar luxation & Legg–Calvé–Perthes, hip dysplasia, tracheal collapse, hypothyroidism/Cushing’s, von Willebrand disease, bloat (GDV), dental/ear care, senior planning, and breeder health testing (CHIC/ACVO).';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/what-health-issues-do-poodles-have`}
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR Summary</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About Poodle Health</a></li>
            <li><a href="#varieties" className="underline hover:opacity-80">By Variety (Standard • Miniature • Toy)</a></li>
            <li><a href="#top-risks" className="underline hover:opacity-80">Top Risks (At a Glance)</a></li>
            <li><a href="#endocrine" className="underline hover:opacity-80">Endocrine: Addison’s, Cushing’s, Thyroid</a></li>
            <li><a href="#skin-coat" className="underline hover:opacity-80">Skin &amp; Coat: Sebaceous Adenitis, Allergies</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eyes: PRA, Cataracts &amp; Annual Screening</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic: Hips, Patellas, Legg–Calvé–Perthes</a></li>
            <li><a href="#airway-dental" className="underline hover:opacity-80">Airway &amp; Dental: Trachea, Teeth, Ears</a></li>
            <li><a href="#hematology" className="underline hover:opacity-80">Hematology: von Willebrand Disease</a></li>
            <li><a href="#gastro" className="underline hover:opacity-80">GI: Bloat (GDV) in Standards</a></li>
            <li><a href="#neuro" className="underline hover:opacity-80">Neurology: Idiopathic Epilepsy</a></li>
            <li><a href="#cardiac" className="underline hover:opacity-80">Cardiac Notes</a></li>
            <li><a href="#lifestage" className="underline hover:opacity-80">Life-Stage Vet Care</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Supplements</a></li>
            <li><a href="#fitness-grooming" className="underline hover:opacity-80">Fitness, Grooming &amp; Recovery</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Boarding &amp; Daycare Notes</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Owner Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
          <p className="mb-4">
            Poodles are brilliant, athletic, and generally long-lived—but each size variety carries
            predictable risks. <strong>Standard Poodles</strong> deserve special attention for
            <strong> Addison’s disease (hypoadrenocorticism)</strong>, <strong>sebaceous adenitis</strong>,
            <strong> gastric dilatation-volvulus (bloat)</strong>, and some orthopedic and eye issues.
            <strong> Miniature</strong> and <strong>Toy Poodles</strong> tend to face
            <strong> patellar luxation</strong>, <strong>Legg–Calvé–Perthes</strong> (particularly Toys),
            <strong> dental disease</strong>, and <strong>tracheal collapse</strong>, alongside eye and endocrine
            problems seen across the breed family. All varieties benefit from <strong>lean body condition</strong>,
            <strong> routine eye exams (ACVO/CAER)</strong>, sensible exercise, and preventive care.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask your daycare/boarding provider to connect your Petunia profile
            so vaccine dates, medications, allergy notes, and vet contacts stay synchronized between home and
            facility—reducing errors and speeding care decisions.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Poodle Health</h2>
          <p className="mb-3">
            Breed health is always a blend of <strong>genetics</strong>, <strong>management</strong>, and
            <strong> environment</strong>. With Poodles, owners control many winning levers: keep a lean body,
            maintain ear/skin hygiene, plan structured movement, and build a relationship with a veterinarian
            who knows the variety-specific risks. Responsible breeders add a second layer of protection through
            <strong> CHIC-style screening</strong> (hips or patellas as appropriate, annual ACVO/CAER eye exams,
            and DNA tests for problems like <em>prcd-PRA</em> or vWD in certain lines).
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Genetics:</strong> ask breeders about OFA hips (Standards), patellas (Toys/Minis), and eye clearances; request DNA test results where relevant.</li>
            <li><strong>Management:</strong> keep weight lean; set sustainable routines; brush teeth; prevent parasites; condition gradually.</li>
            <li><strong>Environment:</strong> traction on floors, heat/humidity awareness, quiet rest after activity, grooming/ear care cadence.</li>
          </ul>
          <p>
            Use this article as a practical map: what to watch, how to prevent, and what to do next when you notice early signs.
          </p>
        </section>

        {/* BY VARIETY */}
        <section id="varieties" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">By Variety: Standard • Miniature • Toy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Standard</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Addison’s disease risk (breed-associated)</li>
                <li>Sebaceous adenitis (autoimmune skin disease)</li>
                <li>GDV/bloat (deep-chested risk)</li>
                <li>Hip dysplasia; eye disease screening</li>
                <li>Idiopathic epilepsy reported in lines</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Miniature</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Patellar luxation</li>
                <li>PRA variants (prcd and others)</li>
                <li>Dental disease risk (small-breed pattern)</li>
                <li>Possible Cushing’s in seniors</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Toy</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Patellar luxation</li>
                <li>Legg–Calvé–Perthes (hip blood-supply disorder)</li>
                <li>Tracheal collapse; dental crowding/periodontal disease</li>
                <li>PRA variants; eye screening annually</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TOP RISKS */}
        <section id="top-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Risks (At a Glance)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Modifiable</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Excess weight &amp; deconditioning (all sizes)</li>
                <li>Ear infections (moisture, hair, allergies)</li>
                <li>Dental disease in Minis/Toys</li>
                <li>Heat stress during exertion; poor traction → slips</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Inherited/Structural</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Addison’s disease (Standards)</li>
                <li>PRA/cataracts (all sizes; variant differs)</li>
                <li>Sebaceous adenitis (Standards)</li>
                <li>Patellar luxation &amp; Legg–Calvé–Perthes (Toys/Minis)</li>
                <li>Hip dysplasia (Standards); von Willebrand disease in lines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENDOCRINE */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Endocrine: Addison’s, Cushing’s &amp; Thyroid Disease</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Addison’s Disease (Hypoadrenocorticism)</h3>
          <p className="mb-3">
            A classic Standard Poodle concern. Addison’s is adrenal hormone insufficiency—often vague at first
            (waxing/waning GI upset, lethargy, weight loss), then potentially severe. Diagnosis is via an
            <em> ACTH stimulation test</em>. With treatment, many dogs live normal lives; the key is recognizing it early.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cushing’s Disease (Hyperadrenocorticism)</h3>
          <p className="mb-3">
            Usually a pituitary-driven excess of cortisol in older dogs. Signs include increased appetite, drinking/urination,
            panting, muscle loss, and a thinning coat or recurrent infections. Managed long-term with veterinary oversight.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hypothyroidism</h3>
          <p className="mb-3">
            Middle-aged dogs (including Poodles) can develop autoimmune thyroiditis or idiopathic thyroid atrophy. Signs:
            lethargy, weight gain without more food, cold intolerance, coat/skin changes, and recurrent ear/skin infections.
            Diagnosis is by blood work; treatment is daily medication with periodic rechecks.
          </p>
        </section>

        {/* SKIN & COAT */}
        <section id="skin-coat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Coat: Sebaceous Adenitis, Allergies</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Sebaceous Adenitis (SA)</h3>
          <p className="mb-3">
            An autoimmune skin disease strongly associated with Standard Poodles in multiple reports. Signs can include
            scaling, hair loss (especially along the topline, ears, and tail), follicular casts, and secondary infections.
            Diagnosis requires a skin biopsy. Management is long-term and may include topical therapy, antiseborrheic bathing,
            omega-3s, and occasionally systemic medication per a dermatologist.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Allergic Skin &amp; Ear Disease</h3>
          <p className="mb-3">
            Environmental allergies (atopy) are common across breeds; Poodles may present with itchy skin, paw licking,
            and ear infections. Prioritize parasite control, regular bathing/drying after water, and a veterinarian-guided
            plan (topicals, immunotherapy, or prescription antipruritics as needed).
          </p>
        </section>

        {/* EYES */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: PRA, Cataracts &amp; Annual Screening</h2>
          <p className="mb-3">
            Poodles can inherit progressive retinal atrophy (PRA). In <strong>Toy/Miniature</strong> varieties,
            <em> prcd-PRA</em> is common and has a DNA test; Standard Poodles show other PRA types. Cataracts occur across sizes.
            Because some inherited eye conditions develop later, breeders and owners should follow
            <strong> annual ACVO/CAER eye exams</strong> during breeding years (and beyond when advised).
          </p>
        </section>

        {/* ORTHOPEDIC */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic: Hips, Patellas &amp; Legg–Calvé–Perthes</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hip Dysplasia (Standards)</h3>
          <p className="mb-3">
            Malformed/lax hips → arthritis. Signs: stiffness after rest, reluctance to jump, bunny-hopping. Prevention includes
            selecting screened parents (OFA/PennHIP), lean weight, and sensible conditioning. Your vet can tailor pain control
            and rehab if arthritis develops.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Patellar Luxation (Toys/Minis)</h3>
          <p className="mb-3">
            “Trick knee” that pops in/out—very common in toy breeds. Grades range from incidental to surgical. Keep nails trimmed,
            avoid repetitive jumping on slick surfaces, and keep weight lean; your vet will advise if surgery is appropriate.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Legg–Calvé–Perthes (Toys)</h3>
          <p className="mb-3">
            Avascular necrosis of the femoral head in young, small-breed dogs. Presents as one-sided hindlimb lameness and pain,
            typically at 5–10 months. Surgery (femoral head/neck ostectomy) plus rehab often restores comfort and function.
          </p>
        </section>

        {/* AIRWAY & DENTAL */}
        <section id="airway-dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Airway &amp; Dental: Tracheal Collapse, Teeth, Ears</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Tracheal Collapse (Toys)</h3>
          <p className="mb-3">
            A small-breed problem with a classic “goose-honk” cough. Weight control, harnesses (not neck collars), and environmental
            changes help; some dogs need medication or specialty procedures.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dental Disease (Toys/Minis)</h3>
          <p className="mb-3">
            Small mouths crowd teeth, increasing periodontal risk. Daily or near-daily brushing is best; add VOHC-accepted
            chews and professional cleanings as your vet advises. Dental pain often masquerades as “picky eating” or irritability.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Ears (All Sizes)</h3>
          <p className="mb-3">
            Poodles grow hair in ear canals; management is individualized—current veterinary guidance varies on routine plucking.
            What’s universal: <strong>dry thoroughly</strong> after water, and have your vet guide cleaner use and technique if
            your dog is prone to infections or allergies.
          </p>
        </section>

        {/* HEMATOLOGY */}
        <section id="hematology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hematology: von Willebrand Disease (vWD)</h2>
          <p className="mb-3">
            An inherited clotting disorder seen in many breeds and reported in Poodles. Breeding programs may use DNA testing
            for Type I vWD where indicated. Pet owners most often encounter vWD as a pre-op screening topic or unexpected bleeding
            history—your vet will advise testing where warranted.
          </p>
        </section>

        {/* GI */}
        <section id="gastro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">GI: Bloat (GDV) in Standard Poodles</h2>
          <p className="mb-3">
            Large, deep-chested dogs—like Standards—have an elevated risk of gastric dilatation-volvulus (bloat). Sudden distension,
            unproductive retching, restlessness, and collapse are emergencies. Discuss <em>prophylactic gastropexy</em> with your vet
            if your Standard is already undergoing anesthesia (e.g., for a different procedure).
          </p>
        </section>

        {/* NEURO */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neurology: Idiopathic Epilepsy</h2>
          <p className="mb-3">
            Seizure disorders occur in many breeds and have been reported in Standard Poodle lines. Workups rule out structural
            and metabolic causes first; many dogs live well on anti-seizure medications and lifestyle adjustments. Keep a log of
            events (time, trigger, duration) and share videos with your vet.
          </p>
        </section>

        {/* CARDIAC */}
        <section id="cardiac" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cardiac Notes</h2>
          <p className="mb-3">
            Parent-club health statements list <em>atrial septal defects</em> among conditions reported in Standards. Ask your
            breeder about family cardiac screening; your veterinarian will guide diagnostics if a murmur or exercise intolerance
            is noted.
          </p>
        </section>

        {/* LIFESTAGE CARE */}
        <section id="lifestage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life-Stage Veterinary Care &amp; Screenings</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (8 weeks–12 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccinations per AAHA/WSAVA; parasite prevention.</li>
            <li>Growth management: avoid repetitive high-impact jumping; teach traction &amp; calm routines.</li>
            <li>Discuss breeder testing: hips (Standards), patellas (Toys/Minis), DNA tests (e.g., prcd-PRA where relevant).</li>
            <li>Plan spay/neuter timing with your vet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adult (1–7 years; Toys/Minis often longer)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual physicals; dental plan; weight checks every 1–2 months at home.</li>
            <li>Annual ACVO/CAER eye exam during breeding years (and beyond as advised).</li>
            <li>Screen thyroid if suggestive signs; monitor exercise heat tolerance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (Standards ≈7+, Minis/Toys often later)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Twice-yearly visits; arthritis pain plans; traction/ramp strategies; cognitive health checks.</li>
            <li>Bloodwork/urinalysis as advised; screen for endocrine disease when indicated.</li>
            <li>Vision/hearing accommodations: lighting, predictable layout, verbal cues.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Use Petunia reminders to log vaccine expirations, meds, dental cleanings, and senior
            checkups so your boarding/daycare provider stays aligned with your vet plan.
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements (With Your Vet)</h2>
          <p className="mb-3">
            Feed a complete, balanced diet for life stage and activity. Keep your Poodle <em>lean</em>—it is the single most
            powerful modifiable lever for orthopedic, endocrine, and airway comfort. For skin/joint support, your vet may
            recommend specific omega-3 dosing or vetted joint nutraceuticals; evidence varies by product and patient.
          </p>
        </section>

        {/* FITNESS & GROOMING */}
        <section id="fitness-grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Fitness, Grooming &amp; Recovery</h2>
          <p className="mb-3">
            Poodles excel with <strong>structured</strong> routines: warm-up → focused activity → cool-down → rest. Use traction
            mats on slick floors; avoid repetitive high jumps; build muscle with hill walks and controlled fetch sets. Grooming:
            keep a comfortable coat length for your climate, brush regularly, and follow a consistent ear-care plan with your vet.
          </p>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Notes for Poodles</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Rest cycles:</strong> intelligent, sensitive dogs do best with play → rest → enrichment rhythms.</li>
            <li><strong>Ear care:</strong> if your Poodle gets wet, request drying and checks afterward.</li>
            <li><strong>Heat &amp; airway:</strong> Toys with cough history should use harnesses and have calm spaces; Standards should avoid post-meal sprints.</li>
            <li><strong>Medication &amp; diet notes:</strong> keep your Petunia profile updated so staff follow your veterinarian’s plan precisely.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly “Nose-to-Tail” Scan (5 Minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh or tape-measure chest/waist; adjust food if trending up.</li>
            <li>Run hands over skin; note new lumps/bumps; check coat/ear odor.</li>
            <li>Look at gums (color), eyes (cloudiness), nails (length), dental tartar.</li>
            <li>Watch gait after rest and after exercise; note stiffness or skipping.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call the Vet Now</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unproductive retching/distension (suspect GDV in Standards)—emergency.</li>
            <li>Collapse, severe weakness, or persistent vomiting/diarrhea (possible Addisonian crisis or other emergency).</li>
            <li>Sudden one-leg lameness in a young Toy (possible Legg–Calvé–Perthes).</li>
            <li>New seizures; multiple episodes; or any prolonged seizure.</li>
            <li>Non-clotting bleeding, easy bruising, or unusual surgical bleeding history.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Are Poodles “prone” to Addison’s?</strong><br />
            Standard Poodles carry a documented breed association with Addison’s. Know vague signs (waxing/waning GI, lethargy)
            and discuss testing with your vet if suspicious.
          </p>
          <p className="mb-3">
            <strong>Do all Toy/Minis get bad knees?</strong><br />
            No—but patellar luxation is common in toy breeds. Keep weight lean, maintain traction, and treat slippery jumping as a risk.
          </p>
          <p className="mb-3">
            <strong>What eye testing should I ask about?</strong><br />
            Annual ACVO/CAER eye exams during breeding years; ask about DNA tests (e.g., <em>prcd-PRA</em> in Toys/Minis) as advised.
          </p>
          <p className="mb-3">
            <strong>What about tracheal collapse?</strong><br />
            A small-breed airway issue—weight loss, harness use, and environment changes help; some dogs need specialty care.
          </p>
          <p>
            <strong>Does Petunia replace veterinary care?</strong><br />
            No—Petunia organizes information and routines. Your veterinarian provides diagnosis and treatment. Use Petunia to keep care teams aligned.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Poodle Club of America—Health Concerns &amp; Health Statements (Addison’s, SA, GDV, ASD, epilepsy, etc.).{' '}
              <a href="https://poodleclubofamerica.org/health-concerns/" target="_blank" rel="noopener noreferrer">https://poodleclubofamerica.org/health-concerns/</a>{' '}•{' '}
              <a href="https://poodleclubofamerica.org/wp-content/uploads/pca-health-statement-for-akc-december-11-2024-.pdf" target="_blank" rel="noopener noreferrer">PCA Health Statement (2024)</a>
            </li>
            <li>
              Addison’s disease clinical overview &amp; diagnosis. Merck Veterinary Manual (pro).{' '}
              <a href="https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/addison-disease-hypoadrenocorticism-in-animals" target="_blank" rel="noopener noreferrer">
                merckvetmanual.com …/addison-disease
              </a>
            </li>
            <li>
              Addison’s heritability in Standard Poodles. PubMed (Famula et&nbsp;al.).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/12570345/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/12570345</a>
            </li>
            <li>
              Sebaceous adenitis—breed predisposition (Standard Poodle). VIN &amp; Today’s Veterinary Practice; PMC review.{' '}
              <a href="https://veterinarypartner.vin.com/doc/?id=4952762&pid=19239" target="_blank" rel="noopener noreferrer">VIN</a>{' '}•{' '}
              <a href="https://todaysveterinarypractice.com/dermatology/sebaceous-adenitis-in-companion-animals/" target="_blank" rel="noopener noreferrer">TVP 2023</a>{' '}•{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7877684/" target="_blank" rel="noopener noreferrer">PMC review</a>
            </li>
            <li>
              PRA in Poodles (prcd in Toy/Mini; other variants in Standards). VIPoodle fact sheet; UC Davis VGL.{' '}
              <a href="https://vipoodle.org/fact_sheet/pra/" target="_blank" rel="noopener noreferrer">vipoodle.org/fact_sheet/pra</a>{' '}•{' '}
              <a href="https://vgl.ucdavis.edu/test/pra-prcd" target="_blank" rel="noopener noreferrer">vgl.ucdavis.edu/test/pra-prcd</a>
            </li>
            <li>
              Annual ACVO/CAER eye screening guidance (Blue Book). OFA/ACVO.{' '}
              <a href="https://ofa.org/wp-content/uploads/2024/05/ACVO-Blue-Book-2023.pdf" target="_blank" rel="noopener noreferrer">ACVO Blue Book</a>{' '}•{' '}
              <a href="https://www.acvo.org/tips-treatments-tricks/ofa-exams" target="_blank" rel="noopener noreferrer">ACVO CAER</a>
            </li>
            <li>
              Patellar luxation (toy breeds). ACVS overview &amp; VIN.{' '}
              <a href="https://www.acvs.org/small-animal/patellar-luxations/" target="_blank" rel="noopener noreferrer">acvs.org …/patellar-luxations</a>{' '}•{' '}
              <a href="https://veterinarypartner.vin.com/default.aspx?catId=254100&id=4952566&pid=19239" target="_blank" rel="noopener noreferrer">VIN</a>
            </li>
            <li>
              Legg–Calvé–Perthes (Toys). VCA &amp; VIN owner resources.{' '}
              <a href="https://vcahospitals.com/know-your-pet/necrosis-of-the-femoral-head-in-dogs" target="_blank" rel="noopener noreferrer">VCA</a>{' '}•{' '}
              <a href="https://veterinarypartner.vin.com/default.aspx?catId=254100&id=4952619&pid=19239" target="_blank" rel="noopener noreferrer">VIN</a>
            </li>
            <li>
              GDV/bloat (Standards—deep-chested risk). Cornell &amp; VCA; TVP review mentions Standards among at-risk breeds.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/gastric-dilatation-volvulus-gdv-or-bloat" target="_blank" rel="noopener noreferrer">Cornell</a>{' '}•{' '}
              <a href="https://vcahospitals.com/know-your-pet/bloat-gastric-dilatation-and-volvulus-in-dogs" target="_blank" rel="noopener noreferrer">VCA</a>{' '}•{' '}
              <a href="https://todaysveterinarypractice.com/gastroenterology/gastric-dilatation-volvulus-stabilization-surgery/" target="_blank" rel="noopener noreferrer">TVP</a>
            </li>
            <li>
              Tracheal collapse (toy breeds, including Toy Poodles). Merck, ACVS, VCA.{' '}
              <a href="https://www.merckvetmanual.com/dog-owners/lung-and-airway-disorders-of-dogs/tracheal-collapse-in-dogs" target="_blank" rel="noopener noreferrer">Merck</a>{' '}•{' '}
              <a href="https://www.acvs.org/small-animal/tracheal-collapse/" target="_blank" rel="noopener noreferrer">ACVS</a>{' '}•{' '}
              <a href="https://vcahospitals.com/know-your-pet/tracheal-collapse-in-dogs" target="_blank" rel="noopener noreferrer">VCA</a>
            </li>
            <li>
              Dental disease (small-breed risk); Toy Poodle risk signals. Cornell Riney Center; RVC VetCompass.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/health-topics/canine-health-information/periodontal-disease" target="_blank" rel="noopener noreferrer">Cornell</a>{' '}•{' '}
              <a href="https://www.rvc.ac.uk/vetcompass/news/new-rvc-research-gets-to-the-root-of-dental-disease-in-dogs" target="_blank" rel="noopener noreferrer">RVC</a>
            </li>
            <li>
              von Willebrand disease overview &amp; testing. VIN; Cornell; UC Davis VGL.{' '}
              <a href="https://veterinarypartner.vin.com/default.aspx?id=4952042&pid=19239" target="_blank" rel="noopener noreferrer">VIN</a>{' '}•{' '}
              <a href="https://www.vet.cornell.edu/animal-health-diagnostic-center/laboratories/comparative-coagulation/clinical-topics/canine-von-willebrand-disease" target="_blank" rel="noopener noreferrer">Cornell</a>{' '}•{' '}
              <a href="https://vgl.ucdavis.edu/test/vwd-type-1" target="_blank" rel="noopener noreferrer">VGL Type I</a>
            </li>
            <li>
              Idiopathic epilepsy—Standard Poodle family report; IVETF context. PubMed; IVETF consensus.{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/18020993/" target="_blank" rel="noopener noreferrer">Standard Poodle family study</a>{' '}•{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4552344/" target="_blank" rel="noopener noreferrer">IVETF overview</a>
            </li>
            <li>
              CHIC/parent-club testing (variety-specific): OFA &amp; PCA guidance.{' '}
              <a href="https://ofa.org/chic-programs/browse-by-breed/" target="_blank" rel="noopener noreferrer">OFA CHIC by Breed</a>{' '}•{' '}
              <a href="https://poodleclubofamerica.org/wp-content/uploads/poodle_health_screening_2020.pdf" target="_blank" rel="noopener noreferrer">PCA Screening PDF</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your
            veterinarian for medical decisions.
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
