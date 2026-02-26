'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GdvBloatEmergencyPlanLargeDogs() {
  const locale = useLocale();

  const title =
    'GDV (Bloat) Emergency Plan for Large Dogs: What to Do in the First 10 Minutes, What the ER Will Do, and How to Reduce Risk';
  const date = 'December 25, 2025';
  const categories = ['owner'] as const;

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
              <a href="#what-is-gdv" className="underline hover:opacity-80">
                What GDV Is
              </a>
            </li>
            <li>
              <a href="#signs" className="underline hover:opacity-80">
                Signs to Treat as an Emergency
              </a>
            </li>
            <li>
              <a href="#first-10" className="underline hover:opacity-80">
                First 10 Minutes Plan
              </a>
            </li>
            <li>
              <a href="#what-not" className="underline hover:opacity-80">
                What Not to Do
              </a>
            </li>
            <li>
              <a href="#call-script" className="underline hover:opacity-80">
                ER Call Script
              </a>
            </li>
            <li>
              <a href="#what-er-does" className="underline hover:opacity-80">
                What the ER Typically Does
              </a>
            </li>
            <li>
              <a href="#why-so-fast" className="underline hover:opacity-80">
                Why Time Matters
              </a>
            </li>
            <li>
              <a href="#gastropexy" className="underline hover:opacity-80">
                Gastropexy Explained
              </a>
            </li>
            <li>
              <a href="#risk-reduction" className="underline hover:opacity-80">
                Risk Reduction
              </a>
            </li>
            <li>
              <a href="#boarding" className="underline hover:opacity-80">
                Boarding and Caregiver Notes
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
              GDV (often called bloat) is an emergency where the stomach distends with gas and can twist. A twisted stomach can
              rapidly compromise circulation and shock pathways. The most important owner move is simple: <strong>do not wait for certainty</strong>.
              If classic signs appear, leave immediately for a 24/7 emergency hospital.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Classic high-risk signs:</strong> repeated unproductive retching, a tight or enlarging abdomen, restlessness,
                drooling, pacing, and rapidly worsening weakness.
              </li>
              <li>
                <strong>Action:</strong> call the ER while leaving and tell them you are coming with a suspected GDV.
              </li>
              <li>
                <strong>Do not:</strong> try home remedies, wait overnight, or drive around looking for reassurance.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Petunia tip:</strong> Put your nearest 24/7 ER address and phone into Petunia as an emergency note. Add a one-line instruction:
              <em> &ldquo;If you see repeated retching with a tight belly, leave immediately for the ER.&rdquo;</em> Share it with any sitter or boarding facility.
            </div>

            <p className="mt-4 mb-0">
              If you own a deep-chested breed such as a German Shepherd and want the broader health overview that includes GDV as one major risk, see:{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* WHAT GDV IS */}
          <section id="what-is-gdv" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What GDV Is (Plain English)</h2>

            <p className="mb-4">
              GDV stands for gastric dilatation–volvulus. &ldquo;Dilatation&rdquo; means the stomach fills and expands. &ldquo;Volvulus&rdquo;
              means the stomach can rotate or twist. When twisting occurs, the stomach can trap gas and fluid, and circulation can become compromised quickly.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Why twisting is so dangerous</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Blood flow and return to the heart can be impaired, contributing to shock.</li>
              <li>The stomach can be damaged by pressure and compromised circulation.</li>
              <li>It can escalate from &ldquo;acting uncomfortable&rdquo; to collapse quickly.</li>
            </ul>
          </section>

          {/* SIGNS */}
          <section id="signs" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Signs to Treat as an Emergency</h2>

            <p className="mb-4">
              Owners often look for one perfect sign. In real life, the pattern is what matters. If a large or deep-chested dog shows this cluster,
              treat it as an emergency until proven otherwise.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">High-signal GDV pattern</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Unproductive retching</strong> (trying to vomit, producing little or nothing).</li>
              <li><strong>Restlessness</strong>: pacing, unable to settle, repeated position changes.</li>
              <li><strong>Drooling</strong> and signs of nausea.</li>
              <li><strong>Abdominal enlargement</strong> or a belly that feels tight, especially if it appears to be growing.</li>
              <li><strong>Rapid decline</strong>: weakness, wobbliness, pale gums, collapse.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Signs that are late and urgent</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Collapse or inability to stand.</li>
              <li>Pale or gray gums and rapid breathing.</li>
              <li>A dog that looks like they are going into shock.</li>
            </ul>
          </section>

          {/* FIRST 10 */}
          <section id="first-10" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">The First 10 Minutes Plan (What to Do)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Minute 0–2: Decide and move</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Assume the risk is real if the pattern fits. Do not wait for more signs.</li>
              <li>Leash your dog and leave immediately for the nearest 24/7 emergency hospital.</li>
              <li>If your dog collapses, do not try to carry them long distances alone; seek help quickly and safely.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Minute 2–6: Call the ER while driving</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Tell them you are coming with a suspected GDV.</li>
              <li>Give breed, approximate weight, and the main signs (retching, distended abdomen, collapse).</li>
              <li>Ask where to park and whether they want you to call again on arrival.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Minute 6–10: Avoid delays and keep your dog safe</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Do not offer a large meal or large volume of water.</li>
              <li>Keep the car cool and minimize stress.</li>
              <li>Do not stop to &ldquo;see if it passes.&rdquo;</li>
            </ul>
          </section>

          {/* WHAT NOT TO DO */}
          <section id="what-not" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What Not to Do</h2>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Do not wait for your dog to &ldquo;look worse.&rdquo;</li>
              <li>Do not drive to multiple locations to ask questions first.</li>
              <li>Do not attempt to treat at home with oils, human medications, or forceful measures.</li>
              <li>Do not assume the dog is fine because they briefly stop retching.</li>
              <li>Do not delay because your dog is &ldquo;still walking.&rdquo; GDV can progress quickly.</li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Reality:</strong> In GDV scenarios, speed is safety. Your goal is to get into an ER pathway as fast as you can.
            </div>
          </section>

          {/* CALL SCRIPT */}
          <section id="call-script" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">ER Call Script (Copy and Use)</h2>

            <p className="mb-4">
              If you freeze under stress, read this script. You can also save it in Petunia under an emergency note.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                &ldquo;Hi, I am on my way with a dog I believe may have GDV. They are a [breed], about [weight] pounds.&rdquo;
              </li>
              <li>
                &ldquo;They have repeated unproductive retching and [a tight belly / a distended belly / weakness / drooling].&rdquo;
              </li>
              <li>
                &ldquo;We are [minutes] away. Where should we park and who should I call on arrival?&rdquo;
              </li>
            </ul>
          </section>

          {/* ER DOES */}
          <section id="what-er-does" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What the ER Typically Does (So You Know What Is Coming)</h2>

            <p className="mb-4">
              Emergency teams move quickly because GDV is time-sensitive. Exact steps vary by hospital, but most follow a familiar sequence:
              stabilize, confirm, decompress, and then decide the surgical pathway.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Common early steps</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Rapid triage: vital signs, gum color, and shock assessment.</li>
              <li>IV catheter placement and stabilization measures.</li>
              <li>Imaging decisions to confirm the stomach position and degree of distension.</li>
              <li>Attempts to decompress the stomach when appropriate.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Why surgery is often part of the plan</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>If the stomach has twisted, it typically needs to be untwisted surgically.</li>
              <li>A gastropexy is often performed to reduce future twisting risk in appropriate cases.</li>
              <li>Hospitals also monitor for complications that can occur in severe cases.</li>
            </ul>
          </section>

          {/* WHY FAST */}
          <section id="why-so-fast" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why Time Matters (The Non-Scary Version)</h2>

            <p className="mb-4">
              Owners often hesitate because they do not want to overreact. In GDV scenarios, the cost of waiting can be high.
              The goal is not to terrify you. The goal is to normalize an emergency reflex: if the pattern fits, you go.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Early stabilization is safer than late stabilization.</li>
              <li>Earlier care can reduce the severity of shock pathways.</li>
              <li>Even if it is not GDV, the same symptoms can still represent serious disease.</li>
            </ul>
          </section>

          {/* GASTROPEXY */}
          <section id="gastropexy" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Gastropexy Explained (What It Does and Does Not Do)</h2>

            <p className="mb-4">
              Gastropexy is a surgical procedure that attaches the stomach to the body wall to reduce the risk of twisting.
              It is often discussed for deep-chested dogs, and it is commonly performed during GDV surgery or sometimes electively.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What gastropexy does</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>It reduces the risk of stomach rotation (volvulus) in many dogs.</li>
              <li>It can be a preventive strategy for high-risk dogs when paired with another anesthesia event.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">What gastropexy does not do</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>It does not prevent your dog from ever getting gas or abdominal discomfort.</li>
              <li>It does not mean you ignore abdominal distension or repeated retching.</li>
            </ul>
          </section>

          {/* RISK REDUCTION */}
          <section id="risk-reduction" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Risk Reduction (Practical, Not Magical)</h2>

            <p className="mb-4">
              No prevention plan is perfect. The point of risk reduction is to stack small advantages: stable routines, lean body condition,
              and thoughtful feeding habits. Your veterinarian can tailor specific advice to your dog.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Common practical moves owners can discuss with their vet</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Maintain lean body condition and avoid sudden weight gain.</li>
              <li>Use predictable feeding routines and avoid chaotic meal patterns.</li>
              <li>Reduce stress around meals when possible, especially in multi-dog homes.</li>
              <li>Discuss gastropexy if your dog is high-risk and already undergoing anesthesia for another reason.</li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Important:</strong> Your best prevention tool is still recognition. Many outcomes hinge on how quickly you act when signs appear.
            </div>
          </section>

          {/* BOARDING */}
          <section id="boarding" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Boarding and Caregiver Notes (If Someone Else Is Watching Your Dog)</h2>

            <p className="mb-4">
              GDV is one of the reasons owners should give boarding facilities and sitters an emergency plan in writing.
              People hesitate under stress unless the plan is explicit. If you run a boarding facility, the same principle applies:
              clear protocols reduce delays.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What to write on the one-page plan</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Nearest 24/7 ER address and phone number.</li>
              <li>Your dog&rsquo;s approximate weight and any chronic conditions.</li>
              <li>
                The trigger statement: &ldquo;If repeated retching occurs with a tight belly, leave immediately for the ER and call me on the way.&rdquo;
              </li>
              <li>Veterinary consent and payment planning decisions, so staff do not hesitate.</li>
            </ul>

            <p className="mb-0">
              If your dog is a German Shepherd, you may also want the broader risk overview that includes GDV and other breed-associated concerns:{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>Is every bloated belly GDV?</strong>
              <br />
              No. Dogs can have gas or abdominal discomfort for many reasons. The danger is the GDV pattern: repeated unproductive retching plus abdominal
              distension and rapid worsening. If that pattern appears, treat it as an emergency.
            </p>

            <p className="mb-4">
              <strong>My dog is trying to vomit but nothing comes up. What does that mean?</strong>
              <br />
              That symptom is one of the classic high-risk signs for GDV, especially in deep-chested dogs. If it repeats and your dog cannot settle, go to
              emergency care immediately.
            </p>

            <p className="mb-4">
              <strong>Does gastropexy mean my dog can never get GDV?</strong>
              <br />
              Gastropexy is designed to reduce the risk of stomach twisting. It does not prevent gas distension or discomfort, so you still take serious signs
              seriously.
            </p>

            <p className="mb-2">
              <strong>What is the single most important thing owners do wrong?</strong>
              <br />
              Waiting for certainty. In suspected GDV, leaving for the ER is the correct move even if you are not sure.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Merck Veterinary Manual: GDV overview and emergency concepts for owners.{' '}
                <Link
                  href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilatation-and-volvulus-in-small-animals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GDV overview
                </Link>
              </li>

              <li>
                American College of Veterinary Surgeons (ACVS): educational resources related to GDV and gastropexy concepts.{' '}
                <Link
                  href="https://www.acvs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACVS
                </Link>
              </li>
            </ul>

            <p className="text-xs text-gray-600 mt-4">
              This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
              If you suspect an emergency, seek immediate care.
            </p>

            <p className="text-xs text-gray-600 mt-2">
              Written date: <span className="font-medium">{date}</span>
            </p>
          </section>
        </article>

        {/* Related links */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            Related Articles You May Like
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
