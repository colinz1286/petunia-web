'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBoardingChecklistWhatToBringWhatToUploadWhenToBook() {
  const locale = useLocale();

  const title =
    'Boarding Checklist: What to Bring, What to Upload, and When to Book';
  const date = 'August 25, 2025';
  const categories = ['owner', 'boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare',
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
          content="A practical, copy-ready dog boarding checklist: what to pack (food, meds, gear), what to upload (vaccines, vet info, emergency contacts), how far ahead to book, vaccine timing windows, intake forms, and when to reschedule during cough or CIRDC concerns—built for owners and boarding/daycare operators."
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

        {/* CTA */}
        <div className="mb-8">
          <a
            href="/resources/boarding-checklist.pdf"
            className="inline-block rounded-xl bg-[#2c4a30] text-white px-4 py-2 font-medium hover:opacity-90"
          >
            Download the printable checklist (PDF)
          </a>
          <span className="mx-2 text-sm text-gray-500">•</span>
          <a
            href={`/${locale}/app`}
            className="inline-block rounded-xl bg-[#e4dbcb] text-[#2c4a30] px-4 py-2 font-medium border border-[#d9cfc2] hover:opacity-90"
          >
            Upload everything to Petunia before arrival
          </a>
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          Whether you board once a year for the holidays or use daycare every week, the difference
          between a smooth drop-off and a stressful one is preparation. This guide gives you a
          practical, copy-ready list of what to pack, what to upload into modern software, how far
          ahead to book, vaccine expectations, and the exact information facilities need to keep
          dogs safe and comfortable. Operators can adopt these sections as a ready-made standard
          operating procedure and share the printable version with clients.
        </p>

        <p className="mb-6">
          Two guiding ideas shape everything below. First, most facility problems are not medical;
          they are communication problems. The more clearly you communicate food, meds, behavior
          notes, and emergency contacts, the fewer surprises. Second, vaccine policies protect
          all dogs in a shared environment. Core vaccines are recommended for all dogs; lifestyle
          vaccines are recommended based on risk. We summarize what those terms mean and link to
          authoritative veterinary guidance at the end of this article so you can make informed,
          local decisions with your veterinarian.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Pack:</strong> pre-measured food, written feeding instructions, meds in original
            vials with dosing times, a labeled leash and flat collar, one familiar comfort item, a
            printed copy of emergency contacts, and a backup pickup person.
          </li>
          <li>
            <strong>Upload:</strong> rabies and core vaccine proof, lifestyle vaccines if recommended
            (for example, Bordetella and canine influenza in group settings), your veterinarian&#39;s
            details, microchip number, medication list, behavior notes (energy level, fears,
            special handling), and a recent photo.
          </li>
          <li>
            <strong>Timing:</strong> book popular weeks early (holidays 6–8 weeks out; summer
            travel 4–6 weeks out); complete intake forms 1–2 weeks ahead; confirm vaccine records
            are current and match the facility policy.
          </li>
          <li>
            <strong>Sick-day rules:</strong> reschedule if your dog has a new cough, nasal discharge,
            fever, lethargy, or a confirmed exposure to a contagious respiratory illness; call the
            facility if you are unsure.
          </li>
          <li>
            <strong>Operator tip:</strong> publish your vaccine policy with plain language for core
            versus lifestyle vaccines, list acceptable proof formats, and offer a one-page pack-and-
            upload checklist your clients can follow.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What to Bring (Owners)</h2>
        <p className="mb-4">
          Packing is about clarity, consistency, and comfort. Every item should either help your dog
          feel at home, help staff deliver care exactly as you do, or reduce risk if something
          unexpected happens. Use the list below and put everything into a single tote with your
          dog&#39;s name on the outside.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Food &amp; Feeding Instructions</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Pre-measure meals</strong> into labeled bags or small containers. Write the meal
            name (for example, Breakfast, Dinner), amount, and optional add-ins (fish oil, pumpkin).
          </li>
          <li>
            <strong>Feeding plan sheet:</strong> include brand, flavor, daily total, number of meals,
            and exactly how you handle picky days. If you use a slow feeder or warm water, note it.
          </li>
          <li>
            <strong>Treats:</strong> optional; provide a note on quantity limits and any allergies.
          </li>
          <li>
            <strong>Facility food:</strong> if you are not bringing food, confirm the house food,
            its ingredients, and daily fee in advance to avoid stomach upset surprises.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Medications &amp; Supplements</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Use original labeled containers</strong> from your veterinarian or pharmacy.
            Many facilities cannot accept unlabeled pill organizers.
          </li>
          <li>
            <strong>Write dosing times</strong> (for example, 8&nbsp;AM and 8&nbsp;PM), whether the
            med must be given with food, and what to do if a dose is vomited or refused.
          </li>
          <li>
            <strong>As-needed meds:</strong> include clear criteria (for example, give trazodone
            90&nbsp;minutes before storms or fireworks).
          </li>
          <li>
            <strong>Supplements:</strong> list name, dose, and purpose so staff understand what is
            essential versus optional.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Leash, Collar, and Identification</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Bring a <strong>flat collar</strong> with current tags. If your dog wears a harness,
            pack it, but many facilities prefer flat collars for quick, safe handling during
            transfers.
          </li>
          <li>
            <strong>Microchip number</strong> belongs on your upload list; we still recommend a tag
            with your phone number as a redundant layer.
          </li>
          <li>
            <strong>One slip lead</strong> labeled with your dog&#39;s name is helpful for curbside
            handoffs or quick transitions.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Comfort, Bedding, and Enrichment</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>One familiar soft item</strong> (towel or small blanket) helps scent the space.
            Avoid oversized bedding that is hard to launder or that your dog is tempted to shred.
          </li>
          <li>
            <strong>Chew or lick mat:</strong> pack a long-lasting option your dog already knows.
            Label it and confirm the facility&#39;s policy on chew supervision.
          </li>
          <li>
            <strong>Do not bring</strong> rawhide, cooked bones, or anything your dog only receives
            under close supervision at home.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Printed Contacts &amp; Authorizations</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Your veterinarian:</strong> clinic name, phone, and after-hours plan.
          </li>
          <li>
            <strong>Emergency contact</strong> who can make medical decisions and pick up your dog
            if needed.
          </li>
          <li>
            <strong>Backup pickup person</strong> with a copy of their photo ID name.
          </li>
          <li>
            <strong>Authorization note:</strong> a one-line statement allowing the facility to seek
            veterinary care if they cannot reach you promptly.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What to Upload in Modern Software (Owners)</h2>
        <p className="mb-4">
          Uploads are about speed and accuracy. If staff can open a profile and see vaccines, meds,
          contact info, behavior notes, and a photo, check-in becomes a handshake—not a paper chase.
          Use these fields as your standard:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Medical &amp; Vaccine Records</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Core vaccines:</strong> proof of rabies and the common combination vaccine
            covering distemper, adenovirus, and parvovirus (often listed as DHPP or DAPP in
            medical records). Core vaccines are recommended for all dogs. Attach the certificate or
            invoice showing due dates.
          </li>
          <li>
            <strong>Lifestyle vaccines:</strong> many facilities recommend or require Bordetella
            and, depending on region and risk, canine influenza. Some dogs also receive leptospirosis
            or Lyme protection based on outdoor activity and geography. Upload what your veterinarian
            recommends for your dog, along with the administration dates.
          </li>
          <li>
            <strong>Heartworm and flea/tick prevention:</strong> note your product names and the
            date last given.
          </li>
          <li>
            <strong>Medical flags:</strong> allergies, sensitivities, prior anesthetic or vaccine
            reactions, and a short history of any chronic issues.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Medications, Doses, and Timing</h3>
        <p className="mb-4">
          Create a simple table in your profile: medication name, strength, dose, route, time,
          and special instructions. If any med is brand-specific (for example, compounded liquids),
          say so. Upload a photo of each label; clear labels prevent errors.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Behavior &amp; Handling Notes</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Energy level (for example, high, moderate, low).</li>
          <li>Play style and preferred playmates (gentle, chase, fetch).</li>
          <li>Fears or triggers (thunder, grooming tables, nail trims, slippery floors).</li>
          <li>Body handling notes (ears okay, paws sensitive, guard food around unknown dogs).</li>
          <li>Crate experience and quiet-time routines.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">People &amp; Photo</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Owner and emergency contact names, emails, and phone numbers.</li>
          <li>Veterinary clinic details and after-hours plan.</li>
          <li>Microchip number and brand.</li>
          <li>Recent, well-lit photo for quick visual confirmation at pickup.</li>
        </ul>

        <div className="mb-8">
          <a
            href={`/${locale}/app`}
            className="inline-block rounded-xl bg-[#2c4a30] text-white px-4 py-2 font-medium hover:opacity-90"
          >
            Upload everything to Petunia before arrival
          </a>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">When to Book (and Why Timing Matters)</h2>
        <p className="mb-4">
          The best facilities fill early, especially around school breaks, long weekends, and the
          winter holidays. Booking early protects your spot, gives you time to complete any vaccine
          updates, and leaves room to schedule a meet-and-greet or a trial daycare day if required.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Holidays:</strong> reserve 6–8 weeks ahead if you can. New clients may need more
            lead time to complete onboarding and temperament checks.
          </li>
          <li>
            <strong>Summer travel:</strong> aim for 4–6 weeks ahead; popular June–August weekends go
            quickly.
          </li>
          <li>
            <strong>Routine daycare:</strong> book repeating days or purchase passes so your dog
            becomes part of the regular schedule.
          </li>
          <li>
            <strong>Vaccine windows:</strong> if your dog is due for a booster or starting a
            lifestyle series for the first time, plan several weeks ahead to accommodate
            veterinarian timing and your facility&#39;s policy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Vaccine Expectations: Core vs. Lifestyle</h2>
        <p className="mb-4">
          Veterinarians categorize canine vaccines as core (recommended for all dogs) and lifestyle
          or non-core (recommended based on exposure risk, local pathogens, travel, and housing).
          Boarding and daycare are group settings, so facilities frequently recommend or require
          certain lifestyle vaccines in addition to core protection. Your own veterinarian is the
          right person to tailor this advice to your dog, but here is a plain-language framework:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Core Vaccines (recommended for all dogs)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Rabies:</strong> required by law in most jurisdictions; proof is typically a
            certificate with a due date.
          </li>
          <li>
            <strong>Distemper, adenovirus, parvovirus</strong> combination (often listed as DHPP or
            DAPP). Many facilities accept a combination vaccine record that includes parainfluenza
            as well.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Lifestyle Vaccines (recommended by risk)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Bordetella bronchiseptica</strong> (often called kennel cough): commonly required
            for group settings. Delivery can be oral, intranasal, or injectable. Boosting schedules
            vary; many facilities accept annual boosters, while some request semiannual coverage for
            high-exposure dogs.
          </li>
          <li>
            <strong>Canine influenza</strong> (H3N2/H3N8): recommended where outbreaks have occurred
            or when dogs congregate frequently. First-time vaccination is a two-dose series spaced a
            few weeks apart, then periodic boosters.
          </li>
          <li>
            <strong>Leptospirosis or Lyme disease</strong>: considered when lifestyle and geography
            increase risk (for example, wildlife access, wet environments, hiking, or endemic tick
            areas). Your veterinarian will advise whether these make sense for your dog.
          </li>
        </ul>

        <p className="mb-6">
          Facilities should publish their policy clearly: which vaccines are required, which are
          recommended, acceptable proof formats (clinic invoice, certificate, or a direct fax/email
          from the clinic), and any grace periods. Owners should upload the document rather than
          relying on a front-desk photo; good uploads save time at every future visit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Intake Forms: Get Them Done 1–2 Weeks Ahead</h2>
        <p className="mb-4">
          Intake is the blueprint for your dog&#39;s stay. Done properly, it covers basics (food,
          meds, contacts), risk management (health history, behavior flags), and permissions (walks,
          grooming, first aid). If your facility uses a modern platform, completing the form online
          1–2 weeks ahead gives staff time to review and follow up with any clarifying questions.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Owner details, emergency contacts, and backup pickup person.</li>
          <li>Feeding plan and food allergies.</li>
          <li>Medication table with doses and times; what to do if a dose is missed.</li>
          <li>Behavior notes (fears, handling preferences, crate experience).</li>
          <li>Permissions: group play, solo time, enrichment, walks, grooming.</li>
          <li>Veterinary authorization and financial limit for emergency care.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">CIRDC &amp; Cough Etiquette: When to Reschedule</h2>
        <p className="mb-4">
          Canine infectious respiratory disease complex is a catch-all term for a group of pathogens
          that spread efficiently where dogs congregate. The most important safety practice is to
          keep coughing dogs at home and to contact your veterinarian. Reschedule if your dog has a
          new or worsening cough, nasal discharge, fever, lethargy, or appetite loss. In periods of
          heightened local activity, some facilities add screening questions or a waiting period
          after symptoms resolve. This is about protecting everyone&#39;s dogs, including yours.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Owners:</strong> call your facility if you are unsure; describe timing of signs,
            any known exposure, and your dog&#39;s vaccine status.
          </li>
          <li>
            <strong>Operators:</strong> publish a short &quot;Do not enter if coughing&quot; policy,
            remind clients about lifestyle vaccine options, and maintain excellent sanitation and
            airflow in shared spaces.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Operator Playbook (Boarding/Daycare)</h2>
        <p className="mb-4">
          Make it easy for clients to do the right thing by turning this article into your customer
          journey: clear policy, clean uploads, and repeatable day-of processes. Below is a plug-and-
          play framework:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Publish a One-Page Policy</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Core and lifestyle vaccine expectations, with simple language.</li>
          <li>Accepted document formats and how to send them.</li>
          <li>Medication acceptance rules (original vials, cut-off time for complex dosing).</li>
          <li>Food policy (house food option, handling of raw diets, label rules).</li>
          <li>Sick-day policy and rescheduling process.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Standardize the Upload Flow</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Create required fields for vaccines, meds, contacts, and behavior notes.</li>
          <li>Require a recent photo for positive dog ID at pickup.</li>
          <li>Automate reminders for expiring vaccines 30 days before due dates.</li>
          <li>Offer an optional &quot;trial day&quot; slot for new dogs.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Day-Of SOP (Staff)</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>Confirm the dog and owner in software with the photo.</li>
          <li>Check the vaccine field for due dates; verify any recent boosters uploaded.</li>
          <li>Review the med table and place meds in the dosing area with a printed MAR.</li>
          <li>Verify food labels and align them to feeding times on the schedule.</li>
          <li>Ask one behavior question: &quot;Anything different today we should know?&quot;</li>
          <li>Escort the dog to the assigned space and update status to &quot;Checked in.&quot;</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Printable Checklist (Copy &amp; Save)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Owners — Pack &amp; Upload</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Pre-measured food with a feeding plan sheet.</li>
          <li>Medications in original containers with dosing times.</li>
          <li>Leash, flat collar with tags; harness if used on walks.</li>
          <li>One comfort item; one chew or lick mat your dog already knows.</li>
          <li>Printed emergency contacts and backup pickup person.</li>
          <li>Upload: vaccines, meds, vet details, microchip, photo, behavior notes.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Operators — Intake &amp; Safety</h3>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Publish policy and accepted vaccine proofs.</li>
          <li>Require uploads at least 7 days ahead for new clients.</li>
          <li>Use clear signage about cough symptoms and rescheduling.</li>
          <li>Maintain sanitation, ventilation, and zone separation for quiet rest.</li>
          <li>Log any incidents and communicate early, with specifics, not generalities.</li>
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
          Always consult your veterinarian about vaccines, medications, and travel or boarding plans.
          Facilities should adapt these checklists to local regulations and their veterinarian of
          record.
        </p>
      </main>
    </>
  );
}
