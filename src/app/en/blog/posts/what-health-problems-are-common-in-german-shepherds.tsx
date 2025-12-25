'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHealthProblemsAreCommonInGermanShepherds() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'What Health Problems Are Common in German Shepherds? A Practical, Evidence-Informed Owner’s Guide (Screens, Prevention & When to See the Vet)';
  const date = 'July 18, 2025';
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

  const slug = 'what-health-problems-are-common-in-german-shepherds';

  // Keep meta description concise (roughly 150–200 characters)
  const description =
    'Common German Shepherd health risks explained clearly: hips/elbows, spine, DM, EPI/IBD/megaesophagus, GDV, skin disease, pannus, seizures, and key red flags with practical screening steps.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
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

        {/* Table of Contents */}
        <nav className="mb-8 text-sm">
          <p className="font-semibold mb-2">Table of Contents</p>
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#summary" className="underline hover:opacity-80">
                TL;DR + Petunia Tip
              </a>
            </li>
            <li>
              <a href="#how-to-think" className="underline hover:opacity-80">
                How to Think About GSD Health
              </a>
            </li>
            <li>
              <a href="#screening" className="underline hover:opacity-80">
                Screening Map (Puppy → Senior)
              </a>
            </li>
            <li>
              <a href="#orthopedic" className="underline hover:opacity-80">
                Orthopedic &amp; Spine
              </a>
            </li>
            <li>
              <a href="#dm" className="underline hover:opacity-80">
                Degenerative Myelopathy (DM)
              </a>
            </li>
            <li>
              <a href="#gi" className="underline hover:opacity-80">
                Gastrointestinal: EPI, IBD, Megaesophagus
              </a>
            </li>
            <li>
              <a href="#gdv" className="underline hover:opacity-80">
                Bloat/GDV
              </a>
            </li>
            <li>
              <a href="#skin" className="underline hover:opacity-80">
                Skin &amp; Immune: Atopy, Pyoderma, Perianal Fistulas
              </a>
            </li>
            <li>
              <a href="#eyes" className="underline hover:opacity-80">
                Eyes: Pannus
              </a>
            </li>
            <li>
              <a href="#neuro" className="underline hover:opacity-80">
                Neurology: Epilepsy
              </a>
            </li>
            <li>
              <a href="#endocrine" className="underline hover:opacity-80">
                Less Common: Pituitary Dwarfism
              </a>
            </li>
            <li>
              <a href="#cancer" className="underline hover:opacity-80">
                Cancer Highlights (Hemangiosarcoma)
              </a>
            </li>
            <li>
              <a href="#operator" className="underline hover:opacity-80">
                Operator-Grade Checklists
              </a>
            </li>
            <li>
              <a href="#vet-now" className="underline hover:opacity-80">
                When to Call the Vet Now
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources (Selected)
              </a>
            </li>
          </ul>
        </nav>

        <article className="prose prose-slate max-w-none prose-headings:text-[#2c4a30] prose-a:text-[#2c4a30]">
          {/* TL;DR */}
          <section id="summary" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>

            <p className="mb-4">
              German Shepherd Dogs (GSDs) are athletic working dogs with specific, well-documented health risks. The
              categories owners most commonly deal with are joints/spine (hips, elbows, lumbosacral issues), skin/ears
              (allergies with secondary infections), and chronic gastrointestinal problems (including EPI and chronic
              enteropathy). The highest-stakes emergencies to recognize quickly are GDV (bloat) and sudden collapse.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              If you are worried right now, use this quick decision guide
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Possible GDV:</strong> unproductive retching, tight/bloated belly, restlessness, drooling, collapse → go to
                the ER immediately.
              </li>
              <li>
                <strong>Collapse or extreme weakness:</strong> pale gums, sudden lethargy, distended abdomen, rapid breathing →
                ER immediately.
              </li>
              <li>
                <strong>Seizure emergencies:</strong> seizure lasting longer than 5 minutes, repeated seizures in a day, trouble
                breathing, or no recovery to normal behavior → ER immediately.
              </li>
              <li>
                <strong>New hind-end weakness:</strong> especially if sudden, severe, or painful → urgent same-day vet evaluation;
                take a short video of gait and rising if safe.
              </li>
              <li>
                <strong>Chronic problems:</strong> recurring itch/ear infections, ongoing loose stool, weight loss, regurgitation →
                schedule a structured work-up rather than trying random fixes.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              The “most common” vs “most dangerous” categories
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Most common quality-of-life issues:</strong> osteoarthritis from hip/elbow problems, chronic skin and ear
                inflammation, chronic GI disease (including EPI/chronic enteropathy).
              </li>
              <li>
                <strong>Most dangerous emergencies:</strong> GDV (bloat) and sudden collapse (which can include internal bleeding
                scenarios).
              </li>
              <li>
                <strong>Progressive mobility issues (often later life):</strong> degenerative lumbosacral stenosis and conditions
                on the DM differential list.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              If you only do three things this month
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Lock in lean body condition:</strong> aim for a visible waist and easy rib feel; track weight monthly.
              </li>
              <li>
                <strong>Make symptoms measurable:</strong> stool notes (frequency/consistency), itch score, and a short gait video
                when something looks “off.”
              </li>
              <li>
                <strong>Write one crisis card:</strong> nearest 24/7 ER address and phone, GDV warning signs, seizure plan, and vet
                consent plan for caregivers.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Petunia tip:</strong> In your Petunia profile, keep a <em>“GSD Health &amp; Screening”</em> note with breeder
              health documents (OFA/PennHIP and OFA elbows where applicable, DM genotype), body condition photos, training
              and conditioning notes, and a simple emergency card (GDV signs and the nearest 24/7 ER). Share this note with
              your sitter or boarding team so everyone can act fast if a red flag appears.
            </div>
          </section>

          {/* HOW TO THINK */}
          <section id="how-to-think" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              How to Think About GSD Health (Systems, Not Surprises)
            </h2>

            <p className="mb-4">
              You do not need to memorize every diagnosis. You need a repeatable system that turns vague worry into specific
              signals your veterinarian can use. For shepherds, the most powerful “system levers” are lean body condition,
              smart conditioning, and early pattern recognition for joints, GI signs, and skin disease.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Make “lean” real (not just a slogan)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                You should be able to feel ribs easily with a light touch, and see a clear waist from above.
              </li>
              <li>
                Track body weight monthly (or more often during diet changes) so trends are obvious before problems escalate.
              </li>
              <li>
                For joint and back issues, a small reduction in body condition often produces outsized comfort improvements.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Puppy vs adult vs senior priorities</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Puppies:</strong> protect growth plates by avoiding repetitive high-impact exercise and forcing mileage; focus
                on controlled movement, confidence-building training, and calm routines.
              </li>
              <li>
                <strong>Adults:</strong> maintain strength and flexibility, and do not let chronic itch, loose stool, or stiffness become
                “normal.”
              </li>
              <li>
                <strong>Seniors:</strong> proactively audit pain and neurologic function; sooner planning for mobility support reduces
                panic later.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">When to stop watching and start a vet work-up</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Lameness that is severe, non-weight-bearing, or persists beyond a couple of days despite rest.
              </li>
              <li>
                Weight loss, increased stool volume, or chronic loose stool that lasts more than a few weeks.
              </li>
              <li>
                Recurrent ear infections or itch that keeps returning after short-term treatment.
              </li>
              <li>
                Any regurgitation pattern, coughing after regurgitation, or breathing changes (aspiration risk considerations).
              </li>
            </ul>
          </section>

          {/* SCREENING */}
          <section id="screening" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Screening Map (Puppy → Senior)</h2>

            <p className="mb-4">
              The timeline below is a practical owner roadmap. Your veterinarian will tailor specifics based on your dog’s age,
              lifestyle, and symptoms. The key idea is to separate “screening and baseline tracking” from “diagnostic escalation
              when a pattern appears.”
            </p>

            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li>
                <strong>8–20 weeks:</strong> growth and nutrition plan, parasite prevention, socialization and routine building. Flag
                any regurgitation (megaesophagus is a different pathway than vomiting). Persistent diarrhea, failure to gain,
                or dramatic stool volume changes deserve early evaluation rather than waiting for “outgrowing it.”
              </li>
              <li>
                <strong>6–12 months:</strong> growth-plate friendly exercise and conditioning. Monitor for shifting leg lameness
                consistent with panosteitis, but do not assume: persistent or severe lameness warrants orthopedic evaluation.
                If itch and ear issues are frequent, build a stepwise skin plan early.
              </li>
              <li>
                <strong>12–24 months:</strong> orthopedic review and a baseline gait assessment. For breeding stock, official hips and
                elbows screening is standard. For pet owners, your vet may recommend imaging only if symptoms or exam findings
                justify it.
              </li>
              <li>
                <strong>2–6 years:</strong> annual wellness visits with dental and musculoskeletal checks. If GI symptoms appear
                (weight loss, increased stool volume, poor coat, chronic loose stool), start a structured work-up rather than
                rotating foods randomly.
              </li>
              <li>
                <strong>7+ years:</strong> proactive arthritis and neurologic checks. Discuss GDV risk and whether gastropexy makes
                sense if your dog is already undergoing anesthesia for another procedure. Create a mobility plan early if hind
                limb weakness begins.
              </li>
            </ol>

            <h3 className="text-lg font-semibold mt-2 mb-2">A practical step-up ladder for recurring symptoms</h3>

            <h4 className="text-base font-semibold mt-3 mb-2">Chronic loose stool, weight loss, or increased stool volume</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Start with parasite testing and basic rule-outs.</li>
              <li>Run a rigorous diet trial (strict, time-limited, measurable response criteria).</li>
              <li>
                If the pattern persists, discuss targeted labs that help sort common pathways (including cobalamin, and cTLI
                when EPI is suspected).
              </li>
              <li>
                Escalate to imaging (such as ultrasound) and specialty referral when red flags are present or when stepwise
                care stalls.
              </li>
            </ul>

            <h4 className="text-base font-semibold mt-3 mb-2">Recurring itch, ears, and skin infections</h4>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Confirm consistent parasite control and treat secondary infections thoroughly.</li>
              <li>Build a long-term allergy plan rather than repeating short rescue courses.</li>
              <li>
                Use culture-guided decisions for recurrent or deep infections, especially when prior antibiotic courses fail.
              </li>
            </ul>
          </section>

          {/* ORTHOPEDIC & SPINE */}
          <section id="orthopedic" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Orthopedic &amp; Spine: Hips, Elbows, and “Lower Back”</h2>

            <p className="mb-4">
              Developmental hip and elbow issues are classic large-breed risks. Good breeders screen hips (OFA or PennHIP) and
              elbows (OFA). Even in well-bred dogs, overfeeding, rapid growth, and excessive impact while growth plates are open
              can increase later-life arthritis burden.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What owners commonly notice</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Reluctance to jump into cars or onto furniture, stiffness after rest, “bunny hopping,” or a change in stride.</li>
              <li>Forelimb lameness after hard play (often elbows, shoulders, or soft tissue injuries on the differential list).</li>
              <li>In adolescents, shifting leg lameness can match panosteitis, but persistent pain still deserves evaluation.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Pattern recognition that reduces uncertainty</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>One limb vs both hind limbs:</strong> single-limb lameness often points to orthopedic injury; progressive
                bilateral hind-end weakness raises additional neurologic considerations.
              </li>
              <li>
                <strong>Painful vs not painful:</strong> pain behaviors (yelp, guarding, reluctance to be touched) push you toward
                orthopedic or spinal pain pathways; some neurologic conditions may present with weakness that is not obviously
                painful.
              </li>
              <li>
                <strong>Sudden vs gradual:</strong> sudden non-weight-bearing lameness is urgent; gradual stiffness needs a
                structured plan rather than “waiting it out.”
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              What your veterinarian will often do first
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Orthopedic exam and gait assessment.</li>
              <li>Basic neurologic screen if weakness or proprioception changes are suspected.</li>
              <li>Radiographs when exam findings justify imaging or when symptoms persist.</li>
              <li>
                Referral or advanced imaging when there is progressive weakness, severe pain, or unclear diagnosis after
                reasonable first steps.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              Degenerative Lumbosacral Stenosis (DLSS / Cauda Equina Syndrome)
            </h3>
            <p className="mb-4">
              In mature shepherds, “lower back” pain with hind-end weakness, difficulty on stairs, reluctance to jump, or pain
              during certain movements can be consistent with DLSS. It involves narrowing at the lumbosacral junction that can
              compress nerve roots. Weight control, conditioning, and activity management help some dogs; others need advanced
              imaging and, in selected cases, surgical intervention.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Signs that commonly raise DLSS concern include pain on certain hind-limb extension movements, difficulty rising,
                or a consistent reluctance to jump that is out of proportion to general “aging.”
              </li>
            </ul>
          </section>

          {/* DM */}
          <section id="dm" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Degenerative Myelopathy (DM)</h2>

            <p className="mb-4">
              DM is a progressive spinal cord disease of older dogs with a genetic component (SOD1 mutation) identified in
              multiple breeds, including German Shepherds. It often begins as subtle hind-end weakness, scuffing, or knuckling
              that slowly progresses. DM is generally described as not painful, but many dogs on the DM differential list also
              have painful orthopedic or spinal issues at the same time, which is why structured evaluation matters.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What genotype can and cannot tell you</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Genotype can help inform breeding decisions and provides context, but it is not a standalone clinical diagnosis.
              </li>
              <li>
                If hind-end weakness appears later in life, genotype may help your vet weigh DM on the differential list, while
                still ruling out other causes.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              DM look-alikes owners should know about
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Degenerative lumbosacral stenosis (often painful and activity-related).</li>
              <li>
                Osteoarthritis, cruciate problems, and other orthopedic causes of weakness or gait change.
              </li>
              <li>Disk disease or other spinal conditions that can be acute and painful.</li>
            </ul>

            <p className="mb-4">
              If you are trying to sort out hind-end weakness patterns at home (pain vs nerve weakness, what to film, and when to seek urgent care), use this
              step-by-step guide:{' '}
              <Link
                href={`/${locale}/blog/german-shepherd-hind-end-weakness-dm-vs-arthritis-vs-dlss`}
                className="underline hover:opacity-80"
              >
                German Shepherd Hind-End Weakness: DM vs Arthritis vs DLSS vs Injury
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              Owner actions that reduce panic later
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Keep seniors lean and strong with controlled exercise and rehab-friendly routines.</li>
              <li>Teach cooperative care for harnesses, boots, nail trims, and handling.</li>
              <li>Ask about mobility support early if scuffing, knuckling, or stumbling begins.</li>
            </ul>
          </section>

          {/* GI */}
          <section id="gi" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Gastrointestinal: EPI, Chronic Enteropathy, and Congenital Megaesophagus
            </h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              Vomiting vs regurgitation (this distinction changes the plan)
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Vomiting:</strong> active abdominal effort, nausea cues, and often digested food or fluid; may include bile.
              </li>
              <li>
                <strong>Regurgitation:</strong> passive “spill” of undigested food or water with minimal effort; can happen soon after
                eating or drinking.
              </li>
              <li>
                Regurgitation patterns raise different concerns than vomiting, including aspiration risk pathways your vet will take seriously.
                If you want a clear at-home checklist, read:{' '}
                <Link
                  href={`/${locale}/blog/vomiting-vs-regurgitation-in-dogs`}
                  className="underline hover:opacity-80"
                >
                  Vomiting vs Regurgitation in Dogs
                </Link>
                .
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Exocrine Pancreatic Insufficiency (EPI)</h3>
            <p className="mb-4">
              EPI is failure of the exocrine pancreas to produce enough digestive enzymes. Shepherds are a classic predisposed
              breed. Hallmarks include chronic weight loss despite appetite, increased stool volume, flatulence, and a poor coat.
              Diagnosis is typically via a specific blood test (canine trypsin-like immunoreactivity). Treatment centers on enzyme
              supplementation and diet strategy; many dogs improve dramatically once stable.
            </p>
            <p className="mb-4">
              If you want the full step-by-step owner playbook (testing, enzyme routines, B12 support, diet strategy, and troubleshooting), read:{' '}
              <Link
                href={`/${locale}/blog/epi-in-german-shepherds-owner-guide`}
                className="underline hover:opacity-80"
              >
                EPI in German Shepherds: The Practical Owner Guide
              </Link>
              .
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Practical owner markers that often improve early with effective therapy include stool volume and body weight trend.
              </li>
              <li>
                If response is incomplete, your vet will often consider adherence, diet fit, and concurrent GI problems rather than
                assuming “EPI treatment failed.”
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">
              Inflammatory Bowel Disease (IBD) / Chronic Enteropathy
            </h3>
            <p className="mb-4">
              Chronic enteropathy is a spectrum where immune dysregulation and other factors produce persistent GI signs in
              predisposed dogs. Veterinary care is typically stepwise: a measured diagnostic pathway, strict diet trials, targeted
              supplementation (including cobalamin when indicated), and medications when needed. A structured stool, appetite, and
              weight log is not busywork; it is the difference between guessing and making the next best decision.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                A rigorous diet trial is usually time-limited, strict, and judged by measurable change rather than vague impressions.
              </li>
              <li>
                Escalation to ultrasound or endoscopy is typically considered when red flags appear or when stepwise care stalls.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Congenital Megaesophagus</h3>
            <p className="mb-4">
              Shepherds are one of the breeds with documented congenital megaesophagus (a dilated, poorly motile esophagus). The
              classic sign is regurgitation rather than vomiting. Management often includes feeding posture strategies, food texture
              adjustments, and careful monitoring for aspiration complications with your veterinarian’s guidance.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                If regurgitation is followed by coughing, fever, lethargy, or breathing changes, aspiration concerns become urgent.
              </li>
            </ul>
          </section>

          {/* GDV */}
          <section id="gdv" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Bloat/GDV (Gastric Dilatation–Volvulus)</h2>

            <p className="mb-4">
              Deep-chested, large breeds including GSDs are at risk for GDV, a life-threatening emergency in which the stomach
              distends and can twist. If you suspect GDV, time matters more than perfect certainty.
            </p>

            <p className="mb-4">
              For a clear emergency checklist you can follow under stress (what to do in the first 10 minutes, what not to do, and what the ER will typically do), read:{' '}
              <Link
                href={`/${locale}/blog/gdv-bloat-emergency-plan-large-dogs`}
                className="underline hover:opacity-80"
              >
                GDV (Bloat) Emergency Plan for Large Dogs
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What to do in the first minutes</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Do not wait for it to “pass.”</li>
              <li>Call the nearest 24/7 ER while you are leaving so they can prepare.</li>
              <li>Do not attempt home remedies; rapid evaluation and stabilization is the priority.</li>
              <li>Bring any relevant medical info and let the ER team know the symptoms and timing.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Gastropexy in plain language</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Prophylactic gastropexy is designed to reduce the risk of stomach twisting; it does not prevent a dog from getting
                gas or looking uncomfortable.
              </li>
              <li>
                The decision is individual: your dog’s conformation, family history, your tolerance for emergency risk, and whether
                it can be paired with another anesthetic event.
              </li>
            </ul>
          </section>

          {/* SKIN & IMMUNE */}
          <section id="skin" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Skin &amp; Immune: Atopy, Pyoderma, and Perianal Fistulas
            </h2>

            <p className="mb-4">
              Many shepherds develop allergic skin disease (atopic dermatitis) with itchy ears, feet, and underbelly, often with
              recurrent ear infections and secondary bacterial or yeast infections. The key to avoiding the “never-ending cycle”
              feeling is a stepwise plan and a long-term maintenance strategy.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">A practical itch-and-ears algorithm</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Confirm consistent parasite prevention and address any active infection completely (ears and skin).
              </li>
              <li>
                Build a long-term itch-control plan rather than repeating short rescue treatments.
              </li>
              <li>
                Use barrier care (bathing, ear hygiene) as maintenance, not only during disasters.
              </li>
              <li>
                Consider diet trials when indicated, done strictly and judged by response rather than assumptions.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Recurrent or deep pyoderma</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                When infections recur, it often means the underlying allergy or barrier problem is not controlled yet.
              </li>
              <li>
                Culture-guided decisions can be important when prior antibiotics fail or infections are deep and stubborn.
              </li>
              <li>
                Owners can help by tracking itch score, taking periodic photos, and avoiding frequent product changes that confuse
                the pattern.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Perianal Fistulas (Anal Furunculosis)</h3>
            <p className="mb-4">
              Perianal fistulas are uniquely over-represented in German Shepherds. Owners may notice painful, draining lesions
              around the anus, straining to defecate, or intense licking. Modern management is typically immune-focused medical
              therapy plus meticulous hygiene and close follow-up. Earlier, structured treatment often produces better control.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                If your dog seems painful during bowel movements or you see draining tracts, do not delay evaluation; early care
                can reduce long-term suffering.
              </li>
            </ul>
          </section>

          {/* EYES */}
          <section id="eyes" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Eyes: Pannus (Chronic Superficial Keratitis)
            </h2>

            <p className="mb-4">
              Pannus is an immune-mediated corneal disease seen commonly in shepherd-type dogs. It can worsen with UV exposure
              and is often identified by corneal haze that creeps inward, with pink tissue and pigment changes over time. Early
              diagnosis and consistent therapy often preserve comfortable vision long-term.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Owner moves that help your vet help you</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Take a clear daylight photo of each eye occasionally, especially if you notice haze, redness, or pigment changes.
              </li>
              <li>
                Track whether symptoms flare during bright outdoor exposure or high-UV environments.
              </li>
              <li>
                If your dog is squinting, suddenly painful, or has an abrupt “blue” haze, urgent same-day evaluation is important
                to rule out ulcers or trauma.
              </li>
            </ul>
          </section>

          {/* NEURO: EPILEPSY */}
          <section id="neuro" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Neurology: Idiopathic Epilepsy (Overview)</h2>

            <p className="mb-4">
              Epilepsy is the most common chronic neurologic disorder in dogs. Some breeds, including German Shepherds, appear
              over-represented in epidemiologic summaries. Many dogs do well with modern medications and structured follow-up.
              The most important owner skill is knowing what to do during the first event.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What to do during a seizure</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Start a timer and keep your dog safe from stairs, water, or hard furniture edges.
              </li>
              <li>
                Do not put hands near the mouth; dogs can bite unintentionally during seizure activity.
              </li>
              <li>
                If safe, record a short video and note duration and recovery behavior.
              </li>
              <li>
                Call your veterinarian after the event; go to emergency care for prolonged seizures, repeated seizures in a day,
                breathing issues, or failure to return toward normal.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">What your vet may discuss at first diagnosis</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Baseline labs and toxin exposure considerations.</li>
              <li>Whether the pattern suggests a chronic epilepsy pathway or another cause.</li>
              <li>Referral and advanced testing considerations if the presentation is atypical.</li>
            </ul>
          </section>

          {/* ENDOCRINE: DWARFISM */}
          <section id="endocrine" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Less Common but Notable: Pituitary Dwarfism (Juvenile-Onset Panhypopituitarism)
            </h2>

            <p className="mb-4">
              This is a rare but important German Shepherd condition with a known genetic basis. Affected pups often grow slowly
              after a few months of age, retain a soft puppy coat, and may have proportional small stature. Diagnosis and
              management are specialized, and breeders can reduce risk through DNA testing and thoughtful pairings.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">If you suspect it, what to do next</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Schedule evaluation promptly; do not wait for “catching up.”</li>
              <li>Ask your vet whether referral is appropriate for endocrine confirmation and management planning.</li>
              <li>If from a breeder, notify them so testing and responsible pairing decisions can be addressed.</li>
            </ul>
          </section>

          {/* CANCER */}
          <section id="cancer" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Cancer Highlights (Hemangiosarcoma)</h2>

            <p className="mb-4">
              Large breeds including GSDs appear in predisposition discussions for hemangiosarcoma, an aggressive vascular cancer
              that can involve the spleen, heart, skin, or other tissues. A common terrifying presentation is sudden collapse due
              to internal bleeding. There is no single prevention strategy, so rapid recognition and urgent care matter most.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">If collapse happens, what the ER often does first</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Immediate stabilization and vital sign assessment.</li>
              <li>Point-of-care blood checks that help assess anemia and circulation status.</li>
              <li>
                Rapid abdominal screening imaging in many settings to look for free fluid scenarios, with follow-up imaging as
                indicated.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">A note on “screening”</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                Routine senior monitoring can be reasonable depending on your dog’s situation, but no approach guarantees early
                detection for all cases.
              </li>
              <li>
                The most reliable “early action” remains recognizing collapse and seeking emergency care without delay.
              </li>
            </ul>
          </section>

          {/* OPERATOR CHECKLISTS */}
          <section id="operator" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Operator-Grade Checklists (Owners, Handlers, &amp; Facilities)
            </h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">1) Breeder/Rescue Intake (Puppy or Adult)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Docs:</strong> OFA/PennHIP report; OFA elbows; DM genotyping policy; vaccine and deworming records; stool
                checks when available.
              </li>
              <li>
                <strong>Video:</strong> 30–60 seconds of natural gait at walk and trot on level ground; sit-to-stand; stairs if safe.
              </li>
              <li>
                <strong>Baseline:</strong> weight and body condition; skin and ear status; eye surface photo in daylight; 3-day stool
                note log (consistency and volume).
              </li>
              <li>
                <strong>Plan:</strong> socialization list, growth-plate friendly exercise plan, training calendar, and insurance plan.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">2) Monthly Owner Audit</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Body condition:</strong> confirm rib feel and waist; track weight monthly so change is obvious.
              </li>
              <li>
                <strong>Stool and weight trends:</strong> persistent weight loss or increased stool volume is a reason to discuss
                EPI or chronic enteropathy pathways.
              </li>
              <li>
                <strong>Skin and ears:</strong> track an itch score and note odor, hot spots, or repeat ear debris; take photos during
                flares for pattern clarity.
              </li>
              <li>
                <strong>Movement:</strong> note hesitation to jump, stiffness after rest, or stair changes; capture a short video when
                it appears.
              </li>
              <li>
                <strong>Events:</strong> track regurgitation vs vomiting episodes and recovery patterns rather than guessing later.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">3) Facility or Boarding Readiness (GSD-specific)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Medical flags with clear instructions (EPI enzymes with dosing format; chronic enteropathy diet must not be
                changed; pannus eye medication schedule).
              </li>
              <li>
                Exercise menu that avoids repetitive high-impact fetch and includes sniff walks, obedience games, and mat-settle
                work.
              </li>
              <li>
                Emergency card: nearest ER, GDV signs, seizure plan, and signed veterinary consent plan for caregivers.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">A simple caregiver handoff format that prevents mistakes</h3>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>
                For EPI: enzyme name, exact dose per meal, storage instructions, and what to do if a dose is missed.
              </li>
              <li>
                For seizures: what “ER now” looks like (duration thresholds, repeated events in a day, breathing changes).
              </li>
              <li>
                For GDV: symptom list and the instruction to leave immediately rather than waiting to “see if it passes.”
              </li>
            </ul>
          </section>

          {/* VET NOW */}
          <section id="vet-now" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>GDV suspects:</strong> unproductive retching, tight/bloated abdomen, collapse → ER immediately.
              </li>
              <li>
                <strong>Collapse:</strong> pale gums, sudden weakness, distended abdomen, trouble breathing → ER immediately.
              </li>
              <li>
                <strong>Neurologic emergencies:</strong> inability to rise, sudden loss of coordination, seizure longer than 5 minutes,
                repeated seizures in a day, or no recovery → ER or urgent care as appropriate.
              </li>
              <li>
                <strong>GI emergencies:</strong> repeated vomiting with lethargy, black/tarry stool, or regurgitation followed by cough
                or breathing changes.
              </li>
              <li>
                <strong>Eye emergencies:</strong> squinting, sudden pain, or rapid change in corneal appearance → same-day evaluation.
              </li>
              <li>
                <strong>Orthopedic emergencies:</strong> non-weight-bearing lameness, screaming pain, sudden paralysis → urgent care.
              </li>
              <li>
                <strong>Perianal pain or bleeding:</strong> straining, visible lesions, drainage → early evaluation improves outcomes.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>How much of GSD health is “genetics” vs “management”?</strong>
              <br />
              Both matter. You cannot train away hip dysplasia or stop DM through conditioning alone, but lean body condition,
              smart exercise, and early intervention can dramatically improve comfort and function. Strong breeding practices
              reduce risk for certain problems.
            </p>

            <p className="mb-4">
              <strong>My adolescent shepherd is limping off and on. Is that panosteitis?</strong>
              <br />
              Possibly, but do not assume. Panosteitis can cause shifting leg lameness in growing large-breed dogs, yet joint
              disease and injuries can look similar. Persistent or severe lameness deserves a veterinary exam and imaging when
              indicated.
            </p>

            <p className="mb-4">
              <strong>How can I tell vomiting from regurgitation?</strong>
              <br />
              Vomiting is active and often includes abdominal effort and nausea signs; regurgitation is usually passive and may look like
              undigested food or water “coming back up” with little effort. Regurgitation patterns deserve prompt vet discussion because
              aspiration risk considerations are different. For a calm, step-by-step checklist and clear ER thresholds, see{' '}
              <Link
                href={`/${locale}/blog/vomiting-vs-regurgitation-in-dogs`}
                className="underline hover:opacity-80"
              >
                Vomiting vs Regurgitation in Dogs
              </Link>
              .
            </p>

            <p className="mb-4">
              <strong>Do probiotics or “sensitive stomach” diets prevent EPI or chronic enteropathy?</strong>
              <br />
              There is no diet that prevents EPI, since EPI is a pancreatic enzyme production problem. Nutrition can be central
              to management once disease is present. For chronic enteropathy, vets often start with a strict diet trial and then
              add targeted supplements or medications based on response and lab guidance.
            </p>

            <p className="mb-4">
              <strong>Should every shepherd get a prophylactic gastropexy?</strong>
              <br />
              Not necessarily. It is an individualized decision based on body conformation, family history, lifestyle, and your
              tolerance for emergency risk. Many owners consider it when their dog is already under anesthesia for another
              procedure.
            </p>

            <p className="mb-4">
              <strong>Is a DM “At Risk” genotype result a diagnosis?</strong>
              <br />
              No. Genotype informs risk and breeding policy and can provide context, but clinical diagnosis depends on age,
              exam findings, and ruling out other causes of hind-end weakness.
            </p>

            <p className="mb-4">
              <strong>My shepherd’s back end looks weak. Is it always DM?</strong>
              <br />
              No. Arthritis, cruciate issues, DLSS, and other spinal conditions can look similar. Painful signs, sudden change,
              or severe weakness should trigger prompt veterinary evaluation and a structured work-up.
            </p>

            <p className="mb-4">
              <strong>What should I ask a breeder or rescue about health?</strong>
              <br />
              Ask for documentation where available (hips and elbows screening, and DM genotyping policy), and ask how the dog
              has been raised (exercise and socialization plan). For an adult, request recent gait video and any vet history to
              reduce surprises.
            </p>

            <p className="mb-2">
              <strong>What is one high-impact thing I can do today?</strong>
              <br />
              Audit body condition and routines. A small improvement in body condition plus a balanced, predictable exercise plan
              often produces meaningful benefits across joints, spine, skin, and GI comfort.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Orthopedic Foundation for Animals (OFA): Hip Dysplasia, Elbow Dysplasia, DM Information.{' '}
                <Link
                  href="https://ofa.org/diseases/hip-dysplasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hip
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://ofa.org/diseases/elbow-dysplasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elbow
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://ofa.org/degenerative-myelopathy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DM
                </Link>
              </li>

              <li>
                Merck Veterinary Manual: GDV, panosteitis, osteochondrosis, perianal fistulas, atopic dermatitis, chronic
                enteropathies, pannus, idiopathic epilepsy overviews, megaesophagus, juvenile-onset panhypopituitarism.{' '}
                <Link
                  href="https://www.merckvetmanual.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck Veterinary Manual
                </Link>
              </li>

              <li>
                ACVS (American College of Veterinary Surgeons): Degenerative Lumbosacral Stenosis (Cauda Equina).{' '}
                <Link
                  href="https://www.acvs.org/small-animal/degenerative-lumbosacral-stenosis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACVS overview
                </Link>
              </li>

              <li>
                University of Missouri neurology resources and related DM genetics references.{' '}
                <Link
                  href="https://vhc.missouri.edu/small-animal-hospital/neurology-neurosurgery/facts-on-neurologic-diseases/canine-idiopathic-epilepsy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MU Neurology
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/19276068"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Awano et&nbsp;al. (PNAS 2009)
                </Link>
              </li>

              <li>
                GI diagnostics and EPI lab testing references.{' '}
                <Link
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7104967/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dossin (laboratory testing overview)
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1939-1676.2007.tb02950.x"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Batchelor et&nbsp;al. (breed association reference)
                </Link>
              </li>

              <li>
                Chronic enteropathy and IBD references.{' '}
                <Link
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6054420/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Peiravan et&nbsp;al. (2018)
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-small-intestine-in-small-animals/chronic-enteropathies-in-small-animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck chronic enteropathy overview
                </Link>
              </li>

              <li>
                Pannus (Chronic Superficial Keratitis).{' '}
                <Link
                  href="https://www.merckvetmanual.com/eye-diseases-of-animals/corneal-diseases/chronic-superficial-keratitis-in-animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck pannus overview
                </Link>
              </li>

              <li>
                Pituitary dwarfism (LHX3).{' '}
                <Link
                  href="https://www.merckvetmanual.com/endocrine-system/the-pituitary-gland/juvenile-onset-panhypopituitarism-in-dogs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck juvenile-onset panhypopituitarism
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/22132174/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voorbij et&nbsp;al. (2011)
                </Link>
              </li>

              <li>
                Hemangiosarcoma.{' '}
                <Link
                  href="https://www.merckvetmanual.com/hematologic-disorders/neoplasia/hemangiosarcoma-in-small-animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck hemangiosarcoma overview
                </Link>
              </li>
            </ul>

            <p className="text-xs text-gray-600 mt-4">
              This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your
              veterinarian for medical decisions. If you suspect an emergency (for example, GDV, collapse, or seizures), seek
              immediate care.
            </p>

            <p className="text-xs text-gray-600 mt-2">
              Written date: <span className="font-medium">{date}</span>
            </p>
          </section>
        </article>

        {/* Related German Shepherd Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href={`/${locale}/blog/fun-facts-about-german-shepherds`}
                className="underline hover:opacity-80"
              >
                Fun Facts About German Shepherds
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/do-german-shepherds-shed-a-lot`}
                className="underline hover:opacity-80"
              >
                Do German Shepherds Shed a Lot?
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/how-long-do-german-shepherds-live`}
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/how-much-does-a-german-shepherd-cost`}
                className="underline hover:opacity-80"
              >
                How Much Does a German Shepherd Cost?
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/are-german-shepherds-aggressive-or-dangerous`}
                className="underline hover:opacity-80"
              >
                Are German Shepherds Aggressive or Dangerous?
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/are-german-shepherds-good-with-kids`}
                className="underline hover:opacity-80"
              >
                Are German Shepherds Good with Kids?
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/german-shepherd-hind-end-weakness-dm-vs-arthritis-vs-dlss`}
                className="underline hover:opacity-80"
              >
                German Shepherd Hind-End Weakness: DM vs Arthritis vs DLSS vs Injury
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/blog/vomiting-vs-regurgitation-in-dogs`}
                className="underline hover:opacity-80"
              >
                Vomiting vs Regurgitation in Dogs
              </Link>
            </li>
          </ul>
        </div>

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
