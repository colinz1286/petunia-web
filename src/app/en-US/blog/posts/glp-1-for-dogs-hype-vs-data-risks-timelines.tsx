'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Glp1ForDogsHypeVsDataRisksTimelinePlaybook() {
  const locale = useLocale();

  const title =
    'GLP-1 for Dogs: Hype vs Data, Risks, Timelines & a Vet-Guided Weight-Loss Playbook';
  const date = 'September 1, 2025';
  const categories = ['owner', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="GLP-1 weight-management drugs for dogs are getting attention thanks to an under-skin implant (OKV-119) in development. Here is a balanced, evidence-based guide: what GLP-1 does, the state of the science, real timelines, safety questions, FDA paths, off-label rules, and a proven weight-loss plan that boarding/daycare operators and owners can implement today."
        />
        <meta name="robots" content="all" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          If you have seen headlines about so-called &ldquo;Ozempic-style&rdquo; drugs for pets, you are seeing early
          coverage of a class of medications called GLP-1 receptor agonists. In people, these drugs lower appetite,
          slow stomach emptying, and improve blood-sugar control. In veterinary medicine, GLP-1 treatments are being
          explored for cats and dogs with excess weight or diabetes. The most talked-about veterinary candidate right
          now is an under-skin, months-long implant that delivers exenatide, a GLP-1 analogue. You will see it referred
          to in company materials as OKV-119. The promise is fewer injections and steadier dosing; the reality is that
          companion-animal approvals take time, safety must come first, and diet-plus-activity remains the foundation
          whether a drug is used or not.
        </p>

        <p className="mb-6">
          This long-form guide does three things. First, it translates the science of GLP-1 into plain English for dog
          owners. Second, it cuts through the hype with timelines and regulatory context so you can calibrate
          expectations. Third, it gives you a pragmatic, vet-aligned weight-loss playbook that boarding/daycare
          operators and families can start today without waiting for a new prescription product.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (What Most Owners Want To Know)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>What GLP-1 does:</strong> GLP-1 receptor agonists reduce hunger signals, slow stomach emptying,
            and support insulin function. In dogs and cats, research suggests similar mechanisms to people.
          </li>
          <li>
            <strong>What is in the news:</strong> An exenatide implant designed for months-long delivery is being
            developed for pets. Public coverage in mid-2025 points to a multi-year path before broad availability.
          </li>
          <li>
            <strong>What is proven today:</strong> No GLP-1 product is fully approved in the United States
            specifically for canine weight loss at the time of writing. Evidence in pets is growing, especially for
            cats, and early dog studies are emerging.
          </li>
          <li>
            <strong>Who might benefit when available:</strong> Dogs with obesity that have failed well-run diet and
            activity plans, or dogs with certain metabolic conditions, may be candidates—if a veterinarian decides the
            benefits outweigh risks for that individual.
          </li>
          <li>
            <strong>What to do now:</strong> Use a structured program with body-condition scoring, calorie targets,
            and a safe weekly loss of about 1–2% of body weight, with frequent weigh-ins. This improves lifespan and
            mobility and often removes the need for medication.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — GLP-1, Explained For Dog Owners</h2>
        <p className="mb-4">
          GLP-1 stands for glucagon-like peptide-1, a hormone released by the intestine after meals that helps regulate
          appetite and glucose. A GLP-1 receptor agonist is a molecule that binds to the same receptor and amplifies
          those effects. In practice, that means dogs feel full sooner, eat less, and experience steadier blood-sugar
          dynamics. Because natural GLP-1 breaks down quickly, drug developers use analogues or delivery systems to
          keep the signal active longer. In people, that can mean weekly injections; in veterinary development, one
          approach under study is a small implant under the skin that releases medication for months.
        </p>

        <p className="mb-4">
          Why does this matter? Excess weight is one of the most common health problems seen in small-animal practice,
          linked to osteoarthritis, reduced mobility, diabetes risk in some breeds, and shorter lifespans. The most
          powerful &ldquo;drug&rdquo; is still calorie control and activity. But for a subset of patients who consistently
          fail programs despite owner effort, an appetite-modulating therapy might help reach and maintain a healthy
          body condition. It is not a shortcut; it is a tool that <em>could</em> be layered onto a program when a
          veterinarian judges it appropriate and safe.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">The difference between &ldquo;weigh less&rdquo; and &ldquo;live better&rdquo;</h3>
        <p className="mb-6">
          Owners often target a number on a scale. Clinically, we target function: easier rising, longer comfortable
          walks, fewer pain flares, improved stamina, and healthier lab values. GLP-1 therapies, if and when approved
          for dogs, should be framed as helpers toward those functional goals—not cosmetic tools. A smart plan preserves
          lean muscle and joint comfort while gradually reducing fat mass.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — What Exactly Is Being Developed?</h2>
        <p className="mb-4">
          The veterinary asset drawing attention is an implant designed to release the GLP-1 analogue exenatide for
          months per dose. Company materials describe versions that have been studied in cats and are being extended to
          dogs for obesity and metabolic health. In cats, peer-reviewed data have shown meaningful weight change with
          controlled delivery. In dogs, public updates indicate an expansion of research programs and collaboration
          agreements, with consumer press speculating on availability in several years if studies go well.
        </p>

        <p className="mb-6">
          Two takeaways for owners: first, development milestones do not equal approval. Second, an implant is a very
          different owner experience than a weekly pen—it trades self-administration for an in-clinic placement every
          few months. That can help adherence, but it also concentrates decision-making around monitoring, dose
          adjustment, and removal if adverse effects arise. Your veterinarian will judge whether that trade-off makes
          sense for your dog when and if a product becomes available.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — What Does The Evidence Say So Far?</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">A) Physiology and cross-species evidence</h3>
        <p className="mb-4">
          GLP-1 biology is highly conserved across mammals, and experimental work in dogs and cats shows effects on
          insulin secretion, satiety, and gastric emptying. In feline studies, exenatide and other GLP-1 analogues have
          reduced insulin needs in diabetic cats and have supported weight reduction under veterinary supervision. Early
          canine data suggest similar directions, though high-quality, larger dog studies specific to long-term weight
          management remain limited in the public domain and should expand as development advances.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">B) Safety signals to watch</h3>
        <p className="mb-4">
          In people, the class is best known for gastrointestinal side effects (nausea, decreased appetite, vomiting),
          most of which are dose-related and transient. In veterinary patients, clinicians will watch for the same
          issues plus dehydration risk if vomiting persists, constipation in some dogs, and rare events such as
          pancreatitis in predisposed animals. Long-term effects on lean mass and bone density are active areas of
          research in human medicine; veterinary teams will monitor canine muscle condition scores during any program to
          avoid trading fat loss for muscle loss.
        </p>

        <p className="mb-6">
          Bottom line: the class is promising, but dog-specific safety and effectiveness must be shown by phase-appropriate
          studies. That takes time, and it is why you should be wary of shortcuts or compounded look-alikes that are not
          supported by a veterinarian and do not follow federal guidance.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 4 — Approvals, Conditional Approvals &amp; Why Timelines Are Long</h2>
        <p className="mb-4">
          In the United States, new animal drugs reach the market after a formal submission and review that prove safety,
          effectiveness, manufacturing quality, and labeling. Sponsors may also seek a conditional pathway, limited in
          scope, that allows earlier marketing for certain serious conditions while the company completes remaining
          effectiveness work. Whether a canine weight-management indication qualifies for such a pathway depends on how
          regulators interpret severity, unmet need, and study complexity. Sponsors work directly with CVM project
          managers to decide the right route and evidence package.
        </p>

        <p className="mb-6">
          This is why consumer press often quotes timelines of several years. Even under the most optimistic scenario,
          data must show that a specific dose, in a defined population, produces predictable benefits that outweigh
          risks. For owners, the practical translation is simple: plan your dog&rsquo;s health around proven tools you can
          use today and treat any future drug as a potential adjunct, not a silver bullet.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 5 — Off-Label Use &amp; Compounding: What The Rules Actually Say</h2>
        <p className="mb-4">
          U.S. law permits veterinarians to prescribe an approved human or animal drug for an extra-label use under a
          valid veterinarian-client-patient relationship when certain conditions are met. That does not mean anything
          goes; it means your veterinarian must make a medical judgment that no approved alternative fits your dog, keep
          proper records, and provide directions and monitoring. Separately, the FDA has published guidance on when it
          will and will not exercise enforcement discretion for animal drugs compounded from bulk substances. The
          guidance is strict: compounded drugs are not FDA-approved and may be considered only when no approved option
          can meet the patient&rsquo;s needs. If someone offers a compounded &ldquo;pet sema&rdquo; without clear veterinary
          oversight, walk away.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <p className="font-semibold mb-2">Reality check:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Extra-label prescriptions require a veterinarian&rsquo;s direct involvement and documentation. Internet sales
              without a relationship to your dog&rsquo;s doctor do not meet that standard.
            </li>
            <li>
              Compounded copies are not the same as an approved drug. Quality, dose uniformity, and stability can vary,
              and adverse-event reporting is weaker. Use only when your veterinarian judges it medically necessary.
            </li>
            <li>
              If a long-acting implant is approved for dogs in the future, it will come with a label, a dosing plan, and
              monitoring instructions. Follow them exactly and report any side effects immediately.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 6 — Why Weight Loss Still Starts With Food, Movement &amp; Monitoring</h2>
        <p className="mb-4">
          The most robust canine longevity data come not from a pill but from controlled feeding. In a landmark,
          multi-year paired study of Labrador retrievers, dogs fed fewer calories lived longer, developed chronic disease
          later, and maintained better mobility. Numerous orthopedic and epidemiologic studies connect excess weight with
          osteoarthritis development and pain. Every pound matters to joints; small reductions produce outsized quality-of-life
          gains.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">A) Body-condition scoring (BCS) and muscle-condition scoring (MCS)</h3>
        <p className="mb-4">
          Your veterinary team will assess BCS on a 1–9 or 1–5 scale and MCS separately. These tools are more accurate
          than eyeballing because they focus on ribs, waist, abdominal tuck, and palpable landmarks. Aim for a BCS of
          roughly 4–5 out of 9 (or 2.5–3 out of 5) unless your veterinarian specifies otherwise for a concurrent
          condition.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">B) Calorie targets</h3>
        <p className="mb-4">
          A practical starting point for many adult dogs is to feed a therapeutic weight-management diet at about
          60–70% of maintenance calories, then adjust to achieve a safe weekly loss. High-protein, nutrient-dense diets
          help protect lean tissue during calorie restriction. Your veterinarian will set the exact target based on
          ideal weight, BCS/MCS, activity, and medical history.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <p className="font-semibold mb-2">Safe rate of loss:</p>
          <p>
            Most veterinary guidelines aim for about <strong>1–2% of body weight per week</strong> for dogs. Faster is
            rarely better and can increase lean-mass loss or trigger rebound regain.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">C) Movement plan</h3>
        <p className="mb-4">
          Build activity that joints can tolerate consistently: multiple short walks, underwater treadmill if prescribed,
          controlled fetch on soft surfaces, and low-impact strength work like sit-to-stand reps. If your dog has pain,
          your veterinarian may add analgesics, joint diets, or physical-rehab referrals. Do not &ldquo;out-exercise&rdquo; a
          calorie surplus; movement supports weight work, it does not replace it.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">D) Follow-up cadence</h3>
        <p className="mb-6">
          Re-weigh every two to four weeks at first. Adjust calories by 5–10% when loss stalls or when your dog loses
          faster than the safe range. Expect plateaus; they are normal. Celebrate non-scale wins: easier stairs, better
          play, calmer skin folds, lower resting heart rate. These improvements reinforce owner adherence better than
          numbers alone.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 7 — A 10-Step, Vet-Aligned Weight-Loss Program You Can Start Today
        </h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Get a baseline exam.</strong> Ask for BCS, MCS, a goal weight, and any lab work your veterinarian
            thinks appropriate (for example, thyroid in breeds at risk).
          </li>
          <li>
            <strong>Choose a therapeutic diet.</strong> These formulas are fortified so calorie cuts do not cause
            micronutrient gaps. Ask for grams-per-meal, not cups; weigh food on a kitchen scale.
          </li>
          <li>
            <strong>Set a treat budget.</strong> Keep extras under ten percent of daily calories. Pre-portion treats for
            the day so family and staff cannot over-give.
          </li>
          <li>
            <strong>Pick movement that joints tolerate.</strong> Multiple short sessions beat weekend warrior bursts.
            Log minutes so progress is visible.
          </li>
          <li>
            <strong>Trim the environment.</strong> Use slow-feed bowls or puzzle feeders for fast eaters; feed other pets
            in separate spaces; block access to dropped food in the kitchen.
          </li>
          <li>
            <strong>Weigh-ins.</strong> Every two to four weeks initially. Photograph stance from the side and above to
            visualize body-shape change.
          </li>
          <li>
            <strong>Adjust gently.</strong> If loss is slower than 1% per week after four to six weeks, reduce calories
            by 5–10% or add another short walk. If faster than 2% per week, nudge calories up to protect lean mass.
          </li>
          <li>
            <strong>Pain control when needed.</strong> Excess weight worsens osteoarthritis; medical pain control and
            rehab can unlock activity and make weight work possible.
          </li>
          <li>
            <strong>Maintenance plan.</strong> When you reach goal, increase calories in small steps while keeping
            weigh-ins monthly for the first six months. Many dogs need a permanent modest calorie reduction compared to
            their pre-program intake.
          </li>
          <li>
            <strong>Consider pharmacology <em>only</em> when appropriate.</strong> If a future GLP-1 therapy is approved
            for dogs, your veterinarian may recommend it for stubborn cases. Medication without the nine steps above
            will disappoint.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 8 — A Practical SOP For Boarding &amp; Daycare Operators</h2>
        <p className="mb-4">
          Facilities can be powerful allies in safe weight management. Clients often struggle at home; structured staff
          routines add consistency and accountability. Here is a practical standard operating procedure you can adopt:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d9cfc2]">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-2">Area</th>
                <th className="text-left p-2">Best Practice</th>
                <th className="text-left p-2">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Intake</td>
                <td className="p-2">
                  Record BCS/MCS from client&rsquo;s veterinarian if available; otherwise trained staff perform a
                  screening BCS for internal tracking only.
                </td>
                <td className="p-2">Creates a baseline and a shared vocabulary with the clinic.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Feeding</td>
                <td className="p-2">
                  Serve owner-provided meals weighed in grams; track leftovers; keep a &ldquo;treat budget&rdquo; log signed by
                  staff.
                </td>
                <td className="p-2">Removes guesswork and accidental extra calories.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Activity</td>
                <td className="p-2">
                  Match playgroup level to joint tolerance; prioritize short, frequent sessions; rotate enrichment
                  puzzles; note any limping or fatigue.
                </td>
                <td className="p-2">Supports calorie work while minimizing flare-ups.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Communication</td>
                <td className="p-2">
                  Send a weekly progress note with photos; escalate to the veterinarian if intake changes, vomiting,
                  diarrhea, or pain appear.
                </td>
                <td className="p-2">Keeps the owner engaged and flags problems early.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Medication</td>
                <td className="p-2">
                  If a dog is on any weight-related medication now or in the future, require a written dosing plan and
                  adverse-event contact from the prescribing clinic.
                </td>
                <td className="p-2">Protects staff and pets while maintaining a clear chain of care.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            GLP-1 receptor agonists reduce hunger signals and may help selected dogs as part of a structured
            veterinarian-led program. The most discussed veterinary candidate is a months-long exenatide implant.
          </li>
          <li>
            Public timelines point to a multi-year path before broad access. Regulatory review requires dog-specific
            safety, effectiveness, and quality.
          </li>
          <li>
            U.S. law allows extra-label prescribing under strict conditions and with a valid veterinarian-client-patient
            relationship. Be cautious with compounded look-alikes outside veterinary supervision.
          </li>
          <li>
            The best-proven way to add healthy years is still controlled feeding, movement, and regular monitoring—aim
            for about 1–2% body-weight loss per week unless your veterinarian advises otherwise.
          </li>
          <li>
            Boarding/daycare operators can be strong partners by standardizing weighed meals, activity logs, and
            communication back to the clinic.
          </li>
        </ul>

        {/* Sources */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Selected Sources &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10 text-sm">
          <li>
            Association for Pet Obesity Prevention prevalence summaries (U.S.).{' '}
            <a
              className="underline"
              href="https://www.petobesityprevention.org/2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              petobesityprevention.org/2022
            </a>
            .
          </li>
          <li>
            AAHA Nutrition &amp; Weight Management Guidelines (2021) and related resources.{' '}
            <a
              className="underline"
              href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/home/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaha.org
            </a>{' '}
            · PDF resource:{' '}
            <a
              className="underline"
              href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/new-2021-aaha-nutrition-and-weight-management-guidelines-with-ref.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              guideline PDF
            </a>
            .
          </li>
          <li>
            FDA CVM overview of New Animal Drug Applications (NADA) and conditional approval resources.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/development-approval-process/new-animal-drug-applications"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov — NADA overview
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/resources-you/conditional-approval-explained-resource-veterinarians"
              target="_blank"
              rel="noopener noreferrer"
            >
              conditional approval explainer
            </a>
            .
          </li>
          <li>
            AMDUCA and FDA guidance on extra-label use &amp; compounding for animals.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/resources-you/ins-and-outs-extra-label-drug-use-animals-resource-veterinarians"
              target="_blank"
              rel="noopener noreferrer"
            >
              extra-label use
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cvm-gfi-256-compounding-animal-drugs-bulk-drug-substances"
              target="_blank"
              rel="noopener noreferrer"
            >
              GFI #256
            </a>
            .
          </li>
          <li>
            Exenatide GLP-1 implant development updates for companion animals (company materials and trade coverage).{' '}
            <a
              className="underline"
              href="https://investors.vivani.com/investors/news-events/press-releases/detail/191/vivani-medical-and-okava-expand-collaboration-to-develop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vivani press release
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://okava.com/news/okavas-announces-publication-of-okv-119-a-drug-delivery-system-under-development-for-feline-obesity-and-diabetes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Okava research note
            </a>
            .
          </li>
          <li>
            Peer-reviewed and academic references on GLP-1 in dogs and cats and on obesity outcomes: canine longevity
            under calorie restriction; osteoarthritis risk; weight-loss rate targets.{' '}
            <a
              className="underline"
              href="https://pubmed.ncbi.nlm.nih.gov/11991408/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kealy et&nbsp;al., 2002 (lifespan under restriction)
            </a>
            ;{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8966211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Model et&nbsp;al., 2022 (GLP-1 physiology in dogs/cats)
            </a>
            ;{' '}
            <a
              className="underline"
              href="https://www.nature.com/articles/s41598-018-23940-z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anderson et&nbsp;al., 2018 (OA epidemiology)
            </a>
            ;{' '}
            <a
              className="underline"
              href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/weight-management/2014-AAHA-Weight-Management-Guidelines-for-Dogs-and-Cats"
              target="_blank"
              rel="noopener noreferrer"
            >
              AAHA 2014 weight-management guideline
            </a>
            .
          </li>
          <li>
            Recent consumer coverage synthesizing timelines and market context for veterinary GLP-1.{' '}
            <a
              className="underline"
              href="https://www.theguardian.com/lifeandstyle/2025/aug/17/puppy-fat-jabs-are-our-pets-next-in-line-for-weight-loss-drugs"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Guardian
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://www.thetimes.co.uk/article/dog-weight-loss-drugs-rqtwvhl90"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Times (UK)
            </a>
            .
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article provides general education and is not medical advice. Always consult your
          veterinarian, follow current FDA and state regulations, and review the label of any
          approved product for dogs before use.
        </p>
      </main>
    </>
  );
}
