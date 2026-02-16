'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GermanShepherdHindEndWeaknessTriageGuide() {
  const locale = useLocale();

  const title =
    'German Shepherd Hind-End Weakness: DM vs Arthritis vs DLSS vs Injury (A Practical Owner Triage Guide)';
  const date = 'December 25, 2025';
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
    'A practical, calm, step-by-step guide to hind-end weakness in German Shepherds: pain vs nerve weakness, common causes (arthritis, cruciate injury, DLSS, DM), what to track, and when to seek urgent care.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
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
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#triage" className="underline hover:opacity-80">
                Fast Triage
              </a>
            </li>
            <li>
              <a href="#why" className="underline hover:opacity-80">
                Why This Happens in GSDs
              </a>
            </li>
            <li>
              <a href="#patterns" className="underline hover:opacity-80">
                Pattern Recognition
              </a>
            </li>
            <li>
              <a href="#common-causes" className="underline hover:opacity-80">
                Common Causes (Plain English)
              </a>
            </li>
            <li>
              <a href="#home-checklist" className="underline hover:opacity-80">
                Home Checklist
              </a>
            </li>
            <li>
              <a href="#vet-workup" className="underline hover:opacity-80">
                What the Vet Usually Does
              </a>
            </li>
            <li>
              <a href="#what-to-film" className="underline hover:opacity-80">
                What to Film
              </a>
            </li>
            <li>
              <a href="#help-now" className="underline hover:opacity-80">
                When to Seek Help Now
              </a>
            </li>
            <li>
              <a href="#care-plan" className="underline hover:opacity-80">
                Practical Care Plan
              </a>
            </li>
            <li>
              <a href="#mobility" className="underline hover:opacity-80">
                Mobility Tools
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

        <article className="prose prose-slate max-w-none prose-headings:text-[#2c4a30] prose-a:text-[#2c4a30]">
          {/* TL;DR */}
          <section id="tldr" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">TL;DR</h2>
            <p className="mb-4">
              Hind-end weakness in German Shepherds is common, but the causes are not all the same.
              The fastest way to reduce uncertainty is to answer one question first: <strong>is this primarily pain, or primarily nerve weakness?</strong>{' '}
              Pain points you toward orthopedic and spinal pain problems (arthritis, cruciate injury, lumbosacral disease).
              Nerve weakness points you toward neurologic pathways (including degenerative myelopathy on the differential list).
            </p>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Petunia tip:</strong> In Petunia, create a single note called <em>Hind-End Tracker</em> with three items:
              (1) today&rsquo;s weight, (2) a 20–40 second video of walk and trot, and (3) a simple symptom log (stumbles, scuffing, pain signs).
              This turns vague worry into concrete data your vet can use.
            </div>

            <p className="mt-4 mb-0">
              If you want a broader overview of common German Shepherd health risks (not just mobility), see:{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* FAST TRIAGE */}
          <section id="triage" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Fast Triage (Do This First)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Go now (urgent or emergency)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Sudden paralysis</strong>, inability to rise, or rapidly worsening weakness over hours.
              </li>
              <li>
                <strong>Severe pain</strong>: screaming, yelping, refusing to move, or obvious distress with touch.
              </li>
              <li>
                <strong>Non-weight-bearing lameness</strong> (holding a leg up) or a known traumatic event (fall, collision).
              </li>
              <li>
                <strong>Loss of bladder control</strong> with back pain or inability to urinate.
              </li>
              <li>
                <strong>Collapse</strong>, pale gums, trouble breathing, or any systemic &ldquo;something is very wrong&rdquo; presentation.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Same-day or next available appointment</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                New hind-end weakness that is noticeable and persistent (even if mild), especially in a senior.
              </li>
              <li>
                Repeated stumbling, knuckling, scuffing nails, or dragging toes.
              </li>
              <li>
                Any weakness plus a pain pattern (panting at rest, guarding, reluctance to sit, reluctance to climb stairs).
              </li>
              <li>
                Worsening signs over days to weeks, not just a one-time &ldquo;off day.&rdquo;
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Watch closely (only when mild and stable)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                Brief stiffness after heavy play that resolves quickly and does not recur, with normal appetite and behavior.
              </li>
              <li>
                Very mild, non-progressive changes in older dogs where you already have a known arthritis plan and this fits the pattern.
              </li>
            </ul>
          </section>

          {/* WHY */}
          <section id="why" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why This Happens Often in German Shepherds</h2>
            <p className="mb-4">
              German Shepherds are built for athletic work: powerful hindquarters, drive, and intensity.
              That combination means small issues can show up clearly, and chronic wear can become obvious earlier than owners expect.
              In this breed, a few &ldquo;big buckets&rdquo; appear repeatedly in real life:
              orthopedic wear (hips, knees, arthritis), lumbosacral disease, and neurologic weakness patterns later in life.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                <strong>Structure and load:</strong> body weight and body condition have a large impact on comfort and mechanics.
              </li>
              <li>
                <strong>Repetition:</strong> repetitive high-impact exercise (especially ball-launch routines) can amplify overuse problems.
              </li>
              <li>
                <strong>Age:</strong> &ldquo;hind-end&rdquo; concerns in seniors deserve a structured plan rather than assuming it is normal aging.
              </li>
            </ul>
          </section>

          {/* PATTERNS */}
          <section id="patterns" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Pattern Recognition: Pain vs Weakness</h2>

            <p className="mb-4">
              Owners commonly describe everything as &ldquo;back legs not working.&rdquo; Your job is to separate the presentation into a few simple observations.
              You do not need to diagnose. You need to report patterns accurately.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Signs that suggest pain is driving the problem</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Whining, yelping, trembling, or guarding.</li>
              <li>Reluctance to be touched over hips, back, or knees.</li>
              <li>Reluctance to sit, reluctance to jump, or slow, careful stair use that looks like &ldquo;protecting&rdquo; something.</li>
              <li>Panting at rest, pacing at night, or difficulty finding a comfortable position.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Signs that suggest nerve weakness is driving the problem</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Knuckling (paw flips under), scuffing nails, or dragging toes.</li>
              <li>Crossing feet, delayed paw placement, or stumbling that is not clearly tied to pain.</li>
              <li>Progressive, symmetric hind-end changes over time.</li>
              <li>Difficulty coordinating the back end even when your dog seems otherwise comfortable.</li>
            </ul>
          </section>

          {/* COMMON CAUSES */}
          <section id="common-causes" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Common Causes (Plain English)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">1) Osteoarthritis and hip-related pain</h3>
            <p className="mb-4">
              Arthritis can look like weakness because pain changes how a dog loads the limbs.
              Many shepherds will appear &ldquo;wobbly&rdquo; when they are actually trying to avoid discomfort.
              Owners often notice stiffness after rest, reluctance to jump, or slower stairs.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">2) Knee injuries (including cruciate ligament problems)</h3>
            <p className="mb-4">
              Knee problems often start as a limp or &ldquo;skipping&rdquo; step.
              Over time, compensation can make the whole hind end look weak.
              One key clue is a clear asymmetry: one leg seems obviously worse.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">3) Degenerative lumbosacral stenosis (DLSS / cauda equina)</h3>
            <p className="mb-4">
              DLSS is a common shepherd concern where the junction between the lower back and pelvis narrows and irritates nerve roots.
              It can look like pain, weakness, reluctance to jump, or difficulty rising.
              Many dogs are worse after activity and better with rest, until the disease advances.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">4) Degenerative myelopathy (DM) on the differential list</h3>
            <p className="mb-4">
              DM is classically described as a progressive spinal cord disease in older dogs.
              Owners often notice scuffing and proprioceptive changes first.
              Genotype can provide context, but diagnosis is clinical and often involves ruling out other causes.
              The key owner job is early recognition and mobility planning rather than assuming the worst on day one.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">5) Acute spinal problems (less common, higher urgency)</h3>
            <p className="mb-0">
              Sudden painful weakness can occur with disk disease or other acute spinal events.
              These presentations are why severe pain, rapid progression, or inability to rise should trigger urgent care.
            </p>
          </section>

          {/* HOME CHECKLIST */}
          <section id="home-checklist" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Home Checklist (What to Track Before You Call)</h2>

            <p className="mb-4">
              Your vet will ask questions that are hard to answer from memory. This checklist prevents guessing.
              Only do what is safe. Do not force movement that increases pain.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Timeline:</strong> sudden onset (hours to days) or gradual (weeks to months)?
              </li>
              <li>
                <strong>Symmetry:</strong> one leg clearly worse, or both hind legs affected?
              </li>
              <li>
                <strong>Pain signals:</strong> yelping, guarding, panting at rest, reluctance to be touched?
              </li>
              <li>
                <strong>Foot placement:</strong> knuckling, scuffing nails, toe dragging, crossing legs?
              </li>
              <li>
                <strong>Stairs and jumping:</strong> new hesitation, slow descent, refusal, or sudden collapse of the rear?
              </li>
              <li>
                <strong>Urination and stool:</strong> accidents, inability to posture normally, or any new retention issues?
              </li>
              <li>
                <strong>Exercise relationship:</strong> worse after activity, worse after rest, or random?
              </li>
              <li>
                <strong>Surface relationship:</strong> worse on slick floors and better on rugs (traction matters)?
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Simple rule:</strong> If you are asking yourself &ldquo;is this serious?&rdquo; and it is new, persistent, or worsening,
              it is reasonable to schedule a same-day evaluation.
            </div>
          </section>

          {/* VET WORKUP */}
          <section id="vet-workup" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What the Vet Usually Does (So You Know What to Expect)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Step 1: Separate orthopedic pain from neurologic weakness</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Orthopedic exam (hips, knees, range of motion, pain response).</li>
              <li>Basic neurologic screen (proprioception, paw placement, reflexes).</li>
              <li>Observation of gait at walk and trot (often more revealing than a single stance).</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Step 2: Imaging when indicated</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Radiographs can help evaluate arthritis and some spinal changes, but they do not answer every question.
              </li>
              <li>
                Advanced imaging and referral may be recommended when there is progressive weakness, severe pain, or an unclear diagnosis after reasonable first steps.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Step 3: Build a plan, then reassess</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                Many mobility cases improve with a structured plan (weight targets, rehab, pain control strategy, traction changes).
              </li>
              <li>
                If the plan does not work, the next step is not random changes. It is reassessment and escalation with clearer data.
              </li>
            </ul>
          </section>

          {/* WHAT TO FILM */}
          <section id="what-to-film" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What to Film (High Value, Low Effort)</h2>
            <p className="mb-4">
              A short video can be more useful than a long description. Film only if it is safe and does not increase pain.
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>20–40 seconds: walk away and back on a flat surface.</li>
              <li>10–20 seconds: a gentle trot if your dog can do it comfortably.</li>
              <li>Sit-to-stand once or twice, without forcing.</li>
              <li>Optional: one stair step if safe and your dog does it naturally.</li>
              <li>Close-up: nails or tops of paws if scuffing is present.</li>
            </ul>
          </section>

          {/* HELP NOW */}
          <section id="help-now" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">When to Seek Help Now (Clear Triggers)</h2>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                Rapid progression (noticeably worse day to day) or severe weakness.
              </li>
              <li>
                Pain plus weakness (especially if your dog cannot get comfortable).
              </li>
              <li>
                Inability to rise, falls that seem neurologic, or repeated knuckling.
              </li>
              <li>
                New urinary or bowel control issues.
              </li>
              <li>
                Any traumatic event followed by weakness.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Do not wait for a perfect label.</strong> Early evaluation is often the difference between a straightforward plan and a crisis.
            </div>
          </section>

          {/* PRACTICAL CARE PLAN */}
          <section id="care-plan" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Practical Care Plan (What Helps Regardless of the Cause)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">1) Body condition and muscle maintenance</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Keep your dog lean enough that ribs are easy to feel and a waist is visible.</li>
              <li>Use controlled exercise rather than burst sprint routines.</li>
              <li>Build core and hind-quarter strength with vet-approved rehab exercises when appropriate.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">2) Traction and environment</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Add rugs or runners on slick floors.</li>
              <li>Keep nails trimmed to reduce slipping and toe trauma.</li>
              <li>Use ramps for cars and furniture rather than repeated jumping.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">3) Reduce the overuse patterns that worsen hind-end issues</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Limit repetitive high-impact fetch routines.</li>
              <li>Favor controlled walks, sniff time, and structured obedience games.</li>
              <li>Use rest days as part of training, not as failure.</li>
            </ul>
          </section>

          {/* MOBILITY */}
          <section id="mobility" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Mobility Tools (Use Earlier Than You Think)</h2>
            <p className="mb-4">
              Mobility aids are not &ldquo;giving up.&rdquo; They preserve independence and reduce injury risk for both dog and owner.
              Many owners wait too long and then feel overwhelmed.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Harness support:</strong> helpful for stairs, car entry, and preventing falls during flare days.
              </li>
              <li>
                <strong>Boots or paw protection:</strong> useful when scuffing and toe dragging are damaging the skin or nails.
              </li>
              <li>
                <strong>Ramps:</strong> reduce jumping load and lower injury risk.
              </li>
              <li>
                <strong>Rehab:</strong> improves strength and confidence, and can slow functional decline in many conditions.
              </li>
            </ul>

            <p className="mb-0">
              If your dog is entering senior years, you may also like:{' '}
              <Link
                href={`/${locale}/blog/how-long-do-german-shepherds-live`}
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>How do I know if it is arthritis or something neurologic?</strong>
              <br />
              Arthritis is often pain-driven and may look worse after rest, with stiffness and reluctance to jump. Neurologic patterns often include knuckling, scuffing, and foot placement problems. Many dogs have both, which is why a vet exam is valuable.
            </p>

            <p className="mb-4">
              <strong>My shepherd slips on the floor and looks weak. Is that a disease?</strong>
              <br />
              Not always. Slick floors can expose mild weakness or pain. Traction changes (rugs, nail care) can produce dramatic improvement and also reduce fall risk while you pursue evaluation.
            </p>

            <p className="mb-4">
              <strong>Is DM always the explanation for hind-end weakness in older shepherds?</strong>
              <br />
              No. DLSS, arthritis, knee injuries, and other spinal conditions can look similar. Painful signs, sudden change, or rapid progression should trigger prompt veterinary evaluation rather than assumptions.
            </p>

            <p className="mb-4">
              <strong>Should I rest my dog completely?</strong>
              <br />
              Full rest can help some injuries short-term, but long-term success usually requires a structured plan: safe movement, strengthening, and environment changes. Your vet can tailor the correct balance based on exam findings.
            </p>

            <p className="mb-2">
              <strong>What is one thing I can do today?</strong>
              <br />
              Take a short walk and film 20–40 seconds of gait on a flat surface. Pair it with a simple symptom log. That combination speeds up a correct work-up.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Orthopedic Foundation for Animals (OFA): Hip Dysplasia, Elbow Dysplasia, Degenerative Myelopathy resources.{' '}
                <Link
                  href="https://ofa.org/diseases/hip-dysplasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hip dysplasia
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://ofa.org/diseases/elbow-dysplasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elbow dysplasia
                </Link>{' '}
                ·{' '}
                <Link
                  href="https://ofa.org/degenerative-myelopathy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DM resource
                </Link>
              </li>

              <li>
                American College of Veterinary Surgeons (ACVS): Degenerative lumbosacral stenosis (cauda equina) overview.{' '}
                <Link
                  href="https://www.acvs.org/small-animal/degenerative-lumbosacral-stenosis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACVS overview
                </Link>
              </li>

              <li>
                Merck Veterinary Manual: overviews of osteoarthritis, lameness evaluation, and spinal disorders (owner and professional references).{' '}
                <Link
                  href="https://www.merckvetmanual.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck Veterinary Manual
                </Link>
              </li>
            </ul>

            <p className="text-xs text-gray-600 mt-4">
              This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
              If you suspect an emergency or rapid neurologic decline, seek immediate care.
            </p>

            <p className="text-xs text-gray-600 mt-2">
              Written date: <span className="font-medium">{date}</span>
            </p>
          </section>
        </article>

        {/* Related links */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
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
