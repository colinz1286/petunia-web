'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function KennelCoughGlobalGuide() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Kennel Cough (CIRDC): The 2025 Global Guide for Owners and Boarding & Daycare Facilities (U.S., Canada, U.K., Ireland, Australia & New Zealand)';
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
    'A long-form, international guide to kennel cough (CIRDC) for the U.S., Canada, the U.K., Ireland, Australia & New Zealand: what it is, how it spreads, life-stage treatment plans (puppies, adults, seniors), prevention that actually works, vaccine roles (Bordetella/CPIV, canine influenza), isolation timelines, and protecting seniors when younger dogs attend daycare or boarding.';

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
            <li><a href="#global-seasonality" className="underline hover:opacity-80">Seasonality Across Regions</a></li>
            <li><a href="#spread" className="underline hover:opacity-80">How It Spreads (and Why Facilities Do Not &ldquo;Create&rdquo; It)</a></li>
            <li><a href="#signs" className="underline hover:opacity-80">Common Signs &amp; Red Flags</a></li>
            <li><a href="#testing" className="underline hover:opacity-80">When To See a Vet &amp; Testing Basics</a></li>
            <li><a href="#treatment" className="underline hover:opacity-80">Treatment Overview</a></li>
            <li><a href="#life-stages" className="underline hover:opacity-80">Treatment by Life Stage</a></li>
            <li><a href="#isolation" className="underline hover:opacity-80">Isolation &amp; Return-to-Daycare Timelines</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccines: Bordetella, CPIV, CAV-2 &amp; Canine Influenza</a></li>
            <li><a href="#facility-standards" className="underline hover:opacity-80">Facility Standards: Cleaning, Air, Cohorting</a></li>
            <li><a href="#multi-dog-households" className="underline hover:opacity-80">Protecting Seniors in Multi-Dog Homes</a></li>
            <li><a href="#owner-facility-partnership" className="underline hover:opacity-80">Shared Responsibility (Owners &amp; Facilities)</a></li>
            <li><a href="#myths" className="underline hover:opacity-80">Myths &amp; Realities</a></li>
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
              Kennel cough is the everyday term for <strong>canine infectious respiratory disease complex (CIRDC)</strong>, a cluster of contagious upper-airway infections. It spreads wherever dogs share air and surfaces—boarding, daycare, grooming, training, shelters, parks, travel hubs, and apartment lifts. Most cases are mild and self-limited; a minority progress to pneumonia and need urgent care. <strong>Vaccines</strong> reduce severity and shedding but cannot block every organism, because CIRDC is a team sport of viruses and bacteria. <strong>Prevention</strong> that works: fresh air and ventilation, good hygiene with the right contact times, smart group management, immediate isolation of coughers, and transparent owner-facility communication.
            </p>
            <p className="mb-2">
              Seasonality is about <em>indoor density</em>, <em>ventilation</em>, and <em>holiday travel</em>, not a single winter germ. The pattern differs by hemisphere but the playbook is the same: layer protection before your region&rsquo;s indoor surge.
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
            CIRDC is a <em>syndrome</em>—not a single germ—caused by multiple pathogens that inflame the upper airways and trigger a characteristic hacking or honking cough. Frequent contributors include <em>Bordetella bronchiseptica</em>, canine parainfluenza virus (CPIV), canine adenovirus-2 (CAV-2), canine respiratory coronavirus, pneumovirus, and <em>Mycoplasma cynos</em>. Co-infections are common; this matters because no vaccine can target every possible combination in circulation.
          </p>
          <p className="mb-3">
            The typical course is mild and self-limited: 7–10 days of cough with some variation by dog and pathogen. A subset of patients—particularly puppies, seniors, brachycephalic breeds, and dogs with heart or lung compromise—can deteriorate, developing lower-airway disease or bacterial pneumonia that requires imaging, oxygen, and antimicrobial therapy. Early veterinary triage is crucial when red flags appear.
          </p>
          <p>
            Incubation (time from exposure to signs) generally falls in the 2–10 day window for many agents, while a few pathogens incubate faster or longer. That variability explains why community clusters sometimes look staggered, with new coughs appearing weeks after a busy holiday or large event.
          </p>
        </section>

        {/* Global seasonality */}
        <section id="global-seasonality" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Seasonality Across Regions (U.S., Canada, U.K., Ireland, Australia &amp; New Zealand)</h2>
          <p className="mb-3">
            The biology of CIRDC does not change when you cross an ocean, but context does. What owners notice as &ldquo;kennel cough season&rdquo; usually reflects the rhythm of human life: when weather pushes people and dogs indoors, humidity drops, buildings seal up, and ventilation is inconsistent, respiratory pathogens move more efficiently. The timing differs by hemisphere, but the risk levers are the same everywhere:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Northern Hemisphere</strong> (United States, Canada, United Kingdom, Ireland): higher indoor density October–March. Holiday boarding spikes and family travel add exposures in November–January.</li>
            <li><strong>Southern Hemisphere</strong> (Australia, New Zealand): indoor surges cluster around local winter months, roughly May–September, with school and winter holidays creating similar crowding effects.</li>
            <li><strong>Urban vs. rural</strong>: high-rise living, lifts, shared amenity spaces, and busy daycare environments tighten exposure networks; rural regions trade density for longer transport distances and farm-dog gatherings.</li>
            <li><strong>Travel corridors</strong>: airport daycares, pet-friendly hotels, and show circuits knit distant communities into a single respiratory ecosystem.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f0f7f2] p-4 text-sm">
            <strong>Planning tip:</strong> schedule vaccine updates and wellness checks <em>before</em> your region&rsquo;s indoor surge. Ask facilities about ventilation, isolation spaces, and communication policies during high-traffic weeks.
          </div>
        </section>

        {/* Spread */}
        <section id="spread" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How CIRDC Spreads (and Why Facilities Do Not &ldquo;Create&rdquo; It)</h2>
          <p className="mb-3">
            CIRDC pathogens move via respiratory droplets and aerosols, direct dog-to-dog contact, and contaminated objects such as bowls, toys, leads, hands, clothing, and grooming tools. Any place where dogs share air and surfaces increases risk—boarding and daycare, yes, but also dog parks, training classes, shows, pet-friendly stores, lifts, and sidewalk greetings. Exposure is a network phenomenon: pathogens hitchhike on social life, not on a single building.
          </p>
          <p className="mb-3">
            It is tempting during a cluster to blame the last facility a dog visited. In reality, a dog can incubate infection picked up days earlier in an entirely different setting, or meet an asymptomatic shedder in a park. Reputable facilities manage risk rigorously, but <strong>no facility can make a community respiratory disease disappear</strong>. What they <em>can</em> do: require appropriate vaccines, screen arrivals, cohort groups wisely, optimize air, disinfect correctly, and isolate coughers immediately.
          </p>
          <p>
            Shedding for most viral agents lasts days to a couple of weeks. <em>Bordetella bronchiseptica</em> is the outlier—some dogs shed for two to three months post-recovery—which explains why occasional cases still appear even after an apparent lull. Correct disinfectant choice and contact time inactivate most agents on <em>clean</em> surfaces; adenoviruses are hardier and inform product choice and procedures.
          </p>
        </section>

        {/* Signs */}
        <section id="signs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Signs &amp; Red Flags</h2>
          <p className="mb-3">
            The hallmark is a sudden, frequent, honking or hacking cough. Exercise, excitement, or leash pressure can trigger fits, and some dogs retch foam after coughing. Additional signs can include sneezing, nasal discharge, eye discharge, and a low-grade fever. Appetite and energy range from normal to slightly down in uncomplicated cases.
          </p>
          <p className="mb-3">
            <strong>Seek urgent veterinary care</strong> if you observe any of the following: fast or labored breathing, blue-tinged gums or tongue, persistent lethargy, refusal to eat, high fever, repeated vomiting, or a clear increase in breathing effort at rest. Puppies, seniors, brachycephalic breeds, or dogs with heart/lung disease warrant earlier examination and a lower threshold for imaging.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> record a 15-second video of the cough and your dog&rsquo;s resting breathing. Share it with your clinic so triage teams can gauge urgency remotely.
          </div>
        </section>

        {/* Testing */}
        <section id="testing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">When To See a Veterinarian &amp; Testing Basics</h2>
          <p className="mb-3">
            Many mild cases are diagnosed clinically and managed supportively. Testing becomes most useful when disease is severe or prolonged, when a facility outbreak is suspected, when specific public-health decisions hinge on the agent, or when lower-airway disease is possible. <strong>Respiratory PCR panels</strong> on nasal/pharyngeal swabs are the primary tool. They perform best early in the illness and before antimicrobial exposure. Because short shedding windows and sampling technique can yield false negatives, results are interpreted in the context of clinical signs and imaging.
          </p>
          <p>
            If pneumonia is suspected—fever, systemic illness, increased breathing effort, auscultation changes—your veterinarian may recommend thoracic radiographs, oxygen therapy, hospitalization, and targeted antimicrobials. Culture and sensitivity, while not routine in typical kennel cough, can be valuable in non-responders or complicated cases.
          </p>
        </section>

        {/* Treatment overview */}
        <section id="treatment" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Treatment Overview (What Most Dogs Need)</h2>
          <p className="mb-3">
            For uncomplicated cases, therapy focuses on <strong>rest</strong>, <strong>hydration</strong>, <strong>calm routines</strong>, and <strong>cough control</strong> when appropriate. Because many infections are viral or mixed, <em>blanket</em> antibiotic use is discouraged. Evidence-aligned practice reserves antimicrobials for dogs that are systemically ill (fever, inappetence, marked lethargy), have mucopurulent discharge, or show signs consistent with bacterial lower-airway disease. <em>Doxycycline</em> is a common first-line option when <em>Bordetella</em> or secondary bacterial infection is a concern, with duration tailored to response.
          </p>
          <p className="mb-3">
            <strong>Antitussives</strong> (cough suppressants) can be considered for exhausting, non-productive coughs <em>after</em> pneumonia has been ruled out. <strong>Nebulization</strong> with sterile saline and gentle <strong>coupage</strong> (percussion) help mobilize secretions in some patients. Keep indoor air neither overly dry nor cold; avoid smoke and harsh fragrances. <strong>Do not</strong> give human cold medicines unless your veterinarian prescribes a product and dose; many contain xylitol or decongestants that are unsafe for dogs.
          </p>
          <p>
            Most dogs recover uneventfully within 7–10 days, though a mild cough can linger, especially after exertion or cold-air exposure. Rechecks are appropriate if signs worsen, if a dog fails to improve by the expected timeline, or if red flags appear.
          </p>
        </section>

        {/* Life stages */}
        <section id="life-stages" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Treatment by Life Stage</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies (Neonates through Adolescents)</h3>
          <p className="mb-3">
            Puppies have narrower airways, immature immune systems, and higher fluid needs. They can dehydrate or progress to pneumonia more quickly than adults. If a puppy develops a cough, involve your veterinarian early—even with mild signs. Expect a conservative plan: early examination, rest, careful temperature checks, hydration support, strict isolation from other dogs, and a lower threshold for antimicrobials if fever or systemic signs appear. Offer warmed, highly palatable food in small, frequent meals; maintain water access at all times.
          </p>
          <p className="mb-3">
            Socialization remains important. If a cough interrupts the socialization window, replace dog-to-dog play with controlled exposures at home—novel surfaces, sounds, gentle handling—with generous reinforcement. Once recovered, your veterinarian may recommend a mucosal (intranasal or oral) Bordetella/CPIV vaccine if risk remains high.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Healthy Adults (Early to Middle Years)</h3>
          <p className="mb-3">
            Most healthy adults experience an uncomplicated course. Emphasize activity restriction, predictable routines, and air that is comfortable to breathe. If a dog attends daycare, boarding, group classes, or grooming, inform those providers immediately and keep the dog home for the recommended isolation interval. Adults with stubborn coughs, fever, decreased appetite, or any breathing change require rechecks because secondary bacterial infection or pneumonia may be developing.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Seniors (and Dogs with Comorbidities)</h3>
          <p className="mb-3">
            Older dogs and dogs with laryngeal dysfunction, collapsing trachea, heart disease, or chronic airway changes often feel CIRDC more intensely. Treat seniors as higher-risk: earlier exams, judicious use of sedating antitussives, attention to drug interactions, humidified air, and vigilant monitoring of resting respiratory rate at home. Thresholds for thoracic radiographs and supplemental oxygen are lower when seniors show effortful breathing, cyanosis, or poor energy. Align decisions with quality-of-life goals discussed with the family.
          </p>
        </section>

        {/* Isolation */}
        <section id="isolation" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Isolation &amp; Return-to-Daycare Timelines</h2>
          <p className="mb-3">
            As a general rule, infected dogs should be kept away from other dogs for <strong>10–14 days from the start of signs</strong>, and longer if cough persists or if a veterinarian advises it. Many viral agents shed for less than two weeks; once shedding stops, a mild lingering cough does not necessarily equal contagiousness. Policies vary by country and facility; follow your veterinarian&rsquo;s guidance and the specific rules of your provider.
          </p>
          <p className="mb-3">
            The notable exception is <em>Bordetella bronchiseptica</em>, which some dogs can shed for <strong>two to three months</strong> after apparent recovery. Facilities manage this reality by requiring complete resolution of clinical signs plus a set number of asymptomatic days before return, documenting special cases, and maintaining open lines with the household and the vet.
          </p>
          <p>
            For exposed but currently healthy dogs, many organizations use a <strong>10–14 day observation</strong> period from the last known exposure to watch for signs. If signs appear, isolate immediately and consult your clinic.
          </p>
        </section>

        {/* Vaccines */}
        <section id="vaccines" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Vaccines: What They Do — and What They Cannot Do</h2>
          <p className="mb-3">
            Vaccines help reduce the severity and shedding of several key CIRDC agents. In most regions, <strong>core</strong> canine vaccines include distemper, adenovirus, and parvovirus, with parainfluenza commonly included in combination products. <strong>Non-core lifestyle</strong> vaccines—Bordetella and canine influenza—are recommended based on exposure. Your veterinarian will tailor a plan to your dog&rsquo;s activities, travel, and health status.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bordetella &amp; Parainfluenza (often combined)</h3>
          <p className="mb-3">
            Mucosal vaccines (intranasal or oral) generate local airway immunity and begin to protect relatively quickly—useful before boarding or daycare. Injectable formulations require a two-dose series and more time to achieve protection. Boosting frequency depends on risk; some high-exposure dogs benefit from more frequent mucosal boosters as advised by their veterinarian and acceptable within local guidelines.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Canine Influenza (H3N2 ± H3N8)</h3>
          <p className="mb-3">
            Canine influenza is a distinct, highly contagious respiratory virus. Vaccines (H3N2 or bivalent H3N2/H3N8) require two initial doses and then boosters. Vaccination does not prevent every infection but can blunt severity and reduce shedding—valuable for dogs that board, attend daycare, travel, or mix with many dogs. Public-health assessments at this time indicate a low risk to people.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Expectations &amp; Communication</h3>
          <p>
            A vaccinated dog can still cough because CIRDC is multi-agent. The aim is fewer severe cases, less shedding, shorter outbreaks, and safer communities. Facilities should articulate their vaccine requirements clearly; owners should plan boosters ahead of travel and holiday surges.
          </p>
        </section>

        {/* Facility standards */}
        <section id="facility-standards" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Facility Standards: Cleaning, Air, Cohorting &amp; Communication</h2>
          <p className="mb-3">
            Well-run facilities lower, but cannot eliminate, risk. Reasonable global expectations include: intake screening that turns away symptomatic dogs; vaccine policies that match risk; <strong>fresh-air and ventilation targets</strong>; <strong>routine disinfection</strong> with products validated for the organisms of concern and used at correct dilution and contact time; <strong>cohorting</strong> to keep playgroups small, stable, and well-matched; and fast, transparent owner notifications when a cough is observed.
          </p>
          <p className="mb-3">
            Disinfection works best on <em>pre-cleaned</em> surfaces; organic debris inactivates some products. Adenoviruses are more resilient than many enveloped viruses, guiding product choice (for example, correctly diluted bleach or potassium peroxymonosulfate) and contact times. Soft items need hot laundering; high-touch surfaces deserve frequent attention. Air changes, filtration, and adding outdoor breaks improve outcomes as much as any single chemical.
          </p>
          <p>
            Outbreak management relies on early identification, prompt isolation, veterinary guidance on testing, and honest timelines. A facility that communicates early and often is doing right by its community.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f0f7f2] p-4 text-sm">
            <strong>Facility note:</strong> publish vaccine requirements (Bordetella/CPIV ± CIV for social dogs), exclusion windows for cough, cohorting rules, and how owners should report signs after a visit. The best time to set expectations is <em>before</em> the busy season.
          </div>
        </section>

        {/* Multi-dog households */}
        <section id="multi-dog-households" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Protecting Seniors in Multi-Dog Homes (When Young Dogs Attend Daycare/Boarding)</h2>
          <p className="mb-3">
            Many families include a high-energy youngster who adores daycare plus an older companion who prefers quiet. You can reduce household risk without keeping everyone home forever. Think in layers:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Vaccination plans:</strong> keep core vaccines current; ask whether Bordetella/CPIV (mucosal) and canine influenza fit your dogs&rsquo; lifestyle and health. Seniors with heart or airway issues may benefit from specific scheduling to minimize exposures.</li>
            <li><strong>Arrival routine:</strong> after daycare, take a short outside decompression walk. Wipe faces, paws, and collars. Drop leads and harnesses into a &ldquo;dirty bin&rdquo; for routine washing.</li>
            <li><strong>Air &amp; humidity:</strong> use HEPA filtration in shared rooms and keep indoor humidity moderate. Good air dilutes exposure density for <em>every</em> respiratory pathogen.</li>
            <li><strong>Food &amp; water:</strong> separate bowls and lick-mats; wash daily in hot, soapy water. Skip face-licking games with elders.</li>
            <li><strong>Symptom watch:</strong> if your young dog starts coughing or gets snotty, isolate from the senior immediately, notify your facility, and call your vet. Sleep in separate rooms until cleared.</li>
            <li><strong>Holiday planning:</strong> around travel, add a buffer window before/after boarding and avoid large, high-energy parks the same week. Spacing exposures lowers the odds of bringing something home.</li>
          </ul>
          <p>
            The goal is not zero risk (impossible) but <em>managed risk</em> that preserves both dogs&rsquo; quality of life.
          </p>
        </section>

        {/* Shared responsibility */}
        <section id="owner-facility-partnership" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Shared Responsibility: Owners &amp; Facilities</h2>
          <p className="mb-3">
            Respiratory disease is a community problem; the solution is a community partnership. Owners choose vaccination, stay home when dogs are coughing, disclose exposures, and avoid the &ldquo;just a little tickle&rdquo; drop-off. Facilities screen arrivals, maintain air and hygiene, cohort wisely, isolate coughers, and communicate early. When both halves do their part, clusters are smaller, shorter, and less disruptive.
          </p>
          <p>
            Think of it like schools and colds. Schools do not invent viruses, but great schools have policies that reduce spread and keep families informed. The same mindset belongs in pet care.
          </p>
        </section>

        {/* Myths */}
        <section id="myths" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Myths &amp; Realities</h2>
          <p className="mb-3">
            <strong>Reality:</strong>{' '}exposure networks include parks, training, neighbors&rsquo; dogs, lifts, pet stores, and travel. Good facilities lower risk and own their response; they do not control the entire web of contact.
            <strong>Reality:</strong> exposure networks include parks, training, neighbors&rsquo; dogs, lifts, pet stores, and travel. Good facilities lower risk and own their response; they do not control the entire web of contact.
          </p>
          <p className="mb-3">
            <strong>Myth:</strong> &ldquo;Vaccinated dogs cannot get kennel cough.&rdquo;<br />
            <strong>Reality:</strong> vaccines cover key agents and reduce severity and shedding; CIRDC contains multiple organisms and shifting combinations. Aim for fewer severe cases and shorter outbreaks, not perfection.
          </p>
          <p className="mb-3">
            <strong>Myth:</strong> &ldquo;Antibiotics cure every cough.&rdquo;<br />
            <strong>Reality:</strong> many infections are viral or mixed. Indiscriminate antibiotics do not help and create resistance. Use them when clinical status and diagnostics support a bacterial role.
          </p>
          <p>
            <strong>Myth:</strong> &ldquo;If the cough is mild, I can keep social plans.&rdquo;<br />
            <strong>Reality:</strong> mild does not mean non-contagious. Keep coughing dogs home and notify your provider; that short pause protects the entire community.
          </p>
        </section>

        {/* Checklists */}
        <section id="checklists" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Practical Checklists (Print This)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Owner Daily Checklist (Respiratory Season)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Morning scan: cough, nasal discharge, breathing effort, energy, appetite.</li>
            <li>Before daycare: confirm no overnight cough/sneeze fits; pack your dog&rsquo;s own lead and collar; verify facility policies.</li>
            <li>Homecoming: outside decompression walk; wipe face and gear; launder soft items hot; wash bowls daily.</li>
            <li>Air quality: run HEPA filtration where dogs rest; avoid smoke and heavy fragrances.</li>
            <li>If signs start: isolate from other dogs; record a 15-second video; call your veterinarian.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Facility Daily Checklist (High-Traffic Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Entrance screening: ask owners about signs; turn away symptomatic dogs kindly.</li>
            <li>Ventilation: confirm air exchanges; use safe outdoor air when weather allows.</li>
            <li>Cohorting: keep groups small and stable; separate highly vocal dogs who trigger cough.</li>
            <li>Cleaning: pre-clean, then disinfect; respect label contact times; launder soft items hot; sanitize high-touch surfaces frequently.</li>
            <li>Communication: isolate coughers immediately; notify owners; document plans and follow-ups.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">When To Recheck (Any Life Stage)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Cough persists beyond 10–14 days or worsens.</li>
            <li>Fever, lethargy, poor appetite, or labored breathing appears.</li>
            <li>Puppies, seniors, and brachycephalics—err on the side of earlier exams.</li>
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
            Yes. Vaccines reduce severity and shedding for covered agents, but CIRDC involves multiple organisms and changing combinations. Vaccinated dogs tend to have milder, shorter illness—still worth it for your dog and the community.
          </p>

          <p className="mb-3">
            <strong>How long is my dog contagious?</strong><br />
            For many viral causes, shedding lasts days to about two weeks. <em>Bordetella</em> is the outlier and may be shed for two to three months by some dogs. Follow your vet&rsquo;s guidance and your facility&rsquo;s return policy.
          </p>

          <p className="mb-3">
            <strong>Is canine influenza the same as kennel cough?</strong><br />
            No. Canine influenza (H3N2 ± H3N8) is a separate virus that can look similar clinically. Vaccines exist and are advised for high-exposure dogs. Current assessments indicate a low risk to people.
          </p>

          <p className="mb-3">
            <strong>Should I give human cough medicine?</strong><br />
            Only if your veterinarian prescribes a specific product and dose. Many human products contain ingredients that are unsafe for dogs.
          </p>

          <p className="mb-3">
            <strong>What if I have both a daycare-loving youngster and a fragile senior?</strong><br />
            Layer precautions: vaccination plans, air quality at home, separate bowls, post-daycare wipe-downs, and immediate isolation if any cough appears. Most households can keep both dogs happy with a few routines.
          </p>

          <p>
            <strong>Do facilities hide outbreaks?</strong><br />
            Good ones do not. Transparency builds trust and shortens clusters. Ask your facility how they notify owners and what thresholds trigger changes in operations.
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
              Merck Veterinary Manual. <em>Kennel Cough</em> (Respiratory System) — pathogens, clinical course, and management.&nbsp;
              <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/kennel-cough" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              University of Wisconsin Shelter Medicine Program. <em>Bordetella</em> post-recovery shedding duration.&nbsp;
              <a href="https://sheltermedicine.wisc.edu/library/resources/post-recovery-bordetella-shedding-in-dogs-for-how-long-and-do-we-need-to-be-concerned" target="_blank" rel="noopener noreferrer">Guidance</a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). <em>Canine Vaccination Guidelines</em> — core vs. lifestyle vaccines; Bordetella/CPIV/CIV recommendations.&nbsp;
              <a href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">Summary</a>&nbsp;|&nbsp;
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
            </li>
            <li>
              CDC. <em>About Dog Flu (Canine Influenza)</em> — risk to people and prevention basics.&nbsp;
              <a href="https://www.cdc.gov/flu-in-animals/about/canine-flu.html" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              Association of Shelter Veterinarians (ASV). <em>Guidelines for Standards of Care in Animal Shelters</em> — cleaning/disinfection and air considerations.&nbsp;
              <a href="https://jsmcah.org/index.php/jasv/article/view/42/22" target="_blank" rel="noopener noreferrer">ASV Guidelines</a>
            </li>
            <li>
              Cornell Riney Canine Health Center. <em>Canine respiratory disease outbreaks</em> — signs and owner guidance.&nbsp;
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/canine-respiratory-disease-outbreaks" target="_blank" rel="noopener noreferrer">Read more</a>
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
