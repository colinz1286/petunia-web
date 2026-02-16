'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatDoesHypoallergenicMean() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'What Does Hypoallergenic Mean? Myths, Allergens, and Picking the Right Dog';
  const date = 'August 7, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
    '“Hypoallergenic” is one of the most misunderstood words in the dog world. This evidence-informed guide explains what the term actually means, why no breed is truly allergen-free, how dog allergens work (Can f proteins), and how coat genetics and grooming influence shedding and allergen spread. Includes common myths, a practical buyer’s checklist, breed-by-breed profiles often recommended for allergy-aware homes, and a home allergy-control plan.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
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
            <li><a href="#definition" className="underline hover:opacity-80">What &ldquo;Hypoallergenic&rdquo; Means</a></li>
            <li><a href="#allergy-biology" className="underline hover:opacity-80">Allergy Biology &amp; Can f Proteins</a></li>
            <li><a href="#myths" className="underline hover:opacity-80">Common Myths</a></li>
            <li><a href="#shedding-vs-allergens" className="underline hover:opacity-80">Shedding vs Allergens</a></li>
            <li><a href="#genetics" className="underline hover:opacity-80">Coat Genetics &amp; Why Dogs Differ</a></li>
            <li><a href="#breeds" className="underline hover:opacity-80">Breed Profiles Often Recommended</a></li>
            <li><a href="#fit" className="underline hover:opacity-80">How To Choose the Right Breed for You</a></li>
            <li><a href="#management" className="underline hover:opacity-80">Home Allergy-Management Plan</a></li>
            <li><a href="#buyer-checklist" className="underline hover:opacity-80">Buyer Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>There is no such thing as a truly hypoallergenic dog.</strong> All dogs produce allergenic proteins, mainly from dander (skin),
            saliva, and urine. Some dogs <em>appear</em> to trigger fewer symptoms for some people because of coat type, grooming routines,
            and household cleaning, but <strong>no breed is guaranteed allergy-free</strong>. What you can control: pick dogs whose coats tend
            to retain loose hair, commit to consistent grooming, and run a layered home allergy plan. Then confirm your personal
            tolerance through real-world exposure.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Before committing, schedule multiple meetups with the same dog after exercise, play, and grooming.
            Log your symptoms, meds taken, and timing in Petunia to see trends rather than guesses.
          </div>
        </section>

        {/* Definition */}
        <section id="definition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What &ldquo;Hypoallergenic&rdquo; Actually Means</h2>
          <p className="mb-3">
            In consumer health, &ldquo;hypoallergenic&rdquo; means a product or organism is <em>less likely</em> to cause an allergic reaction,
            not that it is free of allergens. In the dog world, the word is used loosely to market low-shedding breeds or mixes as
            &ldquo;better for allergies.&rdquo; The problem is twofold: first, shedding is not the allergen; second, peer-reviewed studies
            have <strong>not</strong> found a breed that reliably produces less of the major dog allergens across real homes. That is why major
            allergy organizations advise that there is <strong>no</strong> truly hypoallergenic dog. The most honest framing is: some coats and
            routines <em>may</em> be easier for some people, but results are individual.
          </p>
          <p>
            Practically, &ldquo;hypoallergenic&rdquo; should be treated as a <em>starting hypothesis</em> that requires confirmation through
            exposure and a home plan, not as a guarantee tied to a breed label.
          </p>
        </section>

        {/* Allergy biology */}
        <section id="allergy-biology" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Allergy Biology: What You Are Actually Reacting To</h2>
          <p className="mb-3">
            Dog allergy is an immune response to specific <strong>proteins</strong> collectively nicknamed <em>Can f</em> (for <em>Canis familiaris</em>).
            The best studied include <em>Can f 1</em> and <em>Can f 2</em> (lipocalins), <em>Can f 3</em> (serum albumin), and <em>Can f 5</em> (a prostatic
            kallikrein produced by intact males). These proteins ride on microscopic particles from skin and saliva; grooming, licking,
            and normal skin turnover deposit them into dust and onto surfaces. Because allergen particles can linger, people can react
            in dog-free spaces that still contain residual allergen in dust and fabrics.
          </p>
          <p className="mb-3">
            People also differ in which allergen components they react to. Some patients are primarily sensitized to <em>Can f 1</em>,
            others to <em>Can f 5</em>, and so on. That is one reason person A might tolerate a given dog that person B cannot.
            In select cases, component-resolved diagnostics with an allergy specialist can clarify what you react to and guide
            expectations for living with dogs.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If allergies are significant in your household, ask your allergist about component-resolved testing
            (e.g., <em>Can f 1/2/3/5</em>). Knowing your personal pattern helps you design a smarter plan.
          </div>
        </section>

        {/* Myths */}
        <section id="myths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Myths (&amp; the Reality)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 1: &ldquo;Some breeds are truly hypoallergenic.&rdquo;</h3>
          <p className="mb-3">
            No major allergy body endorses any specific dog breed as truly hypoallergenic. Studies that measured <em>Can f 1</em>
            in hair or homes did not find a dependable &ldquo;allergy-friendly&rdquo; set of breeds. Treat &ldquo;hypoallergenic&rdquo; as a
            marketing shortcut, not a scientific category.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 2: &ldquo;If a dog does not shed, I will not react.&rdquo;</h3>
          <p className="mb-3">
            Shedding is a mechanical process; allergens are biological proteins. A low-shedding coat can <em>help</em> contain loose hair,
            but dander and saliva are still produced. You can react to a low-shedding dog, and you can sometimes tolerate a moderate-shedding
            dog if environmental control is excellent.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 3: &ldquo;Hair vs fur&rdquo; determines allergy risk.</h3>
          <p className="mb-3">
            Mammalian hair and fur are both keratin. What differs is <strong>growth cycle and structure</strong>. Coats that grow continuously
            may trap more shed hair until brushed or clipped; many double coats are engineered by nature to release undercoat seasonally.
            Neither option removes allergens entirely.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 4: &ldquo;A list of &lsquo;hypoallergenic breeds&rsquo; is a guarantee.&rdquo;</h3>
          <p className="mb-3">
            Lists can be helpful as a <em>starting point</em> because certain coats are easier to manage. But individual variability, genetics,
            and house routines matter more. Always confirm with real-world exposure before you commit.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Myth 5: &ldquo;A single bath &amp; you are safe for weeks.&rdquo;</h3>
          <p>
            Washing can temporarily lower recoverable allergen on hair, but the effect fades unless you repeat it and pair it with
            brushing and environmental cleaning. Think rhythms and layers, not one-time fixes.
          </p>
        </section>

        {/* Shedding vs allergens */}
        <section id="shedding-vs-allergens" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Shedding vs Allergens: Intertwined, Not Identical</h2>
          <p className="mb-3">
            Shedding describes how much hair leaves the coat and falls into the environment; allergen load describes how much
            allergenic protein reaches your air and surfaces. A low-shedding dog can still distribute allergen through saliva
            (licking toys, bedding, and people) and microscopic dander. Conversely, households with routine grooming, excellent
            ventilation, HEPA filtration, and damp dusting can sometimes keep symptoms manageable even with a moderate shedder.
          </p>
          <p>
            This distinction explains why two families can have opposite experiences with the same breed: the dog, the people, and
            the environment all interact.
          </p>
        </section>

        {/* Genetics */}
        <section id="genetics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coat Genetics: Why One Dog Triggers You and Another Does Not</h2>
          <p className="mb-3">
            Most visible coat differences map to a few genes. Three classics explain a lot of what you see: <strong>RSPO2</strong> (furnishings:
            beard/brows), <strong>FGF5</strong> (hair length), and <strong>KRT71</strong> (curl). Veterinary genetic testing also reports a shedding-related
            signal (<strong>MC5R</strong>) in many non-wire-haired breeds. Dogs with furnishings and curl often retain loose hair until brushed;
            flat &ldquo;improper&rdquo; coats without furnishings tend to release more hair into the environment. None of these remove allergens,
            but they influence how hair behaves in your home and how much daily brushing matters.
          </p>
          <p className="mb-3">
            For breeders, pairing furnished sires/dams and selecting for curl can shift a litter toward coats that are easier to maintain
            in allergy-aware homes. For buyers, seeing the actual genotype printouts (RSPO2, MC5R, sometimes KRT71 and FGF5) offers clearer
            expectations than a vague label like &ldquo;hypoallergenic.&rdquo;
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask for DNA coat test results for the parents and the specific puppy you are considering.
            Store the PDFs and your grooming plan in Petunia so everyone follows the same system.
          </div>
        </section>

        {/* Breed profiles intro */}
        <section id="breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed Profiles Often Recommended for Allergy-Aware Homes</h2>
          <p className="mb-3">
            Reminder up front: <strong>no breed is truly hypoallergenic</strong>. The breeds below are commonly recommended because they
            <em>tend</em> to be lower-shedding or have hair-type coats that retain loose hair until brushed or clipped. Your experience can
            still vary based on individual biology and your home routine. For each, we summarize size, general temperament, grooming
            realities, exercise needs, and a quick &ldquo;fit&rdquo; snapshot to help you narrow choices.
          </p>
          <p>
            Use this section as a shortlist to test in real life. Meet adults, not just puppies; energy and coat management are easier to
            judge in mature dogs.
          </p>
        </section>

        {/* Breed: Poodle */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Poodle (Toy, Miniature, Standard)</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Dense, curly hair that grows continuously; typically low free-fall shedding but high grooming needs.  
            <strong>Size:</strong> Toy (under 10 inches), Miniature (10–15 inches), Standard (over 15 inches at the shoulder).  
            <strong>Temperament:</strong> Highly intelligent, biddable, athletic.  
            <strong>Exercise:</strong> Daily mental and physical work; Standards need the most.  
            <strong>Grooming:</strong> Pro grooms every 4–8 weeks plus weekly line brushing and combing.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Outstanding for owners who want a trainable, athletic partner and are willing to budget time and money
            for routine grooming. If you simply want &ldquo;low maintenance,&rdquo; a Poodle&rsquo;s coat may surprise you with workload; consider a
            shorter clip if you prefer less daily brushing.
          </p>
        </section>

        {/* Breed: Bichon Frisé */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Bichon Frisé</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Soft, curled, &ldquo;powder-puff&rdquo; texture; shed hairs tend to stay in the coat until brushed.  
            <strong>Size:</strong> About 9.5–11.5 inches; typically 12–18 pounds.  
            <strong>Temperament:</strong> Merry, social, people-oriented; can be sensitive to long alone time.  
            <strong>Exercise:</strong> Moderate; daily walks plus play.  
            <strong>Grooming:</strong> Frequent brushing and regular trims to prevent matting and tear-stain buildup.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Great for apartments or families who are home often and enjoy regular grooming. House-training can
            take patience. If your schedule is inconsistent, plan for dog walkers or daycare.
          </p>
        </section>

        {/* Breed: Miniature Schnauzer */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Miniature Schnauzer</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Double coat with harsh outer layer; typically hand-stripped for texture and lower shed, or clipped for convenience.  
            <strong>Size:</strong> 12–14 inches; sturdy, portable.  
            <strong>Temperament:</strong> Alert, outgoing, eager to please; classic terrier &ldquo;let&rsquo;s go&rdquo; attitude.  
            <strong>Exercise:</strong> Daily walks and play; enjoys training games.  
            <strong>Grooming:</strong> Hand-stripping preserves coat quality and often sheds less into the home; clipping is common but can soften coat.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Good for owners who like a spirited companion and can maintain a grooming routine. Terriers can be vocal;
            training and enrichment keep them at their best.
          </p>
        </section>

        {/* Breed: Soft Coated Wheaten Terrier */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Soft Coated Wheaten Terrier</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Single, silky &ldquo;wheaten&rdquo; coat; typically lower free-fall shedding but mats without diligent care.  
            <strong>Size:</strong> Medium (up to ~19 inches; ~30–40 pounds).  
            <strong>Temperament:</strong> Exuberant, people-loving, energetic.  
            <strong>Exercise:</strong> Solid daily activity; enjoys training and play.  
            <strong>Grooming:</strong> Thorough brushing/comb-outs several times per week plus routine trims.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Active homes that enjoy grooming rhythms and want a medium-sized, friendly dog. Expect a joyful greeter
            and a coat that needs calendar discipline.
          </p>
        </section>

        {/* Breed: Portuguese Water Dog */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Portuguese Water Dog</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Tight curls or waves; typically low free-fall shedding; athletic working coat.  
            <strong>Size:</strong> Medium; males ~20–23 inches, females ~17–21 inches.  
            <strong>Temperament:</strong> Bright, biddable, energetic; bred for water work.  
            <strong>Exercise:</strong> Robust daily exercise and training.  
            <strong>Grooming:</strong> Regular professional grooming plus at-home brush/comb; traditional clips vary coat length.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Best for active owners who want an athletic partner and can commit to both exercise and grooming.
            Bored PWDs invent hobbies you might not love.
          </p>
        </section>

        {/* Breed: Lagotto Romagnolo */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Lagotto Romagnolo</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Dense, curly, woolly texture; tends to hold loose hair until brushed.  
            <strong>Size:</strong> Small-to-medium; roughly mid-teens in inches at the withers.  
            <strong>Temperament:</strong> Keen worker with cheerful, stable demeanor; historically a truffle dog.  
            <strong>Exercise:</strong> Daily activity plus nosework.  
            <strong>Grooming:</strong> Regular trims and careful brushing to prevent felted curls.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Great for owners who enjoy training and scent games and will keep a steady grooming calendar.
          </p>
        </section>

        {/* Breed: Irish Water Spaniel */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Irish Water Spaniel</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Crisp curls with a distinctive topknot and a smooth &ldquo;rat tail&rdquo;; lower free-fall shedding relative to many sporting breeds.  
            <strong>Size:</strong> The tallest AKC spaniel; about 21–24 inches; ~45–68 pounds.  
            <strong>Temperament:</strong> Inquisitive, hardworking, playful; strong water drive.  
            <strong>Exercise:</strong> High; thrives on vigorous activity and training.  
            <strong>Grooming:</strong> Routine brushing and trimming; ears need care due to curl and water work.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Suits active, outdoorsy homes that enjoy structured training and won&rsquo;t skip grooming.
          </p>
        </section>

        {/* Breed: Bedlington Terrier */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Bedlington Terrier</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Crisp, curly coat often described as &ldquo;lamb-like&rdquo;; tends to shed minimally when maintained.  
            <strong>Size:</strong> About 15–17 inches; ~17–23 pounds.  
            <strong>Temperament:</strong> Lithe, energetic, affectionate.  
            <strong>Exercise:</strong> Daily walks and play; enjoys sprints.  
            <strong>Grooming:</strong> Skilled trims to maintain the silhouette; regular brushing prevents felting.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> For owners who want a graceful, athletic terrier with routine salon visits and at-home coat care.
          </p>
        </section>

        {/* Breed: Hairless & hair-type toys (Chinese Crested, Xolo) */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Hairless &amp; Hair-Type Toys: Chinese Crested &amp; Xoloitzcuintli</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Hairless varieties reduce shed hair but still produce dander and saliva; coated varieties have manageable hair-type coats.  
            <strong>Size:</strong> Toy to standard (Xolo); Chinese Crested is toy-sized.  
            <strong>Temperament:</strong> Companion-oriented, lively, often cuddly.  
            <strong>Exercise:</strong> Moderate; daily walks and play.  
            <strong>Grooming:</strong> Skin care for hairless dogs (sun protection, gentle bathing); brushing for coated varieties.
          </p>
          <p className="mb-3">
            <strong>Fit snapshot:</strong> Consider if you want minimal shed hair but can commit to skin care and routine cleaning. Hairless
            dogs are <em>not</em> &ldquo;allergen-free;&rdquo; saliva/dander still matter.
          </p>
        </section>

        {/* Breed: Companion hair breeds (Maltese, Yorkie, Havanese) */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-2">Companion Hair Breeds: Maltese, Yorkshire Terrier, Havanese</h3>
          <p className="mb-2">
            <strong>Coat:</strong> Long, silky hair that grows continuously; shed hairs often stay in the coat until brushed.  
            <strong>Size:</strong> Toy; portable.  
            <strong>Temperament:</strong> Companion-oriented; cheerful to feisty depending on breed.  
            <strong>Exercise:</strong> Daily walks/play; training keeps minds busy.  
            <strong>Grooming:</strong> High if kept long; many owners keep shorter &ldquo;pet&rdquo; cuts. Daily combing prevents tangles.
          </p>
          <p>
            <strong>Fit snapshot:</strong> Apartment-friendly and people-centric, best for owners who enjoy grooming rituals or short clips
            and want a close companion with moderate activity needs.
          </p>
        </section>
        {/* Fit & decision framework */}
        <section id="fit" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How To Choose the Right Breed for <em>You</em></h2>
          <p className="mb-3">
            Your goal is not to find a magic &ldquo;hypoallergenic&rdquo; badge; it is to find the <strong>best real-world fit</strong> across energy, size,
            grooming bandwidth, training style, family dynamics, and your own allergy profile. Here is a practical framework:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>
              <strong>Write your non-negotiables.</strong> Maximum adult size, daily exercise minutes, acceptable grooming time and budget,
              alone-time tolerance, kid compatibility. Be honest and specific (&ldquo;90 minutes daily exercise&rdquo; beats &ldquo;active&rdquo;).
            </li>
            <li>
              <strong>Shortlist 3–5 breeds</strong> (or mixes) whose coat and energy match your life. Use club standards and reputable sources, not
              generic lists. Note coat <em>maintenance</em>, not just shedding claims.
            </li>
            <li>
              <strong>Plan exposure.</strong> Meet adults of those breeds in varied states: just groomed, post-walk, after play. Visit homes,
              parks, and reputable breeders. Track symptoms and context (indoors vs outdoors, carpet vs hard floors).
            </li>
            <li>
              <strong>Layer a home plan.</strong> HEPA filtration, damp-dusting, vacuum with sealed HEPA, bedroom boundaries, washable dog bedding,
              frequent laundering, and a bathing/brushing schedule that suits your dog&rsquo;s coat.
            </li>
            <li>
              <strong>Re-test.</strong> Repeat exposure after you have your routine dialed in; some people adapt to a rhythm that reduces flares.
            </li>
            <li>
              <strong>Consider medical support.</strong> An allergist can discuss medications or (in selected cases) immunotherapy. Component-resolved
              testing helps set expectations when <em>Can f 5</em> or other targets are involved.
            </li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Build a shared &ldquo;Allergy Plan&rdquo; in Petunia: filter change dates, vacuum schedule, bath calendar,
            and a quick symptoms log so the whole family plays the same game.
          </div>
        </section>

        {/* Home management */}
        <section id="management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Allergy-Management Plan: Layer Simple Wins</h2>
          <p className="mb-3">
            Because allergens are proteins on particles, your best strategy is additive:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Ventilation &amp; filtration:</strong> Use a true HEPA air cleaner sized for the room. In central systems, consider MERV-13 filters if your unit supports them.</li>
            <li><strong>Cleaning cadence:</strong> Vacuum carpets and upholstery with a sealed HEPA vacuum; damp-dust hard surfaces; launder dog bedding weekly and crate pads frequently.</li>
            <li><strong>Bathing &amp; brushing:</strong> Regular, gentle bathing plus thorough line brushing and a metal comb to skin. Frequency depends on coat type and your allergist&rsquo;s advice.</li>
            <li><strong>Zone management:</strong> Keep bedrooms low-allergen; use washable throws on sofas; limit face licking if saliva is a trigger.</li>
            <li><strong>Grooming logistics:</strong> After pro grooms or blow-outs, air out rooms, vacuum, and wipe surfaces to capture disturbed particles.</li>
          </ul>
          <p>
            Each step helps a little; together they help a lot. The &ldquo;perfect&rdquo; plan is the one your family can repeat without fail.
          </p>
        </section>

        {/* Buyer checklist */}
        <section id="buyer-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Buyer Checklist (Print This)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Confirm expectations:</strong> &ldquo;Hypoallergenic&rdquo; is not a guarantee. Ask for honest shedding demos (brush on a dark towel).</li>
            <li><strong>See DNA coat results:</strong> RSPO2 (furnishings) and, where available, MC5R (shedding), plus KRT71 (curl) and FGF5 (length) if offered.</li>
            <li><strong>Meet adults:</strong> Meet a parent and unrelated adults from the line. Puppies can mislead on coat and energy.</li>
            <li><strong>Get a grooming SOP:</strong> Tools, frequency, and sample calendar. Ask for a &ldquo;first 90 days&rdquo; schedule you can follow.</li>
            <li><strong>Trial exposure:</strong> Arrange multiple visits or a structured foster/trial if the breeder or rescue allows. Log symptoms.</li>
            <li><strong>Health &amp; ethics:</strong> Verify health testing (hips/elbows where relevant), vaccination/deworming, contract clarity, and support.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Upload the contract, coat tests, and your first-90-days grooming calendar into Petunia. Share it with
            every caregiver so your plan survives busy weeks.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is there any breed that is truly hypoallergenic?</strong><br />
            No. Major allergy organizations and peer-reviewed studies agree that no dog breed is allergen-free. Some breeds may be
            easier to live with for some people, but results vary person to person.
          </p>

          <p className="mb-3">
            <strong>Why do some people tolerate one dog but react to another?</strong><br />
            Individual sensitization patterns differ (for example, <em>Can f 5</em> vs <em>Can f 1</em>), and environments differ (carpets, ventilation,
            cleaning cadence). Coat type and grooming also change how hair and dander behave in your home.
          </p>

          <p className="mb-3">
            <strong>Do hairless dogs solve allergies?</strong><br />
            Hairless coats reduce shed hair, but dander and saliva allergens remain. Skin care and routine cleaning still matter.
          </p>

          <p className="mb-3">
            <strong>Will one bath fix things for weeks?</strong><br />
            Bathing can temporarily lower recoverable allergen on hair, but you must repeat it and pair it with environmental cleaning
            for sustained benefit.
          </p>

          <p className="mb-3">
            <strong>Should I do allergy testing before getting a dog?</strong><br />
            If you have a history of significant symptoms, yes—speak with an allergist. Component-resolved diagnostics can clarify
            what you react to and help you design a plan.
          </p>

          <p>
            <strong>Is there a best first dog for kids with mild allergies?</strong><br />
            There is no universal &ldquo;best.&rdquo; Start with lower-shedding or hair-type coats (e.g., Poodle varieties, Bichon, some terriers,
            Portuguese Water Dog), then test your personal response and confirm that the grooming workload fits your life.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AAAAI. Pet allergies &amp; &ldquo;hypoallergenic&rdquo; dog myths (no truly hypoallergenic breed; study summaries).
              <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/dog-myths" target="_blank" rel="noopener noreferrer"> Myths page</a> |
              <a href="https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/pet" target="_blank" rel="noopener noreferrer"> Pet allergy basics</a>
            </li>
            <li>
              ACAAI. Pet allergies (Q&amp;A; &ldquo;hypoallergenic&rdquo; pets do not exist; dust studies).
              <a href="https://acaai.org/resource/pet-allergies/" target="_blank" rel="noopener noreferrer"> Resource</a>
            </li>
            <li>
              Vredegoor DW et&nbsp;al. <em>Can f 1</em> levels in hair and homes of different dog breeds; no evidence for hypoallergenic classification. J Allergy Clin Immunol (2012).
              <a href="https://pubmed.ncbi.nlm.nih.gov/22728082/" target="_blank" rel="noopener noreferrer"> PubMed</a> |
              <a href="https://www.jacionline.org/article/s0091-6749(12)00793-2/fulltext" target="_blank" rel="noopener noreferrer"> Full text</a>
            </li>
            <li>
              Lockey RF. The myth of hypoallergenic dogs (and cats). J Allergy Clin Immunol (2012). 
              <a href="https://www.jacionline.org/article/S0091-6749(12)01380-2/fulltext" target="_blank" rel="noopener noreferrer"> Commentary</a>
            </li>
            <li>
              Cadieu E et&nbsp;al. Coat variation in the domestic dog governed by <strong>RSPO2</strong>, <strong>FGF5</strong>, and <strong>KRT71</strong>. <em>Science</em> (2009).
              <a href="https://www.science.org/doi/10.1126/science.1177808" target="_blank" rel="noopener noreferrer"> Paper</a>
            </li>
            <li>
              UC Davis VGL. Furnishings/Improper Coat (RSPO2) and Shedding+ (SD locus, incl. MC5R).
              <a href="https://vgl.ucdavis.edu/test/furnishings-and-improper-coat" target="_blank" rel="noopener noreferrer"> RSPO2</a> |
              <a href="https://vgl.ucdavis.edu/test/shedding" target="_blank" rel="noopener noreferrer"> Shedding+</a>
            </li>
            <li>
              Schoos AMM et&nbsp;al. Component-resolved diagnostics in pet allergy. J Allergy Clin Immunol (2021).
              <a href="https://www.jacionline.org/article/S0091-6749(21)00003-8/fulltext" target="_blank" rel="noopener noreferrer"> Review</a>
            </li>
            <li>
              EPA. Guide to Air Cleaners in the Home (HEPA basics; consumer guidance).
              <a href="https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home" target="_blank" rel="noopener noreferrer"> Web guide</a> |
              <a href="https://www.epa.gov/sites/default/files/2014-07/documents/aircleaners.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              Hodson T et&nbsp;al. Washing dogs reduces recoverable <em>Can f 1</em> (short-lived effect without repetition). J Allergy Clin Immunol (1999).
              <a href="https://pubmed.ncbi.nlm.nih.gov/10200004/" target="_blank" rel="noopener noreferrer"> PubMed</a>
            </li>
            <li>
              AKC breed resources for size/temperament/standards: Poodle, Bichon Frisé, Miniature Schnauzer, Soft Coated Wheaten Terrier, Portuguese Water Dog, Lagotto Romagnolo, Irish Water Spaniel, Bedlington Terrier, Chinese Crested, Xoloitzcuintli, Maltese, Yorkshire Terrier, Havanese.
              <a href="https://www.akc.org/dog-breeds/poodle-miniature/" target="_blank" rel="noopener noreferrer"> Poodle</a>,
              <a href="https://images.akc.org/pdf/breeds/standards/BichonFrise.pdf" target="_blank" rel="noopener noreferrer"> Bichon standard</a>,
              <a href="https://www.akc.org/dog-breeds/miniature-schnauzer/" target="_blank" rel="noopener noreferrer"> Mini Schnauzer</a>,
              <a href="https://www.akc.org/dog-breeds/soft-coated-wheaten-terrier/" target="_blank" rel="noopener noreferrer"> Wheaten</a>,
              <a href="https://www.akc.org/dog-breeds/portuguese-water-dog/" target="_blank" rel="noopener noreferrer"> PWD</a>,
              <a href="https://images.akc.org/pdf/breeds/standards/LagottoRomagnolo.pdf" target="_blank" rel="noopener noreferrer"> Lagotto standard</a>,
              <a href="https://www.akc.org/dog-breeds/irish-water-spaniel/" target="_blank" rel="noopener noreferrer"> IWS</a>,
              <a href="https://www.akc.org/dog-breeds/bedlington-terrier/" target="_blank" rel="noopener noreferrer"> Bedlington</a>,
              <a href="https://www.akc.org/dog-breeds/chinese-crested/" target="_blank" rel="noopener noreferrer"> Chinese Crested</a>,
              <a href="https://www.akc.org/dog-breeds/xoloitzcuintli/" target="_blank" rel="noopener noreferrer"> Xolo</a>,
              <a href="https://www.akc.org/dog-breeds/maltese/" target="_blank" rel="noopener noreferrer"> Maltese</a>,
              <a href="https://www.akc.org/dog-breeds/yorkshire-terrier/" target="_blank" rel="noopener noreferrer"> Yorkshire Terrier</a>,
              <a href="https://www.akc.org/dog-breeds/havanese/" target="_blank" rel="noopener noreferrer"> Havanese</a>
            </li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your allergist and veterinarian for individualized medical and grooming guidance.
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
