'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowVetsDiagnoseHipDysplasia() {
  const locale = useLocale();

  const title =
    'How Veterinarians Diagnose Hip Dysplasia in Dogs: Exams, X-Rays, PennHIP, OFA, and What Results Mean';
  const date = 'December 27, 2025';

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

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-diagnosis-means" className="underline hover:opacity-80">
                What Diagnosis Really Means
              </a>
            </li>
            <li>
              <a href="#history" className="underline hover:opacity-80">
                History &amp; Symptom Timeline
              </a>
            </li>
            <li>
              <a href="#physical-exam" className="underline hover:opacity-80">
                Physical &amp; Orthopedic Exam
              </a>
            </li>
            <li>
              <a href="#differentials" className="underline hover:opacity-80">
                Rule-Outs &amp; Look-Alikes
              </a>
            </li>
            <li>
              <a href="#x-rays" className="underline hover:opacity-80">
                X-Rays, Positioning, and Sedation
              </a>
            </li>
            <li>
              <a href="#ofa-vs-pennhip" className="underline hover:opacity-80">
                OFA vs PennHIP
              </a>
            </li>
            <li>
              <a href="#grading" className="underline hover:opacity-80">
                What Vets Measure and Grade
              </a>
            </li>
            <li>
              <a href="#advanced-imaging" className="underline hover:opacity-80">
                Advanced Imaging and Special Tests
              </a>
            </li>
            <li>
              <a href="#what-you-get" className="underline hover:opacity-80">
                What You Should Leave With
              </a>
            </li>
            <li>
              <a href="#questions" className="underline hover:opacity-80">
                Questions to Ask Your Vet
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources (Selected)
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Veterinarians diagnose hip dysplasia by combining a <strong>symptom timeline</strong>, a hands-on{' '}
            <strong>orthopedic exam</strong>, and properly positioned <strong>hip radiographs</strong> (X-rays) that
            evaluate hip shape and arthritis. In many cases, vets also assess <strong>hip laxity</strong> (looseness)
            using specialized methods such as <strong>PennHIP</strong>. The goal is not just to label a condition, but
            to determine <strong>how severe it is</strong>, what else might be contributing, and which treatment path
            makes the most sense for your dog&rsquo;s life stage.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key point:</strong> A dog can have hip dysplasia on X-rays but show few symptoms, and a dog can show
            symptoms that look like hip dysplasia but actually come from the knee, spine, or muscles. Diagnosis is about
            matching the imaging to the real-world problem.
          </div>
        </section>

        {/* What diagnosis means */}
        <section id="what-diagnosis-means" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &ldquo;Diagnosis&rdquo; Really Means in Practice</h2>
          <p className="mb-4">
            When a veterinarian says a dog has hip dysplasia, they are describing a <strong>developmental mismatch</strong>{' '}
            between the femoral head (ball) and acetabulum (socket) that leads to abnormal motion, inflammation, and
            often osteoarthritis over time.
          </p>
          <p className="mb-4">
            Practically, your vet is trying to answer three questions:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Is the hip joint abnormal in a way consistent with dysplasia?</strong>
            </li>
            <li>
              <strong>Is that abnormality causing your dog&rsquo;s pain or functional problem right now?</strong>
            </li>
            <li>
              <strong>What is the best next step</strong> given age, activity, severity, and household realities?
            </li>
          </ul>
          <p className="mb-0">
            If you want the broader, complete life-care plan (home setup, rehab, medication strategy, and surgical
            options), this diagnostic guide is designed to plug into our pillar article:{' '}
            <Link
              href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`}
              className="underline font-medium hover:opacity-80"
            >
              Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
            </Link>
            .
          </p>
        </section>

        {/* History */}
        <section id="history" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step 1: History and Symptom Timeline</h2>
          <p className="mb-4">
            The history you provide is diagnostic data. A strong veterinary workup starts with very specific questions,
            because hip discomfort often appears as a pattern rather than a single obvious injury.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>When did you first notice a change?</strong> (Weeks? Months? Since puppyhood?)
            </li>
            <li>
              <strong>What triggers symptoms?</strong> (After play, after rest, on stairs, on slippery floors)
            </li>
            <li>
              <strong>What improves symptoms?</strong> (Warm-up, rest, NSAIDs, shorter walks)
            </li>
            <li>
              <strong>Which activities changed?</strong> (Jumping into car, fetch endurance, longer hikes)
            </li>
            <li>
              <strong>Any &ldquo;near misses&rdquo;?</strong> Slips on tile, falls, awkward landings
            </li>
            <li>
              <strong>Current body weight and body condition score</strong> (and any recent weight changes)
            </li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Helpful prep:</strong> Bring two short videos on your phone: one walking toward and away from the
            camera on a flat surface, and one trotting. Vets can learn a lot from gait footage, especially when symptoms
            come and go.
          </div>
        </section>

        {/* Physical Exam */}
        <section id="physical-exam" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step 2: Physical and Orthopedic Exam</h2>
          <p className="mb-4">
            A good exam checks the entire kinetic chain. Hip pain can look like knee pain, spinal pain, or muscle pain.
            Your vet may assess:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Gait:</strong> walking, trotting, turning, backing up (sometimes on different surfaces)
            </li>
            <li>
              <strong>Muscle symmetry:</strong> thigh and glute strength on both sides (atrophy is common with chronic pain)
            </li>
            <li>
              <strong>Range of motion:</strong> hip extension and flexion, plus pain or resistance at end range
            </li>
            <li>
              <strong>Palpation:</strong> tenderness over hip, lower back, iliopsoas muscles
            </li>
            <li>
              <strong>Spine and neurologic screen:</strong> to rule out lumbosacral issues
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Ortolani and Laxity Tests</h3>
          <p className="mb-4">
            In younger dogs, vets may attempt maneuvers that suggest hip laxity, such as the Ortolani test. These tests
            are often more reliable under sedation and are highly dependent on the dog&rsquo;s comfort and muscle tension.
          </p>

          <p className="mb-0">
            The exam identifies whether the hip is the likely pain generator, and it helps determine what imaging views
            are needed and whether referral is appropriate.
          </p>
        </section>

        {/* Differentials */}
        <section id="differentials" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step 3: Rule-Outs and Look-Alikes</h2>
          <p className="mb-4">
            Not every rear-limb problem is hip dysplasia. A careful diagnostic approach considers other common causes of
            similar symptoms:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Cruciate ligament disease:</strong> knee pain can mimic hip discomfort and change gait patterns
            </li>
            <li>
              <strong>Patellar luxation:</strong> especially in small breeds, causes intermittent skipping
            </li>
            <li>
              <strong>Lumbosacral disease:</strong> spinal pain and nerve compression can look like hind-end weakness
            </li>
            <li>
              <strong>Iliopsoas strain:</strong> painful hip extension and reluctance to jump
            </li>
            <li>
              <strong>Trauma or fractures:</strong> especially if symptoms started suddenly
            </li>
            <li>
              <strong>Inflammatory joint disease:</strong> less common, but part of a full differential list
            </li>
          </ul>
          <p className="mb-0">
            This is why a diagnosis typically requires both a hands-on exam and imaging. Treating the wrong body part is
            one of the easiest ways to lose time and money while your dog stays uncomfortable.
          </p>
        </section>

        {/* X-rays */}
        <section id="x-rays" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step 4: X-Rays, Positioning, and Why Sedation Matters</h2>
          <p className="mb-4">
            Radiographs are the backbone of hip dysplasia diagnosis. The catch is that hip films must be positioned
            correctly. Poor positioning can make a normal hip look abnormal or hide dysplasia that is present.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Why Sedation Is Common</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Comfort:</strong> a painful dog will tense muscles, altering hip alignment
            </li>
            <li>
              <strong>Precision:</strong> accurate positioning requires relaxation to extend and rotate legs properly
            </li>
            <li>
              <strong>Safety:</strong> reduces stress and prevents struggling or injury during positioning
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What &ldquo;Good Hip Films&rdquo; Typically Include</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Pelvis level and symmetrical</li>
            <li>Femurs extended with appropriate inward rotation</li>
            <li>Clear visualization of both femoral heads and acetabula</li>
            <li>Minimal motion blur and proper exposure</li>
          </ul>

          <p className="mb-0">
            Your veterinarian may take additional views depending on exam findings, especially if they are concerned
            about knees, spine, or other joints.
          </p>
        </section>

        {/* OFA vs PennHIP */}
        <section id="ofa-vs-pennhip" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">OFA vs PennHIP: What They Measure and When They Matter</h2>
          <p className="mb-4">
            Owners often hear &ldquo;OFA&rdquo; and &ldquo;PennHIP&rdquo; and assume they are competing brands of the same
            test. They are related, but they answer different questions.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">OFA (Orthopedic Foundation for Animals)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Focuses on hip conformation and secondary arthritis changes on a standard extended hip view.
            </li>
            <li>
              Most meaningful when the dog is closer to skeletal maturity, because arthritis and bone shape evolve.
            </li>
            <li>
              Commonly used for breeding decisions and documentation within breed communities.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">PennHIP</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Quantifies <strong>passive hip laxity</strong> using specialized positioning and a distraction device.
            </li>
            <li>
              Produces a <strong>Distraction Index</strong> that estimates how loose the hip is under controlled force.
            </li>
            <li>
              Can be performed in young dogs (often cited as early as 16 weeks by trained providers), which can be useful
              for early planning and breeder decisions.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Owner takeaway:</strong> If your dog is young and you want to understand laxity risk early, PennHIP
            may add valuable information. If your dog is older and already showing arthritis, your vet may focus more on
            radiographic arthritis changes and function.
          </div>
        </section>

        {/* Grading */}
        <section id="grading" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Vets Measure and Grade on Imaging</h2>
          <p className="mb-4">
            Hip dysplasia imaging interpretation is not just &ldquo;normal&rdquo; versus &ldquo;abnormal.&rdquo; Vets and
            radiologists look for multiple features that describe both structure and disease progression.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Structural Fit and Coverage</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>How well the femoral head sits in the socket</li>
            <li>How deep the acetabulum appears</li>
            <li>Signs of subluxation (partial displacement)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Arthritis and Remodeling</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Osteophytes (bone spurs) and thickening around the joint</li>
            <li>Changes in femoral head shape (flattening, irregularity)</li>
            <li>Socket edge remodeling</li>
            <li>Narrowing of the joint space (harder to assess precisely on standard radiographs)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Function Still Matters</h3>
          <p className="mb-0">
            Some dogs with impressive arthritis on imaging still function surprisingly well, while others with milder
            X-ray changes struggle. Diagnosis should always translate into a clear plan: weight targets, activity
            design, rehab, pain control, and follow-up checkpoints.
          </p>
        </section>

        {/* Advanced imaging */}
        <section id="advanced-imaging" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Advanced Imaging and Special Tests: When X-Rays Are Not Enough</h2>
          <p className="mb-4">
            Most hip dysplasia cases do not require CT or MRI. However, advanced tools can help when symptoms do not
            match X-ray findings, or when a specialist needs extra detail for a complex plan.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>CT:</strong> may clarify complex pelvic anatomy, surgical planning, or subtle bony detail
            </li>
            <li>
              <strong>MRI:</strong> more useful for soft tissue and spinal concerns than routine hip dysplasia grading
            </li>
            <li>
              <strong>Ultrasound:</strong> sometimes used for muscle and tendon evaluation (such as iliopsoas)
            </li>
            <li>
              <strong>Force-plate gait analysis:</strong> specialized objective measurement for rehab tracking
            </li>
            <li>
              <strong>Diagnostic injections:</strong> in some scenarios, targeted pain-relief injections help identify
              the primary pain source
            </li>
          </ul>

          <p className="mb-0">
            For many owners, the more relevant &ldquo;advanced&rdquo; step is a referral to a board-certified surgeon or
            rehabilitation specialist when the plan is not working.
          </p>
        </section>

        {/* What you should leave with */}
        <section id="what-you-get" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What You Should Leave the Appointment With</h2>
          <p className="mb-4">
            A strong diagnostic visit should end with clarity, not vague uncertainty. Before you leave, you should know
            what the findings mean and what you are doing next.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              A plain-English summary of whether hip dysplasia is present and how confident the vet is
            </li>
            <li>
              Whether arthritis is present, and whether it looks mild, moderate, or advanced
            </li>
            <li>
              The top alternative diagnoses that were considered and why they were ruled in or out
            </li>
            <li>
              A written plan for the next 2 to 8 weeks (exercise rules, weight targets, meds, rehab homework)
            </li>
            <li>
              A follow-up checkpoint with a specific date or timeframe
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical tip:</strong> If you feel overwhelmed, ask your vet for the plan in three lines: (1) what
            is happening, (2) what we are doing now, (3) what would trigger the next escalation.
          </div>
        </section>

        {/* Questions */}
        <section id="questions" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask Your Veterinarian</h2>
          <p className="mb-4">
            These questions help you translate a diagnosis into a clear, workable plan for your household.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Which finding on exam or imaging makes you most confident this is hip dysplasia?</li>
            <li>How much of my dog&rsquo;s discomfort seems hip-driven versus knee, spine, or muscle?</li>
            <li>Is sedation recommended for imaging, and why?</li>
            <li>Do you recommend OFA-style films, PennHIP, or standard diagnostic radiographs for my dog&rsquo;s age and goals?</li>
            <li>What is the next best step for the next 30 days (weight, exercise rules, rehab, meds)?</li>
            <li>What would make you refer us to a surgeon or rehabilitation specialist?</li>
            <li>How will we measure progress (pain score, activity minutes, recheck timing)?</li>
          </ul>

          <p className="text-xs text-gray-600">
            Educational content only. Diagnosis and treatment should be made with your veterinary team based on your dog&rsquo;s
            exam findings, history, and imaging.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American College of Veterinary Surgeons (ACVS). Canine Hip Dysplasia (client education).
              <span className="ml-1">(acvs.org)</span>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). Hip Dysplasia and Hip Evaluation resources.
              <span className="ml-1">(ofa.org)</span>
            </li>
            <li>
              PennHIP. Distraction Index and hip laxity screening information.
              <span className="ml-1">(pennhip.org / Antech Imaging Services pages)</span>
            </li>
            <li>
              AAHA. Canine pain management and life-stage guidance resources.
              <span className="ml-1">(aaha.org)</span>
            </li>
            <li>
              WSAVA. Global nutrition guidelines and weight management resources.
              <span className="ml-1">(wsava.org)</span>
            </li>
            <li>
              Merck Veterinary Manual. Osteoarthritis in dogs (owner and professional references).
              <span className="ml-1">(merckvetmanual.com)</span>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian (and qualified orthopedic or rehabilitation
            professionals) for individualized recommendations. Medication and sedation decisions must be made with your
            veterinary team.
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
