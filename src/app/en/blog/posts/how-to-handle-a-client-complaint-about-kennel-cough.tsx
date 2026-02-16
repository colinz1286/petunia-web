'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HandleClientComplaintKennelCough() {
  const locale = useLocale();

  const title = 'How to Handle a Client Complaint about Kennel Cough';
  const date = 'August 27, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    breeder: 'Breeders',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A practical, professional playbook for boarding/daycare owners and managers: what kennel cough (CIRDC) is, why it shows up in clean facilities, how to communicate with upset clients, what to say, what to comp, when to notify, and how to reduce future risk without overpromising zero risk.';

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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR Summary</a></li>
            <li><a href="#what-is-cirdc" className="underline hover:opacity-80">What Kennel Cough/CIRDC Actually Is</a></li>
            <li><a href="#incubation" className="underline hover:opacity-80">Incubation &amp; How It Spreads</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccines Help—but Don&#39;t Make Risk Zero</a></li>
            <li><a href="#not-dirt" className="underline hover:opacity-80">It&#39;s Not About a “Dirty” Facility</a></li>
            <li><a href="#naive" className="underline hover:opacity-80">Why Low-Exposure Dogs Can Get Sicker</a></li>
            <li><a href="#framework" className="underline hover:opacity-80">Step-by-Step Complaint Framework</a></li>
            <li><a href="#scripts" className="underline hover:opacity-80">Staff Scripts &amp; Client Templates</a></li>
            <li><a href="#notify" className="underline hover:opacity-80">When &amp; How to Notify Other Clients</a></li>
            <li><a href="#ops" className="underline hover:opacity-80">Operational Risk-Reduction Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ for Owners</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
          <p className="mb-4">
            Kennel cough—better called canine infectious respiratory disease complex (CIRDC)—is a contagious, multi-pathogen respiratory syndrome.
            It moves dog-to-dog via droplets, aerosols, and contaminated hands/objects. Even in a clean, well-run facility with vaccine
            requirements, some cases will occur because vaccines reduce severity and shedding but cannot block every organism or exposure.
            The professional response is empathy first, facts second, a clear veterinary plan, reasonable goodwill, and transparent
            communication with other clients when indicated.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use Petunia to log vaccine dates (Bordetella/CPIV/CAV-2; optional influenza), meds, and a temporary
            “respiratory rest” flag. That keeps your team, owners, and veterinarians aligned on return-to-care timelines and reduces back-and-forth.
          </div>
        </section>

        {/* What is CIRDC */}
        <section id="what-is-cirdc" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Kennel Cough/CIRDC Actually Is</h2>
          <p className="mb-3">
            CIRDC isn&#39;t one germ; it&#39;s a syndrome caused by several viruses and bacteria (for example Bordetella bronchiseptica, canine parainfluenza
            virus, canine adenovirus-2, Mycoplasma spp., and others). That is why one dog may show a mild, dry cough and another may look sicker—
            multiple organisms and host factors are in play. Most healthy adult dogs recover in 7–10 days with rest and veterinary guidance. Severe
            disease, pneumonia, or prolonged recovery are more likely in puppies, seniors, and dogs with other conditions.
          </p>
        </section>

        {/* Incubation & spread */}
        <section id="incubation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Incubation &amp; How It Spreads</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Incubation window:</strong> typically about 2–10 days. A dog can appear healthy at drop-off and cough at home days later.</li>
            <li><strong>Transmission:</strong> close nose-to-nose contact, cough/sneeze droplets, shared water bowls/toys, and human hands/clothing moving between dogs.</li>
            <li><strong>Group settings:</strong> anywhere dogs mingle—boarding, daycare, classes, shows, parks—raises exposure opportunities.</li>
          </ul>
          <p className="mb-3">
            This timing is essential for complaint handling: a cough after pickup does not prove infection occurred in your facility; exposure often
            happens <em>before</em> the visit (dog park, grooming, class) and only shows up days later.
          </p>
        </section>

        {/* Vaccines */}
        <section id="vaccines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vaccines Help—but Don&#39;t Make Risk Zero</h2>
          <p className="mb-3">
            Bordetella/CPIV and CAV-2 vaccines (often given as intranasal/oral combos for local airway immunity) and optional canine influenza vaccines
            substantially improve the situation: vaccinated dogs tend to get milder signs and shed less. But because CIRDC has many pathogens and
            exposure routes, vaccinated dogs can still cough. Your policy should set expectations clearly: vaccination is required to reduce risk,
            not to create an absolute guarantee.
          </p>
        </section>

        {/* Not about dirt */}
        <section id="not-dirt" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">It&#39;s Not About a “Dirty” Facility</h2>
          <p className="mb-3">
            Good sanitation, ventilation, and staff hygiene matter—and you should be excellent at them. But CIRDC spreads primarily through dog-to-dog
            contact, droplets, aerosols, and shared objects. That means <em>even spotless facilities</em> will see cases when an infected dog enters,
            just as kids bring home colds from school. Your message to clients should be: we minimize risk with science-based protocols, and we respond
            quickly and transparently when illness appears.
          </p>
        </section>

        {/* Naive/low-exposure */}
        <section id="naive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Low-Exposure Dogs Can Get Sicker</h2>
          <p className="mb-3">
            Dogs that rarely mix with others (and many puppies) may not have prior exposure or vaccine-primed mucosal immunity to common respiratory
            organisms. When these “naïve” dogs first enter busy environments, they can be more susceptible and sometimes show stronger signs. This
            isn&#39;t a character flaw or a cleanliness issue—it&#39;s basic immunology plus environment. Clear expectations and a slow, well-planned
            reintroduction to group play after recovery make future visits smoother.
          </p>
        </section>

        {/* Framework */}
        <section id="framework" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step-by-Step Complaint Framework (De-escalate with Facts)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Listen first.</strong> Let the client describe the timeline and the dog&#39;s current signs. Don&#39;t interrupt.</li>
            <li><strong>Empathize.</strong> “I&#39;m sorry your dog is coughing—that&#39;s stressful. Let&#39;s get you a clear plan.”</li>
            <li><strong>Explain CIRDC simply.</strong> Multi-pathogen, 2–10 day incubation, vaccines reduce severity but don&#39;t make risk zero.</li>
            <li><strong>Triage.</strong> Offer a same-day vet check recommendation and outline red-flag signs (labored breathing, lethargy, poor appetite).</li>
            <li><strong>Take responsibility for response, not blame.</strong> “We can&#39;t control every exposure, but we can respond professionally.”</li>
            <li><strong>Goodwill decision.</strong> Based on policy: credit for future day, waived late fees, or medication pickup support.</li>
            <li><strong>Document.</strong> Log date of onset, last visit, vaccine status, contacts, and the resolution offered.</li>
            <li><strong>Internal loop.</strong> Notify management, review cohort exposure, and update cleaning/ventilation steps for the day.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use a “CIRDC Call” template in Petunia notes: onset date, last attendance, vaccine dates, vet seen (Y/N),
            meds, follow-up date, and goodwill action. This makes audits and pattern detection easy.
          </div>
        </section>

        {/* Scripts */}
        <section id="scripts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staff Scripts &amp; Client Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Front-desk talk track (in person/phone)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2"><strong>Empathy:</strong> “I&#39;m sorry <em>[dog name]</em> is coughing. We know that&#39;s worrying.”</p>
            <p className="mb-2"><strong>Explain:</strong> “Kennel cough—CIRDC—is like a dog cold. It&#39;s contagious and has a 2–10 day incubation.
              Even vaccinated dogs can get a mild case, but vaccines help keep it shorter and less severe.”</p>
            <p className="mb-2"><strong>Plan:</strong> “We recommend checking in with your veterinarian today for guidance. We&#39;ll note this on your
              account and pause attendance until your vet clears a return.”</p>
            <p className="mb-0"><strong>Goodwill:</strong> “We&#39;ll add a credit of <em>[$X]</em> to your account for the inconvenience.”</p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Follow-up email template</h3>
          <pre className="whitespace-pre-wrap text-sm bg-[#f6efe4] border border-[#d9cfc2] rounded-md p-4">
