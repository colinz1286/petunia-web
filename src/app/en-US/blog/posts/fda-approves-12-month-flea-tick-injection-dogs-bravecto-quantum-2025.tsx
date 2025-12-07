'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FdaApproves12MonthFleaTickInjectionDogsBravectoQuantum2025() {
  const locale = useLocale();

  const title =
    'FDA Approves the First 8–12-Month Flea & Tick Injection for Dogs (Bravecto Quantum): A Plain-English Guide for Owners & Boarding/Daycare Operators';
  const date = 'August 25, 2025';
  const categories = ['owner', 'boarding', 'vet'] as const;

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
          content="Bravecto Quantum is the first FDA-approved flea & tick injection for dogs that protects for 8–12 months. Learn what was approved, how it works, who is eligible, safety and side effects, vet Q&A, and cost comparisons vs. monthly or 12-week chews—written in plain English for owners and boarding/daycare operators."
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
          The U.S. Food &amp; Drug Administration has approved the first ever long-acting flea and
          tick injection for dogs—an extended-release form of fluralaner marketed as <em>Bravecto
          Quantum</em>. It is administered by a veterinarian and provides year-round protection
          against fleas and several major tick species with one shot, with one important caveat for
          lone star ticks. This is the most significant update to routine parasite prevention in a
          decade, and it is going to reshape how owners and boarding/daycare facilities plan their
          parasite policies.
        </p>

        <p className="mb-6">
          Below we break down what exactly was approved, which dogs are eligible, how it works and
          how fast it begins to kill fleas and ticks, known side effects and precautions, what the
          clinical studies showed, and how the costs compare to monthly or 12-week orals. Because
          this decision is brand-new, we also include a vet-style Q&amp;A and practical checklists
          for pet owners and facility operators to adopt the new option without disrupting current
          standards of care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>What is it?</strong> An extended-release fluralaner injection for dogs given by
            your veterinarian once every 12 months (8 months if your dog is at risk for lone star
            ticks).
          </li>
          <li>
            <strong>Who can get it?</strong> Dogs and puppies <strong>6 months of age and older</strong>.
            Dose is weight-based; it is suitable for dogs of all sizes (your vet draws 0.1&nbsp;mL/kg).
          </li>
          <li>
            <strong>What does it cover?</strong> Kills adult fleas and controls tick infestations
            from black-legged (deer) ticks, American dog ticks, and brown dog ticks for 12 months,
            and controls lone star ticks for 8 months.
          </li>
          <li>
            <strong>How fast does it work?</strong> Begins killing adult fleas within ~48 hours,
            and begins killing ticks within about 3–5 days depending on species. By one week, kill
            is rapid after attachment.
          </li>
          <li>
            <strong>Safety notes:</strong> Like other products in the isoxazoline class, rare
            neurologic events (tremors, ataxia, seizures) have been reported; talk to your
            veterinarian if your dog has a seizure history. Injection-site swelling or a small lump
            can occur and usually resolves.
          </li>
          <li>
            <strong>Availability:</strong> Prescription-only, administered in clinics. Rollout is
            expected nationwide in veterinary practices (subject to clinic supply and training).
          </li>
          <li>
            <strong>Cost positioning:</strong> Early U.S. clinic pricing appears to cluster around a
            single annual injection vs. 12 monthly doses or four 12-week chews. You will still need
            <em> separate</em> heartworm prevention because this product does not include it.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What Exactly Did the FDA Approve?</h2>
        <p className="mb-4">
          The FDA approved Bravecto Quantum (fluralaner for extended-release injectable suspension)
          for <strong>dogs</strong> and puppies 6 months of age and older. One subcutaneous dose
          provides <strong>12 months</strong> of protection against adult fleas and the ticks most
          commonly implicated in canine Lyme and other tick-borne diseases: black-legged ticks
          (<em>Ixodes scapularis</em>), American dog ticks (<em>Dermacentor variabilis</em>), and
          brown dog ticks (<em>Rhipicephalus sanguineus</em>). For lone star ticks (<em>Amblyomma
          americanum</em>), effectiveness is approved for <strong>8 months</strong>. The drug is
          prescription-only and must be administered by a licensed veterinarian, who will determine
          whether your dog needs the 8-month interval (for heavy lone star tick exposure) or the
          12-month interval. The active ingredient, fluralaner, is in the same modern isoxazoline
          class used in many familiar oral and topical preventives.
        </p>

        <p className="mb-6">
          The FDA approval date is July 10, 2025, and it marks the first FDA-approved product to
          deliver flea and tick protection for 8–12 months with a single injection. The decision
          follows a body of laboratory, field, and pharmacokinetic work evaluating year-long
          efficacy and safety. A key point of the label is that dosing is 0.1&nbsp;mL/kg of the
          constituted suspension, corresponding to 15&nbsp;mg/kg of fluralaner—allowing accurate
          dosing across all dog sizes when the vet weighs the patient at the visit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Mechanism &amp; Why the Injection Lasts So Long</h2>
        <p className="mb-4">
          Bravecto Quantum uses a crystalline formulation of fluralaner designed to release slowly
          from the subcutaneous injection site into the bloodstream over many months. Fluralaner
          targets parasite ligand-gated chloride channels, disrupting flea and tick nervous systems,
          leading to death after the parasite feeds. Extended-release kinetics maintain effective
          plasma levels through the approved duration—12 months for adult fleas and for three common
          tick species, and 8 months for lone star ticks. This approach reduces the risk of missed
          monthly doses, which is a major real-world failure mode in flea and tick control plans.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Coverage Details: Fleas &amp; Ticks</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Fleas:</strong> Kills adult <em>Ctenocephalides felis</em> and prevents
            reinfestation for 12 months. It begins killing adult fleas approximately 48 hours after
            injection; by one week, kill is rapid upon attachment.
          </li>
          <li>
            <strong>Ticks (12 months):</strong> Controls <em>Ixodes scapularis</em> (black-legged
            or deer tick), <em>Dermacentor variabilis</em> (American dog tick), and{' '}
            <em>Rhipicephalus sanguineus</em> (brown dog tick) for 12 months.
          </li>
          <li>
            <strong>Ticks (8 months):</strong> Controls <em>Amblyomma americanum</em> (lone star
            tick) for 8 months. For dogs with high exposure to lone star ticks (common in much of
            the southern and central U.S.), veterinarians may recommend re-dosing at 8 months.
          </li>
          <li>
            <strong>Onset against ticks:</strong> Begins killing within ~3 days for deer ticks and
            American dog ticks, ~4 days for brown dog ticks, and ~5 days for lone star ticks; onset
            is defined in the label as the time to ≥90% reduction vs. controls.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Eligibility &amp; Dosing (All Sizes, Dogs Only)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Species:</strong> Approved for <strong>dogs only</strong>. Cats have other
            fluralaner options (topicals), but the long-acting injection is not approved for cats in
            the U.S.
          </li>
          <li>
            <strong>Age:</strong> Dogs and puppies <strong>6 months of age and older</strong>.
          </li>
          <li>
            <strong>Size:</strong> Weight-based dose drawn from a multi-dose vial. Your vet draws
            0.1&nbsp;mL/kg of constituted suspension (15&nbsp;mg/kg fluralaner). This allows precise
            dosing from toy breeds to giant breeds in a single product line.
          </li>
          <li>
            <strong>Administration interval:</strong> Every 12 months for fleas and the three
            covered ticks; every 8 months if your dog is at material risk of lone star ticks.
          </li>
          <li>
            <strong>Breeding, pregnant, lactating:</strong> Discuss with your veterinarian. Isoxazoline
            products are widely used, but individual risk/benefit for breeding animals should be a
            professional decision. The product is prescription-only and administered by a vet.
          </li>
          <li>
            <strong>Other preventives:</strong> Bravecto Quantum does <em>not</em> include heartworm
            prevention. You will still need a separate heartworm-preventive plan unless your dog is
            on a combo product for heartworm (e.g., monthly moxidectin-containing options).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Safety, Precautions &amp; Known Side Effects</h2>
        <p className="mb-4">
          Fluralaner belongs to the isoxazoline class. These products are commonly used and safe for
          most dogs, but the FDA advises that neurologic adverse events (muscle tremors, ataxia,
          seizures) have been reported in some dogs. If your dog has a seizure disorder or prior
          neurologic events, talk with your veterinarian about the best approach. In clinical field
          work supporting approval, reported adverse reactions included lethargy, decreased appetite,
          vomiting, diarrhea, pruritus, elevated liver enzymes, and injection-site swelling or a
          small lump; a hypersensitivity reaction and seizures were also reported. Most injection-site
          swellings were transient. As with any injection, accidental self-injection precautions for
          staff apply in clinics and are described on the label.
        </p>

        <p className="mb-6">
          Target-animal safety studies examined repeated supratherapeutic dosing (up to 5× the label
          dose) given every four months over six doses in young intact beagles. Injection-site
          reactions were the most consistent finding; a dog in a high-dose group experienced seizures
          and polyarteritis considered possibly drug-related. Your veterinarian will weigh this class
          information against your dog&#39;s health status, history, concurrent medications, and local
          parasite risk to decide whether this injection is a good fit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What the Trials Showed (The Evidence Behind Approval)</h2>
        <p className="mb-4">
          The U.S. approval is supported by a combination of laboratory and field studies. In a
          12-month field study in client-owned dogs, Bravecto Quantum at 15&nbsp;mg/kg maintained
          over 99% effectiveness at treating and preventing flea infestations across the full year,
          with an active-control arm receiving labeled fluralaner chews every 12 weeks. Laboratory
          tick studies demonstrated year-long control for deer ticks, American dog ticks, and brown
          dog ticks when measured at the specified assessment times, and confirmed 8-month control
          for lone star ticks (measured at 72&nbsp;hours after infestation). An onset-of-effect study
          determined that the injection began killing ticks within ~3–5 days depending on species.
        </p>

        <p className="mb-4">
          Outside the U.S., fluralaner injection has been registered in several regions, and
          peer-reviewed work has evaluated 12-month efficacy against repeated experimental
          infestations with both fleas and <em>Rhipicephalus sanguineus</em> (brown dog tick) after a
          single subcutaneous dose—supporting year-round performance in controlled laboratory
          settings. Collectively, the dossier points to strong persistent activity so long as blood
          levels are maintained by the extended-release formulation.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Key Efficacy Highlights</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Fleas:</strong> ≥99% effectiveness through 12 months in a field study at the
            labeled 15&nbsp;mg/kg dose; begins killing adult fleas ~48&nbsp;hours post-injection.
          </li>
          <li>
            <strong>Ticks (12 months):</strong> Year-long control demonstrated for deer ticks,
            American dog ticks, and brown dog ticks (assessment windows specified by protocol).
          </li>
          <li>
            <strong>Lone star ticks:</strong> 8-month control (Day&nbsp;8 through Day&nbsp;241) at
            72-hour assessments; not consistently ≥90% by 12 months—hence the 8-month interval when
            lone star ticks are a major local risk.
          </li>
          <li>
            <strong>Onset against ticks:</strong> ~3 days for deer ticks and American dog ticks,
            ~4 days for brown dog ticks, ~5 days for lone star ticks to reach ≥90% reduction vs.
            controls.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Cost Comparison (Once-Yearly Injection vs. Monthly &amp; 12-Week Orals)</h2>
        <p className="mb-4">
          Exact prices vary by clinic, dog weight, and geography. Early U.S. reporting suggests many
          practices will price the once-yearly injection as a single annual fee for the visit, drug,
          and administration. Below is a practical comparison of typical retail ranges owners see
          for common preventives. Remember that some monthly combo products include heartworm
          prevention—unlike the injection—so total annual parasite control costs depend on your
          heartworm strategy.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d9cfc2]">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Active(s)</th>
                <th className="text-left p-2">Dosing Frequency</th>
                <th className="text-left p-2">What It Covers</th>
                <th className="text-left p-2">Typical U.S. Cost Pattern*</th>
                <th className="text-left p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Bravecto Quantum (injection)</td>
                <td className="p-2">Fluralaner (isoxazoline)</td>
                <td className="p-2">Once yearly (8 months if high lone star risk)</td>
                <td className="p-2">Fleas; 3 tick species for 12 months; lone star tick for 8 months</td>
                <td className="p-2">
                  Early estimates often cited in the <em>$350–$400</em> range per year; clinics set pricing
                </td>
                <td className="p-2">Administered in-clinic; separate heartworm prevention still needed</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Bravecto Chew (12-week oral)</td>
                <td className="p-2">Fluralaner</td>
                <td className="p-2">Every 12 weeks (≈4 doses/year)</td>
                <td className="p-2">Fleas; multiple tick species (12 weeks per chew)</td>
                <td className="p-2">Commonly ≈$70–$90 per chew depending on size (≈$280–$360/yr)</td>
                <td className="p-2">No heartworm; can be combined with monthly heartworm meds</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">NexGard (monthly oral)</td>
                <td className="p-2">Afoxolaner</td>
                <td className="p-2">Monthly</td>
                <td className="p-2">Fleas; several tick species (monthly)</td>
                <td className="p-2">Often ≈$25–$35/dose for small–mid sizes in retail (≈$300–$420/yr)</td>
                <td className="p-2">No heartworm; pair with monthly heartworm prevention</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Simparica Trio (monthly oral)</td>
                <td className="p-2">Sarolaner + moxidectin + pyrantel</td>
                <td className="p-2">Monthly</td>
                <td className="p-2">Fleas, ticks, round/hookworms; <strong>includes</strong> heartworm prevention</td>
                <td className="p-2">Commonly ≈$30–$45/dose depending on size (≈$360–$540/yr)</td>
                <td className="p-2">Convenient all-in-one; compare to injection + separate heartworm</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Topicals (monthly)</td>
                <td className="p-2">Varies (e.g., fipronil, imidacloprid, etc.)</td>
                <td className="p-2">Monthly</td>
                <td className="p-2">Fleas; some provide tick coverage</td>
                <td className="p-2">Wide range (≈$15–$30/month per dog)</td>
                <td className="p-2">Heartworm still needed; owner-applied; watch bathing/swimming</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-10">
          *Illustrative ranges compiled from large U.S. retailers and early media coverage; actual
          clinic pricing varies by region and dog size. Heartworm prevention is not included with the
          injection and should be budgeted separately.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Pros &amp; Cons vs. Monthly or 12-Week Chews</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Advantages Owners Will Notice</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Compliance:</strong> One injection at the vet removes the risk of missed monthly
            doses (the main reason pets end up with fleas and ticks despite a prescription).
          </li>
          <li>
            <strong>Coverage through vacations and boarding:</strong> Year-round protection is
            especially convenient when travel or boarding schedules get busy.
          </li>
          <li>
            <strong>GI-sensitive dogs:</strong> For some pets who dislike or vomit oral preventives,
            an injection can be a welcome alternative.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Trade-Offs to Consider</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>No heartworm included:</strong> You will still need a separate heartworm plan.
          </li>
          <li>
            <strong>In-clinic only:</strong> Must be given by a veterinarian; you cannot apply or
            give it at home.
          </li>
          <li>
            <strong>Lone star tick caveat:</strong> Effectiveness is 8 months for lone star ticks,
            which may mean an earlier booster in regions where this tick dominates.
          </li>
          <li>
            <strong>Class warnings:</strong> Isoxazoline-class neurologic warnings apply; discuss
            seizure history or neurologic concerns with your vet.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Transitioning From Your Current Preventive</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Talk timing with your vet:</strong> Most practices will schedule the injection
            near the next scheduled dose of your current product to maintain continuous coverage.
          </li>
          <li>
            <strong>Bridge lone star risk if applicable:</strong> In heavy lone star tick regions,
            your vet may counsel an 8-month interval or a brief bridge strategy during the first
            week after the shot while tick kill ramps up.
          </li>
          <li>
            <strong>Keep heartworm on calendar:</strong> If you switch from a combo product (e.g.,
            Simparica Trio) to the injection, add separate monthly heartworm prevention to your
            reminders.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Boarding &amp; Daycare Policy Playbook (Practical Operations)</h2>
        <p className="mb-4">
          Facilities have to convert news into policy. Here is a clear, operations-first plan that
          protects dogs, keeps staff procedures simple, and avoids awkward check-in surprises.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Accept the injection as equivalent coverage:</strong> Update your policy to
            recognize the Bravecto Quantum injection as fulfilling flea/tick requirements for 12
            months (8 months if clients live in lone star tick areas).
          </li>
          <li>
            <strong>Documentation:</strong> Ask for the injection date on the vet receipt or include
            a field in your intake profile for &quot;Bravecto Quantum given on ____; next due ____&quot;.
          </li>
          <li>
            <strong>Lone star clause:</strong> If your region has significant <em>A. americanum</em>
            pressure, set the &quot;next due&quot; date to 8 months from the injection unless the client&#39;s
            veterinarian confirms otherwise.
          </li>
          <li>
            <strong>Check-in screening:</strong> Keep a simple &quot;last 30 days&quot; checklist to catch
            early post-injection windows (tick kill ramps over 3–5 days) if a dog is arriving
            straight from a high-risk hike or hunting trip; consult the dog&#39;s vet if unsure.
          </li>
          <li>
            <strong>Educate gently:</strong> Many clients do not realize heartworm prevention is
            separate. Provide a one-line reminder and refer medical questions to their veterinarian.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Vet Q&amp;A (Owner-Style Questions, Clinic-Style Answers)</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is this safe for all dogs?</h3>
        <p className="mb-4">
          It is approved for dogs and puppies 6 months of age and older with weight-based dosing.
          As with all isoxazoline products, use caution in dogs with a history of seizures or
          neurologic disease and discuss your dog&#39;s medical history with your veterinarian first.
          Injection-site swelling or a small lump is possible and usually transient.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Will my dog still need heartworm prevention?</h3>
        <p className="mb-4">
          Yes. This injection covers fleas and ticks but does not include heartworm prevention. Your
          vet will keep you on a monthly heartworm plan (or injectable moxidectin where appropriate).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">How quickly does it start working?</h3>
        <p className="mb-4">
          It begins killing adult fleas within about 48 hours and starts killing ticks within about
          3–5 days depending on species. By about a week, kill after attachment is rapid. If your
          dog is arriving for boarding within a few days of the first injection and has been in
          heavy tick habitats, your facility may ask you to keep a tick check routine during that
          window or coordinate timing with your vet.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What about lone star ticks?</h3>
        <p className="mb-4">
          The label supports 8 months of control for lone star ticks. If you live where lone star
          ticks dominate, your veterinarian may recommend re-dosing at 8 months rather than 12
          months.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Can very small or very large dogs get it?</h3>
        <p className="mb-4">
          Yes—dosing is 0.1&nbsp;mL/kg, drawn precisely from a multi-dose vial after your dog is
          weighed. That makes it adaptable from toy breeds to giant breeds without switching SKUs.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Can I switch from my current chew to the injection?</h3>
        <p className="mb-4">
          Typically yes. Your vet will time the injection to maintain continuous coverage as your
          current product interval ends. If you are on an all-in-one heartworm + flea/tick product,
          you will add a separate heartworm preventive going forward.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What side effects should I watch for?</h3>
        <p className="mb-4">
          Most dogs do well. Mild lethargy, decreased appetite, vomiting, diarrhea, itchiness, or a
          small injection-site lump can occur. If you ever see tremors, wobbliness, or a seizure,
          contact your veterinarian immediately. If the injection site looks painful or enlarges
          after a few days, call the clinic.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Does bathing or swimming affect it?</h3>
        <p className="mb-4">
          No. Because it is an injection with systemic activity, bathing and swimming do not wash it
          off. That is an advantage vs. certain topicals.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is this better than monthly orals?</h3>
        <p className="mb-4">
          &quot;Better&quot; depends on your goals. If compliance is your weak point, a once-yearly
          injection can be a game changer. If you prefer a monthly rhythm or want an all-in-one
          heartworm combo, monthly products may still make sense. Many households will choose the
          injection for fleas/ticks and continue monthly heartworm prevention.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What if my dog has fleas now?</h3>
        <p className="mb-4">
          The injection treats adult fleas and prevents reinfestation, but your home environment
          (bedding, rugs, car) may contain immature life stages. Your vet may recommend environmental
          cleaning or an adjunct product initially. Expect to continue vacuuming and washing bedding
          to break the cycle.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Will boarding/daycare accept this as proof of prevention?</h3>
        <p className="mb-4">
          They should—once their policy is updated. Bring your receipt or a simple note from your
          vet with the injection date and &quot;next due&quot; date. Facilities in lone star tick regions
          may set an 8-month &quot;next due&quot; by default.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Owner Checklists</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Before the Visit</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Write down your dog&#39;s prior neurologic history, if any (seizures, tremors, ataxia).</li>
          <li>Bring your heartworm prevention plan or product name to review how it pairs.</li>
          <li>
            Ask whether your local area is heavy for lone star ticks (may set an 8-month schedule).
          </li>
          <li>Schedule the injection near the time your current product is due to avoid gaps.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">After the Visit</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Expect a small, temporary injection-site bump in some dogs; monitor and note changes.</li>
          <li>Keep tick checks during the first week while tick kill is ramping up.</li>
          <li>Set calendar reminders: the &quot;next due&quot; date for the injection and monthly heartworm.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Facility Checklists (Boarding/Daycare)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Add &quot;Bravecto Quantum injection date&quot; and &quot;Next due&quot; fields to client profiles.</li>
          <li>
            Default &quot;next due&quot; to 8 months in lone star regions; 12 months otherwise unless the
            dog&#39;s veterinarian advises differently.
          </li>
          <li>Train staff on the first-week tick-ramp notes to answer owner questions.</li>
          <li>Retain your standard cleaning and tick habitat control regardless of product used.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Bottom Line</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            The FDA has approved the first long-acting flea and tick injection for dogs, offering
            12-month protection against fleas and three tick species and 8-month protection against
            lone star ticks.
          </li>
          <li>
            It is administered by veterinarians, uses weight-based dosing for dogs of any size, and
            aims to eliminate compliance gaps.
          </li>
          <li>
            Safety signals are in line with the isoxazoline class—rare neurologic events are
            possible; injection-site lumps can occur. Discuss seizure history with your vet.
          </li>
          <li>
            It does not include heartworm prevention; plan for a separate heartworm product.
          </li>
          <li>
            For facilities, adding this option is straightforward: document dates, set &quot;next due&quot;
            rules (8 vs. 12 months), and update client education.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            U.S. FDA CVM Update: FDA approves first long-acting flea and tick treatment for dogs —
            July 10, 2025.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/cvm-updates/fda-approves-first-long-acting-flea-and-tick-treatment-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
          </li>
          <li>
            FDA Freedom of Information (FOI) Summary, NADA 141-599 (Bravecto Quantum; fluralaner
            for extended-release injectable suspension).{' '}
            <a
              className="underline"
              href="https://animaldrugsatfda.fda.gov/adafda/app/search/public/document/downloadFoi/17185"
              target="_blank"
              rel="noopener noreferrer"
            >
              animaldrugsatfda.fda.gov
            </a>
          </li>
          <li>
            Parasites &amp; Vectors (2024): One-year efficacy of fluralaner injectable suspension
            (Bravecto) against <em>Rhipicephalus sanguineus</em> and <em>Ctenocephalides felis</em>{' '}
            in dogs.{' '}
            <a
              className="underline"
              href="https://parasitesandvectors.biomedcentral.com/articles/10.1186/s13071-024-06535-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              parasitesandvectors.biomedcentral.com
            </a>
          </li>
          <li>
            DailyMed (U.S. label): BRAVECTO QUANTUM — dosing (0.1&nbsp;mL/kg; 15&nbsp;mg/kg) and
            administration details.{' '}
            <a
              className="underline"
              href="https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=82f1fc7c-41f1-4a1d-8117-6d8eb9d0b54f&type=display"
              target="_blank"
              rel="noopener noreferrer"
            >
              dailymed.nlm.nih.gov
            </a>
          </li>
          <li>
            Merck Animal Health press release: FDA approves BRAVECTO Quantum; availability at U.S.
            clinics.{' '}
            <a
              className="underline"
              href="https://www.merck.com/news/fda-approves-bravecto-quantum-fluralaner-for-extended-release-injectable-suspension-from-merck-animal-health/"
              target="_blank"
              rel="noopener noreferrer"
            >
              merck.com
            </a>
          </li>
          <li>
            GoodRx overview (owner-facing; price expectations &amp; dosing overview).{' '}
            <a
              className="underline"
              href="https://www.goodrx.com/pet-health/dog/bravecto-quantum-for-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              goodrx.com
            </a>
          </li>
          <li>
            U.S. FDA: Fact sheet on isoxazoline-class adverse events for pet owners and
            veterinarians.{' '}
            <a
              className="underline"
              href="https://www.fda.gov/animal-veterinary/products/isoxazoline-flea-and-tick-products-cats-and-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              fda.gov
            </a>
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
          This article is for general information and does not replace professional veterinary care.
          Always consult your veterinarian for diagnosis, prevention, and treatment decisions,
          especially if your dog has a seizure history, is pregnant or breeding, or has underlying
          health conditions.
        </p>
      </main>
    </>
  );
}
