'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TopMythsAboutRawFeedingDebunked() {
  const locale = useLocale();

  const title = 'Top Myths About Raw Feeding — Debunked by Experts';
  const date = 'December 13, 2025';
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
    'A myth-busting, evidence-based guide to raw feeding: what experts agree on, what the research actually shows, common misinformation patterns, and a practical checklist for evaluating raw diet claims safely.';

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
              <a href="#why-myths-spread" className="underline hover:opacity-80">
                Why Myths Spread
              </a>
            </li>
            <li>
              <a href="#myth-unnatural" className="underline hover:opacity-80">
                Unnatural?
              </a>
            </li>
            <li>
              <a href="#myth-digest" className="underline hover:opacity-80">
                Digest Raw Meat?
              </a>
            </li>
            <li>
              <a href="#myth-disease" className="underline hover:opacity-80">
                Always Causes Disease?
              </a>
            </li>
            <li>
              <a href="#wolves-vs-dogs" className="underline hover:opacity-80">
                Wolves vs Dogs
              </a>
            </li>
            <li>
              <a href="#myth-bones" className="underline hover:opacity-80">
                Bones Myths
              </a>
            </li>
            <li>
              <a href="#evaluate-claims" className="underline hover:opacity-80">
                Evaluate Claims
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
            Raw feeding is not automatically &ldquo;good&rdquo; or &ldquo;bad.&rdquo; The strongest expert consensus is
            that raw diets introduce meaningful food-safety risk, and that nutrition quality depends on formulation,
            handling, and the individual dog. Many common online claims are oversimplified, selectively sourced, or
            presented without the context that veterinarians and nutrition researchers consider essential.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. If your dog
            has vomiting, diarrhea, dehydration, lethargy, choking, or sudden pain, contact your veterinarian promptly.
          </div>
        </section>

        {/* WHY MYTHS SPREAD */}
        <section id="why-myths-spread" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Raw Feeding Myths Spread So Easily</h2>
          <p className="mb-4">
            Raw feeding discussions are especially vulnerable to misinformation because they mix emotional topics
            (health, longevity, trust) with complicated science (pathogens, nutrient balance, digestion). Social media
            rewards confident claims and short narratives, even when the details are incomplete.
          </p>
          <p className="mb-4">
            A helpful way to think about this is that raw feeding has multiple &ldquo;truth layers&rdquo; at once:
            nutrition, food safety, and household practicality. A claim can be partly true in one layer and misleading
            in another. That is why expert guidance often sounds more cautious than viral posts.
          </p>

          <h3 className="text-xl font-semibold mb-2">Three common patterns of misinformation</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Single-cause storytelling:</strong> &ldquo;I switched diets and the problem vanished.&rdquo; This
              ignores other changes like treats, calories, or time.
            </li>
            <li>
              <strong>Cherry-picked authority:</strong> quoting a credential without including the full context or the
              limitations of a statement.
            </li>
            <li>
              <strong>False certainty:</strong> presenting a complex topic as if there is one universal best answer for
              all dogs and all households.
            </li>
          </ul>

          <p className="mb-4">
            If you want the big-picture framework first, start with the foundational overview and then come back to the
            myth section with those decision points in mind.
          </p>

          <p className="text-sm text-gray-700">
            Read the full overview here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* MYTH 1 */}
        <section id="myth-unnatural" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth: Raw Food Is Unnatural for Dogs</h2>
          <p className="mb-4">
            The word &ldquo;unnatural&rdquo; is often used as a shortcut argument, but it is not a nutrition standard.
            A better question is: does the diet meet a dog&rsquo;s nutrient needs, and can it be handled safely in a
            real household?
          </p>
          <p className="mb-4">
            Dogs are opportunistic omnivores. They can thrive on a variety of feeding models when the diet is complete,
            calories are appropriate, and the dog tolerates it. A diet being modern or commercial does not automatically
            make it harmful, and a diet being raw does not automatically make it ideal.
          </p>

          <h3 className="text-xl font-semibold mb-2">What experts tend to agree on</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Nutritional completeness matters more than ideology.</li>
            <li>Household food-safety risk is a legitimate concern.</li>
            <li>One dog&rsquo;s success story does not prove universal safety.</li>
          </ul>

          <p className="mb-4">
            In practice, the most honest framing is that raw feeding is a chosen model with tradeoffs, not a return to
            a mythical perfect past.
          </p>
        </section>

        {/* MYTH 2 */}
        <section id="myth-digest" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth: Dogs Cannot Digest Raw Meat</h2>
          <p className="mb-4">
            Dogs can digest raw meat, and that is not controversial. The question is not whether digestion is possible,
            but whether a specific diet is balanced and whether the food is handled in a way that minimizes pathogen
            exposure.
          </p>
          <p className="mb-4">
            Where this myth becomes misleading is when it is used to imply that any raw product is automatically
            appropriate. Digestibility does not guarantee nutritional balance, and it does not eliminate food-safety
            concerns.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Practical reality:</strong> A dog can digest many things that are still unsafe or incomplete.
              Digestibility is only one checkbox in the bigger decision.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Is the diet complete for long-term feeding?</li>
              <li>Is the fat level appropriate for your dog?</li>
              <li>Can you execute safe storage and cleanup consistently?</li>
            </ul>
          </div>

          <p className="mb-4">
            If you are weighing the tradeoffs across feeding models, it helps to compare the full pros and cons rather
            than debating one isolated claim.
          </p>

          <p className="text-sm text-gray-700">
            A balanced comparison is here:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Feeding Pros &amp; Cons
            </Link>
            .
          </p>
        </section>

        {/* MYTH 3 */}
        <section id="myth-disease" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth: Raw Feeding Always Causes Disease</h2>
          <p className="mb-4">
            &ldquo;Always&rdquo; is the warning sign here. Raw feeding does not guarantee illness, but it does increase
            the probability of exposure to pathogens compared to properly cooked or appropriately processed foods.
            That risk matters for dogs and also for humans in the home.
          </p>
          <p className="mb-4">
            Veterinary organizations commonly emphasize this point because the consequences can be serious, especially
            for higher-risk households. The core concern is that raw animal products may contain bacteria such as
            Salmonella and Listeria, and pets can shed those organisms even when they appear healthy.
          </p>

          <h3 className="text-xl font-semibold mb-2">Where the strongest evidence sits</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Pathogens can be present in raw diets and treats.</li>
            <li>Handling and sanitation practices change real-world risk.</li>
            <li>Risk increases when vulnerable people are present in the household.</li>
          </ul>

          <p className="mb-4">
            This is exactly why many expert sources focus on food-safety routines and household suitability rather than
            arguing about whether raw feeding is &ldquo;real&rdquo; food.
          </p>
        </section>

        {/* WOLVES VS DOGS */}
        <section id="wolves-vs-dogs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth: Wolves Eat Raw, So Dogs Should Eat Raw</h2>
          <p className="mb-4">
            Wolves and domestic dogs share ancestry, but they are not identical in lifestyle, lifespan, and selection
            pressures. Domestic dogs have adapted to living alongside humans, eating human-adjacent food sources, and
            thriving in environments wolves do not experience.
          </p>
          <p className="mb-4">
            The wolf comparison often functions as a persuasive story rather than a rigorous nutrition argument.
            Even if a wolf can survive on a certain pattern, that does not prove it is the best choice for a companion
            animal living indoors, sleeping on couches, and sharing a kitchen with a family.
          </p>

          <h3 className="text-xl font-semibold mb-2">A more useful question than wolves</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Does your dog have medical conditions that change diet safety?</li>
            <li>Can you keep the diet nutritionally consistent long term?</li>
            <li>Can you maintain safe handling practices every day?</li>
          </ul>

          <p className="mb-4">
            In other words, raw feeding decisions should be built on your dog and your household, not on a symbolic
            comparison.
          </p>
        </section>

        {/* BONES MYTHS */}
        <section id="myth-bones" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Myth: All Bones Are Safe If They Are Raw</h2>
          <p className="mb-4">
            This is one of the most dangerous oversimplifications in the raw feeding world. Raw bones are generally
            safer than cooked bones, but they can still cause choking, fractured teeth, constipation, and GI blockage
            if the bone type and size do not match the dog.
          </p>
          <p className="mb-4">
            Many bone incidents come down to predictable variables: a bone that is too small, too hard, fed without
            supervision, or offered to a dog that gulps and breaks off large pieces.
          </p>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Safety shortcut:</strong> bone choice and supervision matter more than ideology.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Size bones to prevent swallowing.</li>
              <li>Avoid very dense weight-bearing bones for power chewers.</li>
              <li>Remove the bone when it becomes small or splinter-prone.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700">
            For a complete, safety-first bone guide, see:{' '}
            <Link
              href={`/${locale}/blog/raw-bones-and-dogs-benefits-risks-safe-chewing-tips`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Bones &amp; Dogs: Benefits, Risks &amp; Safe Chewing Tips
            </Link>
            .
          </p>
        </section>

        {/* EVALUATE CLAIMS */}
        <section id="evaluate-claims" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">How to Evaluate Raw Feeding Claims Critically</h2>
          <p className="mb-4">
            The most reliable way to navigate raw feeding claims is to treat them like product claims in any other
            industry: look for definitions, evidence quality, and whether the claim holds up under real-world
            constraints.
          </p>

          <h3 className="text-xl font-semibold mb-2">A simple evaluation checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Does the claim define terms?</strong> Words like &ldquo;toxins&rdquo; and &ldquo;processed&rdquo;
              are often used vaguely.
            </li>
            <li>
              <strong>Is the evidence peer-reviewed?</strong> Single anecdotes are not the same as controlled research.
            </li>
            <li>
              <strong>Does it address food-safety risk?</strong> If the claim ignores handling and household exposure,
              it is incomplete.
            </li>
            <li>
              <strong>Does it acknowledge tradeoffs?</strong> Honest education includes limitations, not guarantees.
            </li>
            <li>
              <strong>Is it selling certainty?</strong> Absolute language is usually a warning sign.
            </li>
          </ul>

          <p className="mb-4">
            Some owners want a veterinarian&rsquo;s perspective before deciding, and that is reasonable. Nutrition and
            food safety overlap with medicine, especially when the dog has medical issues or when the household has
            higher-risk people.
          </p>

          <p className="text-sm text-gray-700">
            Read the veterinarian-focused discussion here:{' '}
            <Link
              href={`/${locale}/blog/veterinarian-perspectives-on-raw-feeding`}
              className="underline font-medium hover:opacity-80"
            >
              Vet Perspectives on Raw Feeding
            </Link>
            .
          </p>

          <p className="mb-4 mt-6">
            The goal is not to win an argument. The goal is to choose a feeding plan that is nutritionally appropriate,
            practically sustainable, and safe for the dog and the household.
          </p>

          <p className="mb-4">
            If you want to step back and rebuild your full decision framework from the ground up, return to the
            comprehensive overview:
          </p>

          <p className="text-sm text-gray-700">
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>

          <p className="mt-6 mb-4">
            If you are still undecided, it can also help to read the full tradeoff discussion that lays out benefits,
            risks, and execution reality in one place, then compare that against your dog&rsquo;s needs and your
            household&rsquo;s risk tolerance.
          </p>

          <p className="text-sm text-gray-700">
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Feeding Pros &amp; Cons
            </Link>
            .
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <p className="mb-4 text-sm text-gray-700">
            This topic is debated, but reputable organizations and peer-reviewed reviews consistently emphasize food
            safety, household risk, and the importance of nutritional completeness.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA) policy on raw or undercooked animal-source protein diets:{' '}
              <a
                href="https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/avma-policies/raw-or-undercooked-animal-source-protein-cat-and-dog-diets
              </a>
            </li>
            <li>
              WSAVA Global Nutrition Committee statement on risks of raw meat-based diets (PDF):{' '}
              <a
                href="https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wsava.org/wp-content/uploads/2020/05/WSAVA-Global-Nutrition-Committee-Statement-on-Risks-of-Raw-Meat.pdf
              </a>
            </li>
            <li>
              CDC guidance on pet food safety and raw pet food risks:{' '}
              <a
                href="https://www.cdc.gov/healthy-pets/about/pet-food-safety.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cdc.gov/healthy-pets/about/pet-food-safety.html
              </a>
            </li>
            <li>
              FDA overview: raw pet food diets can be dangerous to you and your pet:{' '}
              <a
                href="https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet
              </a>
            </li>
            <li>
              Peer-reviewed review: Davies RH (2019) on raw diets and hygiene/pathogen risk (PMC):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6849757/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC6849757/
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
