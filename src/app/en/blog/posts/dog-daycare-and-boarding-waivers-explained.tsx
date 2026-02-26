'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareBoardingWaiversExplained() {
  const locale = useLocale();

  const title =
    "Dog Daycare & Boarding Waivers Explained: Real Scenarios, Your Rights & Smart Next Steps";
  const date = "July 29, 2025";
  const categories = ["owner", "boarding"] as const;

  const categoryLabels: Record<string, string> = {
    owner: "Pet Owners",
    boarding: "Boarding",
    daycare: "Daycare",
    rescue: "Rescues",
    vet: "Veterinary Clinics",
    sitter: "Pet Sitters",
    walker: "Dog Walkers",
    breeder: "Breeders",
    breed_specific_guides: "Breed Specific Guides",
  };

  return (
    <>

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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#waiver-101" className="underline hover:opacity-80">Waiver 101</a></li>
            <li><a href="#clauses" className="underline hover:opacity-80">Common Clauses (Decoded)</a></li>
            <li><a href="#negligence" className="underline hover:opacity-80">Negligence vs. Gross Negligence</a></li>
            <li><a href="#rules" className="underline hover:opacity-80">State Rules & Notices</a></li>
            <li><a href="#tour-questions" className="underline hover:opacity-80">Questions to Ask Before You Sign</a></li>
            <li><a href="#read-like-pro" className="underline hover:opacity-80">How to Read a Waiver Like a Pro</a></li>
            <li><a href="#scenarios" className="underline hover:opacity-80">Real Scenarios & Smart Responses</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Templates & Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* DISCLAIMER */}
        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-8">
          <strong>Important:</strong> This article is educational, not legal advice. Laws vary by state and city, and individual cases are fact-specific.
          If you have a dispute or suffered losses, consult a licensed attorney in your jurisdiction.
        </div>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Pet-care waivers aim to disclose risks and allocate responsibility. They commonly cover emergency veterinary care authorization,
              assumption of risk for normal play, and communication/records policies.
            </li>
            <li>
              In many jurisdictions, <strong>waivers cannot excuse gross negligence or willful misconduct</strong>. They may reduce certain claims for ordinary negligence,
              but enforceability varies by state and by the waiver’s clarity.
            </li>
            <li>
              Some states add consumer-notice requirements for boarding (e.g., written notice about emergency care and how to file complaints).
            </li>
            <li>
              If there’s an incident: get the written report, document injuries/costs, stay factual and calm, and follow the stepwise plan below.
            </li>
          </ul>
        </section>

        {/* WAIVER 101 */}
        <section id="waiver-101" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Waiver 101: What You’re Signing (and Why)</h2>
          <p className="mb-3">
            A pet-care waiver is part disclosure (what can reasonably happen in group care) and part risk allocation (who authorizes emergency treatment,
            who pays for which costs, where disputes are handled). Good waivers are readable and specific. Poor waivers are vague, overly broad,
            or silent about what matters most to owners (communication, incident logs, medical costs).
          </p>
          <p className="mb-3">
            Your goal is not to “defeat” the waiver—it’s to understand it, spot gaps, and make an informed decision. If a clause is unclear, ask for a plain-language
            explanation by email before the stay. Keep the reply with your records.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Pro move:</strong> Bring a highlighter. Note anything about emergency care, incident reporting, payment responsibility, arbitration/venue, and data/photo use.
          </div>
        </section>

        {/* CLAUSES */}
        <section id="clauses" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Clauses (Decoded)</h2>

          <h3 className="text-lg font-semibold mb-1">1) Assumption of Risk & Release</h3>
          <p className="mb-3">
            Says you understand normal risks of group play and housing (nicks, scrapes, kennel cough, stress). A release may limit certain claims rooted in
            <em> ordinary</em> negligence if it’s clear, conspicuous, and not against public policy where you live. It typically cannot waive <em>gross</em> negligence or intentional harm.
          </p>

          <h3 className="text-lg font-semibold mb-1">2) Hold Harmless / Indemnity</h3>
          <p className="mb-3">
            You agree to defend and reimburse the facility if your dog causes injury/property damage to others. Look for scope (“to the extent caused by my dog”),
            exclusions (the facility’s own negligence), and caps. If it reads as “I pay for everything no matter what,” ask for clarification.
          </p>

          <h3 className="text-lg font-semibold mb-1">3) Emergency Veterinary Care Authorization</h3>
          <p className="mb-3">
            Allows the facility to seek care if your dog is ill/injured and you’re unreachable. Many waivers state you’re responsible for “reasonable and necessary”
            emergency costs, which mirrors some state statutes. Make sure the facility lists its primary and after-hours veterinary partners.
          </p>

          <h3 className="text-lg font-semibold mb-1">4) Vaccinations, Health & Behavior Disclosures</h3>
          <p className="mb-3">
            Affirms your dog is current on required vaccines (or as permitted by local rules), parasite prevention, and that you disclose behavioral risks (resource guarding,
            reactivity, history of bites). Nondisclosure can void coverage or lead to removal from group play.
          </p>

          <h3 className="text-lg font-semibold mb-1">5) Photo/Media & Data Use</h3>
          <p className="mb-3">
            Grants permission to use your dog’s image on social media/marketing. Check whether your name/contact info will ever appear and how photos are stored.
          </p>

          <h3 className="text-lg font-semibold mb-1">6) Arbitration, Venue & Attorney Fees</h3>
          <p className="mb-3">
            Many waivers include a clause requiring disputes to be resolved by arbitration or in a specific court. These provisions can affect your options and costs.
            Read carefully. If you disagree, ask whether the facility offers an alternative form or carve-outs for small claims.
          </p>
        </section>

        {/* NEGLIGENCE */}
        <section id="negligence" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Negligence vs. Gross Negligence: Why the Distinction Matters</h2>
          <p className="mb-3">
            <strong>Negligence</strong> is failing to use reasonable care. <strong>Gross negligence</strong> is a severe departure from reasonable care—reckless disregard for safety.
            Many jurisdictions limit or disfavor waivers that try to excuse gross negligence or intentional harm. Even for ordinary negligence, a waiver must be clear,
            conspicuous, and not violate public policy to be enforceable. The details vary by state, and outcomes depend on facts and wording.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Owner mindset:</strong> A signed waiver is not a “free pass.” You can still ask for transparency, costs, and corrective actions when things go wrong.
          </div>
        </section>

        {/* RULES */}
        <section id="rules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">State Rules & Consumer Notices: Where Law Meets Waiver</h2>
          <p className="mb-3">
            Some states and cities overlay additional rules on top of private waivers. For example, certain jurisdictions require written consumer notices before intake
            (e.g., where to file complaints, who pays emergency veterinary costs), or they specify minimum operational standards for boarding/daycare.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Consumer notices:</strong> In some places, boarding establishments must give a <em>written</em> notice to owners before drop-off describing remedies and
              emergency-care obligations. Keep that notice with your records.
            </li>
            <li>
              <strong>Operational standards:</strong> States or cities may set facility standards (sanitation, isolation rooms, supervision) that can inform what “reasonable care”
              means in your area.
            </li>
            <li>
              <strong>Local permits:</strong> Municipalities may require permits and maintain inspection histories—useful context if you’re evaluating a dispute.
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Bottom line: your contract is not the only thing that governs what happens—public rules often apply in the background.
          </p>
        </section>

        {/* TOUR QUESTIONS */}
        <section id="tour-questions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask Before You Sign</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Incident reporting:</strong> What triggers a written report? May I see a blank template? When will I be notified?
            </li>
            <li>
              <strong>Emergency care:</strong> Which clinics do you use? Who authorizes treatment if I’m unreachable? What costs am I responsible for?
            </li>
            <li>
              <strong>Supervision & ratios:</strong> How many dogs per attendant at peak? How are groups formed (size/energy)? What training do staff receive?
            </li>
            <li>
              <strong>Outbreaks:</strong> What’s your response plan for kennel cough/giardia? Do you proactively notify all exposed clients?
            </li>
            <li>
              <strong>Dispute process:</strong> Who reviews incidents? Is there a manager escalation path before arbitration or legal action?
            </li>
          </ol>
        </section>

        {/* READ LIKE A PRO */}
        <section id="read-like-pro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Read a Waiver Like a Pro (10-Minute Method)</h2>
          <ol className="list-decimal pl-6 space-y-1 mb-3">
            <li>Skim headings first: risk, medical authorization, indemnity, dispute resolution.</li>
            <li>Highlight every sentence about <strong>costs</strong>. Circle anything that sounds unlimited.</li>
            <li>Find the <strong>notice</strong> section (if applicable in your state) and the <strong>incident-report</strong> promise.</li>
            <li>Check for <strong>arbitration/venue</strong>. If arbitration is mandatory, note the forum and any fee-shifting.</li>
            <li>Confirm <strong>vaccine/health</strong> requirements and whether titers/medical exemptions are ever considered (subject to law).</li>
            <li>Email 1–2 clarifying questions. Keep written answers with your signed waiver.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Tip:</strong> If a clause is all-caps or bold, it’s likely important for enforcement. Read those twice.
          </div>
        </section>

        {/* SCENARIOS */}
        <section id="scenarios" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Real Scenarios & Smart, Productive Responses</h2>

          <h3 className="text-lg font-semibold mb-1">A) Minor Scuffle: Small Puncture, No Stitches</h3>
          <p className="mb-3">
            Expect a same-day call, a written incident report, and a plan (cleaning, monitoring, potential cooldown). Ask for photos and antecedents (what happened just before).
            If your dog needs a quick vet exam, align on who pays. Many waivers assign routine minor injuries to owners; ask if the facility will share costs as a goodwill gesture.
          </p>

          <h3 className="text-lg font-semibold mb-1">B) Laceration Requiring Stitches</h3>
          <p className="mb-3">
            Request the full timeline, staff present, separation steps, and who authorized treatment. Save all receipts. Keep communication factual. If facts suggest preventable
            error (inadequate supervision, incompatible grouping), ask for a manager review after the dog is stable. Consider a mediated resolution before legal escalation.
          </p>

          <h3 className="text-lg font-semibold mb-1">C) Kennel Cough Outbreak After a Stay</h3>
          <p className="mb-3">
            Outbreaks can occur despite vaccination. Ask whether the facility notified exposed clients, adjusted cleaning/airflow, and implemented quarantine. If you incur costs,
            share your invoice and the test/treatment notes. Many facilities will split costs or credit future services even if the waiver limits liability.
          </p>

          <h3 className="text-lg font-semibold mb-1">D) Property Damage (Chewed Bed, Scratched Door)</h3>
          <p className="mb-3">
            Indemnity clauses may assign owner responsibility. Ask for pre- and post-boarding photos, a receipt or reasonable estimate, and whether your own insurance (or theirs)
            applies. Offer a practical compromise if damages are cosmetic and low-dollar.
          </p>

          <h3 className="text-lg font-semibold mb-1">E) Billing Dispute</h3>
          <p className="mb-3">
            Review the contract’s fee schedule and cancellation terms. Calmly summarize the disagreement in writing with dates, names, and screenshots. Request a manager review.
            If the waiver mandates arbitration, ask whether the facility will attempt a good-faith resolution first.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Golden rule:</strong> Separate <em>dog care</em> from <em>conflict</em>. Prioritize treatment, comfort, and safety first—then debrief and resolve money later.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Templates & Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Respectful Follow-Up Email (After an Incident)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p className="mb-2">
              Subject: Incident on {`{Date}`} – {`{Dog Name}`} – Request for Report & Next Steps
            </p>
            <p>
              Hi {`{Manager Name}`},<br />
              Thank you for speaking with me today. Please send the written incident report including timeline, staff present, and actions taken.
              I’ve attached photos and today’s vet invoice. Could we set a time to review grouping/supervision for {`{Dog Name}`}, and discuss
              cost coverage or a credit? I appreciate your transparency and help.<br />
              – {`{Your Name}`}, {`{Phone}`}
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Facility → Owner Proactive Message (Example)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p>
              Hi {`{Owner}`},<br />
              We want you to hear from us first. Today at {`{time}`}, {`{Dog Name}`}/another dog had a brief scuffle. We separated them immediately,
              examined both dogs, and cleaned a superficial puncture. No stitches were needed. We’ll monitor closely and send photos.
              Our incident report is attached. Please let us know how {`{Dog Name}`}&nbsp;is doing and if you see anything concerning.
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Owner Documentation Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Signed waiver + any state-required consumer notice</li>
            <li>Vaccination records (or permitted alternatives), parasite prevention, behavior disclosures</li>
            <li>Emergency contacts (primary/backup) + preferred/after-hours vet info</li>
            <li>Photos before/after, incident report, invoices, timelines, names of staff/witnesses</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Decision Flow (Owner)</h3>
          <ol className="list-decimal pl-6 space-y-1 mb-4">
            <li>Stabilize dog → vet if needed → document costs</li>
            <li>Request incident report + inspection history/permit link (if public)</li>
            <li>Calm written summary to manager → propose practical resolution</li>
            <li>Escalate (owner → manager → owner-operator/GM) → consider mediation</li>
            <li>If unresolved and stakes are high, consult an attorney about options</li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can a waiver stop me from recovering anything if the facility was careless?</strong><br />
            It depends on your state and the facts. Many jurisdictions enforce clear, specific waivers for certain ordinary-negligence claims, but do not allow waivers of gross negligence or intentional harm. Public policy limits apply.
          </p>

          <p className="mb-3">
            <strong>What is “gross negligence” in plain English?</strong><br />
            A serious, reckless disregard for safety—a big step beyond ordinary carelessness. Many places do not allow businesses to waive liability for gross negligence.
          </p>

          <p className="mb-3">
            <strong>What if the waiver says disputes must go to arbitration?</strong><br />
            You may have to arbitrate instead of going to court, depending on state/federal law and the contract. Ask whether the facility will first attempt a good-faith resolution.
          </p>

          <p className="mb-3">
            <strong>What should a good incident report include?</strong><br />
            Date/time, staff present, antecedents (what happened right before), separation steps, treatment provided, photos/video if available, and a follow-up plan.
          </p>

          <p>
            <strong>Does a state “consumer notice” change my waiver?</strong><br />
            It adds required disclosures on top of your private contract. Keep both: the notice (if required in your state) and the signed waiver.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Virginia Code — Boarding establishments; emergency veterinary treatment & consumer notices:{' '}
              <a href="https://law.lis.virginia.gov/vacode/title3.2/section3.2-6518/" target="_blank" rel="noopener noreferrer">
                §3.2-6518
              </a>{' '}
              &middot{' '}
              <a href="https://law.lis.virginia.gov/vacode/title3.2/chapter65/section3.2-6519/" target="_blank" rel="noopener noreferrer">
                §3.2-6519
              </a>
            </li>
            <li>
              Massachusetts MDAR — Ollie’s Law information hub (state standards framework for boarding/daycare):{' '}
              <a href="https://www.mass.gov/info-details/ollies-law-information" target="_blank" rel="noopener noreferrer">
                mass.gov/info-details/ollies-law-information
              </a>
            </li>
            <li>
              Cornell LII — Negligence & gross negligence (definitions and context):{' '}
              <a href="https://www.law.cornell.edu/wex/negligence" target="_blank" rel="noopener noreferrer">
                Negligence
              </a>{' '}
              &middot{' '}
              <a href="https://www.law.cornell.edu/wex/gross_negligence" target="_blank" rel="noopener noreferrer">
                Gross negligence
              </a>
            </li>
            <li>
              Cornell LII — Assumption of risk (express and implied; how jurisdictions treat it):{' '}
              <a href="https://www.law.cornell.edu/wex/assumption_of_risk" target="_blank" rel="noopener noreferrer">
                Assumption of risk
              </a>
            </li>
            <li>
              Cornell LII — Arbitration (overview of clauses in consumer contracts):{' '}
              <a href="https://www.law.cornell.edu/wex/arbitration" target="_blank" rel="noopener noreferrer">
                Arbitration
              </a>
            </li>
            <li>
              Thomson Reuters / Practical Law — Enforceability of liability waivers (general principles):{' '}
              <a href="https://www.reuters.com/practical-law-the-journal/transactional/enforceability-liability-waivers-2024-07-01/" target="_blank" rel="noopener noreferrer">
                Practical Law article
              </a>
            </li>
            <li>
              Vanderbilt Law Review — <em>Unenforceable Waivers</em> (survey and discussion):{' '}
              <a href="https://wp0.vanderbilt.edu/lawreview/wp-content/uploads/sites/278/2023/03/Unenforceable-Waivers.pdf" target="_blank" rel="noopener noreferrer">
                Vanderbilt Law Review (2023)
              </a>
            </li>
          </ul>
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
