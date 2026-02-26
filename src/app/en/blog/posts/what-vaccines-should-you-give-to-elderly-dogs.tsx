'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatVaccinesShouldYouGiveToElderlyDogs() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'What Vaccines Should You Give to Elderly Dogs? Lifespan Schedules, Senior-Specific Adjustments, Side Effects, Geography, and Multi-Dog Household Strategy';
  const date = 'August 22, 2025';
  const categories = ['owner', 'boarding', 'vet'] as const;

  // Keep keys/labels aligned with prior posts on your site
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
          Senior dogs deserve tailored preventive care that respects the realities of aging while still guarding against serious disease. Owners often ask a deceptively simple question: <strong>as my dog gets older, do we keep vaccinating the same way?</strong> The answer is nuanced. Some vaccines continue on routine schedules, some are clearly <em>risk-based</em>, and some can be timed or substituted with <em>antibody titers</em> to reduce unnecessary pokes. Geography, boarding/daycare rules, coexisting illnesses, body size, and whether younger, highly social dogs live in the same home all meaningfully change the plan.
        </p>

        <p className="mb-6">
          This guide walks through the vaccines most dogs receive as puppies and adults, how the plan evolves in senior years, and how to navigate side effects and special cases. We will cover: which vaccines remain non-negotiable, which ones are lifestyle or region dependent, when and how titers can be used, what to do if a senior is on immunosuppressive drugs, and how to think about multi-dog households where younger dogs attend daycare or dog parks. You will leave with a concise checklist and a two-minute script you can use with your veterinarian to finalize a safe, sensible plan for your older dog.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answers (Fast Facts)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Core viral vaccines (distemper, adenovirus, parvovirus)</strong> typically move to <strong>every 3 years</strong> after the puppy series and first adult booster. In seniors, titers can help avoid unnecessary boosters; many older dogs retain protective antibodies for years. Rabies remains governed by <strong>law</strong> (one- or three-year products), and titers usually <em>do not</em> substitute for legal proof.
          </li>
          <li>
            <strong>Leptospirosis</strong> is now widely recommended <strong>annually for most dogs</strong> in North America. Risk is no longer limited to farms or ponds; urban exposure exists. Senior dogs may still benefit if healthy enough; schedule intelligently if your dog has a history of reactions.
          </li>
          <li>
            <strong>Bordetella/parainfluenza (kennel cough) &amp; canine influenza</strong> are <em>noncore</em> but frequently <strong>required</strong> by boarding/daycare or used in local outbreaks. Seniors that board or live with social younger dogs often still need these.
          </li>
          <li>
            <strong>Lyme (Borrelia) vaccine</strong> is region-dependent. In Northeast, Upper Midwest, and other expanding tick zones, seniors with exposure may benefit; combine with aggressive tick control.
          </li>
          <li>
            <strong>Side effects</strong> are generally uncommon and mild, but risk increases with <em>multiple injections at one visit</em> and in <em>small-breed</em> dogs. Breed can matter. Spacing vaccines and choosing mucosal options (where appropriate) can help sensitive seniors.
          </li>
          <li>
            <strong>House with young social dogs?</strong> Their exposures can raise the senior&#39;s risk. Keep the youngsters&#39; vaccines current and strongly consider senior-appropriate protection against respiratory diseases and leptospirosis.
          </li>
          <li>
            <strong>International travel</strong> and <strong>state/municipal rules</strong> can override individual risk judgments, especially for rabies. Always confirm local law and boarding requirements before changing a senior&#39;s schedule.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 1 — Vaccine 101 Across the Lifespan</h2>
        <p className="mb-4">
          Most dogs follow a predictable path. In puppyhood, the immune system is maturing and maternal antibodies can block vaccine take; this is why puppies receive a <em>series</em> of combination shots that end at or after 16 weeks of age. As adults, modified-live core viral vaccines (distemper, adenovirus, parvovirus) transition to an extended interval because they produce strong, long-lasting immunity in most dogs. In middle age, many dogs add risk-based vaccines (leptospirosis, Bordetella/parainfluenza, Lyme, influenza) depending on lifestyle and geography.
        </p>
        <p className="mb-4">
          Senior years introduce two big variables: <strong>immunosenescence</strong> (age-related changes in immune function) and <strong>comorbidities</strong> (heart, lung, kidney, endocrine, or immune-mediated disease). Seniors may respond <em>less robustly</em> to <em>brand-new</em> antigens, yet they generally retain memory for viruses they were vaccinated against earlier in life. Practically, that means boosters for core viral diseases are still effective on a multi-year cadence or can be guided by titers, while first-time administration of a <em>new</em> noncore vaccine in a very old dog may produce a weaker primary response. Your veterinarian will weigh these trade-offs against actual exposure risk and facility rules.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Core vs. Noncore (Plain English)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Core (for nearly all dogs):</strong> Distemper (CDV), Adenovirus (CAV-2, protects against infectious hepatitis), Parvovirus (CPV-2), and <strong>Rabies</strong> (mandated by law in many jurisdictions).
          </li>
          <li>
            <strong>Noncore (risk-based):</strong> Leptospirosis, Bordetella bronchiseptica, Canine parainfluenza, Canine influenza, Lyme disease, and niche regional products (e.g., rattlesnake toxoid in parts of the Southwest). Some noncore have become effectively “core for most dogs” in certain regions based on updated evidence and expert consensus.
          </li>
          <li>
            <strong>Not recommended:</strong> Canine <em>enteric</em> coronavirus (the old intestinal coronavirus) and Giardia vaccines are generally not advised for routine use.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — What Changes in Senior Dogs?</h2>
        <p className="mb-4">
          Aging affects both the innate and adaptive immune systems. Research suggests older dogs may mount <em>weaker primary responses</em> to novel antigens, while <em>recall responses</em> to previously encountered core viruses are typically preserved. In practice: if your senior dog completed puppy and adult boosters for distemper/adenovirus/parvovirus, immunity often persists for years. Many geriatric dogs show protective antibody titers against these viruses, though protection can fade with time since last vaccination and in the very old. This is why titers can be a helpful decision tool in seniors—especially if you want to minimize injections but avoid gaps in protection.
        </p>
        <p className="mb-6">
          Comorbidities complicate timing. Dogs receiving chemotherapy or immune-suppressing drugs may respond poorly to vaccines or face higher complication risks from infection itself. Scheduling around drug cycles, staging doses, and choosing lower-reactogenicity formulations/routes where possible are all reasonable senior strategies. If there is a known history of vaccine reactions, separating shots across visits and pre-booking a longer observation window after vaccination are prudent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 3 — Senior Vaccine-by-Vaccine Guidance</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Rabies (legal framework first)</h3>
        <p className="mb-4">
          Rabies policy is dictated by law, not solely by medical risk. Most U.S. states and many countries require vaccination on a one- or three-year schedule, and <strong>antibody titers are not accepted</strong> as a legal substitute for proof of vaccination. Some states allow limited medical exemptions when a veterinarian certifies that vaccination would endanger the dog, but exemptions are not universally available and typically must be revisited annually. If you travel internationally with your dog, additional rabies documentation and, in some situations, titers from approved labs may be required for entry or re-entry. Work from the law backward when planning for a senior, then adapt the rest of the schedule around legal dates and travel plans.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Distemper, Adenovirus, Parvovirus (the “core trio” in DAPP/DA2PP)</h3>
        <p className="mb-4">
          After the puppy series and the first adult booster, these modified-live vaccines usually move to every 3 years. In seniors, two sensible options exist:
          <strong> (1)</strong> continue routine 3-year boosters, or <strong>(2)</strong> use antibody titers (rapid in-clinic kits or reference lab panels) to confirm protection and boost only if below protective thresholds. Both are widely used approaches; your vet can calibrate to your dog&#39;s health status and local risk.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>When titers help:</strong> frail seniors; dogs with a prior reaction; dogs on complex medication schedules; owners aiming to minimize injections while maintaining protection.
          </li>
          <li>
            <strong>When to just boost:</strong> titers are inaccessible or cost-prohibitive; boarding requires documented vaccination within a set interval; the senior is healthy and has no history of reactions.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Leptospirosis (bacterial, zoonotic)</h3>
        <p className="mb-4">
          Leptospirosis is transmitted by wildlife and environmental contamination and is now recognized in <em>urban</em> as well as rural settings. Current expert consensus increasingly considers annual leptospirosis vaccination appropriate for most dogs. For seniors, that means <strong>do not assume they have aged out of risk</strong>—especially if there is outdoor exposure, wildlife in the area, puddles/standing water, or younger housemates with active lifestyles. If your dog has a genuine history of hypersensitivity, discuss spacing, brand selection, and whether to stage risk-based vaccines across separate visits to reduce same-day injection count.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Bordetella &amp; Canine Parainfluenza (kennel cough components)</h3>
        <p className="mb-4">
          These vaccines are primarily about group-setting risk. Many facilities require them every 6–12 months. In seniors, you can reduce systemic reactogenicity by choosing <strong>mucosal</strong> products (oral or intranasal) when allowed, as these stimulate local airway immunity and may have a different side-effect profile than injectable bacterins. If your boarding facility specifies a route, follow their rule; otherwise, ask your vet about route trade-offs for your older dog.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Canine Influenza (H3N2 ± H3N8)</h3>
        <p className="mb-4">
          Influenza vaccination is noncore and <em>risk-based</em>. Seniors who board, attend daycare, or live where H3N2 activity is reported may benefit—mainly through reduced illness severity and shorter viral shedding if exposed. Plan ahead: most products require a 2-dose series 2–4 weeks apart for initial protection. Facilities may require the series to be complete before entry.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Lyme (Borrelia burgdorferi)</h3>
        <p className="mb-4">
          Consider this regionally. In the Northeast, Upper Midwest, and other expanding tick habitats, seniors with outdoor exposure may benefit from annual Lyme vaccination in addition to rigorous tick prevention. In lower-risk regions with excellent tick control, vaccination may be optional. If a senior has significant comorbidities, discuss risk vs. benefit and whether exposure can be mitigated with environmental controls alone.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Rattlesnake toxoid (regional)</h3>
        <p className="mb-6">
          This product targets Western Diamondback envenomation and is <em>highly regional</em> and <em>controversial</em>, with limited peer-reviewed evidence of efficacy in dogs. Many academic centers do not routinely recommend it. If you live in an endemic area and hike frequently, ask your veterinarian for the latest perspective, including the role of antivenin and emergency care plans. For most seniors, especially outside the Southwest, this is not on the routine list.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 4 — Side Effects in Seniors: What to Expect, How to Reduce Risk</h2>
        <p className="mb-4">
          Most vaccine reactions are mild (sleepiness, injection-site soreness, low-grade fever, reduced appetite for a day). Serious reactions are uncommon, but <strong>risk increases</strong> when multiple vaccines are given at one visit, and in <strong>smaller-breed</strong> dogs. Recent large datasets suggest <em>breed</em> and <em>very low body weight</em> are important risk factors, with some brachycephalic and toy breeds over-represented among reported events. Notably, risk assessments often show the highest per-visit adverse event rates when several vaccines are administered together—an easy lever to pull in seniors who can tolerate staged visits.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Space shots:</strong> If your senior needs multiple noncore vaccines, split them across visits when time allows.
          </li>
          <li>
            <strong>Choose route wisely:</strong> For kennel cough components, ask about mucosal routes (oral/intranasal) where acceptable.
          </li>
          <li>
            <strong>Observation time:</strong> Plan a longer post-vaccine observation period in clinic for seniors with prior reactions.
          </li>
          <li>
            <strong>Medication timing:</strong> Coordinate with oncologists or internal medicine specialists when a senior is on immune-modifying drugs.
          </li>
          <li>
            <strong>Know the red flags:</strong> facial swelling, hives, repeated vomiting, collapse, labored breathing. Seek care immediately.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 5 — Geography Matters (U.S. &amp; Global Notes)</h2>
        <p className="mb-4">
          Vaccine decisions are not made in a vacuum. Rabies is mandated by civil authorities. Leptospirosis risk is now recognized across cities and suburbs. Lyme vaccination is far more compelling in tick-dense counties, and canine influenza decisions often track local outbreak reports. Globally, organizations emphasize vaccinating <em>every</em> dog with core viral vaccines, then layering noncore by region and lifestyle. If you relocate or plan extended travel, revisit the plan with a local veterinarian who knows current risks and rules.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Rabies:</strong> follow your state/country law; titers usually do not replace legal proof. International travel may add form and titer requirements from approved labs—plan months ahead.
          </li>
          <li>
            <strong>Leptospirosis:</strong> broadly recommended annually for most dogs in North America; urban wildlife and puddles count as exposure.
          </li>
          <li>
            <strong>Lyme:</strong> strongest case in Northeast/Upper Midwest and in areas where blacklegged ticks are established or expanding.
          </li>
          <li>
            <strong>Influenza:</strong> vaccinate seniors when facilities require it or during documented local activity; otherwise, it remains risk-based.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 6 — Younger Dogs in the Same Home: Does It Change Senior Plans?</h2>
        <p className="mb-4">
          Yes—often. Younger dogs that attend daycare, dog parks, training classes, shows, or grooming can bring respiratory pathogens and environmental exposures home. That increased household pressure favors keeping the senior current on the <strong>facility-driven vaccines</strong> (Bordetella/parainfluenza and, when warranted, influenza) and strengthens the case for <strong>annual leptospirosis</strong>. You also get indirect protection when youngsters are vaccinated on time (less shedding, shorter illness if infected).
        </p>
        <p className="mb-6">
          Create a simple household calendar. Wherever possible, avoid scheduling all dogs&#39; vaccines on the same day—especially in tiny seniors or those with a prior reaction. Stagger visits, use mucosal routes where allowed, and keep written proof of each dog&#39;s vaccines organized for facilities. If a young dog becomes sick with a contagious cough, isolate from the senior and call your vet about testing and timing of any upcoming vaccinations for the older housemate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 7 — Where Titers Fit for Seniors</h2>
        <p className="mb-4">
          Titers measure circulating antibodies against specific antigens. For the core viral trio (distemper, adenovirus, parvovirus), titers can confirm protective immunity in many seniors and help avoid unnecessary boosters. Titers are <em>not</em> a legal substitute for rabies vaccination in most jurisdictions. For bacterial vaccines like leptospirosis and the mucosal respiratory vaccines, titers are <em>not</em> routinely used to guide decisions.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Use titers when:</strong> your senior is frail; there is a history of reactions; you are optimizing timing around major procedures or immune-suppressing drugs; or you simply prefer data before boosting.
          </li>
          <li>
            <strong>Re-titer cadence:</strong> many practices recheck annually or every 2–3 years in seniors, depending on prior values and risk tolerance.
          </li>
          <li>
            <strong>Interpretation nuance:</strong> titers reflect humoral immunity; cellular immunity also matters. Your vet will interpret results in context.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 8 — Putting It Together: Senior Vaccine Planning by Scenario</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Scenario A: Healthy 10-year-old, boards twice a year</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Rabies per law (confirm product interval and facility lead-time).</li>
          <li>Core viral (DAPP/DA2PP): titer now; boost only if below protective thresholds or if facility requires recent vaccination; otherwise continue 3-year schedule.</li>
          <li>Bordetella/parainfluenza: follow facility schedule; consider a mucosal product.</li>
          <li>Influenza: required by the facility or during local activity; complete 2-dose series ahead of boarding.</li>
          <li>Leptospirosis: annual; schedule separately from other injections if small-breed or reaction history.</li>
          <li>Lyme: vaccinate if in an endemic area and the dog hikes; combine with rigorous tick control.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Scenario B: 13-year-old with chronic kidney disease, lives with a 2-year-old daycare dog</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Coordinate with your internist. Space vaccines; consider titers for core viral antigens.</li>
          <li>Leptospirosis remains important given zoonotic risk and household exposure; discuss brand selection and staging.</li>
          <li>Bordetella/parainfluenza: mucosal option if acceptable; time away from procedures or drug changes.</li>
          <li>Influenza: add during local activity or if the daycare requires it.</li>
          <li>Lyme: only if exposure exists; tick prevention is mandatory for the youngster either way.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Scenario C: 11-year-old toy breed, history of post-vaccine lethargy</h3>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Break multi-vaccine visits into separate appointments (e.g., leptospirosis one week, Bordetella the next).</li>
          <li>Use titers for core viral vaccines to minimize unnecessary injections.</li>
          <li>Book a longer in-clinic observation window; schedule a quiet day afterward.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 9 — Two-Minute Script for Your Veterinarian</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>My dog&#39;s health &amp; lifestyle:</strong> &quot;Age 12, small breed, mild heart disease, lives with a daycare-attending 3-year-old.&quot;
          </li>
          <li>
            <strong>Local context &amp; rules:</strong> &quot;Any current influenza or leptospirosis activity here? What do boarding/daycare facilities require?&quot;
          </li>
          <li>
            <strong>Core strategy:</strong> &quot;Let&#39;s run titers for distemper/adenovirus/parvovirus and boost only if needed.&quot;
          </li>
          <li>
            <strong>Risk-based choices:</strong> &quot;Annual leptospirosis; Bordetella/parainfluenza as mucosal if allowed; influenza if activity or required; Lyme if exposure.&quot;
          </li>
          <li>
            <strong>Safety:</strong> &quot;Can we separate vaccines across visits and schedule a longer watch period?&quot;
          </li>
          <li>
            <strong>Rabies/legal:</strong> &quot;Confirm timing so we remain compliant with state law and any travel plans.&quot;
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Part 10 — Owner Checklist (Print or Save)</h2>
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>List boarding/daycare/grooming dates for the next 12 months.</li>
          <li>Confirm rabies product interval and legal timing; plan international travel paperwork far in advance.</li>
          <li>Ask about local influenza activity and facility requirements.</li>
          <li>If your senior is small-breed or has a reaction history, schedule vaccines on separate days.</li>
          <li>Use titers for core viral antigens if you want to minimize injections.</li>
          <li>Keep leptospirosis annual unless your vet advises otherwise; it is common in urban settings, too.</li>
          <li>Assess Lyme risk realistically; use tick control regardless of vaccination choice.</li>
          <li>If younger dogs in the home are highly social, keep their vaccines current and adjust the senior&#39;s plan accordingly.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Common Questions (Senior Edition)</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Do elderly dogs still need the same vaccines as when they were young?</h3>
        <p className="mb-4">
          Often yes for <strong>core viral</strong> diseases (on a 3-year cadence or guided by titers) and for <strong>rabies</strong> per law. Many seniors still need <strong>leptospirosis</strong> annually, and they may need <strong>kennel cough/influenza</strong> coverage if they board or live with social younger dogs. The details depend on health, exposure, geography, and facility rules.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Are certain breeds more prone to negative side effects as they age?</h3>
        <p className="mb-4">
          Large datasets show that <strong>small body weight</strong>, <strong>multiple simultaneous injections</strong>, and <strong>certain breeds</strong> are associated with higher adverse event reporting. Risk management (spacing, route selection, observation) is sensible for any senior, especially toy and brachycephalic breeds.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Can titers replace boosters for my senior?</h3>
        <p className="mb-4">
          For distemper/adenovirus/parvovirus, titers can often guide or replace routine boosters. For rabies, titers generally do <em>not</em> satisfy legal requirements. For leptospirosis and the respiratory vaccines, titers are not routinely used to make decisions.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">We are moving from a dry climate to a wetter city. Should my senior&#39;s plan change?</h3>
        <p className="mb-4">
          Probably. Leptospirosis risk increases with wildlife contact and standing water. Tick exposure and influenza policies also vary by region. Book a visit with a local clinic and update the risk-based pieces of the plan.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            American Animal Hospital Association (AAHA). 2022 Canine Vaccination Guidelines (overview, core vs. noncore, schedules, titers, adverse events).
            <a className="underline ml-1" href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">aaha.org</a>
            {' '}|{' '}
            <a className="underline" href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf" target="_blank" rel="noopener noreferrer">guideline PDF</a>
          </li>
          <li>
            WSAVA Vaccination Guidelines Group. 2024 Global Vaccination Guidelines (core every 3+ years after booster; noncore by risk; titer use; aging effects).
            <a className="underline ml-1" href="https://wsava.org/global-guidelines/vaccination-guidelines/" target="_blank" rel="noopener noreferrer">wsava.org</a>
            {' '}|{' '}
            <a className="underline" href="https://wsava.org/wp-content/uploads/2024/05/2024-Guidelines-for-the-Vaccination-of-Dogs-and-Cats.pdf" target="_blank" rel="noopener noreferrer">PDF</a>
          </li>
          <li>
            Dall’Ara P. et al. (2023). Effect of Aging on the Immune Response to Core Vaccines in Senior and Geriatric Dogs.
            <a className="underline ml-1" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10385316/" target="_blank" rel="noopener noreferrer">PMC article</a>
          </li>
          <li>
            HogenEsch H. (2010). Effect of ageing on the immune response of dogs to vaccines (primary vs. recall responses).
            <a className="underline ml-1" href="https://pubmed.ncbi.nlm.nih.gov/19897206/" target="_blank" rel="noopener noreferrer">PubMed</a>
          </li>
          <li>
            ACVIM 2023 Consensus on Leptospirosis in Dogs (annual vaccination recommended broadly).
            <a className="underline ml-1" href="https://onlinelibrary.wiley.com/doi/10.1111/jvim.16903" target="_blank" rel="noopener noreferrer">J Vet Intern Med</a>
            {' '}|{' '}
            <a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10658540/" target="_blank" rel="noopener noreferrer">PMC summary</a>
          </li>
          <li>
            AAHA key pages: Bordetella/parainfluenza &amp; canine influenza (risk-based, routes, intervals), leptospirosis page.
            <a className="underline ml-1" href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/bordetella-canine-parainfluenza-and-canine-influenza/" target="_blank" rel="noopener noreferrer">Bordetella/PIV/Flu</a>
            {' '}|{' '}
            <a className="underline" href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/leptospirosis/" target="_blank" rel="noopener noreferrer">Leptospirosis</a>
          </li>
          <li>
            Moore GE et al. (2005). Adverse events within 3 days of vaccination in dogs (risk factors: small size, multiple injections).
            <a className="underline ml-1" href="https://avmajournals.avma.org/view/journals/javma/227/7/javma.2005.227.1102.xml" target="_blank" rel="noopener noreferrer">JAVMA</a>
          </li>
          <li>
            Moore GE et al. (2023). Breed, smaller weight, and multiple injections associated with higher adverse event reports (large dataset).
            <a className="underline ml-1" href="https://avmajournals.avma.org/downloadpdf/view/journals/javma/261/11/javma.23.03.0181.pdf" target="_blank" rel="noopener noreferrer">JAVMA PDF</a>
          </li>
          <li>
            CDC: Lyme disease maps &amp; tick distribution (geographic risk).
            <a className="underline ml-1" href="https://www.cdc.gov/lyme/data-research/facts-stats/lyme-disease-case-map.html" target="_blank" rel="noopener noreferrer">Lyme maps</a>
            {' '}|{' '}
            <a className="underline" href="https://www.cdc.gov/ticks/data-research/facts-stats/blacklegged-tick-surveillance.html" target="_blank" rel="noopener noreferrer">Tick surveillance</a>
          </li>
          <li>
            Rabies legal notes &amp; exemptions overview (titers not accepted as legal proof; exemptions vary by state).
            <a className="underline ml-1" href="https://www.avma.org/javma-news/2016-07-01/exploring-role-titers-rabies-vaccination" target="_blank" rel="noopener noreferrer">AVMA news</a>
            {' '}|{' '}
            <a className="underline" href="https://www.animallaw.info/content/rabies-vaccination-and-exemption-laws-dogs" target="_blank" rel="noopener noreferrer">Animal Law summary</a>
          </li>
          <li>
            Rattlesnake toxoid: AAHA cautions about limited efficacy data; academic center perspective.
            <a className="underline ml-1" href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/rattlesnake-toxoid/" target="_blank" rel="noopener noreferrer">AAHA page</a>
            {' '}|{' '}
            <a className="underline" href="https://healthtopics.vetmed.ucdavis.edu/health-topics/feline/vaccination-guidelines-dogs-and-cats" target="_blank" rel="noopener noreferrer">UC Davis VMTH</a>
          </li>
          <li>
            Not recommended: canine <em>enteric</em> coronavirus &amp; Giardia vaccines.
            <a className="underline ml-1" href="https://wsava.org/wp-content/uploads/2024/05/2024-Guidelines-for-the-Vaccination-of-Dogs-and-Cats.pdf" target="_blank" rel="noopener noreferrer">WSAVA 2024</a>
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
          This article is educational and shares general guidance for healthy adult and senior dogs.
          Always follow your veterinarian&#39;s advice for your individual pet, especially if your dog
          has pre-existing medical conditions, is immunocompromised, or has a history of vaccine
          reactions. Product availability, disease activity, laws, and facility policies vary by region
          and time. Rabies is governed by law; titers typically do not replace legal proof.
        </p>
      </main>
    </>
  );
}
