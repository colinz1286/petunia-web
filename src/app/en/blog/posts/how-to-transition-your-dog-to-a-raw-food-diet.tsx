'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowToTransitionYourDogToARawFoodDiet() {
  const locale = useLocale();

  const title = 'Step-by-Step: How to Transition Your Dog to a Raw Food Diet';
  const date = 'December 7, 2025';
  const categories = ['owner', 'food'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Food & Nutrition',
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
    'A practical, step-by-step transition guide for switching dogs to raw food: readiness signs, gradual vs rapid methods, expected stool changes, common digestive issues, timelines, and when to pause or reconsider.';

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
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#readiness" className="underline hover:opacity-80">
                Readiness
              </a>
            </li>
            <li>
              <a href="#prep" className="underline hover:opacity-80">
                Prep
              </a>
            </li>
            <li>
              <a href="#choose-method" className="underline hover:opacity-80">
                Choose a Method
              </a>
            </li>
            <li>
              <a href="#transition-schedules" className="underline hover:opacity-80">
                Transition Schedules
              </a>
            </li>
            <li>
              <a href="#stool-changes" className="underline hover:opacity-80">
                Stool Changes
              </a>
            </li>
            <li>
              <a href="#common-issues" className="underline hover:opacity-80">
                Common Issues
              </a>
            </li>
            <li>
              <a href="#how-long" className="underline hover:opacity-80">
                How Long It Takes
              </a>
            </li>
            <li>
              <a href="#pause-or-reconsider" className="underline hover:opacity-80">
                When to Pause
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
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Most transition problems come from moving too fast, switching too many proteins at once, or changing food
            handling routines in a way that creates unnecessary risk. A safer transition starts with a realistic plan:
            pick one protein, pick one method (gradual or rapid), track stool and appetite daily, and slow down if your
            dog shows persistent digestive upset. If your household includes higher-risk people (very young, elderly,
            pregnant, or immunocompromised), talk with your veterinarian before choosing a raw plan.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. Seek urgent
            veterinary care for repeated vomiting, bloody diarrhea, severe lethargy, dehydration, or any rapid decline.
          </div>
        </section>

        {/* READINESS */}
        <section id="readiness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Signs Your Dog May (or May Not) Be Ready</h2>
          <p className="mb-4">
            A transition is easier when your dog is stable: no active stomach upset, steady appetite, and predictable
            stools. It is harder when your dog already has digestive issues, is medically fragile, or when the household
            cannot maintain consistent food-handling routines.
          </p>

          <h3 className="text-xl font-semibold mb-2">Good readiness signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Steady appetite and normal energy</li>
            <li>Consistent stool quality for at least 2–3 weeks</li>
            <li>Stable body condition (not rapidly gaining or losing weight)</li>
            <li>No recent antibiotic course or significant GI flare-up</li>
            <li>You can commit to consistent meal timing and portioning</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Reasons to delay or get guidance first</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Puppies in a critical growth phase (mineral balance matters more than most owners realize)</li>
            <li>History of pancreatitis, severe IBD, or recurring unexplained vomiting/diarrhea</li>
            <li>Immune suppression in the dog or in the household</li>
            <li>Limited freezer space or unreliable storage routines</li>
            <li>Resource guarding or chaotic multi-pet feeding dynamics</li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            If you want the big-picture overview of what raw feeding is (and the main decision points), start with the
            pillar guide and come back here once you have chosen an approach.
          </p>
        </section>

        {/* PREP */}
        <section id="prep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Prep Before You Switch (This Prevents Most Problems)</h2>
          <p className="mb-4">
            Preparation matters because it reduces avoidable variables. If you change the protein, the fat level, the
            moisture, and the handling routine all at once, it becomes hard to know what caused a problem.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Do this before day one:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pick one protein to start (many owners choose a simple, familiar option).</li>
              <li>Decide if you are using a commercial complete diet or a structured homemade plan.</li>
              <li>Buy a kitchen scale so portions are consistent.</li>
              <li>Set up a contained feeding area that is easy to clean.</li>
              <li>Plan storage and thawing so food does not sit out at room temperature.</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            Raw feeding is not just a nutrition choice, it is also a food-safety routine. If you are not already
            confident in sanitation and storage habits, build that habit first.
          </p>

          <p className="text-sm text-gray-700">
            Food handling and household risk are covered in detail in:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety: How to Handle &amp; Prepare Raw Diets Without Risk
            </Link>
            .
          </p>
        </section>

        {/* CHOOSE METHOD */}
        <section id="choose-method" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choose a Transition Method: Gradual vs Rapid</h2>
          <p className="mb-4">
            There are two common methods. Neither is universally &ldquo;correct.&rdquo; The best method is the one you
            can execute consistently, while adjusting based on your dog&rsquo;s stool and appetite.
          </p>

          <h3 className="text-xl font-semibold mb-2">Gradual transition (most conservative)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Best for dogs with sensitive stomachs or uncertain tolerance</li>
            <li>Easier to isolate which change caused an issue</li>
            <li>More time and tracking, but often smoother</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Rapid switch (sometimes called cold-turkey)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Some owners report their dog does better without mixing</li>
            <li>Can work for dogs with strong digestion and stable health</li>
            <li>Higher chance of short-term loose stool if the dog is sensitive</li>
          </ul>

          <p className="mt-4 mb-4">
            If you are deciding between feeding styles overall, it helps to compare raw, kibble, and fresh options on
            the same checklist: nutrition completeness, convenience, cost, and tolerance.
          </p>

          <p className="text-sm text-gray-700">
            A practical comparison is here:{' '}
            <Link
              href={`/${locale}/blog/raw-food-vs-kibble-vs-fresh-food`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Food vs. Kibble vs. Fresh Food
            </Link>
            .
          </p>
        </section>

        {/* TRANSITION SCHEDULES */}
        <section id="transition-schedules" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Step-by-Step Transition Schedules You Can Follow</h2>
          <p className="mb-4">
            These schedules are intentionally simple. Start with one protein and one product or recipe framework. Your
            job is not to create variety during week one. Your job is to create stability.
          </p>

          <h3 className="text-xl font-semibold mb-2">Option A: Gradual transition (10–14 days)</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Days 1–3:</strong> 75% current food, 25% raw</li>
              <li><strong>Days 4–6:</strong> 50% current food, 50% raw</li>
              <li><strong>Days 7–9:</strong> 25% current food, 75% raw</li>
              <li><strong>Days 10–14:</strong> 100% raw (if stools and appetite are stable)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-2">Option B: Rapid switch (3–5 days of close monitoring)</h3>
          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Day 1:</strong> 100% raw (single protein, simple formula)</li>
              <li><strong>Days 2–3:</strong> Continue the same meal structure; track stool and appetite</li>
              <li><strong>Days 4–5:</strong> If stable, continue; if loose stool persists, slow down or revert briefly</li>
            </ul>
          </div>

          <p className="mt-4 mb-4">
            During either approach, keep treats minimal, avoid adding new chews, and do not introduce multiple new
            proteins. That strategy reduces the number of variables.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Keep meal timing consistent</li>
            <li>Measure portions so you can adjust with confidence</li>
            <li>Track stool quality once daily (more if the dog is having issues)</li>
            <li>Keep hydration steady, especially if stool softens</li>
          </ul>
        </section>

        {/* STOOL CHANGES */}
        <section id="stool-changes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stool Changes: What They Often Indicate</h2>
          <p className="mb-4">
            Stool is the clearest early signal during a transition. The goal is not &ldquo;perfect&rdquo; stool every
            day. The goal is a trend toward stable, comfortable digestion. Track changes without panic, but do not
            ignore persistent problems.
          </p>

          <div className="not-prose overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">What you see</th>
                  <th className="py-2 pr-4">What it may mean</th>
                  <th className="py-2 pr-4">What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Slightly softer stool</strong>
                  </td>
                  <td className="py-3 pr-4">The gut is adjusting to a new moisture and fat profile</td>
                  <td className="py-3 pr-4">Hold the current ratio for 2–3 more days before increasing raw</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Watery diarrhea</strong>
                  </td>
                  <td className="py-3 pr-4">Too fast, intolerance, infection, or another trigger</td>
                  <td className="py-3 pr-4">Pause the transition, contact your veterinarian if it persists</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Constipation or very hard stool</strong>
                  </td>
                  <td className="py-3 pr-4">Too much bone or not enough moisture for that dog</td>
                  <td className="py-3 pr-4">Slow down and reassess the plan; do not guess with bone</td>
                </tr>
                <tr className="border-b align-top">
                  <td className="py-3 pr-4">
                    <strong>Mucus in stool</strong>
                  </td>
                  <td className="py-3 pr-4">Gut irritation, rapid change, stress, or sensitivity</td>
                  <td className="py-3 pr-4">Slow the transition and keep the diet simple</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            The most important rule is that trends matter more than single events. One odd stool can happen for many
            reasons. A pattern of worsening stool is a sign to slow down.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>One soft stool: monitor and hold steady</li>
            <li>Two to three days of soft stool: slow down and simplify</li>
            <li>Ongoing diarrhea or vomiting: pause and consult your veterinarian</li>
          </ul>
        </section>

        {/* COMMON ISSUES */}
        <section id="common-issues" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Digestive Issues During Transition (and How to Manage Them)</h2>
          <p className="mb-4">
            Transition issues are common, especially when the new diet is richer, higher moisture, or very different
            from the previous food. The goal is to respond early, not to &ldquo;push through&rdquo; a problem that is
            clearly escalating.
          </p>

          <h3 className="text-xl font-semibold mb-2">Loose stool</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Hold the ratio (do not increase raw until stool stabilizes)</li>
            <li>Keep the same protein and the same product for consistency</li>
            <li>Keep treats minimal and avoid new chews</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Vomiting</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Stop the transition and contact your veterinarian if vomiting repeats</li>
            <li>Do not keep adding new ingredients to &ldquo;fix&rdquo; it</li>
            <li>Track timing: immediately after eating vs hours later</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Constipation or straining</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Do not increase bone or add bone casually</li>
            <li>Pause and reassess the formulation approach</li>
            <li>Contact your veterinarian if straining persists or the dog seems painful</li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            For a deeper problem-by-problem breakdown, see:{' '}
            <Link
              href={`/${locale}/blog/raw-diet-troubleshooting-common-issues`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Diet Troubleshooting: Common Issues
            </Link>
            .
          </p>
        </section>

        {/* HOW LONG */}
        <section id="how-long" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Long Transitions Typically Take</h2>
          <p className="mb-4">
            Many dogs stabilize quickly, but some need more time. The right timeline is the one your dog can tolerate
            without persistent digestive upset. Faster is not better if it creates weeks of instability.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Fast adapters:</strong> 3–7 days</li>
            <li><strong>Average dogs:</strong> 10–14 days</li>
            <li><strong>Sensitive stomachs:</strong> 3–6 weeks (slow method with careful tracking)</li>
          </ul>

          <p className="mb-4">
            If you are switching proteins, treat that like a new mini-transition. Many owners succeed with raw feeding
            initially, then create problems later by rotating too quickly without watching stool patterns.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple rule:</strong> Only change one major variable at a time: ratio, protein, or product. Not all
            three in the same week.
          </div>
        </section>

        {/* PAUSE OR RECONSIDER */}
        <section id="pause-or-reconsider" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Pause, Slow Down, or Reconsider the Switch</h2>
          <p className="mb-4">
            A responsible transition includes clear stopping rules. It is not a failure to pause. It is a smart response
            to the information your dog is giving you.
          </p>

          <h3 className="text-xl font-semibold mb-2">Pause and contact your veterinarian if</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated vomiting or inability to keep water down</li>
            <li>Bloody diarrhea or black, tar-like stool</li>
            <li>Marked lethargy, weakness, or signs of dehydration</li>
            <li>Persistent diarrhea that does not improve within 24–48 hours</li>
            <li>Rapid weight loss or refusal to eat for more than one meal</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Slow down if</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stool softens and stays soft for more than two to three days</li>
            <li>Your dog&rsquo;s appetite becomes inconsistent</li>
            <li>You introduced multiple new proteins or too many extras at once</li>
            <li>Your feeding routine is messy or difficult to keep sanitary</li>
          </ul>

          <p className="mt-4 mb-4">
            If you step back and decide raw is not the best fit, that can still be a win. A balanced cooked or fresh
            plan can be an excellent choice for many dogs, and some dogs simply do best with a stable, complete diet
            that is easy to execute consistently.
          </p>

          <p className="text-sm text-gray-700">
            For the full raw overview and decision framework, read:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food: What Every Dog Owner Needs to Know
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Should I mix raw and kibble during a gradual transition?</strong>
            <br />
            Many owners do, especially during the early steps of a gradual plan. The key is consistency: keep proteins
            and treats simple so you can track what your dog tolerates. If your dog struggles with mixed feeding, slow
            down and consider a different method with veterinary guidance.
          </p>

          <p className="mb-3">
            <strong>How do I know if stool changes are normal or a problem?</strong>
            <br />
            Small changes can be normal. Persistent watery diarrhea, repeated vomiting, blood in stool, or a dog that
            becomes lethargic should be treated as a reason to pause and call your veterinarian.
          </p>

          <p className="mb-3">
            <strong>Can I transition faster if my dog is young and athletic?</strong>
            <br />
            Some dogs adapt quickly, but speed is not a goal by itself. If stools soften or appetite drops, slow down.
            The most successful transitions are the ones that stay stable.
          </p>

          <p>
            <strong>What is the simplest approach for first-time owners?</strong>
            <br />
            Keep it simple: one protein, one product, one method, and careful tracking. Complexity is the most common
            reason transitions fail.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              U.S. FDA guidance on safe handling of pet food and treats:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats
              </a>
            </li>
            <li>
              WSAVA nutrition resources and diet evaluation concepts:{' '}
              <a
                href="https://wsava.org/global-guidelines/global-nutrition-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/global-guidelines/global-nutrition-guidelines/
              </a>
            </li>
            <li>
              AVMA policy on raw or undercooked animal-source protein diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
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
