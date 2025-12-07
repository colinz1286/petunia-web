'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoDogsChewOnSticks() {
  const locale = useLocale();

  const title = 'Why Do Dogs Chew on Sticks? Instincts, Dental Health, Safety Risks, and Better Alternatives';
  const date = 'August 28, 2025';
  const categories = ['owner', 'training', 'vet', 'daycare', 'boarding'] as const;

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
    training: 'Training',
  };

  const description =
    'A deep dive into why dogs chew on sticks: instincts, teething biology, sensory feedback, boredom relief, taste and texture, and environmental triggers. Covers dental-health realities (plaque, calculus, gum care), risk assessment (splinters, toxins, obstructions), safer alternatives, training protocols to redirect, enrichment blueprints, and practical checklists.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/why-do-dogs-chew-on-sticks`}
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
            <li><a href="#why" className="underline hover:opacity-80">Why Sticks? Core Reasons</a></li>
            <li><a href="#sensory" className="underline hover:opacity-80">Teeth, Gums &amp; Sensory Feedback</a></li>
            <li><a href="#dental" className="underline hover:opacity-80">Dental Health 101</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Risks of Stick Chewing</a></li>
            <li><a href="#which-woods" className="underline hover:opacity-80">Which Woods Are Riskier?</a></li>
            <li><a href="#alternatives" className="underline hover:opacity-80">Safer Chew Alternatives</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training: Redirect Without Drama</a></li>
            <li><a href="#enrichment" className="underline hover:opacity-80">Enrichment Systems That Work</a></li>
            <li><a href="#age" className="underline hover:opacity-80">Age &amp; Breed Considerations</a></li>
            <li><a href="#first-aid" className="underline hover:opacity-80">First Aid: If a Stick Causes Trouble</a></li>
            <li><a href="#care-routine" className="underline hover:opacity-80">Daily Care &amp; Dental Routine</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">Boarding/Daycare Playbook</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists &amp; Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              Dogs chew on sticks because sticks are everywhere, shaped for carrying, smell like the outdoors, and offer satisfying texture and feedback when teeth compress and fibers crackle. Puppies seek sticks during teething for gum relief, adult dogs grab them for fun or boredom relief, and some simply love the taste and moisture of sap and bark. But sticks splinter, can lodge between teeth or in the palate, and some woods or treatments raise toxicity and mold concerns. If your dog loves sticks, redirect to safer chews, build an enrichment plan, and keep a simple dental routine: daily brushing or dental chew, plus professional cleanings as your veterinarian recommends.
            </p>
            <p className="mb-0">
              Call your veterinarian if you see gagging, pawing at the mouth, bleeding, broken teeth, facial swelling, coughing after yard play, or if your dog seems painful while chewing or opening the mouth.
            </p>
          </div>
        </section>

        {/* WHY STICKS */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Sticks? Core Reasons Dogs Are Drawn to Them</h2>
          <p className="mb-3">
            Sticks are the outdoors&#39; original chew toy: abundant, free, portable, and full of smells. For many dogs, the appeal is a combination of instinct, texture, taste, and context. Understanding these drivers makes it easier to prevent problems and meet the same needs with safer tools.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Chewing Is Normal Canine Behavior</h3>
          <p className="mb-3">
            Chewing is a self-reinforcing behavior. It soothes, focuses, and gives a dog a job. Wolves and free-ranging dogs spend time processing tough materials that deliver a similar oral workout. In modern homes, dogs improvise. A fallen branch has the right size, resistance, and novelty to satisfy that urge.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Teething &amp; Gum Relief</h3>
          <p className="mb-3">
            Puppies replace baby teeth with adult teeth between roughly 3 and 6 months. During this window, gums feel itchy or uncomfortable. Chewing increases local blood flow and provides counterpressure. A damp, cool stick can feel good, even if it is not the safest choice. Without guidance, puppies generalize that any stick is fair game.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Texture, Sound &amp; Taste</h3>
          <p className="mb-3">
            Sticks have layers: bark, pith, knots, sap pockets. When canine teeth compress fibers, they produce faint crackles and resistance shifts that many dogs find compelling. Bark has earthy, plant, and fungal scents. Fresh twigs may be slightly sweet or tangy. This sensory cocktail is hard to compete with unless you offer a toy or chew that delivers similarly rich feedback.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Fetch &amp; Carry Instincts</h3>
          <p className="mb-3">
            Many dogs love to carry long objects. A stick is a ready-made baton for victory laps. This rehearsal can accidentally reinforce stick obsession: you chase the dog to get the stick back, and the dog learns that sticks make humans play. The cure is not to be less fun; it is to be fun with the <em>right</em> object and to trade up without drama.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Boredom &amp; Under-Employment</h3>
          <p className="mb-3">
            Dogs are smart. If a walk lacks problem-solving or sniffing opportunities, many will self-assign. Chewing a stick provides a mission and a reward. Enrichment solves this: more sniffing, searching, shredding of safe items, and food puzzles translates to fewer stick fixations.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">6) Oral Exploration</h3>
          <p className="mb-3">
            Dogs investigate with their mouths like human toddlers use hands. Sticks are high-signal objects: they move, splinter, and smell strongly of other animals and plants. Curious dogs sample and decide. Your job is to shape those choices toward safe options consistently and kindly.
          </p>
        </section>

        {/* SENSORY & GUMS */}
        <section id="sensory" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Teeth, Gums &amp; Sensory Feedback: Why Chewing Feels Good</h2>
          <p className="mb-3">
            The mouth is a high-density sensory zone. Pressure from chewing activates periodontal ligament receptors and jaw proprioceptors. For a dog, this input is calming and focusing. Add mechanical scraping that dislodges soft plaque and the result is a behavior that both feels good and sometimes appears to clean teeth. The catch: wood can splinter and carry soil microbes that gums do not love.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Gum Stimulation &amp; Saliva</h3>
          <p className="mb-3">
            Gentle pressure increases gingival blood flow. Chewing also boosts saliva, which buffers mouth pH and helps wash away food particles. These are real benefits. However, splinters can puncture gums and trap bacteria, turning a good thing into an abscess risk. The solution is not to ban chewing; it is to guide it toward safer surfaces and add a simple home-care routine.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Teething Biology</h3>
          <p className="mb-3">
            As adult teeth erupt, puppies naturally seek counterpressure. Cold, soft-to-moderate resistance chews are ideal: rubber toys filled with frozen broth slush, damp cloth twists briefly frozen, or purpose-made puppy dental chews. Hard or abrasive materials can chip or prematurely wear developing enamel. Sticks are enticing but inconsistent; some are soft and pulpy, others knotty and rock-hard, all with splinter risk.
          </p>
        </section>

        {/* DENTAL HEALTH */}
        <section id="dental" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dental Health 101: Plaque, Calculus, Periodontal Disease</h2>
          <p className="mb-3">
            Within hours after eating, a soft biofilm forms on teeth. This is plaque: bacteria, salivary proteins, and food residues. If not disrupted, minerals turn plaque into hard calculus. Calculus shelters more bacteria at the gumline, triggering inflammation. Over time, gingivitis can progress to periodontitis, which damages supporting tissues and bone. Signs include bad breath, red or receding gums, bleeding after chew sessions, drooling, pawing at the mouth, and decreased interest in hard toys or foods.
          </p>
          <p className="mb-3">
            The gold standard home tool is daily brushing with a pet-safe toothpaste. Many families cannot do daily brushing; that is okay, but aim for better-than-nothing: several brushings per week, plus a vetted dental chew or dental diet as your veterinarian recommends. Professional cleanings under anesthesia remove calculus below the gumline where it matters most.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Does Chewing Clean Teeth?</h3>
          <p className="mb-3">
            Mechanical chewing can reduce <em>soft</em> plaque on crown surfaces, especially on the back teeth that do the most work. But chewing is not precise, and the areas that need the most help are often right at or under the gumline. Also, many beloved chewing items are either too hard (risking fractures) or too soft (providing entertainment but minimal cleaning). Use chewing as one pillar in a dental plan, not the whole plan.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Gum Health &amp; Products</h3>
          <p className="mb-3">
            Look for products with credible veterinary backing and safety testing. For chews, favor items designed to flex and scrape without chipping teeth. Rinses and gels can help with halitosis and bacterial load, but they do not replace brushing. Diets formulated for oral health use kibble shapes and fiber networks to create a brushing-like action while the dog eats. Always introduce new products gradually and monitor your dog&#39;s mouth for any irritation.
          </p>
        </section>

        {/* RISKS */}
        <section id="risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Risks of Stick Chewing: What Can Go Wrong</h2>
          <p className="mb-3">
            Many dogs chew sticks for years without issue, but when problems occur, they can be dramatic or expensive. The goal of this section is not fear, but awareness and prevention. If you understand the failure modes, you can design better habits without turning every walk into a scolding session.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Splinters:</strong> tiny to large wood shards can wedge in gums, the tongue, or between molars. Symptoms include pawing at the mouth, drooling, bleeding, reluctance to chew, or sudden head shaking.</li>
            <li><strong>Palate stick:</strong> a small twig can lodge crosswise between upper molars across the roof of the mouth. Dogs may paw frantically or rub their face. Removal is usually simple but can be stressful.</li>
            <li><strong>Penetrating injuries:</strong> running with a long stick can drive it into the soft palate or throat, risking deep-tissue damage or infection.</li>
            <li><strong>Obstruction:</strong> swallowing chunks can cause choking or intestinal blockage. Signs include gagging, repeated swallowing, vomiting, painful abdomen, or loss of appetite.</li>
            <li><strong>Toxins &amp; treatments:</strong> some woods are naturally irritating, some branches carry fungi or molds, and landscape timbers may be treated with chemicals not meant for chewing.</li>
            <li><strong>Dental fractures:</strong> extremely hard knots can crack a tooth, exposing the pulp and causing painful infections that may require root canal or extraction.</li>
            <li><strong>Infection:</strong> dirty sticks carry soil bacteria. A micro-splinter under the gum can seed an abscess. Watch for focal swelling, heat, pain, or a draining tract on the face.</li>
          </ul>
          <p>
            If your dog is a dedicated stick chewer, choose proactive strategies: teach trades, carry a favorite toy, and add a chew routine at home that satisfies the same need safely.
          </p>
        </section>

        {/* WHICH WOODS */}
        <section id="which-woods" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Which Woods Are Riskier?</h2>
          <p className="mb-3">
            Wood species differ in hardness, resin content, and how they splinter. This is a simplified caution map; it is not a license to offer any tree part as a chew.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Stone fruit trees</strong> (cherry, peach, apricot, plum): parts can contain cyanogenic compounds; wilted leaves are especially concerning. Avoid.</li>
            <li><strong>Black walnut</strong>: juglone and mold concerns; avoid.</li>
            <li><strong>Oleander, yew, laburnum</strong>: highly toxic ornamentals; avoid entirely.</li>
            <li><strong>Conifers</strong> (pine, spruce, fir): resin can irritate; fallen cones and sappy twigs splinter. Avoid chewing.</li>
            <li><strong>Oak</strong>: tannins can irritate the gut; acorns are a different and notable hazard. Avoid habitual chewing.</li>
            <li><strong>Maple &amp; birch</strong>: variable hardness; can still splinter. Not recommended as chews.</li>
          </ul>
          <p>
            Even if a species is not listed here, outdoor wood is unpredictable: moisture, fungi, pesticides, and lawn chemicals ride along. Design your plan around <em>avoiding stick chewing</em> rather than trying to pick a safe branch.
          </p>
        </section>

        {/* ALTERNATIVES */}
        <section id="alternatives" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safer Chew Alternatives: Match the Need, Not Just the Shape</h2>
          <p className="mb-3">
            The trick to replacing sticks is to match what your dog loves about them: mouth-feel, mild resistance, shreddability, and novelty. Offer a stable of options and rotate to keep engagement high. Supervise new items until you know how your dog interacts with them.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Purpose-Built Rubber Toys</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Choose sizes that cannot be swallowed. The toy should bulge the cheeks slightly when the dog bites down.</li>
            <li>For teething puppies, use softer rubber lines and consider freezing with wet kibble or broth slurry to soothe gums.</li>
            <li>For adult power chewers, choose tougher compounds and inspect toys weekly for splits or missing chunks.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Dental Chews with Evidence</h3>
          <p className="mb-3">
            Look for dental chews with credible veterinary vetting. These products are designed to be chewed down gradually and to provide abrasion that reduces soft plaque while minimizing fracture risk. Follow package guidance on size and daily quantity, and supervise until you know your dog&#39;s style.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Fabric &amp; Rope-Like Toys (Supervised)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Offer during interactive play or short independent sessions. Remove if threads begin to unravel; swallowed strings can cause intestinal trouble.</li>
            <li>For teething relief, dampen and briefly freeze a clean cloth twist; remove as it thaws to avoid fraying ingestion.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Edible Chews (Know Your Dog)</h3>
          <p className="mb-3">
            Bully sticks, collagen chews, and certain digestible dental treats can satisfy chewing urges while adding calories. Choose a size that is longer than your dog can swallow whole, and consider a chew holder to prevent gulping the last piece. Introduce slowly to avoid stomach upset. Avoid ultra-hard items like weight-bearing beef bones and baked marrow bones that commonly crack teeth.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5) Food Puzzles &amp; Stuffable Toys</h3>
          <p className="mb-3">
            Sticks offer problem-solving. You can do the same by stuffing a rubber toy with part of your dog&#39;s meal, layered with a smear of canned food. Freeze for longer sessions. This approach turns chewing into a feeding ritual that builds calm and focus.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Safety note:</strong> Any chew can be unsafe for a particular dog. Supervise new items, match size to your dog, and retire worn gear. When in doubt, ask your veterinarian about materials and hardness relative to your dog&#39;s dental history.
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training: Redirect Without Drama</h2>
          <p className="mb-3">
            You cannot nag a dog out of loving sticks. You can teach a reliable chain: see stick → choose you → trade for better → enjoy permitted chew. Keep it light and generous early on. Over time, dogs learn that releasing found objects makes life more fun, not less.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Trade Game (Foundation)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Start indoors with a low-value toy. Say your cheerful cue (e.g., &#34;trade&#34;), present a tiny treat at your dog&#39;s nose, and let them spit the toy to take the treat. Then give the toy back. Repeat until releasing is automatic.</li>
            <li>Move to the yard with a stick stand-in (a safe toy). Build to real-life walks where you reward the release and then present your preferred fetch toy for a fun replacement game.</li>
            <li>Do not chase. Chasing teaches keep-away. Instead, use the conditioned trade cue and calmly step on a long line if needed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Leave It (Impulse Control)</h3>
          <p className="mb-3">
            Teach in stages: mark eye contact away from the item, pay fast, and then release to something else that is allowed. Leave It is not a scold; it is a promise that skipping one option leads to a better one. Add distance and duration gradually. Pair with environmental management (walks free of storm debris after heavy winds).
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Structured Fetch</h3>
          <p className="mb-3">
            If your dog loves the carry-and-chomp part of sticks, channel it into fetch with safe toys. Teach a clean hold: mouth the toy, still body, then release to hand on cue. Reinforce the <em>release</em> heavily; that is the behavior that keeps you in control when the environment throws tempting objects at your dog.
          </p>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Enrichment Systems That Work (So Sticks Lose Their Shine)</h2>
          <p className="mb-3">
            Chewing is one category in a larger enrichment menu: sniffing, shredding, searching, solving, and social play. Build a weekly rotation that honors your dog&#39;s preferences and energy. Stick interest drops when needs are met in more satisfying ways.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Sniff walks:</strong> slow, nose-led routes. Let your dog read the world. Ten minutes of focused sniffing often calms better than a long, fast march.</li>
            <li><strong>Scatter feeding:</strong> toss part of breakfast in short grass or on a snuffle mat. Nose work scratches an ancient itch.</li>
            <li><strong>Shreddables:</strong> supervised tear-apart tasks using safe cardboard or commercial shredding toys. The goal is to fulfill the need to dismantle <em>without</em> practicing wood chewing.</li>
            <li><strong>Food puzzles:</strong> rotate two or three designs to prevent routine boredom. Increase challenge as your dog gains skill.</li>
            <li><strong>Calm social play:</strong> cooperative tug with rules (take, drop, play resumes) channels arousal productively.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Save an enrichment calendar in Petunia that cycles sniff walks, puzzles, and chew sessions. Share it with family and sitters so the plan persists during busy weeks.
          </div>
        </section>

        {/* AGE & BREED */}
        <section id="age" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Age &amp; Breed Considerations</h2>
          <p className="mb-3">
            Not all chewers are the same. Age, skull shape, bite strength, and prior experiences shape preferences and risk. Calibrate your plan to the dog in front of you.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Prioritize soft-to-medium resistance items with some give. Briefly frozen options soothe gums. Avoid ultra-hard chews during eruption.</li>
            <li>Do micro-sessions: two to five minutes multiple times per day. End while the puppy still wants more.</li>
            <li>Supervise outdoors. Reinforce trades and bring a favorite toy on walks so you are not empty-handed when a stick appears.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adults</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Audit dental history. If your dog has worn or fractured teeth, choose softer chews and emphasize food puzzles and training games.</li>
            <li>Increase mental work: scent games, platform training, and structured fetch reduce stick obsession by giving the mouth a job on cue.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Gums may be sensitive, teeth may be missing, and jaw endurance lower. Offer plush-texture chews, gentle rubber toys, and dental diets recommended by your veterinarian.</li>
            <li>Increase mouth checks. Seniors can silently suffer with oral pain and may suddenly favor softer, smelly sticks if gums hurt. That is a clue to schedule an exam.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Breed &amp; Skull Shape</h3>
          <p className="mb-3">
            Flat-faced breeds may fatigue quickly in hot weather or during intense tug sessions. Long-nosed breeds often love scenting games that outcompete stick time. Power-chewer types need durable but tooth-safe gear with very close supervision the first week of a new item. Toy breeds are at higher risk for choking on small fragments; scale everything up in size relative to the mouth.
          </p>
        </section>

        {/* FIRST AID */}
        <section id="first-aid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First Aid: If a Stick Causes Trouble</h2>
          <p className="mb-3">
            If your dog is pawing at the mouth, drooling, bleeding, gagging, or suddenly cannot close the mouth comfortably, act promptly.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Calmly secure your dog. Avoid putting your fingers deep into the mouth; frightened dogs can bite accidentally.</li>
            <li>Look for a crosswise twig on the hard palate. If visible and <em>very</em> easy to remove with two fingers, do so. If not, transport to your veterinarian or an emergency clinic.</li>
            <li>For bleeding gums or suspected splinters, veterinary care is wise. Small splinters left behind can seed infection.</li>
            <li>For suspected swallowing of chunks: watch for vomiting, repeated retching, painful belly, or lethargy. If any appear, seek care immediately.</li>
          </ul>
          <p>
            When in doubt, professional evaluation beats waiting. Early intervention usually means simpler, less costly solutions.
          </p>
        </section>

        {/* CARE ROUTINE */}
        <section id="care-routine" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Daily Care &amp; Dental Routine (Simple, Repeatable)</h2>
          <p className="mb-3">
            The easiest way to lower stick fixation is to add a deliberate chew and dental routine at home. Dogs that chew <em>on schedule</em> are often less motivated to scavenge during walks.
          </p>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li><strong>Morning:</strong> quick brush of teeth or a dental chew after breakfast. Two minutes is enough. Record what you used in your Petunia routine.</li>
            <li><strong>Midday:</strong> five-minute puzzle feeder or stuffed rubber toy. Calm, solo activity teaches self-settling.</li>
            <li><strong>Evening:</strong> supervised chew session with your chosen safe item. End while enthusiasm is high; trade for a treat and store the chew until tomorrow.</li>
          </ol>
          <p>
            Add a <em>weekly</em> mouth check: lift lips and look at gum color, note any redness along the gumline, sniff for strong odor, and touch each tooth lightly with a fingernail to sense sensitivity. If anything changes, schedule a veterinary checkup.
          </p>
        </section>

        {/* BOARDING/DAYCARE */}
        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding/Daycare Playbook: Keep the Plan Consistent</h2>
          <p className="mb-3">
            Facilities can help. Send your safe chew list and rules: what is allowed, what to avoid, and how to handle found sticks on yard time. Ask providers to note mouth pawing, drooling, or sudden avoidance of chew toys, and to alert you the same day. Provide your dog&#39;s preferred trade cue and the name of their go-to replacement toy.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ask for yard sweeps after storms when branches fall.</li>
            <li>Request supervised chew windows using your provided items, followed by calm rest.</li>
            <li>Ensure water is offered frequently during play; hydrated mouths stay happier and healthier.</li>
          </ul>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists &amp; Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home Chew Safety Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Two to three approved chews sized larger than your dog can swallow whole.</li>
            <li>Rotate daily; retire items with cracks, sharp edges, or missing chunks.</li>
            <li>Dental plan: brush 3–7 days per week or use a vetted dental chew on non-brush days.</li>
            <li>Enrichment mix: sniff walk, food puzzle, short supervised shred session weekly.</li>
            <li>Post-storm yard check for fresh branches; pick up before dog time.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Walking Script (Trade &amp; Redirect)</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Dog grabs stick → say cheerful &#34;trade&#34; and present treat at nose level.</li>
            <li>Dog drops stick → mark &#34;yes&#34; and feed treat → immediately present favorite fetch toy.</li>
            <li>Throw toy once or twice → leash resume → praise for re-engaging with you.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Veterinary Conversation Starters</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Given my dog&#39;s dental history, which chew hardness is appropriate?</li>
            <li>How often should we plan professional cleanings?</li>
            <li>Do you recommend a specific dental diet or additive for my dog?</li>
            <li>Any concerns with our current chew routine based on exam findings?</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> Turn these checklists into a routine with reminders. Attach photos of worn chews and mouth checks so patterns are easy to review with your veterinarian.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is it ever okay to let my dog chew a stick?</strong><br />
            Outdoor improvisation happens. The safer path is to trade quickly and offer a permitted item. Habitual stick chewing raises the risk of splinters, oral injuries, and gut problems. Build a plan that makes the right choice easy.
          </p>

          <p className="mb-3">
            <strong>What hardness is safe for chews?</strong><br />
            A practical rule: if you cannot make a dent with a fingernail or if the chew would hurt to hit your own kneecap, it may be too hard. Individual risk varies; ask your veterinarian based on your dog&#39;s teeth.
          </p>

          <p className="mb-3">
            <strong>Do antlers or hooves count as safe wood alternatives?</strong><br />
            They are natural, but commonly chip or fracture teeth due to hardness. Many veterinarians discourage them for that reason. Choose items that flex slightly under bite pressure.
          </p>

          <p className="mb-3">
            <strong>Can a dental chew replace brushing?</strong><br />
            It helps, but brushing is still the best way to disrupt plaque at the gumline. Aim for both if possible, or at least several brushings weekly plus a vetted chew on off days.
          </p>

          <p className="mb-3">
            <strong>My dog swallowed a small stick piece but seems fine. What should I watch for?</strong><br />
            Watch for vomiting, repeated retching, decreased appetite, abdominal pain, lethargy, or bloody stool. If any appear, contact your veterinarian promptly.
          </p>

          <p>
            <strong>How do I build a habit of releasing found objects?</strong><br />
            Play the trade game at least once daily with low-stakes items indoors, then graduate to yard and walks. Pay generously at first and give the item back often so release predicts more fun, not loss.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Medical Association (AVMA). <em>Your New Puppy</em> (preventive care, housetraining, oral health basics).{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/your-new-puppy" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/your-new-puppy
              </a>
            </li>
            <li>
              American Animal Hospital Association (AAHA). <em>Dental Care Guidelines</em> &amp; life stage guidance.{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/education/guidelines/
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Consumer &amp; Professional). <em>Periodontal Disease in Dogs</em>; <em>Oral and Dental Disorders</em>.{' '}
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com
              </a>
            </li>
            <li>
              World Small Animal Veterinary Association (WSAVA). <em>Global Dental &amp; Nutrition Guidelines</em> (diet texture, plaque control).{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>
            </li>
            <li>
              VCA Animal Hospitals. <em>Dental Disease in Dogs</em> (owner-facing overview).{' '}
              <a href="https://vcahospitals.com/know-your-pet/dental-disease-in-dogs" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet/dental-disease-in-dogs
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and individualized care. Avoid offering sticks as chews; use safe alternatives and a simple dental routine.
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
