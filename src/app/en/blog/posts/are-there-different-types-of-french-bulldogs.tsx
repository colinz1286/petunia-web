'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreThereDifferentTypesOfFrenchBulldogs() {
  const locale = useLocale();

  const title =
    'Are There Different Types of French Bulldogs? Colors, Coats, “Fluffies,” and What Actually Matters';
  const date = 'April 4, 2025';
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
    'One breed, many looks: a clear, evidence-informed guide to French Bulldog “types.” Learn the recognized colors and patterns, what people mean by “blue,” “merle,” and “fluffy,” how those differ from the official breed standard, why size labels like “teacup” are marketing—plus similarities across all Frenchies, health and genetic notes (BOAS, color dilution alopecia, pigment-related deafness), and a practical buyer’s checklist with professional sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/are-there-different-types-of-french-bulldogs`}
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
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#one-breed" className="underline hover:opacity-80">One Breed, Many Looks</a></li>
            <li><a href="#recognized" className="underline hover:opacity-80">Officially Recognized Colors &amp; Patterns</a></li>
            <li><a href="#nonstandard" className="underline hover:opacity-80">Non-Standard/“Exotic” Colors &amp; Genetics</a></li>
            <li><a href="#fluffy" className="underline hover:opacity-80">Long-Haired “Fluffy” Frenchies</a></li>
            <li><a href="#size" className="underline hover:opacity-80">Size Labels: “Mini” and “Teacup” Claims</a></li>
            <li><a href="#structure" className="underline hover:opacity-80">Structure &amp; Line Differences</a></li>
            <li><a href="#similar" className="underline hover:opacity-80">How All Frenchies Are Similar</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Notes by “Type”</a></li>
            <li><a href="#breeder" className="underline hover:opacity-80">Choosing a Breeder or Rescue</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Daily Care: Same Systems, Small Tweaks</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding/Daycare Notes by Look</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            There is <strong>one French Bulldog breed</strong>. Within it, you’ll see different <em>looks</em>: coat colors and patterns
            (brindle, fawn, pied) that are <strong>recognized by kennel-club breed standards</strong>, plus non-standard (“exotic”) looks such as
            <strong> dilute “blue”</strong>, <strong>merle</strong>, and <strong>long-haired “fluffy”</strong> Frenchies. Non-standard colors/patterns and long coats are
            <em>disqualifications</em> in major show rings (AKC/FCI/KC), but they’re still Frenchies—just outside the show standard.
            Healthwise, <strong>all Frenchies share the same core needs</strong> (airway/heat management, spine/knee protection, skin/ear/eye care).
            A few color genes bring <em>extra considerations</em> (e.g., dilution alopecia risk in some “blue” coats; pigment-linked deafness risk in
            some piebald/merle lineages). Your best bet: choose <strong>ethical breeding</strong>, keep your dog <strong>lean and cool</strong>, and run a
            <em>boringly consistent</em> daily system.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Whatever your Frenchie’s color or coat, store your airway plan, heat rules, feed grams, fold/ear routine,
            and emergency contacts in Petunia. Shared checklists turn “type” debates into real-world comfort and safety.
          </div>
        </section>

        {/* ONE BREED */}
        <section id="one-breed" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">One Breed, Many Looks</h2>
          <p className="mb-3">
            French Bulldogs come in a surprising variety of appearances—mostly because of <strong>coat color genetics</strong> and a few
            strongly selected head/body traits. But there aren’t “sub-breeds.” Reputable registries recognize a <em>single</em> breed
            with a formal standard that describes <strong>structure</strong>, <strong>temperament</strong>, and <strong>permitted colors/patterns</strong>. In show contexts,
            dogs outside the written standard can’t compete in conformation, yet they’re still French Bulldogs in everyday life.
          </p>
          <p>
            If you’re deciding between a brindle pet and a fluffy pet, think less about labels and more about <strong>breeder ethics</strong>,
            <strong> health screening</strong>, and your plan for heat, airway, and enrichment. That’s what changes outcomes.
          </p>
        </section>

        {/* RECOGNIZED COLORS */}
        <section id="recognized" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Officially Recognized Colors &amp; Patterns</h2>
          <p className="mb-3">
            Major kennel clubs describe the French Bulldog coat as <strong>short and smooth</strong> and limit colors/patterns to a small set.
            While wording differs, the theme is consistent: <strong>brindle</strong>, <strong>fawn</strong> (with or without a black mask), and <strong>pied</strong> are
            the classic looks. Many clubs explicitly list <em>disqualifying</em> colors/patterns (e.g., “mouse/blue,” liver, black and tan,
            and merle), and they also specify that long coats fall outside the standard. These rules apply to dog shows; they don’t
            stop people from owning or loving non-standard Frenchies.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Brindle:</strong> fawn background with varying black striping; from light tiger-brindle to nearly black.</li>
            <li><strong>Fawn:</strong> clear fawn shades with or without a black mask; cream tones vary by line.</li>
            <li><strong>Pied:</strong> white base with patches of brindle or fawn (patterns vary from minimal to heavy patching).</li>
            <li><strong>Always short, smooth coat</strong> under the show standard.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Why the strict list?</strong> Breed standards aim to maintain a recognizable silhouette and reduce health risks tied to
            certain pigment genes. Standards aren’t a guarantee of health—but they set <em>boundaries</em> for the show ring.
          </div>
        </section>

        {/* NONSTANDARD */}
        <section id="nonstandard" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Non-Standard/“Exotic” Colors &amp; Genetics (What to Know)</h2>
          <p className="mb-3">
            You’ll see Frenchies advertised as <strong>blue</strong> (dilute gray), <strong>lilac/isabella</strong>, <strong>chocolate/cocoa</strong>, <strong>merle</strong>, or with
            unusual eye colors. These coats are real genetics—but they’re <em>not</em> allowed in most conformation shows. There’s a lot of
            internet argument here; let’s stay practical and evidence-based.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Dilute coats (often called “blue”)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>The dilute gene (<em>D</em> locus variants) turns black pigment toward slate gray (“blue”).</li>
            <li>Some dilute-colored dogs of various breeds develop <strong>color dilution alopecia (CDA)</strong>—patchy hair loss and skin issues.
              Not every dilute dog is affected, but it’s a known risk to monitor with your veterinarian.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Merle pattern</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Merle is a mottled coat pattern caused by variants at the <strong>M locus</strong>. Breeding two merle-patterned dogs can produce
              “double merle” puppies with a higher risk of <strong>hearing and ocular defects</strong>. Responsible programs avoid merle-to-merle
              pairings; many kennel clubs don’t accept merle Frenchies for registration or showing.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">White/pied &amp; pigment-related deafness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Across breeds, congenital deafness is associated with certain pigment pathways—classically <strong>piebald</strong> (heavy white)
              and <strong>merle</strong>. Many pied Frenchies hear perfectly; some don’t. Good breeders BAER-test lines when indicated and disclose results.</li>
          </ul>
          <p>
            Bottom line: non-standard looks are cosmetic, but some <em>genes</em> carry extra health management. If you love a dilute, pied, or
            merle-patterned Frenchie, partner with an ethical breeder and proactive vet—and run the same daily systems that protect
            <em>every</em> Frenchie.
          </p>
        </section>

        {/* FLUFFY */}
        <section id="fluffy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Long-Haired “Fluffy” Frenchies</h2>
          <p className="mb-3">
            “Fluffy” refers to Frenchies with a visibly longer coat caused by <strong>recessive variants in the FGF5 gene</strong> (coat-length
            genetics shared across many breeds). Long coats are outside the major show standards for French Bulldogs, which require
            coats to be short and smooth. In day-to-day life, a fluffy is still a Frenchie—expect slightly more grooming and drying
            needs after baths or play, and the same airway/heat plan as any other brachycephalic dog.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Grooming:</strong> more frequent brushing; check for matting behind ears and armpits; dry thoroughly after water play.</li>
            <li><strong>Health:</strong> the coat gene itself doesn’t change airway anatomy. Prioritize weight control, cool rooms, and short play sets.</li>
          </ul>
        </section>

        {/* SIZE */}
        <section id="size" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Size Labels: “Mini,” “Micro,” and “Teacup” Claims</h2>
          <p className="mb-3">
            French Bulldogs have <strong>one size range</strong> under reputable standards (with a show-ring weight cap). Phrases like “mini,”
            “micro,” or “teacup” are marketing terms, not official types. Extra-small puppies may reflect selection for tiny size, runting,
            or crossbreeding; smaller isn’t automatically better. Focus on <strong>sound structure</strong>, <strong>health history</strong>, and <strong>temperament</strong>—not a
            label that suggests a different breed variety.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Buying tip:</strong> Ask any seller using size labels to show veterinary records, growth curves, and parents’ weights, and to
            explain how they avoid structural and metabolic problems in very small pups. Walk away from vague answers.
          </div>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Structure &amp; Line Differences (Companion vs. Show vs. “Sport”)</h2>
          <p className="mb-3">
            Within the breed, you’ll hear “European show type,” “American pet type,” or even “sport type.” These aren’t official
            categories; they’re shorthand for <strong>line selection</strong>. Some lines emphasize broader heads and heavier bone; others emphasize
            lighter frames and easier movement. From a welfare perspective, seek <strong>balance</strong>: open nostrils, comfortable breathing,
            moderate neck and chest, and a level, sturdy back with healthy rear angles. That combination supports cooling, walking, and
            play without constant strain.
          </p>
          <p>
            Ask to see parents moving at a trot, then calmly at rest. You’re looking for <em>quiet, easy breathing</em> and <em>loose, comfortable
            gait</em>—the best predictor of a good life for any “type.”
          </p>
        </section>

        {/* SIMILAR */}
        <section id="similar" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How All Frenchies Are Similar (What Actually Matters)</h2>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Temperament:</strong> affectionate, people-oriented, playful companions when socialized and trained with rewards.</li>
            <li><strong>Airway/heat margins:</strong> short muzzles reduce evaporative cooling; avoid heat, manage arousal, choose harnesses.</li>
            <li><strong>Orthopedic &amp; eye/skin care:</strong> traction, ramps, nail hygiene; quick response to eye squinting and skin/ear flare-ups.</li>
            <li><strong>Daily systems:</strong> measured meals, planned rest, enrichment, and preventive veterinary care add comfort and years.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Color doesn’t set the routine—your system does. Put feeding grams, “heat rules,” and weekly hygiene
            tasks in Petunia and share with family and sitters.
          </div>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Notes by “Type” (Evidence-Informed)</h2>
          <p className="mb-3">
            Genetics can influence skin, coat, and sensory systems, but daily management still moves the longevity needle the most.
            Here’s how we translate the science into owner-friendly monitoring.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">All Frenchies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>BOAS awareness:</strong> baseline vet exam; watch for noisy breathing or slow recovery after excitement; plan shorter play sets.</li>
            <li><strong>Heat plan:</strong> dawn/dusk walks; AC cool-downs; never left in cars; avoid heavy exertion in humidity.</li>
            <li><strong>Eye &amp; skin:</strong> fast vet care for squinting; fold and ear hygiene routines; year-round parasite prevention as advised.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dilute (“blue,” lilac) coats</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Discuss <strong>color dilution alopecia (CDA)</strong> risk with your vet. Many dilute dogs live itch-free; some develop thinning hair and secondary infections. Early skin care keeps problems small.</li>
            <li>Use gentle bathing, moisturizers as advised, and fast treatment of hotspots.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pied/very white heads &amp; merle lineages</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Be aware of <strong>pigment-associated deafness</strong> risk across breeds with certain pigment genes. Many pied Frenchies hear normally; if you notice inconsistent responses or startle at close range, ask about hearing testing.</li>
            <li>If your breeder uses merle in other breeds or lines, ensure they avoid merle-to-merle pairings and test appropriately.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Fluffy (long-haired) coats</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Coat length doesn’t drive airway risk, but it increases grooming and drying needs. Keep skin dry at the base of the coat to avoid yeast.</li>
          </ul>
        </section>

        {/* BREEDER/RESCUE */}
        <section id="breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing a Breeder or Rescue (Cut Through the Noise)</h2>
          <p className="mb-3">
            Whether you love classic brindle or you’re smitten with a fluffy, the process is the same: vet the humans first. Ethical
            breeding and transparent rescue practices matter far more than color.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">What good breeders do</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Explain the <strong>breed standard</strong> honestly, including which colors/patterns are show-eligible and which are not.</li>
            <li>Prioritize <strong>health and temperament</strong> over fads; keep adults lean; show you parents breathing comfortably.</li>
            <li>Share veterinary records; discuss C-sections when relevant; use <strong>DNA testing</strong> as a tool, not a marketing trick.</li>
            <li>Use sensible puppy raising: reward-based socialization; crate/pen comfort; gradual exposure to common sounds.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">What reputable rescues do</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full vetting; spay/neuter as indicated; clear behavior notes; match energy/medical needs to your home.</li>
            <li>Encourage decompression plans and provide post-adoption support.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save your “Breeder/Rescue Interview” checklist inside Petunia and track answers side by side. Good programs
            are comfortable with scrutiny.
          </div>
        </section>

        {/* CARE */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Care: Same Systems, Small Tweaks by Look</h2>
          <p className="mb-3">
            A brindle show prospect, a blue pet, and a fluffy family clown thrive on the same boring excellence: measured meals,
            short training bursts, predictable rest, cool rooms, and gentle skin/ear routines. Here’s how to tailor slightly.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Airway &amp; heat:</strong> harness-only walks; dawn/dusk outdoor time; AC cool-downs after play; skip high-arousal fetch on hot days.</li>
            <li><strong>Skin/coat:</strong> dilute or long coats may benefit from moisturizing shampoos per vet guidance; always dry folds after water.</li>
            <li><strong>Eyes:</strong> avoid stick/pointy toys; same-day vet care for squinting or pawing at an eye.</li>
            <li><strong>Weight:</strong> keep body condition lean to ease breathing and joint load; adjust food ±10% to maintain the look-and-feel target.</li>
          </ul>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding/Daycare Notes by Look</h2>
          <p className="mb-3">
            Non-standard color or a fluffy coat doesn’t change the <em>core</em> boarding plan; brachycephalic care does. Choose facilities
            that run short play sets with planned recovery, cool indoor areas, traction surfaces, and staff trained in reading dog body
            language. If your dog has a heavier coat or skin sensitivities, ask staff to dry thoroughly after water play and to log any
            redness or itch the same day.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide your <strong>Petunia profile link</strong> with feed grams, meds, heat rules, fold/ear routine, and emergency contacts.</li>
            <li>Request <strong>small-group or enrichment-only days</strong> if your dog prefers people to rough play.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Buyer’s Interview (Color-Agnostic)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Which colors/patterns do you produce, and which are show-eligible under your registry?</li>
            <li>What health priorities do you track in your line (airway comfort, spine, knees, eyes, skin)?</li>
            <li>Can I see parents move and rest quietly? What’s their weight and body condition?</li>
            <li>How do you raise puppies (socialization, crate/pen comfort, vet care, contracts)?</li>
            <li>What support do you provide if we encounter airway stress, skin flares, or behavior questions?</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Color/Coat-Specific Notes to Discuss with Your Vet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Dilute (“blue/lilac”):</strong> baseline skin/coat plan; what to watch for with suspected CDA.</li>
            <li><strong>Pied/very white:</strong> consider hearing checks if responses seem inconsistent; sun protection for pink skin.</li>
            <li><strong>Merle history:</strong> confirm ethical pairings; discuss eye screening and breeding ethics if intact.</li>
            <li><strong>Fluffy (FGF5):</strong> grooming rhythm; drying after water play; managing seasonal shedding.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Rhythm (All Frenchies)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dawn/dusk sniff walk 15–20 minutes → water/AC → nap.</li>
            <li>Two 2-minute training bursts before meals (sit, hand-target, mat) → measured food.</li>
            <li>Midday enrichment (puzzle, snuffle scatter) → quiet hour.</li>
            <li>Short afternoon play set → fold/ear wipe → rest.</li>
            <li>Evening stroll; review Petunia logs; prep next day.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia workflow:</strong> Convert these lists into routines. Share with your trainer, sitter, and daycare so every handoff
            keeps your dog on the same comfortable autopilot.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are there officially different “types” of French Bulldogs?</strong><br />
            No. There’s one breed. Kennel-club standards define recognized colors/patterns and coat type for the show ring. Non-standard
            looks (e.g., blue, merle, fluffy) exist but aren’t show-eligible; they’re still Frenchies at home.
          </p>

          <p className="mb-3">
            <strong>Do color genes affect temperament?</strong><br />
            Color doesn’t drive personality. Socialization, training, and daily structure do. Some pigment genes correlate with specific
            skin/ear/eye or hearing considerations—work with your vet to monitor.
          </p>

          <p className="mb-3">
            <strong>Is merle always unhealthy?</strong><br />
            Merle patterning can be managed responsibly in breeds where it’s established, but merle-to-merle pairings are risky for hearing
            and eyes. Many kennel clubs do not accept merle Frenchies for showing/registration. If you already own a merle pet, focus on
            great daily care and regular veterinary oversight.
          </p>

          <p className="mb-3">
            <strong>Are “teacup” Frenchies a real type?</strong><br />
            “Teacup” is marketing, not an official variety. Prioritize health and structure over extreme smallness.
          </p>

          <p>
            <strong>What should I prioritize when picking a puppy?</strong><br />
            Ethical humans, calm breathing, lean parents, thoughtful socialization, and a clear plan for heat/airway/skin care. Color is
            secondary.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). <em>French Bulldog Breed Standard</em> (colors, coat, disqualifications).{' '}
              <a href="https://images.akc.org/pdf/breeds/standards/French_Bulldog-6-18.pdf" target="_blank" rel="noopener noreferrer">
                https://images.akc.org/pdf/breeds/standards/French_Bulldog-6-18.pdf
              </a>
            </li>
            <li>
              The Kennel Club (UK). <em>French Bulldog | Breed Standard</em> (recognized colours).{' '}
              <a href="https://www.thekennelclub.org.uk/breed-standards/utility/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.thekennelclub.org.uk/breed-standards/utility/french-bulldog/
              </a>
            </li>
            <li>
              French Bull Dog Club of America (FBDCA). <em>Interpretation of the Standard on Color</em> &amp; Judges’ education materials.{' '}
              <a href="https://frenchbulldogclub.org/color/" target="_blank" rel="noopener noreferrer">
                https://frenchbulldogclub.org/color/
              </a>{' '}
              |{' '}
              <a href="https://frenchbulldogclub.org/wp-content/uploads/2018/07/FBDCA-Judges-Ed-2018-Update.pdf" target="_blank" rel="noopener noreferrer">
                Judges’ Education (PDF)
              </a>
            </li>
            <li>
              UC Davis Veterinary Genetics Laboratory (VGL). <em>Merle (M locus) test</em>—pattern genetics and double-merle cautions.{' '}
              <a href="https://vgl.ucdavis.edu/test/merle" target="_blank" rel="noopener noreferrer">
                https://vgl.ucdavis.edu/test/merle
              </a>
            </li>
            <li>
              UC Davis Veterinary Genetics Laboratory (VGL). <em>Coat Length (FGF5) test</em>.{' '}
              <a href="https://vgl.ucdavis.edu/test/coat-length-dog" target="_blank" rel="noopener noreferrer">
                https://vgl.ucdavis.edu/test/coat-length-dog
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Hereditary Alopecia &amp; Hypotrichosis</em> (includes Color Dilution Alopecia context).{' '}
              <a href="https://www.merckvetmanual.com/integumentary-system/congenital-and-inherited-anomalies-of-the-integumentary-system/hereditary-alopecia-and-hypotrichosis-in-animals" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/…/hereditary-alopecia-and-hypotrichosis-in-animals
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Deafness in Animals</em> (pigment-associated cochleosaccular deafness).{' '}
              <a href="https://www.merckvetmanual.com/ear-disorders/deafness/deafness-in-animals" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/ear-disorders/deafness/deafness-in-animals
              </a>
            </li>
            <li>
              Cambridge BOAS Research Group. Owner resources for brachycephalic airway care.{' '}
              <a href="https://www.vet.cam.ac.uk/boas" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas
              </a>
            </li>
            <li>
              Royal Veterinary College (RVC) VetCompass. Breed health summaries &amp; research context.{' '}
              <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">
                https://www.rvc.ac.uk/vetcompass
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and care tailored to your dog.
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
