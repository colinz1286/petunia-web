'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanIntactDogsGoToDaycare() {
  const locale = useLocale();

  const title =
    'Can Intact Dogs Go to Daycare? Policies, Behavior Risks & Alternatives';
  const date = 'July 25, 2025';
  const categories = ['owner', 'daycare'] as const;

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
    'Clear, respectful guidance for families with intact dogs (males and females, including in-heat): why many daycares restrict intact dogs, real behavior and health considerations, insurance/operations drivers, humane alternatives, planning around heat cycles, and a practical week-by-week enrichment plan—plus a 15-question FAQ.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/can-intact-dogs-go-to-daycare`}
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
            <li><a href="#disclaimer" className="underline hover:opacity-80">Medical Disclaimer</a></li>
            <li><a href="#context" className="underline hover:opacity-80">Behavior & Hormonal Context</a></li>
            <li><a href="#estrus" className="underline hover:opacity-80">Estrus & Health/Safety</a></li>
            <li><a href="#policies" className="underline hover:opacity-80">Why Facilities Restrict Intact Dogs</a></li>
            <li><a href="#decision" className="underline hover:opacity-80">Is Daycare a Fit? (Decision Tree)</a></li>
            <li><a href="#alternatives" className="underline hover:opacity-80">Alternatives to Daycare</a></li>
            <li><a href="#planning" className="underline hover:opacity-80">Planning Calendars & Disclosure</a></li>
            <li><a href="#intact-males" className="underline hover:opacity-80">For Intact Males</a></li>
            <li><a href="#pros-cons" className="underline hover:opacity-80">Pros & Cons</a></li>
            <li><a href="#weekly-plan" className="underline hover:opacity-80">Weekly Enrichment Plan</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Templates & Scripts</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ (15)</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* DISCLAIMER */}
        <section id="disclaimer" className="mb-10">
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Medical disclaimer:</strong> This article is educational and not a substitute for veterinary care or individualized behavior work.
            Always follow your veterinarian’s recommendations and consult a credentialed trainer/behavior professional for behavior concerns.
          </div>
        </section>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Yes—but often no.</strong> Many daycares do <em>not</em> accept intact dogs (especially in-heat females) due to behavior, safety, and insurance/operations risks. Some accept intact dogs with restrictions (age caps, no mixed-sex groups, private play, or trial-only).</li>
            <li><strong>Behavior reality:</strong> Adolescence and hormones can amplify arousal, mounting, posturing, and resource guarding; crowded groups make signaling harder and conflict more likely.</li>
            <li><strong>Health & safety:</strong> In-heat females draw intense attention; escape attempts and stress increase. Pregnancy risk and liability are obvious concerns.</li>
            <li><strong>Great alternatives exist:</strong> One-on-one enrichment days, small curated playgroups, day-training, private walks, and home-style boarding deliver social time and mental work without the daycare chaos.</li>
            <li><strong>Plan ahead:</strong> Track heat cycles, disclose intact status early, and build a repeating enrichment schedule at home and with professionals.</li>
          </ul>
        </section>

        {/* CONTEXT */}
        <section id="context" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Behavior & Hormonal Context (Adolescence, Signaling, Arousal)</h2>
          <p className="mb-3">
            Intact status doesn’t make a dog “bad.” It changes the <em>context</em>—how other dogs respond, how arousal ramps, and how social signals are interpreted.
            In group settings with tight quarters, novel dogs, and high noise, those small changes can matter a lot.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adolescence: The Arousal Rollercoaster</h3>
          <p className="mb-3">
            Between roughly 6–24 months, many dogs experience heightened reactivity and impulsivity. Intact males may show more persistent
            investigation of other dogs, mounting attempts, and competitive posturing; intact females may draw attention even outside of heat.
            Crowded, fast-moving playgroups amplify rehearsal of those behaviors.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Mounting & Social Pressure</h3>
          <p className="mb-3">
            Mounting happens in all sexes and neuter statuses, but intact hormones can increase frequency and persistence. In large groups,
            repeated mounting triggers pushback (snarks, scuffles), adding to noise and arousal. Good handlers can interrupt and redirect,
            but constant interruptions are a sign the environment is a poor fit.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Resource Guarding & Crowding</h3>
          <p className="mb-3">
            Tight spaces with toys, water, doorway thresholds, or human attention can spark guarding. Hormonal status isn’t destiny, but it can shift
            thresholds. Facilities that accept intact dogs should minimize contested resources and keep groups small with clean sightlines.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Social Signaling Limits</h3>
          <p>
            Fast play in echoey rooms makes it harder for dogs to read subtle signals. When misreads meet hormones and adolescent bravado, the
            risk of conflict rises. That’s the operational reason many daycares say “no” or “yes, but with strict guardrails.”
          </p>
        </section>

        {/* ESTRUS */}
        <section id="estrus" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Estrus (Heat): Health & Safety Concerns</h2>
          <p className="mb-3">
            The canine estrous cycle typically includes proestrus, estrus (fertile window), diestrus, and anestrus. Many females cycle about every
            six months (individual variation is normal). During proestrus/estrus, attraction, attention from males, and stress can spike. Facilities
            usually prohibit in-heat dogs due to pregnancy risk, disruptive attention from other dogs, and escape attempts.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Behavior shifts:</strong> increased marking, guarding of the dog in heat by others, vocalizing, or agitation.</li>
            <li><strong>Operational stress:</strong> group management becomes harder; even non-intact dogs may fixate, raising arousal and noise.</li>
            <li><strong>Liability:</strong> accidental breeding is a serious legal and ethical exposure; reputable facilities avoid the risk entirely.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm">
            <strong>Owner takeaway:</strong> If your female dog may be cycling around planned daycare dates, choose alternatives (below) or delay.
          </div>
        </section>

        {/* POLICIES */}
        <section id="policies" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why Facilities Restrict Intact Dogs (Policy Drivers)</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Insurance & risk:</strong> Underwriters often require clear intake rules and may exclude coverage for mating/whelping exposures.</li>
            <li><strong>Mixed-sex management:</strong> Keeping intact males and females separated adds staffing and square-footage complexity.</li>
            <li><strong>Noise/arousal control:</strong> Persistent mounting/posturing increases intervention load, which escalates group arousal.</li>
            <li><strong>Client expectations:</strong> Families want safe, low-drama play. Many operators standardize to spayed/neutered groups to simplify.</li>
          </ul>
          <p className="text-sm text-gray-700">
            None of this is a judgment on your dog. It’s logistics and liability. The good news: you can still get excellent exercise and social contact through curated options.
          </p>
        </section>

        {/* DECISION TREE */}
        <section id="decision" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Is Daycare a Fit for Your Intact Dog? (Decision Tree)</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Status check:</strong> Is your dog in-heat (or expected within 4 weeks)? If yes → <em>choose alternatives</em>.</li>
            <li><strong>History:</strong> Mounting/posturing/guarding in past group settings? If yes → consider small curated groups or 1:1 days.</li>
            <li><strong>Age/adolescence:</strong> &lt;24 months or recently matured? Trial only with tiny groups and veteran handlers.</li>
            <li><strong>Facility policy:</strong> Do they accept intact dogs at all? If yes, what rules (sex-separate groups, age limits, private play)?</li>
            <li><strong>Trial results:</strong> More than two handler interruptions in 10 minutes = environment mismatch → choose alternatives.</li>
          </ol>
        </section>

        {/* ALTERNATIVES */}
        <section id="alternatives" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Alternatives That Work (Often Better Than Daycare)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">1) One-on-One Enrichment Days</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rotations of sniff walks, puzzle feeders, basic training reps, and decompression naps.</li>
                <li>Great for adolescents and dogs who get overstimulated in groups.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">2) Small Curated Playgroups</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sex-separated, size/energy matched, with clear cutoffs for mounting and crowding.</li>
                <li>2–4 dogs max with a skilled handler and exit plans for over-arousal.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4">
              <h3 className="font-semibold mb-2">3) Day-Training Programs</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Professional trainer runs short sessions between rests: leash skills, settle on mat, play manners.</li>
                <li>Builds habits that translate to home life.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">4) Private Walks & Home-Style Boarding</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Inspected, low-density homes or sitter services; disclose intact status and in-heat dates.</li>
                <li>More supervision, fewer crowd triggers, and flexible routines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PLANNING */}
        <section id="planning" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Planning Calendars: Heat Cycles, Scheduling & Disclosure Etiquette</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Heat-Cycle Planning (Example)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Track:</strong> first day of spotting (proestrus) → expect 2–3 weeks total; avoid group settings for at least 28 days from onset.</li>
            <li><strong>Buffer:</strong> schedule alternatives from day −7 to +28 around predicted cycles (many dogs cycle ~ every 6 months).</li>
            <li><strong>Supplies:</strong> secure diapers, extra wipes, calm-space setup, enrichment that can be used in a private room.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Disclosure Etiquette</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Disclose intact status and expected cycle windows at booking.</li>
            <li>Give permission for staff to separate or switch to 1:1 if early signs appear.</li>
            <li>Update immediately if heat begins earlier than forecast.</li>
          </ul>
        </section>

        {/* INTACT MALES */}
        <section id="intact-males" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">For Intact Males: Best Practices & Realistic Expectations</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">When Daycare May Still Work</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Mature, stable temperament; minimal history of mounting or posturing.</li>
            <li>Sex-separate groups with low density and veteran handlers.</li>
            <li>Short sessions with built-in decompression and frequent reinforcement for calm behavior.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Signs It’s Not a Fit (Right Now)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Repeated mounting despite redirection; guarding at gates/water; fixating on certain dogs.</li>
            <li>More than two handler interruptions per 10 minutes to keep play safe.</li>
            <li>Escalating vocalizations or scuffles, even minor ones—choose curated alternatives.</li>
          </ul>
        </section>

        {/* PROS & CONS */}
        <section id="pros-cons" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Pros & Cons of Daycare With an Intact Dog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Potential Pros</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Energy outlet in a supervised setting (if well-matched group exists).</li>
                <li>Social contact and play rehearsal for confident, appropriate players.</li>
                <li>Routine and predictable schedule for families with long workdays.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚠️ Cons / Constraints</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Many facilities do not admit in-heat females or any intact adults.</li>
                <li>Higher arousal and conflict risk in busy groups; frequent redirections reduce quality of play.</li>
                <li>Operational/insurance limits mean fewer options and stricter rules.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WEEKLY PLAN */}
        <section id="weekly-plan" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Sample Weekly Enrichment Plan (Intact Dog, No Daycare)</h2>
          <p className="mb-3">
            This plan balances physical exercise, mental work, rest, and short social contacts. Swap days to fit your schedule and your dog’s preferences.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Mon:</strong> 2 × 20-min sniff walk + 10-min training (loose-leash, hand-target) + 15-min puzzle feeder.</li>
            <li><strong>Tue:</strong> 30-min hike or park loop (off-peak) + 10-min settle-on-mat practice.</li>
            <li><strong>Wed:</strong> One-on-one enrichment day with a pro (sniff games, place work, decompression).</li>
            <li><strong>Thu:</strong> Short playdate with a known compatible dog in a neutral yard (no toys/food out) + calm walk.</li>
            <li><strong>Fri:</strong> Day-training drop-off (skills + rest blocks) or private walk (45–60 min).</li>
            <li><strong>Sat:</strong> Adventure field trip (car ride, new trail) + frozen lickmat at home.</li>
            <li><strong>Sun:</strong> Rest day with short “find it” games and massage/brushing session.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quality control:</strong> If your dog needs constant interruption in any social setting, switch to solo enrichment and reassess later with a trainer.
          </div>
        </section>

        {/* TEMPLATES */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Templates & Scripts (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Disclosure Email to a Facility</h3>
          <div className="rounded-md border border-[#d9cfc2] bg-[#fffaf2] p-4 text-sm mb-4">
            <p>
              Subject: Intact Dog – Daycare Eligibility for {`{Dog Name}`} (Dates)<br />
              Hi {`{Facility}`}, my dog {`{Dog Name}`} is intact ({`{male/female}`}). {`{If female: Next heat approx. {month}}`}.<br />
              Do you accept intact dogs? If so, under what conditions (sex-separate groups, 1:1 only, age limits)?<br />
              Happy to schedule a short trial and follow any redirection rules. Thank you!
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Playdate Ground Rules (Owner → Owner)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Neutral, fenced yard; remove toys/food; start with parallel walking before off-leash.</li>
            <li>Watch for mounting/fixation; interrupt early with cheerful call-aways, then separate for a minute.</li>
            <li>Keep it short (10–15 minutes), then end on a calm note.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) “No Daycare Today” Home Schedule (Half Day)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>AM: 15-min sniff walk → breakfast in puzzle</li>
            <li>Noon: 10-min training (settle, place, recall)</li>
            <li>PM: 20-min neighborhood loop + 10-min “find it” indoors</li>
            <li>Evening: lickmat + grooming or massage</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions (15)</h2>

          <p className="mb-3">
            <strong>1) Is it “unfair” that many daycares won’t accept intact dogs?</strong><br />
            It’s a risk-management decision, not a value judgment. Operations, insurance, and group dynamics push facilities toward simpler, safer rules.
          </p>

          <p className="mb-3">
            <strong>2) Will my intact male be aggressive?</strong><br />
            Not automatically. Many intact males are social and appropriate. Group context, arousal, and prior rehearsal matter more than hormones alone.
          </p>

          <p className="mb-3">
            <strong>3) Do intact females act differently when not in heat?</strong><br />
            Some draw more attention; individual variation is huge. Outside of heat, many play well in small, sex-separate groups if a facility allows it.
          </p>

          <p className="mb-3">
            <strong>4) Can diapers make daycare possible during heat?</strong><br />
            No. Diapers don’t address attraction/arousal or pregnancy risk. Most facilities exclude in-heat dogs entirely.
          </p>

          <p className="mb-3">
            <strong>5) Isn’t daycare “required” for socialization?</strong><br />
            No. Socialization is about positive, controlled exposures—not endless group play. Walks, parallel sits, field trips, and calm playdates count.
          </p>

          <p className="mb-3">
            <strong>6) My intact dog did fine in puppy socials—why not now?</strong><br />
            Adolescent arousal, changing body chemistry, and larger, rowdier groups change the equation. Re-evaluate fit as your dog matures.
          </p>

          <p className="mb-3">
            <strong>7) Will neutering “fix” mounting or guarding?</strong><br />
            It may reduce hormone-driven behaviors but won’t replace training or environment changes. Discuss timing and risks/benefits with your vet.
          </p>

          <p className="mb-3">
            <strong>8) Are small playgroups safer?</strong><br />
            Often yes—especially sex-separate, size/energy-matched groups with clear rules and skilled handlers.
          </p>

          <p className="mb-3">
            <strong>9) How do I know if my dog is too aroused for group play?</strong><br />
            Repeated interruptions, fixating on dogs, vocalization spikes, ignoring recall—these signal the setting isn’t working today.
          </p>

          <p className="mb-3">
            <strong>10) What about intact dogs in home-style boarding?</strong><br />
            Many sitters accept intact dogs with management (separation, private yards). Disclose status and avoid heat windows.
          </p>

          <p className="mb-3">
            <strong>11) Could a “daycare lite” (half day) help?</strong><br />
            Maybe—shorter, structured sessions can reduce arousal. Evaluate with a trial and a clear exit plan.
          </p>

          <p className="mb-3">
            <strong>12) Are muzzles appropriate for daycare?</strong><br />
            Basket muzzles can increase safety during intros/handling, but they don’t fix environment fit. Use with training and consent.
          </p>

          <p className="mb-3">
            <strong>13) How far in advance should I disclose heat timing?</strong><br />
            Tell the facility at booking and again two weeks prior if you have a predicted window. Update immediately if signs start early.
          </p>

          <p className="mb-3">
            <strong>14) Can intact dogs attend training classes?</strong><br />
            Usually yes in controlled settings with space and management. Group play is different from group <em>learning</em>—ask the trainer first.
          </p>

          <p>
            <strong>15) If daycare is off the table, how much enrichment equals a daycare day?</strong><br />
            Two to three <em>quality</em> sessions (sniff walks, training, puzzle/chew) plus a brief social exposure typically meets needs better than 6 hours of chaotic group play.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Merck Veterinary Manual. <em>Reproductive Cycles in Dogs</em> (estrus timing and phases).
              <a href="https://www.merckvetmanual.com" target="_blank" rel="noopener noreferrer" className="ml-1 underline">merckvetmanual.com</a>
            </li>
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). <em>Humane Dog Training Position Statement</em> (reward-based handling; arousal management).
              <a href="https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 underline">PDF</a>
            </li>
            <li>
              International Association of Animal Behavior Consultants (IAABC) & Fear Free resources (group play, stress reduction in facilities).
              <a href="https://iaabc.org" target="_blank" rel="noopener noreferrer" className="ml-1 underline">iaabc.org</a> ·
              <a href="https://fearfreeshelters.com" target="_blank" rel="noopener noreferrer" className="ml-1 underline">fearfreeshelters.com</a>
            </li>
            <li>
              Association of Shelter Veterinarians (ASV). <em>Guidelines for Standards of Care</em> (housing, separation, enrichment—applicable to group settings).
              <a href="https://www.aspcapro.org/sites/default/files/2023-05/asvguidelinessecondedition-2022.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 underline">PDF</a>
            </li>
            <li>
              American College of Theriogenologists / Society for Theriogenology. Spay/neuter timing considerations (context for intact management; consult your vet).
              <a href="https://www.theriogenology.org/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">theriogenology.org</a>
            </li>
            <li>
              American College of Veterinary Behaviorists (ACVB). Owner resources on behavior and arousal management.
              <a href="https://www.dacvb.org/" target="_blank" rel="noopener noreferrer" className="ml-1 underline">dacvb.org</a>
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
