'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBreedsForOlderCouples() {
  const locale = useLocale();

  const title =
    'Dog Breeds for Older Couples: Honest Questions, Gentle Companions, and How to Decide with Kindness';
  const date = 'September 12, 2025';
  const categories = ['owner'] as const;

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
    'For older couples, choosing a dog requires balancing love for animals with energy, health, and lifestyle. This comprehensive guide offers kind, practical advice: questions to ask yourself, gentle breeds to consider, the realities of aging, and ways to ensure both you and your dog thrive.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/dog-breeds-for-older-couples`}
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
            <li><a href="#intro" className="underline hover:opacity-80">Introduction</a></li>
            <li><a href="#questions" className="underline hover:opacity-80">Questions to Ask Yourself</a></li>
            <li><a href="#small-breeds" className="underline hover:opacity-80">Gentle Small Breeds</a></li>
            <li><a href="#medium-breeds" className="underline hover:opacity-80">Steady Medium Breeds</a></li>
            <li><a href="#large-breeds" className="underline hover:opacity-80">Larger Dogs: Considerations</a></li>
            <li><a href="#rescue" className="underline hover:opacity-80">Adopting Seniors &amp; Rescues</a></li>
            <li><a href="#honesty" className="underline hover:opacity-80">The Importance of Honesty</a></li>
            <li><a href="#alternatives" className="underline hover:opacity-80">Alternatives to Ownership</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Introduction: Love, Dogs, and Growing Older</h2>
          <p className="mb-3">
            Growing older comes with joys and challenges. For many couples, dogs have always been part of life—offering companionship,
            daily rhythm, and unconditional love. Yet with age come new realities: reduced energy, health concerns, financial
            considerations, and the question of long-term responsibility.
          </p>
          <p className="mb-3">
            This does not mean older couples should never have a dog. Far from it. The right match can bring profound comfort and joy.
            But it does mean that <strong>choosing thoughtfully and honestly</strong> is essential—for both the couple and the dog.
          </p>
          <p>
            In this guide, we will explore <strong>gentle breeds well-suited to older couples</strong>, practical questions to ask yourself,
            and ways to ensure a decision made with love remains sustainable. Our goal is kindness, clarity, and honesty.
          </p>
        </section>

        {/* QUESTIONS */}
        <section id="questions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask Yourself Before Bringing Home a Dog</h2>
          <p className="mb-3">
            Dogs thrive when their humans are realistic about what they can and cannot provide. Before choosing a breed—or even deciding
            if now is the right time for a dog—ask yourselves these questions:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Energy levels:</strong> How much daily walking, play, and activity can we comfortably provide?</li>
            <li><strong>Size and handling:</strong> Could we safely lift, guide, or manage a dog in emergencies (vet visits, stairs, slips)?</li>
            <li><strong>Health:</strong> Do we have conditions that might make leash walking difficult, or that could worsen with strain?</li>
            <li><strong>Longevity:</strong> Could this dog outlive us? If so, do we have a clear plan for their care?</li>
            <li><strong>Finances:</strong> Are we prepared for veterinary costs, grooming, and possible emergencies on a fixed income?</li>
            <li><strong>Support system:</strong> Do we have family, neighbors, or a community who could help if our health changes?</li>
          </ul>
          <p>
            Answering these honestly may feel sobering, but it is an act of love. It ensures any dog you welcome into your life has
            stability, comfort, and care from the first day to the last.
          </p>
        </section>

        {/* SMALL BREEDS */}
        <section id="small-breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Gentle Small Breeds for Older Couples</h2>
          <p className="mb-3">
            Small dogs often fit well with older couples because they are easier to lift, require less physical strength, and adapt
            well to smaller homes or apartments. Many small breeds are affectionate companions who thrive on love and routine.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Cavalier King Charles Spaniel</h3>
          <p className="mb-3">
            Cavaliers are gentle, affectionate lap dogs who bond deeply with their owners. They enjoy short walks and lots of snuggles.
            Their health risks (notably heart disease) mean choosing a responsible breeder is essential. For couples wanting a
            soft-natured dog, Cavaliers bring warmth and calm.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Shih Tzu</h3>
          <p className="mb-3">
            Shih Tzus are small, friendly, and low-exercise companions. Their grooming needs are high, but many owners keep them in a
            manageable “puppy cut.” They are sturdy for their size and do well in quieter households.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Pug</h3>
          <p className="mb-3">
            Pugs are clownish, loyal, and affectionate. They do not require long walks but do need weight management and careful
            monitoring of their breathing in hot weather. For couples seeking joy and humor, a pug can be delightful.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Toy Poodle</h3>
          <p>
            Intelligent, trainable, and hypoallergenic-friendly, Toy Poodles are a popular choice. They do need grooming but are
            adaptable and thrive on companionship without demanding excessive exercise.
          </p>
        </section>

        {/* MEDIUM BREEDS */}
        <section id="medium-breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Steady Medium Breeds</h2>
          <p className="mb-3">
            Some older couples may want a dog larger than a lap companion but not overwhelming in strength. Medium breeds can balance
            presence, trainability, and manageable needs.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Cocker Spaniel</h3>
          <p className="mb-3">
            Loving and people-oriented, Cockers offer companionship without extreme exercise needs. Their grooming is moderate but
            manageable with planning. They do best with gentle training and consistent routines.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Whippet</h3>
          <p className="mb-3">
            Whippets are elegant, quiet, and affectionate. They enjoy a daily run in a secure space but otherwise are couch potatoes.
            Their gentle nature and low grooming needs make them a surprisingly good fit for many older couples.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Miniature Schnauzer</h3>
          <p>
            Schnauzers are spirited yet manageable. They are protective without being aggressive and adapt well to moderate exercise
            routines. Regular grooming is required, but they offer energy in a size most couples can handle.
          </p>
        </section>

        {/* LARGE BREEDS */}
        <section id="large-breeds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Larger Dogs: Considerations and Honest Reflections</h2>
          <p className="mb-3">
            Large breeds can be wonderful companions, but they come with challenges: strength, shorter lifespans, and higher costs.
            For some older couples, the risks may outweigh the benefits. For others, the presence of a big dog offers comfort.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Labrador Retriever</h3>
          <p className="mb-3">
            Labs are loyal and affectionate, but they are strong and energetic. Unless you are very active, they may be too much.
            Senior or rescue labs with calmer temperaments, however, can be excellent companions.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Greyhound</h3>
          <p className="mb-3">
            Retired racing greyhounds often make gentle, low-maintenance pets. They need secure areas to run but otherwise spend
            most of their time lounging. Their sweet nature suits many couples, though their size requires confidence in handling.
          </p>
          <h3 className="text-lg font-semibold mt-3 mb-2">Golden Retriever</h3>
          <p>
            Golden Retrievers are loving and adaptable, but their grooming and exercise needs are significant. Adopting an older
            Golden can be a beautiful compromise, offering companionship without the intensity of puppyhood.
          </p>
        </section>

        {/* RESCUE */}
        <section id="rescue" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adopting Seniors &amp; Rescues</h2>
          <p className="mb-3">
            For many older couples, adopting a senior dog is a kind and realistic option. Senior dogs often require less training,
            are calmer, and desperately need homes. The match between a senior couple and a senior dog can be profoundly rewarding.
          </p>
          <p>
            Many rescues specialize in older dogs, and shelters frequently have small, manageable companions. This path also helps
            avoid the concern of a dog outliving its owners.
          </p>
        </section>

        {/* HONESTY */}
        <section id="honesty" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Importance of Honesty</h2>
          <p className="mb-3">
            It can be difficult to admit limitations. But honesty protects both people and dogs. Choosing a breed that matches your
            true abilities is not a concession—it is an act of compassion.
          </p>
          <p>
            Be wary of pressure from family or friends. A cute puppy may tug at the heart, but without realistic planning, it may
            create stress rather than joy. Choose love paired with wisdom.
          </p>
        </section>

        {/* ALTERNATIVES */}
        <section id="alternatives" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Alternatives to Full-Time Ownership</h2>
          <p className="mb-3">
            If owning a dog feels overwhelming, there are still ways to enjoy canine companionship. Options include fostering,
            volunteering at shelters, or dog-sitting for family and friends. These arrangements offer joy without long-term pressure.
          </p>
          <p>
            Technology also helps: platforms like Petunia connect couples with local dog owners for part-time care or companionship
            visits, giving the love of dogs without full responsibility.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>What is the best dog for older couples?</strong><br />
            It depends. Gentle small breeds like Cavaliers, Shih Tzus, or Toy Poodles are common favorites, but the right dog depends
            on your activity level and support system.
          </p>

          <p className="mb-3">
            <strong>Should older couples avoid large dogs?</strong><br />
            Not always, but size brings handling challenges. Adopting an older, calmer large dog is often a better fit than starting
            with a large puppy.
          </p>

          <p className="mb-3">
            <strong>What if our health changes?</strong><br />
            Have a clear plan: family support, a trusted rescue, or written instructions. Planning ahead ensures your dog&apos;s future.
          </p>

          <p>
            <strong>Are senior dogs good options?</strong><br />
            Yes. Senior dogs are calmer, often overlooked in shelters, and may be the perfect match for senior couples.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). Breed profiles and suitability guidance.{' '}
              <a href="https://www.akc.org/dog-breeds/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/
              </a>
            </li>
            <li>
              AVMA. <em>Pets and Senior Citizens: Benefits and Challenges</em>.{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/pets-and-senior-citizens" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners/petcare/pets-and-senior-citizens
              </a>
            </li>
            <li>
              RSPCA. <em>Choosing the Right Dog for Your Lifestyle</em>.{' '}
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/choosing" target="_blank" rel="noopener noreferrer">
                https://www.rspca.org.uk/adviceandwelfare/pets/dogs/choosing
              </a>
            </li>
            <li>
              WSAVA Global Guidelines. Welfare and aging companion animal considerations.{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized guidance before acquiring or rehoming a dog.
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
