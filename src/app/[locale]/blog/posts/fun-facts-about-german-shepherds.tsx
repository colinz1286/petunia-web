'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FunFactsAboutGermanShepherds() {
  const locale = useLocale();

  const title =
    'Fun Facts About German Shepherds: History, Jobs, Coats, Training, and Everyday Life (With Sources)';
  const date = 'August 19, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breed_specific_guides: 'Breed Specific Guides',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    food: 'Dog Food & Nutrition',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="A long-form, evidence-informed look at the German Shepherd Dog (GSD): how the breed began, why it’s a legendary working dog, coat types and colors, intelligence and training, service and SAR history, guide-dog milestones, health notes, and practical life tips—fully sourced."
        />
      </Head>

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
          The German Shepherd Dog (GSD) is one of the world&rsquo;s most recognized breeds—equal
          parts athlete, teammate, and family companion. Below is a long-form collection of
          <em> fun facts</em> that go a level deeper than social-media trivia. Each point includes
          reputable sources, so you can enjoy the lore <em>and</em> keep your facts straight.
        </p>

        {/* FACTS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">1) The breed was standardized in 1899—on purpose.</h2>
        <p className="mb-4">
          Captain Max von Stephanitz founded the SV in 1899 after purchasing Hektor Linksrhein
          (renamed Horand von Grafrath) and building a registry and standard around similar
          regional herding dogs. The goal was a <em>working</em> dog first, with structure that
          serves function.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2) “German Shepherd <em>Dog</em>” is the official AKC name.</h2>
        <p className="mb-4">
          In U.S. registries, the formal name includes the word &ldquo;Dog,&rdquo; similar to
          Shetland Sheepdog. That is why standards and histories often spell it out as &ldquo;German
          Shepherd Dog.&rdquo;
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3) In Britain, the breed long carried the name “Alsatian.”</h2>
        <p className="mb-4">
          After World War I, &ldquo;Alsatian (Wolf Dog)&rdquo; replaced &ldquo;German&rdquo; in the
          UK for many years. The original name has since returned, but &ldquo;Alsatian&rdquo;
          remains widely recognized.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4) A trotting, endurance herder—literally a “living fence.”</h2>
        <p className="mb-4">
          The AKC standard calls the GSD a &ldquo;trotting dog.&rdquo; Historically, GSDs worked a
          tending style of herding, patrolling field edges to keep flocks out of crops—less about
          gathering, more about boundary management. The traditional German herding utility test
          (HGH) preserves this work.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5) Two coat varieties are recognized globally.</h2>
        <p className="mb-4">
          Under the FCI/SV standard, GSDs come in a double coat (Stockhaar) and a long double coat
          (Langstockhaar), both with undercoat. In the U.S., the AKC show ring focuses on a medium
          double coat, but working ability matters most outside the ring.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6) White coat in AKC conformation is a disqualification.</h2>
        <p className="mb-4">
          Genetics can produce creamy-white GSDs, but the AKC standard disqualifies that color in
          conformation. Separately, the White Swiss Shepherd Dog is a distinct FCI-recognized breed
          descended from white GSD lines.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7) The “Panda” pattern is a documented mutation.</h2>
        <p className="mb-4">
          A white-spotted &ldquo;Panda&rdquo; pattern in one GSD line was traced to a de novo change
          in the <em>KIT</em> gene around 2000. It appears dominant in heterozygotes and likely
          embryonic-lethal in the homozygous state. It remains non-standard for conformation even
          though the genetics are published.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8) “Sable” is about banded hairs, not just color.</h2>
        <p className="mb-4">
          Sable (often called agouti) means many hairs are banded in light and dark, creating a
          wolf-grey or tan-with-black-tipping look. The pattern is primarily controlled at the
          <em> ASIP</em> locus.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">9) Intelligence standings: consistently top-three.</h2>
        <p className="mb-4">
          In widely cited working-and-obedience rankings, GSDs typically place third—behind the
          Border Collie and Poodle—reflecting rapid learning and reliable cue response in formal
          tests of trainability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">10) A film icon helped make the breed famous.</h2>
        <p className="mb-4">
          The 1920s movie star Rin Tin Tin—rescued from France during World War I—helped catapult
          the breed&rsquo;s popularity in North America, alongside Strongheart. The breed&rsquo;s
          on-screen charisma translated to real-world demand.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">11) The first U.S. guide-dog team featured a GSD named Buddy.</h2>
        <p className="mb-4">
          In 1928, Morris Frank&rsquo;s German Shepherd, Buddy, demonstrated that a trained guide
          dog could safely lead a blind handler through city streets, launching the legacy of The
          Seeing Eye in the United States.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">12) 9/11 heroism: Apollo&rsquo;s Dickin Medal.</h2>
        <p className="mb-4">
          NYPD German Shepherd Apollo received the UK&rsquo;s PDSA Dickin Medal in 2002 on behalf of
          all search-and-rescue dogs who worked after the September 11 attacks—an historic
          recognition of canine service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">13) Popularity: almost always near the top.</h2>
        <p className="mb-4">
          In AKC registrations, GSDs have remained among the top five breeds for years. Popularity
          does not make a breed &ldquo;easy,&rdquo; but it shows how many homes value this
          combination of brains, biddability, and presence.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">14) Working vs. show lines: built for different jobs.</h2>
        <p className="mb-4">
          Selection can emphasize sport and working tests (for example, IGP and endurance trials) or
          conformation show type. Peer-reviewed kinematic work demonstrates measurable differences
          in gait and range of motion—context that matters when you are choosing a puppy for a
          specific lifestyle or sport.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">15) The SV “breed survey” (Körung) is a big deal.</h2>
        <p className="mb-4">
          In the mother-club system, breeding stock is evaluated for character, structure, hips and
          elbows, and working or fitness tests (such as the AD endurance trial) before being
          surveyed and recommended for breeding. It is one way the culture supports &ldquo;form
          follows function.&rdquo;
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">16) Double coat = “German Shedder”—and that is normal.</h2>
        <p className="mb-4">
          Expect year-round shedding plus seasonal &ldquo;coat blows.&rdquo; Routine brushing is
          your friend. A weather-capable working coat is part of the design.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">17) Coat colors span from sable to solid black.</h2>
        <p className="mb-4">
          Acceptable colors vary by registry, but black and tan, red and black, sable, bi-color, and
          solid black are common. Blues and livers are faults in the AKC standard; all-white is an
          AKC disqualification for conformation (see fact 6).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">18) Ears can pop up and down during teething.</h2>
        <p className="mb-4">
          Puppy ears often fluctuate through teething. Many stand consistently by roughly four to
          six months, but some take longer. Genetics and cartilage maturity both matter—no need to
          panic at week twelve.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">19) Lifelong learners who need a “job.”</h2>
        <p className="mb-4">
          Breed guides consistently emphasize daily mental and physical work—training games,
          tracking, obedience, scentwork, or hikes with structure. A bored GSD will invent its own
          hobbies; you will prefer to assign them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">20) Service, detection, search and rescue: a natural fit.</h2>
        <p className="mb-4">
          From guide dogs to explosives detection, German Shepherds excel where trainability,
          steadiness, and physical capability intersect. Their history in real service roles is one
          reason the breed is so respected.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Daily Life With a GSD: Practical Mini-Guide</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Energy and training:</strong> plan on structured exercise and a daily
            &ldquo;job.&rdquo; Rotate obedience, nose work, fetch rules, and calm &ldquo;place&rdquo;
            training.
          </li>
          <li>
            <strong>Grooming:</strong> weekly brushing; expect seasonal coat blows; avoid shaving a
            double coat.
          </li>
          <li>
            <strong>Socialization:</strong> create a steady stream of positive, controlled
            experiences—surfaces, sounds, vetted dog friends—while protecting growing joints.
          </li>
          <li>
            <strong>Health screening:</strong> discuss hip and elbow evaluations, degenerative
            myelopathy screening, and sport plans with your veterinarian and—if buying a puppy—your
            breeder.
          </li>
          <li>
            <strong>Sports to try:</strong> tracking, IGP or obedience, agility, rally, scentwork,
            herding (tending courses where available), and hiking with training breaks.
          </li>
        </ul>

        {/* REFERENCES */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            AKC—German Shepherd Dog (breed overview).{' '}
            <a
              className="underline"
              href="https://www.akc.org/dog-breeds/german-shepherd-dog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org
            </a>{' '}
            · AKC Standard (movement, color).{' '}
            <a
              className="underline"
              href="https://images.akc.org/pdf/breeds/standards/GermanShepherdDog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org (PDF)
            </a>
          </li>
          <li>
            FCI Standard No. 166—German Shepherd Dog (hair varieties).{' '}
            <a
              className="underline"
              href="https://www.fci.be/Nomenclature/Standards/166g01-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              fci.be (PDF)
            </a>
          </li>
          <li>
            The Seeing Eye—history of Morris Frank and Buddy (1928).{' '}
            <a
              className="underline"
              href="https://www.seeingeye.org/about-us/our-history/"
              target="_blank"
              rel="noopener noreferrer"
            >
              seeingeye.org
            </a>
          </li>
          <li>
            PDSA Dickin Medal—Apollo citation (2002).{' '}
            <a
              className="underline"
              href="https://www.pdsa.org.uk/what-we-do/animal-awards-programme/pdsa-dickin-medal"
              target="_blank"
              rel="noopener noreferrer"
            >
              pdsa.org.uk
            </a>
          </li>
          <li>
            AKC—Most Popular Dog Breeds (recent list).{' '}
            <a
              className="underline"
              href="https://www.akc.org/expert-advice/news/most-popular-dog-breeds-2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org
            </a>
          </li>
          <li>
            UC Davis VGL—Panda white spotting (KIT).{' '}
            <a
              className="underline"
              href="https://vgl.ucdavis.edu/test/panda-gs"
              target="_blank"
              rel="noopener noreferrer"
            >
              vgl.ucdavis.edu
            </a>{' '}
            · Peer-reviewed KIT paper (open copy hosted by breed archive).{' '}
            <a
              className="underline"
              href="https://duitseherderdatabase.nl/wp-content/uploads/2017/08/Panda-KIT-gene.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          </li>
          <li>
            VCA—Degenerative myelopathy in dogs.{' '}
            <a
              className="underline"
              href="https://vcahospitals.com/know-your-pet/degenerative-myelopathy-in-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcahospitals.com
            </a>
          </li>
          <li>
            Peer-reviewed gait and conformation analysis (German Shepherds, open access).{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7567065/"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Library of Medicine
            </a>
          </li>
          <li>
            General history overview with references (von Stephanitz, Horand, naming).{' '}
            <a
              className="underline"
              href="https://en.wikipedia.org/wiki/German_Shepherd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia (overview)
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general informational purposes and does not replace medical or
          veterinary advice. Always consult your veterinarian about health and training matters for
          your individual dog.
        </p>
      </main>
    </>
  );
}
