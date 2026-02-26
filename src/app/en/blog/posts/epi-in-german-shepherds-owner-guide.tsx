'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function EpiInGermanShepherdsOwnerGuide() {
  const locale = useLocale();

  const title =
    'EPI in German Shepherds: The Practical Owner Guide (Symptoms, Testing, Enzymes, B12, Diet, and Troubleshooting)';
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
    food: 'Dog Food & Nutrition',
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
              <a href="#what-is-epi" className="underline hover:opacity-80">
                What EPI Is
              </a>
            </li>
            <li>
              <a href="#why-gsd" className="underline hover:opacity-80">
                Why German Shepherds
              </a>
            </li>
            <li>
              <a href="#hallmark-signs" className="underline hover:opacity-80">
                Hallmark Signs
              </a>
            </li>
            <li>
              <a href="#vomit-vs-regurg" className="underline hover:opacity-80">
                Vomiting vs Regurgitation
              </a>
            </li>
            <li>
              <a href="#testing" className="underline hover:opacity-80">
                Testing and Diagnosis
              </a>
            </li>
            <li>
              <a href="#treatment" className="underline hover:opacity-80">
                Treatment Basics
              </a>
            </li>
            <li>
              <a href="#enzymes" className="underline hover:opacity-80">
                Enzyme Routine
              </a>
            </li>
            <li>
              <a href="#b12" className="underline hover:opacity-80">
                B12 and Add-Ons
              </a>
            </li>
            <li>
              <a href="#diet" className="underline hover:opacity-80">
                Diet Strategy
              </a>
            </li>
            <li>
              <a href="#monitoring" className="underline hover:opacity-80">
                Monitoring and Targets
              </a>
            </li>
            <li>
              <a href="#not-improving" className="underline hover:opacity-80">
                If Your Dog Is Not Improving
              </a>
            </li>
            <li>
              <a href="#when-vet" className="underline hover:opacity-80">
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
              Exocrine pancreatic insufficiency (EPI) means the pancreas is not producing enough digestive enzymes, so your dog
              cannot break down food normally. German Shepherds are a classic predisposed breed. The most common owner pattern is
              <strong> weight loss despite appetite</strong> plus <strong>large-volume stool</strong> and a coat that looks worse over time.
              The good news is that most dogs improve dramatically with a consistent enzyme routine and a structured plan.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                The key diagnostic test most vets use is <strong>cTLI</strong> (canine trypsin-like immunoreactivity).
              </li>
              <li>
                Treatment usually includes <strong>pancreatic enzyme replacement</strong> and often <strong>B12 support</strong> (cobalamin)
                when indicated.
              </li>
              <li>
                If your dog does not improve, it is usually a troubleshooting problem (dose, routine, diet fit, or a second condition),
                not a reason to panic.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Petunia tip:</strong> Create an EPI note with a daily checklist: enzyme dose per meal, stool quality, weight trend,
              appetite, and any vomiting or regurgitation events. A clean log makes follow-up visits faster and more accurate.
            </div>

            <p className="mt-4 mb-0">
              For the bigger German Shepherd health overview that includes joints, skin, GDV, and neurologic issues, start here:{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* WHAT EPI IS */}
          <section id="what-is-epi" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What EPI Is (Plain English)</h2>

            <p className="mb-4">
              Your dog&rsquo;s pancreas has two jobs. One is endocrine (blood sugar regulation). The other is exocrine (digestive enzymes).
              In EPI, the exocrine portion is not producing enough enzymes to digest fats, proteins, and carbohydrates. Food passes through
              the intestine poorly digested, leading to malabsorption.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What malabsorption looks like</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Weight loss or failure to gain weight, even if appetite is strong.</li>
              <li>Large stool volume (often more frequent) and chronic soft stool.</li>
              <li>Gas, abdominal noise, and a coat that becomes dull or dry.</li>
              <li>In some dogs, appetite becomes intense or unpredictable.</li>
            </ul>
          </section>

          {/* WHY GSD */}
          <section id="why-gsd" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why German Shepherds Are a Known EPI Risk Breed</h2>

            <p className="mb-4">
              German Shepherds are frequently represented in EPI discussions because breed-associated pancreatic pathways have been
              described in veterinary literature. This does not mean every shepherd will develop EPI. It means owners and vets should
              keep EPI on the shortlist when a shepherd has the hallmark pattern: weight loss plus high-volume stool.
            </p>

            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Breed predisposition changes how quickly a vet will test, especially when signs are classic.</li>
              <li>Early testing is usually cheaper and less stressful than months of rotating diets without a plan.</li>
            </ul>
          </section>

          {/* HALLMARK SIGNS */}
          <section id="hallmark-signs" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Hallmark Signs That Make Vets Think About EPI</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">High-signal owner pattern</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Weight loss</strong> or failure to gain, even though your dog eats well.
              </li>
              <li>
                <strong>Increased stool volume</strong> (often more frequent) and chronic soft stool.
              </li>
              <li>
                <strong>Flatulence</strong> and intestinal noise that feels new or excessive.
              </li>
              <li>
                <strong>Coat decline</strong> over time (dull, dry, poor condition).
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">Signs that mean you should not wait</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Rapid weight loss, dehydration, weakness, or a dog that becomes lethargic.</li>
              <li>Black/tarry stool, vomiting blood, or repeated vomiting with pain.</li>
              <li>Repeated regurgitation, especially if coughing follows (aspiration concern).</li>
            </ul>
          </section>

          {/* VOMIT VS REGURG */}
          <section id="vomit-vs-regurg" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Vomiting vs Regurgitation: Why It Still Matters in EPI Work-Ups</h2>

            <p className="mb-4">
              EPI is not primarily an esophagus problem, but owners often report &ldquo;throwing up&rdquo; when the dog is actually regurgitating.
              If regurgitation is part of the story, your vet will weigh different risks, including aspiration.
            </p>

            <p className="mb-4">
              If you want a calm checklist that helps you tell the difference at home and know when it is an emergency, read:{' '}
              <Link
                href={`/${locale}/blog/vomiting-vs-regurgitation-in-dogs`}
                className="underline hover:opacity-80"
              >
                Vomiting vs Regurgitation in Dogs
              </Link>
              .
            </p>
          </section>

          {/* TESTING */}
          <section id="testing" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Testing and Diagnosis (What Your Vet Is Looking For)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">The core test: cTLI</h3>
            <p className="mb-4">
              The most commonly referenced diagnostic test for EPI is cTLI (canine trypsin-like immunoreactivity). It is a blood test
              that helps assess pancreatic enzyme production. Vets use this test because it is direct and high-signal for EPI when the
              clinical picture fits.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Other tests your vet may discuss</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Fecal and parasite testing to rule out common causes of chronic diarrhea.</li>
              <li>General lab work to check hydration status and systemic illness pathways.</li>
              <li>Cobalamin (B12) assessment when chronic enteropathy or malabsorption is suspected.</li>
              <li>
                Imaging or specialty referral if there are red flags, severe pain, or poor response to a reasonable first plan.
              </li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Owner mindset:</strong> Testing is not about &ldquo;running everything.&rdquo; It is about choosing the next best test based on the
              pattern your dog is showing, especially weight trend and stool volume.
            </div>
          </section>

          {/* TREATMENT */}
          <section id="treatment" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Treatment Basics (What Works for Most Dogs)</h2>

            <p className="mb-4">
              EPI treatment works because you replace what the pancreas is not providing. Most dogs improve with consistency and correct dosing.
              Your vet will tailor details, but the foundation usually includes enzymes with meals, diet strategy, and targeted support when indicated.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">The three pillars</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>
                <strong>Enzyme replacement:</strong> pancreatic enzymes mixed with each meal, every meal.
              </li>
              <li>
                <strong>Nutrition strategy:</strong> a diet that your dog tolerates reliably, with measurable improvement.
              </li>
              <li>
                <strong>Targeted add-ons:</strong> B12 support and other adjustments when labs or response suggest they are needed.
              </li>
            </ul>
          </section>

          {/* ENZYMES */}
          <section id="enzymes" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Enzyme Routine (The Part That Makes or Breaks Results)</h2>

            <p className="mb-4">
              Most &ldquo;EPI did not improve&rdquo; stories are actually routine problems: inconsistent dosing, missed meals, incorrect mixing,
              or a dog that is eating extra food outside the plan. Your goal is to make enzymes boring and automatic.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Practical routine checklist</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Use the exact enzyme product and dosing plan your vet prescribed.</li>
              <li>Mix enzymes with every meal consistently, including small meals or training meals if applicable.</li>
              <li>Keep the routine stable for long enough to judge response (do not change five variables at once).</li>
              <li>Prevent &ldquo;bonus calories&rdquo; that hide whether the plan is working (table scraps, other pets&rsquo; food).</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">What improvement usually looks like first</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Stool volume decreases and stool becomes more consistently formed.</li>
              <li>Weight stabilizes, then begins to increase gradually if your dog was underweight.</li>
              <li>Gas reduces over time, and coat quality often improves later in the process.</li>
            </ul>
          </section>

          {/* B12 */}
          <section id="b12" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">B12 (Cobalamin) and Other Add-Ons</h2>

            <p className="mb-4">
              Many dogs with chronic GI disease pathways can develop low cobalamin (B12). Your vet may test and supplement B12 because it is
              part of the absorption and intestinal health story. This is not &ldquo;extra.&rdquo; In the right dog, it is a key lever that
              improves response and stability.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">What to discuss with your vet</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Whether B12 testing is appropriate based on signs, weight trend, and stool pattern.</li>
              <li>Whether supplementation should be oral or injection-based in your dog&rsquo;s situation.</li>
              <li>How long to supplement before rechecking response.</li>
            </ul>
          </section>

          {/* DIET */}
          <section id="diet" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Diet Strategy (Keep It Simple and Measurable)</h2>

            <p className="mb-4">
              Owners often want the &ldquo;perfect&rdquo; diet. The better goal is the &ldquo;reliably tolerated&rdquo; diet that produces measurable improvement.
              Your vet may recommend specific approaches based on your dog&rsquo;s response, stool quality, and weight trend.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">Practical diet rules for EPI plans</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Pick one plan and run it long enough to judge response; do not rotate foods rapidly.</li>
              <li>Measure food and track weight trend so you know if calories need adjustment.</li>
              <li>Keep treats controlled and consistent so they do not destabilize the plan.</li>
              <li>If your dog has concurrent chronic enteropathy, diet decisions may need to be more structured.</li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Simple test of success:</strong> stool volume and weight trend should move in the right direction. If they do not,
              you and your vet troubleshoot one variable at a time.
            </div>
          </section>

          {/* MONITORING */}
          <section id="monitoring" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Monitoring and Targets (So You Know If It Is Working)</h2>

            <h3 className="text-lg font-semibold mt-2 mb-2">Track these three things weekly</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>
                <strong>Body weight trend:</strong> use the same scale when possible and focus on direction, not single-day noise.
              </li>
              <li>
                <strong>Stool volume and consistency:</strong> large-volume stool is a high-signal marker in EPI patterns.
              </li>
              <li>
                <strong>Energy and coat:</strong> energy often improves as digestion stabilizes; coat quality may improve later.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">What &ldquo;stable&rdquo; usually means</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>Stool is consistently formed most days and no longer unusually large.</li>
              <li>Weight stops dropping and trends upward if underweight.</li>
              <li>Gas and abdominal noise are reduced compared to baseline.</li>
            </ul>
          </section>

          {/* NOT IMPROVING */}
          <section id="not-improving" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">If Your Dog Is Not Improving (The Most Common Reasons)</h2>

            <p className="mb-4">
              When dogs do not improve, it is usually because one of these categories is true. This list is designed to prevent
              vague panic and replace it with specific troubleshooting.
            </p>

            <h3 className="text-lg font-semibold mt-2 mb-2">1) Enzyme routine is not truly consistent</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Enzymes are missed on some meals or snacks.</li>
              <li>Multiple caregivers are feeding differently.</li>
              <li>Other pets&rsquo; food, table food, or untracked treats are destabilizing the plan.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">2) Dose or product mismatch</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>The dose may need adjustment based on response and weight trend.</li>
              <li>Some dogs respond differently to different formulations; your vet guides this.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">3) A second GI condition is present</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Chronic enteropathy can coexist with EPI in some dogs, changing the plan.</li>
              <li>Parasites or infections can overlap with malabsorption patterns.</li>
              <li>B12 deficiency can slow improvement in the right clinical context.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-2 mb-2">4) The problem is not EPI</h3>
            <ul className="list-disc pl-5 space-y-1 mb-0">
              <li>If the diagnostic pathway is incomplete or the pattern does not fit, your vet may reassess the diagnosis.</li>
              <li>
                That is not failure. It is a normal part of medicine when the first hypothesis does not match response.
              </li>
            </ul>
          </section>

          {/* WHEN VET */}
          <section id="when-vet" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>

            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Rapid weight loss, weakness, dehydration, or refusal to drink.</li>
              <li>Repeated vomiting with lethargy or abdominal pain.</li>
              <li>Black/tarry stool or blood in vomit or stool.</li>
              <li>Repeated regurgitation, especially with coughing or breathing changes.</li>
              <li>Any sudden collapse or severe deterioration.</li>
            </ul>

            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm not-prose">
              <strong>Caregiver reminder:</strong> If your dog boards or stays with a sitter, share enzyme instructions and your emergency thresholds
              in Petunia. Consistency prevents setbacks.
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

            <p className="mb-4">
              <strong>Does EPI mean my dog has diabetes?</strong>
              <br />
              Not necessarily. EPI refers to the digestive enzyme portion of the pancreas. Diabetes relates to the endocrine portion and blood sugar regulation.
              Your veterinarian evaluates the full context based on symptoms and lab work.
            </p>

            <p className="mb-4">
              <strong>How fast do dogs improve once enzymes start?</strong>
              <br />
              Many dogs show stool improvement first, then weight stabilization. Coat quality and long-term strength often improve later. If there is no meaningful
              improvement after a reasonable trial, your vet usually troubleshoots routine, dose, diet fit, and concurrent conditions.
            </p>

            <p className="mb-4">
              <strong>Do I need to change diets forever?</strong>
              <br />
              Some dogs do best on a stable long-term diet, while others require adjustments based on concurrent GI disease. The best diet is the one that produces
              measurable stability for your dog, not the one that sounds perfect on paper.
            </p>

            <p className="mb-4">
              <strong>My dog still has episodes. Does that mean enzymes are not working?</strong>
              <br />
              Not always. Episodes can reflect missed enzyme coverage, treat or food changes, stress, or a second condition. A structured log is the fastest way
              to identify the pattern.
            </p>

            <p className="mb-2">
              <strong>Where does EPI fit into overall German Shepherd health?</strong>
              <br />
              EPI is one of the important GI issues seen in shepherds, alongside chronic enteropathy and other causes of long-term GI signs. For the full overview
              of major German Shepherd health risks, see{' '}
              <Link
                href={`/${locale}/blog/what-health-problems-are-common-in-german-shepherds`}
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
              .
            </p>
          </section>

          {/* SOURCES */}
          <section id="sources" className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                Texas A&amp;M GI Laboratory and related educational materials on EPI testing concepts (cTLI) and malabsorption pathways.{' '}
                <Link
                  href="https://vetmed.tamu.edu/gilab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Texas A&amp;M GI Lab
                </Link>
              </li>
              <li>
                Merck Veterinary Manual: overviews of EPI, chronic enteropathy, and digestive disease pathways.{' '}
                <Link
                  href="https://www.merckvetmanual.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Merck Veterinary Manual
                </Link>
              </li>
              <li>
                Peer-reviewed laboratory testing and EPI references used for owner education discussions.{' '}
                <Link
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7104967/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laboratory testing overview
                </Link>
              </li>
            </ul>

            <p className="text-xs text-gray-600 mt-4">
              This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
              If you suspect an emergency or your dog is rapidly worsening, seek immediate care.
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
