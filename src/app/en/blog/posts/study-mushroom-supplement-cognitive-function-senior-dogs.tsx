'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MushroomSupplementSeniorDogsCognitiveStudy2025() {
  const locale = useLocale();

  const title =
    'Study Report: Mushroom-Based Supplement and Cognitive Scores in Senior Dogs (12 Weeks) — What the Data Says';
  const date = 'December 29, 2025';
  const categories = ['owner', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    veterinary: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
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
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-this-is" className="underline hover:opacity-80">
                What This Is
              </a>
            </li>
            <li>
              <a href="#study-snapshot" className="underline hover:opacity-80">
                Study Snapshot
              </a>
            </li>
            <li>
              <a href="#study-design" className="underline hover:opacity-80">
                Study Design &amp; Measures
              </a>
            </li>
            <li>
              <a href="#reported-results" className="underline hover:opacity-80">
                Reported Results
              </a>
            </li>
            <li>
              <a href="#safety" className="underline hover:opacity-80">
                Safety &amp; Tolerability
              </a>
            </li>
            <li>
              <a href="#limitations" className="underline hover:opacity-80">
                Stated Limitations
              </a>
            </li>
            <li>
              <a href="#what-owners-can-do" className="underline hover:opacity-80">
                What Owners Can Do
              </a>
            </li>
            <li>
              <a href="#faq" className="underline hover:opacity-80">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Two trade-industry reports summarize a 12-week veterinary study evaluating a proprietary mushroom-based
            nutraceutical (described as a blend of medicinal mushrooms and adaptogens) in senior dogs showing signs of
            cognitive decline. The reports state that 30 dogs were enrolled, cognitive outcomes were measured using the
            DISHAA framework, and 81% of dogs improved or stabilized cognitive scores, with a reported 39% average
            reduction in cognitive dysfunction scores. The reports also state that no supplement-related adverse events
            were observed.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Scope note:</strong> This article summarizes what the sources report. It does not add clinical claims
            beyond what is stated in those sources, and it does not provide medical advice.
          </div>
        </section>

        {/* What this is */}
        <section id="what-this-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What This Article Is (and Is Not)</h2>
          <p className="mb-4">
            This is a factual report of published summaries describing a veterinary study of a mushroom-derived
            nutraceutical in senior dogs with cognitive decline. It is designed to clarify what was reported about the
            study&rsquo;s design, measurement tools, results, and limitations.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>It is:</strong> a structured summary of reported study details, written in plain English.
            </li>
            <li>
              <strong>It is not:</strong> a treatment recommendation, dosing guide, or a substitute for veterinary care.
            </li>
          </ul>
        </section>

        {/* Study snapshot */}
        <section id="study-snapshot" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Study Snapshot (As Reported)</h2>
          <p className="mb-4">
            PetfoodIndustry and Pet Food Processing each reported on a study evaluating MycoDog&rsquo;s proprietary
            supplement described as &ldquo;Clarity,&rdquo; a blend of medicinal mushrooms and adaptogens, in senior dogs
            showing signs of cognitive decline.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Duration:</strong> 12 weeks
              </li>
              <li>
                <strong>Enrollment:</strong> 30 senior dogs enrolled (with a separate preprint summary stating 22 dogs
                completed the study)
              </li>
              <li>
                <strong>Setting:</strong> decentralized protocol combining at-home tracking and caregiver assessments
                with in-clinic evaluations and blood analysis
              </li>
              <li>
                <strong>Primary behavioral framework reported:</strong> DISHAA (a canine cognitive dysfunction scoring
                framework)
              </li>
              <li>
                <strong>Biomarkers reported:</strong> CRP (inflammation) and BDNF (neuroprotection/brain health marker)
              </li>
            </ul>
          </div>
        </section>

        {/* Study design & measures */}
        <section id="study-design" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Study Design &amp; Measures (As Described)</h2>
          <p className="mb-4">
            The reports describe the study as a veterinary-supervised protocol combining at-home and in-clinic measures.
            PetfoodIndustry and Pet Food Processing both state that the research used caregiver assessments and wearable
            tracking plus in-clinic evaluations and blood analysis.
          </p>

          <h3 className="text-xl font-semibold mb-2">Behavioral measurement framework: DISHAA</h3>
          <p className="mb-4">
            The trade reports state that cognitive function was measured using the DISHAA framework. DISHAA is commonly
            used as a structured way to score domains associated with canine cognitive dysfunction (for example, changes
            in sleep-wake cycle, disorientation, interaction changes, and house-soiling patterns). The reports do not
            provide full scoring instruments or item-level data.
          </p>

          <h3 className="text-xl font-semibold mb-2">Objective monitoring: wearable sleep and activity tracking</h3>
          <p className="mb-4">
            Both trade reports state that wearable tracking was used to assess sleep and activity and that smart-collar
            data supported conclusions about calmer nights and improved sleep quality.
          </p>

          <h3 className="text-xl font-semibold mb-2">Blood analysis: CRP and BDNF</h3>
          <p className="mb-4">
            The trade reports state that biomarkers CRP (an inflammation marker) and BDNF (a neurotrophic factor often
            discussed in brain health contexts) were tracked in clinic. The reports describe findings as reduced CRP and
            increased BDNF, without publishing raw biomarker tables in those articles.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>What is not provided in the trade summaries:</strong> full protocol documentation, inclusion and
            exclusion criteria in detail, dosing and compliance data in full, and comprehensive raw outcomes tables.
          </div>
        </section>

        {/* Reported results */}
        <section id="reported-results" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Reported Results (As Summarized by the Sources)</h2>
          <p className="mb-4">
            The trade reports highlight outcomes framed as improvement or stabilization in cognitive scores, plus
            improvements in specific day-to-day domains. These are the key results exactly as reported by the sources:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>81% improved or stabilized:</strong> the sources report that 81% of senior dogs improved or
              stabilized cognitive scores during the 12-week protocol.
            </li>
            <li>
              <strong>39% average reduction:</strong> the sources report a 39% average reduction in cognitive dysfunction
              scores.
            </li>
            <li>
              <strong>Domains noted:</strong> the sources state improvements were seen in orientation, sleep, engagement,
              and house training.
            </li>
            <li>
              <strong>Wearable-confirmed sleep changes:</strong> the sources state smart-collar data confirmed calmer
              nights and better sleep quality.
            </li>
            <li>
              <strong>Biomarker direction:</strong> the sources state CRP decreased and BDNF increased.
            </li>
          </ul>

          <p className="mb-4">
            A ResearchGate-hosted preprint describes the project as a decentralized, proof-of-concept clinical trial in
            client-owned dogs diagnosed with canine cognitive decline, combining caregiver surveys with wearable monitoring
            and exploratory biomarkers (CRP and BDNF). The preprint also states that 22 dogs completed the study and that
            outcomes were stratified by severity (mild, moderate, severe).
          </p>

          <p className="mb-4">
            For an owner-first overview of practical routines that can support healthy aging in dogs (separate from any
            supplement discussion), see:{' '}
            <Link href={`/${locale}/blog/dog-exercise-for-longevity-daily-routines`} className="underline font-medium hover:opacity-80">
              Exercise and Longevity: The Exact Daily Routines That Help Dogs Live Longer, According to Research
            </Link>
            .
          </p>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety &amp; Tolerability (What Was Reported)</h2>
          <p className="mb-4">
            PetfoodIndustry and Pet Food Processing both report that no supplement-related adverse events occurred during
            the 12-week protocol.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              The sources do not provide a full adverse-event table in the trade summaries.
            </li>
            <li>
              The ResearchGate-hosted preprint emphasizes favorable tolerability in the described cohort and reiterates
              that it is a preprint and not peer reviewed.
            </li>
          </ul>
        </section>

        {/* Limitations */}
        <section id="limitations" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stated Limitations (As Listed by the Preprint)</h2>
          <p className="mb-4">
            The ResearchGate-hosted document includes an explicit warning that it is a preprint and not peer reviewed.
            It also lists limitations common to early proof-of-concept studies.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Small cohort:</strong> the preprint describes a small sample with 22 dogs completing the study.
              </li>
              <li>
                <strong>Open-label, single-arm design:</strong> the preprint describes an observational design without a
                placebo control, which can introduce bias.
              </li>
              <li>
                <strong>Biomarkers described as preliminary:</strong> the preprint notes the biomarker dataset is
                preliminary and requires validation.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            These limitations do not negate the reported findings, but they define what can and cannot be concluded from
            the available information.
          </p>
        </section>

        {/* What owners can do */}
        <section id="what-owners-can-do" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Owners Can Do (Facts-Only, Non-Prescriptive)</h2>
          <p className="mb-4">
            If you are exploring cognitive support for an older dog, the fact pattern in this coverage supports a simple
            and practical next step: bring structured observations to your veterinarian and ask how cognitive decline is
            typically assessed in your dog&rsquo;s case. This is especially relevant because the study summaries emphasize
            caregiver-reported changes and day-to-day domains (sleep, orientation, interaction, house training).
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Track specific signs you observe (sleep disruption, nighttime restlessness, disorientation, altered social
              interaction, changes in housetraining), and document frequency and severity.
            </li>
            <li>
              Ask your veterinarian what other medical problems can mimic cognitive decline signs in older dogs.
            </li>
            <li>
              If supplements are discussed, ask what evidence exists for your dog&rsquo;s situation and what monitoring is
              appropriate over a set time window.
            </li>
          </ul>

          <p className="mb-4">
            If you want a broader planning framework for senior dog care that focuses on routines and preventive vet
            touchpoints, see:{' '}
            <Link href={`/${locale}/blog/how-often-should-dogs-visit-the-vet`} className="underline font-medium hover:opacity-80">
              How Often Should Dogs Visit the Vet?
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-4">
            <strong>Is this study peer reviewed?</strong>
            <br />
            The ResearchGate-hosted document describing the trial is labeled as a preprint and explicitly states it has
            not been peer reviewed. The trade publications report study results but do not indicate that the underlying
            document has completed peer review.
          </p>

          <p className="mb-4">
            <strong>How many dogs were involved?</strong>
            <br />
            The trade reports state that 30 senior dogs were enrolled. The ResearchGate-hosted preprint states that 22
            dogs completed the study.
          </p>

          <p className="mb-4">
            <strong>What outcomes were reported?</strong>
            <br />
            The trade reports state that 81% of dogs improved or stabilized cognitive scores, with a 39% average
            reduction in cognitive dysfunction scores, and improvements noted in orientation, sleep, engagement, and house
            training. They also report wearable data indicating calmer nights and improved sleep quality and biomarker
            direction described as lower CRP and higher BDNF.
          </p>

          <p>
            <strong>Does this prove mushroom supplements treat canine cognitive dysfunction?</strong>
            <br />
            The available summaries do not establish that level of proof. The preprint describes a proof-of-concept,
            open-label, single-arm design and lists limitations including small cohort size and potential bias.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              PetfoodIndustry (Nov 7, 2025) summary:{' '}
              <a
                href="https://www.petfoodindustry.com/nutrition/research-notes/news/15771281/study-mushroom-supplement-improves-cognitive-function-in-senior-dogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.petfoodindustry.com/nutrition/research-notes/news/15771281/study-mushroom-supplement-improves-cognitive-function-in-senior-dogs
              </a>
            </li>
            <li>
              Pet Food Processing (Nov 7, 2025) summary:{' '}
              <a
                href="https://www.petfoodprocessing.net/articles/19846-study-shows-mushroom-supplements-may-aid-senior-dogs-cognitively"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.petfoodprocessing.net/articles/19846-study-shows-mushroom-supplements-may-aid-senior-dogs-cognitively
              </a>
            </li>
            <li>
              ResearchGate preprint listing (labeled not peer reviewed):{' '}
              <a
                href="https://www.researchgate.net/publication/395594468_Prospective_Evaluation_of_a_Mushroom_Derived_Nutraceutical_in_Dogs_with_Cognitive_Decline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.researchgate.net/publication/395594468_Prospective_Evaluation_of_a_Mushroom_Derived_Nutraceutical_in_Dogs_with_Cognitive_Decline
              </a>
            </li>
          </ul>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
