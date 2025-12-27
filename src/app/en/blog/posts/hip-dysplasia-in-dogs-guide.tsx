'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HipDysplasiaInDogs() {
  const locale = useLocale();

  const title =
    'Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning';
  const date = 'December 26, 2025';
  const categories = ['owner'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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

  const slug = 'hip-dysplasia-in-dogs-guide';

  const description =
    'A practical, evidence-informed guide to hip dysplasia in dogs: how the condition develops, early signs, diagnostics, at-home care, weight and nutrition tactics, rehab, when surgery is appropriate, expected costs, recovery timelines, and prevention through breeding decisions and daily habits.';

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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-is-hd" className="underline hover:opacity-80">What Hip Dysplasia Is</a></li>
            <li><a href="#risk-factors" className="underline hover:opacity-80">Risk Factors</a></li>
            <li><a href="#early-signs" className="underline hover:opacity-80">Early Signs by Life Stage</a></li>
            <li><a href="#diagnostics" className="underline hover:opacity-80">Diagnostics &amp; Imaging</a></li>
            <li><a href="#nonsurgical" className="underline hover:opacity-80">Non-Surgical Management</a></li>
            <li><a href="#rehab" className="underline hover:opacity-80">Rehab &amp; Lifestyle</a></li>
            <li><a href="#surgery" className="underline hover:opacity-80">Surgical Options</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Costs &amp; Timelines</a></li>
            <li><a href="#home-sops" className="underline hover:opacity-80">Home SOPs &amp; Checklists</a></li>
            <li><a href="#prevention" className="underline hover:opacity-80">Prevention</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>Hip dysplasia (HD)</strong> is a developmental joint disease where the ball-and-socket hip does not fit or move normally, leading to laxity, pain, and arthritis. <strong>Early action</strong> matters: keep your dog lean, build muscle with controlled exercise and rehab, optimize home surfaces, and work with your veterinarian on pain control. <strong>Surgery</strong> can be life-changing in the right cases (juvenile pubic symphysiodesis, triple/double pelvic osteotomy, femoral head ostectomy, or total hip replacement), but many dogs do well long-term with a <strong>systematic non-surgical plan</strong>.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Turn this article into your dog&apos;s <em>hip-care SOP</em>: record body weight targets, weekly exercise minutes, floor-surface fixes, medication schedules, and recheck dates so every caregiver follows the same plan.
          </div>
        </section>

        {/* WHAT IS HD */}
        <section id="what-is-hd" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Hip Dysplasia Is (and Isn&apos;t)</h2>
          <p className="mb-3">
            Hip dysplasia is a <strong>developmental</strong> joint disorder. Puppies are typically born with normal hips; as they grow, a combination of <strong>genetics</strong> and <strong>environmental influences</strong> (growth rate, body weight, activity, hormones) can produce a hip where the femoral head does not seat deeply or tightly in the acetabulum. The result is <strong>laxity</strong> (looseness) and abnormal motion that damages cartilage, inflames joint tissues, and accelerates <strong>osteoarthritis (OA)</strong>.
          </p>
          <p className="mb-3">
            Owners often imagine HD as a single yes/no event, but it is a <strong>continuum</strong>. Dogs can have mild laxity with few signs or severe dysplasia with early pain and gait changes. Importantly, HD is not the same as <em>hip luxation</em> from trauma, nor is it identical to cruciate ligament disease in the knee, although these conditions can coexist.
          </p>
          <p className="mb-0">
            A helpful mental model: <strong>fit + force + time</strong>. Poor hip fit increases damaging forces with every step; across months and years, those forces reshape the joint. Your plan reduces damaging forces (weight, slippery floors), improves support (muscle), and controls inflammation and pain (meds, supplements, procedures).
          </p>
        </section>

        {/* RISK FACTORS */}
        <section id="risk-factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Major Risk Factors</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Genetics:</strong> heritable predisposition; risk varies by breed and line.</li>
            <li><strong>Rapid growth &amp; excess calories:</strong> overfeeding in puppyhood increases risk and severity.</li>
            <li><strong>Excess body weight:</strong> higher lifelong joint load; strong link with arthritis progression.</li>
            <li><strong>Biomechanics &amp; surfaces:</strong> repeated slips on tile/wood; high-impact jump/stop activities.</li>
            <li><strong>Early neuter timing:</strong> research is evolving; in some breeds, early neuter may influence orthopedic risk.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Operator mindset:</strong> You can&apos;t change genetics, but you can <em>engineer the environment</em>: body condition, nutrition grams, floor traction, and training choices.
          </div>
        </section>

        {/* EARLY SIGNS */}
        <section id="early-signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Signs by Life Stage</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies &amp; Adolescents</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>“Bunny hopping” with both rear legs together during faster trots.</li>
            <li>Reluctance to jump into cars or climb stairs; sitting crooked.</li>
            <li>Intermittent rear-limb lameness after vigorous play; soreness by evening.</li>
            <li>Grooming sensitivity over hips or lower back.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults &amp; Seniors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Stiffness on rising that “warms out,” then returns after rest.</li>
            <li>Shortened stride, swaying rear, or pivoting with the front more than the back.</li>
            <li>Reduced activity, reluctance to play fetch, irritability during nail trims or lifting.</li>
          </ul>

          <p className="mb-0">
            None of these signs prove hip dysplasia on their own. They are
            <strong> decision triggers</strong> to look for patterns over time and consider
            veterinary evaluation if changes persist.
            For a deeper breakdown of subtle, commonly missed early clues that appear
            before obvious limping, see:{' '}
            <Link
              href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
              className="underline font-medium hover:opacity-80"
            >
              Early Signs of Hip Dysplasia Owners Miss
            </Link>
            .
          </p>
        </section>

        {/* DIAGNOSTICS */}
        <section id="diagnostics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnostics &amp; Imaging</h2>

          <p className="mb-3">
            Your veterinarian will combine <strong>history, orthopedic exam, and imaging</strong>.
            Standard radiographs taken under correct positioning remain the primary tool
            for diagnosis and osteoarthritis grading.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>OFA-style views:</strong> evaluate hip conformation and secondary arthritis changes.</li>
            <li><strong>PennHIP:</strong> quantifies passive hip laxity using specialized positioning and measurement.</li>
          </ul>

          <p className="mb-0">
            Because hip pain can originate from multiple structures, diagnosis is rarely
            based on X-rays alone. History, exam findings, positioning quality, and interpretation
            all matter.
            For a step-by-step explanation of how veterinarians evaluate hips, what OFA and
            PennHIP actually measure, and how results guide treatment decisions, continue to:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia
            </Link>
            .
          </p>
        </section>

        {/* NONSURGICAL */}
        <section id="nonsurgical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Non-Surgical Management: Build the &quot;Anti-Arthritis&quot; System</h2>
          <p className="mb-3">
            Many dogs with mild-to-moderate HD live active, happy lives without surgery when owners run a consistent, multi-part plan. The pillars below are where most quality-of-life gains happen.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Body Condition &amp; Nutrition</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Target BCS 4–5/9:</strong> even small weight loss reduces joint load significantly.</li>
            <li><strong>Measure in grams:</strong> weigh meals; cap treat calories at roughly 10% daily intake.</li>
            <li><strong>Puppy growth:</strong> large-breed puppy diets balance calcium/phosphorus to slow rapid growth.</li>
            <li><strong>Discuss joint-support diets:</strong> some therapeutic foods include omega-3s and cartilage support.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">2) Pain &amp; Inflammation Control</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>NSAIDs:</strong> cornerstone for OA flares; use under veterinary direction and lab monitoring.</li>
            <li><strong>Adjuncts:</strong> gabapentin, amantadine, or other multimodal agents when indicated.</li>
            <li><strong>Intra-articular options:</strong> your vet may offer hyaluronic acid or other therapies; evidence varies.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">3) Supplements (Evidence-Aware)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Omega-3 fatty acids (EPA/DHA):</strong> the most consistently supported nutraceutical for canine OA comfort.</li>
            <li><strong>Glucosamine/chondroitin, green-lipped mussel, UC-II:</strong> mixed but promising data; discuss products with quality control.</li>
            <li><strong>CBD:</strong> research is evolving; discuss with your veterinarian regarding legality, dosing, and product quality.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">4) Home Environment &amp; Equipment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Non-slip runners on wood/tile; area rugs in high-traffic “turn” zones.</li>
            <li>Ramps or stable steps for cars and furniture; block access to high jumps.</li>
            <li>Supportive orthopedic bed; elevated bowls for dogs with discomfort during flexion.</li>
            <li>Short-handle harness for assistance on stairs; avoid yanking or twisting.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">5) Activity Design</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Low-impact cardio:</strong> layered sniff walks, gentle hills, controlled retrieve on grass.</li>
            <li><strong>Avoid:</strong> repeated high jumps, sudden stops/turns on slick surfaces, and marathon fetch.</li>
            <li><strong>Cadence:</strong> most dogs do best with daily activity divided into multiple short bouts plus structured rest windows.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log weekly minutes of low-impact exercise and pain scores (0–10). If scores creep up for two days in a row, scale back and add an extra rest block.
          </div>
        </section>

        {/* REHAB */}
        <section id="rehab" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rehab &amp; Lifestyle: Muscle Is Medicine</h2>
          <p className="mb-3">
            Veterinary rehabilitation amplifies comfort by strengthening stabilizers, improving range of motion, and retraining gait. A customized plan typically includes:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Underwater treadmill or swim sets:</strong> buoyancy reduces joint load while building muscle.</li>
            <li><strong>Therapeutic exercises:</strong> sit-to-stand, controlled step-ups, cavaletti rails, cookie stretches.</li>
            <li><strong>Manual therapies:</strong> massage, assisted stretching; some clinics offer laser or shockwave based on case selection.</li>
            <li><strong>Home program:</strong> 10–15 minute sessions, several times per week, progressed gradually.</li>
          </ul>
          <p className="mb-0">
            Build recovery into your routine: after any higher-arousal play, include a <em>decompression walk</em> and a quiet rest window. Consistency beats intensity.
          </p>
        </section>

        {/* SURGERY */}
        <section id="surgery" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Surgical Options: When &amp; Why</h2>
          <p className="mb-3">
            Surgery is considered when pain persists despite optimized conservative care, or when imaging and age suggest a procedure that can change the joint&apos;s trajectory. Your primary vet will often refer to a <strong>board-certified surgeon (ACVS)</strong>. Common procedures include:
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Juvenile Pubic Symphysiodesis (JPS)</h3>
          <p className="mb-3">
            A minimally invasive procedure performed at a <strong>very young age</strong> (typically 12–20 weeks) to alter pelvic growth and improve coverage of the femoral head. Requires early diagnosis and appropriate candidacy.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Triple/Double Pelvic Osteotomy (TPO/DPO)</h3>
          <p className="mb-3">
            For <strong>young dogs</strong> with lax hips but minimal OA, the pelvis is cut and rotated to increase coverage. Post-op rehab is essential; outcomes can be excellent in selected cases.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Femoral Head &amp; Neck Ostectomy (FHO)</h3>
          <p className="mb-3">
            Removes the femoral head to eliminate bone-on-bone pain, creating a pseudo-joint supported by soft tissue and muscle. More commonly used in <strong>small to medium dogs</strong> or as a salvage option; diligent rehab is key to function.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Total Hip Replacement (THR)</h3>
          <p className="mb-3">
            Replaces the damaged joint with prosthetic components, often delivering near-normal function and pain relief in <strong>appropriately selected patients</strong>. Requires specialist care, strict post-op management, and budgeting for potential complications.
          </p>
          <p className="mb-0">
            Which option is best depends on age, severity, OA changes, other orthopedic disease, and your goals. A thorough surgeon consult will weigh risks, benefits, costs, and aftercare realities for your household.
          </p>
        </section>

        {/* COSTS */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Costs, Recovery Timelines, and What Daily Life Looks Like</h2>
          <p className="mb-3">
            Costs vary by geography and case complexity. Families typically budget for imaging, medications, rehab blocks, and potential surgery. Very broad U.S. estimates (subject to change) often include:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Initial workup (exam, radiographs, labs): commonly hundreds of dollars.</li>
            <li>Rehab packages: variable; plan recurring sessions plus at-home work.</li>
            <li>JPS/TPO/DPO/FHO/THR: ranges from lower four figures to well into five figures depending on procedure and region.</li>
          </ul>
          <p className="mb-3">
            Recovery ranges from several weeks of restricted activity (osteotomies, THR) to earlier functional improvement with FHO (when rehab is rigorous). Expect leash-only bathroom breaks early, crate or pen rest, progressive rehab milestones, and recheck imaging when indicated.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a <em>recovery calendar</em> with pain-score check-ins, gram-based feeding notes, and rehab homework so every caregiver replicates the same plan.
          </div>
        </section>

        {/* HOME SOPs */}
        <section id="home-sops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home SOPs &amp; Checklists (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Care SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning: brief leash potty → <strong>sniff walk</strong> 10–20 min on non-slip route.</li>
            <li>Meals measured in grams; treat budget pre-set (≤10% of calories).</li>
            <li>Midday: 10–15 min rehab set (sit-to-stand ladders, cavaletti at low height).</li>
            <li>Evening: gentle walk or underwater treadmill/swim if prescribed.</li>
            <li>Two formal <strong>rest blocks</strong> daily (quiet room, white noise or fan).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Environment SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Non-slip runners on hallways and turn zones; block slick stairs until traction is added.</li>
            <li>Use ramps for car entry; lift with harness assist if needed.</li>
            <li>Orthopedic bed in a low-traffic, draft-free location; maintain comfortable room temperature.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Medication &amp; Monitoring SOP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Keep a med chart with drug name, dose, times, and &quot;okay to give with food&quot; notes.</li>
            <li>Log daily <strong>pain score</strong> (0–10), appetite, stool quality, and activity notes.</li>
            <li>Schedule rechecks exactly as advised; report any vomiting, melena, lethargy, or sudden lameness immediately.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Boarding/Daycare Handoff</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Provide the hip-care SOP, med list, and approved activities (no high jumps or slippery floors).</li>
            <li>Request <strong>structured play</strong> and quiet rest intervals; ask staff to note any limping or reluctance to rise.</li>
            <li>Send measured meals and joint-support diet instructions; include harness for assisted mobility.</li>
          </ul>
        </section>

        {/* PREVENTION */}
        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Prevention: Stack the Odds Now</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Breeder due diligence:</strong> choose lines with hip screening (OFA or PennHIP) and transparent health histories.</li>
            <li><strong>Puppy growth plan:</strong> large-breed puppy formula; steady growth, no overfeeding.</li>
            <li><strong>Surface engineering:</strong> traction from day one; minimize slips on tile/wood.</li>
            <li><strong>Activity shaping:</strong> avoid repetitive jumping and sliding games; build muscle with controlled walks and hill work.</li>
            <li><strong>Weight discipline:</strong> use a kitchen scale for meals; reweigh monthly during growth and quarterly in adulthood.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your puppy&apos;s growth curve and food grams in Petunia. Share with sitters so the plan stays consistent when you travel.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can a dog with hip dysplasia live a normal life?</strong><br />
            Many do. The combination of lean body weight, smart activity design, household traction, pain control, and rehab can preserve excellent quality of life. Surgery is reserved for cases where conservative care no longer controls pain or function.
          </p>

          <p className="mb-3">
            <strong>Is swimming always good for hip dysplasia?</strong><br />
            Often, yes—buoyancy reduces load while building muscle. Some dogs are anxious or over-aroused in water; underwater treadmill offers more control. Dry thoroughly and monitor ears and skin after wet sessions.
          </p>

          <p className="mb-3">
            <strong>Which supplement actually helps?</strong><br />
            Omega-3s (EPA/DHA) have the most consistent evidence for OA comfort. Other supplements may help individual dogs but have mixed study results. Discuss brand quality and dosing with your veterinarian.
          </p>

          <p className="mb-3">
            <strong>Will weight loss really make a difference?</strong><br />
            Yes—joint load is highly sensitive to body mass. Even modest weight reduction can yield large improvements in comfort and mobility.
          </p>

          <p className="mb-0">
            <strong>How do I know it&apos;s time to consider surgery?</strong><br />
            Patterns to watch: persistent pain despite optimized meds and rehab, major activity restrictions that harm quality of life, or imaging that suggests a procedure could materially improve hip mechanics. A surgical consult can outline realistic outcomes for your dog.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American College of Veterinary Surgeons (ACVS). Hip Dysplasia—client education.{' '}
              <a
                href="https://www.acvs.org/small-animal/hip-dysplasia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.acvs.org/small-animal/hip-dysplasia/
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip &amp; elbow evaluations.{' '}
              <a
                href="https://ofa.org/diseases/hip-dysplasia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ofa.org/diseases/hip-dysplasia/
              </a>
            </li>
            <li>
              PennHIP. Distraction Index &amp; early screening information for breeders and owners.{' '}
              <a
                href="https://antechimagingservices.com/pennhip/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://antechimagingservices.com/pennhip/
              </a>
            </li>
            <li>
              AAHA/WSAVA resources on canine life-stage care and nutrition (BCS, weight management, omega-3s).{' '}
              <a
                href="https://www.aaha.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.aaha.org/
              </a>{' '}
              |{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              MSD/Merck Veterinary Manual. Osteoarthritis and analgesia in dogs—owner &amp; professional pages.{' '}
              <a
                href="https://www.merckvetmanual.com/dog-owners/bone-joint-and-muscle-disorders-of-dogs/osteoarthritis-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Owner overview
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian and qualified rehabilitation professionals for individualized guidance. Medication and supplement decisions must be made with your veterinary team.
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
