'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHealthIssuesDoLabradorsHave() {
  const locale = useLocale();

  const title = 'What Health Issues Do Labradors Have? A Practical, Vet-Informed Guide for Families';
  const date = 'April 14, 2025';
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
    'Common Labrador Retriever health problems—what to watch for and how to prevent them. Covers hips, elbows, cruciate tears, obesity, ear/skin disease, EIC, PRA, cancers, hypothyroidism, limber tail, senior care, and life-stage checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/what-health-issues-do-labradors-have`}
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
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About Lab Health</a></li>
            <li><a href="#top-risks" className="underline hover:opacity-80">Top Risks (At a Glance)</a></li>
            <li><a href="#weight" className="underline hover:opacity-80">Weight &amp; Obesity</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic Problems</a></li>
            <li><a href="#ears-skin" className="underline hover:opacity-80">Ears &amp; Skin</a></li>
            <li><a href="#neuro" className="underline hover:opacity-80">Exercise-Induced Collapse &amp; Neuro</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eyes: PRA, Cataracts</a></li>
            <li><a href="#endocrine" className="underline hover:opacity-80">Endocrine (Hypothyroidism)</a></li>
            <li><a href="#gastro" className="underline hover:opacity-80">GI &amp; Bloat (GDV)</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancers Seen in Labs</a></li>
            <li><a href="#other-lab-things" className="underline hover:opacity-80">Other Lab-Typical Issues</a></li>
            <li><a href="#lifestage" className="underline hover:opacity-80">Life-Stage Vet Care</a></li>
            <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Supplements</a></li>
            <li><a href="#fitness" className="underline hover:opacity-80">Fitness, Conditioning &amp; Recovery</a></li>
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
            Labrador Retrievers are robust, athletic dogs with a few predictable health vulnerabilities: <strong>weight gain/obesity</strong>;
            <strong> hip and elbow dysplasia</strong> and other orthopedic disease (including cruciate ligament tears and arthritis);
            <strong> ear infections</strong> (water lovers with floppy ears); <strong>skin allergies</strong>; specific inherited conditions
            such as <strong>exercise-induced collapse (EIC)</strong> and <strong>progressive retinal atrophy (PRA)</strong>; and
            life-stage issues like <strong>hypothyroidism</strong>, some <strong>cancers</strong>, and occasional
            <strong> gastrointestinal dilation-volvulus (bloat)</strong>. Most risk is manageable with body-condition control, smart exercise,
            preventive care, and early veterinary intervention.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If your facility uses the Petunia platform for boarding/daycare, ask to be added as your Lab’s
            approved client so vaccine dates, medications, feeding notes, and vet alerts stay organized between home and provider. Clear,
            sharable records help prevent health mistakes and speed up care decisions.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Labrador Health</h2>
          <p className="mb-3">
            Every breed stacks genetics, lifestyle, and environment in different proportions. With Labs, owners control many of the big levers:
            keeping a lean body condition, planning low-impact daily exercise, drying ears after swims, building a relationship with a veterinarian,
            and catching small changes early. Genetics still matter—responsible breeders screen for hips, elbows, eyes, and known DNA issues—but
            day-to-day management is where families win or lose years of quality life.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Genetics:</strong> choose breeders who use OFA/PennHIP, ophthalmology exams, and discuss EIC/PRA testing.</li>
            <li><strong>Management:</strong> lean weight, structured activity, ear/skin hygiene, parasite prevention.</li>
            <li><strong>Environment:</strong> heat &amp; humidity control, safe swimming, traction on slippery floors, ramps vs. stairs for seniors.</li>
          </ul>
          <p>
            Think of this article as a practical risk map. You don’t need to fear every sickness; you need a system for prevention, detection, and
            response. We include those systems below.
          </p>
        </section>

        {/* TOP RISKS */}
        <section id="top-risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Risks for Labs (At a Glance)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Modifiable</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Obesity &amp; deconditioning</li>
                <li>Otitis externa (ear infections) in swimmers</li>
                <li>Allergic skin disease with secondary infections</li>
                <li>Cruciate tears exacerbated by excess weight &amp; slippery floors</li>
                <li>Heat stress during exertion</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Inherited/Structural</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Hip &amp; elbow dysplasia</li>
                <li>Exercise-Induced Collapse (EIC)</li>
                <li>Progressive Retinal Atrophy (PRA), cataracts</li>
                <li>Some cancers (e.g., mast cell, lymphoma, hemangiosarcoma)</li>
                <li>Hypothyroidism</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WEIGHT */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight &amp; Obesity: The #1 Health Lever You Control</h2>
          <p className="mb-3">
            The most common, most preventable risk in Labradors is <strong>excess weight</strong>. Extra pounds add load to hips, elbows,
            shoulders, and knees; increase cruciate ligament strain; worsen heat stress; and shorten lifespan. Lean Labs move easier, get fewer
            injuries, and age better.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Body Condition: What “Lean” Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ribs easily felt with light pressure; not protruding, not buried.</li>
            <li>Visible waist from above; clear abdominal tuck from the side.</li>
            <li>Energy to spare without panting excessively at rest.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Feeding Strategy That Works</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Measure meals; don’t free-feed. Use part of the ration for training.</li>
            <li>Choose complete &amp; balanced diets; discuss caloric targets with your veterinarian.</li>
            <li>Swap high-calorie biscuits for veggie snacks or small training treats.</li>
            <li>Weigh monthly. If weight creeps, cut calories by ~10–15% and add low-impact movement.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In the Petunia app, add a note to your daycare/boarding profile about weight goals and feeding amounts.
            Clear feeding instructions reduce unintentional overfeeding when your Lab isn’t home.
          </div>
        </section>

        {/* ORTHOPEDIC */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic Problems in Labs</h2>
          <p className="mb-3">
            Labs are active, medium-large athletes. Orthopedic issues are common but not inevitable. Smart breeding and owner management keep many
            dogs comfortable well into senior years.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hip Dysplasia</h3>
          <p className="mb-3">
            Hip dysplasia is malformation or laxity of the hip joint leading to arthritis. Signs include stiffness after rest, bunny hopping, or
            reluctance to jump. Diagnosis involves orthopedic exams and radiographs (OFA or PennHIP screening in breeding programs).
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Management:</strong> keep lean, controlled exercise, joint-friendly surfaces, rehab therapy, NSAIDs or other meds as prescribed.</li>
            <li><strong>Prevention:</strong> buy from breeders who screen hips; avoid forced repetitive impact in puppies; build muscle gradually.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Elbow Dysplasia</h3>
          <p className="mb-3">
            Elbow dysplasia includes several developmental issues (fragmented medial coronoid process, osteochondritis, ununited anconeal process)
            that cause forelimb lameness. Early veterinary assessment matters; some cases benefit from surgery, and all benefit from weight control.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cruciate Ligament Disease (CCL)</h3>
          <p className="mb-3">
            The canine equivalent of ACL tears. Risk is higher with obesity and deconditioning. Sudden rear-leg lameness after a sprint or twist is
            a red flag. Treatment ranges from strict rest to surgery (e.g., TPLO), followed by structured rehab.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Arthritis &amp; Lifelong Joint Care</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep weight down; add low-impact activity (sniff walks, water work if cleared).</li>
            <li>Discuss pain control, joint injections, rehab, and home traction with your vet.</li>
            <li>Use ramps for cars/sofas; add yoga-mat runners on slick floors to prevent slips.</li>
          </ul>
        </section>

        {/* EARS & SKIN */}
        <section id="ears-skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ears &amp; Skin: The Everyday Issues</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Otitis Externa (Ear Infections)</h3>
          <p className="mb-3">
            Labs swim. Floppy ears trap moisture. That combo invites yeast/bacterial overgrowth. Signs: head shaking, scratching, odor, redness,
            discharge. Prevention hinges on drying after water and using a vet-approved cleaner if your Lab is prone to flare-ups.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dry ears after swims/baths. Avoid cotton swabs down the canal.</li>
            <li>See the vet for any ear pain—eardrum status dictates treatment.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergic Skin Disease</h3>
          <p className="mb-3">
            Atopic dermatitis (environmental allergies) is common in Labs. Signs include itching, paw licking, recurrent ear issues, hot spots, and
            secondary infections. Food allergy is less common but possible; true diagnosis requires a vet-guided elimination diet.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Year-round parasite prevention first—fleas worsen everything.</li>
            <li>Work with your veterinarian on a multi-modal plan: bathing, topicals, and prescription itch control when needed.</li>
          </ul>
        </section>

        {/* NEURO */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise-Induced Collapse &amp; Other Neuromuscular Issues</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Exercise-Induced Collapse (EIC)</h3>
          <p className="mb-3">
            EIC is a genetic condition seen in Labs where intense exercise triggers weakness or collapse, often starting in the hindquarters.
            Episodes typically occur after high-arousal sprints, especially in heat or stress, and resolve with rest. DNA testing is available; some
            dogs are affected, some carriers, some clear. Management: avoid all-out sprints and overheating; watch for early wobble and stop
            <em> immediately</em>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <strong>Safety:</strong> If your Lab ever wobbles, drags, or collapses after exertion, stop, cool, and contact your veterinarian. Ask
            whether EIC testing is appropriate given history.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Laryngeal Paralysis (Lar Par)</h3>
          <p className="mb-3">
            More often a senior-dog issue; the laryngeal cartilages don’t open fully, making breathing noisy and heat intolerance worse. Signs:
            raspy bark, stridor, distress in heat. Diagnosis is veterinary; management ranges from weight control and cooling strategies to surgery
            in selected cases.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">“Limber Tail” (Acute Caudal Myopathy)</h3>
          <p className="mb-3">
            A classic Lab quirk—sudden, painful, droopy tail after cold swims or hard activity. Usually resolves with rest and NSAIDs as prescribed.
            Prevent with gradual warm-ups and avoiding abrupt cold-water immersion.
          </p>
        </section>

        {/* EYES */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: PRA, Cataracts &amp; Screening</h2>
          <p className="mb-3">
            Progressive retinal atrophy (PRA) is a group of inherited diseases causing gradual vision loss. Responsible breeders use ophthalmic exams
            and available DNA tests to reduce risk. Cataracts also occur; some are inherited, some secondary to other disease. Early detection helps
            planning—even if cure isn’t possible, accommodations (lighting, layout) make life easier.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Report night-vision changes, bumping into objects, or visible lens opacity to your vet.</li>
            <li>Ask breeders about eye exam results and PRA testing in their lines.</li>
          </ul>
        </section>

        {/* ENDOCRINE */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Endocrine: Hypothyroidism in Labs</h2>
          <p className="mb-3">
            Hypothyroidism (low thyroid hormone) is a common endocrine disorder in middle-aged dogs, including Labs. Signs: weight gain without food
            increase, lethargy, cold intolerance, dry/brittle coat, recurrent skin/ear issues. Diagnosis is by blood tests; treatment is daily
            medication with periodic monitoring.
          </p>
        </section>

        {/* GI */}
        <section id="gastro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">GI &amp; Bloat (GDV)</h2>
          <p className="mb-3">
            Labs are not the most at-risk breed for gastric dilatation-volvulus (bloat), but cases occur in medium-large, deep-chested dogs. Signs:
            sudden abdominal distension, unproductive retching, restlessness, drooling, collapse. This is an emergency—go to a veterinary hospital
            immediately. Ask your vet whether preventative gastropexy is appropriate if your Lab has risk factors or undergoes abdominal surgery for
            another reason.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Multiple smaller meals; avoid all-out exercise right before/after meals; manage stress around feeding.</li>
          </ul>
        </section>

        {/* CANCER */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cancers Seen in Labradors</h2>
          <p className="mb-3">
            Any dog can get cancer; in Labs, we commonly see <strong>mast cell tumors</strong>, <strong>lymphoma</strong>,
            <strong> hemangiosarcoma</strong>, and others. Early detection improves options. Do monthly “nose-to-tail” checks:
            feel the skin for new lumps, check gums, note weight and energy changes, and mention findings promptly to your vet.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Skin masses:</strong> don’t “wait and see”—many can be removed with better margins when small.</li>
            <li><strong>Spleen/heart tumors (hemangiosarcoma):</strong> look for collapse, pale gums, sudden weakness—emergency care needed.</li>
          </ul>
        </section>

        {/* OTHER LAB THINGS */}
        <section id="other-lab-things" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Other Lab-Typical Issues &amp; Practical Fixes</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Dental disease:</strong> start brushing young; use VOHC-approved chews; schedule cleanings as your vet advises.</li>
            <li><strong>Hot spots:</strong> common after swim + scratching; keep coat clean/dry; see vet early for treatment.</li>
            <li><strong>Interdigital cysts/lick granulomas:</strong> manage allergies and boredom; use cones/boots briefly as your vet directs.</li>
            <li><strong>Tail tip injuries:</strong> happy Lab tails plus tight spaces → bleeding tips; pad sharp corners or use protective wraps temporarily.</li>
          </ul>
        </section>

        {/* LIFESTAGE CARE */}
        <section id="lifestage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Life-Stage Veterinary Care &amp; Screenings</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (8 weeks–12 months)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccinations per AAHA/WSAVA guidance; parasite prevention.</li>
            <li>Growth management: large-breed puppy diet; avoid high-impact repetition.</li>
            <li>Baseline exams: discuss hips/elbows in the pedigree; plan spay/neuter timing with your vet.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adult (1–7 years)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual physicals; dental assessments; weight checks quarterly at home.</li>
            <li>Discuss screening labs as recommended; address lumps when small.</li>
            <li>EIC management plan if history suggests risk; heat management for working/hiking Labs.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Senior (7+ years)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Twice-yearly vet visits; arthritis pain plans; traction/ramp strategies.</li>
            <li>Annual or semiannual bloodwork/urinalysis as advised; monitor thyroid.</li>
            <li>Vision/hearing adjustments: lighting, predictable layouts, verbal cues.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Use Petunia reminders to log vaccine expirations, meds, and senior-care checkups so your boarding/daycare
            provider stays synced with your vet plan.
          </div>
        </section>

        {/* NUTRITION */}
        <section id="nutrition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements (With Your Vet)</h2>
          <p className="mb-3">
            Feed a complete and balanced diet appropriate for life stage and activity. Keep your Lab <em>lean</em>—it is the single biggest
            modifiable factor for orthopedic and overall health.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Omega-3s (EPA/DHA):</strong> support skin/coat and may help joint comfort; discuss dosing to avoid GI upset.</li>
            <li><strong>Joint nutraceuticals:</strong> evidence varies; some dogs benefit. Ask your veterinarian which products they trust.</li>
            <li><strong>Food transitions:</strong> switch over 7–10 days to avoid GI upset that can complicate skin/ear disease.</li>
          </ul>
        </section>

        {/* FITNESS */}
        <section id="fitness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Fitness, Conditioning &amp; Recovery</h2>
          <p className="mb-3">
            Labs thrive on movement—but make it <strong>structured</strong>. Trade random all-out sprints for routines that build muscle and protect
            joints: sniff walks, controlled fetch in short sets, hill walking, swimming with ear care afterward, and mat-based downtime to prevent
            over-arousal.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Warm up → activity block → cool down → nap. Repeatable rhythms reduce injuries.</li>
            <li>During heat/humidity, move sessions to early morning/evening; carry water; use shade.</li>
            <li>Teach cooperative care so post-exercise ear/dry routines are easy.</li>
          </ul>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Notes Specific to Labs</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Rest is part of safety:</strong> ask about play → rest → enrichment cycles; avoid marathon free-for-all play.</li>
            <li><strong>Ear care:</strong> if your Lab swims at daycare, request post-swim drying and ear checks.</li>
            <li><strong>Heat management:</strong> fetch sets capped; plenty of shade/water; staff trained to spot early wobble.</li>
            <li><strong>Med &amp; diet notes:</strong> keep Petunia profile updated so staff follow your veterinarian’s plan precisely.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly “Nose-to-Tail” Scan (5 Minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Weigh or tape-measure chest/waist; adjust food if trending up.</li>
            <li>Run hands over skin; note new lumps/bumps; check coat shine/dandruff.</li>
            <li>Look at ears (redness/odor), gums (color), eyes (cloudiness), nails (length).</li>
            <li>Watch gait after rest and after moderate exercise; note stiffness.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call the Vet Now</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unproductive retching, sudden distension, collapse (suspect GDV).</li>
            <li>Collapse or hind-end wobble after exertion (possible EIC or heat stress).</li>
            <li>Acute lameness, non-weight-bearing, or obvious pain.</li>
            <li>Ear pain/odor, head tilt, or disorientation.</li>
            <li>New mass growing over days/weeks; bleeding or ulcerated skin lesions.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>How can I reduce my Lab’s risk of joint problems?</strong><br />
            Keep a lean body condition, avoid repetitive high-impact activities while young, strengthen with controlled exercise, use traction at home,
            and buy from breeders who screen hips/elbows.
          </p>
          <p className="mb-3">
            <strong>My Lab loves swimming. How do I prevent ear infections?</strong><br />
            Rinse and dry thoroughly after water; use a vet-approved ear cleaner if your dog is prone to otitis; see your vet with any odor/pain.
          </p>
          <p className="mb-3">
            <strong>Is EIC a dealbreaker?</strong><br />
            Not necessarily. Many EIC-affected dogs live full lives with activity modifications. Know the signs, avoid trigger scenarios, and talk with
            your veterinarian about testing and management.
          </p>
          <p className="mb-3">
            <strong>Which cancers are most common in Labs?</strong><br />
            We often see mast cell tumors, lymphoma, and hemangiosarcoma. Early detection improves options—check your dog monthly and see your vet
            for any new mass.
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
              American Kennel Club (AKC). Labrador Retriever breed overview.{' '}
              <a href="https://www.akc.org/dog-breeds/labrador-retriever/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/labrador-retriever/
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Pet owner health resources (obesity, dental, preventive care).{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). Canine Vaccination Guidelines (2022).{' '}
              <a href="https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). Global Nutrition Guidelines &amp; Toolkit.{' '}
              <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Hip &amp; elbow dysplasia; dermatology; endocrine disease; oncology overviews.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Screening for hips, elbows, eyes; CHIC program.{' '}
              <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">https://ofa.org</a>
            </li>
            <li>
              University of Minnesota Canine Genetics Lab. Exercise-Induced Collapse (EIC).{' '}
              <a href="https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic" target="_blank" rel="noopener noreferrer">
                https://vetmed.umn.edu/research/labs/canine-genetics-lab/eic
              </a>
            </li>
            <li>
              American College of Veterinary Dermatology (ACVD). Owner resources on allergic skin disease.{' '}
              <a href="https://www.acvd.org/owner-resources" target="_blank" rel="noopener noreferrer">
                https://www.acvd.org/owner-resources
              </a>
            </li>
            <li>
              American College of Veterinary Ophthalmologists (ACVO). Eye disease resources, screening.{' '}
              <a href="https://www.acvo.org/" target="_blank" rel="noopener noreferrer">https://www.acvo.org/</a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Cruciate ligament disease in dogs.{' '}
              <a href="https://www.acvs.org/small-animal/canine-cruciate-ligament-disease" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/canine-cruciate-ligament-disease
              </a>
            </li>
            <li>
              Cornell University College of Veterinary Medicine. Canine hypothyroidism overview.{' '}
              <a href="https://www.vet.cornell.edu/" target="_blank" rel="noopener noreferrer">https://www.vet.cornell.edu/</a>
            </li>
            <li>
              VCA Animal Hospitals. Otitis externa; atopic dermatitis; limber tail; laryngeal paralysis.{' '}
              <a href="https://vcahospitals.com/know-your-pet" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet
              </a>
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
