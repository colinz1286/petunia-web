'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ExcessiveSheddingInDogsGuide() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>Excessive Shedding in Dogs: When It&#39;s Normal and When to See the Vet</title>
        <meta
          name="description"
          content="A practical, veterinary-informed guide to dog shedding: what&#39;s normal, what counts as excessive, how to reduce mess with grooming and nutrition, and the red flags that mean it&#39;s time to call your vet."
        />
        <meta name="robots" content="all" />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Category pills */}
        <nav aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">Health</span>
          <span className="rounded-full border px-3 py-1 text-sm">Grooming</span>
          <span className="rounded-full border px-3 py-1 text-sm">Allergies</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold">
          Excessive Shedding in Dogs: When It&#39;s Normal and When to See the Vet
        </h1>

        <p className="mb-8 text-base text-gray-600">
          Every dog sheds. But there&#39;s a big difference between a seasonal &#34;coat blow&#34; and hair
          collecting in clumps, bald patches, or itchy skin that keeps a dog up at night. This in-depth guide
          explains how normal shedding works, why some dogs appear to shed more than others, what actually helps
          at home, and the specific warning signs that mean it&#39;s time to call your veterinarian.
        </p>

        {/* Anchor Nav */}
        <nav aria-label="On this page" className="mb-8 rounded-xl border p-4">
          <p className="mb-2 font-semibold">On this page</p>
          <ul className="list-inside list-disc space-y-1">
            <li><a href="#tldr" className="underline">TL;DR</a></li>
            <li><a href="#how-shedding-works" className="underline">How Shedding Works</a></li>
            <li><a href="#what-is-normal" className="underline">What&#39;s Normal vs. Excessive</a></li>
            <li><a href="#common-causes" className="underline">Common Causes of Excessive Shedding</a></li>
            <li><a href="#home-playbook" className="underline">Home Playbook: Grooming, Diet, Environment</a></li>
            <li><a href="#red-flags" className="underline">Red Flags: When to See the Vet</a></li>
            <li><a href="#vet-visit" className="underline">What to Expect at the Vet</a></li>
            <li><a href="#sop" className="underline">SOP / Checklist</a></li>
            <li><a href="#faq" className="underline">FAQ</a></li>
            <li><a href="#sources" className="underline">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">TL;DR</h2>
          <div className="rounded-lg border p-4">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Normal shedding replaces old hair with new growth. Many breeds have steady, year-round turnover,
                while double-coated breeds &#40;e.g., Huskies, Shepherds&#41; have seasonal &#34;coat blows.&#34;
              </li>
              <li>
                Consider shedding <em>excessive</em> if you see skin redness, flakes, itchiness, odor, bald
                patches, dull/brittle hair, or if the volume dramatically spikes outside a known seasonal pattern.
              </li>
              <li>
                The top non-medical wins: a realistic brushing schedule, the right de-shedding tools for your
                coat type, frequent baths with a gentle dog shampoo &#40;plus full rinse and dry&#41;, balanced
                nutrition with adequate omega-3s, and consistent parasite prevention.
              </li>
              <li>
                See your veterinarian for sudden hair loss, persistent scratching, sores, scabs, foul odor,
                changes in thirst or appetite, weight changes, lethargy, or any bald patches.
              </li>
            </ul>
          </div>
        </section>

        {/* How shedding works */}
        <section id="how-shedding-works" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">How Shedding Works</h2>
          <p className="mb-4">
            A dog&#39;s hair grows in cycles. In simple terms: a follicle produces a hair, the hair matures,
            and eventually that hair is shed to make room for a new one. Photoperiod &#40;hours of daylight&#41;,
            temperature, hormones, age, and health all influence how quickly those cycles turn over. That&#39;s
            why many dogs shed steadily indoors year-round while northern, double-coated breeds tend to have
            dramatic spring and fall sheds when light and temperature change. Indoor lighting and climate control
            can blunt seasonality, but even apartment dogs still replace hair continuously.
          </p>
          <p className="mb-4">
            Coat type matters. Single-coated breeds &#40;Poodles, many Terriers&#41; often drop less hair into
            the environment because their coat grows longer with more time spent in the growth phase. Double-coated
            breeds have a soft insulating undercoat plus longer guard hairs, and when that undercoat releases,
            it can look like someone shook out a blanket full of fluff. Short-coated breeds &#40;Labradors,
            Boxers&#41; often shed year-round and the short hairs can be surprisingly relentless on furniture and
            clothing.
          </p>
        </section>

        {/* What's normal vs excessive */}
        <section id="what-is-normal" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What&#39;s Normal vs. What Counts as Excessive?</h2>
          <p className="mb-4">
            Normal shedding is even, with healthy skin underneath: no redness, no pustules, no sores, and no foul
            odor. The coat still looks glossy; the dog is comfortable; and you can predict heavier periods based on
            breed and season. Excessive shedding looks and feels different. You may notice clumps or tufts coming
            out with a light touch, dandruff flakes, greasy or malodorous skin, a coat that looks dull or broken,
            or areas where the hair appears thinned or missing &#40;alopecia&#41;. Many dogs with medical causes of
            hair loss also scratch, lick, or chew themselves more. Some conditions are itchy; others are not, but
            still lead to poor coat quality and hair loss.
          </p>
          <p className="mb-4">
            Another way to judge: did the shedding pattern change suddenly? If a dog that historically sheds
            moderately starts leaving clouds of hair in mid-winter, or a normally glossy coat becomes brittle and
            patchy, assume something&#39;s off and investigate.
          </p>
        </section>

        {/* Common causes */}
        <section id="common-causes" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Common Causes of Excessive Shedding</h2>

          <h3 className="mb-2 text-xl font-semibold">1&#41; Allergies &#40;Fleas, Food, Environmental&#41;</h3>
          <p className="mb-4">
            Allergic skin disease is one of the most common drivers of excessive shedding and hair loss. Flea
            allergy dermatitis can be intense even with a single bite. Environmental allergies &#40;pollens,
            dust mites, molds&#41; and cutaneous adverse food reactions can also trigger itch, inflammation,
            and secondary infections. Managing allergies takes a plan: strict flea control, identifying triggers
            where possible, and using treatments your vet recommends to reduce itch and inflammation.
          </p>

          <h3 className="mb-2 text-xl font-semibold">2&#41; External Parasites</h3>
          <p className="mb-4">
            Fleas are the big one, but mites matter too. Sarcoptic mange &#40;scabies&#41; is intensely pruritic
            and contagious dog-to-dog. Demodex mites can overgrow in young or immunocompromised dogs, causing
            patchy hair loss that may or may not be itchy. Year-round parasite prevention and prompt diagnosis
            keep these from spiraling.
          </p>

          <h3 className="mb-2 text-xl font-semibold">3&#41; Skin Infections</h3>
          <p className="mb-4">
            Bacterial folliculitis and yeast &#40;<em>Malassezia</em>&#41; overgrowth are frequent companions of
            allergies. Signs include odor, greasy or flaky skin, redness, and hair that breaks or falls out. These
            usually respond to medicated shampoos plus oral therapies when prescribed appropriately.
          </p>

          <h3 className="mb-2 text-xl font-semibold">4&#41; Endocrine and Metabolic Disorders</h3>
          <p className="mb-4">
            Conditions like hypothyroidism and hyperadrenocorticism &#40;Cushing&#39;s syndrome&#41; can cause
            symmetric hair thinning, poor coat quality, recurrent skin infections, and other systemic signs
            &#40;e.g., weight changes, lethargy, increased thirst or urination in Cushing&#39;s&#41;. These are
            medical issues that require lab testing and long-term management.
          </p>

          <h3 className="mb-2 text-xl font-semibold">5&#41; Nutrition &amp; Overall Health</h3>
          <p className="mb-4">
            A complete, balanced diet with sufficient protein and essential fatty acids supports healthy skin and
            hair. Low-quality diets, abrupt diet changes, gastrointestinal disease, or unbalanced home-prepared
            recipes can all show up first in the coat. Omega-3s &#40;EPA/DHA&#41; can help many dogs, especially in
            allergic skin disease, but the right dose and product quality matter. Always check with your
            veterinarian before adding supplements.
          </p>

          <h3 className="mb-2 text-xl font-semibold">6&#41; Stress, Hormonal Cycles, &amp; Life Stage</h3>
          <p className="mb-4">
            Stress, heat cycles, pregnancy, and the senior years can alter hair cycles and shed patterns. Some
            postpartum bitches blow coat dramatically. Puppies may lose their baby coat as the adult coat grows in.
          </p>

          <h3 className="mb-2 text-xl font-semibold">7&#41; Normal Seasonal Coat Blow</h3>
          <p className="mb-4">
            For northern double-coated breeds, heavy spring and fall shedding can be completely normal. It&#39;s
            messy—but not pathologic—if skin looks healthy and the dog is comfortable. Smart grooming turns a
            blizzard into a manageable afternoon.
          </p>
        </section>

        {/* Home Playbook */}
        <section id="home-playbook" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Home Playbook: Grooming, Diet, Environment</h2>

          <h3 className="mb-2 text-xl font-semibold">Brush the Right Way for the Coat You Have</h3>
          <p className="mb-4">
            Tool choice depends on coat. For double coats, start with an undercoat rake to lift loose downy hair,
            then follow with a slicker brush to smooth. For short, tight coats, a rubber curry or grooming glove
            works wonders in circular motions. For long or curly coats, detangling spray plus a pin brush or poodle
            comb helps prevent breakage. The goal is consistent, gentle de-shedding—daily during coat blow for
            some breeds, otherwise a few times weekly.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Bathe and Rinse Thoroughly</h3>
          <p className="mb-4">
            A monthly bath with a gentle dog shampoo is usually enough for most pets; during heavy shedding, a bath
            helps loosen undercoat so it can be brushed out. Always rinse until water runs truly clear and then dry
            fully &#40;towel plus a cool-setting dryer if your dog tolerates it&#41;; leftover product or moisture
            can irritate the skin and worsen shedding.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Nails, Ears, Teeth: The Quiet Multiplier</h3>
          <p className="mb-4">
            Dogs that are comfortable overall tolerate grooming better. Keep nails trimmed, ears clean as directed
            by your vet, and maintain dental care. A dog that isn&#39;t fighting grooming allows more effective
            sessions with far less stress hair loss.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Feed for Skin &amp; Coat</h3>
          <p className="mb-4">
            Choose a complete and balanced diet appropriate for life stage and health status. If coat quality is
            poor, talk to your vet about trials with therapeutic diets or adding omega-3s &#40;EPA/DHA&#41; at
            evidence-based doses. Avoid jumping between foods rapidly; dietary roulette often shows up as dull coat
            and loose stool.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Year-Round Parasite Control</h3>
          <p className="mb-4">
            Consistent flea and tick prevention is foundational, even for indoor dogs. Use products your vet
            recommends based on local parasite risks. If a dog is itchy and shedding excessively, rule out fleas
            first—even if you rarely see them.
          </p>

          <h3 className="mb-2 text-xl font-semibold">Reduce Environmental Triggers</h3>
          <p className="mb-4">
            For allergy-prone dogs, simple steps help: rinse paws after walks, run HEPA filtration in sleeping
            areas, wash bedding weekly on hot, and wipe down coats with a damp microfiber cloth during high pollen
            days. These won&#39;t replace medical care, but they reduce total allergen load.
          </p>
        </section>

        {/* Red flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Red Flags: When to See the Vet</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Redness, scabs, pustules, foul odor, or greasy/flaky skin.</li>
            <li>Persistent scratching, licking, chewing, or head-shaking.</li>
            <li>Clumps of hair detaching with minimal touch; bald spots or symmetrical thinning.</li>
            <li>Changes in thirst, urination, appetite, energy, or weight alongside coat changes.</li>
            <li>Any sudden shift in shedding pattern outside known seasonal periods.</li>
            <li>Puppies, seniors, pregnant/postpartum bitches with dramatic hair loss or skin changes.</li>
            <li>No improvement after 2–4 weeks of consistent home care and parasite prevention.</li>
          </ul>
        </section>

        {/* Vet visit expectations */}
        <section id="vet-visit" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">What to Expect at the Vet</h2>
          <p className="mb-4">
            A strong dermatology workup starts with history: onset, seasonality, diet changes, flea prevention,
            travel, household stressors, grooming products, and any medications or supplements. Your veterinarian
            will examine the skin and coat, then may perform tests such as skin scraping &#40;mites&#41;, flea
            combing, tape prep/cytology &#40;bacteria/yeast&#41;, and potentially a Wood&#39;s lamp or fungal
            culture for ringworm. If the distribution or pattern suggests a systemic disease, they may recommend
            bloodwork and endocrine testing.
          </p>
          <p className="mb-4">
            Why the stepwise plan? Many shedding problems are multifactorial. Allergies and infections commonly
            travel together. Parasites can mimic allergies. Endocrine diseases can set the stage for recurrent
            infections and a fragile coat. A methodical approach solves problems faster and prevents wasted time
            and money on random shampoos or supplements that don&#39;t match the cause.
          </p>
        </section>

        {/* SOP / Checklist */}
        <section id="sop" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">SOP / Checklist: From Hair Everywhere to Healthy Coat</h2>
          <div className="rounded-lg border p-4">
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <strong>Document the pattern.</strong> Note start date, season, recent moves or stress, diet changes,
                and any skin signs &#40;redness, flakes, odor&#41;. Take clear photos in good light.
              </li>
              <li>
                <strong>Institute strict parasite control.</strong> If you are unsure, treat the environment &#40;vacuum,
                wash bedding on hot&#41; and keep dogs on vetted preventatives as recommended by your veterinarian.
              </li>
              <li>
                <strong>Groom with intent.</strong> For the next 2–3 weeks, brush 3–5x weekly &#40;daily during coat
                blow&#41;, then bathe once with a gentle dog shampoo, rinse thoroughly, and dry completely. Follow
                with a calm, thorough de-shedding session after the bath.
              </li>
              <li>
                <strong>Feed consistently.</strong> No rapid food hopping. If the coat is dull, ask your vet about
                adding omega-3s &#40;EPA/DHA&#41; at evidence-based doses and ensure total calories are appropriate.
              </li>
              <li>
                <strong>Allergy hygiene.</strong> Paws rinse after walks, HEPA in sleeping areas, weekly hot-wash for
                bedding, damp wipe downs during high pollen days.
              </li>
              <li>
                <strong>Reassess at 2–4 weeks.</strong> If shedding remains excessive or skin looks unhealthy—or if
                any systemic red flags appear—book a veterinary exam.
              </li>
              <li>
                <strong>Follow the diagnostic path.</strong> Expect flea combing, skin scrapings, cytology, and targeted
                lab work as indicated. Treat what the tests show; avoid guesswork.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">FAQ</h2>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Does a dog&#39;s diet really change shedding?</summary>
            <p className="mt-2">
              Diet affects skin and hair because hair is made of protein and relies on essential fatty acids and
              micronutrients to grow properly. While nutrition alone will not fix allergies or parasites, a complete,
              balanced diet plus appropriate omega-3s can noticeably improve coat quality over several weeks. Poorly
              balanced home-prepared diets or frequent, abrupt diet changes often show up first as dull coat and dandruff.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">What&#39;s the difference between shedding and alopecia?</summary>
            <p className="mt-2">
              Shedding is the normal release of old hairs across the body. Alopecia is true hair loss with areas that
              look thinned or bald. Alopecia can be inflammatory &#40;itchy, red, infected&#41; or non-inflammatory
              &#40;often endocrine in origin&#41;. If you see bald patches, schedule a veterinary visit.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Do supplements marketed for shedding work?</summary>
            <p className="mt-2">
              Some products add omega-3s and vitamins that support skin health. Quality and dosing matter, and not all
              products are equal. More important: match the intervention to the cause. No supplement replaces parasite
              control, allergy therapy, or treatment for bacterial/yeast infections or endocrine disease.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">How often should I bathe a heavy shedder?</summary>
            <p className="mt-2">
              For most, every 3–6 weeks is reasonable, with more frequent brushing in between. During seasonal coat
              blows, a bath can help loosen undercoat, but always rinse thoroughly and dry fully. Dogs with skin disease
              may need medicated shampoos at specific intervals—follow your veterinarian&#39;s plan.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">Could stress increase shedding?</summary>
            <p className="mt-2">
              Yes. Short-term stress can trigger a temporary shed &#40;you may notice hair on exam tables or when
              guests arrive&#41;. Chronic stress, pain, or illness can also blunt coat quality over time. Addressing
              comfort, enrichment, and routine helps.
            </p>
          </details>

          <details className="mb-3 rounded-lg border p-4">
            <summary className="cursor-pointer font-semibold">My senior dog&#39;s coat is thinning—normal aging or a problem?</summary>
            <p className="mt-2">
              Some thinning can occur with age, but seniors are also more prone to endocrine disease, recurrent skin
              infections, and nutritional issues. If you see symmetrical thinning, increased thirst/urination, or a
              pot-bellied shape, book an exam to check for conditions like hypothyroidism or Cushing&#39;s syndrome.
            </p>
          </details>
        </section>

        {/* Sources (names only in-article; linked/cited externally below by ChatGPT) */}
        <section id="sources" className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold">Sources</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>AAHA Management of Allergic Skin Diseases in Dogs and Cats &#40;Guideline&#41;.</li>
            <li>AVMA coverage of the AAHA allergic skin guideline.</li>
            <li>MSD Veterinary Manual: Dermatology overview; Diagnosis of Skin Diseases; Endocrine topics including Cushing&#39;s.</li>
            <li>World Association for Veterinary Dermatology consensus work &#40;Malassezia; Demodicosis&#41;.</li>
            <li>Clinical guidance on canine atopic dermatitis and flea assessment.</li>
            <li>Veterinary dermatology resources on seasonality and coat cycles.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Educational content only and not a substitute for individualized veterinary care. If you think your dog is
            experiencing a medical problem, contact your veterinarian promptly.
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
