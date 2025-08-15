'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function QuietNightsInBoarding() {
  const locale = useLocale();

  const title =
    'Quiet Nights in Boarding: Noise, Lighting & Rest—What the Research Says';
  const date = 'July 28, 2025';
  const categories = ['owner', 'boarding'] as const;

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
    'An evidence-based blueprint for restful overnights in kennels and boarding: realistic decibel levels, what lighting does (and doesn’t) change, circadian basics, quiet-hour protocols, staff routines, enrichment that promotes sleep, and how to measure success.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/quiet-nights-in-boarding-noise-lighting-and-rest`}
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
            <li><a href="#why-sleep" className="underline hover:opacity-80">Why Sleep Matters</a></li>
            <li><a href="#noise-reality" className="underline hover:opacity-80">Noise: The Reality</a></li>
            <li><a href="#noise-controls" className="underline hover:opacity-80">Noise Controls That Work</a></li>
            <li><a href="#lighting" className="underline hover:opacity-80">Lighting & Circadian Basics</a></li>
            <li><a href="#overnight-protocol" className="underline hover:opacity-80">Overnight Protocol (Step-by-Step)</a></li>
            <li><a href="#enrichment" className="underline hover:opacity-80">Sleep-Positive Enrichment</a></li>
            <li><a href="#monitoring" className="underline hover:opacity-80">How to Measure Success</a></li>
            <li><a href="#owner-checklist" className="underline hover:opacity-80">Owner Prep Checklist</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Templates & Signage</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* DISCLAIMER */}
        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-8">
          <strong>Note:</strong> This guide summarizes research and facility best practices. Always follow local building, fire, workplace-safety, and animal-care regulations, and consult your veterinarian for dog-specific medical concerns.
        </div>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Noise:</strong> Kennel sound levels often spike above 100 dB during barking flurries—loud enough to stress dogs and staff. Build a system (acoustics + routine + training) that drives <em>predictable</em> quiet hours.
            </li>
            <li>
              <strong>Lighting:</strong> Evidence in dogs is mixed; one shelter study found no clear disruption from lights at night, but broader mammal research says even dim light can alter melatonin. Play it safe: dark sleeping periods with minimal, warm-hued egress lighting.
            </li>
            <li>
              <strong>Rest:</strong> More daytime resting and consistent overnight sleep correlate with better welfare signals. Aim for structured wind-down, stable groups, and low-arousal enrichment.
            </li>
            <li>
              <strong>What to implement:</strong> 60-minute evening deceleration block → lights down → sound-floor controls → staged last-outs → quiet-hour signage → overnight rounds (silent) → morning ramp-up routine.
            </li>
          </ul>
        </section>

        {/* WHY SLEEP */}
        <section id="why-sleep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Sleep Matters in Boarding</h2>
          <p className="mb-3">
            Good sleep isn’t a luxury—it’s a behavior and health multiplier. In kennels, dogs juggle new sounds, smells, neighbors, routines, and flooring. Poor sleep compounds arousal and sets up a cycle of more barking → more stimulation → more fatigue without recovery. Studies in shelter/kennel contexts show: (1) dogs can sleep through the night when undisturbed, (2) dogs that rest more during the day tend to show calmer affect on other measures, and (3) initial days in kennels can raise stress hormones before settling with routine and appropriate enrichment.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Home vs. kennel:</strong> Actigraphy shows different activity rhythms in shelter vs. owned dogs—environment matters.</li>
            <li><strong>Signals of improvement:</strong> More daytime resting, steadier night sleep, fewer repetitive behaviors, better “relaxed” scores by staff.</li>
            <li><strong>Takeaway:</strong> Night strategy is inseparable from daytime structure—quiet nights start with calm days.</li>
          </ul>
        </section>

        {/* NOISE REALITY */}
        <section id="noise-reality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Noise: The Reality You’re Designing Against</h2>
          <p className="mb-3">
            Dog barks are impulsive, high-energy sounds. In kennels, reflections off concrete, block, metal gates, and epoxy floors amplify both volume and harshness. Published measurements in shelters and veterinary kennels report spikes above 100 dBA and sustained periods above typical occupational action levels. Translation: these soundscapes can drive arousal, impede rest, and even risk hearing health over time.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-3">
            <strong>Rule of thumb:</strong> If you need to raise your voice at arm’s length, that’s already in the “hazardous” conversation zone for workers—and likely disruptive for dogs.
          </div>
          <h3 className="text-lg font-semibold mt-2 mb-1">What the numbers typically look like</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Single bark peaks:</strong> commonly ~90–110 dB at source; in reflective rooms, apparent loudness increases via reverberation.</li>
            <li><strong>Room peaks:</strong> studies document kennel areas exceeding 100 dBA during busy periods.</li>
            <li><strong>Occupational context:</strong> OSHA’s permissible exposure is 90 dBA averaged over 8 hours; NIOSH recommends 85 dBA (and only ~15 minutes/day at 100 dBA).</li>
          </ul>
          <p className="text-sm text-gray-700">
            You won’t get a kennel to “library quiet,” but you can shorten loud bursts, lower the average, and remove hard echoes that keep dogs “keyed up.”
          </p>
        </section>

        {/* NOISE CONTROLS */}
        <section id="noise-controls" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Noise Controls That Actually Work (People-, Process-, Place-based)</h2>

          <h3 className="text-lg font-semibold mb-1">A) People & Process</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Predictability beats novelty:</strong> Standardize last-outs, feeding, and lights-down. Dogs settle faster when cues are consistent.</li>
            <li><strong>“Quiet-hour” culture:</strong> A set hour nightly with low voices, minimal door clanging, and no hose use clears the arousal slate.</li>
            <li><strong>Group choreography:</strong> Move excitable dogs first; avoid face-offs at gate fronts; use visual barriers for reactive neighbors.</li>
            <li><strong>Counterconditioning the doorbell moments:</strong> Pair unavoidable noises (locks, keys) with calm delivery of treats at rest spots to flip associations.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">B) Place & Materials</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Absorption & diffusion:</strong> Add high-NRC ceiling tiles and washable wall panels; break up parallel hard surfaces to kill echo time.</li>
            <li><strong>Soft landings:</strong> Rubber-backed runners in corridors, neoprene door bumpers, silicone bowl mats cut “clank” and skids.</li>
            <li><strong>Zoning:</strong> Separate high-energy runs from rest bays; stagger dog sightlines; keep cat housing out of the acoustic blast radius.</li>
            <li><strong>HVAC & equipment:</strong> Isolate blowers/dryers and avoid overnight use in adjacent rooms during quiet hours.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">C) Conditioning the Soundscape</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Music with variety:</strong> Classical/soft genres can reduce barking and increase resting—rotate playlists to avoid habituation.</li>
            <li><strong>Silence after lights-down:</strong> Overnight, aim for minimal audio. Use low-volume pink noise only if it demonstrably reduces startle.</li>
            <li><strong>Training staff on “sound etiquette”:</strong> keys on retractors, slow gate latches, radios/phones on vibrate, rubber stoppers on bins.</li>
          </ul>
        </section>

        {/* LIGHTING */}
        <section id="lighting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lighting & Circadian Basics: What Helps vs. What’s Hype</h2>
          <p className="mb-3">
            Dogs are flexible sleepers, and shelter studies show many can sleep overnight even with low light present. Still, across mammals, light at night can suppress melatonin depending on intensity and spectrum. The conservative, welfare-forward approach is to <strong>protect a dark, quiet overnight window</strong> while ensuring safe egress lighting for staff checks.
          </p>
          <h3 className="text-lg font-semibold mb-1">Practical Lighting Targets</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Day:</strong> bright, even light for cleaning and care; minimize glare and flicker.</li>
            <li><strong>Evening wind-down:</strong> dim to a warm tone; reduce contrasts and activity cues.</li>
            <li><strong>Night:</strong> lights off in runs; use low-lux, warm-hued egress strips in aisles only (avoid blue-rich light).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Evidence snapshot:</strong> One shelter study found overnight light did not measurably disrupt lying/sleep behavior; other work across species links even dim light at night to melatonin suppression. When in doubt, keep sleeping areas dark and quiet.
          </div>
        </section>

        {/* OVERNIGHT PROTOCOL */}
        <section id="overnight-protocol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Overnight Protocol (Step-by-Step)</h2>

          <h3 className="text-lg font-semibold mb-1">0:60 → 0:30 — Deceleration Block</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Finish high-arousal play 60–90 minutes before lights-down; swap to scentwork/lickmats.</li>
            <li>Deliver last feeding with calming scatter or puzzle delivery for foraging satisfaction.</li>
            <li>Begin dimming lights and voices; close nonessential doors; stage bedding and chews.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">0:30 → 0:10 — Staged Last-Outs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rotate dogs in compatible micro-groups to prevent corridor pileups.</li>
            <li>Reward re-entry calm; avoid doorway face-offs with towels/visual barriers.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">0:10 → 0:00 — Settle & Lights-Down</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Place high-value chews only for known safe chewers; otherwise, soft snuffle mats.</li>
            <li>Switch to egress-only lighting; check locks and gate bumpers; confirm water.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">Overnight — Silent Rounds</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use headlamps with warm filters in aisles; avoid lighting dog compartments.</li>
            <li>Pause if a dog stirs; let them resettle before moving to the next bay.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-1">Morning — Predictable Ramp-Up</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Lights on gradually; greet calmly; open farthest bay first to prevent chain-barking.</li>
            <li>Outs → water refresh → spot clean → breakfast cadence; music only after first outs.</li>
          </ul>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sleep-Positive Enrichment (What to Use, When)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Helps</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Short petting/soft social sessions earlier in the day</li>
                <li>Sniff/forage work before dinner; scatter feeds</li>
                <li>Lickmats/kongs during wind-down for known safe chewers</li>
                <li>Classical/soft playlists in daytime; silence overnight</li>
                <li>Comfy bedding with familiar scent; cool room temperature</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🚫 Hinders</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-intensity play late evening</li>
                <li>Metal-on-metal clatter (bowls, gates) after dimming</li>
                <li>Bright, blue-rich task lights in dog sleeping zones</li>
                <li>Long “check-ins” that wake entire bays</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MONITORING */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Measure Success (Simple & Objective)</h2>
          <h3 className="text-lg font-semibold mb-1">Noise</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use a calibrated sound level meter (Class 2 is fine) to log LAeq and Lmax at evening peak and post–lights-down.</li>
            <li>Track “minutes above 85 dBA” per hour; your goal is a steady decline after the wind-down window.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Sleep & Behavior</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Night cameras (IR, no visible light) to score awakenings/startles per hour.</li>
            <li>Daily staff scorecard: “relaxed,” “pacing,” “barking at approach,” “settles within 30s.” Look for trends, not perfection.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-1">Health & Operations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Track GI upsets, soft-tissue scrapes, and coughs alongside sleep metrics—chronic arousal often shows up elsewhere.</li>
            <li>Log cleaning tasks moved <em>out</em> of quiet hour (hosing, dryer use) and celebrate adherence.</li>
          </ul>
        </section>

        {/* OWNER CHECKLIST */}
        <section id="owner-checklist" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Prep Checklist (Help Us Help Your Dog Sleep)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bring a recently worn T-shirt/blanket with your scent (washable).</li>
            <li>Confirm last meal timing and usual bedtime routine.</li>
            <li>Pack safe chew your dog knows well (or opt out if they guard/ingest).</li>
            <li>Share triggers (door clanks, other dogs near bowls) so we can seat accordingly.</li>
            <li>OK contact method for questions after 9 pm (text preferred).</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Templates & Signage (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Quiet-Hour Sign (Back-of-House)</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p className="mb-2"><strong>QUIET HOUR IN EFFECT</strong> — {`{Time}`}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Voices low • Radios off • Keys clipped • Gates closed gently</li>
              <li>No hoses/dryers • Bins pre-staged • Cart wheels locked</li>
              <li>Headlamps in aisles only • No cage lights</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Evening Checklist (Supervisor)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Playlist off at {`{time}`}; lights dimmed; last-outs staged</li>
            <li>Noise meter zeroed/logging; camera IR on; water refreshed</li>
            <li>Visual barriers placed for reactive neighbors</li>
            <li>Chews/lickmats placed as per notes; risk-dogs &lt;none&gt;</li>
            <li>Egress lights only; corridor mats flat; doors bumped</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Morning Ramp-Up Script</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            “Good morning. Lights up. Breathe. Open Bay C first. Quiet leash clips. Outs in order C → B → A. Water, spot clean, then breakfast. Music <em>after</em> first outs.”
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is total darkness required at night?</strong><br />
            No. For safety, keep low-lux, warm-hued egress lighting in aisles. Avoid shining lights into runs. Evidence in dogs is mixed, so default to the darkest safe environment.
          </p>

          <p className="mb-3">
            <strong>Won’t music at night help keep them calm?</strong><br />
            Music can help during the day and evening wind-down, but silence is typically best overnight to avoid startle. Rotate daytime playlists to prevent habituation.
          </p>

          <p className="mb-3">
            <strong>What decibel level should we target?</strong><br />
            There’s no universal kennel limit, but safety standards for people recommend &lt;85 dBA on an 8-hour average. Use that as a guiding frame and aim to minimize peaks/spikes after lights-down.
          </p>

          <p className="mb-3">
            <strong>Do red “night lights” help dogs sleep?</strong><br />
            Spectrum matters across species, but dog-specific data are limited. Choose warm-hued, very low-lux aisle lighting strictly for staff safety; keep runs dark.
          </p>

          <p>
            <strong>What’s the one change with biggest impact?</strong><br />
            A true, enforced quiet hour with predictable evening routines—paired with acoustic absorption on ceilings/walls—usually transforms the overnight sound floor.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Coppola CL, Grandin T, Enns RM. <em>Noise in the animal shelter environment: building design and the effects of daily noise exposure.</em> (overview &gt;100 dB; welfare impacts).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/16649947/" target="_blank" rel="noopener noreferrer">
                PubMed
              </a>
            </li>
            <li>
              Scheifele PM et&nbsp;al. <em>Effect of kennel noise on hearing in dogs.</em> AJVR (noise assessments &gt;100 dBA; hearing risk).{' '}
              <a href="https://avmajournals.avma.org/view/journals/ajvr/73/4/ajvr.73.4.482.pdf" target="_blank" rel="noopener noreferrer">
                AVMA Journal PDF
              </a>
            </li>
            <li>
              Kogan LR et&nbsp;al. <em>Behavioral effects of auditory stimulation on kenneled dogs.</em> J Vet Behav (classical music ↓ vocalizing, ↑ resting).{' '}
              <a href="https://www.rescueanimalmp3.org/wp-content/uploads/2012/10/Behavioral-effects-of-auditory-stimulation-on-kenneled-dogs-published1.pdf" target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </li>
            <li>
              Bowman A et&nbsp;al. <em>Genre effects & habituation.</em> Physiol Behav / Biol Psych (music benefits and limits).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/28093218/" target="_blank" rel="noopener noreferrer">
                PubMed
              </a>
            </li>
            <li>
              Owczarczak-Garstecka SC & Burman OHP. <em>Sleep & resting as welfare indicators in shelter dogs.</em> PLOS ONE.{' '}
              <a href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0163620" target="_blank" rel="noopener noreferrer">
                Article
              </a>
            </li>
            <li>
              Houpt KA et&nbsp;al. <em>The sleep of shelter dogs was not disrupted by overnight light.</em> Animals (Basel).{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6826762/" target="_blank" rel="noopener noreferrer">
                PMC
              </a>
            </li>
            <li>
              Hoffman CL et&nbsp;al. <em>Actigraphy: shelter vs. owned dogs.</em> J Vet Behav.{' '}
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1558787818301953" target="_blank" rel="noopener noreferrer">
                Abstract
              </a>
            </li>
            <li>
              CDC/NIOSH & OSHA. <em>Occupational noise exposure thresholds and guidance.</em>{' '}
              <a href="https://www.cdc.gov/niosh/noise/prevent/understand.html" target="_blank" rel="noopener noreferrer">
                NIOSH overview
              </a>{' '}
              ·{' '}
              <a href="https://www.osha.gov/noise" target="_blank" rel="noopener noreferrer">
                OSHA noise page
              </a>
            </li>
            <li>
              Zurlinden S et&nbsp;al. <em>Quiet Kennel counterconditioning.</em> Animals (Basel) / PLOS (proof-of-concept to decrease barking).{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8772564/" target="_blank" rel="noopener noreferrer">
                PMC
              </a>
            </li>
            <li>
              UC Davis / Wisconsin Shelter Medicine & ASV. <em>Facility design & standards (noise/lighting considerations).</em>{' '}
              <a href="https://www.sheltermedicine.com/library/resources/facility-design-and-animal-housing" target="_blank" rel="noopener noreferrer">
                KSMP resource
              </a>{' '}
              ·{' '}
              <a href="https://www.aspcapro.org/sites/default/files/2023-05/asvguidelinessecondedition-2022.pdf" target="_blank" rel="noopener noreferrer">
                ASV Guidelines (PDF)
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
