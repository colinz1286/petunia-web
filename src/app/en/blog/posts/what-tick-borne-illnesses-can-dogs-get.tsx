'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatTickBorneIllnessesCanDogsGet() {
  const locale = useLocale();

  const title =
    'What Tick-Borne Illnesses Can Dogs Get? The 7 Big Ones (Vectors, Regions, Signs, Treatment, and Which Dogs Are at Higher Risk)';
  const date = 'August 21, 2025';
  const categories = ['owner'] as const;

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
          Ticks are efficient, stealthy vectors. A single bite can transmit bacteria or protozoa that
          inflame joints, damage blood cells and platelets, injure the kidneys, or in severe cases
          threaten a dog&#39;s life. The good news is that clear prevention, early testing, and prompt
          treatment dramatically improve outcomes. This guide covers the seven major tick-borne
          illnesses seen in dogs—Lyme disease, Ehrlichiosis, Anaplasmosis, Babesiosis, Rocky Mountain
          spotted fever, Bartonellosis, and Hepatozoonosis—spelling out which tick species transmit
          each disease, where they are most common, the signs you might see at home, and what
          veterinarians typically prescribe.
        </p>
        <p className="mb-4">
          Throughout, you&#39;ll find practical owner checklists, red flags that warrant urgent care, and
          notes on which dogs are at higher risk. If you hike, camp, travel, keep working dogs, or
          simply live in a tick-dense region, use the prevention section as a standing routine for
          your household. Year-round protection is not just a slogan—it is the single best investment
          you can make to keep your dog healthy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Fast Facts)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Lyme disease:</strong> spread by blacklegged ticks (Ixodes scapularis in the
            East/Upper Midwest; Ixodes pacificus on the Pacific Coast). Common in the Northeast,
            Upper Midwest, and coastal West. Typical therapy: doxycycline; alternatives may be used
            case-by-case. Kidney complications can occur in a small subset of dogs.
          </li>
          <li>
            <strong>Ehrlichiosis:</strong> most often via the brown dog tick (Rhipicephalus
            sanguineus; E. canis) and lone star tick (Amblyomma americanum; E. chaffeensis and
            E. ewingii). More cases in the South and South-Central U.S., expanding northward.
            First-line treatment is usually doxycycline.
          </li>
          <li>
            <strong>Anaplasmosis:</strong> A. phagocytophilum rides with the same blacklegged ticks
            that transmit Lyme; A. platys is linked to the brown dog tick. Upper Midwest and
            Northeast are hot spots for A. phagocytophilum. Doxycycline is typical therapy.
          </li>
          <li>
            <strong>Babesiosis:</strong> red blood cell parasite. <em>Large</em> Babesia (e.g.,
            B. canis vogeli) often linked to brown dog ticks; <em>small</em> Babesia (e.g.,
            B. gibsoni) frequently linked to bite wounds and transfusion; some tick involvement
            varies by region. Imidocarb is commonly used for large Babesia; atovaquone plus
            azithromycin is widely used for small Babesia.
          </li>
          <li>
            <strong>Rocky Mountain spotted fever (RMSF):</strong> transmitted by Dermacentor ticks
            (American dog tick; Rocky Mountain wood tick) and, in some regions, the brown dog tick.
            Nationwide distribution. Doxycycline is the treatment of choice.
          </li>
          <li>
            <strong>Bartonellosis:</strong> Bartonella species circulate primarily via fleas; ticks
            are investigated and may play a role for some species, but evidence varies by region and
            organism. Long courses and combinations (e.g., doxycycline with rifampin) are sometimes
            used when dogs are clinically ill.
          </li>
          <li>
            <strong>Hepatozoonosis:</strong> unusual among tick diseases—dogs become infected by
            <em> ingesting</em> an infected tick, not from a bite. H. americanum (Gulf Coast tick)
            causes severe illness in the South and South-Central U.S.; H. canis (brown dog tick) is
            more widespread globally. Protocols often combine acute therapy (e.g., trimethoprim-
            sulfonamide, clindamycin, pyrimethamine or ponazuril) with long-term decoquinate.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How Tick Transmission Works (Why Timing and Species Matter)</h2>
        <p className="mb-4">
          Different ticks carry different pathogens, and transmission usually requires hours of
          feeding. Blacklegged ticks often need roughly a day or two of attachment before Lyme
          bacteria are transmitted, whereas some rickettsial pathogens can move faster. Some species,
          like the brown dog tick, thrive in human dwellings and kennels, increasing exposure for
          pets who rarely leave the neighborhood. Others, like the Gulf Coast tick, are tied to
          ecological bands near the Gulf and southern states. A few pathogens, like Hepatozoon, are
          acquired when a dog grooms or eats an infected tick rather than from the bite itself.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Regional Patterns (High-Level Overview)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Blacklegged tick regions:</strong> Northeast, Mid-Atlantic, Upper Midwest
            (Ixodes scapularis) and Pacific coastal states (Ixodes pacificus). Expect Lyme and
            Anaplasma risk in these zones.
          </li>
          <li>
            <strong>Brown dog tick range:</strong> widespread in warmer climates; can establish
            indoor populations in homes, kennels, and shelters. Links to E. canis, A. platys, and
            some Babesia species.
          </li>
          <li>
            <strong>Lone star tick expansion:</strong> historically South and South-Central U.S., now
            expanding northward; associated with E. chaffeensis and E. ewingii.
          </li>
          <li>
            <strong>RMSF vectors:</strong> American dog tick and Rocky Mountain wood tick are
            established in large parts of the U.S.; brown dog tick may be important in some
            Southwest pockets.
          </li>
          <li>
            <strong>Gulf Coast tick corridor:</strong> key for H. americanum (American canine
            hepatozoonosis), concentrated in southern and south-central states.
          </li>
        </ul>

        {/* =========================
            1) LYME DISEASE
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">1) Lyme Disease (Borrelia burgdorferi)</h2>
        <p className="mb-4">
          Lyme disease in dogs is primarily transmitted by blacklegged ticks—Ixodes scapularis in the
          East and Upper Midwest and Ixodes pacificus along the Pacific Coast. Many exposed dogs never
          become clinically ill, but those that do often present with fever, lethargy, and shifting-
          leg lameness due to polyarthritis. A minority develop kidney complications characterized by
          protein loss (sometimes called Lyme nephritis), which requires aggressive management.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Where It Lives</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Vectors: Ixodes scapularis (East/Upper Midwest) and Ixodes pacificus (Pacific Coast).</li>
          <li>
            Regions: Northeast and Mid-Atlantic, Upper Midwest, and coastal West; the footprint is
            expanding in parts of North America.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Fever, lethargy, swollen lymph nodes.</li>
          <li>Shifting-leg lameness, joint swelling, reluctance to move.</li>
          <li>
            Less common but serious: protein-losing kidney disease with edema, weight loss, vomiting,
            and decreased appetite.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          Doxycycline is commonly used as first-line therapy in dogs. Alternatives such as amoxicillin
          or cefuroxime may be selected in specific cases. Dogs with suspected kidney involvement need
          prompt staging, urine protein assessment, and supportive care; cases with significant renal
          protein loss warrant close monitoring even after clinical improvement. Your veterinarian
          will decide whether follow-up testing is indicated and how to manage co-exposures to other
          Ixodes-borne pathogens.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs living in or traveling to endemic areas, outdoor and sport dogs, and dogs without
          year-round tick protection face higher risk. Some clinics recommend vaccination against
          Borrelia burgdorferi for dogs who live in high-incidence regions—ask your veterinarian
          whether that aligns with local risk and your dog&#39;s lifestyle.
        </p>

        {/* =========================
            2) EHRLICHIOSIS
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">2) Ehrlichiosis (E. canis, E. chaffeensis, E. ewingii)</h2>
        <p className="mb-4">
          Ehrlichial organisms live inside white blood cells and platelets. E. canis is classically
          associated with the brown dog tick and can cause acute fever and thrombocytopenia with a
          risk of chronic, relapsing illness if not addressed early. E. chaffeensis and E. ewingii
          are transmitted by the lone star tick and can trigger fever and lameness from polyarthritis.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>E. canis:</strong> brown dog tick (Rhipicephalus sanguineus); seen worldwide,
            with many U.S. cases in southern and south-central states and in kennels or homes where
            the tick can establish indoors.
          </li>
          <li>
            <strong>E. chaffeensis &amp; E. ewingii:</strong> lone star tick (Amblyomma americanum),
            historically southern but expanding northward.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Fever, lethargy, decreased appetite.</li>
          <li>Low platelets (bruising, petechiae, nosebleeds in severe cases).</li>
          <li>Shifting-leg lameness and joint pain, especially with E. ewingii.</li>
          <li>Chronic phase (E. canis): weight loss, anemia, enlarged spleen, recurring illness.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          Doxycycline is the usual first-line antibiotic for canine ehrlichiosis. Your veterinarian
          may add supportive care (pain control, fluids) and will monitor platelet counts and organ
          function. Because co-infections are common in tick-dense areas, clinicians often screen for
          Anaplasma, Borrelia, and Babesia at the same time.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs with frequent tick exposure, those living in brown dog tick-prone dwellings or kennel
          environments, and dogs without consistent preventives are at increased risk. Travel to the
          southern U.S. raises exposure probability, especially in warmer months.
        </p>

        {/* =========================
            3) ANAPLASMOSIS
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">3) Anaplasmosis (A. phagocytophilum &amp; A. platys)</h2>
        <p className="mb-4">
          Anaplasma organisms target white blood cells (A. phagocytophilum) or platelets
          (A. platys). The former is carried by the same Ixodes ticks that transmit Lyme disease,
          which is why co-exposures are frequently discovered together on screening tests.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>A. phagocytophilum:</strong> blacklegged ticks (Ixodes scapularis/pacificus).
            Upper Midwest and Northeast are major risk zones; coastal West has focal risk.
          </li>
          <li>
            <strong>A. platys:</strong> brown dog tick (Rhipicephalus sanguineus); more common in
            warmer climates where this tick thrives.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Fever, lethargy, joint pain, and stiffness.</li>
          <li>
            Thrombocytopenia (low platelets) with bruising or nosebleeds in some dogs; A. platys can
            cause cyclic drops in platelet counts.
          </li>
          <li>Overlap with Lyme signs is common in Ixodes regions.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          Doxycycline is the standard first-line treatment; many dogs feel better within a couple of
          days but still need a full course. Your veterinarian may repeat platelet counts and assess
          for co-exposures that influence duration of therapy.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs in Ixodes regions without year-round preventives, outdoor and sport dogs, and dogs
          traveling from low-risk to high-risk areas without protection face increased risk. Kennel
          environments favor A. platys if brown dog ticks are present.
        </p>

        {/* =========================
            4) BABESIOSIS
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">4) Babesiosis (Babesia spp.)</h2>
        <p className="mb-4">
          Babesia are protozoa that invade red blood cells, causing anemia and, in severe cases,
          jaundice and pigmenturia. In North America, large Babesia such as B. canis vogeli are
          often linked to the brown dog tick. Small Babesia—especially B. gibsoni—are frequently
          associated with bite-wound transmission between dogs and with transfusions; tick
          involvement varies by species and region.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>Large Babesia (e.g., B. canis vogeli):</strong> often linked to brown dog ticks,
            with higher prevalence in warmer climates.
          </li>
          <li>
            <strong>Small Babesia (e.g., B. gibsoni):</strong> commonly spread via bite wounds and
            blood exposure; certain regions report tick involvement, but fighting-associated spread is
            a major driver in many outbreaks.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Fever, lethargy, pale gums from anemia.</li>
          <li>Jaundice, dark urine, rapid breathing or heart rate in severe cases.</li>
          <li>Low platelets and potential co-infections that complicate the picture.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          For large Babesia, veterinarians often use imidocarb dipropionate. For small Babesia,
          combination therapy with atovaquone plus azithromycin is widely used. Supportive care may
          include fluids, anti-nausea medication, and, rarely, transfusion. Because relapse can
          occur, your veterinarian may recommend repeat PCR testing to confirm response and advise
          against blood donation from dogs with a history of infection.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs from fighting backgrounds, dogs that received untested transfusions, and dogs living
          in brown dog tick-dense environments are higher risk. Racing greyhounds have historically
          been noted at increased risk in some regions. Consistent tick control and strict screening
          for transfusion donors are essential safeguards.
        </p>

        {/* =========================
            5) ROCKY MOUNTAIN SPOTTED FEVER
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          5) Rocky Mountain Spotted Fever (Rickettsia rickettsii)
        </h2>
        <p className="mb-4">
          RMSF is a serious rickettsial disease that can progress quickly. Dogs may present with
          fever, lethargy, pain, gait changes, and bruising or pinpoint hemorrhages due to widespread
          vascular inflammation. Prompt treatment is critical to avoid complications.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>American dog tick (Dermacentor variabilis) and Rocky Mountain wood tick (D. andersoni).</li>
          <li>
            Brown dog tick (Rhipicephalus sanguineus) is implicated in some Southwestern settings.
          </li>
          <li>Cases occur across much of the United States.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Fever, depression, muscle and joint pain.</li>
          <li>Bruising, petechiae, nosebleeds; neurologic signs in advanced cases.</li>
          <li>Eye inflammation; enlarged lymph nodes.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          Doxycycline is the treatment of choice and should be started promptly when RMSF is
          suspected. Supportive care depends on severity. Because RMSF can be life-threatening, do
          not delay veterinary assessment if your dog is acutely ill with compatible signs in a
          tick-exposed setting.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs with frequent tick exposure in Dermacentor regions, outdoor sport dogs, and dogs in
          communities where brown dog ticks are established are at higher risk. Year-round
          preventives and rapid tick removal are especially important in spring and summer.
        </p>

        {/* =========================
            6) BARTONELLOSIS
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">6) Bartonellosis (Bartonella spp.)</h2>
        <p className="mb-4">
          Bartonella are stealthy, blood-borne bacteria. In dogs, they are associated with a range of
          problems including fever of unknown origin, lameness, lymph node enlargement, eye
          inflammation, and endocarditis. Unlike the other pathogens above, fleas are a primary
          vector in companion animals. Ticks are under investigation and may contribute to
          transmission of some species, but the strength of evidence varies by organism and region.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Vectors &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            Fleas are a major vector in cats and likely important in some canine infections; tick
            involvement is species- and region-dependent and remains an area of active research.
          </li>
          <li>Worldwide distribution; risk follows vector exposure.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Intermittent fever, lethargy, weight loss.</li>
          <li>Lameness, swollen lymph nodes, eye inflammation.</li>
          <li>Endocarditis has been reported in some infected dogs.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          When dogs are clinically ill, veterinarians may use prolonged courses of antibiotics (for
          example, doxycycline, sometimes paired with rifampin or other agents) based on the suspected
          species and organ involvement. Because Bartonella can be difficult to clear and antibiotic
          stewardship matters, therapy is usually targeted to symptomatic animals rather than
          incidental seropositivity.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Dogs at Higher Risk</h3>
        <p className="mb-6">
          Dogs with heavy flea exposure, dogs in multi-pet households with untreated ectoparasites,
          and dogs in vector-dense environments are at higher risk. Strict flea and tick prevention
          for all pets in the home is essential.
        </p>

        {/* =========================
            7) HEPATOZOONOSIS
        ========================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">7) Hepatozoonosis (H. americanum &amp; H. canis)</h2>
        <p className="mb-4">
          Hepatozoonosis in dogs is unusual: infection usually occurs when a dog <em>ingests</em> an
          infected tick. H. americanum (American canine hepatozoonosis, or ACH) is transmitted by the
          Gulf Coast tick and causes a severe, often debilitating disease marked by muscle pain,
          profound white blood cell elevations, and characteristic bone changes. H. canis is linked
          to the brown dog tick and tends to be more widespread globally, with variable severity.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Tick Vector &amp; Regions</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>H. americanum:</strong> Gulf Coast tick (Amblyomma maculatum); concentrated in
            southern and south-central states.
          </li>
          <li>
            <strong>H. canis:</strong> brown dog tick (Rhipicephalus sanguineus); broader global
            distribution, including warmer U.S. regions.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Signs</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Waxing-waning fever, severe muscle pain, reluctance to move.</li>
          <li>Profound leukocytosis; weight loss and poor body condition.</li>
          <li>Ocular discharge; in ACH, periosteal bone proliferation on imaging.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Treatment &amp; Follow-Up</h3>
        <p className="mb-4">
          Protocols for ACH often include a 14-day combination such as trimethoprim-sulfonamide,
          clindamycin, and pyrimethamine or the alternative ponazuril, followed by long-term
          decoquinate maintenance to suppress relapse. H. canis infections are commonly treated with
          imidocarb dipropionate given on a repeated schedule until parasites are no longer evident on
          serial smears. No regimen guarantees sterilizing cure; long-term management and strict tick
          control are crucial.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Co-Infections (Why Panels Matter)</h2>
        <p className="mb-4">
          Ticks can carry more than one pathogen. In Ixodes regions, Lyme and Anaplasma frequently
          travel together; in brown dog tick environments, E. canis and Babesia can occur in the same
          dog. Co-infections can worsen anemia or thrombocytopenia, intensify joint pain, or muddy
          test interpretation. This is why many veterinarians use multi-agent screening panels and
          follow up positive antibody tests with PCR or repeat testing based on clinical signs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Which Dogs Are More Susceptible?</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>High-exposure lifestyles:</strong> field, hunting, and working dogs; dogs that
            hike or camp frequently; dogs in rural wooded areas or tall grass.
          </li>
          <li>
            <strong>Housing &amp; kennel factors:</strong> brown dog ticks can colonize buildings;
            dogs in infested homes, apartments, shelters, or kennels are repeatedly exposed.
          </li>
          <li>
            <strong>Travel:</strong> vacation or adoption transport can move dogs between low- and
            high-risk regions.
          </li>
          <li>
            <strong>Transfusion history:</strong> relevant for Babesia and, rarely, other agents.
          </li>
          <li>
            <strong>Breed notes:</strong> fighting-associated breeds are at special risk for
            B. gibsoni; racing greyhounds have been flagged for some Babesia risks in certain
            locales. Any breed can be affected when exposure occurs.
          </li>
          <li>
            <strong>Medical status:</strong> very young, very old, or immunocompromised dogs may have
            more severe courses.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner Action Plan (Step-by-Step)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Daily/Weekly Habits</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>
            <strong>Use year-round preventives:</strong> choose a vet-recommended product effective
            against local ticks; apply or give on schedule without gaps.
          </li>
          <li>
            <strong>Check for ticks after outdoor time:</strong> feel along the ears, face, neck,
            armpits, groin, and between toes. Remove promptly with a fine tick tool.
          </li>
          <li>
            <strong>Control the yard and home:</strong> keep grass short, reduce leaf litter, block
            wildlife corridors; treat dwellings if brown dog ticks are detected.
          </li>
          <li>
            <strong>Log changes:</strong> note fever, lameness, bruising, dark urine, or appetite
            loss; these patterns help your veterinarian decide on tests and therapy.
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-4 mb-2">Travel &amp; Season</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Ask your vet about region-specific risks before travel. Do not skip preventives on road
            trips or during winter; many ticks quest on mild days.
          </li>
          <li>
            If your dog develops fever, lameness, or bruising within a few weeks of heavy tick
            exposure, seek care promptly—early therapy improves outcomes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Testing &amp; Interpretation (What Positives Mean)</h2>
        <p className="mb-4">
          Screening tests often detect antibodies (exposure), not necessarily current illness. PCR or
          cytology can detect active organisms in some diseases, especially Babesia. Your vet will
          pair test results with the clinical picture—fever, swollen joints, anemia, low platelets,
          kidney protein loss, or elevated white blood cells—to decide whether to treat, monitor, or
          pursue additional diagnostics. A dog can have antibodies from past exposure yet be perfectly
          healthy; similarly, early illness can occur before antibodies rise.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Prevention That Works (Layered Defense)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Year-round tick control:</strong> oral isoxazolines, topical products, or
            repellent collars as recommended by your veterinarian.
          </li>
          <li>
            <strong>Environmental control:</strong> yard maintenance and, if needed, professional
            treatment—especially where brown dog ticks have established indoors.
          </li>
          <li>
            <strong>Tick checks and removal:</strong> swift removal reduces transmission risk for
            some pathogens.
          </li>
          <li>
            <strong>Vaccination:</strong> talk to your vet about Lyme vaccination if you live in or
            travel to areas with sustained risk.
          </li>
          <li>
            <strong>Household-wide protection:</strong> all pets should be on consistent flea and tick
            prevention to reduce vector pressure.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">When to See the Vet (Red-Flag Checklist)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Fever with lameness or obvious joint pain after tick exposure.</li>
          <li>Bruising or nosebleeds; pale gums; dark or reddish urine.</li>
          <li>Severe lethargy, vomiting, weight loss, or swelling (possible kidney involvement).</li>
          <li>Neurologic changes, eye inflammation, or rapid deterioration.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Do all tick bites cause disease?</h3>
        <p className="mb-4">
          No. Many ticks are not infected, and transmission often requires hours of attachment.
          Preventives and rapid removal lower risk substantially.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Can my dog pass these diseases to people?</h3>
        <p className="mb-4">
          These pathogens are typically transmitted by vectors, not directly from dogs. However, dogs
          can carry ticks indoors and serve as sentinels for environmental risk. Good tick control
          protects the whole household.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Why does my vet screen for several pathogens at once?</h3>
        <p className="mb-4">
          Co-infections are common in tick-dense regions and change treatment and prognosis. Screening
          helps find what needs attention now and what to monitor.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Will my dog be cured?</h3>
        <p className="mb-4">
          Many infections resolve with appropriate therapy, but some organisms can persist at low
          levels or relapse. Follow your veterinarian&#39;s plan for rechecks and ongoing prevention.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Know your local vectors and seasons; prevention is a year-round habit.</li>
          <li>After exposure, watch for fever, lameness, bruising, pale gums, or dark urine.</li>
          <li>Doxycycline is first-line for several bacterial tick diseases; protozoal infections use different regimens.</li>
          <li>Co-infections are common; multi-agent screening and follow-up testing add clarity.</li>
          <li>Early veterinary care changes outcomes—do not wait on rapidly worsening signs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            CDC: Lyme Disease—How It Spreads
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/lyme/causes/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            CAPC: Lyme Disease Guidelines
            <a
              className="underline ml-1"
              href="https://capcvet.org/guidelines/lyme-disease/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capcvet.org
            </a>
          </li>
          <li>
            CDC: About Ehrlichiosis
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/ehrlichiosis/about/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            CDC: About Anaplasmosis
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/anaplasmosis/about/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            Merck Veterinary Manual: Ehrlichiosis, Anaplasmosis, and Related Infections
            <a
              className="underline ml-1"
              href="https://www.merckvetmanual.com/infectious-diseases/rickettsial-diseases/ehrlichiosis-anaplasmosis-and-related-infections-in-animals"
              target="_blank"
              rel="noopener noreferrer"
            >
              merckvetmanual.com
            </a>
          </li>
          <li>
            CAPC: Babesia Guidelines
            <a
              className="underline ml-1"
              href="https://capcvet.org/guidelines/babesia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capcvet.org
            </a>
          </li>
          <li>
            Merck Veterinary Manual: Babesiosis in Animals
            <a
              className="underline ml-1"
              href="https://www.msdvetmanual.com/circulatory-system/blood-parasites/babesiosis-in-animals"
              target="_blank"
              rel="noopener noreferrer"
            >
              msdvetmanual.com
            </a>
          </li>
          <li>
            CDC: Rocky Mountain Spotted Fever—How It Spreads
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/rocky-mountain-spotted-fever/about/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            CDC: Where Ticks Live (U.S. vectors &amp; range)
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/ticks/about/where-ticks-live.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            CDC Veterinary Guidance: Bartonella in Pets
            <a
              className="underline ml-1"
              href="https://www.cdc.gov/bartonella/hcp/veterinarians/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
          <li>
            Review: Bartonella infections in cats and dogs (Open-access)
            <a
              className="underline ml-1"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6280416/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ncbi.nlm.nih.gov
            </a>
          </li>
          <li>
            Merck Veterinary Manual: Hepatozoonosis (Old World &amp; American)
            <a
              className="underline ml-1"
              href="https://www.msdvetmanual.com/circulatory-system/blood-parasites/old-world-hepatozoonosis-and-american-canine-hepatozoonosis"
              target="_blank"
              rel="noopener noreferrer"
            >
              msdvetmanual.com
            </a>
          </li>
          <li>
            CAPC: American Canine Hepatozoonosis
            <a
              className="underline ml-1"
              href="https://capcvet.org/guidelines/american-canine-hepatozoonosis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capcvet.org
            </a>
          </li>
          <li>
            Cornell Riney Canine Health Center: Anaplasmosis
            <a
              className="underline ml-1"
              href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/anaplasmosis"
              target="_blank"
              rel="noopener noreferrer"
            >
              vet.cornell.edu
            </a>
          </li>
          <li>
            ACVIM update on Lyme borreliosis (consensus)
            <a
              className="underline ml-1"
              href="https://capcvet.org/guidelines/lyme-disease/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capcvet.org
            </a>
            <span className="ml-1 text-gray-500 text-xs">
              (see citations on that page to 2018 ACVIM consensus update)
            </span>
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
          If your dog shows fever, bruising or nosebleeds, severe lethargy, pale gums, dark urine,
          difficulty moving, or rapid deterioration—seek veterinary help immediately.
        </p>
      </main>
    </>
  );
}