Subject: Quick summary &amp; next steps for {`{{dogName}}`}

Hi {`{{clientFirstName}}`},

Thank you for speaking with us today. We&#39;re sorry {`{{dogName}}`} is coughing—CIRDC (often called kennel cough) is common wherever dogs
socialize. Because incubation is typically 2–10 days, signs can appear after a visit even when a facility is clean and vaccines are required.
Vaccination reduces severity and shedding but doesn&#39;t eliminate risk.

Next steps:
• Please contact your veterinarian for guidance today.
• Rest, hydration, and any prescribed meds as directed.
• Out of an abundance of caution, we&#39;ll pause {`{{dogName}}`}’s attendance until your vet clears a return.

We’ve added a {`{{creditAmount}}`} credit to your account as a goodwill gesture. If you have questions, reply here anytime.

— {`{{businessName}}`} Team
          </pre>
        </section>

        {/* Notify others */}
        <section id="notify" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When &amp; How to Notify Other Clients</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Single case, no overlap:</strong> Document internally; no broad notice.</li>
            <li><strong>Multiple cases in same cohort/dates:</strong> Send a calm, factual advisory to exposed dogs&#39; owners with signs to watch for and return-to-care guidance.</li>
            <li><strong>Pattern suggests cluster:</strong> Post a brief, reassuring update to your channels (email/social) emphasizing steps taken and vet partnership.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Public note template (short):</strong> “We are seeing a few cases of kennel cough (CIRDC) in the community. We require vaccines,
            cohort play, and increased sanitation, and we work closely with local veterinarians. If your dog coughs, please call your vet and let us
            know so we can guide return-to-play timing.”
          </div>
        </section>

        {/* Ops checklist */}
        <section id="ops" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operational Risk-Reduction Checklist</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccination policy:</strong> Require Bordetella/CPIV (and CAV-2 per vet guidance) with clear timing; offer canine influenza guidance based on local risk.</li>
            <li><strong>Intake screening:</strong> Ask about recent cough, nasal discharge, fever, lethargy, or exposure to coughing dogs. Reschedule if yes.</li>
            <li><strong>Cohorting:</strong> Keep stable play groups; avoid unnecessary mixing; separate new or higher-risk dogs.</li>
            <li><strong>Ventilation &amp; air changes:</strong> Improve airflow where feasible; avoid overcrowding.</li>
            <li><strong>Sanitation &amp; hand hygiene:</strong> Disinfect high-touch items; staff wash/sanitize between dogs and rooms.</li>
            <li><strong>Isolation &amp; return-to-care:</strong> Vet-cleared return after resolution of cough per your local veterinary partners.</li>
            <li><strong>Written protocols &amp; drills:</strong> Keep a concise “respiratory response” SOP; train staff quarterly.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Attach your respiratory SOP to each staff profile in Petunia and add a “Respiratory Season” banner to owner
            dashboards with the current guidance and contact info.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">FAQ for Owners</h2>
          <p className="mb-3">
            <strong>Did the facility cause my dog&#39;s cough?</strong><br />
            No single worker “causes” CIRDC. An infected dog brings it in, and it spreads the way colds spread in schools or offices. Clean, well-run
            facilities reduce risk but can&#39;t make it zero anywhere dogs mix.
          </p>
          <p className="mb-3">
            <strong>My dog is vaccinated. Why did they still cough?</strong><br />
            Vaccines reduce severity and shedding and are still strongly recommended. But because CIRDC involves many organisms and exposure routes,
            vaccinated dogs can occasionally get mild illness.
          </p>
          <p className="mb-3">
            <strong>How long does it last?</strong><br />
            Many dogs improve in about a week to ten days with rest and vet guidance. Puppies, seniors, or dogs with other issues may need more care—
            follow your veterinarian&#39;s instructions closely.
          </p>
          <p>
            <strong>Is this article veterinary advice?</strong><br />
            No—this guide educates owners and facilities. Always consult your veterinarian for diagnosis and treatment decisions.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA. Canine infectious respiratory disease complex (CIRDC).{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/canine-infectious-respiratory-disease-complex-kennel-cough" target="_blank" rel="noopener noreferrer">
                avma.org/.../canine-infectious-respiratory-disease-complex-kennel-cough
              </a>
            </li>
            <li>
              AVMA Blog. Answering clients&#39; questions about CIRDC (vaccines reduce severity/spread).{' '}
              <a href="https://www.avma.org/blog/answering-clients-questions-about-cirdc" target="_blank" rel="noopener noreferrer">
                avma.org/blog/answering-clients-questions-about-cirdc
              </a>
            </li>
            <li>
              AAHA. 2022 Canine Vaccination Guidelines (Bordetella/CPIV/CAV-2; lifestyle recommendations).{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">
                aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
              </a>
            </li>
            <li>
              AAHA. Vaccine lifestyle calculator &amp; key vaccination pages.{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/vaccine-lifestyle-calculator/" target="_blank" rel="noopener noreferrer">
                aaha.org/.../vaccine-lifestyle-calculator/
              </a>{' '}
              ·{' '}
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/bordetella-canine-parainfluenza-and-canine-influenza/" target="_blank" rel="noopener noreferrer">
                aaha.org/.../bordetella-canine-parainfluenza-and-canine-influenza/
              </a>
            </li>
            <li>
              Merck Veterinary Manual. Kennel cough overview &amp; timing.{' '}
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/kennel-cough" target="_blank" rel="noopener noreferrer">
                merckvetmanual.com/.../kennel-cough
              </a>
            </li>
            <li>
              Today&#39;s Veterinary Nurse. CIRDC basics (incubation 2–10 days; clinical course).{' '}
              <a href="https://todaysveterinarynurse.com/preventive-medicine/canine-infectious-respiratory-disease-complex/" target="_blank" rel="noopener noreferrer">
                todaysveterinarynurse.com/.../canine-infectious-respiratory-disease-complex/
              </a>
            </li>
            <li>
              University of Wisconsin Shelter Medicine. CIRDC prevention/management resources.{' '}
              <a href="https://sheltermedicine.wisc.edu/library/resources/canine-infectious-respiratory-disease-complex-cirdc-a-k-a-kennel-cough" target="_blank" rel="noopener noreferrer">
                sheltermedicine.wisc.edu/.../cirdc-a-k-a-kennel-cough
              </a>
            </li>
            <li>
              Ohio State University. CIRDC fact sheet (multi-pathogen; vaccines reduce severity/shedding).{' '}
              <a href="https://vet.osu.edu/sites/default/files/documents/Canine%20Infectious%20Respiratory%20Disease%20Fact%20Sheet%2020200511.pdf" target="_blank" rel="noopener noreferrer">
                vet.osu.edu/.../CIRDC Fact Sheet
              </a>
            </li>
            <li>
              AAHA. Infection control, prevention, and biosecurity (aerosols &amp; fomites).{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf" target="_blank" rel="noopener noreferrer">
                aaha.org/.../infection-control/icpb_guidelines.pdf
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
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
