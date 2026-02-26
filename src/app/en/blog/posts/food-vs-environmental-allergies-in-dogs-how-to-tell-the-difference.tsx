'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FoodVsEnvironmentalAllergiesInDogs() {
  const locale = useLocale();

  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Allergies</span>
          <span className="rounded-full border px-3 py-1 text-sm">Dermatology</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Food vs. Environmental Allergies in Dogs: How to Tell the Difference
        </h1>

        <p className="mb-8 text-base text-gray-700">
          Itchy paws. Red ears. Belly rashes that come and go. For many families, these signs blur together and it
          becomes unclear whether a dog is reacting to ingredients in meals or to particles in the world around them
          &#40;pollens, dust mites, molds&#41;. This guide translates dermatology best practices into clear, practical
          steps. You will learn how veterinarians separate the causes, how to run a correct elimination diet without
          loopholes, what everyday routines actually help, and where therapies like immunotherapy fit. The goal is not
          perfection overnight; it is fewer flares, better comfort, and a plan you can sustain.
        </p>

        {/* Anchor nav (written explicitly; no array mapping) */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#big-three" className="underline">The Big Three: Flea, Food, Environmental</a></li>
            <li><a href="#patterns" className="underline">Clue Patterns That Guide Testing</a></li>
            <li><a href="#flea-first" className="underline">Why Flea Control Comes First</a></li>
            <li><a href="#diet-trial" className="underline">Food Allergy: Elimination Diet That Actually Works</a></li>
            <li><a href="#environmental" className="underline">Environmental Allergy: Testing and Long-Term Tools</a></li>
            <li><a href="#home-care" className="underline">Home Care That Moves the Needle</a></li>
            <li><a href="#vet-plan" className="underline">Working With Your Veterinarian</a></li>
            <li><a href="#sop" className="underline">SOP / Checklist</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources &amp; Notes</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Most itchy dogs fall into overlapping buckets: flea allergy, adverse food reactions, and
                environmental allergy &#40;canine atopic dermatitis&#41;. More than one cause is common.
              </li>
              <li>
                There is no reliable blood, saliva, or hair test for food allergy. A strict 8–12 week elimination
                diet followed by a planned challenge remains the diagnostic standard.
              </li>
              <li>
                Environmental allergy shows patterns related to season, affected body regions &#40;paws, face, ears,
                belly&#41;, and response to anti-itch meds; successful long-term control often includes
                immunotherapy plus topical care and hygiene routines.
              </li>
              <li>
                Always confirm year-round parasite prevention for every pet in the household before judging any plan.
              </li>
            </ul>
          </div>
        </section>

        {/* Big three */}
        <section id="big-three" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">The Big Three: Flea, Food, Environmental</h2>
          <p className="mb-4">
            Dermatology workups usually begin by sorting signs into three practical categories. This is not because
            symptoms never overlap &#40;they often do&#41;, but because each category points to different first steps.
          </p>
          <p className="mb-2">
            <strong>Flea allergy dermatitis.</strong> A hypersensitivity to flea saliva. One bite can trigger a flare
            in a sensitive dog. Owners may not see a live parasite at all. The foundation is prevention for all pets
            and environmental cleaning.
          </p>
          <p className="mb-2">
            <strong>Food allergy / adverse food reaction.</strong> Often nonseasonal, commonly involves ears and paws,
            and may include digestive upset in some dogs. The only dependable way to diagnose is a strict elimination
            diet with a re-challenge afterward.
          </p>
          <p className="mb-2">
            <strong>Environmental allergy &#40;canine atopic dermatitis&#41;.</strong> Hypersensitivity to airborne or
            household allergens such as pollens, dust mites, or molds. Many dogs start with spring or fall flares, then
            become year-round. Long-term control often includes immunotherapy to reduce sensitivity to specific triggers.
          </p>
        </section>

        {/* Patterns */}
        <section id="patterns" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Clue Patterns That Guide Testing</h2>
          <p className="mb-4">
            There is no single symptom that proves what your dog is allergic to. Instead, veterinarians look at
            combinations of clues and decide which path to test first. Use the patterns below as signposts, not
            absolute rules.
          </p>

          <div className="rounded-lg border p-4 mb-6">
            <h3 className="mb-2 text-xl font-semibold">Signals that suggest food allergy</h3>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Nonseasonal itch</strong> most months of the year.</li>
              <li>
                <strong>Ear inflammation</strong> that recurs, sometimes with head shaking or odor; paws, face,
                and belly often involved as well.
              </li>
              <li>
                <strong>Digestive clues</strong> in a subset of dogs: soft stool, flatulence, or intermittent upset.
              </li>
              <li>
                <strong>Clear improvement on a strict elimination diet</strong> with relapse when previous foods are
                reintroduced in a controlled challenge.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Signals that suggest environmental allergy</h3>
            <ul className="list-inside list-disc space-y-2">
              <li><strong>Seasonal pattern</strong> early on &#40;spring or fall flares&#41; that may progress to year-round.</li>
              <li>
                <strong>Classic distribution</strong> of itch: paws, muzzle and face, around the eyes, ear pinnae,
                armpits, groin, and the underside of the body.
              </li>
              <li>
                <strong>Partial relief with anti-itch meds</strong> that fades when they are stopped unless
                environmental management and immunotherapy are added.
              </li>
            </ul>
          </div>

          <p className="mt-6 text-sm text-gray-700">
            Overlap is normal. Many dogs have both categories at once. That is why a structured plan beats guesswork.
          </p>
        </section>

        {/* Flea first */}
        <section id="flea-first" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Why Flea Control Comes First</h2>
          <p className="mb-4">
            Every modern algorithm starts by confirming effective parasite control. Sensitive dogs can flare from a
            single bite, and owners often never see a live parasite because of grooming habits or recent bathing.
            The safest assumption is that prevention is always required, for every pet in the household, twelve months
            per year unless your veterinarian advises otherwise. Wash bedding on hot, vacuum frequently &#40;especially
            baseboards and upholstery&#41;, and treat outdoor areas when advised.
          </p>
        </section>

        {/* Elimination diet */}
        <section id="diet-trial" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Food Allergy: Elimination Diet That Actually Works</h2>
          <p className="mb-4">
            Blood panels, saliva kits, hair tests, and many commercial sensitivity screens are appealing shortcuts,
            but they cannot diagnose food allergy reliably. The dependable pathway is a strictly controlled
            elimination diet for 8–12 weeks, followed by a deliberate food challenge. If signs improve during the
            trial and return after re-exposure, food allergy is confirmed.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Choosing the trial diet</h3>
          <p className="mb-4">
            Two common strategies work well. One uses a veterinary therapeutic hydrolyzed-protein formula in which
            proteins are broken into smaller fragments. The other uses truly novel ingredients your dog has never eaten
            before &#40;for example, a single uncommon protein paired with a simple carbohydrate&#41;. Grain-free vs.
            grain-inclusive is not the point; the point is avoiding previous proteins completely.
          </p>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Non-negotiable rules for the 8–12 week trial</h3>
            <ol className="list-inside list-decimal space-y-2">
              <li>
                <strong>Feed only the trial diet and water.</strong> No table scraps. No flavored chewables unless your
                veterinarian approves a compatible option. Keep a visible list on the fridge so everyone in the home
                follows the plan.
              </li>
              <li>
                <strong>Control treats and chews.</strong> If any are allowed, they must match the trial protein and
                have simple ingredients. Many families skip treats entirely for clarity.
              </li>
              <li>
                <strong>Give it time.</strong> Skin needs weeks to settle. Expect a full two months before you judge.
                Some dogs require up to twelve weeks.
              </li>
              <li>
                <strong>Re-challenge on purpose.</strong> After improvement, reintroduce the previous diet briefly.
                Return of signs confirms the diagnosis, which helps you commit to long-term changes with confidence.
              </li>
              <li>
                <strong>Build the long-term plan.</strong> Some families remain on the successful trial formula. Others
                re-introduce single proteins one at a time to map triggers and widen choices.
              </li>
            </ol>
          </div>

          <h3 className="mt-6 mb-2 text-xl font-semibold">Common pitfalls that spoil results</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Shared household snacks, even tiny amounts, especially dairy, peanut butter, or deli meat.</li>
            <li>Flavored heartworm or tick products that do not match the plan; ask for unflavored or compatible versions.</li>
            <li>Chews with mixed proteins or vague ingredient lists.</li>
            <li>Judging results too early while secondary skin infection is still active.</li>
          </ul>
        </section>

        {/* Environmental */}
        <section id="environmental" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Environmental Allergy: Testing and Long-Term Tools</h2>
          <p className="mb-4">
            When patterns point to environmental triggers—or a careful diet trial fails—veterinarians may recommend
            allergen-specific testing to design immunotherapy. These tests are not for deciding whether a dog is truly
            allergic; that part is clinical. Testing identifies which pollens, mites, or molds to include in therapy.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Immunotherapy basics</h3>
          <p className="mb-4">
            Custom extracts are prepared as injections or sublingual drops. Over months to years they can lower
            sensitivity and reduce flares. Many dogs still need adjunct care during peak seasons, but the overall
            requirement for anti-itch drugs often decreases. Immunotherapy is the only approach that can modify the
            allergic threshold itself rather than simply suppressing symptoms.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Medications that keep dogs comfortable</h3>
          <p className="mb-4">
            Short courses of corticosteroids may be used for severe flares. Longer-term plans often rely on
            oclacitinib, lokivetmab, ciclosporin, and topical therapy &#40;shampoos, mousses, sprays, wipes&#41;.
            The mix depends on severity, season, and any co-morbidities such as recurrent ear disease.
          </p>
        </section>

        {/* Home care */}
        <section id="home-care" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Home Care That Moves the Needle</h2>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-xl font-semibold">Year-round parasite prevention</h3>
            <p className="mb-4">
              Treat every pet in the home, not just the itchy one. Consistency reduces surprise flares and prevents
              misdiagnosis during a diet trial.
            </p>

            <h3 className="mb-2 text-xl font-semibold">Skin-care routine</h3>
            <p className="mb-4">
              Gentle dog shampoos, thorough rinsing, and complete drying help remove allergens and control microbes.
              During bacterial or yeast overgrowth, your veterinarian may prescribe medicated products. Between baths,
              leave-on conditioners and antimicrobial wipes support the skin barrier.
            </p>

            <h3 className="mb-2 text-xl font-semibold">Environmental hygiene</h3>
            <p className="mb-4">
              Wash bedding weekly on hot. Vacuum frequently with a HEPA filter. Wipe paws and coat with a damp
              microfiber cloth after high-pollen outings. These steps lower the overall allergen burden so that
              medications work better at lower doses.
            </p>

            <h3 className="mb-2 text-xl font-semibold">Nutrition and supplements</h3>
            <p className="mb-2">
              Feed a complete, balanced diet appropriate for life stage. For dogs without food allergy, evidence-based
              omega-3 supplementation &#40;EPA/DHA&#41; can support the skin barrier and improve coat quality as part
              of a multi-modal plan. Discuss dosage and product quality with your veterinarian.
            </p>
          </div>
        </section>

        {/* Vet plan */}
        <section id="vet-plan" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Working With Your Veterinarian</h2>
          <p className="mb-4">
            Expect a structured approach: detailed history &#40;seasonality, diet, treats, medications, preventatives,
            environment&#41;, full skin and ear exam, parasite checks, and common in-house tests like skin scrapings
            and cytology to identify mites, bacteria, and yeast. Treat secondary infections promptly; they amplify itch
            and can mask progress on a diet trial. If systemic clues suggest endocrine disease, baseline lab work and
            targeted hormone testing may be added.
          </p>
          <p>
            Communication is everything. Share weekly photos, record itch scores, and keep a simple log of food,
            medications, and bathing. This turns guesswork into decisions based on clear trends.
          </p>
        </section>

        {/* SOP */}
        <section id="sop" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">SOP / Checklist: Separating Food vs. Environmental</h2>
          <div className="rounded-lg border p-4">
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <strong>Stabilize the skin.</strong> If your dog has sores, odor, or crusting, see your veterinarian
                for treatment of infections before judging any diet change.
              </li>
              <li>
                <strong>Confirm parasite prevention.</strong> Put every pet in the home on year-round products your
                veterinarian recommends. Clean bedding and common resting areas thoroughly.
              </li>
              <li>
                <strong>Choose a starting branch.</strong> Clear seasonality or classic distribution suggests an
                environmental path. Nonseasonal signs or heavy ear involvement keep food allergy high on the list.
              </li>
              <li>
                <strong>Run a strict 8–12 week elimination diet.</strong> Use a hydrolyzed formula or truly novel
                ingredients. No unapproved treats, chewables, or flavored meds. Set calendar reminders so the trial
                does not drift.
              </li>
              <li>
                <strong>Challenge and confirm.</strong> If your dog improves, reintroduce the prior diet briefly to
                confirm relapse. This single step cements the diagnosis and helps the whole family commit to the plan.
              </li>
              <li>
                <strong>If the diet fails despite perfect compliance, pivot.</strong> Discuss allergen testing and
                immunotherapy, and deepen environmental hygiene routines.
              </li>
              <li>
                <strong>Document a long-term regimen.</strong> Write down bathing cadence, ear care, preventatives,
                daily meds, diet rules, and environmental steps. Revisit every season.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Can a blood test diagnose food allergy?</summary>
            <p className="mt-2">
              No. Panels that measure antibodies to food ingredients are not dependable for diagnosis. A carefully run
              elimination diet with a planned challenge remains the standard.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">My dog is itchy all year. Does that prove it is food?</summary>
            <p className="mt-2">
              Not necessarily. Year-round signs can reflect indoor allergens, fleas, mixed disease, or food. That is
              why a structured plan is so important.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How long before a diet trial shows results?</summary>
            <p className="mt-2">
              Many dogs need eight full weeks. Some require twelve. Judging early leads to wrong conclusions, especially
              if infections are present or if treats sneak into the routine.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">If the diet helps, will my dog still need medication?</summary>
            <p className="mt-2">
              Often, yes—at least at first. Skin needs time to heal, and mixed disease is common. Your veterinarian
              will taper to the lowest effective plan over time.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">What about desensitization shots or drops?</summary>
            <p className="mt-2">
              Immunotherapy is formulated based on allergen testing to reduce sensitivity to specific triggers. It is
              the only approach that can modify the allergic threshold rather than just suppressing signs. Many dogs
              still benefit from adjunct care during peak seasons.
            </p>
          </details>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources &amp; Notes</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Consensus guidance from leading veterinary dermatology groups on diagnosis and long-term care.</li>
            <li>Reviews on adverse food reactions emphasizing elimination diet with challenge as the standard.</li>
            <li>Owner-facing and professional summaries on flea allergy and the importance of prevention.</li>
            <li>Clinical discussions of environmental allergy distribution patterns and immunotherapy.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only; not a substitute for individualized veterinary care. If your dog is itchy, painful,
            or developing sores, consult your veterinarian promptly.
          </p>
        </section>

        <div className="mt-10">
          <Link
            href={`/${locale}/blog`}
            className="inline-block rounded-xl border px-4 py-2 font-semibold underline"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
