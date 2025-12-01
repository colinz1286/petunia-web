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
  const description =
    'A deep, owner-friendly dive into common German Shepherd health issues—hips/elbows, spine (lumbosacral stenosis), degenerative myelopathy, GI diseases (EPI, IBD, megaesophagus), bloat/GDV, skin & immune disease (atopy, pyoderma, perianal fistulas), eye disease (pannus), cancers (e.g., hemangiosarcoma), and rare but important conditions (pituitary dwarfism)—with prevention, screening timelines, and red-flag checklists.';

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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About GSD Health</a></li>
            <li><a href="#screening" className="underline hover:opacity-80">Screening Map (Puppy → Senior)</a></li>
            <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic &amp; Spine</a></li>
            <li><a href="#dm" className="underline hover:opacity-80">Degenerative Myelopathy (DM)</a></li>
            <li><a href="#gi" className="underline hover:opacity-80">Gastrointestinal: EPI, IBD, Megaesophagus</a></li>
            <li><a href="#gdv" className="underline hover:opacity-80">Bloat/GDV</a></li>
            <li><a href="#skin" className="underline hover:opacity-80">Skin &amp; Immune: Atopy, Pyoderma, Perianal Fistulas</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eyes: Pannus (Chronic Superficial Keratitis)</a></li>
            <li><a href="#neuro" className="underline hover:opacity-80">Neurology: Epilepsy (Overview)</a></li>
            <li><a href="#endocrine" className="underline hover:opacity-80">Less Common but Notable: Pituitary Dwarfism</a></li>
            <li><a href="#cancer" className="underline hover:opacity-80">Cancer Highlights (Hemangiosarcoma)</a></li>
            <li><a href="#operator" className="underline hover:opacity-80">Operator-Grade Checklists</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-3">
            German Shepherd Dogs (GSDs) are athletic working dogs with specific, well-documented
            health risks. The most common categories you’ll hear about are <strong>hips/elbows</strong> (developmental
            dysplasia and arthritis), <strong>spine</strong> (degenerative lumbosacral stenosis), <strong>degenerative myelopathy (DM)</strong>,
            <strong>gastrointestinal disease</strong> (exocrine pancreatic insufficiency, inflammatory bowel disease, congenital
            megaesophagus), <strong>bloat/GDV</strong>, <strong>skin &amp; immune disease</strong> (atopic dermatitis, recurrent skin infections, perianal
            fistulas), and <strong>eyes</strong> (pannus). There are also <em>rarer but important</em> issues (e.g., pituitary dwarfism),
            and cancers seen across large breeds (e.g., hemangiosarcoma).
          </p>
          <p className="mb-3">
            The best strategy combines <strong>screening</strong> (orthopedic, ophthalmic, GI where indicated), <strong>risk reduction</strong>
            (body condition, nutrition, exercise, selective prevention like gastropexy in high-risk individuals), and
            <strong>early intervention</strong> (knowing red flags). Many shepherds live active, happy lives—your edge is a
            <strong>checklist-driven plan</strong> and a collaborative relationship with your veterinary team.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In your Petunia profile, keep a <em>“GSD Health &amp; Screening”</em> note with: breeder health
            documents (OFA/PennHIP, elbows, DM genotype), puppy socialization &amp; exercise plan, growth curve + body
            condition photos, training and conditioning logs, and a simple crisis card (GDV signs, nearest 24/7 ER).
            Share the note with your sitter/boarding team so everyone acts fast if a red flag appears.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About GSD Health (Systems, Not Surprises)</h2>
          <p className="mb-3">
            Shepherds are built to work. Their bodies and brains thrive with <strong>structured exercise, training,
              and lean body condition</strong>. The same drive and athleticism, however, magnify the consequences of
            poor socialization, excessive jump/impact while growth plates are open, or unrecognized genetic
            predispositions. Your job is not to memorize every disease—it&rsquo;s to <em>run a system</em>:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Front-load selection:</strong> For puppies, favor lines with documented <em>hips/elbows</em> (OFA/PennHIP &amp; OFA elbows), and discuss <em>DM</em> genotyping policy. For adults or rescues, get a thorough orthopedic and general baseline exam.</li>
            <li><strong>Build the foundation:</strong> Reward-based training, predictable sleep/meal times, and <em>deliberate socialization</em> reduce stress-related flares (GI/skin) and help the vet examine your dog without drama.</li>
            <li><strong>Keep them lean:</strong> Body condition score (BCS) 4–5/9 beats 7/9. Leanness reduces osteoarthritis pain, GDV risk factors (like delayed gastric emptying), and skin fold issues.</li>
            <li><strong>Condition the athlete:</strong> Controlled strength/flexibility for the core and hindquarters supports the spine/hips. Avoid repetitive ball-launching; mix in sniff walks, decompression, and “settle” training.</li>
            <li><strong>Make checklists normal:</strong> Routine tracking (stool log, skin flares, exercise notes, cough/sneeze, appetite) turns vague worry into actionable signals.</li>
          </ul>
        </section>

        {/* SCREENING */}
        <section id="screening" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Screening Map (Puppy → Senior)</h2>
          <p className="mb-3">
            The timeline below is a <em>practical</em> owner roadmap. Your veterinarian will tailor specifics.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>8–20 weeks:</strong> Growth, diet, parasite prevention. Socialization plan. Early baseline exam; flag any regurgitation (megaesophagus screen), severe diarrhea/weight loss (EPI/IBD work-up if indicated).</li>
            <li><strong>6–12 months:</strong> Growth-plate friendly exercise. Discuss spay/neuter timing. Monitor for panosteitis (“growing pains”) in adolescents. Address any persistent ear/skin issues (allergy work-up).</li>
            <li><strong>12–24 months:</strong> Orthopedic review. For breeding stock: official <em>hips/elbows</em> (OFA or PennHIP + OFA elbows). For working/pet homes: exam + gait/video review; consider radiographs if lame or stiff.</li>
            <li><strong>2–6 years:</strong> Annual wellness with dental and musculoskeletal checks. Allergy control plan if needed. If chronic GI signs (weight loss, voluminous stool, poor coat), discuss EPI/IBD testing.</li>
            <li><strong>7+ years (seniors):</strong> Add arthritis pain audits, neuro checks (knuckling, hind-end weakness), cancer screens as advised. Proactive <em>GDV risk counseling</em> for deep-chested dogs; discuss prophylactic gastropexy when under anesthesia for another reason.</li>
          </ol>
        </section>

        {/* ORTHOPEDIC & SPINE */}
        <section id="orthopedic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Orthopedic &amp; Spine: Hips, Elbows, “Lower Back”</h2>
          <p className="mb-3">
            Developmental <strong>hip dysplasia</strong> and <strong>elbow dysplasia</strong> are classic large-breed risks. Good breeders screen
            hips (OFA or PennHIP) and elbows (OFA). Even in well-bred dogs, over-nutrition or excessive impact while
            growth plates are open can tip a borderline joint into clinical arthritis later.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What owners see</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Reluctance to jump into cars/onto furniture, bunny-hopping, stiffness after rest, forelimb lameness after hard play.</li>
            <li>In adolescents: <strong>panosteitis</strong> (shifting leg lameness) and occasional <strong>osteochondrosis (OCD)</strong> lesions in shoulder/elbow/hock.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Degenerative Lumbosacral Stenosis (DLSS)</h3>
          <p className="mb-3">
            In mature shepherds, “lower back” pain with hind-end weakness, difficulty with stairs, or reluctance to
            jump can be <strong>degenerative lumbosacral stenosis</strong> (also called cauda equina syndrome). It’s a wear-and-tear
            narrowing at the junction between the lumbar spine and sacrum that compresses nerve roots. Conditioning, weight
            control, and activity management help; some dogs need advanced imaging and, in selected cases, surgery.
          </p>
        </section>

        {/* DM */}
        <section id="dm" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Degenerative Myelopathy (DM)</h2>
          <p className="mb-3">
            <strong>DM</strong> is a progressive spinal cord disease of older dogs with a genetic component (SOD1 mutation) identified
            in multiple breeds, including German Shepherds. Onset is typically hind-end weakness and knuckling in late
            adulthood. DM is not painful, but mobility declines over months to years. <em>Genotyping</em> informs breeding policy and
            context for hind-end weakness later in life; diagnosis remains clinical/exclusion with advanced testing.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Owner actions:</strong> Keep seniors lean and strong; teach cooperative care for harnesses/boots; ask your vet about rehab and carts <em>early</em> if hind-limb weakness appears.</li>
          </ul>
        </section>

        {/* GI */}
        <section id="gi" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Gastrointestinal: EPI, IBD, and Congenital Megaesophagus</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Exocrine Pancreatic Insufficiency (EPI)</h3>
          <p className="mb-3">
            EPI is failure of the exocrine pancreas to make enough digestive enzymes. Shepherds are a <em>classic</em>
            predisposed breed. Hallmarks are chronic weight loss despite appetite, voluminous pale stool, flatulence,
            and a poor coat. Diagnosis is via a specific blood test (canine trypsin-like immunoreactivity). Treatment is
            enzyme supplementation and diet; many dogs do great once stable.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Inflammatory Bowel Disease (IBD)/Chronic Enteropathy</h3>
          <p className="mb-3">
            Shepherds are over-represented in IBD cohorts in the U.K. and elsewhere. IBD is a spectrum of chronic enteropathies
            driven by immune dysregulation in predisposed dogs and managed by diet trials, B12 (cobalamin) support,
            and—where indicated—medications. Expect a stepwise, evidence-based work-up; keep a detailed stool/appetite/weight log.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Congenital Megaesophagus</h3>
          <p className="mb-3">
            Shepherds are one of the breeds with documented congenital megaesophagus (a dilated, poorly motile esophagus).
            The classic sign is <em>regurgitation</em> (passive “spill” of undigested food) rather than active vomiting. Management
            centers on feeding in an elevated position, food texture adjustments, and treating aspiration risks with your vet’s guidance.
          </p>
        </section>

        {/* GDV */}
        <section id="gdv" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bloat/GDV (Gastric Dilatation–Volvulus)</h2>
          <p className="mb-3">
            Deep-chested, large breeds—including GSDs—are classically at risk for <strong>GDV</strong>, a life-threatening emergency in which
            the stomach distends and twists. Classic red flags: non-productive retching, a suddenly distended/tight abdomen,
            restlessness, drooling, and collapse. Prevention includes lean body condition and, in high-risk cases,
            discussing <em>prophylactic gastropexy</em> with your veterinarian (often combined with another anesthetic event).
          </p>
        </section>

        {/* SKIN & IMMUNE */}
        <section id="skin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin &amp; Immune: Atopy, Pyoderma, and Perianal Fistulas</h2>
          <p className="mb-3">
            Many shepherds develop allergic skin disease (<strong>atopic dermatitis</strong>)—itchy ears/feet/underbelly, recurrent ear infections,
            and secondary skin infections. Good control blends <em>itch reduction</em> (modern therapies), <em>barrier care</em> (bathing/ear
            hygiene), and <em>trigger management</em> (fleas, food trials where indicated). Some GSDs suffer frustrating deep or recurrent
            pyoderma. A 2025 U.K. guideline update moved beyond old “breed-label” shortcuts (e.g., “GSD pyoderma”) and emphasized
            culture-guided therapy, allergy control, and skin-barrier support.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Perianal Fistulas (Anal Furunculosis)</h3>
          <p className="mb-3">
            A uniquely over-represented condition in German Shepherds. Owners notice painful, draining lesions around the anus,
            straining to defecate, and licking. It’s considered immune-mediated; modern management uses medical therapy
            (e.g., cyclosporine/tacrolimus) plus hygiene and diet adjustments. Many dogs achieve good control with
            an early, aggressive plan and meticulous follow-up.
          </p>
        </section>

        {/* EYES */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eyes: Pannus (Chronic Superficial Keratitis)</h2>
          <p className="mb-3">
            <strong>Pannus</strong> is an immune-mediated corneal disease seen commonly in shepherd-type dogs. It often appears in young to middle-aged adults
            and can worsen at high altitude/UV exposure. Mild haze at the outer cornea creeps inward, with pink, fleshy tissue and pigment over time.
            Treatment is lifelong, typically with topical immunomodulators/steroids and UV management (avoid intense midday sun, consider doggles in
            extreme settings). With early diagnosis and consistent therapy, many dogs maintain comfortable vision long-term.
          </p>
        </section>

        {/* NEURO: EPILEPSY */}
        <section id="neuro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Neurology: Idiopathic Epilepsy (Overview)</h2>
          <p className="mb-3">
            Epilepsy is the most common chronic neurologic disorder in dogs. Several breeds—including German Shepherds—appear over-represented in
            epidemiologic summaries. Most owners first see cluster seizures (more than one in 24 hours) between 1–4 years. Lifelong control is common
            with modern medications and structured follow-up. If your dog seizes, video the event, note duration/recovery, and call your veterinarian.
          </p>
        </section>

        {/* ENDOCRINE: DWARFISM */}
        <section id="endocrine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Less Common but Notable: Pituitary Dwarfism (Juvenile-Onset Panhypopituitarism)</h2>
          <p className="mb-3">
            A rare but important GSD condition with a known genetic basis (LHX3 mutation). Affected pups grow slowly after 2–3 months, retain a
            soft puppy coat (poor guard hairs), and often have proportional small stature. Management is specialized; responsible breeders can reduce
            risk via DNA testing and thoughtful pairings.
          </p>
        </section>

        {/* CANCER */}
        <section id="cancer" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cancer Highlights (Hemangiosarcoma)</h2>
          <p className="mb-3">
            Large/giant breeds—including GSDs—appear in predisposition lists for <strong>hemangiosarcoma</strong>, an aggressive vascular cancer that can arise
            in spleen, heart, skin, or other tissues. It often presents suddenly (collapse, pale gums, distended abdomen) due to internal bleeding.
            There is no single prevention, so <em>early recognition of collapse/weakness</em> and rapid emergency care matter most. Your vet may recommend
            periodic senior screening and imaging based on age and individual risk profile.
          </p>
        </section>

        {/* OPERATOR CHECKLISTS */}
        <section id="operator" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Checklists (Owners, Handlers, &amp; Facilities)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Breeder/Rescue Intake (Puppy or Adult)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Docs:</strong> OFA/PennHIP report; OFA elbows; DM genotyping policy; vaccine/deworming; stool checks.</li>
            <li><strong>Video:</strong> 30–60 seconds of natural gait at walk/trot on level ground; sit-to-stand; stairs if safe.</li>
            <li><strong>Baseline:</strong> Weight/BCS, skin/ear status, eye surface photo in daylight, 3-day stool log (consistency, volume).</li>
            <li><strong>Plan:</strong> Socialization list (surfaces, sounds, sights), growth-plate friendly exercise, training calendar, insurance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Monthly Owner Audit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Body condition (mid-rib feel, waist tuck); adjust calories/activity for a lean silhouette.</li>
            <li>Stool quality (look for persistent weight loss, voluminous/fatty stool → flag EPI/IBD screen).</li>
            <li>Skin/ears (itch scale 0–10; new hot spots, odor; plan ear care after swimming/bathing).</li>
            <li>Movement (hesitation to jump, stiffness after rest, “off” on stairs; capture video for your vet).</li>
            <li>Behavior (new anxiety, pain signs, or regurgitation/vomit episodes; pattern recognition wins).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Facility/Boarding Readiness (GSD-specific)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Note medical flags (EPI—enzymes sent with clear dosing; IBD—diet is <em>not</em> to be changed; pannus meds/eye schedule).</li>
            <li>Exercise menu (no repetitive high-impact fetch; mix in sniff walks, obedience games, mat settles).</li>
            <li>Emergency card: nearest ER, GDV red flags, seizure plan, and vet consent for treatment.</li>
          </ul>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>GDV suspects:</strong> Unproductive retching, tight/bloated abdomen, collapse → ER immediately.</li>
            <li><strong>Neurologic:</strong> New hind-end knuckling/weakness (especially in seniors), inability to rise, sudden loss of coordination, seizures lasting &gt;5 minutes, or cluster seizures.</li>
            <li><strong>GI emergencies:</strong> Repeated vomiting + lethargy, black/tarry stool, persistent regurgitation with cough (aspiration risk).</li>
            <li><strong>Eye surface changes:</strong> New corneal haze/pink tissue, squinting, or pigment spread → same-day exam (pannus/ulcer rule-out).</li>
            <li><strong>Perianal pain/bleeding:</strong> Straining, licking, visible lesions → early treatment improves outcomes.</li>
            <li><strong>Orthopedic red flags:</strong> Non-weight-bearing lameness, screaming pain, or sudden paralysis → urgent care.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How much of GSD health is “genetics” vs “management”?</strong><br />
            Both matter. You can’t out-exercise a dysplastic hip or stop DM with training—but you can dramatically improve comfort and mobility by keeping your dog lean, conditioned, and well-managed. Good selection reduces the odds of certain problems showing up later.
          </p>

          <p className="mb-3">
            <strong>My adolescent shepherd is limping off and on—is that panosteitis?</strong><br />
            Maybe. Pano (shifting leg lameness) is common in growing, large-breed adolescents. Your vet will rule out joint disease/injury. Most cases respond to rest, NSAIDs as prescribed, and time; persistent or severe lameness needs imaging.
          </p>

          <p className="mb-3">
            <strong>Do probiotics or “sensitive stomach” diets prevent EPI or IBD?</strong><br />
            There’s no diet that prevents EPI (the pancreas problem), but nutrition is central to managing GI disease once present. For IBD/chronic enteropathy, your vet will often start with a rigorous elimination diet trial and targeted supplements based on response and labs (e.g., cobalamin).
          </p>

          <p className="mb-3">
            <strong>Should every shepherd get a prophylactic gastropexy?</strong><br />
            Not necessarily. It’s a conversation about your dog’s individual risk, your tolerance for emergency scenarios, and timing (gastropexy is often paired with another anesthetic procedure). Your vet can walk you through pros/cons.
          </p>

          <p className="mb-3">
            <strong>Is a DM “At Risk” (A/A) result a diagnosis?</strong><br />
            No. Genotype informs risk and breeding policy; clinical diagnosis rests on age, signs, advanced testing, and ruling out other causes of hind-end weakness.
          </p>

          <p>
            <strong>What’s one thing I can do today?</strong><br />
            Audit body condition and daily routines. A one-point BCS reduction and a predictable, balanced exercise plan provide outsized benefits across joints, spine, skin, and GI.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Orthopedic Foundation for Animals (OFA). <em>Hip Dysplasia</em>; <em>Elbow Dysplasia</em>; <em>DM Information</em>.{' '}
              <a href="https://ofa.org/diseases/hip-dysplasia/" target="_blank" rel="noopener noreferrer">Hip</a>{' '}
              · <a href="https://ofa.org/diseases/elbow-dysplasia/" target="_blank" rel="noopener noreferrer">Elbow</a>{' '}
              · <a href="https://ofa.org/degenerative-myelopathy/" target="_blank" rel="noopener noreferrer">DM</a>
            </li>
            <li>
              Merck Veterinary Manual (Professional &amp; Owner). <em>Gastric Dilatation–Volvulus</em>; <em>Panosteitis</em>; <em>Osteochondrosis</em>; <em>Perianal Fistulas</em>; <em>Atopic Dermatitis</em>; <em>Chronic Enteropathies</em>; <em>Pannus/Chronic Superficial Keratitis</em>; <em>Idiopathic Epilepsy (overviews)</em>; <em>Megaesophagus</em>; <em>Juvenile-Onset Panhypopituitarism</em>.{' '}
              <a href="https://www.merckvetmanual.com/" target="_blank" rel="noopener noreferrer">https://www.merckvetmanual.com/</a>
            </li>
            <li>
              ACVS (American College of Veterinary Surgeons). <em>Degenerative Lumbosacral Stenosis (Cauda Equina)</em>.{' '}
              <a href="https://www.acvs.org/small-animal/degenerative-lumbosacral-stenosis" target="_blank" rel="noopener noreferrer">ACVS overview</a>
            </li>
            <li>
              University of Missouri &amp; related references on DM genetics (SOD1).{' '}
              <a href="https://vhc.missouri.edu/small-animal-hospital/neurology-neurosurgery/facts-on-neurologic-diseases/canine-idiopathic-epilepsy/" target="_blank" rel="noopener noreferrer">MU Neurology</a>{' '}
              · <a href="https://www.ncbi.nlm.nih.gov/pubmed/19276068" target="_blank" rel="noopener noreferrer">Awano et&nbsp;al., PNAS 2009</a>
            </li>
            <li>
              Texas A&amp;M GI Lab &amp; peer-review: <em>EPI diagnostics (cTLI)</em> and breed associations.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7104967/" target="_blank" rel="noopener noreferrer">Dossin, 2011 (lab tests)</a>{' '}
              · <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1939-1676.2007.tb02950.x" target="_blank" rel="noopener noreferrer">Batchelor et&nbsp;al., 2007 (breed association)</a>
            </li>
            <li>
              IBD in GSDs: RVC/UK &amp; peer-review.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6054420/" target="_blank" rel="noopener noreferrer">Peiravan et&nbsp;al., 2018</a>{' '}
              · <a href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-small-intestine-in-small-animals/chronic-enteropathies-in-small-animals" target="_blank" rel="noopener noreferrer">Merck CE/IBD</a>
            </li>
            <li>
              Pannus (Chronic Superficial Keratitis).{' '}
              <a href="https://www.merckvetmanual.com/eye-diseases-of-animals/corneal-diseases/chronic-superficial-keratitis-in-animals" target="_blank" rel="noopener noreferrer">Merck overview</a>
            </li>
            <li>
              Pituitary Dwarfism (LHX3).{' '}
              <a href="https://www.merckvetmanual.com/endocrine-system/the-pituitary-gland/juvenile-onset-panhypopituitarism-in-dogs" target="_blank" rel="noopener noreferrer">Merck owner/professional pages</a>{' '}
              · <a href="https://pubmed.ncbi.nlm.nih.gov/22132174/" target="_blank" rel="noopener noreferrer">Voorbij et&nbsp;al., 2011</a>
            </li>
            <li>
              Hemangiosarcoma.{' '}
              <a href="https://www.merckvetmanual.com/hematologic-disorders/neoplasia/hemangiosarcoma-in-small-animals" target="_blank" rel="noopener noreferrer">Merck overview</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
            If you suspect an emergency (e.g., GDV, collapse, seizures), seek immediate care.
          </p>
        </section>

        {/* Related German Shepherd Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/fun-facts-about-german-shepherds"
                className="underline hover:opacity-80"
              >
                Fun Facts About German Shepherds
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/do-german-shepherds-shed-a-lot"
                className="underline hover:opacity-80"
              >
                Do German Shepherds Shed a Lot?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-long-do-german-shepherds-live"
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-german-shepherd-cost"
                className="underline hover:opacity-80"
              >
                How Much Does a German Shepherd Cost?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-aggressive-or-dangerous"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Aggressive or Dangerous?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-good-with-kids"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Good with Kids?
              </Link>
            </li>

          </ul>
        </div>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
