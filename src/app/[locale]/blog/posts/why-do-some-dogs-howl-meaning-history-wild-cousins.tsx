'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoDogsHowlMeaningHistoryWildCousins() {
  const locale = useLocale();

  const title =
    'Why Do Some Dogs Howl? Meaning, History, and Wild Cousins (Wolves, Coyotes & More)';
  const date = 'August 26, 2025';
  const categories = ['owner', 'boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  const metaDescription =
    'A deep dive into dog howling: what it means, why some dogs howl and others do not, the science of wolf & coyote howls, acoustic structure, history from wolves to pets, medical and behavioral causes, training tips, and fun facts about African wild dogs, dholes, foxes, and jackals.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="all" />
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
          The first time a dog throws back their head and lets out a long, trembling howl, it feels
          ancient. Somewhere in that sound lives winter forests, campfires, and the hushed static of
          snow. But in modern life, howling also pops up for ordinary reasons: a fire engine passes,
          a favorite song hits a certain pitch, or your dog is home alone and wants you back <em>now</em>.
          This guide digs into <strong>what dog howls mean</strong>, <strong>why some dogs howl more than others</strong>,
          how howling evolved from wolves and coyotes, and what you can do if howling has turned into
          a neighborhood headliner.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <strong>One caveat right up front:</strong> sudden, new, or excessive howling can signal
          pain or a medical issue. If your normally quiet dog begins howling out of the blue—especially
          at night or paired with pacing, panting, or confusion—talk with your veterinarian to rule
          out illness, injury, or cognitive decline in senior dogs.
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (What Howling Usually Means)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Long-distance messaging:</strong> dogs, like their wolf and coyote relatives, use
            long, narrow-band vocalizations that travel far—helpful for <em>locating</em> family, keeping
            <em>group cohesion</em>, and advertising <em>territory</em>.
          </li>
          <li>
            <strong>Emotions &amp; social bonds:</strong> some howls are essentially, “Where are you?”
            or “I miss you.” Research in wolves shows howling can track <em>relationship quality</em> more
            than stress alone.
          </li>
          <li>
            <strong>Triggers &amp; copycat moments:</strong> sirens, other dogs, certain instruments,
            and specific pitches can spark “contagious” howling.
          </li>
          <li>
            <strong>Behavior/medical flags:</strong> separation anxiety, attention-seeking, or pain can
            all produce howling; seniors may howl more if cognitive changes disrupt sleep–wake cycles.
          </li>
          <li>
            <strong>Breed &amp; ancestry:</strong> spitz and northern breeds (e.g., Huskies, Malamutes)
            and many hounds are naturally vocal; dogs closer to wolves in genetics tend to react more
            to wolf howls than breeds farther removed.
          </li>
        </ul>

        {/* SECTION — WHAT A DOG HOWL CAN MEAN */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">What a Dog Howl Can Mean (8 Common Contexts)</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">1) Locating family &amp; “I am here” announcements</h3>
        <p className="mb-4">
          The ancestral job of a howl is long-distance communication. In wolves and coyotes, howls
          carry across valleys to <em>regroup</em> after hunts and to <em>space</em> neighboring families.
          Domestic dogs inherited this toolkit, so some dogs still howl to check in or to respond to
          howls they hear—real or mistaken (like a siren). Many owners notice that their dog howls when
          left alone; sometimes that is social contact-seeking rather than mischief.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2) Sirens, music &amp; “contagious” howling</h3>
        <p className="mb-4">
          Lots of dogs answer a passing ambulance or a sustained musical note. The simplest explanation:
          the dog hears a long, steady tone in the howling range and replies reflexively, a perfectly
          normal behavior. Many dogs will also howl in chorus when they hear other dogs in the
          neighborhood—especially at dawn or dusk.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3) Separation distress or attention-seeking</h3>
        <p className="mb-4">
          In the home, persistent howling most commonly tracks to separation-related behavior or a
          learned way to summon you. Dogs with separation problems may howl, pace, drool, scratch doors,
          or destroy items near exits; others discover that a dramatic howl reliably produces owner
          attention, so the behavior sticks. Context is everything: where, when, and what else the dog
          does tell the real story.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4) Pain, illness, or cognitive change</h3>
        <p className="mb-4">
          A sudden change in howling—especially a new night howl—deserves a medical check. Pain,
          neurological issues, sensory decline, or senior cognitive dysfunction can all increase
          vocalization. Senior dogs with flipped sleep–wake cycles often wander and vocalize at night.
          If in doubt, start with your veterinarian and a simple at-home diary of when/how often it
          happens.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5) Territory &amp; boundary marking (the acoustic fence)</h3>
        <p className="mb-4">
          Like scent, howling can function as a boundary marker. The message is not always “fight me”;
          it is more often “occupied—keep moving.” Wild canids use lots of low-risk signals to avoid
          costly fights. Your dog may be echoing that instinct, announcing their yard to passing dogs.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">6) Joy, arousal, and reunions</h3>
        <p className="mb-4">
          Hounds and northern breeds sometimes howl when play is intense or when family returns—part
          tradition, part ecstasy. You will see loose bodies, tail sweeps, and a face that reads happy.
          That is a different picture from the high, thin, unsettled howl of distress.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">7) Breed &amp; ancestry differences</h3>
        <p className="mb-4">
          All dogs <em>can</em> howl, but some lineages are simply more vocal. Many spitz-type breeds
          and hounds retain higher howling tendencies. There is also a genetics angle: studies suggest
          that dogs <em>closer</em> to wolves in genetic distance react more strongly to wolf howls than
          those farther removed, which tracks with what owners see across breeds.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">8) Conditioning—what you reward, you grow</h3>
        <p className="mb-6">
          If howling consistently brings you running, a clever dog will use it as a button. That does
          not mean you should ignore distress; it means you should decide which responses you want to
          reinforce on purpose and which you will redirect with training.
        </p>

        {/* SECTION — THE SCIENCE OF A HOWL */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">The Science of a Howl (Acoustics, Range &amp; Why It Carries)</h2>
        <p className="mb-4">
          Howls are usually <em>narrow-band</em> vocalizations—most of their acoustic energy rides at a
          relatively steady pitch. That stability helps a howl carry farther through forests and over
          hills than a bark. In wolves, the fundamental frequency typically lives in the low hundreds
          of hertz and can glide up or down smoothly. Researchers can often identify individual wolves
          by the fine structure of their howls, and in some contexts can even detect pups in a chorus
          based on energy distribution. It is one reason biologists use passive microphones and
          playback–response surveys to map packs and dens without disturbing them.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <strong>Fun lab note:</strong> the “how many are howling?” question is trickier than it
          sounds. In a chorus, different voices overlap, and the echo of a valley or city block can
          exaggerate the sense of numbers—great if you are a wild canid trying to sound big, less great
          if you are a biologist counting callers by ear. Spectrograms help, but even skilled listeners
          sometimes underestimate or overestimate.
        </div>

        {/* SECTION — HISTORY FROM WOLVES TO DOGS */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">From Wolves to Dogs: What Changed, What Didn&rsquo;t</h2>
        <p className="mb-4">
          Dogs descended from gray wolves thousands of years ago, and howling is part of that heritage.
          Domestication reshaped communication; dogs are exquisitely attuned to human signals compared
          with wolves. But the long-distance “I am here” channel stuck around—and in wolves we can see
          what that channel was built to do: <em>space</em> neighboring packs, <em>rally</em> family after
          hunts, and <em>locate</em> one another when visual contact is impossible.
        </p>
        <p className="mb-6">
          Modern wolf studies show nuance. Wolves howl more to close partners than distant packmates
          during separations, suggesting a social driver beyond raw stress hormones. Field work also
          finds that howling shifts seasonally—pack–to–pack “keep out” messages matter more in some
          seasons, while pup care and within-pack coordination dominate others. Those patterns echo in
          dogs: some howls are big feelings aimed at <em>you</em>, others are simple echoes of ancestral
          radio checks.
        </p>

        {/* SECTION — WOLVES: WHAT WE KNOW */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Wolves: Territory, Cohesion &amp; Relationship Ties</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Pack spacing:</strong> classic field studies showed wolves answering playbacks and
            howling at boundaries to mediate avoidance between neighboring packs—conflict without
            contact.
          </li>
          <li>
            <strong>Reassemble &amp; rally:</strong> chorus howls can gather scattered hunters or guide
            packmates back to pups at a rendezvous site. In Yellowstone and elsewhere, howls help
            researchers find packs and track seasonal life.
          </li>
          <li>
            <strong>Social bonds:</strong> when a close partner leaves, remaining wolves howl more than
            cortisol levels alone would predict—relationship quality matters.
          </li>
          <li>
            <strong>Counting callers:</strong> biologists now use spectrograms and energy-based methods
            to estimate how many voices and whether pups are present in a chorus—useful for noninvasive
            monitoring.
          </li>
        </ul>

        {/* SECTION — COYOTES */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Coyotes: The Group Yip-Howl (Bonding &amp; Territory)</h2>
        <p className="mb-4">
          If you live in North America, the “howl chorus” you hear most is coyote. Their signature song,
          the <em>group yip-howl</em>, typically involves a mated pair weaving long howls and short yips;
          yearlings and pups chime in if nearby. The effect is electric—like a stadium chant with
          melody. Field researchers describe a dual purpose: <em>family bonding</em> and <em>territory
          advertisement</em>. It is less “we killed something” and more “we live here, we&rsquo;re together,
          and everyone should know it.” In fact, wildlife projects caution that coyotes would be
          unlikely to announce a fresh kill; broadcasting food is a bad plan around competitors.
        </p>
        <p className="mb-6">
          Acoustically, coyote long-distance calls also carry individual information. That means coyotes
          may distinguish neighbors from strangers and respond differently to different voices. The same
          facts that make howls a powerful social signal make them a powerful research tool: passive
          microphones and careful playbacks can map family groups across a landscape without ever
          seeing them.
        </p>

        {/* SECTION — OTHER CANIDS */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Other Howlers &amp; Near-Howlers: Jackals, Painted Dogs, Dholes &amp; Foxes</h2>
        <p className="mb-4">
          The canid family is a vocal orchestra. Not everyone “howls” in the wolf sense, but many
          species deploy long-range signals to keep contact in big, messy habitats.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Golden jackals</strong> (Eurasia, North Africa) have robust howl repertoires used in
            territorial spacing and contact; acoustic surveys now help track their expanding range in
            Europe.
          </li>
          <li>
            <strong>African wild dogs</strong> (<em>Lycaon pictus</em>) do not howl; they use a haunting
            long-distance <em>hoo call</em> to reconnect after hunts or when scattered. Conservationists
            successfully use playbacks of this call to attract packs for collaring and monitoring.
          </li>
          <li>
            <strong>Dholes</strong> (<em>Cuon alpinus</em>)—the “whistling dogs” of Asia—use a clear,
            far-carrying whistle for long-range contact in dense forests; individuals have recognizable
            acoustic signatures.
          </li>
          <li>
            <strong>Foxes</strong> do not truly howl; red foxes are famous for a piercing <em>vixen
            scream</em> during mating season and a range of barks, gekkers, and shrieks for close-range
            drama.
          </li>
        </ul>

        {/* SECTION — WHY SOME PET DOGS HOWL AND OTHERS DON’T */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Why Some Pet Dogs Howl—and Others Don&rsquo;t</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Ancestry &amp; breed tendencies</h3>
        <p className="mb-4">
          Huskies, Malamutes, many hounds, and some shepherds are naturally more vocal; toy and
          companion breeds often bark more than they howl. Genetics matter, too: dogs that are
          genetically closer to wolves show stronger, more classic howl responses to wolf playbacks
          than dogs with more distant ancestry.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Learning history (what worked before)</h3>
        <p className="mb-4">
          Howling that consistently gets attention—door opens, owner returns, fun resumes—gets stronger.
          Quiet that consistently earns reinforcement gets stronger as well. Most households accidentally
          teach both without realizing it.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Environment &amp; triggers</h3>
        <p className="mb-4">
          City blocks bounce sirens and dog voices around at dawn and dusk (prime howl windows for wild
          canids). In quieter suburbs, a single neighbor dog may be the only trigger. Some homes
          discover that a particular instrument or singer lights up their dog&rsquo;s inner tenor.
        </p>

        {/* SECTION — HOME TRIAGE & TRAINING */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Home Triage: When to Call the Vet, When to Train</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Red flags for a veterinary check</h3>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li>New howling in a dog who rarely vocalizes</li>
          <li>Night-time howling in seniors (sleep–wake reversal, confusion)</li>
          <li>Howling paired with pacing, panting, restlessness, loss of house-training</li>
          <li>Howling on movement, touch, or stairs (possible pain)</li>
          <li>Sudden hearing/vision changes, disorientation, or new anxiety</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">If it&rsquo;s behavior (not medical): a simple plan</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Decide what you want more of:</strong> mark &amp; pay quiet. Keep pre-filled treat
            jars by the door; pay 1–2 seconds of silence <em>before</em> you open or greet.
          </li>
          <li>
            <strong>Teach a calm station:</strong> bed or mat near you, scatter tiny treats for calm
            posture, name it (<em>settle</em>). Practice off-duty daily.
          </li>
          <li>
            <strong>Mask the triggers:</strong> white-noise machine; close windows at siren hours; play
            low-volume brown noise or a talk station when you leave.
          </li>
          <li>
            <strong>For separation issues:</strong> keep departures boring; use food puzzles; train
            short exits you can succeed at; consider remote-camera check-ins and, if needed, a certified
            trainer or veterinary behaviorist.
          </li>
          <li>
            <strong>Do not punish howling:</strong> it can increase anxiety and often makes vocalization
            worse long-term.
          </li>
        </ol>

        {/* SECTION — FUN FACTS */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Sound-Nerd Corner: Howls, Harmonics &amp; Head-Tilts</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Harmonic ladders:</strong> a wolf howl has a base pitch (fundamental) with neatly
            stacked overtones. Individuals can be recognized by their acoustic “signature.”
          </li>
          <li>
            <strong>Why it carries:</strong> narrow-band signals scatter less and survive wind and
            foliage better than noisy barks, so the message stays intact over distance.
          </li>
          <li>
            <strong>Counting by spectrogram:</strong> modern field teams use passive acoustic monitors
            and energy analyses to estimate how many voices are in a chorus and whether pups are
            present—no helicopter required.
          </li>
          <li>
            <strong>Dogs tilt their heads</strong> to improve sound localization and because it helps
            them read our faces; the head-tilt + howl combo is social <em>and</em> acoustic.
          </li>
        </ul>

        {/* SECTION — FAQ */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">FAQ (Short, Practical Answers)</h2>
        <div className="space-y-4 mb-10">
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Do sirens hurt my dog&rsquo;s ears and make them howl?
            </summary>
            <p className="mt-2">
              Not typically. Many dogs howl to sirens because they resemble a sustained, howling-like
              pitch or seem like a distant &ldquo;call.&rdquo; Noise-sensitive dogs may be stressed by
              loud sounds overall; if your dog shows distress, mask the sound and create distance.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Why do some breeds howl more than others?
            </summary>
            <p className="mt-2">
              Lineage and genetics. Northern breeds and hounds have a stronger howling tradition; dogs
              genetically closer to wolves also react more to wolf howls than breeds farther removed.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Do coyotes howl after a kill?
            </summary>
            <p className="mt-2">
              That is a myth. Wildlife researchers note coyotes howl for family cohesion and territory
              advertisement; drawing attention to a fresh meal would be risky.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Should I teach a &ldquo;quiet&rdquo; cue?
            </summary>
            <p className="mt-2">
              Yes—pair a calm signal (hand target, sit, or mat) with quick rewards for silence. Keep
              it upbeat; punishment tends to backfire with vocal behaviors.
            </p>
          </details>
        </div>

        {/* SOURCES */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Sources &amp; Further Reading</h2>
        <p className="text-sm text-gray-700 mb-2">
          Representative, reputable sources consulted for this article:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Kennel Club (AKC):{' '}
            <a
              className="underline"
              href="https://www.akc.org/expert-advice/advice/why-do-dogs-howl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why Do Dogs Howl?
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://www.akc.org/expert-advice/advice/canine-communication-deciphering-different-dog-sounds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canine Communication
            </a>
          </li>
          <li>
            Current Biology (2013): Wolf howling &amp; relationship quality:{' '}
            <a
              className="underline"
              href="https://www.sciencedirect.com/science/article/pii/S0960982213008233"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mazzini et&nbsp;al.
            </a>
          </li>
          <li>
            Behaviour (1979): Wolf howling &amp; territorial maintenance:{' '}
            <a
              className="underline"
              href="https://www.originalwisdom.com/wp-content/uploads/bsk-pdf-manager/2019/04/Harrington-and-Mech_1979_Wolf-Howling-and-Its-Role-in-Territory-Maintenance.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harrington &amp; Mech
            </a>
          </li>
          <li>
            U.S. National Park Service:{' '}
            <a
              className="underline"
              href="https://www.nps.gov/articles/why-wolves-howl.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Why Wolves Howl
            </a>
          </li>
          <li>
            Journal of Mammalogy (2007): Acoustic structure of wolf howls:{' '}
            <a
              className="underline"
              href="https://academic.oup.com/jmammal/article/88/3/606/1065987"
              target="_blank"
              rel="noopener noreferrer"
            >
              Palacios et&nbsp;al.
            </a>
          </li>
          <li>
            Bioacoustics (2016): Disentangling canid howls across species:{' '}
            <a
              className="underline"
              href="https://www.sciencedirect.com/science/article/abs/pii/S0376635716300067"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kershenbaum et&nbsp;al.
            </a>
          </li>
          <li>
            USDA/USGS &amp; Journal of Wildlife Management: Howling response &amp; pack assessment:{' '}
            <a
              className="underline"
              href="https://digitalcommons.unl.edu/context/usgsnpwrc/article/1356/viewcontent/Mech_JWM_1982_AN_ANALYSIS_OF_HOWLING.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harrington &amp; Mech (1982)
            </a>
          </li>
          <li>
            The Nature Conservancy &amp; Urban Coyote Research Project:{' '}
            <a
              className="underline"
              href="https://blog.nature.org/2019/02/13/the-howling-why-youre-hearing-coyotes-this-month/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Group yip-howl explainer
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://urbancoyoteresearch.com/faq/i-hear-coyotes-howling-does-mean-they-have-just-killed-something"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coyote FAQ
            </a>
          </li>
          <li>
            PLoS/PMC (2021–2023): Separation-related behavior &amp; genetic distance to wolf howls:{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8479053/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lenkei et&nbsp;al.
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9902479/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lehoczki et&nbsp;al.
            </a>
          </li>
          <li>
            Veterinary sources on pain &amp; cognitive dysfunction:{' '}
            <a
              className="underline"
              href="https://www.merckvetmanual.com/behavior/normal-social-behavior-and-behavioral-problems-of-domestic-animals/behavioral-problems-of-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Merck Veterinary Manual
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://www.aaha.org/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats/managing-cognitive-dysfunction-and-behavioral-anxiety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AAHA Senior Care Guidelines
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://vcahospitals.com/know-your-pet/why-do-dogs-howl"
              target="_blank"
              rel="noopener noreferrer"
            >
              VCA Hospitals: Why Do Dogs Howl?
            </a>
          </li>
          <li>
            African wild dog &amp; dhole vocalizations:{' '}
            <a
              className="underline"
              href="https://www.sciencedirect.com/science/article/abs/pii/S000632070200294X"
              target="_blank"
              rel="noopener noreferrer"
            >
              Robbins (2003): acoustic playbacks
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://www.tandfonline.com/doi/abs/10.1080/09524622.1998.9753395"
              target="_blank"
              rel="noopener noreferrer"
            >
              Durbin (1998): dhole whistle individuality
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7151821/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Langan (2018): painted dog overview
            </a>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general information and is not a substitute for veterinary diagnosis or
          behavior treatment. If your dog&rsquo;s howling is new, intense, or paired with other signs of
          distress, consult your veterinarian.
        </p>
      </main>
    </>
  );
}
