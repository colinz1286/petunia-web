'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DoDogsOnlySeeBlackAndWhite() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Do Dogs Only See Black and White? The Science of Canine Color, Motion, and Low-Light Vision';
  const date = 'August 19, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

  // Labels must match your existing blog dictionary
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
    'Do dogs really see only black and white? No. Dogs are dichromats with a blue–yellow color space, rod-dominant retinas, and a reflective tapetum for low light. This long-form, evidence-informed guide explains photoreceptors, cone opsins, acuity, flicker, motion, and practical choices for toys, training, agility, senior support, and home design—with sources.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/do-dogs-only-see-black-and-white`}
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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#myth" className="underline hover:opacity-80">The Black-&amp;-White Myth</a></li>
            <li><a href="#anatomy" className="underline hover:opacity-80">Eye Anatomy: Rods, Cones &amp; Tapetum</a></li>
            <li><a href="#color" className="underline hover:opacity-80">Color Vision: Blue–Yellow Dichromacy</a></li>
            <li><a href="#colors-look" className="underline hover:opacity-80">What Common Colors Look Like</a></li>
            <li><a href="#acuity" className="underline hover:opacity-80">Acuity, Field of View &amp; Depth</a></li>
            <li><a href="#motion" className="underline hover:opacity-80">Motion &amp; Flicker</a></li>
            <li><a href="#night" className="underline hover:opacity-80">Night Vision &amp; Eye-Shine</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training, Toys &amp; Course Design</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Home &amp; Yard Setup</a></li>
            <li><a href="#sports" className="underline hover:opacity-80">Agility, Flyball &amp; Working Dogs</a></li>
            <li><a href="#lifespan-vision" className="underline hover:opacity-80">Puppies, Adults &amp; Seniors</a></li>
            <li><a href="#conditions" className="underline hover:opacity-80">Common Eye Conditions</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            <strong>No—dogs do not see only black and white.</strong> Modern evidence shows that most dogs are <strong>dichromats</strong>, with two cone
            types tuned to short wavelengths and longer wavelengths that we commonly label as a <strong>blue–yellow</strong> color space. Reds and greens
            are muted or confused for yellowish or grayish tones, but blue and yellow are distinct. Dogs also have <strong>rod-dominant retinas</strong>
            and a reflective layer called the <em>tapetum lucidum</em> that improves sensitivity in dim light. Their visual system prioritizes motion
            detection, low-light performance, and a wide field of view over ultra-fine detail.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Choose target colors your dog sees well. On grass, a <strong>yellow</strong> or <strong>blue</strong> bumper typically pops more than red or green.
          </div>
        </section>

        {/* Myth */}
        <section id="myth" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Black-&amp;-White Myth: Where It Came From &amp; Why It Stuck</h2>
          <p className="mb-3">
            The idea that dogs see only black and white tends to persist for two reasons. First, early twentieth-century tools for studying
            animal vision were limited, so it was easy to underestimate what dogs perceived. Second, dogs excel in low-light settings
            where all mammals rely heavily on rod-mediated vision, which is essentially grayscale. As behavioral tests, electroretinography,
            and cone photopigment biochemistry advanced, a consistent picture emerged: dogs possess <strong>two</strong> cone classes, not zero. Laboratory
            color-matching experiments demonstrated dichromacy, and later anatomical mapping confirmed a smaller but meaningful cone population
            amid a retina dominated by rods. In short, the myth lingers because it has a grain of truth—dogs are outstanding in dim light—but
            it conflates low-light performance with daytime color capacity.
          </p>
          <p>
            Recognizing this distinction matters in daily life. It changes how we pick toys, design training spaces, and interpret canine
            behavior in twilight, where motion sensitivity and contrast drive performance more than chroma.
          </p>
        </section>

        {/* Anatomy */}
        <section id="anatomy" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eye Anatomy: Rods, Cones &amp; the Tapetum Lucidum</h2>
          <p className="mb-3">
            Mammalian retinas contain <strong>rods</strong> and <strong>cones</strong>. Rods are extremely light-sensitive and excellent at detecting motion at low brightness.
            Cones mediate color and fine detail in bright light. Dogs have a <strong>rod-dominant</strong> retina, which supports performance at dawn and dusk,
            and a reflective layer behind the retina called the <strong>tapetum lucidum</strong> that bounces unabsorbed photons back through the photoreceptors
            for a second chance at capture. This &ldquo;mirror&rdquo; improves sensitivity and produces the characteristic eye-shine in photographs and headlights.
          </p>
          <p>
            The photopigment in dog rods peaks near wavelengths that favor dim-light detection, while the cone population, though smaller than in humans,
            provides enough color information for meaningful discrimination in daylight. The brain integrates these signals with motion cues and prior
            learning, yielding a visual system tuned to a dog&rsquo;s ecological needs: scanning horizons, tracking movement, and navigating in low light.
          </p>
        </section>

        {/* Color */}
        <section id="color" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Color Vision: Blue–Yellow Dichromacy in Practical Terms</h2>
          <p className="mb-3">
            Humans typically possess three cone types and enjoy a broad color gamut. Dogs have <strong>two</strong> cone types, yielding a color space with a
            strong <strong>blue–yellow</strong> axis. Behavioral color-matching studies in domestic dogs detected cone peaks near the short-wavelength region
            (perceived as blue) and a longer-wavelength region (perceived as yellow). Under daylight, this supports reliable discrimination of many
            blue and yellow stimuli while compressing reds and greens toward yellowish or grayish sensations.
          </p>
          <p>
            For a pet owner or trainer, this means a bright red disc may fail to stand out on green turf the way it does to you. A yellow or blue disc,
            paired with strong brightness contrast against the background, will usually be easier for a dog to track at speed. This is why modern
            training products and course markings increasingly favor blue and yellow when visibility matters.
          </p>
        </section>

        {/* What colors look like */}
        <section id="colors-look" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Common Colors Likely Look Like to Dogs</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Blue:</strong> Highly salient within the canine color space. Often a reliable choice for toys and targets.</li>
            <li><strong>Yellow:</strong> Distinct and easy to separate from many backgrounds, especially dark or shaded surfaces.</li>
            <li><strong>Red &amp; Orange:</strong> Frequently collapse toward yellowish or brownish tones; muted contrast on green grass.</li>
            <li><strong>Green:</strong> Often minimized into beige or gray, offering limited contrast on turf.</li>
            <li><strong>Purple:</strong> Tends to read as a kind of blue.</li>
            <li><strong>Black &amp; White:</strong> Offer strong brightness contrast that aids edge detection even when chroma is limited.</li>
          </ul>
          <p>
            Because dogs operate with a smaller color box, emphasize <strong>brightness contrast</strong> as much as hue. Dark-on-light and light-on-dark pairings
            can dramatically improve clarity during motion and at a distance.
          </p>
        </section>

        {/* Acuity */}
        <section id="acuity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Acuity, Field of View &amp; Depth: Built for Movement</h2>
          <p className="mb-3">
            Typical estimates place canine visual acuity around <strong>20/75</strong> under ordinary conditions. That means a dog needs to be closer to resolve
            the same fine detail a human with 20/20 vision sees farther away. Head shape and breed influence field of view and binocular overlap;
            sighthounds trend toward wider fields for horizon scanning. In bright light, some experiments reveal higher acuity than the classic average,
            but dogs generally trade ultra-fine detail for other strengths: <strong>motion detection</strong>, low-light performance, and wide coverage.
          </p>
          <p>
            Depth perception comes from binocular overlap, motion parallax, and learned context. Dogs integrate these cues with smell and hearing,
            which reduces reliance on fine visual detail. That multimodal approach is one reason many dogs navigate new spaces confidently even with
            modest optical clarity.
          </p>
        </section>

        {/* Motion & flicker */}
        <section id="motion" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Motion &amp; Flicker: Sensitivity That Surprises Humans</h2>
          <p className="mb-3">
            Rod-dominant retinas and rapid visual processing make dogs especially attuned to motion and temporal changes. In laboratory tasks,
            dogs detect &ldquo;flicker&rdquo; at refresh rates that many humans perceive as steady. This aligns with everyday observations: a dog spots a
            subtle twitch in the distance, tracks a moving target across mixed shade, and notices fast, small changes we gloss over.
          </p>
          <p>
            For screens or training media, higher refresh rates can look smoother to dogs. Strobing lights, cheap LED toys, and certain fan blades
            may appear more distracting to a dog than to you. When in doubt, simplify the visual field and reduce flicker.
          </p>
        </section>

        {/* Night vision */}
        <section id="night" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Night Vision &amp; Eye-Shine: The Tapetum Advantage</h2>
          <p className="mb-3">
            Two features underpin canine performance at dawn and dusk: <strong>many rods</strong> and a <strong>tapetum lucidum</strong>. Rods excel in low light and drive motion
            sensitivity. The tapetum bounces light back through the photoreceptors, effectively recycling photons that might otherwise be lost.
            This architecture extends useful vision deeper into the dim range and produces the familiar reflective glow in photos and headlights.
          </p>
          <p>
            The price of that boost is reduced color saturation and fine detail in low light—a trade-off that fits a crepuscular activity pattern
            where detecting movement matters more than reading tiny detail.
          </p>
        </section>

        {/* Training & toys */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training, Toys &amp; Course Design: Make Color Work for Dogs</h2>
          <p className="mb-3">
            Translate science into choices your dog will feel. On grass or green turf, select <strong>yellow</strong> or <strong>blue</strong> for toys, bumpers, cones,
            and jump bars. Increase <strong>brightness contrast</strong> by pairing light targets against dark backgrounds or vice versa. Avoid mid-tone colors
            that merge with the field. Test gear in the exact lighting and surfaces you will use; shade, glare, and grass color change what pops.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pick yellow or blue for speed sports and yard play on grass.</li>
            <li>Combine color with texture: ridged toys can be identified by mouth feel even when visual contrast is low.</li>
            <li>Use clear edge markers: a pale bar against a dark standard can be cleaner than blue-on-blue or red-on-green.</li>
            <li>For indoor scent or search games, rely more on layout and airflow than on color coding.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Log toy colors and retrieve times in Petunia to see what your dog tracks fastest in your real environment.
          </div>
        </section>

        {/* Home & yard */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home &amp; Yard Setup: Small Tweaks With Big Payoff</h2>
          <p className="mb-3">
            Dogs do not rely on vision alone, but thoughtful visual cues improve comfort and safety—especially for seniors:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>High-contrast edges:</strong> outline ramps and steps with contrasting tape; yellow often reads best on turf.</li>
            <li><strong>Low-glare lighting:</strong> indirect night lights guide pathways without washing out contrast.</li>
            <li><strong>Food &amp; water stations:</strong> place bowls on a mat that contrasts with flooring to make edges obvious.</li>
            <li><strong>Floor traction:</strong> add runners on slick surfaces; combine tactile and visual cues.</li>
          </ul>
          <p>
            Pair these with scent markers, predictable furniture placement, and consistent routines. Multisensory consistency helps more than any single trick.
          </p>
        </section>

        {/* Sports & working dogs */}
        <section id="sports" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Agility, Flyball &amp; Working Dogs: Seeing at Speed</h2>
          <p className="mb-3">
            Course designers can make life easier by leaning into canine strengths. On outdoor fields, <strong>yellow</strong> jump bars with <strong>blue</strong> standards
            often separate cleanly. Avoid red bars on green grass. For detection and search work, trust that vision is only part of the picture:
            scent and sound carry information that can outclass color in complex environments. When filming training, use higher refresh-rate
            displays and avoid flicker-heavy lighting that distracts or fatigues dogs.
          </p>
        </section>

        {/* Life-stage vision */}
        <section id="lifespan-vision" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Adults &amp; Seniors: How Vision Changes Over Life</h2>
          <p className="mb-3">
            Puppies enter the world with immature eyes and visual coordination that improve over weeks to months. By adulthood, performance depends
            on genetics, eye health, training, and environment. In senior years, the lens naturally hardens and scatters light—a change called
            <strong> nuclear (lenticular) sclerosis</strong>—which creates a bluish haze without necessarily causing significant vision loss. Cataracts, in contrast,
            are true lens opacities that can block light and lead to vision impairment or pain. If a dog appears hesitant on stairs, bumping into
            objects, or struggling at dusk, an ophthalmic exam is warranted.
          </p>
          <p>
            Some inherited retinal conditions, such as progressive retinal atrophy, begin with night blindness as rods fail and later involve cones.
            Dogs adapt remarkably well with environmental help: add traction, use contrasting edges on steps, and place night lights. Routines and
            scent cues reduce stress when visual clarity fades.
          </p>
        </section>

        {/* Conditions */}
        <section id="conditions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Eye Conditions That Change What Dogs See</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Nuclear sclerosis:</strong> age-related lens hardening that gives eyes a blue-gray tint; typically mild effect on vision.</li>
            <li><strong>Cataracts:</strong> true opacities that scatter or block light; variable in severity; some are surgical candidates.</li>
            <li><strong>Progressive retinal atrophy:</strong> degenerative diseases of rods and cones; often first noticed as declining night vision.</li>
            <li><strong>Corneal disease or uveitis:</strong> pain and photophobia change behavior; prompt evaluation protects comfort and vision.</li>
          </ul>
          <p>
            Early detection matters less for &ldquo;color&rdquo; and more for comfort and confidence. Rapid changes, eye pain, or sudden vision loss are emergencies.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do dogs only see black and white?</strong><br />
            No. Dogs are blue–yellow dichromats with useful color discrimination and strong motion and low-light abilities.
          </p>

          <p className="mb-3">
            <strong>Which toy color is easiest to see on grass?</strong><br />
            Yellow or blue, ideally with strong brightness contrast against the background.
          </p>

          <p className="mb-3">
            <strong>Why do my dog&rsquo;s eyes glow at night?</strong><br />
            The tapetum lucidum reflects light back through the retina to boost sensitivity, creating eye-shine.
          </p>

          <p className="mb-3">
            <strong>Can some dogs see detail better than others?</strong><br />
            Yes. Breed, head shape, light level, and individual differences matter. Bright-light experiments sometimes show higher acuity than the classic average.
          </p>

          <p>
            <strong>Do screens look different to dogs?</strong><br />
            Some dogs notice flicker at rates humans do not. High refresh-rate displays are more comfortable for motion-heavy videos.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Neitz J, Geist T, Jacobs GH. Color vision in the dog: behavioral evidence for dichromacy with cone peaks near short and longer wavelengths. 
              <a href="https://pubmed.ncbi.nlm.nih.gov/2487095/" target="_blank" rel="noopener noreferrer"> PubMed</a>
            </li>
            <li>
              Mowat FM et&nbsp;al. Cone topography and function in the canine retina (ERG/anatomy). 
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2610288/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              Jacobs GH et&nbsp;al. Photopigments of dogs and foxes and their implications for canid vision (rod peak and cone data). 
              <a href="https://www.researchgate.net/profile/Gerald-Jacobs/publication/231897541_Photopigments_of_dogs_and_foxes_and_their_implications_for_canid_vision/links/00b4952ee848b72bba000000/Photopigments-of-dogs-and-foxes-and-their-implications-for-canid-vision.pdf" target="_blank" rel="noopener noreferrer"> PDF</a>
            </li>
            <li>
              Coile DC et&nbsp;al. Critical flicker fusion in dogs: behavioral thresholds higher than typical human rod performance. 
              <a href="https://pubmed.ncbi.nlm.nih.gov/2813532/" target="_blank" rel="noopener noreferrer"> PubMed</a>
            </li>
            <li>
              ACVO public resource on pet vision, acuity estimates, and eye-health comparisons. 
              <a href="https://www.acvo.org/tips-treatments-tricks/vision-in-pets" target="_blank" rel="noopener noreferrer"> ACVO</a>
            </li>
            <li>
              Lind O et&nbsp;al. High visual acuity revealed in dogs under bright light (contextual nuance). 
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5716585/" target="_blank" rel="noopener noreferrer"> Open access</a>
            </li>
            <li>
              VCA Hospitals. Nuclear (lenticular) sclerosis vs cataracts; clinical differences and aging lens. 
              <a href="https://vcahospitals.com/know-your-pet/lenticular-sclerosis-in-dogs" target="_blank" rel="noopener noreferrer"> VCA</a>
            </li>
            <li>
              Cornell Canine Health Center. Progressive retinal atrophy overview. 
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/progressive-retinal-atrophy" target="_blank" rel="noopener noreferrer"> Cornell</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for individualized medical guidance and screening.
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
