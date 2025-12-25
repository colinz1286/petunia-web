'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function VomitingVsRegurgitationInDogs() {
  const locale = useLocale();

  const title =
    'Vomiting vs Regurgitation in Dogs: How to Tell the Difference, What It Means, and When It’s an Emergency';
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
    food: 'Dog Food & Nutrition',
  };

  const slug = 'vomiting-vs-regurgitation-in-dogs';

  const description =
    'A practical, calm guide for worried owners: how to distinguish vomiting from regurgitation, why the difference matters (aspiration risk, obstruction, megaesophagus), what to track, and clear ER thresholds.';

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
              <a href="#definitions" className="underline hover:opacity-80">
                Quick Definitions
              </a>
            </li>
            <li>
              <a href="#why-matters" className="underline hover:opacity-80">
                Why the Difference Matters
              </a>
            </li>
            <li>
              <a href="#how-to-tell" className="underline hover:opacity-80">
                How to Tell at Home
              </a>
            </li>
            <li>
              <a href="#red-flags" className="underline hover:opacity-80">
                Red Flags and ER Thresholds
              </a>
            </li>
            <li>
              <a href="#common-causes" className="underline hover:opacity-80">
                Common Causes
              </a>
            </li>
            <li>
              <a href="#what-to-track" className="underline hover:opacity-80">
                What to Track Before Calling
              </a>
            </li>
            <li>
              <a href="#vet-workup" className="underline hover:opacity-80">
                What the Vet Usually Does
              </a>
            </li>
            <li>
              <a href="#care-at-home" className="underline hover:opacity-80">
                Safe Short-Term Care
              </a>
            </li>
            <li>
              <a href="#aspiration" className="underline hover:opacity-80">
                Aspiration Pneumonia Risks
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
              If your dog brings food or fluid back up, the first question is whether it is <strong>vomiting</strong> or{' '}
              <strong>regurgitation</strong>. Vomiting is an active process (often with nausea signs and abdominal effort).
              Regurgitation is usually passive (a sudden &ldquo;spill&rdquo; of undigested material with little effort).
              That distinction matters because regurgitation raises different concerns, including <strong>aspiration risk</strong>{' '}
              and conditions like megaesophagus.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Go to the ER now</strong> if there is repeated retching without producing anything, a tight/bloated belly,
                collapse, trouble breathing, blue gums, or a seizure.
              </li>
              <li>
                <strong>Same-day vet visit</strong> if your dog is regurgitating repeatedly, especially if coughing follows, or if
                there is weakness, dehydration, or a painful abdomen.
              </li>
              <li>
                <strong>Call your vet soon</strong> if mild vomiting happens once but your dog is otherwise normal; your vet can guide
                you based on age, history, and exposure risk.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Petunia tip:</strong> In Petunia, log each event with (1) time since eating, (2) whether there was active
              heaving, (3) what the material looked like (undigested food, foam, bile), and (4) any cough afterward. That single
              record often changes the speed and accuracy of a vet work-up.
            </div>
          </section>

          {/* DEFINITIONS */}
          <section id="definitions" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Quick Definitions</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Vomiting</h3>
            <p className="mb-4">
              Vomiting is the stomach (and sometimes upper intestinal tract) forcefully ejecting contents. Many dogs show nausea
              signs beforehand. You often see abdominal effort, repeated heaving, and then expulsion of partially digested food
              or fluid. Vomiting can be mild and self-limited, or it can be a sign of serious disease.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Regurgitation</h3>
            <p className="mb-4">
              Regurgitation is usually passive: material comes up from the esophagus without obvious nausea cues or strong abdominal
              contractions. The expelled material is often undigested and may look like it came back up soon after eating or
              drinking. Regurgitation tends to push the vet toward esophageal or swallowing-related pathways rather than purely
              stomach pathways.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Why owners confuse them</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Both can happen quickly and look similar if you only see the end moment.</li>
              <li>Some dogs gag or cough after regurgitation, which can look like vomiting at a glance.</li>
              <li>Foamy fluid can appear in both scenarios, especially if the stomach is empty or the dog is stressed.</li>
            </ul>
          </section>

          {/* WHY IT MATTERS */}
          <section id="why-matters" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why the Difference Matters</h2>

            <p className="mb-4">
              The reason vets care is not pedantic. Vomiting and regurgitation point to different &ldquo;high-risk&rdquo; problems and
              different first tests. When you describe the event accurately, you reduce wasted steps and shorten the time to a useful plan.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Regurgitation raises aspiration risk</h3>
            <p className="mb-4">
              If material repeatedly comes back up into the mouth, it can be inhaled into the lungs. That is one reason coughing,
              fever, lethargy, and breathing changes after regurgitation should be taken seriously.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Vomiting can signal obstruction, toxins, pancreatitis, or systemic illness</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Repeated vomiting with lethargy or abdominal pain can be a reason to look beyond &ldquo;stomach upset.&rdquo;</li>
              <li>Vomiting without stool passing, or vomiting paired with a painful abdomen, can raise obstruction concerns.</li>
              <li>
                Repeated retching without producing anything is not typical vomiting and can overlap with high-stakes emergency pathways.
              </li>
            </ul>
          </section>

          {/* HOW TO TELL */}
          <section id="how-to-tell" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How to Tell at Home (A Simple Checklist)</h2>

            <p className="mb-4">
              Use this as a practical pattern tool. If you are unsure, that is normal. A short video can help your veterinarian
              tremendously, as long as filming does not delay urgent care when red flags are present.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Clues for vomiting</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Nausea signs first: drooling, lip licking, swallowing repeatedly, restlessness.</li>
              <li>Active abdominal contractions or repeated heaving.</li>
              <li>Material may be partially digested, mixed with fluid, or include bile (yellow-green).</li>
              <li>Often occurs after a period of feeling unwell, even if briefly.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Clues for regurgitation</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Little to no warning, no obvious nausea phase.</li>
              <li>Material looks undigested and may be tubular in shape (from the esophagus).</li>
              <li>Often happens soon after eating or drinking, but it can also occur hours later in some conditions.</li>
              <li>Gagging or coughing afterward can happen if material irritates the airway.</li>
            </ul>
          </section>

          {/* RED FLAGS */}
          <section id="red-flags" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Red Flags and Clear ER Thresholds</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Go to emergency care immediately</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Repeated retching with little or no output, especially with restlessness and a tight belly.</li>
              <li>Collapse, severe weakness, pale or gray gums, or trouble breathing.</li>
              <li>Vomiting blood, black/tarry stool, or severe abdominal pain.</li>
              <li>Possible toxin exposure (especially if paired with tremors, seizures, or altered behavior).</li>
              <li>Persistent regurgitation with breathing changes, blue-tinged gums, or extreme lethargy.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Same-day veterinary evaluation is usually appropriate</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Repeated vomiting over a short window, even if your dog is still trying to act normal.</li>
              <li>Any dehydration signs (sunken eyes, tacky gums) or inability to keep water down.</li>
              <li>Repeated regurgitation or regurgitation plus coughing.</li>
              <li>Puppies, seniors, and dogs with chronic conditions should be evaluated earlier, not later.</li>
            </ul>
          </section>

          {/* COMMON CAUSES */}
          <section id="common-causes" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Common Causes (Grouped by Pattern)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Common vomiting pathways</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Dietary indiscretion (trash, new treats, fatty foods), mild gastritis.</li>
              <li>Parasites or infectious GI disease, especially in puppies or high-exposure dogs.</li>
              <li>Pancreatitis risk pathways (often with pain, lethargy, and repeated vomiting).</li>
              <li>Obstruction risk pathways (toy ingestion, bones, foreign material), especially with persistent vomiting.</li>
              <li>Systemic causes (kidney disease, endocrine disease), especially when vomiting becomes recurrent.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Common regurgitation pathways</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Esophageal irritation or swallowing problems.</li>
              <li>Megaesophagus and related motility disorders.</li>
              <li>Physical obstruction in the esophagus (less common but high urgency).</li>
              <li>Rapid eating or gulping water can mimic regurgitation, but repeated patterns still deserve evaluation.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Breed note (German Shepherd example)</h3>
            <p className="mb-0">
              Some breeds have documented associations with specific GI patterns and esophageal conditions. If you have a German
              Shepherd, you may also want to read:{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* WHAT TO TRACK */}
          <section id="what-to-track" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What to Track Before You Call (High Yield)</h2>

            <p className="mb-4">
              A veterinarian will make better decisions if you can describe the event precisely. This is what most owners forget
              under stress, so it helps to write it down.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Timing:</strong> how long after eating or drinking did it happen?
              </li>
              <li>
                <strong>Effort:</strong> was there nausea and abdominal heaving, or did it appear passive?
              </li>
              <li>
                <strong>Appearance:</strong> undigested food, foam, bile, blood, foreign material.
              </li>
              <li>
                <strong>Frequency:</strong> one event vs repeated events over hours.
              </li>
              <li>
                <strong>Energy:</strong> normal behavior vs lethargy, hiding, weakness.
              </li>
              <li>
                <strong>Hydration:</strong> drinking normally, refusing water, or unable to keep water down.
              </li>
              <li>
                <strong>Stool:</strong> normal, diarrhea, black/tarry stool, no stool passing.
              </li>
              <li>
                <strong>After-effects:</strong> coughing, feverish behavior, rapid breathing, or unusual fatigue.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Caregiver note:</strong> If your dog stays with a sitter or boarding facility, share your dog&rsquo;s typical GI
              pattern and your vet&rsquo;s instructions in Petunia. Fast, accurate handoffs prevent delays when symptoms start.
            </div>
          </section>

          {/* VET WORKUP */}
          <section id="vet-workup" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What the Vet Usually Does (So You Know What to Expect)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">If vomiting is the primary pattern</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Physical exam and hydration assessment.</li>
              <li>Discussion of exposures: diet changes, trash access, toxins, medications, travel, parasite risk.</li>
              <li>Basic testing when needed (for dehydration, systemic disease concerns, or repeated episodes).</li>
              <li>Imaging if obstruction, pancreatitis pathways, or severe abdominal pain is suspected.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">If regurgitation is the primary pattern</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Focused history: timing after eating, frequency, and whether coughing follows.</li>
              <li>Chest evaluation when aspiration concerns are present.</li>
              <li>Esophageal pathway considerations and imaging decisions based on severity and risk.</li>
              <li>Feeding and posture strategies while the diagnostic pathway is being clarified.</li>
            </ul>
          </section>

          {/* SAFE SHORT-TERM CARE */}
          <section id="care-at-home" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Safe Short-Term Care (Only When Symptoms Are Mild)</h2>

            <p className="mb-4">
              Home care is appropriate only when your dog is bright, hydrated, not in pain, and the event is mild and not repeating.
              If red flags are present, do not delay professional care.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What is generally safe to do</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Offer small amounts of water more frequently, rather than a large bowl gulp.</li>
              <li>Pause new treats and rich foods; return to your dog&rsquo;s normal diet once stable, as advised by your vet.</li>
              <li>
                If your vet recommends a bland diet approach, follow their exact guidance and do not improvise with unsafe ingredients.
              </li>
              <li>Track frequency and appearance; if it repeats, upgrade to a veterinary plan quickly.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">What not to do</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Do not use human medications without veterinary instruction.</li>
              <li>Do not force food after repeated vomiting or any regurgitation pattern.</li>
              <li>Do not wait overnight when your dog is worsening, weak, or dehydrated.</li>
            </ul>
          </section>

          {/* ASPIRATION */}
          <section id="aspiration" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Aspiration Pneumonia: The Risk You Should Know</h2>

            <p className="mb-4">
              Aspiration pneumonia occurs when food or fluid is inhaled into the lungs. It is a major reason veterinarians treat
              repeated regurgitation seriously. Some dogs seem &ldquo;fine&rdquo; right after a regurgitation event and then become sick later.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Signs that should raise concern</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Coughing after regurgitation or coughing that develops within the next day.</li>
              <li>Rapid breathing, labored breathing, or breathing that looks unusual for your dog.</li>
              <li>Feverish behavior, shivering, or sudden lethargy.</li>
              <li>Refusing food or water after a regurgitation pattern.</li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Practical takeaway:</strong> Repeated regurgitation plus cough or breathing change is a strong reason for same-day veterinary evaluation.
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>My dog threw up foam. Is that vomiting or regurgitation?</strong>
              <br />
              Foam can appear in both. Look for the sequence: nausea signs and heaving suggest vomiting, while a sudden passive spill suggests regurgitation.
              If it repeats, especially with lethargy or cough, call your veterinarian.
            </p>

            <p className="mb-4">
              <strong>My dog brings up undigested food soon after eating. What does that suggest?</strong>
              <br />
              That pattern can fit regurgitation more than vomiting. Repeated episodes should be evaluated because esophageal pathways and aspiration risks
              require a different plan than routine stomach upset.
            </p>

            <p className="mb-4">
              <strong>Should I withhold food and water?</strong>
              <br />
              Do not fully withhold water without veterinary guidance. If your dog is repeatedly vomiting or regurgitating, the safest step is to call your vet
              or seek urgent care rather than guessing at fasting rules.
            </p>

            <p className="mb-4">
              <strong>When should I worry about a blockage?</strong>
              <br />
              Persistent vomiting, vomiting with abdominal pain, inability to keep water down, or no stool passing can raise obstruction concerns and deserve
              prompt evaluation.
            </p>

            <p className="mb-2">
              <strong>What is the best &ldquo;one thing&rdquo; to do if I am unsure?</strong>
              <br />
              Time the event and note whether there was active heaving. That single observation changes the pathway a veterinarian takes.
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Merck Veterinary Manual: overviews of vomiting, gastric disease, megaesophagus, and aspiration pneumonia concepts.{' '}
                <Link
                  href="https://www.merckvetmanual.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck Veterinary Manual
                </Link>
              </li>
              <li>
                American College of Veterinary Surgeons (ACVS): educational references related to gastrointestinal emergencies and evaluation principles.{' '}
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
                href={`/${locale}/blog/german-shepherd-hind-end-weakness-dm-vs-arthritis-vs-dlss`}
                className="underline hover:opacity-80"
              >
                German Shepherd Hind-End Weakness: DM vs Arthritis vs DLSS vs Injury
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
