// File: src/app/blog/posts/helping-a-newly-adopted-dog-settle-in.tsx
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HelpingANewlyAdoptedDogSettleIn() {
  const locale = useLocale();

  const title = "Helping a Newly Adopted Dog Settle In: A Complete Guide for the First Days, Weeks, and Months";
  const date = "August 9, 2025";
  const categories = ['owner', 'rescue'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="A research-backed, first-person guide to helping a newly adopted dog settle in — from the first 72 hours through the first few months — with routines, bonding, training philosophy, vet care, and global adoption insights."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

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

        {/* Local anchor nav for long-form reading */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#intro" className="underline hover:opacity-80">Intro</a></li>
            <li><a href="#first-72" className="underline hover:opacity-80">First 72 Hours</a></li>
            <li><a href="#routine" className="underline hover:opacity-80">Routine</a></li>
            <li><a href="#bonding" className="underline hover:opacity-80">Bonding</a></li>
            <li><a href="#other-pets" className="underline hover:opacity-80">Other Pets</a></li>
            <li><a href="#mistakes" className="underline hover:opacity-80">Common Mistakes</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training Philosophy</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health & Vet Care</a></li>
            <li><a href="#mindset" className="underline hover:opacity-80">Owner Mindset</a></li>
            <li><a href="#global" className="underline hover:opacity-80">Global Insights</a></li>
            <li><a href="#333" className="underline hover:opacity-80">The 3-3-3 Rule</a></li>
            <li><a href="#behavior" className="underline hover:opacity-80">Behavior Challenges</a></li>
            <li><a href="#long-term" className="underline hover:opacity-80">Long-Term Success</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Introduction — Why This Transition Matters</h2>
          <p className="mb-4">
            Adopting a dog is one of the most meaningful commitments you can make. You aren’t just bringing a pet into your life; you’re offering a living being a second chance — often after they’ve been abandoned, surrendered, or have lived in less-than-ideal conditions. Whether your new companion comes from a shelter, a foster program, a rescue organization, or even the streets, this transition will be one of the most important periods in your dog’s life.
          </p>
          <p className="mb-4">
            I’ve been lucky. I’ve never personally had a serious issue with an adopted dog. But running a boarding and daycare business and working with hundreds of dogs, I’ve watched plenty of new owners hit bumps — sometimes big ones. Some issues are behavioral. Others are health-related. Many are simply the stress of change. From my perspective — and from what the research supports — the difference between a smooth transition and a rocky one comes down to <strong>time, consistency, and realistic expectations</strong>.
          </p>
          <p className="mb-4">
            This guide blends my on-the-ground approach with reputable, global research (U.S., Canada, U.K., Australia, Ireland, and New Zealand), so you have an actionable plan to help a newly adopted dog settle in — and thrive.
          </p>
        </section>

        {/* FIRST 72 HOURS */}
        <section id="first-72" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">The First 72 Hours — Building the Foundation of Trust</h2>
          <p className="mb-4">
            If you remember only one thing: <strong>spend as much time as possible with your new dog in those first three days, and make sure that when they are stressed or confused, they can count on you.</strong>
          </p>
          <p className="mb-4">
            The first 72 hours aren’t for heavy training or grand social tours. They’re for establishing psychological safety. Shelter research shows dogs often have elevated cortisol (stress hormone) levels in kennels, which take days to normalize after leaving (Hennessy et&nbsp;al., 2001). In that window, many dogs either <em>shut down</em> (hiding, low appetite) or swing <em>overexcited</em> (pacing, barking). Both are normal.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">What I do in those first 3 days</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Be present.</strong> If possible, take time off work. Calm proximity is your fastest trust builder.</li>
            <li><strong>Keep it quiet.</strong> Skip visitors and chaotic errands. Let the home feel stable.</li>
            <li><strong>Provide a safe zone.</strong> A crate, quiet room, or cozy corner. Let them retreat without pressure.</li>
            <li><strong>Start the routine immediately.</strong> Meals, potty, walks, rest — same times daily.</li>
            <li><strong>Observe without forcing.</strong> Read body language; avoid pushing interactions.</li>
          </ul>
          <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 text-gray-700">
            “In those early days, you’re not just showing them their new home — you’re showing them who you are: calm, consistent, dependable.”
          </blockquote>
        </section>

        {/* ROUTINE */}
        <section id="routine" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Routine and Structure — The Backbone of Adjustment</h2>
          <p className="mb-4">
            I advocate a <strong>strict schedule</strong> in the first weeks, especially for feeding times. Put simply: get the dog onto a routine that matches your lifestyle from day one, and you won’t have to unteach habits later. Predictable events reduce anxiety (Overall, 2013), make house-training easier, and regulate energy.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">A sample first-weeks schedule</h3>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li><strong>7:00 AM</strong> — Potty &amp; short walk</li>
            <li><strong>7:30 AM</strong> — Breakfast</li>
            <li><strong>Midday</strong> — Potty &amp; brief play</li>
            <li><strong>5:30 PM</strong> — Dinner</li>
            <li><strong>Evening</strong> — Training game or bonding activity</li>
            <li><strong>Bedtime</strong> — Final potty; lights out</li>
          </ul>
          <p className="mb-4">
            Both the RSPCA and AVMA advise setting routines on day one. Structure isn’t rigidity for its own sake; it’s clarity for a brain coming down from stress.
          </p>
        </section>

        {/* BONDING */}
        <section id="bonding" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Bonding the Right Way — Shared Joy &gt; Endless Cuddles</h2>
          <p className="mb-4">
            Affection matters, but for a dog still adjusting, constant cuddling isn’t always the best glue. My view: <strong>find a high-energy game or activity you both enjoy</strong> and build from there. Shared experiences produce powerful positive associations with you.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-6">
            <li>Fetch or tug with a favorite toy</li>
            <li>Exploring a quiet new trail</li>
            <li>Learning a fun trick together (kept short and upbeat)</li>
          </ul>
          <p className="mb-4">
            That mix of movement, novelty, and success builds trust faster than passive closeness alone.
          </p>
        </section>

        {/* OTHER PETS */}
        <section id="other-pets" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Introducing Other Pets — Slow and Positive</h2>
          <p className="mb-4">
            I prefer to <strong>wait 3–4 weeks</strong> before intros unless necessary. Early experiences are high-stakes: one bad rep can imprint a narrative you’ll spend months undoing.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Best practices</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Neutral ground.</strong> Start outside or in a driveway, not a tight hallway.</li>
            <li><strong>Leashes, lightly held.</strong> Safety without tension.</li>
            <li><strong>High-value rewards.</strong> Mark calm approaches and soft body language.</li>
            <li><strong>Quit while ahead.</strong> End early on a good note; don’t “test” to failure.</li>
          </ul>
          <p className="mb-4">
            Guidance from Dogs Trust and ASPCA echoes this: gradual, positive introductions reduce the risk of long-term friction.
          </p>
        </section>

        {/* MISTAKES */}
        <section id="mistakes" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Common Mistakes New Adopters Make</h2>
          <p className="mb-4">
            The biggest one: <strong>expecting too much, too soon</strong>. Young dogs are toddlers. You can stack 20–40 reps, but development still takes time. Other frequent pitfalls:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Overloading the dog with novelty in the first weeks</li>
            <li>Inconsistent rules between family members</li>
            <li>Poor environment management (tempting items left out, unsupervised freedom)</li>
            <li>Expecting instant affection or gratitude</li>
          </ul>
          <p className="mb-4">
            American Humane notes unrealistic expectations and weak preparation as key drivers of returns — problems often solved by education and support.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Training Philosophy — Why I Wait Until 9–12 Months</h2>
          <p className="mb-4">
            Here’s where my approach is different. I don’t start <strong>formal, intensive</strong> training until 9–12 months. Before then I focus on life skills: recall, leash manners, calm public behavior, and house rules — without high-pressure drills.
          </p>
          <p className="mb-4">
            I also don’t rely on constant reward-only methods. Rewards are great — but dogs benefit from <strong>clear boundaries</strong>, <strong>fair corrections</strong> when needed, and <strong>balanced feedback</strong>. The goal is clarity, not treat dependence.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>0–8 months:</strong> confidence, exploration, short fun reps, social composure</li>
            <li><strong>9–12 months:</strong> layer in formal structure if the dog is ready</li>
            <li><strong>Always:</strong> short sessions, high rate of success, end on a win</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Health &amp; Veterinary Care — First Steps</h2>
          <p className="mb-4">
            Step one: get <strong>complete records</strong> from the adoption source. If the schedule is unclear, call your vet and follow their plan strictly.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Within the first week</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Full physical exam</li>
            <li>Core vaccinations and boosters as needed</li>
            <li>Parasite prevention (fleas/ticks; heartworm where relevant)</li>
            <li>Diet review and transition guidance</li>
            <li>Microchip check/registration</li>
          </ul>
          <p className="mb-4">
            AVMA guidance supports a prompt “welcome exam” after adoption to catch issues early and set a preventive baseline.
          </p>
        </section>

        {/* MINDSET */}
        <section id="mindset" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Owner Mindset — All In or Not at All</h2>
          <p className="mb-4">
            This is non-negotiable for me: adoption is a <strong>full commitment</strong>. Like bringing a child into your home, you work through challenges, seek help when needed, and adapt your life. If you’re not ready to be all in, wait until you are. If you are, that commitment will transform both your life and the dog’s.
          </p>
        </section>

        {/* GLOBAL INSIGHTS */}
        <section id="global" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Global Adoption Insights — Challenges &amp; Trends</h2>
          <p className="mb-4">
            Context varies by country, but themes repeat: behavior is the leading reason for returns; housing and cost pressures matter; and post-pandemic routines magnified separation issues.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>United States:</strong> Millions of shelter intakes and adoptions annually; returns near 1 in 10. Growing share of dogs arrive with medical or behavioral needs (ASPCA).
            </li>
            <li>
              <strong>United Kingdom:</strong> Dogs Trust reports a majority of returns tied to behavior — with aggression to people frequently cited.
            </li>
            <li>
              <strong>Canada:</strong> As work routines resumed, separation-anxiety behaviors rose; many owners report stress leaving dogs alone.
            </li>
            <li>
              <strong>Australia:</strong> RSPCA Australia notes cost-of-living and rental constraints among top surrender drivers.
            </li>
            <li>
              <strong>India:</strong> Rising adoptions of “indie” street dogs; special attention needed for parasite control, vaccination catch-up, and socialization.
            </li>
          </ul>
        </section>

        {/* 3-3-3 RULE */}
        <section id="333" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">The 3-3-3 Rule — A Realistic Adjustment Timeline</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>3 days:</strong> decompression, overwhelm, limited appetite or restlessness</li>
            <li><strong>3 weeks:</strong> settling in, testing boundaries, truer personality emerging</li>
            <li><strong>3 months:</strong> secure attachment, routines solid, behavior stabilizing</li>
          </ul>
          <p className="mb-4">
            Many rescues use this rule of thumb to help adopters pace expectations — patience here pays dividends later.
          </p>
        </section>

        {/* BEHAVIOR */}
        <section id="behavior" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Behavioral Challenges You Can Expect — and Improve</h2>
          <p className="mb-4">
            Common early hurdles include fear-based aggression, separation distress, house-training regression, destructive chewing/digging, and reactivity or excessive barking. Research tracking adopted dogs over months shows <strong>significant improvement with routine and consistency</strong> (Vitulová et&nbsp;al., 2018).
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Starter playbook</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Safety first.</strong> Manage space; use gates/crates; protect kids and resident pets.</li>
            <li><strong>Daily structure.</strong> Same meal/potty/walk times. Predictability calms.</li>
            <li><strong>Enrichment.</strong> Food puzzles, chew rotation, sniff walks to drain mental energy.</li>
            <li><strong>Short training reps.</strong> End on wins. Build confidence; avoid flooding.</li>
            <li><strong>Phone-a-friend.</strong> Loop in your vet to rule out pain; consult a qualified trainer/behaviorist early if safety flags appear.</li>
          </ul>
        </section>

        {/* LONG-TERM */}
        <section id="long-term" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Long-Term Success — The Ongoing Journey</h2>
          <p className="mb-4">
            Adjustment doesn’t end at three months. Keep refining routines, expanding positive experiences, and investing in training as the dog matures. Over time, you’ll see the compounding returns of patience: calmer recoveries from stress, smoother vet visits, faster settling after guests, and a stronger, steadier bond born from shared work — and shared wins.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Humane Association. (2020). <em>Keeping pets: Factors associated with pet retention and relinquishment</em>. Washington, DC: Author.
            </li>
            <li>
              American Veterinary Medical Association. (2023). <em>Bringing a new dog home</em>. AVMA. https://www.avma.org/resources/pet-owners/petcare/bringing-new-dog-home
            </li>
            <li>
              ASPCA. (2024). <em>Pet statistics</em>. American Society for the Prevention of Cruelty to Animals. https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics
            </li>
            <li>
              Dogs Trust. (2023). <em>Rehoming statistics and reasons for return</em>. Dogs Trust UK. https://www.dogstrust.org.uk
            </li>
            <li>
              Hennessy, M. B., Davis, H. N., Williams, M. T., Mellott, C., &amp; Douglas, C. W. (2001). Plasma cortisol levels of dogs at a county animal shelter. <em>Physiology &amp; Behavior, 73</em>(1–2), 75–81. https://doi.org/10.1016/S0031-9384(01)00469-8
            </li>
            <li>
              Overall, K. L. (2013). <em>Manual of Clinical Behavioral Medicine for Dogs and Cats</em>. Elsevier.
            </li>
            <li>
              RSPCA. (2022). <em>Settling your new dog</em>. Royal Society for the Prevention of Cruelty to Animals. https://www.rspca.org.uk/adviceandwelfare/pets/dogs/environment/settle
            </li>
            <li>
              RSPCA Australia. (2023). <em>Annual report</em>. Royal Society for the Prevention of Cruelty to Animals Australia. https://www.rspca.org.au
            </li>
            <li>
              Vitulová, E., Voslářová, E., Večerek, V., Bedáňová, I., &amp; Bozděchová, B. (2018). Behaviour of dogs adopted from an animal shelter. <em>Acta Veterinaria Brno, 87</em>(2), 155–162. https://doi.org/10.2754/avb201887020155
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
