'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function KennelCoughPittsburghGuide() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Kennel Cough (CIRDC) in Pittsburgh: A Practical, Evidence-Informed Guide for Owners and Boarding & Daycare Facilities';
  const date = 'August 22, 2025';
  const categories = ['owner', 'boarding', 'daycare'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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

  const description =
    'A long-form, Pittsburgh-aware guide to kennel cough (CIRDC): what it is, how it spreads, how to treat it by life stage, what vaccines can (and cannot) do, realistic prevention at home and in facilities, and how to protect seniors when younger dogs attend daycare or boarding.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference: never use “index,follow” */}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-it-is" className="underline hover:opacity-80">What Kennel Cough (CIRDC) Is</a></li>
            <li><a href="#pittsburgh-seasonality" className="underline hover:opacity-80">Pittsburgh Seasonality</a></li>
            <li><a href="#spread" className="underline hover:opacity-80">How It Spreads (and Why Facilities Do Not “Create” It)</a></li>
            <li><a href="#signs" className="underline hover:opacity-80">Common Signs &amp; Red Flags</a></li>
            <li><a href="#testing" className="underline hover:opacity-80">When To See a Vet &amp; Testing Basics</a></li>
            <li><a href="#treatment" className="underline hover:opacity-80">Treatment Overview</a></li>
            <li><a href="#life-stages" className="underline hover:opacity-80">Treatment by Life Stage</a></li>
            <li><a href="#isolation" className="underline hover:opacity-80">Isolation &amp; Return-to-Daycare Timelines</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccines: Bordetella, CPIV, CAV-2 &amp; Canine Influenza</a></li>
            <li><a href="#facility-standards" className="underline hover:opacity-80">Facility Standards: Cleaning, Air, Cohorting</a></li>
            <li><a href="#multi-dog-households" className="underline hover:opacity-80">Protecting Seniors in Multi-Dog Homes</a></li>
            <li><a href="#fault" className="underline hover:opacity-80">Is It the Facility&rsquo;s Fault?</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Practical Checklists</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <p className="mb-3">
              Kennel cough is the everyday term for <strong>canine infectious respiratory disease complex (CIRDC)</strong>. Multiple viruses and bacteria can be involved; risk rises wherever dogs mix—boarding, daycare, grooming, training, shelters, parks, and travel. Most cases are mild and resolve in about a week, but a small subset progress to pneumonia and need urgent veterinary care. Vaccines reduce severity and shedding but cannot cover every organism. Clean air, good hygiene, immediate isolation of coughers, and honest communication are the pillars of prevention.
            </p>
            <p className="mb-2">
              <strong>Pittsburgh note:</strong> fall and winter feel like “kennel cough season” because dogs spend more time indoors breathing recirculated air in closer quarters—similar to human cough-and-flu season. CIRDC can occur any time of year; indoor density and ventilation are the big levers.
            </p>
            <p className="text-sm text-gray-700">
              Educational content only. Always consult your veterinarian for diagnosis and personalized treatment.
            </p>
          </div>
        </section>

        {/* What it is */}
        <section id="what-it-is" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What Kennel Cough (CIRDC) Is</h2>
          <p className="mb-3">
            CIRDC is a <em>syndrome</em>—not a single germ—of contagious respiratory infections that inflame the upper airways and trigger a characteristic hacking or honking cough. The usual suspects include <em>Bordetella bronchiseptica</em>, canine parainfluenza virus (CPIV), canine adenovirus-2 (CAV-2), canine respiratory coronavirus, pneumovirus, <em>Mycoplasma cynos</em>, and others. Co-infections are common, and the mix circulating in a community can shift over time.
          </p>
          <p className="mb-3">
            The typical clinical course is mild and self-limited, often resolving in about 7–10 days, though a cough can linger longer, especially after exercise or cold-air exposure. A minority of dogs progress to lower airway disease or bacterial pneumonia and need more aggressive care.
          </p>
          <p>
            Incubation varies by pathogen; many agents fall in the ~2–10 day window from exposure to signs. That variability is one reason community clusters can look “staggered,” with cases appearing across several weeks after a busy holiday or show weekend.
          </p>
        </section>

        {/* Pittsburgh seasonality */}
        <section id="pittsburgh-seasonality" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why Cases Feel Seasonal in Pittsburgh</h2>
          <p className="mb-3">
            Western Pennsylvania’s rhythm is familiar: as temperatures drop, people and dogs gather indoors; humidity falls; some buildings seal up; and ventilation rates vary. Boarding and daycare volumes surge around holidays, and many homes add daycare or grooming to burn energy when sidewalks are icy. The result is more opportunities for exposure—not a new organism invented each winter. Think density, duration, and indoor air.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f0f7f2] p-4 text-sm">
            <strong>Pittsburgh tip:</strong> schedule vaccine updates and wellness checks before the October–January indoor surge, and use appointment windows that avoid crowded lobbies.
          </div>
        </section>

        {/* Spread */}
        <section id="spread" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How It Spreads (and Why Facilities Do Not “Create” It)</h2>
          <p className="mb-3">
            CIRDC pathogens spread via respiratory droplets and aerosols, direct dog-to-dog contact, and contaminated objects (bowls, toys, leashes, hands, clothing). Any place where dogs share air and surfaces increases risk—boarding, daycare, parks, group training, shows, groomers, shelters. That is exposure math, not malice. Reputable facilities manage risk; none can make a community respiratory disease vanish.
          </p>
          <p className="mb-3">
            Shedding usually lasts days to a couple of weeks for most viral causes. <em>Bordetella bronchiseptica</em> is a known outlier and can be shed for up to two to three months after recovery in some dogs. That’s one reason occasional cases still pop up even in well-run operations after an apparent lull.
          </p>
          <p>
            Fortunately, most CIRDC agents are readily inactivated on <em>clean</em> surfaces by appropriate disinfectants when product, dilution, and contact time are correct. Adenoviruses are tougher than many enveloped viruses, which is why facilities choose products validated for those organisms and apply them to pre-cleaned surfaces for the labeled time.
          </p>
        </section>

        {/* Signs */}
        <section id="signs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Signs &amp; Red Flags</h2>
          <p className="mb-3">
            The classic sign is a sudden, frequent, honking or hacking cough. Activity often triggers bouts, and some dogs retch foam after a coughing fit. Other signs may include sneezing, nasal or eye discharge, and a low-grade fever.
          </p>
          <p className="mb-3">
            <strong>Call your veterinarian promptly</strong> if you see any of the following: labored or fast breathing, blue-tinged gums or tongue, marked lethargy, poor appetite, high fever, repeated vomiting, or if a puppy, senior, brachycephalic breed, or dog with heart/lung disease is affected. These can signal pneumonia or complications.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> record a 15-second video of the cough and your dog’s resting breathing. Share it with the clinic so triage teams can gauge urgency remotely.
          </div>
        </section>

        {/* Testing */}
        <section id="testing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">When To See a Veterinarian &amp; Testing Basics</h2>
          <p className="mb-3">
            Many mild cases are managed by history and physical examination alone. Testing is most valuable when disease is severe or prolonged, a facility outbreak may be unfolding, or when specific therapy and isolation decisions depend on knowing the agent. <strong>Respiratory PCR panels</strong> on nasal/pharyngeal swabs are the primary tool; they work best when collected <em>early</em> (ideally within the first few days of signs) and before antibiotics.
          </p>
          <p>
            Because some viruses shed briefly and because handling or timing can cause false negatives, a negative PCR does not always exclude infection. Your veterinarian will interpret results in context and may treat supportively based on clinical status while watching for red flags that prompt imaging, oxygen, culture, or hospitalization.
          </p>
        </section>

        {/* Treatment overview */}
        <section id="treatment" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Treatment Overview (What Most Dogs Need)</h2>
          <p className="mb-3">
            For the typical, uncomplicated case, treatment centers on <strong>rest</strong>, <strong>cough control when appropriate</strong>, <strong>hydration</strong>, and <strong>monitoring</strong>. Many infections are viral or mixed; universal antibiotic use for every cough is discouraged. Evidence-based guidance recommends reserving antimicrobials for dogs that are systemically ill (fever, inappetence, lethargy), have mucopurulent discharge, or show signs consistent with bacterial lower airway disease. <em>Doxycycline</em> is a common first-line option when <em>Bordetella</em> or secondary bacterial infection is suspected, with duration tailored to response by the attending veterinarian.
          </p>
          <p className="mb-3">
            Antitussives may be considered for exhausting, non-productive coughs <em>after</em> pneumonia has been ruled out. Nebulization and gentle coupage can help mobilize secretions in some cases. Avoid over-the-counter human cold products unless your veterinarian explicitly recommends a dose and product; many contain xylitol, decongestants, or other ingredients that are unsafe for dogs.
          </p>
          <p>
            Strict separation from other dogs, avoiding group activities, and skipping chill, dusty, or smoky environments are part of therapy. Most dogs recover uneventfully in 7–10 days; a mild cough can linger longer, especially after vigorous play or cold-air exposure.
          </p>
        </section>

        {/* Life stages */}
        <section id="life-stages" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Treatment by Life Stage</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <p className="mb-3">
            Young dogs have immature immune systems and narrower airways; they dehydrate faster and can slide into pneumonia more quickly. For puppies with cough, involve your veterinarian early, even if signs seem mild. Expect a conservative plan: early exam, rest, careful temperature checks, hydration support, strict isolation, and a lower threshold for antibiotics if fever or systemic signs appear. If appetite drops, offer warmed, highly palatable food in small, frequent meals; maintain water access at all times.
          </p>
          <p className="mb-3">
            Socialization still matters. If a cough interrupts that critical window, swap dog-to-dog interactions for controlled exposures to people, surfaces, and sounds at home while recovery proceeds. Your veterinarian may recommend a mucosal (intranasal) Bordetella/CPIV vaccine once recovered if risk remains high.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Dogs in the Middle Years</h3>
          <p className="mb-3">
            Healthy adult dogs usually experience an uncomplicated course. Emphasize activity restriction, air that is neither overly dry nor cold, and calm routines that do not provoke coughing fits. If a dog attends daycare, boarding, group classes, or grooming, inform those providers immediately and keep the dog home for the recommended isolation window (see below). Adults with stubborn coughs, fever, decreased appetite, or any breathing change require rechecks because secondary bacterial infection or pneumonia may be developing.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Seniors</h3>
          <p className="mb-3">
            Older dogs may have concurrent issues such as collapsing trachea, laryngeal dysfunction, heart disease, or early lung changes. Those conditions can magnify the impact of even a “routine” respiratory infection. Treat seniors as higher-risk: earlier exams, lighter use of sedating cough suppressants, attention to drug interactions, humidified air, and vigilant monitoring of resting respiratory rate at home. Thresholds for thoracic radiographs and supplemental oxygen are lower when seniors show effortful breathing or poor energy.
          </p>
        </section>

        {/* Isolation */}
        <section id="isolation" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Isolation &amp; Return-to-Daycare Timelines</h2>
          <p className="mb-3">
            As a general rule, infected dogs should be kept away from other dogs for about <strong>10–14 days from the start of signs</strong>, and longer if cough persists or if a veterinarian advises it. Most viral agents shed for less than two weeks; once shedding stops, the dog is no longer contagious even if a mild cough lingers.
          </p>
          <p className="mb-3">
            The exception is <em>Bordetella bronchiseptica</em>, which some dogs can shed for <strong>two to three months</strong> after apparent recovery. Facilities manage this by requiring full resolution of clinical signs plus a set number of asymptomatic days before return and by discussing special cases with the household and veterinarian.
          </p>
          <p>
            For exposed but currently healthy dogs, many organizations use a <strong>10–14 day observation</strong> period from the last known exposure to watch for signs. Actual policies vary by facility and circumstance; communicate early and often.
          </p>
        </section>

        {/* Vaccines */}
        <section id="vaccines" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Vaccines: What They Do — and What They Cannot Do</h2>
          <p className="mb-3">
            Vaccines help reduce the severity and shedding of several key CIRDC agents. In the United States, core canine vaccines include distemper, adenovirus, and parvovirus, with parainfluenza included in many combinations. Bordetella and canine influenza are non-core lifestyle vaccines recommended based on exposure risk. Your veterinarian will tailor a plan to your dog and activities.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bordetella &amp; Parainfluenza (often combined)</h3>
          <p className="mb-3">
            <strong>Mucosal vaccines</strong> (intranasal or oral) generate local airway immunity and begin to protect relatively quickly—useful before boarding or daycare. Injectable formulations require a two-dose series and more time to achieve protection. Boosting frequency depends on risk; some high-exposure dogs benefit from more frequent mucosal boosters per veterinary guidance.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Canine Influenza (H3N2 ± H3N8)</h3>
          <p className="mb-3">
            Canine influenza is a separate, highly contagious respiratory virus. Vaccines (commonly H3N2 or bivalent H3N2/H3N8) require two initial doses, then boosters. Vaccination does not prevent every case, but it can reduce severity and shedding and is prudent for dogs that board or mix with many dogs. Current public-health assessments indicate a <strong>low risk to people</strong>; there have been no documented human infections with canine influenza viruses.
          </p>
        </section>

        {/* Facility standards */}
        <section id="facility-standards" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Facility Standards: Cleaning, Air, Cohorting &amp; Communication</h2>
          <p className="mb-3">
            Well-run facilities lower, but cannot eliminate, risk. Reasonable expectations include: visible separation of coughing dogs; prompt owner notifications; fresh-air and ventilation targets; <strong>routine disinfection with proven products and correct contact times</strong>; and capacity-aware group management. Policies should be posted clearly and used consistently during busy seasons.
          </p>
          <p className="mb-3">
            Most CIRDC agents are readily inactivated on pre-cleaned surfaces by appropriate disinfectants. Organic debris can inactivate some products, so <strong>pre-clean first</strong>, then apply disinfectant for the full label time. Adenoviruses are more resilient than many enveloped viruses; products such as properly diluted bleach or potassium peroxymonosulfate are typically used when adenovirus is a concern.
          </p>
          <p>
            Outbreak management relies on early identification, immediate isolation, and testing decisions made with veterinarians familiar with population medicine. Communication beats secrecy: owners need to know when exposure has occurred and what steps are being taken.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f0f7f2] p-4 text-sm">
            <strong>Facility note:</strong> publish vaccine requirements (Bordetella/CPIV ± CIV for social dogs), exclusion windows for cough, and how owners should report signs after a visit. The best time to set expectations is <em>before</em> the season ramps up.
          </div>
        </section>

        {/* Multi-dog households */}
        <section id="multi-dog-households" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Protecting Seniors in Multi-Dog Homes (When Young Dogs Attend Daycare/Boarding)</h2>
          <p className="mb-3">
            Many Pittsburgh homes include both a high-energy young dog who thrives in daycare and an older companion who prefers quiet. During fall and winter, you can reduce household risk without keeping everyone home forever. Use these layers:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccination plan:</strong> keep core vaccines current. Ask your veterinarian whether Bordetella/CPIV (mucosal) and canine influenza are advisable for your social dog and whether your senior should receive lifestyle coverage based on comorbidities and exposure.</li>
            <li><strong>Arrival routine:</strong> after daycare, take a short outdoor decompression walk. Wipe faces, paws, and collars. Swap harnesses/leashes into a “dirty bin” for routine washing.</li>
            <li><strong>Air &amp; humidity:</strong> run HEPA filtration in shared rooms and keep indoor humidity moderate (not dry). Good air lowers exposure density for <em>every</em> respiratory pathogen.</li>
            <li><strong>Food &amp; water:</strong> separate bowls and licki-mats; wash daily in hot, soapy water. Avoid face-licking games with seniors.</li>
            <li><strong>Symptom watch:</strong> if your young dog starts coughing or has a snotty nose, <em>isolate</em> from the senior immediately, notify your facility, and call your vet for guidance. Move to separate rooms at night until cleared.</li>
            <li><strong>Travel weeks:</strong> if boarding around holidays, plan a “buffer window” on either side of a trip and avoid big group dog parks that same week. Spread-out exposures reduce the odds of bringing something home.</li>
          </ul>
          <p>
            The goal is not zero risk (impossible) but <em>risk management</em> that keeps household harmony—especially for elders with heart or airway conditions.
          </p>
        </section>

        {/* Facility fault? */}
        <section id="fault" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">If Your Boarding or Daycare Facility Sees Cases, Is It Their Fault?</h2>
          <p className="mb-3">
            Short answer: <strong>usually not</strong>. Community respiratory diseases come from the community. Dogs pick up pathogens in many places—parks, training classes, pet-friendly stores, groomers, neighbors’ yards, even brief sidewalk greetings. A facility does not “create” kennel cough in a lab and hand it out. What a reputable facility <em>can</em> do is reduce risk through vaccination policies, intake screening, small group sizes, strong ventilation, smart cleaning, and quick isolation of coughers.
          </p>
          <p className="mb-3">
            In the same way schools do not invent colds, dog facilities do not invent CIRDC. But the best facilities <em>own the response</em>: they notify clients transparently, adjust operations during clusters (e.g., pausing large play groups), and coordinate with veterinarians if testing is indicated. Owners also own their part: vaccinate appropriately, keep coughing dogs home, disclose exposures, and avoid dropping off a dog with “just a little tickle.”
          </p>
          <p>
            Shared responsibility and early communication protect the whole community far better than blame does.
          </p>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Practical Checklists (Print This)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Daily Checklist (Respiratory Season)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning scan: cough, nasal discharge, breathing effort, energy, appetite.</li>
            <li>Before daycare: verify no cough/sneeze fits overnight; pack your dog’s own leash/collar; confirm facility policies.</li>
            <li>Homecoming: outdoor decompression walk; wipe face and gear; wash bowls; rotate soft gear through laundry regularly.</li>
            <li>Air quality: run HEPA filtration where dogs rest; avoid smoke, heavy fragrances, or dust.</li>
            <li>If signs start: isolate from other dogs; record a 15-second video; call your veterinarian.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Daily Checklist (High-Traffic Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Entrance screening: ask owners about cough/sneeze, appetite, and energy; turn away symptomatic dogs gracefully.</li>
            <li>Ventilation: confirm air exchanges; open safe exterior doors for bursts of fresh air when weather permits.</li>
            <li>Cohorting: keep playgroups small and stable; separate high-vocal dogs who stimulate cough.</li>
            <li>Cleaning: pre-clean, then disinfect; respect label contact times; launder soft items hot; sanitize high-touch surfaces often.</li>
            <li>Communication: if a cough is observed, isolate immediately, notify the owner, and document the plan.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When To Recheck (Any Life Stage)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Cough persists beyond 10–14 days or worsens.</li>
            <li>Fever, lethargy, poor appetite, or labored breathing appears.</li>
            <li>Puppies and seniors—err on the side of earlier re-exams.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> pin these lists in your Petunia profile. Add a simple log (date, signs, meds given, appetite, energy) to keep the whole household aligned.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can my dog get kennel cough even if vaccinated?</strong><br />
            Yes. Vaccines reduce severity and shedding for covered agents, but CIRDC includes multiple organisms and new combinations. Vaccinated dogs tend to have milder, shorter illness—still worth it for the dog and the community.
          </p>

          <p className="mb-3">
            <strong>How long is my dog contagious?</strong><br />
            For many viral causes, shedding lasts days to about two weeks. <em>Bordetella</em> is the outlier and may be shed for two to three months by some dogs. Follow your veterinarian’s guidance and your facility’s return policy.
          </p>

          <p className="mb-3">
            <strong>Is canine influenza the same as kennel cough?</strong><br />
            No. Canine influenza (H3N2 ± H3N8) is a separate virus that can look similar clinically. Vaccines exist and are advised for high-exposure dogs. Current public-health assessments indicate a low risk to people.
          </p>

          <p className="mb-3">
            <strong>Should I give human cough medicine?</strong><br />
            Only if your veterinarian prescribes a specific product and dose. Many human products contain ingredients unsafe for dogs (e.g., xylitol, certain decongestants).
          </p>

          <p className="mb-3">
            <strong>What if I have both a daycare-loving youngster and a fragile senior?</strong><br />
            Layer precautions: vaccination plans, good air at home, separate bowls, post-daycare wipe-downs, and immediate isolation if any cough appears. Most households can keep both dogs happy with a few routines.
          </p>

          <p>
            <strong>Do facilities hide outbreaks?</strong><br />
            Good ones do not. Transparency builds trust and shortens outbreaks. Ask your facility how they notify owners and what thresholds trigger changes in operations.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA). <em>Canine Infectious Respiratory Disease Complex (Kennel Cough)</em> overview.&nbsp;
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/canine-infectious-respiratory-disease-complex-kennel-cough" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Kennel Cough</em> (Respiratory System). Co-infections and clinical course.&nbsp;
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/kennel-cough" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              University of Wisconsin Shelter Medicine Program. <em>Bordetella Bronchiseptica Post-Recovery Shedding</em> (2–3 months possible).&nbsp;
              <a href="https://sheltermedicine.wisc.edu/library/resources/post-recovery-bordetella-shedding-in-dogs-for-how-long-and-do-we-need-to-be-concerned" target="_blank" rel="noopener noreferrer">Guidance</a>
            </li>
            <li>
              AAHA. <em>2022 Canine Vaccination Guidelines</em> (core vs lifestyle; Bordetella/CPIV/CIV recommendations).&nbsp;
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">Summary</a>&nbsp;|&nbsp;
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
            </li>
            <li>
              CDC. <em>About Dog Flu (Canine Influenza)</em>—risk to people remains low, no human cases to date.&nbsp;
              <a href="https://www.cdc.gov/flu-in-animals/about/canine-flu.html" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              UC Davis / ASV resources on cleaning and disinfection; product choice and contact times matter.&nbsp;
              <a href="https://jsmcah.org/index.php/jasv/article/view/42/22" target="_blank" rel="noopener noreferrer">ASV Guidelines (2022)</a>
            </li>
            <li>
              UC Davis Koret Shelter Medicine &amp; VIN/Veterinary Partner—CIRDC testing &amp; management; doxycycline use when indicated.&nbsp;
              <a href="https://www.sheltermedicine.com/library/resources/canine-infectious-respiratory-disease-complex-cirdc-a-k-a-kennel-cough" target="_blank" rel="noopener noreferrer">Koret overview</a>&nbsp;|&nbsp;
              <a href="https://veterinarypartner.vin.com/default.aspx?id=4951478&pid=19239" target="_blank" rel="noopener noreferrer">Veterinary Partner</a>
            </li>
            <li>
              Cornell Riney Canine Health Center. Respiratory disease signs and care reminders.&nbsp;
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/canine-respiratory-disease-outbreaks" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              Merck Animal Health (client education sheet). Disinfection notes; adenovirus resilience; bleach 1:32 or potassium peroxymonosulfate when appropriate.&nbsp;
              <a href="https://www.merck-animal-health-usa.com/offload-downloads/canine-cough-overview" target="_blank" rel="noopener noreferrer">PDF</a>
            </li>
            <li>
              CDC &amp; Cornell. Sampling timing for agent detection (PCR works best early).&nbsp;
              <a href="https://www.vet.cornell.edu/animal-health-diagnostic-center/testing/testing-protocols-interpretations/canine-influenza-h3n2-updates" target="_blank" rel="noopener noreferrer">Cornell CIV updates</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized advice.
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
