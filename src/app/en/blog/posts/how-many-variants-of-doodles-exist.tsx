'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowManyVariantsOfDoodlesExist() {
  const locale = useLocale();

  const title =
    'How Many Variants of Doodles Exist? Popular Types, Temperaments, and What Owners Should Know';
  const date = 'September 11, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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
    'Doodles—poodle crosses—come in dozens of variants from Labradoodles and Goldendoodles to Bernedoodles, Aussiedoodles, and Sheepadoodles. This extensive guide covers the most popular doodles in detail, temperament differences, hypoallergenic myths, grooming realities, health concerns, and what prospective owners need to know before choosing a doodle mix.';

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
            <li><a href="#intro" className="underline hover:opacity-80">Introduction</a></li>
            <li><a href="#labradoodle" className="underline hover:opacity-80">Labradoodle</a></li>
            <li><a href="#goldendoodle" className="underline hover:opacity-80">Goldendoodle</a></li>
            <li><a href="#bernedoodle" className="underline hover:opacity-80">Bernedoodle</a></li>
            <li><a href="#aussiedoodle" className="underline hover:opacity-80">Aussiedoodle</a></li>
            <li><a href="#sheepadoodle" className="underline hover:opacity-80">Sheepadoodle</a></li>
            <li><a href="#cockapoo" className="underline hover:opacity-80">Cockapoo</a></li>
            <li><a href="#cavapoo" className="underline hover:opacity-80">Cavapoo</a></li>
            <li><a href="#other-doodles" className="underline hover:opacity-80">Other Doodle Variants</a></li>
            <li><a href="#hypoallergenic" className="underline hover:opacity-80">The Hypoallergenic Myth</a></li>
            <li><a href="#temperament-differences" className="underline hover:opacity-80">Temperament Differences</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming &amp; Coat Care</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Considerations</a></li>
            <li><a href="#choosing" className="underline hover:opacity-80">Choosing the Right Doodle</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Introduction: The World of Doodles</h2>
          <p className="mb-3">
            The word <strong>doodle</strong> in the dog world refers to any cross between a Poodle and another breed.
            Originally, the Labradoodle was developed in the late 1980s in Australia as a potential hypoallergenic guide dog.
            Since then, doodle popularity has exploded. Families are drawn to their teddy bear looks, potential low-shedding
            coats, and playful personalities.
          </p>
          <p className="mb-3">
            Today, there are <strong>dozens of doodle variants</strong>. Some are large, athletic, and best suited for active homes
            (like the Labradoodle or Aussiedoodle), while others are smaller companion dogs (like the Cavapoo or Cockapoo).
            Doodles vary widely in temperament, health, and grooming needs. No two doodles are alike, even within the same litter.
          </p>
          <p>
            This article will explore the <strong>most popular doodles in depth</strong> while also listing other known mixes. We will
            address temperament, whether doodles are truly hypoallergenic, grooming demands, and key considerations for families
            evaluating whether a doodle is the right fit.
          </p>
        </section>

        {/* LABRADOODLE */}
        <section id="labradoodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Labradoodle</h2>
          <p className="mb-3">
            Labradoodles are a cross between a Poodle and a Labrador Retriever. They are widely considered the
            “original” doodle, first bred for service work. Labradoodles tend to be energetic, affectionate, and social.
            Their Labrador parent contributes friendliness and a love of people, while the Poodle adds intelligence and
            problem-solving ability.
          </p>
          <p className="mb-3">
            Temperament-wise, Labradoodles are often <strong>outgoing and trainable</strong>. They need regular exercise
            (walks, fetch, swimming) and mental stimulation to prevent boredom-driven behaviors. Families who want a jogging or hiking partner often find Labradoodles to be a great fit.
          </p>
          <p className="mb-3">
            Coat types vary: some Labradoodles shed lightly, while others have curlier coats that require intensive grooming.
            While they are marketed as hypoallergenic, Labradoodles can still trigger allergies depending on coat and saliva proteins.
          </p>
          <p>
            For many households, Labradoodles are an excellent family dog if you are prepared for their <strong>high energy and grooming needs</strong>.
            Without structure, they can become too exuberant, especially with small children.
          </p>
        </section>

        {/* GOLDENDOODLE */}
        <section id="goldendoodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Goldendoodle</h2>
          <p className="mb-3">
            Goldendoodles, a cross between a Poodle and Golden Retriever, are one of the most popular doodle types in North America.
            They are celebrated for their <strong>warmth, sociability, and intelligence</strong>. Goldendoodles often excel in therapy and
            emotional support roles due to their gentle nature.
          </p>
          <p className="mb-3">
            Owners report Goldendoodles to be affectionate, playful, and eager to please. However, their energy levels can be high.
            Without daily exercise and training, they may develop anxiety-driven behaviors such as chewing or barking.
          </p>
          <p className="mb-3">
            Coat maintenance is significant. Most Goldendoodles require professional grooming every 6–8 weeks plus home brushing.
            Allergy-friendly coats are not guaranteed. Some Goldendoodles shed moderately, especially if they inherit more of the
            Golden Retriever coat genetics.
          </p>
          <p>
            Overall, Goldendoodles are <strong>loving, versatile companions</strong> who thrive in active homes that provide structure
            and consistent care.
          </p>
        </section>

        {/* BERNEDOODLE */}
        <section id="bernedoodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bernedoodle</h2>
          <p className="mb-3">
            Bernedoodles are a cross between a Poodle and a Bernese Mountain Dog. They are known for their striking tri-color coats,
            large size, and loyal personalities. Bernedoodles often have a calmer, more laid-back temperament than Labradoodles or
            Goldendoodles, but they can also inherit the Bernese tendency for stubbornness.
          </p>
          <p className="mb-3">
            Families often choose Bernedoodles for their affectionate and loyal nature. They bond closely with their people and thrive
            in households where someone is home most of the day. Separation anxiety can be an issue if left alone too long.
          </p>
          <p className="mb-3">
            Grooming needs are significant. Bernedoodles with curly coats need frequent brushing and professional grooming. Their size
            also makes grooming more expensive. They are not guaranteed to be low-shedding, despite marketing claims.
          </p>
          <p>
            For families looking for a large, affectionate, and somewhat calmer doodle, Bernedoodles can be a great match—as long as
            you are ready for the <strong>grooming and size demands</strong>.
          </p>
        </section>

        {/* AUSSIEDOODLE */}
        <section id="aussiedoodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Aussiedoodle</h2>
          <p className="mb-3">
            Aussiedoodles are a mix between a Poodle and an Australian Shepherd. They are one of the most <strong>energetic and
            intelligent doodles</strong>, often excelling in agility, obedience, and advanced training. Their high drive makes them best suited
            for very active families.
          </p>
          <p className="mb-3">
            Temperament-wise, Aussiedoodles are playful, quick learners, and sometimes mischievous. Without sufficient exercise and mental
            stimulation, they can become destructive or anxious. They are not a good match for low-activity households.
          </p>
          <p className="mb-3">
            Aussiedoodle coats vary widely, from wavy to curly, and often include merle patterns. Grooming is intensive, and shedding levels
            are unpredictable.
          </p>
          <p>
            If you want a <strong>high-energy, intelligent companion</strong> who thrives on constant training and activity, an Aussiedoodle
            might be ideal. Otherwise, they may be overwhelming.
          </p>
        </section>

        {/* SHEEPADOODLE */}
        <section id="sheepadoodle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sheepadoodle</h2>
          <p className="mb-3">
            A Sheepadoodle is a cross between a Poodle and an Old English Sheepdog. Known for their fluffy coats and clownish
            personalities, Sheepadoodles are playful, loyal, and affectionate. They often inherit the Sheepdog&apos;s herding instincts,
            which can translate into nipping or chasing behaviors if not managed.
          </p>
          <p className="mb-3">
            Sheepadoodles are generally <strong>loving family dogs</strong> with a goofy streak. They are often excellent with children,
            though supervision is always needed due to their size and energy.
          </p>
          <p className="mb-3">
            Grooming is intensive: daily brushing is often needed to prevent mats. Professional grooming is a must, and their coats
            can trap dirt easily. They are not truly hypoallergenic.
          </p>
          <p>
            Families who want a large, fun-loving dog and are willing to commit to heavy grooming may find Sheepadoodles an excellent choice.
          </p>
        </section>

        {/* COCKAPOO */}
        <section id="cockapoo" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cockapoo</h2>
          <p className="mb-3">
            The Cockapoo, a cross between a Poodle and a Cocker Spaniel, is one of the earliest poodle crosses, dating back to the 1960s.
            They are small-to-medium dogs with friendly, affectionate personalities. Cockapoos tend to be <strong>outgoing and playful</strong>,
            making them a popular choice for families and retirees.
          </p>
          <p className="mb-3">
            Grooming is moderate to intensive depending on coat type. Many Cockapoos require regular brushing and grooming but may shed
            less than a typical spaniel. They are not guaranteed to be hypoallergenic.
          </p>
          <p>
            Cockapoos are generally <strong>adaptable and social</strong>, fitting well in both apartments and houses. Their smaller size makes
            them easier to manage than large doodles, though they still require daily exercise.
          </p>
        </section>

        {/* CAVAPOO */}
        <section id="cavapoo" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cavapoo</h2>
          <p className="mb-3">
            Cavapoos are a cross between a Poodle and a Cavalier King Charles Spaniel. They are <strong>gentle, affectionate, and people-oriented</strong>,
            often thriving in calm family homes. Cavapoos are especially popular among first-time dog owners due to their manageable size
            and typically easygoing nature.
          </p>
          <p className="mb-3">
            Grooming is essential, as their coats can mat easily. Cavapoos may inherit heart health risks from their Cavalier lineage,
            so prospective owners should carefully vet breeders.
          </p>
          <p>
            Cavapoos are ideal for families wanting a <strong>small, affectionate companion</strong>. They are less demanding than Aussiedoodles
            or Labradoodles but still need daily walks and play.
          </p>
        </section>

        {/* OTHER DOODLES */}
        <section id="other-doodles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Other Doodle Variants (Quick List)</h2>
          <p className="mb-3">
            Beyond the major doodles covered in detail, there are <strong>dozens of additional Poodle crosses</strong>. Some are
            smaller companion dogs, while others are large working crosses. Each has its own quirks and popularity level:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Schnoodle (Schnauzer + Poodle)</li>
            <li>Maltipoo (Maltese + Poodle)</li>
            <li>Yorkipoo (Yorkshire Terrier + Poodle)</li>
            <li>Irish Doodle (Irish Setter + Poodle)</li>
            <li>Pyredoodle (Great Pyrenees + Poodle)</li>
            <li>Boxerdoodle (Boxer + Poodle)</li>
            <li>Huskydoodle (Husky + Poodle)</li>
            <li>Newfypoo (Newfoundland + Poodle)</li>
            <li>Bordoodle (Border Collie + Poodle)</li>
            <li>Chipoo (Chihuahua + Poodle)</li>
          </ul>
          <p>
            While charming in their own ways, these doodles often share the same <strong>grooming and unpredictability caveats</strong>
            as the major doodles: coat maintenance, variable shedding, and temperament differences based on parental lines.
          </p>
        </section>

        {/* HYPOALLERGENIC MYTH */}
        <section id="hypoallergenic" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Hypoallergenic Myth</h2>
          <p className="mb-3">
            Doodles are often marketed as hypoallergenic, but this is <strong>misleading</strong>. Allergies are usually caused by proteins
            in a dog&apos;s dander, saliva, and urine—not just their hair. While some doodles shed less than their purebred counterparts,
            there is <strong>no guarantee</strong> that they will not trigger allergies.
          </p>
          <p>
            Prospective owners with allergies should spend time with adult doodles from the same breeding line before committing, and
            be prepared for regular grooming and home cleaning to reduce allergens.
          </p>
        </section>

        {/* TEMPERAMENT DIFFERENCES */}
        <section id="temperament-differences" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament Differences Across Doodles</h2>
          <p className="mb-3">
            While doodles share some common traits—intelligence, sociability, and playfulness—their temperaments vary greatly depending
            on the non-Poodle parent. Labradoodles and Goldendoodles tend to be outgoing and energetic, Bernedoodles calmer and loyal,
            Aussiedoodles highly intelligent and active, and Cavapoos affectionate and gentle.
          </p>
          <p>
            Remember: <strong>temperament is never guaranteed</strong>. Each doodle inherits traits differently, and even puppies within
            the same litter can differ dramatically.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming &amp; Coat Care</h2>
          <p className="mb-3">
            Grooming is the single biggest challenge for doodle owners. Curly coats mat easily and require <strong>daily brushing</strong>.
            Professional grooming is needed every 6–8 weeks. Failing to maintain a doodle&apos;s coat can lead to painful mats, skin infections,
            and expensive shave-downs.
          </p>
          <p>
            Families considering a doodle should budget for professional grooming from day one. Training puppies to enjoy brushing
            and handling is essential for lifelong coat health.
          </p>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Considerations</h2>
          <p className="mb-3">
            Doodles inherit potential health problems from both parent breeds. Hip dysplasia, eye disorders, and skin issues are common.
            Cavapoos may inherit heart disease risk from Cavaliers, Bernedoodles cancer risk from Bernese, and Goldendoodles ear infections
            from Retrievers.
          </p>
          <p>
            Responsible breeders health-test parent dogs for common genetic conditions. Always ask for OFA certifications, eye clearances,
            and genetic test results before purchasing a doodle puppy.
          </p>
        </section>

        {/* CHOOSING */}
        <section id="choosing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing the Right Doodle for Your Family</h2>
          <p className="mb-3">
            The right doodle depends on your family&apos;s activity level, grooming budget, and lifestyle. If you want a jogging partner,
            a Labradoodle or Aussiedoodle may fit. If you prefer a calmer companion, a Bernedoodle or Cavapoo might suit you better.
          </p>
          <p>
            Ask yourself: How much daily exercise can we provide? How much time and money can we dedicate to grooming? Are we comfortable
            with the unpredictability of crossbreeds? Honest answers will guide you to the right decision.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are doodles truly hypoallergenic?</strong><br />
            No. While some shed less, no dog is 100% hypoallergenic. Allergies come from proteins, not hair length.
          </p>

          <p className="mb-3">
            <strong>Do doodles need professional grooming?</strong><br />
            Yes. Most doodles require professional grooming every 6–8 weeks plus daily brushing at home.
          </p>

          <p className="mb-3">
            <strong>Which doodle is calmest?</strong><br />
            Bernedoodles are often calmer, while Cavapoos are gentle and affectionate. Energy varies widely even within litters.
          </p>

          <p className="mb-3">
            <strong>Which doodle is most energetic?</strong><br />
            Aussiedoodles are among the most high-energy, needing extensive training and exercise.
          </p>

          <p>
            <strong>Are doodles good with kids?</strong><br />
            Many are, but supervision, training, and management are always essential. Size and energy can overwhelm toddlers if not managed.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Breed overviews: Labrador Retriever, Golden Retriever, Poodle, Bernese Mountain Dog,
              Australian Shepherd, Old English Sheepdog, Cavalier King Charles Spaniel.{' '}
              <a href="https://www.akc.org/dog-breeds/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). <em>Allergies &amp; Pets</em>.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/allergies-and-pets" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/allergies-and-pets
              </a>
            </li>
            <li>
              Cornell University College of Veterinary Medicine. <em>Inherited Diseases in Dogs</em>.{' '}
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-veterinary-biobank/inherited-diseases-dogs" target="_blank" rel="noopener noreferrer">
                https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-veterinary-biobank/inherited-diseases-dogs
              </a>
            </li>
            <li>
              WSAVA Global Guidelines. <em>Genetic Testing &amp; Health Screening</em>.{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a board-certified veterinary behaviorist for individualized
            guidance before acquiring or caring for a doodle.
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
