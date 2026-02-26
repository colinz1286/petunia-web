'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreGermanShepherdsAggressiveOrDangerous() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Are German Shepherds Aggressive or Dangerous? A Data-Informed Owner’s Guide to Temperament, Risk, and Real-World Management';
  const date = 'July 21, 2025';
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About &quot;Aggression&quot;</a></li>
            <li><a href="#what-data-say" className="underline hover:opacity-80">What the Data Actually Say</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Breed Temperament (Standards vs. Reality)</a></li>
            <li><a href="#risk-factors" className="underline hover:opacity-80">Risk Factors You Can Influence</a></li>
            <li><a href="#lines" className="underline hover:opacity-80">Working vs. Show Lines: What Matters</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Early Socialization Blueprint (Weeks 3–14)</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training That Reduces Risk</a></li>
            <li><a href="#scenarios" className="underline hover:opacity-80">High-Risk Scenarios &amp; Playbooks</a></li>
            <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems (Home &amp; Facility)</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Printable Checklists</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet or Behaviorist Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-4">
            German Shepherd Dogs (GSDs) are <strong>not inherently dangerous</strong>. Correctly bred and raised GSDs are described by major kennel clubs as confident, courageous, steady, and self-assured—not nervous or over-aggressive. Real-world risk comes from a stack of variables: <strong>genetics</strong>, <strong>early socialization</strong>, <strong>training methods</strong>, <strong>health &amp; pain</strong>, <strong>management</strong>, and <strong>environment</strong>. Because GSDs are large and powerful, poor management can have <em>greater consequences</em> than it might with a small dog. The fix is systematic: pick the right dog, set up the right environment, train with modern reward-based methods, socialize early, and monitor health.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> In your Petunia profile, add a &quot;Behavior &amp; Handling&quot; note for your GSD that lists safe greetings, gear (harness, headcollar, muzzle size if used), triggers to avoid, and your <em>go-to</em> reinforcement plan. Share it with sitters, daycare, and boarding teams so everyone handles your dog the same way.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About &quot;Aggression&quot; (Signals, Context, and Consequences)</h2>
          <p className="mb-3">
            &quot;Aggression&quot; is a <em>behavior category</em>, not a personality verdict. It ranges from subtle threats (hard stare, tense body, freeze, lip lift) to overt actions (growl, lunge, snap, bite). Dogs escalate when they believe a strategy is <em>needed</em> to increase distance, control access, or protect a resource or themselves. Many bites are preceded by missed or suppressed warning signals; punishment for growling can remove the warning while leaving the motivation intact.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Function first:</strong> Ask, &quot;What is the dog trying to achieve?&quot; (increase distance, keep a resource, stop handling, end pain).</li>
            <li><strong>Risk = Probability × Impact:</strong> Big, powerful dogs carry higher <em>impact</em> if a mistake happens. That is why proactive management matters so much with GSDs.</li>
            <li><strong>Behavior is dynamic:</strong> Genetics loads the gun; environment, learning, and health pull or remove the trigger. You can meaningfully shift risk with training, socialization, and veterinary care.</li>
          </ul>
        </section>

        {/* WHAT THE DATA SAY */}
        <section id="what-data-say" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What the Data Actually Say (Beyond Headlines)</h2>
          <p className="mb-3">
            Large, reputable veterinary reviews conclude that <strong>breed alone is a poor predictor</strong> of bite risk in the general population. German Shepherds do appear in many injury datasets—so do mixed breeds and other popular, medium-to-large dogs. But attribution by &quot;breed&quot; is often uncertain (visual ID is frequently wrong), exposure differs by region and popularity, and many high-leverage factors sit with <em>people</em>: selection, socialization, supervision, training method, containment, and care. Major veterinary bodies therefore focus prevention on <em>owner behavior and management</em> rather than breed bans.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm space-y-2">
            <p className="mb-1">
              <strong>In plain terms:</strong> A well-bred, well-handled, healthy GSD with modern training is unlikely to be dangerous. A poorly bred, under-socialized, stressed, or mishandled GSD is a <em>bad idea</em> because size amplifies the consequences of error.
            </p>
            <p className="text-gray-700">
              Evidence anchors: AVMA breed-risk backgrounders; kennel-club standards describing proper GSD temperament; research showing visual breed ID problems; reviews linking fearfulness, poor socialization, and owner factors to aggression; and consensus statements promoting early socialization and reward-based methods.
            </p>
          </div>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Breed Temperament: Standards vs. Real-World Dogs</h2>
          <p className="mb-3">
            Breed standards describe the <em>goal</em> state for temperament. For GSDs that means confident, courageous, even-tempered, and &quot;aloof but not hostile.&quot; Dogs that are nervy, excessively sharp, or chronically fearful are <em>faults</em>, not features. In practice, the population includes excellent dogs, average dogs, and some poor fits. Selection, early handling, and training move the needle.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Confidence, not chaos:</strong> The ideal GSD surveys the world without melting down.</li>
            <li><strong>Stable around novelty:</strong> Sound sensitivity, startle recovery, and bounce-back matter.</li>
            <li><strong>Clear off-switch:</strong> Able to rest in the home when needs are met.</li>
            <li><strong>Task focus:</strong> Bred to work with people; thrives on training plans.</li>
          </ul>
        </section>

        {/* RISK FACTORS */}
        <section id="risk-factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risk Factors You Can Influence</h2>
          <p className="mb-3">
            You cannot change a dog&apos;s genome, but you can change nearly everything else. The following variables, supported by veterinary behavior literature, consistently shift risk up or down:
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">1) Early Socialization &amp; Familiarity</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Windows matter:</strong> Weeks 3–14 are uniquely sensitive for puppies; structured, positive exposures now pay dividends for life.</li>
            <li><strong>Quality over quantity:</strong> Calm, controlled pairings with kind people and stable dogs beat chaotic dog-park marathons.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Training Method &amp; Handling</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Reward-based training reduces risk:</strong> It builds desired behavior without adding fear or frustration.</li>
            <li><strong>Aversives raise collateral risk:</strong> Tools or tactics that cause pain, startle, or intimidation can suppress warnings and increase fallout.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Health, Pain, and Neurobiology</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pain (orthopedic disease, otitis, dental pain), endocrine issues, neurologic disease, and GI discomfort can all fuel irritability or aggression. New behavior change warrants a vet exam.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Acquisition &amp; Early Rearing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppies from sources with poor selection or limited early handling have higher behavior risk on average. Ask breeders for temperament testing, parent video in novel settings, and verified exposure plans.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Age, Sex, Hormones</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Adolescence is the &quot;rowdy&quot; season; expect boundary testing. Evidence on neuter and aggression is mixed; make decisions with your veterinarian for the individual dog.</li>
          </ul>
        </section>

        {/* LINES */}
        <section id="lines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Working vs. Show Lines: What Matters (and What Does Not)</h2>
          <p className="mb-3">
            You will hear &quot;working line&quot; and &quot;show line&quot; shorthand. These labels correlate loosely with selection priorities, but they do not guarantee behavior. What you can evaluate:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Stable nerves in public:</strong> Watch both parents in busy environments.</li>
            <li><strong>Recovery time:</strong> How quickly do they return to baseline after a startle?</li>
            <li><strong>Handler engagement:</strong> Do they choose people when unsure?</li>
            <li><strong>Pro-social interest:</strong> Curious, not compulsively confrontational.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Regardless of line, avoid exaggerated reactivity, chronic suspiciousness, and brittle stress responses. A powerful dog without stability is not a &quot;feature&quot;—it is a liability.
          </p>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Socialization Blueprint (Weeks 3–14)</h2>
          <p className="mb-3">
            The goal is a dog that chooses people, recovers quickly, and generalizes calm behavior. Use short, positive sessions. Track exposures in a simple spreadsheet or your Petunia note.
          </p>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li><strong>People variety:</strong> Ages, sizes, clothing, mobility aids, hats, masks, gentle handling drills.</li>
            <li><strong>Dogs:</strong> Known, vaccinated, behaviorally stable adults; one-on-one, then small groups. No chaotic free-for-alls.</li>
            <li><strong>Surfaces &amp; places:</strong> Vet clinic happy visits, parks (edge work), hardware store courtyards, car rides.</li>
            <li><strong>Noises:</strong> Recorded city sounds, appliances, fireworks at low levels paired with food.</li>
            <li><strong>Cooperative care:</strong> Touch paws, lift lips, brief restraint, mouth &amp; ear checks, wear a basket muzzle as a trick for cookies.</li>
          </ol>
          <p className="text-sm text-gray-700">
            Keep sessions under threshold; if eating stops or body goes stiff, you are too close or too long. Step back, feed, and try an easier version later.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training That Reduces Risk (Evidence-Based, Reward-Based)</h2>
          <p className="mb-3">
            Modern, reward-based training gives you reliable behavior without adding fear. It is the default recommended by veterinary behavior organizations.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Core skills:</strong> Name recognition, hand target, settle on mat, leave-it, recall, loose-leash, cooperative care.</li>
            <li><strong>Pattern games:</strong> Predictable, low-arousal routines to move past triggers (find-it, 1-2-3 game, treat-and-retreat).</li>
            <li><strong>Decompression:</strong> Daily sniff walks, food-puzzle meals, species-normal outlets (shredding boxes, flirt pole with rules).</li>
            <li><strong>Management beats willpower:</strong> Gates, tethers, crates as &quot;parking brakes&quot; during setups with guests and deliveries.</li>
          </ul>
        </section>

        {/* SCENARIOS */}
        <section id="scenarios" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">High-Risk Scenarios &amp; Playbooks</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kids at Home</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use &quot;two-zone&quot; living: kid zone and dog zone separated by gates. Rotate freedom with supervision; never rely on &quot;he would never.&quot;</li>
            <li>Teach &quot;1-2-3 freeze&quot; to kids: stop, stand tall, call an adult. Reward the dog for moving to a mat when kids are active.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Doorways &amp; Strangers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pre-place leash, treats, and a station mat near the door. Cue &quot;place,&quot; toss food, then crack the door. If arousal spikes, park the dog behind a gate first.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Dog-Dog Frustration on Leash</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Switch routes to widen space. Use &quot;find-it&quot; as the other dog passes. Reward eye contact and breathing. Skip greetings until training sticks.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Resource Guarding</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Trade-up protocol only; no forced removal. Toss high-value food away from the item and mark calm body language. Secure trash and laundry.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pain or Sudden Behavior Change</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Book a vet exam first. Pain and illness are common accelerants. After medical workup, ask for a behavior referral.</li>
          </ul>
        </section>

        {/* OPERATOR SYSTEMS */}
        <section id="operator-systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems (Home &amp; Facility)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Selection Protocol (Before You Buy or Adopt)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>See both parents or credible video in novel places. Look for curiosity and quick recovery, not &quot;hardness.&quot;</li>
            <li>Ask for health testing (hips, elbows) and a written socialization plan from breeder or rescue.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Home Safety &amp; Containment</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Fencing audit: latch integrity, visual barriers where trigger exposure is high, double-gate for front entries.</li>
            <li>Gear: well-fitted Y-harness; front-clip option; basket muzzle conditioned as a &quot;party hat&quot; for vet/ER or crowded events.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Handling SOPs for Visitors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Pre-place &quot;parking&quot; station mats. Visitors toss treats <em>away</em> from body. No leaning, looming, or forced petting.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Facility Playbook (Daycare/Boarding/Rescue)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Structured intake: history on triggers, handling preferences, and cooperative-care skills; green/yellow/red handling cards on runs.</li>
            <li>Staff training: reward-based handling only; no leash pops or intimidation. Clear escalation ladder and &quot;tap out&quot; option.</li>
            <li>Environment: visual barriers, quiet zones, &quot;reset&quot; walks, and a muzzle-positive culture for medical or transport needs.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Printable Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppy &amp; New-Adopt Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Book vet exam; start cooperative care; create reward list; fit harness; begin crate &amp; mat training.</li>
            <li>Plan 30–60 controlled exposures per week (3–14 weeks for puppies, slower for adults), logged with notes.</li>
            <li>Enroll in reward-based class; avoid trainers who talk &quot;dominance&quot; or rely on fear/pain tools.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Red-Flag Watchlist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Persistent startle, shutdown, prolonged hard stare, freezing, cornering guests, or repeated &quot;air snaps.&quot;</li>
            <li>Guarding escalates despite trade-ups; leash reactivity worsening; intolerance of touch emerges.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pro Help Directory Shortcuts</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Board-certified veterinary behaviorists (ACVB).</li>
            <li>Certified behavior consultants (IAABC) and certified trainers (CCPDT).</li>
          </ul>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet or Behaviorist Now</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Sudden behavior change:</strong> especially with pain signs, sleep changes, or sensitivity to touch.</li>
            <li><strong>Escalation:</strong> growls → snaps → contact bites; any bite that breaks skin needs a professional plan.</li>
            <li><strong>Fear that does not recover:</strong> prolonged shutdown, unwilling to take food in safe settings.</li>
            <li><strong>Household safety concerns:</strong> kids, frail adults, or frequent visitors with unmanaged triggers.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are GSDs &quot;more aggressive&quot; than other breeds?</strong><br />
            Population studies show GSDs appear regularly in bite datasets, but breed alone is a weak predictor. Prevalence is influenced by popularity and dog size; risk reflects socialization, training method, handling, containment, and health. Focus on controllable factors and stable lines.
          </p>

          <p className="mb-3">
            <strong>Do muzzles mean a dog is dangerous?</strong><br />
            No. A well-conditioned basket muzzle is like a seatbelt—smart safety for vet visits, crowded spaces, or rehab plans.
          </p>

          <p className="mb-3">
            <strong>Will neutering &quot;fix&quot; aggression?</strong><br />
            Not reliably. Evidence is mixed and context-dependent. Discuss timing and goals with your veterinarian; address training and management regardless.
          </p>

          <p className="mb-3">
            <strong>Should I avoid working lines?</strong><br />
            Not automatically. Evaluate individual parents and puppies for stability, recovery, and handler focus. Choose the dog that fits your lifestyle and experience.
          </p>

          <p>
            <strong>Can a fearful adolescent be &quot;turned around&quot;?</strong><br />
            Often, yes—if you act early. Pair a medical check with a reward-based behavior plan from a qualified professional.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA). <em>The Role of Breed in Dog Bite Risk and Prevention</em> (literature reviews, backgrounders).{' '}
              <a href="https://www.avma.org/sites/default/files/resources/Welfare-Implications-of-the-role-of-breed.pdf" target="_blank" rel="noopener noreferrer">
                avma.org &mdash; Welfare Implications (2012)
              </a>{' '}
              and{' '}
              <a href="https://www.avma.org/sites/default/files/resources/dog_bite_risk_and_prevention_bgnd.pdf" target="_blank" rel="noopener noreferrer">
                dog_bite_risk_and_prevention_bgnd.pdf (2014)
              </a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). <em>Position Statement on Humane Dog Training</em> (2021).{' '}
              <a href="https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf" target="_blank" rel="noopener noreferrer">
                avsab.org
              </a>
            </li>
            <li>
              AVSAB. <em>Position Statement on Puppy Socialization</em> (updates; early socialization emphasis).{' '}
              <a href="https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf" target="_blank" rel="noopener noreferrer">
                avsab.org
              </a>
            </li>
            <li>
              AKC &amp; The Kennel Club breed standards for temperament.{' '}
              <a href="https://images.akc.org/pdf/breeds/standards/GermanShepherdDog.pdf" target="_blank" rel="noopener noreferrer">
                AKC Standard: German Shepherd Dog
              </a>{' '}
              &middot;{' '}
              <a href="https://www.thekennelclub.org.uk/breed-standards/pastoral/german-shepherd-dog/" target="_blank" rel="noopener noreferrer">
                The Kennel Club (UK): German Shepherd Dog
              </a>
            </li>
            <li>
              Gunter LM et&nbsp;al. <em>Genetic breed heritage testing of shelter dogs</em> (visual ID limitations).{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6107223/" target="_blank" rel="noopener noreferrer">
                PLOS ONE (2018)
              </a>
            </li>
            <li>
              Olson KR et&nbsp;al. <em>Inconsistent identification of pit bull-type dogs by shelter staff</em> (inter-rater reliability).{' '}
              <a href="https://www.sciencedirect.com/science/article/pii/S109002331500310X" target="_blank" rel="noopener noreferrer">
                The Veterinary Journal (2015)
              </a>
            </li>
            <li>
              Mikkola S et&nbsp;al. <em>Aggressive behaviour is affected by demographic and environmental factors</em>.{' '}
              <a href="https://www.nature.com/articles/s41598-021-88793-5" target="_blank" rel="noopener noreferrer">
                Scientific Reports (2021)
              </a>
            </li>
            <li>
              Puurunen J et&nbsp;al. <em>Inadequate socialisation, inactivity, and urban living are associated with social fearfulness in pet dogs</em>.{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7044223/" target="_blank" rel="noopener noreferrer">
                Scientific Reports (2020)
              </a>
            </li>
            <li>
              AAHA. <em>Canine &amp; Feline Behavior Management Guidelines</em>.{' '}
              <a href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/behavior-management/2015_aaha_canine_and_feline_behavior_management_guidelines_final.pdf" target="_blank" rel="noopener noreferrer">
                aaha.org (2015)
              </a>
            </li>
            <li>
              Kim SE et&nbsp;al. <em>Bite Forces and Their Measurement in Dogs and Cats</em> (size, skull, and bite force relationships).{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5932386/" target="_blank" rel="noopener noreferrer">
                Frontiers in Veterinary Science (2018)
              </a>
            </li>
            <li>
              Howell H et&nbsp;al. <em>Risk factors for human-directed aggression by dogs: The human side of the problem</em> (systematic review).{' '}
              <a href="https://www.sciencedirect.com/science/article/pii/S0168159125000504" target="_blank" rel="noopener noreferrer">
                Applied Animal Behaviour Science (2025)
              </a>
            </li>
            <li>
              AVMA. <em>Socialization of dogs and cats</em> (timing; owner guidance).{' '}
              <a href="https://www.avma.org/resources-tools/animal-health-and-welfare/socialization-dogs-and-cats" target="_blank" rel="noopener noreferrer">
                avma.org
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for individualized veterinary or behavior care. If you are concerned about safety, contact your veterinarian or a board-certified veterinary behaviorist.
          </p>
        </section>

        {/* Related German Shepherd Articles */}
        <div className="mt-16 border-t border-[#d9cfc2] pt-8">
          <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">
            More German Shepherd Guides You May Like
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/fun-facts-about-german-shepherds"
                className="underline hover:opacity-80"
              >
                Fun Facts About German Shepherds
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/do-german-shepherds-shed-a-lot"
                className="underline hover:opacity-80"
              >
                Do German Shepherds Shed a Lot?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-long-do-german-shepherds-live"
                className="underline hover:opacity-80"
              >
                How Long Do German Shepherds Live?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/how-much-does-a-german-shepherd-cost"
                className="underline hover:opacity-80"
              >
                How Much Does a German Shepherd Cost?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/are-german-shepherds-good-with-kids"
                className="underline hover:opacity-80"
              >
                Are German Shepherds Good with Kids?
              </Link>
            </li>

            <li>
              <Link
                href="https://www.petuniapets.com/en/blog/what-health-problems-are-common-in-german-shepherds"
                className="underline hover:opacity-80"
              >
                What Health Problems Are Common in German Shepherds?
              </Link>
            </li>
          </ul>
        </div>
        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
