'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function VeterinarianPerspectivesOnRawFeeding() {
  const locale = useLocale();

  const title = 'Veterinary Perspectives on Raw Diets: What Your Vet May Not Tell You';
  const date = 'December 14, 2025';
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
    'A clear, evidence-based look at why many veterinarians oppose raw diets, how nutrition training varies, the public health and liability pressures clinics face, and how to have a productive, respectful raw-feeding conversation with your vet.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/veterinarian-perspectives-on-raw-feeding`}
        />
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
              <a href="#why-opposition" className="underline hover:opacity-80">
                Why Many Vets Oppose
              </a>
            </li>
            <li>
              <a href="#nutrition-education" className="underline hover:opacity-80">
                Nutrition Education
              </a>
            </li>
            <li>
              <a href="#public-health" className="underline hover:opacity-80">
                Public Health &amp; Liability
              </a>
            </li>
            <li>
              <a href="#quiet-support" className="underline hover:opacity-80">
                When Vets Quietly Support
              </a>
            </li>
            <li>
              <a href="#productive-convo" className="underline hover:opacity-80">
                Productive Conversations
              </a>
            </li>
            <li>
              <a href="#finding-help" className="underline hover:opacity-80">
                Finding the Right Help
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
            Many veterinarians push back on raw diets because of food-safety risk, inconsistent nutrient balance in
            homemade plans, and the clinic-level consequences of pathogen exposure. Nutrition training varies by school
            and by career path, and most general-practice vets must prioritize clear, broadly safe recommendations.
            You can still have a productive conversation about raw feeding by focusing on shared goals, asking specific
            questions, and being open to safer alternatives when your household or dog is high risk.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important note:</strong> This article is educational and not veterinary medical advice. If your dog
            has repeated vomiting, bloody diarrhea, dehydration, choking, severe pain, or sudden collapse, seek urgent
            veterinary care.
          </div>
        </section>

        {/* WHY MANY VETS OPPOSE */}
        <section id="why-opposition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Many Veterinarians Oppose Raw Diets</h2>
          <p className="mb-4">
            Most veterinarians are not trying to dismiss owners. They are trying to protect animals and families using
            recommendations that work in the highest number of real-world situations. Raw diets create a risk profile
            that is hard to control once the food leaves the clinic.
          </p>

          <h3 className="text-xl font-semibold mb-2">The most common reasons you will hear</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Pathogen risk:</strong> raw animal products can contain bacteria and pets may shed organisms even
              when they look healthy.
            </li>
            <li>
              <strong>Household exposure:</strong> risk increases for children, older adults, pregnant people, and
              immunocompromised family members.
            </li>
            <li>
              <strong>Unbalanced formulation:</strong> many homemade raw plans are not complete, especially long term.
            </li>
            <li>
              <strong>Bone and chew injuries:</strong> tooth fractures, choking, or obstruction can be clinic realities.
            </li>
          </ul>

          <p className="mb-4">
            There is also a practical communication problem: clinics must give advice that a busy owner can follow
            safely without perfect execution.
          </p>
        </section>

        {/* NUTRITION EDUCATION */}
        <section id="nutrition-education" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Nutrition Education Varies More Than Owners Realize</h2>
          <p className="mb-4">
            Veterinary medicine is broad. General practitioners manage everything from ear infections to endocrine
            disease to emergency triage. Nutrition is a major pillar of health, but the depth of nutrition training and
            hands-on diet formulation experience can vary across programs and continuing education choices.
          </p>

          <h3 className="text-xl font-semibold mb-2">Why this matters for raw feeding</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Some vets feel highly confident discussing nutrition, while others prefer to refer to a veterinary
              nutrition specialist.
            </li>
            <li>
              Raw feeding discussions often require both nutrition detail and food-safety counseling.
            </li>
            <li>
              Owners may interpret a cautious answer as dismissive, even when it is an honest scope-of-practice
              boundary.
            </li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <p className="text-sm mb-2">
              <strong>Helpful reframing:</strong> If your vet says, &ldquo;I don&rsquo;t recommend raw,&rdquo; follow up
              with, &ldquo;Is your main concern safety, nutrition completeness, or my dog&rsquo;s medical history?&rdquo;
              That question usually reveals the real reason.
            </p>
          </div>
        </section>

        {/* PUBLIC HEALTH AND LIABILITY */}
        <section id="public-health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Liability and Public Health Pressures Are Real</h2>
          <p className="mb-4">
            Clinics do not operate in a vacuum. Veterinarians serve individual patients, but they also work within
            public health realities. When a diet choice increases risk for humans in the household or other animals in
            a hospital setting, vets are trained to treat that risk seriously.
          </p>

          <h3 className="text-xl font-semibold mb-2">Two issues clinics cannot ignore</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Household food safety:</strong> raw food handling can create cross-contamination in kitchens,
              feeding areas, and hands.
            </li>
            <li>
              <strong>Clinic exposure:</strong> pets eating raw diets may shed pathogens and can pose risk to other
              animals in the clinic, especially hospitalized or immune-compromised patients.
            </li>
          </ul>

          <p className="mb-4">
            In other words, even if a single dog appears to do well on raw, the clinic still has to consider broader
            risk patterns. That is one reason many veterinary organizations publicly discourage raw feeding.
          </p>

          <p className="mb-4">
            Owners can reduce avoidable risk by building disciplined routines. If you need a full handling checklist,
            read the dedicated safety guide.
          </p>

          <p className="text-sm text-gray-700">
            Food handling, storage, cleanup, and household risk are covered here:{' '}
            <Link
              href={`/${locale}/blog/raw-dog-food-safety`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Dog Food Safety
            </Link>
            .
          </p>
        </section>

        {/* WHEN VETS QUIETLY SUPPORT */}
        <section id="quiet-support" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Vets May Quietly Support Raw Feeding</h2>
          <p className="mb-4">
            Some veterinarians will support a raw-feeding plan in specific circumstances, even if they do not advertise
            it. This usually happens when the owner is organized, open to correction, and focused on safety and
            nutritional completeness.
          </p>

          <h3 className="text-xl font-semibold mb-2">Situations where support is more likely</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>The household has low human exposure risk and strong sanitation routines.</li>
            <li>The diet is a commercially complete formulation with documented quality controls.</li>
            <li>The owner agrees to monitor weight, stool, coat, and lab markers as appropriate.</li>
            <li>The conversation stays practical: portions, pathogens, dental risks, and realistic execution.</li>
          </ul>

          <p className="mb-4">
            A vet may still advise against raw feeding for puppies, medically fragile dogs, or families with high-risk
            people at home. That is not bias; it is risk management.
          </p>

          <p className="text-sm text-gray-700">
            Puppies deserve extra caution because growth requires tight mineral balance. Read:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-for-puppies-is-it-safe`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Feeding for Puppies: Is It Safe?
            </Link>
            .
          </p>
        </section>

        {/* PRODUCTIVE CONVERSATIONS */}
        <section id="productive-convo" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Have a Productive Conversation With Your Vet</h2>
          <p className="mb-4">
            If you go into a raw-feeding conversation trying to convince your vet, you will usually hit resistance.
            A better approach is to align on the shared goal: a healthy dog and a safe household.
          </p>

          <h3 className="text-xl font-semibold mb-2">Bring specific, answerable questions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Are your concerns mostly pathogens, nutrient balance, or my dog&rsquo;s medical history?</li>
            <li>What warning signs would tell you this diet is not working for my dog?</li>
            <li>What is the safest way to reduce risk if I choose to proceed?</li>
            <li>Should I consult a veterinary nutrition specialist for formulation review?</li>
          </ul>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
            <p className="text-sm mb-2">
              <strong>Conversation tip:</strong> Ask your vet to help you reduce risk, not to endorse an identity.
              Raw feeding becomes far less tense when it becomes a safety and nutrition planning discussion.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Offer your exact product or recipe framework.</li>
              <li>Explain your storage and sanitation routine.</li>
              <li>Share your dog&rsquo;s medical history and current medications.</li>
            </ul>
          </div>

          <p className="mb-4">
            It also helps to clear away common misinformation early. If a claim is driving your decision, verify it
            first.
          </p>

          <p className="text-sm text-gray-700">
            A myth-by-myth breakdown is here:{' '}
            <Link
              href={`/${locale}/blog/top-myths-about-raw-feeding-debunked`}
              className="underline font-medium hover:opacity-80"
            >
              Top Myths About Raw Feeding — Debunked
            </Link>
            .
          </p>
        </section>

        {/* FINDING HELP */}
        <section id="finding-help" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Finding Veterinary Professionals Open to Raw Discussions</h2>
          <p className="mb-4">
            If your current clinic is not comfortable discussing raw feeding, you may still be able to find support
            without turning the relationship into a conflict. The goal is not to find someone who agrees with you; the
            goal is to find someone who can help you make a safer, more nutritionally sound plan.
          </p>

          <h3 className="text-xl font-semibold mb-2">What to look for</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>A vet who asks about your household, sanitation routine, and your dog&rsquo;s health history.</li>
            <li>A willingness to discuss risk tradeoffs without shame or absolutism.</li>
            <li>Clear referral options to a veterinary nutrition specialist when needed.</li>
            <li>Monitoring mindset: body condition, stool, weight trends, and periodic lab review if appropriate.</li>
          </ul>

          <p className="mb-4">
            If you want the complete tradeoff analysis across benefits, risks, and execution realities, keep that as
            your reference point as you talk to professionals.
          </p>

          <p className="text-sm text-gray-700">
            Read the full tradeoff guide here:{' '}
            <Link
              href={`/${locale}/blog/raw-food-diet-pros-and-cons`}
              className="underline font-medium hover:opacity-80"
            >
              Raw Feeding Pros &amp; Cons
            </Link>
            .
          </p>

          <p className="mb-4 mt-6">
            If you ever feel stuck, step back to the big-picture framework and rebuild your plan from the fundamentals.
            That reduces confusion and prevents you from chasing contradictory claims.
          </p>

          <p className="text-sm text-gray-700">
            Start here:{' '}
            <Link
              href={`/${locale}/blog/the-ultimate-guide-to-raw-dog-food`}
              className="underline font-medium hover:opacity-80"
            >
              The Ultimate Guide to Raw Dog Food
            </Link>
            .
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <p className="mb-4 text-sm text-gray-700">
            These sources reflect mainstream veterinary and public health perspectives on raw diets, including the
            pathogen risk discussion, household exposure concerns, and broader nutrition guidance.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA policy: Raw or undercooked animal-source protein in cat and dog diets:{' '}
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
              CDC: Pet food safety and raw pet food guidance:{' '}
              <a
                href="https://www.cdc.gov/healthy-pets/about/pet-food-safety.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cdc.gov/healthy-pets/about/pet-food-safety.html
              </a>
            </li>
            <li>
              JAVMA: Formal instruction and continuing education engagement in veterinary nutrition (2023):{' '}
              <a
                href="https://avmajournals.avma.org/view/journals/javma/261/7/javma.22.12.0577.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://avmajournals.avma.org/view/journals/javma/261/7/javma.22.12.0577.xml
              </a>
            </li>
            <li>
              Review article: Current evidence on raw meat diets in pets (2025, PMC):{' '}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11816250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC11816250/
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
