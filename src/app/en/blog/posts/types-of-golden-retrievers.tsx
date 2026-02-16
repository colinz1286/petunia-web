'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreThereDifferentTypesOfGoldenRetrievers() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Are There Different Types of Golden Retrievers? Types, Similarities & Differences (Owner’s Guide)';
  const date = 'August 13, 2025';
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

  const description =
    'Do Golden Retrievers come in different types? Understand regional styles (American, British, Canadian), field vs. show lines, the “English cream” myth, similarities, differences, and how to choose the right fit for your family—with checklists and breeder vetting systems.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR + Petunia Tip</a></li>
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About “Types”</a></li>
            <li><a href="#official-standards" className="underline hover:opacity-80">Official Standards &amp; Regional Styles</a></li>
            <li><a href="#color-myths" className="underline hover:opacity-80">Color Myths (Incl. “English Cream”)</a></li>
            <li><a href="#field-vs-show" className="underline hover:opacity-80">Field vs. Show Lines</a></li>
            <li><a href="#similarities" className="underline hover:opacity-80">Core Similarities</a></li>
            <li><a href="#differences" className="underline hover:opacity-80">Real-World Differences</a></li>
            <li><a href="#sports-work" className="underline hover:opacity-80">Sports, Work &amp; Training Fit</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Across Types</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Coat, Color &amp; Grooming</a></li>
            <li><a href="#choosing" className="underline hover:opacity-80">Choosing a Breeder or Rescue</a></li>
            <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems &amp; Templates</a></li>
            <li><a href="#daycare-boarding" className="underline hover:opacity-80">Boarding &amp; Daycare Notes</a></li>
            <li><a href="#when-to-call-vet" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-4">
            Golden Retrievers don’t have official “sub-breeds,” but you’ll encounter <strong>regional styles</strong> (American, British, Canadian standards), and <strong>purpose-driven lines</strong> (field-bred vs. show-bred). All are Golden Retrievers. Differences tend to be in <strong>structure</strong> (bone, head, angles), <strong>coat</strong> (amount, texture, shade within gold/cream), and <strong>drive</strong> (working intensity), while <strong>temperament ideals</strong> and <strong>functional purpose</strong> are consistent across standards. Beware marketing claims like “<em>English Cream</em>” implying a healthier or separate dog—color is not a health guarantee. Choose the dog whose <strong>energy, structure, and breeder practices</strong> fit your family’s real life.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use Petunia to share your breeder paperwork (OFA/PennHIP, CAER eye exams, cardiac results), feeding plan, and early training routines with your daycare/boarding provider. Clear, sharable records keep everyone aligned during the high-energy puppy months.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About “Types” of Golden Retrievers</h2>
          <p className="mb-3">
            The word “type” often confuses buyers because it’s used in three overlapping ways:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Regional style:</strong> Dogs bred to meet the <em>same breed</em> but judged under different national standards (e.g., AKC in the U.S., The Kennel Club in the U.K., CKC in Canada). These standards are very similar, but wording and emphasis (including color language) differ slightly.</li>
            <li><strong>Purpose line:</strong> <em>Field-bred</em> (working) lines selected for retrieving performance and drive vs. <em>show-bred</em> (conformation) lines selected for ring appearance under breed standards. Many Goldens are successful in both domains, but selection pressure shapes tendencies.</li>
            <li><strong>Marketing label:</strong> Terms like “<em>English cream</em>” suggest a distinct type. In reality, this is a <em>color/marketing</em> phrase, not a separate breed. Responsible clubs explicitly caution buyers about this misrepresentation.</li>
          </ul>
          <p>
            This guide maps the real similarities and differences so you can choose based on <strong>fit</strong>, not hype: energy needs, structure for the activities you actually do, and breeder quality signals that predict soundness and temperament.
          </p>
        </section>

        {/* OFFICIAL STANDARDS & REGIONAL STYLES */}
        <section id="official-standards" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Official Standards &amp; Regional Styles</h2>
          <p className="mb-3">
            Golden Retrievers are recognized by major kennel clubs worldwide. The <strong>American Kennel Club (AKC)</strong> standard describes a <em>“rich, lustrous golden of various shades”</em> with balance, kindly expression, and a water-repellent double coat. The <strong>Canadian Kennel Club (CKC)</strong> and <strong>The Kennel Club (U.K.)</strong> standards are closely aligned, emphasizing a symmetrical gundog with flat or wavy coat and dense undercoat. Height ranges and color wording vary slightly between clubs, and that—plus breeding emphasis—drives the <em>visual</em> differences people notice in “American,” “Canadian,” or “British” style Goldens.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>AKC (U.S.):</strong> “Rich, lustrous golden of various shades,” with extremely pale or dark as <em>undesirable</em>; height 23–24 in (dogs), 21.5–22.5 in (bitches); friendly, reliable, trustworthy.</li>
            <li><strong>CKC (Canada):</strong> Color language explicitly ranges <em>“from cream to darkest gold.”</em> Heights/sizes nearly mirror AKC.</li>
            <li><strong>The Kennel Club (U.K.):</strong> <em>“Any shade of gold or cream, neither red nor mahogany,”</em> with strong emphasis on working gundog movement and water-resisting undercoat.</li>
          </ul>
          <p className="mb-3">
            Because conformation breeders aim at what local judges reward, regional rings can “drift” toward different looks: U.K. rings may favor more <em>cream</em>-tolerant coats, heavier bone, and a certain head style; U.S. rings may reward a warmer gold coat and slightly different outline dynamics. These are <strong>stylistic</strong> trends within one breed, not separate varieties.
          </p>
        </section>

        {/* COLOR MYTHS */}
        <section id="color-myths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Color Myths: “English Cream,” Red, and What Standards Actually Say</h2>
          <p className="mb-3">
            “<strong>English cream</strong>” is a popular sales phrase in North America implying a special, healthier, or rarer Golden. Breed organizations clarify that this is simply <em>lighter shade within the allowed range</em>—not a different breed. In the U.S., the AKC standard does <em>not</em> list “cream,” but permits <em>various shades of gold</em> and labels <em>extremely pale</em> (<em>and</em> extremely dark) as undesirable. In the U.K. and Canada, the standards explicitly allow <em>cream</em> shades. None of this creates a new “type.” Color is <strong>not</strong> a health guarantee.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Similarities:</strong> All acceptable coats are double, water-repellent, with feathering; temperament ideals are uniform.</li>
            <li><strong>Differences:</strong> Shade language in standards; show trend preferences by country; marketing language used by some sellers.</li>
            <li><strong>What to ignore:</strong> Claims that cream equals better temperament, lower cancer, or superior longevity. Evaluate the <em>breeding program</em>, not the paint color.</li>
          </ul>
        </section>

        {/* FIELD VS SHOW */}
        <section id="field-vs-show" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Field vs. Show Lines: Purpose Shapes the Package</h2>
          <p className="mb-3">
            Goldens are a <em>retrieving gundog</em>. When breeders prioritize <strong>field work</strong>, they select dogs that earn titles in field trials, hunt tests, and working certificates—marking ability, memory, water courage, and trainability under pressure. When breeders prioritize <strong>conformation</strong>, they emphasize structure, coat, and ring presence within the written standard. Many breeders strive for dual-purpose dogs, but generations of selection nudge averages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Field-Bred Tendencies</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Often leaner, more athletic outlines; slightly less coat volume; tight, functional feet.</li>
                <li>High retrieve drive (“birdiness”), stamina, water courage; quicker arousal that needs channeling.</li>
                <li>Excel in field tests/trials, detection/scent work, active sports (dock, agility, obedience).</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Show-Bred Tendencies</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Often heavier bone, more coat/feathering, distinct head style and outline favored in local rings.</li>
                <li>Steady, biddable temperament; still an athlete but selection pressure centers on type &amp; balance.</li>
                <li>Excel in conformation; many also compete in rally/obedience and can work in the field with training.</li>
              </ul>
            </div>
          </div>
          <p>
            These are <em>averages</em>, not rules. Individual dogs vary widely. The right question is, “Which <strong>specific breeder and pedigree</strong> produces the temperament and structure that fit my goals?”
          </p>
        </section>

        {/* SIMILARITIES */}
        <section id="similarities" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Similarities Across All Goldens</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Temperament ideals:</strong> friendly, reliable, trustworthy; strong human focus; high trainability.</li>
            <li><strong>Functional design:</strong> medium-large, symmetrical athlete; water-repellent double coat; efficient trot.</li>
            <li><strong>Work heritage:</strong> bred to retrieve game on land and water; love carrying objects; excel at nose-based work.</li>
            <li><strong>Care needs:</strong> regular exercise, coat care, mental enrichment, and cooperative care training.</li>
          </ul>
        </section>

        {/* DIFFERENCES */}
        <section id="differences" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Real-World Differences Owners Notice</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Look:</strong> more or less bone; head/stop shape; tail set and carriage; amount of feathering; shade within gold/cream.</li>
            <li><strong>Energy:</strong> field-bred dogs often have higher baseline drive and work stamina; show-bred often steadier by default.</li>
            <li><strong>Grooming time:</strong> heavier coats need more detangling and drying; lighter coats may dry faster but still shed heavily.</li>
            <li><strong>Sports aptitude:</strong> field pedigrees tend to accelerate in field venues; all lines can succeed in obedience/rally with training.</li>
          </ul>
          <p>
            None of these differences override the breed’s baseline: a social, trainable, retrieving athlete who thrives with structure and partnership.
          </p>
        </section>

        {/* SPORTS & WORK */}
        <section id="sports-work" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sports, Work &amp; Training Fit</h2>
          <p className="mb-3">
            If you want to hunt, run hunt tests, or train for field trials, look for pedigrees with <strong>field titles</strong> and breeder mentors active in that world. If you enjoy grooming and conformation showing, look for <strong>champion (CH) pedigrees</strong> that also value health and temperament. For most families, a well-bred companion from either side can thrive—what matters is <strong>breeder selection</strong>, socialization, and follow-through on training.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Field venues:</strong> Working Certificate (WC/WCX), AKC Hunt Tests, Retriever Field Trials.</li>
            <li><strong>Versatility:</strong> Many Goldens earn obedience, rally, scent, tracking, dock diving, and therapy certifications.</li>
          </ul>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Across Types: What Matters Most</h2>
          <p className="mb-3">
            There is <strong>no official evidence</strong> that a lighter coat (“cream”) is a magic shield against disease, or that one regional style is inherently healthier. What does move the needle is <strong>breeding practice</strong>: depth of health testing (hips, elbows, eyes, cardiac), honest discussion of pedigree risks, appropriate DNA testing where relevant, and transparent owner education. Then it’s about <strong>owner management</strong>—lean body condition, smart exercise, ear/skin care, and early veterinary attention to changes.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Baseline screening in breeding programs:</strong> OFA/PennHIP hips, OFA elbows, annual ACVO/CAER eye exams, and cardiac evaluations by a veterinary cardiologist.</li>
            <li><strong>Buyer due diligence:</strong> Read the official standard to understand functional structure. Ask for test numbers/links, not just assurances.</li>
          </ul>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Coat, Color &amp; Grooming</h2>
          <p className="mb-3">
            All Goldens have a double coat: protective outer hair that sheds water and a dense undercoat. Feathering varies. Heavier coats need more time to dry and detangle; lighter coats still shed and require weekly maintenance. Trim feet and tidy stray hairs; avoid sculpting into an artificial outline—a natural, functional coat is part of the breed’s identity.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Brush 2–4x/week; more during seasonal sheds. Bathe as needed with dog-safe shampoo.</li>
            <li>Dry fully after water play to prevent skin/ear issues.</li>
            <li>Use a comb through feathering and behind the ears to catch hidden mats.</li>
          </ul>
        </section>

        {/* CHOOSING */}
        <section id="choosing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Choosing a Breeder or Rescue (Fit Over Hype)</h2>
          <p className="mb-3">
            Start with your <strong>lifestyle</strong> and desired activities. Then evaluate breeder programs against objective health/temperament criteria. Avoid kennels that sell color as a premium or dismiss health testing as “unnecessary.” Good breeders mentor owners; great ones prove their dogs in the venues that align with their goals (field, conformation, performance).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ask for OFA/PennHIP, elbows, ACVO/CAER eye exam results, and advanced cardiac evaluations.</li>
            <li>Look for thoughtful temperaments (stable, biddable) over extremes (over-arousal or shyness).</li>
            <li>Contracts should protect the dog: return terms, spay/neuter timing guidance, and support if problems arise.</li>
          </ul>
        </section>

        {/* OPERATOR SYSTEMS */}
        <section id="operator-systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems &amp; Templates</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) Breeder Vetting Checklist (Save/Share)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Links or certificates for: OFA hips/elbows, CAER eyes (annual), cardiac evaluation (cardiologist-led), and any DNA tests the breeder deems relevant.</li>
            <li>Three-generation pedigree with titles (field, conformation, or performance) that match the breeder’s stated goals.</li>
            <li>Written health guarantee and return-to-breeder clause; lifetime take-back preferred.</li>
            <li>Early socialization plan (curriculum, noise surfaces, novelty) and buyer support (feeding, crate, training).</li>
            <li>Transparent discussion of common breed risks and how the kennel mitigates them (weight management guidance, ear/skin care education).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Lifestyle Fit Matrix (Owner Template)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Activity (0–5):</strong> How many structured movement blocks can you provide daily?</li>
            <li><strong>Training time (0–5):</strong> Honest hours per week for coaching/reinforcement?</li>
            <li><strong>Grooming tolerance (0–5):</strong> Time for drying/brushing after swims, seasonal sheds?</li>
            <li><strong>Noise/space:</strong> Apartment vs. yard; access to safe water and soft surfaces?</li>
            <li>Match your scores to breeder recommendations for <em>field-leaning</em> vs. <em>show-leaning</em> lines.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) First-90-Days Training Cadence (Puppy)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Weeks 8–12:</strong> 5–7 short socialization trips/week; name game; crate; potty plan; “settle on mat.”</li>
            <li><strong>Weeks 12–20:</strong> Leash mechanics; impulse control around toys/food; “give/drop” to protect retrieve love.</li>
            <li><strong>Weeks 20–26:</strong> Low-impact body awareness (cavaletti at appropriate heights), recall games, intro to water with ear-drying routine.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Paperwork Pack for Your Provider</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Breeder health results, vaccine dates, parasite prevention, feeding plan &amp; measuring cup size.</li>
            <li>Behavior notes: arousal triggers, settle routine, chew rules, water play limits, ear-care protocol.</li>
            <li>Emergency contacts: primary vet, nearest ER, and owner preferences.</li>
          </ul>
        </section>

        {/* DAYCARE/BOARDING */}
        <section id="daycare-boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare Notes by Line Tendencies</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Field-leaning youngsters:</strong> Prefer shorter, structured play blocks (retrieve &rarr; sniff reset) with enforced naps; watch over-arousal and mouthiness; include scent games.</li>
            <li><strong>Show-leaning coats:</strong> Allow extra time to dry/comb feathering after water; check behind ears and under tail for mats.</li>
            <li><strong>All Goldens:</strong> Use ear-drying after swims, traction on slick floors, and avoid marathon fetch. Log any skin hot spots or new lumps and notify owners the same day.</li>
          </ul>
        </section>

        {/* WHEN TO CALL THE VET */}
        <section id="when-to-call-vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Acute eye pain/redness or squinting; vision changes.</li>
            <li>Unproductive retching, a distended abdomen, collapse/weakness (possible bloat/GDV) → emergency.</li>
            <li>Non–weight-bearing lameness after a twist/sprint; severe pain or sudden swelling of a joint.</li>
            <li>Heat stress signs (excessive panting, wobble, collapse), especially after water or intense play.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">FAQ</h2>

          <p className="mb-3">
            <strong>Are “English cream” Goldens a distinct type?</strong><br />
            No. It’s a color/marketing term. In the U.K. and Canada, cream shades are explicitly permitted. In the U.S., the standard allows various shades of gold and considers <em>extremely</em> pale or dark undesirable—none of which creates a separate variety.
          </p>

          <p className="mb-3">
            <strong>Is one type healthier?</strong><br />
            Health depends on <em>breeding choices</em> (screening depth, honest pedigree review) and owner management (lean weight, structured activity, early care), not a color label or regional style.
          </p>

          <p className="mb-3">
            <strong>Which is better for family life—field or show lines?</strong><br />
            Either, if bred and raised well. Field-leaning dogs often bring more drive that needs structured outlets; show-leaning dogs may be a touch steadier by default. Match <em>your</em> daily rhythm, training time, and activity level.
          </p>

          <p className="mb-3">
            <strong>Can a show-bred dog work in the field (or vice versa)?</strong><br />
            Yes. Many lines retain versatility. Look for pedigrees with titles that match your ambitions and trainers who coach beginners.
          </p>

          <p>
            <strong>How do I avoid being misled by marketing?</strong><br />
            Ask for verifiable health results (with registry links), meet relatives when possible, and focus on breeder transparency and mentorship—never on coat shade hype.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). <em>Official Standard for the Golden Retriever</em>.{' '}
              <a href="https://images.akc.org/pdf/breeds/standards/GoldenRetriever.pdf" target="_blank" rel="noopener noreferrer">https://images.akc.org/pdf/breeds/standards/GoldenRetriever.pdf</a>
            </li>
            <li>
              The Kennel Club (U.K.). <em>Retriever (Golden) Breed Standard</em>.{' '}
              <a href="https://www.thekennelclub.org.uk/breed-standards/gundog/retriever-golden/" target="_blank" rel="noopener noreferrer">https://www.thekennelclub.org.uk/breed-standards/gundog/retriever-golden/</a>
            </li>
            <li>
              Canadian Kennel Club (CKC). <em>Retriever (Golden) Breed Standard</em> (2022).{' '}
              <a href="https://www.ckc.ca/CanadianKennelClub/media/Breed-Standards/Group%201/Retriever-Golden.pdf" target="_blank" rel="noopener noreferrer">https://www.ckc.ca/.../Retriever-Golden.pdf</a>
            </li>
            <li>
              Golden Retriever Club of America (GRCA). <em>English Cream Golden Retrievers</em> (buyer advisory).{' '}
              <a href="https://grca.org/find-a-golden/more-topics-before-you-buy/english-cream-golden-retrievers/" target="_blank" rel="noopener noreferrer">https://grca.org/.../english-cream-golden-retrievers/</a>
            </li>
            <li>
              GRCA. <em>What Exactly is an “English” Golden Retriever</em>.{' '}
              <a href="https://grca.org/about-the-breed/articles/what-exactly-is-an-english-golden-retriever/" target="_blank" rel="noopener noreferrer">https://grca.org/.../what-exactly-is-an-english-golden-retriever/</a>
            </li>
            <li>
              GRCA. <em>An Illustrated Guide to the Breed</em> (Study Guide).{' '}
              <a href="https://grca.org/wp-content/uploads/2015/08/II.F.6_-_FinalGRCAStudyGuide20151.pdf" target="_blank" rel="noopener noreferrer">https://grca.org/.../FinalGRCAStudyGuide20151.pdf</a>
            </li>
            <li>
              GRCA. <em>Size Disqualification in Golden Retrievers</em> (judges’ education).{' '}
              <a href="https://grca.org/about-the-breed/judges-education/size-disqualification-in-golden-retrievers/" target="_blank" rel="noopener noreferrer">https://grca.org/.../size-disqualification-in-golden-retrievers/</a>
            </li>
            <li>
              AKC. <em>Retriever Field Trials</em> overview.{' '}
              <a href="https://www.akc.org/sports/retrievers/field-trials/" target="_blank" rel="noopener noreferrer">https://www.akc.org/sports/retrievers/field-trials/</a>
            </li>
            <li>
              GRCA. <em>WC/WCX: GRCA’s Working Certificate &amp; Working Certificate Excellent Program</em>.{' '}
              <a href="https://grca.org/about-grca/grca-events-titles-and-awards-for-dogs/grca-titling-events/wcwcx-grcas-working-certificate-wc-and-working-certificate-excellent-wcx-program/" target="_blank" rel="noopener noreferrer">https://grca.org/.../wcwcx-program/</a>
            </li>
            <li>
              AKC. <em>Retriever Hunting Test Regulations</em> (rulebook).{' '}
              <a href="https://images.akc.org/pdf/rulebooks/AKC1295_RHTRET_0518_WEB.pdf" target="_blank" rel="noopener noreferrer">https://images.akc.org/pdf/rulebooks/AKC1295_RHTRET_0518_WEB.pdf</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary or breeding counsel. Always consult your veterinarian and responsible breed mentors when making health and selection decisions.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
