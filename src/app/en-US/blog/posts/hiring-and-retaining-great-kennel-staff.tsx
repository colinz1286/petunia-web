'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HiringAndRetainingGreatKennelStaff() {
  const locale = useLocale();

  const title =
    'Hiring and Retaining Great Kennel Staff: Culture and Burnout Prevention';
  const date = 'September 18, 2025';
  const categories = ['boarding', 'daycare'] as const;

  // Exact labels from prior posts (do not change keys/labels)
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

  const slug = 'hiring-and-retaining-great-kennel-staff';

  const description =
    'A practical, evidence-informed guide for kennel and daycare operators on hiring pipelines, onboarding, culture building, mentorship, fair compensation, flexible scheduling, communication systems, burnout prevention, and SOPs for sustainable teams.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
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
            <li><a href="#why-retention" className="underline hover:opacity-80">Why Retention Beats Recruiting</a></li>
            <li><a href="#hiring-pipeline" className="underline hover:opacity-80">Build a Real Hiring Pipeline</a></li>
            <li><a href="#onboarding" className="underline hover:opacity-80">Onboarding &amp; First 90 Days</a></li>
            <li><a href="#culture-pillars" className="underline hover:opacity-80">Culture Pillars: Respect, Safety, Growth</a></li>
            <li><a href="#mentorship" className="underline hover:opacity-80">Mentorship, Ladders &amp; Skill Tracks</a></li>
            <li><a href="#pay-schedule" className="underline hover:opacity-80">Fair Pay, Scheduling &amp; Benefits</a></li>
            <li><a href="#communication" className="underline hover:opacity-80">Communication Systems That Prevent Chaos</a></li>
            <li><a href="#burnout" className="underline hover:opacity-80">Burnout Prevention &amp; Recovery</a></li>
            <li><a href="#owner-leadership" className="underline hover:opacity-80">Owner Leadership: Modeling the Standard</a></li>
            <li><a href="#employee-habits" className="underline hover:opacity-80">Healthy Employee Habits</a></li>
            <li><a href="#hiring-templates" className="underline hover:opacity-80">Templates &amp; SOPs (Copy/Paste)</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Great kennel teams are built on systems, not slogans. Hire intentionally through trusted pipelines; onboard with structure; run the floor on written SOPs; promote a culture that values respect, safety, and growth; pay fairly and schedule humanely; and treat burnout prevention like infection control—constant, proactive, and owned by leadership. When owners model clarity and calm, and employees practice boundaries and self-care, retention climbs and the dogs benefit most.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Make <em>culture</em> a checklist: what you measure, you improve—hiring SLAs, onboarding milestones, training ladder sign-offs, and monthly burnout audits.
          </div>
        </section>

        {/* WHY RETENTION */}
        <section id="why-retention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Retention Beats Recruiting (Every Time)</h2>
          <p className="mb-3">
            Constant recruiting is expensive and exhausting. Every departure creates gaps in dog knowledge, cleaning cadence, med accuracy, and client trust. Retention compounds: the longer people stay, the more calmly they handle unpredictable days, the fewer incidents you have, and the more stable your revenue and reviews become. High retention is also visible to clients—familiar faces at drop-off quietly communicate competence and care.
          </p>
          <p className="mb-0">
            Retention is not one thing; it is an ecosystem: hiring → onboarding → culture → compensation → scheduling → communication → growth. When any link is neglected, people leave or burn out. The good news: each link is fixable with clear policies and ownership.
          </p>
        </section>

        {/* HIRING PIPELINE */}
        <section id="hiring-pipeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Build a Real Hiring Pipeline (So You Never Hire Desperate)</h2>
          <p className="mb-3">
            Desperation hires drain culture. Build year-round pipelines so you can be selective. The best sources tend to be <strong>word-of-mouth among teachers/coaches</strong>, vet tech programs, and local training clubs—people comfortable with structure and feedback. Job posts should describe the work honestly: physical, messy, detail-heavy, and deeply rewarding when run on systems.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Screening &amp; Working Interviews</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short phone screen: availability, commute, animal experience, example of following a detailed process.</li>
            <li>Scenario prompts: &quot;A dog won&#39;t eat breakfast; what do you do?&quot; &quot;Two dogs stare stiffly at a doorway; walk me through your steps.&quot;</li>
            <li>2–3 hour paid working interview: cleaning, leash handling, and shadowing. You want calm, coachable, and observant more than &quot;alpha energy.&quot;</li>
            <li>Reference check for reliability and team behavior; ask about how they receive feedback.</li>
          </ul>
          <p className="mb-0">
            Hiring rubric beats gut feel. Score candidates on reliability, communication, coachability, safety instincts, and values alignment. The rubric protects culture from charisma without substance.
          </p>
        </section>

        {/* ONBOARDING */}
        <section id="onboarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Onboarding &amp; First 90 Days: Prevent Overwhelm</h2>
          <p className="mb-3">
            Day one sets the tone. New hires must know where to stand, how to move, who to ask, and what &quot;good&quot; looks like. Overwhelm is the seed of turnover; structure is the antidote. Use written SOPs, laminated room maps, and a named mentor who narrates the &quot;why,&quot; not just the &quot;what.&quot;
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Milestones by Week</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Week 1:</strong> Safety brief, cleaning standards, leash handling basics, reading the white/red board, radio etiquette, and &quot;stop the room&quot; authority.</li>
            <li><strong>Week 2:</strong> Feeding systems (grams, allergy lanes), med windows (two-person check), playgroup positioning, and doorway pressure control.</li>
            <li><strong>Week 3–4:</strong> Solo room blocks with mentor shadow, incident note writing, and owner communication handoffs for simple updates.</li>
            <li><strong>Day 30/60/90:</strong> Formal check-ins with specific feedback and a training ladder review; raise path tied to skills, not time alone.</li>
          </ul>
          <p className="mb-0">
            Recognize wins out loud. Early, frequent reinforcement creates belonging and lowers first-month attrition.
          </p>
        </section>

        {/* CULTURE PILLARS */}
        <section id="culture-pillars" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Culture Pillars: Respect, Safety, Growth</h2>
          <p className="mb-3">
            Culture is what happens when no owner is in the room. In kennels, the daily reality should be clean language, calm tone, and the freedom to pause the floor for safety. Respect applies to <em>dogs</em>, <em>peers</em>, and <em>self</em>. Growth means everyone knows how to get better and is given time to do it.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Behaviors You Reward, You Repeat</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>No yelling. Mistakes become micro-lessons with &quot;next time do X because Y.&quot;</li>
            <li>Safety pause authority. Any staffer can say &quot;holding&quot; to reset the room; leadership backs them every time.</li>
            <li>Visible growth. Post the training ladder and celebrate promotions publicly.</li>
            <li>Neutral incident notes. Facts over blame protect staff and clients while teaching the team.</li>
          </ul>
          <p className="mb-0">
            Culture dies in ambiguity. Write it, teach it, and enforce it consistently—including with senior staff.
          </p>
        </section>

        {/* MENTORSHIP */}
        <section id="mentorship" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mentorship, Ladders &amp; Skill Tracks</h2>
          <p className="mb-3">
            People stay where they grow. Create a ladder that turns entry-level roles into careers: Level 1 (cleaning/feeding mastery), Level 2 (playgroup handler), Level 3 (med lead, intake specialist), Level 4 (shift lead), Level 5 (assistant manager). Publish competencies and pay bands for each level so progress is transparent and fair.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">How to Run Mentorship</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Assign every new hire a mentor with time on the schedule to teach (not just squeeze between tasks).</li>
            <li>Rotate mentors quarterly to prevent cliques and to spread best practices.</li>
            <li>Use brief &quot;coach cards&quot; to reinforce one behavior per day (doorway control, leash hand position, calm voice).</li>
          </ul>
          <p className="mb-0">
            Cross-training reduces boredom and builds empathy across roles (front desk, grooming, training support). Variety is a burnout buffer.
          </p>
        </section>

        {/* PAY & SCHEDULE */}
        <section id="pay-schedule" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Fair Pay, Scheduling &amp; Benefits (The Boring Stuff That Retains)</h2>
          <p className="mb-3">
            Love of dogs is not compensation. Pay living, be transparent about raises tied to skills, and schedule like you respect people&#39;s lives. If margins are tight, supplement with benefits that matter: paid certifications, predictable schedules, strong employee pet-care discounts, and real time-off culture (leaders take PTO and encourage it).
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Scheduling That Prevents Burnout</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Release schedules at least two weeks ahead; minimize last-minute changes.</li>
            <li>Rotate holidays and weekends fairly; avoid stacking the same person on every &quot;hard&quot; shift.</li>
            <li>Cap doubles and enforce breaks with coverage (floaters, cross-trained leads).</li>
            <li>Collect preference sheets and honor them when possible—staff who feel seen trade flexibility when emergencies arise.</li>
          </ul>
          <p className="mb-0">
            Pay and scheduling are the foundation. Without them, even the best culture language will feel hollow.
          </p>
        </section>

        {/* COMMUNICATION */}
        <section id="communication" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Communication Systems That Prevent Chaos</h2>
          <p className="mb-3">
            Burnout is multiplied by confusion. Build channels, cadences, and clarity so people know where to look, what to do, and how to speak up. Train radio etiquette (short, calm, purposeful). Use a shift log that every staffer reviews and signs at clock-in. Keep &quot;decision rights&quot; explicit: who can comp a daycare day, who calls an owner about an incident, who approves overtime.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Daily &amp; Weekly Cadence</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily 5-minute huddle: red-board dogs, med windows, weather/heat notes, staffing gaps.</li>
            <li>End-of-day debrief: what almost went wrong and one system tweak for tomorrow.</li>
            <li>Weekly ops review: incidents, near-misses, vaccine gaps, and training ladder progress.</li>
          </ul>
          <p className="mb-0">
            Publish decisions. If leadership changes a policy, post it in writing and archive prior versions. Version control reduces &quot;I didn&#39;t know&quot; fatigue.
          </p>
        </section>

        {/* BURNOUT */}
        <section id="burnout" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Burnout Prevention &amp; Recovery: Treat It Like a Safety Program</h2>
          <p className="mb-3">
            Burnout is not weakness; it&#39;s an occupational hazard in high-demand care work. The solution is structural and personal. Your facility should monitor workload peaks (holidays, extreme heat), staff emotional load (tough incidents), and signs of drift (lateness, short tempers, avoidant behavior). Early intervention saves teams.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Prevention: System Level</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Predictable schedules and enforced breaks; floaters cover bio and snack breaks.</li>
            <li>Rotate high-stress roles; no one owns medicating fractious dogs every day.</li>
            <li>Quiet rooms and sound dampening reduce constant bark pressure.</li>
            <li>Monthly &quot;what would make your day 10% easier?&quot; survey; implement at least one change.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Prevention: Individual Level</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Normalize asking for help; praise it publicly.</li>
            <li>Teach &quot;reset&quot; skills: pace the room slowly, breathe, soft voice, lower lights when possible.</li>
            <li>Encourage hydration, simple snacks, and post-shift transition rituals (walk, stretch, decompression).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Recovery Playbook</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>One-on-one check-in (supportive, specific). Identify friction points and remove two this week.</li>
            <li>Temporary duty adjustment (more prep, less floor chaos) plus a concrete timeline to re-evaluate.</li>
            <li>Encourage PTO; model it—leaders take days off and don&#39;t text all day.</li>
            <li>If available, share EAP or low-cost counseling resources without stigma.</li>
          </ul>
          <p className="mb-0">
            Recovery is faster when people trust leadership to protect them as much as they protect clients and dogs.
          </p>
        </section>

        {/* OWNER LEADERSHIP */}
        <section id="owner-leadership" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Owner Leadership: Modeling the Standard</h2>
          <p className="mb-3">
            Owners and managers set emotional temperature. Calm leaders who explain the &quot;why,&quot; admit mistakes, and give credit freely build loyalty. Leaders who rage, shame, or disappear create brittle teams that churn. Culture is contagious; yours will be caught, not taught.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Leadership Habits That Retain</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Say &quot;thank you&quot; daily and specifically (what you saw, why it mattered).</li>
            <li>Coach privately, praise publicly. Replace &quot;Why did you…&quot; with &quot;Next time…&quot; plus the reason.</li>
            <li>Be predictable: show up on time, keep promises, and follow the same SOPs.</li>
            <li>Protect staff from abusive clients—refund and release when needed. Your people are not punching bags.</li>
          </ul>
          <p className="mb-0">
            Your reputation as an employer will travel faster than your ads. A steady, fair shop attracts the right people for the right reasons.
          </p>
        </section>

        {/* EMPLOYEE HABITS */}
        <section id="employee-habits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Healthy Employee Habits: What Pros Do</h2>
          <p className="mb-3">
            Employees are not passengers; they are co-authors of culture. The pros hydrate, protect their sleep, arrive five minutes early to read the board, and ask for clarity before a mistake. They keep their radio short, their tone low, and their eyes up.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Own your lane. If feeding is yours, it is flawless: grams logged, allergy lanes respected, med initials on time.</li>
            <li>Flag concerns early (cough, limp, food refusal) with calm notes and a suggestion for next steps.</li>
            <li>Maintain your PPE and harness fit standards; demonstrate safe handling to peers.</li>
            <li>Use your PTO—rest is part of the job. Your calm is a safety feature for dogs and people.</li>
          </ul>
          <p className="mb-0">
            Staff who invest in professional habits get promoted faster and experience less burnout because their days are more predictable and respected.
          </p>
        </section>

        {/* HIRING TEMPLATES / SOPs */}
        <section id="hiring-templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Templates &amp; SOPs (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hiring Rubric (Score 1–5)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Reliability &amp; Punctuality</li>
            <li>Coachability &amp; Feedback Response</li>
            <li>Safety Instincts &amp; Calm Under Pressure</li>
            <li>Communication (radio, notes, client tone)</li>
            <li>Values Alignment (respect for animals/people, cleanliness)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">30/60/90 Onboarding Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Day 1: safety brief, building tour, radio protocol, red/white board orientation.</li>
            <li>Week 1: cleaning SOPs, feeding grams and allergy lanes, doorway control.</li>
            <li>Week 2: med windows with two-person check; incident note template.</li>
            <li>Day 30: solo block sign-off; feedback session with ladder goals.</li>
            <li>Day 60: cross-training shift (front desk or grooming support).</li>
            <li>Day 90: promotion/rate review tied to competencies.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Huddle Agenda (5 Minutes)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Staffing &amp; ratios; heat/weather notes.</li>
            <li>Red-board dogs, meds windows, feeding changes.</li>
            <li>Room assignments and floaters for breaks.</li>
            <li>One micro-tip (e.g., doorway pressure reset or mat settle cue).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Burnout Audit (Monthly)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Are breaks actually happening? Who floated for whom?</li>
            <li>Who had the hardest blocks this month? Rotate next month.</li>
            <li>Any repeated near-misses? What system change prevents them?</li>
            <li>One 10% improvement we will implement this month.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Store these as shared checklists so your training stays consistent even when managers are off.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>How do I afford higher pay?</strong><br />
            Tie raises to skills that reduce incidents and increase capacity (med lead, intake specialist). Adjust pricing annually; communicate value (safety, training, stability). Cutting turnover often saves more than the raise costs.
          </p>

          <p className="mb-3">
            <strong>What if a great handler struggles with clients?</strong><br />
            Train scripts and role-play; pair with a front-desk mentor; offer alternate growth paths (operations lead). Don&#39;t force people into roles that drain them long-term.
          </p>

          <p className="mb-3">
            <strong>How do I handle a toxic high-performer?</strong><br />
            Coach once, document, and be willing to part ways. Culture damage from tolerated disrespect costs far more than their individual output.
          </p>

          <p className="mb-0">
            <strong>What&#39;s one change that moves everything?</strong><br />
            Enforced breaks with scheduled floaters. When people can breathe, the whole system gets safer and kinder.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              OSHA Small Business resources on safe scheduling, breaks, and workplace stress mitigation.{' '}
              <a
                href="https://www.osha.gov/smallbusiness"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.osha.gov/smallbusiness
              </a>
            </li>
            <li>
              AVMA well-being resources for veterinary and animal-care teams (burnout prevention, communication).{' '}
              <a
                href="https://www.avma.org/resources-tools/wellbeing"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.avma.org/resources-tools/wellbeing
              </a>
            </li>
            <li>
              Fear Free Pets education on low-stress handling and staff emotional health in animal environments.{' '}
              <a
                href="https://fearfreepets.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://fearfreepets.com
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Adapt policies to your local labor laws and consult HR/legal pros as needed. Culture, safety, and scheduling practices should comply with jurisdictional requirements.
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
