'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoDogsLick() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'Why Do Dogs Lick? Self-Grooming, Affection, Communication, Health Signals, and When to Call the Vet';
  const date = 'August 23, 2025';
  const categories = ['owner'] as const;

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

  return (
    <>

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
            <li><a href="#why-dogs-lick" className="underline hover:opacity-80">Why Dogs Lick</a></li>
            <li><a href="#what-is-normal" className="underline hover:opacity-80">What Is Normal?</a></li>
            <li><a href="#communication" className="underline hover:opacity-80">Communication &amp; Body Language</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medical Causes to Consider</a></li>
            <li><a href="#behavioral" className="underline hover:opacity-80">Behavioral &amp; Emotional Factors</a></li>
            <li><a href="#targets" className="underline hover:opacity-80">Common Licking Targets</a></li>
            <li><a href="#decision-tree" className="underline hover:opacity-80">At-Home Decision Tree</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training &amp; Management</a></li>
            <li><a href="#home-care" className="underline hover:opacity-80">Home Care Do&#39;s &amp; Don&#39;ts</a></li>
            <li><a href="#special-cases" className="underline hover:opacity-80">Puppies, Seniors &amp; Breed Notes</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Safety &amp; Hygiene</a></li>
            <li><a href="#boarding-daycare" className="underline hover:opacity-80">In Boarding &amp; Daycare Settings</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Dogs lick for many reasons. Some are ordinary and healthy (self-grooming, bonding, taste exploration, mild stress relief). Others are signals that something needs attention (itchy allergies, skin infection, pain, nausea, anxiety, or habit loops). Notice the pattern: what they lick, when they lick, and how hard it is to interrupt. If licking is frequent, focused to the point of hair loss or redness, paired with other symptoms, or hard to redirect, speak with your veterinarian. Use kind training to give your dog better tools for comfort and reward calm moments generously.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track &quot;what, where, when&quot; for one week. A tiny log often reveals triggers: grass pollen days, post-walk paw salt, storm nights, or boredom at 9&nbsp;PM.
          </div>
        </section>

        {/* Why Dogs Lick */}
        <section id="why-dogs-lick" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why Dogs Lick: A Quick Tour of the Big Buckets</h2>
          <p className="mb-3">
            Licking is part of a dog&#39;s normal toolkit. Puppies lick to explore; adult dogs lick to clean, to connect, to request attention, and sometimes to self-soothe. Evolution likely favored versatile oral behaviors: pups that licked food or faces communicated hunger; adults that licked themselves removed debris and minor contaminants; social licking reinforced bonds within a group. Humans then selected for traits that felt affectionate to us. The result is a behavior with many meanings that change with context.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Common healthy motives</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Self-grooming:</strong> removing dirt after a walk, drying damp fur, or cleaning paws after rain, salt, or sand.</li>
            <li><strong>Affection &amp; bonding:</strong> soft facial or hand licks when greeting a trusted person; &quot;appeasement&quot; licks to diffuse tension.</li>
            <li><strong>Taste exploration:</strong> salt on skin, food residue, lotions with tasty bases, new surfaces or smells.</li>
            <li><strong>Calming &quot;micro-rituals&quot;:</strong> a few licks after an exciting moment, then a shake-off, then a sigh onto the bed.</li>
          </ul>
          <p className="mb-3">
            Balanced dogs show flexibility: they lick briefly and move on when you redirect with a cue or a toy. Concern rises when licking becomes intense, repetitive, and focused on one spot, or when it shows up alongside other clinical signs like hair loss, redness, limping, gagging, appetite change, or restlessness.
          </p>
        </section>

        {/* What Is Normal */}
        <section id="what-is-normal" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What Is Normal? Duration, Context, and Redirectability</h2>
          <p className="mb-3">
            &quot;Normal&quot; licking is brief, context-driven, and easy to interrupt with a friendly cue. Think 10–30 seconds of paw cleaning after a muddy walk, a few face licks when you sit on the floor, or a quick &quot;wash&quot; after a spill. You can ask for a sit or offer a chew and your dog happily switches gears.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Green / Yellow / Red guide</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Green (routine):</strong> short self-grooming; gentle greeting licks; occasional &quot;taste&quot; of skin; easy to redirect.</li>
            <li><strong>Yellow (watch):</strong> daily paw or flank licking with mild pinkness; air-licking during stress; sudden increase during allergy season; needs minor management.</li>
            <li><strong>Red (vet now):</strong> raw skin or hair loss; persistent night-time licking; gagging or lip-smacking with nausea; painful response when touched; new anxiety loop that crowds out sleep or play.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> &quot;Redirectability&quot; is a vital clue. If your dog cannot disengage even for favorite rewards, look for pain, itch, or nausea.
          </div>
        </section>

        {/* Communication */}
        <section id="communication" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Communication &amp; Body Language: Licking as a Social Signal</h2>
          <p className="mb-3">
            Licking can be social language, especially around faces, hands, and mouths. Soft, brief licks often mean &quot;hello,&quot; or &quot;you matter to me.&quot; Faster, repeated licks to your hands can be a polite request: &quot;pet me&quot; or &quot;I would like something.&quot; In some contexts, tongue flicks and lip licks are stress tells: your dog may be nervous around sudden movements, cameras, looming faces, or conflict in the room.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Look at the whole picture</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Loose body:</strong> soft eyes, wagging hips, bouncy steps plus a few licks = friendly affection.</li>
            <li><strong>Tension present:</strong> averted gaze, head turn, yawns, quick tongue flicks, tucked tail = &quot;I&#39;m not sure.&quot;</li>
            <li><strong>After excitement:</strong> lick, shake-off, sigh, settle = downshifting arousal (healthy self-regulation).</li>
          </ul>
          <p className="mb-3">
            If greeting licks are unwanted, teach a simple routine: &quot;Go to mat,&quot; then &quot;sit&quot; for a chin scratch or treat. Reward the pause, not the jumping or face dives.
          </p>
        </section>

        {/* Medical Causes */}
        <section id="medical" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Medical Causes to Consider: Itch, Pain, Nausea, and More</h2>
          <p className="mb-3">
            Many dogs lick because something physical does not feel right. Identifying patterns helps your veterinarian target the right exam and tests. Below are common medical drivers and the clues owners often notice first.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Allergies (environmental or food)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Paw licking or chewing, face rubbing, ear scratching, armpit itch, groin lick; seasonal flares in spring/summer or year-round indoors.</li>
            <li>Secondary skin infections (red, smelly, greasy) from chronic moisture and self-trauma.</li>
            <li>Response to antihistamines varies; modern plans often include vet-guided anti-itch meds, topicals, baths, diet trials, or immunotherapy.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Parasites &amp; skin infections</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Fleas cause tail-base chewing; mites cause ear/head itch; yeast/bacteria cause odor and redness between toes.</li>
            <li>Even indoor dogs benefit from prevention; ask your vet about options suited to your region and your dog&#39;s health.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pain &amp; orthopedic strain</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Focused licking over joints, hips, knees, or surgical scars; stiffness on waking; reluctance to jump or climb stairs.</li>
            <li>Senior dogs and athletic breeds often benefit from pain assessment, gentle conditioning, and vet-approved anti-inflammatories or adjunct therapies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Nausea, reflux, or dental discomfort</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Lip-licking, gulping, grass eating, drooling, or &quot;air licking&quot; can accompany tummy upset or acid reflux.</li>
            <li>Mouth pain (fractured teeth, gum disease, foreign objects) can trigger facial or paw licking and picky appetite.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Neurologic or hormonal conditions</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Rarely, focal seizures or hormonal disorders alter sensation or skin health; patterns may include sudden, unexplained onset or combined symptoms.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If licking escalates at night, interrupts sleep, or produces a hot spot in hours, contact your veterinary team promptly.
          </div>
        </section>

        {/* Behavioral */}
        <section id="behavioral" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Behavioral &amp; Emotional Factors: Stress, Boredom, and Habit Loops</h2>
          <p className="mb-3">
            Licking can relieve mild stress through rhythmic motion and taste. That can be healthy in moderation, like a short &quot;reset&quot; after visitors leave. It becomes a problem when stress is frequent or when licking becomes your dog&#39;s only tool to cope.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Common behavioral drivers</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Under-stimulation:</strong> not enough sniffing walks, problem-solving, or social time leads dogs to self-entertain with paws or blankets.</li>
            <li><strong>Predictable stressors:</strong> storms, fireworks, busy kids, tense rooms, camera lenses near faces.</li>
            <li><strong>Reinforcement history:</strong> if licking always gets you to look, talk, or touch, it can accidentally become a go-to request.</li>
            <li><strong>Compulsive patterns:</strong> intense, repetitive licking that seems detached from context may require veterinary and behavior support.</li>
          </ul>
          <p className="mb-3">
            The fix is not scolding. Replace stress with skills and boredom with activities. Give your dog a better plan so licking is not the only option.
          </p>
        </section>

        {/* Targets */}
        <section id="targets" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Licking Targets &amp; What They Often Mean</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Paws</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>After walks: cleaning salt, sand, or pollen; solve with rinses and towel dries.</li>
            <li>Between toes: yeast overgrowth or contact irritants; inspect for redness and odor.</li>
            <li>Persistent one-paw focus: thorn, nail crack, or pain; have a professional check.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Flank, belly, or groin</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Allergies love thin-skinned zones; look for pinkness and hair thinning.</li>
            <li>Stress licking after excitement can target soft-fur areas; support rest routines.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Air or surfaces</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Air licking plus gulping can suggest nausea or reflux.</li>
            <li>Carpet or couch licking can be taste exploration, crumbs, or soothing texture; redirect to a safe chew or licking mat.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">People</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Salt and lotions are tasty; check that products are pet-safe.</li>
            <li>Face licks can be affectionate but may be overwhelming; teach an alternative greeting routine for kids and guests.</li>
          </ul>
        </section>

        {/* Decision Tree */}
        <section id="decision-tree" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">At-Home Decision Tree: Calm Steps First</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Pause &amp; observe:</strong> What is being licked? How long? What just happened? Any redness, odor, or flinch?</li>
            <li><strong>Redirect test:</strong> Ask for a sit, offer a favorite toy or chew. Easy switch = likely green/yellow. Hard to switch = look deeper.</li>
            <li><strong>Quick care:</strong> Rinse paws after walks; remove burrs; dry thoroughly; avoid harsh cleaners on floors.</li>
            <li><strong>Log the pattern:</strong> Jot time, weather, activity, food, and outcome for 3–7 days.</li>
            <li><strong>Vet if needed:</strong> Raw spots, ear issues, odor, limping, night-time escalation, gagging, or appetite change deserve a call.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Bring photos and your mini-log to the appointment. Clues shorten the path to relief.
          </div>
        </section>

        {/* Training & Management */}
        <section id="training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Training &amp; Management: Give Better Options</h2>
          <p className="mb-3">
            Replace unhelpful licking with simple, reinforcing routines. The goal is not to suppress all licking; it is to support comfort and calm.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Five practical tools</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Sniff walks:</strong> slower routes with time to investigate; mental work reduces nervous energy.</li>
            <li><strong>Enrichment:</strong> food puzzles, stuffed Kongs, snuffle mats, or safe licking mats during predictable stress windows.</li>
            <li><strong>Relax station:</strong> a mat or bed cue near family activity where calm earns gentle attention.</li>
            <li><strong>Predictable rhythm:</strong> play, potty, training, rest blocks; arousal goes down when routine is clear.</li>
            <li><strong>Kind interruptions:</strong> call away, reward the turn, then offer a chew; avoid scolding, which can increase stress.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">If anxiety drives the pattern</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Pair sound desensitization with calm games; keep sessions short and below threshold.</li>
            <li>Ask your vet about adjuncts for storm season if behavior plans are not enough.</li>
            <li>Build &quot;settle&quot; on a mat with gradual distractions, not jump-cuts to chaos.</li>
          </ul>
        </section>

        {/* Home Care */}
        <section id="home-care" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Home Care Do&#39;s &amp; Don&#39;ts</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Do</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Rinse and dry paws after salty or muddy walks.</li>
            <li>Trim excess fur between toes if your vet or groomer recommends it.</li>
            <li>Use vet-approved wipes or shampoos for itchy skin; follow frequency guidance.</li>
            <li>Offer safe chews and puzzle feeders during evening &quot;witching hour.&quot;</li>
            <li>Keep nails short; long nails change gait and can feed discomfort.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Don&#39;t</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use human creams, ointments, or essential oils unless your vet explicitly approves them. Many are not pet-safe.</li>
            <li>Wrap paws tightly or use cones without guidance; moisture trapped under wraps can worsen skin.</li>
            <li>Punish licking. It may stop in front of you and intensify when you leave.</li>
          </ul>
        </section>

        {/* Special cases */}
        <section id="special-cases" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Puppies, Seniors &amp; Breed Notes</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Explore with mouths and tongues. Teach gentle greetings early and reinforce calm sits for attention.</li>
            <li>Teething adds oral discomfort; chilled safe chews can help.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Arthritis, dental disease, and skin changes increase licking likelihood. Regular vet checks catch quiet problems early.</li>
            <li>Support sleep and traction; discomfort at night often shows up as persistent licking.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Breed &amp; body type notes</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Allergies are common in many breeds and mixes; watch seasonal flair-ups.</li>
            <li>Short-faced dogs may lick and gulp if reflux or airway issues occur; mention patterns to your vet.</li>
          </ul>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Safety &amp; Hygiene: Products, Surfaces, and People</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Lotions &amp; medications:</strong> keep human creams out of reach; even &quot;natural&quot; products can be unsafe if licked.</li>
            <li><strong>Floor cleaners:</strong> avoid strong residues on frequently licked surfaces; rinse per label directions.</li>
            <li><strong>Kids &amp; guests:</strong> teach &quot;stand tall, hands down&quot; if face licks are not desired; reward polite sits.</li>
            <li><strong>Wounds:</strong> a little cleaning is normal, but persistent licking delays healing; ask about protective options.</li>
          </ul>
        </section>

        {/* Boarding & Daycare */}
        <section id="boarding-daycare" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">In Boarding &amp; Daycare Settings: What Staff Watch For</h2>
          <p className="mb-3">
            In group care, staff monitor licking because it can signal discomfort or stress. Brief self-grooming after play is routine; repeated paw chewing, flank focus, or night-time licking prompts a closer look. Facilities document observations, check paws for debris, adjust rest schedules, and notify owners if redness or persistent patterns appear. Clear notes help everyone make good decisions.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Before stays, share allergy history, current meds, and any &quot;typical&quot; licking your dog does at home so staff can distinguish baseline from change.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Is face licking safe?</strong><br />
            Many families allow gentle face licks, but consider hygiene and comfort. Teach a &quot;kiss&quot; cue to put it on request and redirect to a chin scratch or hand target when needed.
          </p>
          <p className="mb-3">
            <strong>Should I use a cone to stop licking?</strong><br />
            A cone is a tool for protecting healing skin, not a long-term fix. Work with your vet to address the cause, then use barriers as briefly as possible with enrichment and rest.
          </p>
          <p className="mb-3">
            <strong>Are licking mats good or bad?</strong><br />
            They are great when used thoughtfully: short sessions with vet-safe spreads, then clean thoroughly. If food sensitivities exist, pick low-ingredient options and monitor stools and skin.
          </p>
          <p className="mb-3">
            <strong>What if my dog licks the air and swallows repeatedly?</strong><br />
            That can point to nausea, reflux, or mouth discomfort. Call your vet, especially if it is new, frequent, or paired with drool or restlessness.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. This article does not replace individualized veterinary care. If you suspect pain, illness, or significant anxiety, contact your veterinary team or a qualified behavior professional.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA) owner resources on skin, dental, and behavior topics.
              <a
                href="https://www.avma.org/resources/pet-owners/petcare"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AVMA
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA) guidelines and client education on dermatology and dental care.
              <a
                href="https://www.aaha.org/your-pet/pet-owner-education/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                AAHA
              </a>
            </li>
            <li>
              Merck Veterinary Manual (consumer &amp; professional articles on dermatology, allergies, and gastrointestinal signs).
              <a
                href="https://www.merckvetmanual.com/dog-owners"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Merck Vet Manual
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA) resources and global standards for clinical care.
              <a
                href="https://wsava.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                WSAVA
              </a>
            </li>
            <li>
              RSPCA &amp; ASPCA guidance on dog body language and humane handling.
              <a
                href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour/bodylanguage"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                RSPCA
              </a>{' '}
              ·
              <a
                href="https://www.aspca.org/pet-care/dog-care/dog-behavior-tips"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                ASPCA
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Work with your veterinary and behavior teams for tailored guidance.
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
