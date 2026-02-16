'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HighTurnoverBoardingDaycareGuide() {
  const locale = useLocale();

  const title =
    'Why Employee Turnover Is So High in the Pet Boarding and Daycare Industry—and What You Can Do About It';
  const date = 'August 28, 2025';
  const categories = ['boarding', 'daycare', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    breeder: 'Breeders',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A field-tested playbook for pet boarding and daycare owners: why turnover is high, what truly drives it (pay, scheduling, training, stress, culture), how to measure it, and the step-by-step systems that cut churn and raise retention without inflating payroll beyond reality.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per house rules */}
        <meta name="robots" content="all" />
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR Summary</a></li>
            <li><a href="#what-turnover-means" className="underline hover:opacity-80">What Turnover Means in Our World</a></li>
            <li><a href="#root-causes" className="underline hover:opacity-80">Root Causes (Real, Not Theoretical)</a></li>
            <li><a href="#math" className="underline hover:opacity-80">The Math: Cost of Churn vs. Cost of Retention</a></li>
            <li><a href="#hiring-funnel" className="underline hover:opacity-80">Fix the Hiring Funnel</a></li>
            <li><a href="#onboarding" className="underline hover:opacity-80">Onboarding That Actually Works</a></li>
            <li><a href="#training-ladder" className="underline hover:opacity-80">Skill Ladder &amp; Certifications</a></li>
            <li><a href="#schedule-design" className="underline hover:opacity-80">Schedule Design &amp; Workload</a></li>
            <li><a href="#culture" className="underline hover:opacity-80">Culture: Calm, Safe, Professional</a></li>
            <li><a href="#career-paths" className="underline hover:opacity-80">Career Paths Without “Bureaucracy”</a></li>
            <li><a href="#kpis" className="underline hover:opacity-80">KPI Dashboard for Retention</a></li>
            <li><a href="#scripts" className="underline hover:opacity-80">Manager Scripts for Hard Moments</a></li>
            <li><a href="#playbook" className="underline hover:opacity-80">Ready-to-Run Playbook</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
          <p className="mb-4">
            Employee churn in pet boarding and daycare is driven by a predictable bundle of pressures: variable hours, seasonality, emotional labor,
            physically demanding work, safety stress, and the mismatch between responsibility and pay. Solving it does not require unlimited payroll.
            It requires tight systems: realistic job previews, competency-based onboarding, a simple pay ladder tied to verified skills, clear
            schedules, safe handling protocols, and trust-building leadership. When you install these systems, you cut early-tenure exits, stabilize
            the middle, and create a small but steady pipeline of future leads and managers.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use Petunia to post shift tasks, attach SOPs to roles, log safety drills, and track 30/60/90-day check-ins.
            Visibility reduces anxiety and creates the consistency that keeps good people.
          </div>
        </section>

        {/* What turnover means */}
        <section id="what-turnover-means" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Turnover Means in Our World</h2>
          <p className="mb-3">
            In retail or restaurants, churn hurts. In pet care, churn hurts <em>and</em> elevates risk: handling anxious dogs, moving animals through
            gates, dosing meds correctly, watching group play, avoiding fights. New, untrained staff raise the probability of near-misses and the odds
            of service errors. That is why retention is not just a finance topic; it is a safety topic and a client-trust topic.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">How to measure it</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Annualized voluntary churn:</strong> percentage of team members who leave by choice over a year.</li>
            <li><strong>First-90-day exits:</strong> the canary in the coal mine. If this is high, your hiring preview and onboarding are misaligned.</li>
            <li><strong>Tenure distribution:</strong> how many teammates at 0–3 months, 3–12 months, 12+ months. Aim to grow the 12+ segment.</li>
          </ul>
        </section>

        {/* Root causes */}
        <section id="root-causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Root Causes (Real, Not Theoretical)</h2>
          <p className="mb-3">
            The reasons people leave boarding/daycare jobs look similar across regions. Owners who solve turnover accept these realities and build
            systems around them instead of fighting human nature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Operational &amp; Pay</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Wages not tied to responsibility or verified skills.</li>
                <li>Chaotic schedules; last-minute changes; split shifts.</li>
                <li>Seasonality whiplash (holidays vs. slow months).</li>
                <li>Understaffed peak windows; overstretched breaks.</li>
                <li>Thin training → preventable mistakes → low morale.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Human Factors</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Emotional labor (client worries, difficult conversations).</li>
                <li>Physical demands (lifting, cleaning, outdoor temps).</li>
                <li>Safety stress around group play and anxious dogs.</li>
                <li>Little recognition or growth; unclear path forward.</li>
                <li>Supervisor inconsistency; rules feel subjective.</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            None of these are unique to your facility. The fix is not a poster; it is a machine: hiring, onboarding, training, scheduling, safety, and
            feedback stitched into one coherent rhythm.
          </p>
        </section>

        {/* Cost math */}
        <section id="math" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Math: Cost of Churn vs. Cost of Retention</h2>
          <p className="mb-3">
            Back-of-the-napkin numbers are enough to make good decisions. A front-line hire often costs several weeks of wages in recruiting,
            onboarding time, training shadow hours, uniforms, and the performance loss while they ramp. If they leave at six weeks, you absorb those
            costs and repeat. A modest, targeted retention spend (small raises tied to milestones, better schedules, training materials) is cheaper
            than replacing the same role multiple times per year.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Direct costs:</strong> job ads, interview time, background checks, onboarding pay, shadow hours, uniforms.</li>
            <li><strong>Hidden costs:</strong> supervisor distraction, mistakes from inexperience, client refunds, morale drag on the veteran crew.</li>
            <li><strong>Opportunity:</strong> with a stable team, you can open more capacity on peak days and accept last-minute revenue instead of
              turning it away.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Track churn reasons and 30/60/90-day completion right in Petunia. A simple bar chart of exits by reason
            often points to one or two fixes worth ten times their cost.
          </div>
        </section>

        {/* Hiring funnel */}
        <section id="hiring-funnel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Fix the Hiring Funnel</h2>
          <p className="mb-3">
            Many turnover problems are baked in before day one. If the job post is vague or romanticizes the work, you will attract people who love
            dogs but are not ready for cleaning, weather, and careful group management. Be crisp and honest up front.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Job post that pre-selects the right people</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mission + reality:</strong> “We create calm, safe play—but this is physical work with cleaning and outdoor time.”</li>
            <li><strong>Schedule truth:</strong> “Weekends/holidays are our peak. You will work them in rotation with guaranteed days off.”</li>
            <li><strong>Skill snapshot:</strong> “You&#39;ll learn safe handling, reading body language, cleaning protocols, and client updates.”</li>
            <li><strong>Growth path:</strong> “Level-up pay after verified skills: handling, meds, intake, closing.”</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Interview steps that predict success</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3">
            <li>Short phone screen: schedule, transportation, expectations.</li>
            <li>On-site tour: show cleaning stations, yards, kennels, laundry, meds room.</li>
            <li>Realistic job preview: observe playgroup from a safe area; explain why calm matters more than chaos.</li>
            <li>Scenario questions: “Dog A fixates on Dog B during fetch—what do you do?”</li>
            <li>Reference check: reliability, coachability, teamwork.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-2 mb-1">Offer letter clarity</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Role, starting rate, training rate if different, shift windows, weekend/holiday rotation.</li>
            <li>First-week plan and the milestone for the first raise (for example, “Handling Level 1 + Cleaning Cert”).</li>
          </ul>
        </section>

        {/* Onboarding */}
        <section id="onboarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Onboarding That Actually Works</h2>
          <p className="mb-3">
            Great onboarding lowers fear, accelerates competence, and shows respect for the animals. Make the first 10 shifts feel structured and
            winnable. Avoid the sink-or-swim vibe that drives early exits.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">10-Shift starter plan</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Shift 1–2 (shadow):</strong> tour, safety briefing, PPE, radio etiquette, gates/doors, cleaning chemicals, laundry cycles.</li>
            <li><strong>Shift 3–4 (assisted tasks):</strong> kennel setup, feeding chart, basic cleaning, body language basics (look-aways, shake-offs).</li>
            <li><strong>Shift 5–6 (guided handling):</strong> leashing from runs, threshold manners, calm walking, basic group observations.</li>
            <li><strong>Shift 7–8 (small responsibilities):</strong> release/rotate with mentor oversight, notes to owners, basic incident logging.</li>
            <li><strong>Shift 9–10 (capstone):</strong> mock scenarios (gate slip attempt, resource guarding near water bowl), closing checklist.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Attach your 10-shift checklist to the new hire&#39;s profile and require mentor sign-off inside Petunia.
            The app becomes the shared source of truth for “ready” vs. “not yet.”
          </div>
        </section>

        {/* Training ladder */}
        <section id="training-ladder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skill Ladder &amp; Certifications</h2>
          <p className="mb-3">
            People stay when progress is visible and rewarded. Build a simple, three-to-five level ladder tied to observable skills and modest pay
            steps. You are buying retention with clarity, not with promises.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
            <h3 className="font-semibold mb-2">Example ladder (adapt to your facility)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Level A – Trainee:</strong> safety rules, cleaning cert, radio etiquette, kennel setup, feeding accuracy.</li>
              <li><strong>Level B – Handler 1:</strong> leash skills, controlled entries/exits, reading calming signals, incident notes.</li>
              <li><strong>Level C – Handler 2:</strong> group rotation, decompression breaks, redirecting arousal, client updates.</li>
              <li><strong>Level D – Specialist:</strong> meds administration, intake assessments, puppy groups, senior dog care.</li>
              <li><strong>Lead:</strong> yard flow, conflict prevention, mentoring, closing/opening oversight, client conflict resolution.</li>
            </ul>
          </div>
          <p className="mt-3">
            Tie each step to a small raise and a badge in your system. Publish the rubric so no one has to guess how to advance.
          </p>
        </section>

        {/* Schedule & workload */}
        <section id="schedule-design" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Schedule Design &amp; Workload</h2>
          <p className="mb-3">
            Schedules are where loyalty is won or lost. People will accept hard work if the calendar is predictable and fair, breaks are real, and
            coverage during peak windows is strong.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Design principles</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Shape shifts to dog flow:</strong> more bodies during arrivals/departures; leaner mid-day; a closer pair at closing.</li>
            <li><strong>Protect breaks:</strong> schedule floaters who backfill breaks; skipped breaks are a fast path to burnout.</li>
            <li><strong>Weekend/holiday rotation:</strong> post the rotation a month ahead; allow reasonable swaps inside Petunia.</li>
            <li><strong>No split shifts unless truly necessary:</strong> if you must, pay a premium or shorten total hours that day.</li>
            <li><strong>Cross-train:</strong> light duty roles for injured teammates keep knowledge on the team and show care.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Publish shift bids and lock schedules inside Petunia every Thursday for the following week. Staff see updates
            in one place instead of text chaos.
          </div>
        </section>

        {/* Culture */}
        <section id="culture" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Culture: Calm, Safe, Professional</h2>
          <p className="mb-3">
            A calm yard is not an accident. It comes from consistent cues, fair rules, and leaders who model steady decision-making. The same is true
            for your staff culture. The tone you allow is the tone you own.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Five behaviors of sticky teams</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Predictable huddles:</strong> 5 minutes at open and close with two priorities and one safety reminder.</li>
            <li><strong>Incident debriefs without shame:</strong> facts, what we saw, what we&#39;ll do next time.</li>
            <li><strong>Public praise, private coaching:</strong> recognize small wins; redirect in one-on-ones.</li>
            <li><strong>Visible owner involvement:</strong> jump in on hard days; protect breaks; take the angry client call.</li>
            <li><strong>Clean facility, clean comms:</strong> housekeeping and communication standards travel together.</li>
          </ul>
        </section>

        {/* Career paths */}
        <section id="career-paths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Career Paths Without “Bureaucracy”</h2>
          <p className="mb-3">
            You do not need a giant org chart to keep great people. Offer role variety, special projects, and skill stipends. Many teammates prefer
            mastery over management—give them a lane to win.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Tracks:</strong> handling guru, puppy program lead, meds specialist, client-experience lead, overnight lead.</li>
            <li><strong>Stipends:</strong> small monthly add-ons for the lead of a program (for example, enrichment pilot, new-client onboarding).</li>
            <li><strong>Education:</strong> reimburse one relevant course per year with receipt and proof of completion.</li>
            <li><strong>Project sprints:</strong> 6-week focused goals (kennel sound-dampening, better scent-control, dark-mode cameras) with a retro
              and celebration at the end.</li>
          </ul>
        </section>

        {/* KPIs */}
        <section id="kpis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">KPI Dashboard for Retention</h2>
          <p className="mb-3">
            What you measure gets better. Publish a small dashboard in your weekly owner/manager check-in. Keep it boring and consistent.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>First-90-day exits</strong> (goal: trend down month over month).</li>
            <li><strong>Active headcount by tenure band</strong> (0–3, 3–12, 12+ months).</li>
            <li><strong>Open shifts covered by swaps</strong> (lower is better—means schedules are right the first time).</li>
            <li><strong>Incident reports per 100 dog-days</strong> (should fall as the team stabilizes).</li>
            <li><strong>Client refunds due to staff error</strong> (track root cause; training solves most).</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Create a Retention board in Petunia: tiles for churn reasons, 90-day completion, incident rate, and coverage
            quality. One glance tells the story.
          </div>
        </section>

        {/* Manager scripts */}
        <section id="scripts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Manager Scripts for Hard Moments</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">When someone looks overwhelmed</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2"><strong>Script:</strong> “You&#39;re doing a lot right. Let&#39;s slow the yard and reset. I&#39;ll cover five minutes
              so you can breathe, then we&#39;ll walk through the next rotation together.”</p>
            <p className="mb-0"><strong>Why it works:</strong> acknowledges effort, provides immediate relief, and offers coaching in the flow of work.</p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">When a good teammate asks for a raise</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
            <p className="mb-2"><strong>Script:</strong> “Thank you for asking. Here&#39;s our ladder. You&#39;re solid on Handler 1. If you complete
              meds and intake assessments in the next two weeks, that moves you to Specialist with a <em>$X</em> bump. I&#39;ll schedule the check.”</p>
            <p className="mb-0"><strong>Why it works:</strong> connects pay to verified skills instead of vibes; clear and fair.</p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">When absenteeism spikes</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p className="mb-2"><strong>Script:</strong> “We rely on each other in this work. Here&#39;s the attendance standard. If something
              changes at home, tell us early so we can adjust without hurting the team.”</p>
            <p className="mb-0"><strong>Why it works:</strong> sets a boundary and invites adult communication instead of surprise no-shows.</p>
          </div>
        </section>

        {/* Playbook */}
        <section id="playbook" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ready-to-Run Playbook</h2>
          <p className="mb-3">
            If you implement only ten things from this article, make them these. They compound quickly and are realistic for small businesses.
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Rewrite the job post</strong> with a realistic preview and the pay ladder.</li>
            <li><strong>Add a tour step</strong> in interviews to show real work and thin out mismatches.</li>
            <li><strong>Publish the 10-shift onboarding</strong> and assign a mentor for each new hire.</li>
            <li><strong>Install the skill ladder</strong> (3–5 steps) and tie small raises to each.</li>
            <li><strong>Lock schedules weekly</strong> on a consistent day; protect breaks with a floater.</li>
            <li><strong>Run open/close huddles</strong> with two priorities and one safety reminder.</li>
            <li><strong>Track first-90-day exits</strong> and fix trends you see in those stories.</li>
            <li><strong>Hold monthly one-on-ones</strong> (20 minutes) focused on one skill goal and one personal goal.</li>
            <li><strong>Recognize publicly, coach privately</strong> with short, specific feedback.</li>
            <li><strong>Celebrate tenure</strong> at 90 days, six months, and yearly with a small bonus or perk.</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your job post, onboarding checklist, and ladder rubric as shared files in Petunia so every manager uses
            the same version.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>Do I have to raise pay to keep people?</strong><br />
            Pay matters, but clarity and safety matter just as much. A modest ladder with transparent steps often beats a random raise because it feels
            fair, repeatable, and earned.
          </p>
          <p className="mb-3">
            <strong>How fast can retention improve?</strong><br />
            You should see improvements in first-90-day exits within one or two months if you fix hiring and onboarding. Longer-tenure stability follows
            as your schedule and culture settle.
          </p>
          <p className="mb-3">
            <strong>What about tough clients who burn out staff?</strong><br />
            Protect your team. Provide owners with education on realistic outcomes, and step in early when behavior crosses lines. A single relentlessly
            negative client can undo ten good hires.
          </p>
          <p className="mb-3">
            <strong>How do I handle seasonal spikes?</strong><br />
            Recruit early with temporary offers tied to your ladder, pre-train on weekends, and assign a senior to run short “season drills” on safety,
            cleaning speed, and yard flow.
          </p>
          <p>
            <strong>Is this legal or HR advice?</strong><br />
            No. This is practical guidance. For wage, overtime, and compliance rules, consult your attorney or a qualified HR professional in your
            state or country.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Society for Human Resource Management (SHRM). Retention and onboarding toolkits.{' '}
              <a href="https://www.shrm.org" target="_blank" rel="noopener noreferrer">https://www.shrm.org</a>
            </li>
            <li>
              Occupational Safety and Health Administration (OSHA). Animal handling and workplace safety resources.{' '}
              <a href="https://www.osha.gov" target="_blank" rel="noopener noreferrer">https://www.osha.gov</a>
            </li>
            <li>
              Gallup Workplace. Engagement and manager habits that drive retention.{' '}
              <a href="https://www.gallup.com/workplace" target="_blank" rel="noopener noreferrer">https://www.gallup.com/workplace</a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Client communication resources for pet services.{' '}
              <a href="https://www.avma.org/resources-tools/practice-management" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/practice-management
              </a>
            </li>
            <li>
              International Boarding &amp; Pet Services Association (IBPSA). Training and risk management guides.{' '}
              <a href="https://www.ibpsa.com" target="_blank" rel="noopener noreferrer">https://www.ibpsa.com</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and does not replace legal, HR, or safety compliance guidance. Always confirm wage rules and labor law
            requirements with a qualified professional in your jurisdiction.
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
