'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FrenchBulldogPuppiesForSaleNearMeGuide() {
  const locale = useLocale();

  const title =
    'French bulldog puppies for sale near me – a guide to finding the right puppy for you and your family';
  const date = 'August 28, 2025';
  const slug = 'french-bulldog-puppies-for-sale-near-me';
  const categories = ['owner', 'breeder', 'rescue'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    breeder: 'Breeders',
    rescue: 'Rescues',
    boarding: 'Boarding',
    daycare: 'Daycare',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A practical, vet-informed guide for families searching “French bulldog puppies for sale near me.” Learn how to evaluate rescues and responsible breeders, which health tests and screenings matter (BOAS, eyes, hips, elbows, patellas, cardiac), what questions to ask, how to spot red flags, and how to assess temperament so you bring home the right Frenchie for your household.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per house rules */}
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
            <li><a href="#summary" className="underline hover:opacity-80">TL;DR Summary</a></li>
            <li><a href="#start-here" className="underline hover:opacity-80">Start Here: What “near me” should mean</a></li>
            <li><a href="#adoption-vs-breeder" className="underline hover:opacity-80">Adoption vs. Responsible Breeder</a></li>
            <li><a href="#find-rescue" className="underline hover:opacity-80">How to Find a Good Rescue</a></li>
            <li><a href="#questions-rescue" className="underline hover:opacity-80">Questions to Ask a Rescue/Shelter</a></li>
            <li><a href="#find-breeder" className="underline hover:opacity-80">How to Find a Responsible Breeder</a></li>
            <li><a href="#questions-breeder" className="underline hover:opacity-80">Questions to Ask a Breeder</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Testing &amp; What Matters for Frenchies</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament Checks (Calm, Kind, Adaptable)</a></li>
            <li><a href="#contracts" className="underline hover:opacity-80">Contracts, Guarantees &amp; Red Flags</a></li>
            <li><a href="#budget" className="underline hover:opacity-80">Budget: Upfront &amp; Lifetime Costs</a></li>
            <li><a href="#bring-home" className="underline hover:opacity-80">Bring-Home Checklist</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
          <p className="mb-4">
            When you search “French bulldog puppies for sale near me,” prioritize health transparency and humane practices over convenience. For rescues, look for clear medical and behavior notes plus a return safety net. For breeders, ask for parent health testing (respiratory function grading, eyes, hips, elbows, patellas, and cardiac as appropriate), meet the dam, and review a written contract with lifetime take-back. Frenchies are beloved companions, but they are also a brachycephalic breed; thoughtful selection, weight control, and climate-aware routines protect their comfort for the next decade.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Once you&#39;ve chosen your Frenchie, add vaccine due dates, medications, feeding amounts, and your vet&#39;s info to your Petunia profile so boarding/daycare teams follow your plan precisely and avoid avoidable stress.
          </div>
        </section>

        {/* Start here */}
        <section id="start-here" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Start Here: What “near me” should mean</h2>
          <p className="mb-3">
            “Near me” isn&#39;t just a drive time—it&#39;s alignment with your family&#39;s needs. A responsible breeder or transparent rescue an hour away is “closer” to a happy, healthy life than a quick pickup with vague paperwork. Many families travel for the right Frenchie. Treat the visit as part of your due diligence so you can see living conditions, meet people, and confirm health records.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Be flexible on radius.</strong> Health standards and lifetime support matter more than the shortest route.</li>
            <li><strong>See the setup.</strong> Clean, calm whelping or foster spaces and confident, friendly dogs are good signals.</li>
            <li><strong>Ask for videos.</strong> They can supplement—but not replace—an in-person visit.</li>
          </ul>
        </section>

        {/* Adoption vs breeder */}
        <section id="adoption-vs-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Adoption vs. Responsible Breeder: Two good paths</h2>
          <p className="mb-3">
            Adoption and responsible breeding are both ethical ways to welcome a French bulldog. Adoption can be faster and often provides adult-dog insights from fosters. Responsible breeders provide documented health screening on parents, early socialization, and tailored support. Choose the path that fits your timeline, preferences, and comfort with knowns vs. unknowns—then do the same level of due diligence either way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Adoption: Strengths</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Transparent rescues share medical history, behavior notes, and training plans.</li>
                <li>Adult Frenchies may already be house-trained and settled, easing the transition.</li>
                <li>Return policies provide a safety net if the match isn&#39;t right.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
              <h3 className="font-semibold mb-2">Responsible Breeder: Strengths</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Documented health testing on parents (respiratory grading, eyes, hips/elbows, patellas, cardiac where applicable).</li>
                <li>Predictable size and temperament tendencies within a line; structured early socialization.</li>
                <li>Lifetime take-back and ongoing support are common.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Find rescue */}
        <section id="find-rescue" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Find a Good Rescue</h2>
          <p className="mb-3">
            Excellent organizations are transparent about veterinary care, behavior evaluation, and post-adoption support. Breed-specific Frenchie rescues understand typical needs (heat sensitivity, breathing considerations) and can match energy levels and handling tolerance to your home.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Records:</strong> Vaccines, deworming, microchip, spay/neuter status, and any known medical conditions or surgeries.</li>
            <li><strong>Behavior notes:</strong> Sociability with people and dogs, tolerance of handling and grooming, noise sensitivity, and crate comfort.</li>
            <li><strong>Meet-and-greets:</strong> Multiple visits are encouraged; bring the family and resident dog if appropriate.</li>
            <li><strong>Return policy:</strong> A clear safety net for the dog if placement isn&#39;t the right fit.</li>
            <li><strong>Foster insights:</strong> Daily routines, heat management, and how the dog settles after excitement.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Upload the adoption records (PDFs or images) to Petunia so boarding/daycare providers can see due dates and special instructions at a glance.
          </div>
        </section>

        {/* Questions for rescue */}
        <section id="questions-rescue" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask a Rescue or Shelter</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Medical:</strong> What vaccinations, parasite control, and exams has the dog received? Any BOAS-related notes (snoring, exercise intolerance), eye care, skin fold dermatitis, spine concerns?</li>
            <li><strong>Behavior:</strong> How does the dog handle new people, grooming, and brief alone time? Any resource guarding history?</li>
            <li><strong>Dog-to-dog:</strong> Play style with calm dogs vs. high-energy dogs; recommended introductions and decompression plan.</li>
            <li><strong>Climate:</strong> How does the dog handle heat or humidity? What routines keep breathing relaxed?</li>
            <li><strong>Support:</strong> What post-adoption help is available (trainer referrals, behavior consults, return policy)?</li>
          </ul>
        </section>

        {/* Find breeder */}
        <section id="find-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Find a Responsible Breeder</h2>
          <p className="mb-3">
            Look for people who breed with purpose beyond sales: improving health, structure, and temperament; participating in breed clubs and events; and standing behind every puppy. Responsible breeders plan litters, limit numbers, screen homes, and welcome hard questions. Many follow breed-club health testing recommendations and use third-party registries for results.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Health screening:</strong> Respiratory function grading (for brachycephalic airway risk), eye exams, hips/elbows where applicable, patellas, and cardiac screening per club guidance.</li>
            <li><strong>Environment:</strong> Clean whelping/raising spaces, appropriate surfaces, gentle handling, early socialization, and calm exposure to normal household sounds.</li>
            <li><strong>Placement:</strong> Matching puppies to homes using observations of recovery, human orientation, handling tolerance, and energy regulation.</li>
            <li><strong>Lifetime take-back:</strong> If life changes, they accept the dog back and help rehome responsibly.</li>
          </ul>
        </section>

        {/* Questions for breeder */}
        <section id="questions-breeder" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask a Breeder</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Respiratory:</strong> Do you use a respiratory function grading scheme for the parents? May I see written results and your veterinarian&#39;s notes?</li>
            <li><strong>Screening documents:</strong> May I see eye exam certificates and registry numbers? What hip/elbow approach do you follow, and are patellas and basic cardiac exams recorded?</li>
            <li><strong>Temperament &amp; socialization:</strong> How do the parents behave with visitors and at rest in the home? What enrichment and crate/transport introductions do puppies receive?</li>
            <li><strong>Contract &amp; support:</strong> What are your take-back terms, health guarantees, and expectations for care? How do you support owners through adolescence?</li>
            <li><strong>References:</strong> May I speak with owners from prior litters and your primary veterinarian?</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ask for digital copies of parent test results and your contract; store them in Petunia with notes so future vets and care providers can view them quickly.
          </div>
        </section>

        {/* Health */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health Testing &amp; What Matters for Frenchies</h2>
          <p className="mb-3">
            French bulldogs are a brachycephalic breed, which means their short muzzle can predispose them to breathing challenges. Ethical selection minimizes risk. You are not seeking “perfect”—you are stacking the odds in favor of comfort by asking for relevant screening and planning your home to support calm routines and healthy body weight.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Key screenings to ask about</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Respiratory function grading (BOAS):</strong> A structured assessment that evaluates breathing at rest and after light exercise helps identify dogs affected by brachycephalic obstructive airway syndrome.</li>
            <li><strong>Eyes:</strong> Exam by a veterinary ophthalmologist; Frenchies can be prone to corneal and eyelid issues—screening supports early detection and ethical breeding.</li>
            <li><strong>Patellas &amp; cardiac:</strong> Basic orthopedic and cardiac screening (auscultation; echocardiogram if indicated) are commonly recorded by responsible breeders.</li>
            <li><strong>Hips/elbows:</strong> Some breeders also screen hips/elbows and disclose methods used. Ask how they interpret results and why they test.</li>
            <li><strong>Weight &amp; conditioning plan:</strong> Regardless of source, commit to lean body condition—extra weight worsens breathing and joint stress.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Everyday care considerations for brachycephalic dogs</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Climate:</strong> Avoid heat/humidity spikes; schedule play for mornings/evenings and use shade and water generously.</li>
            <li><strong>Activity:</strong> Short, structured sessions with rest blocks; prioritize sniff walks and puzzles over frantic sprints.</li>
            <li><strong>Handling &amp; grooming:</strong> Gentle wrinkle care and drying after baths; watch for skin fold irritation.</li>
            <li><strong>Medical planning:</strong> Discuss anesthesia and sedation plans with your veterinarian well in advance of any procedure.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add heat-management notes (cooling mats, fans, shaded routes) to your Petunia profile so sitters/daycare staff follow the same playbook you use at home.
          </div>
        </section>

        {/* Temperament */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament Checks (Calm, Kind, Adaptable)</h2>
          <p className="mb-3">
            A great Frenchie is people-oriented, affectionate, and able to settle. No single test predicts a lifetime, but simple observations reveal useful tendencies. Keep sessions short and kind; avoid over-arousal. If you can, bring a trainer or behavior professional for a second set of eyes.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">A gentle framework you can use</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Social approach:</strong> Does the puppy volunteer soft contact and re-engage after brief pauses?</li>
            <li><strong>Startle/recovery:</strong> A neutral novel sound should prompt orienting and quick recovery with support.</li>
            <li><strong>Handling tolerance:</strong> Brief touches of ears, paws, and tail; relaxed acceptance is ideal. Keep it light.</li>
            <li><strong>Toy/food engagement:</strong> Enjoys a toy but can disengage; trades a chew for a treat without tension.</li>
            <li><strong>Energy regulation:</strong> After short play, can the puppy settle on a mat with you?</li>
            <li><strong>Calm curiosity:</strong> Low-stakes puzzles show persistence without frustration spirals.</li>
          </ul>
          <p className="mb-3">
            Responsible breeders track these observations to help match puppies to homes. Rescues rely on foster notes across many days, which is equally valuable because it reflects real-home rhythms and climate management.
          </p>
        </section>

        {/* Contracts */}
        <section id="contracts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Contracts, Guarantees &amp; Red Flags</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Healthy contracts contain</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Identification:</strong> Microchip number, birth date or estimated age, color/markings, registration info when applicable.</li>
            <li><strong>Vet care up to transfer:</strong> Vaccines/deworming with dates, exam notes, and any medications provided.</li>
            <li><strong>Return/take-back:</strong> Clear language that the dog can be returned at any time if needed.</li>
            <li><strong>Health guarantee (breeder):</strong> What&#39;s covered, duration, and documentation steps.</li>
            <li><strong>Owner commitments:</strong> Humane training, weight management, climate-aware routines, and veterinary partnership.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Red flags to avoid</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Reluctance to meet in person or show living conditions; pressure to send money quickly via untraceable methods.</li>
            <li>Vague promises to provide health testing “later,” or no familiarity with respiratory grading.</li>
            <li>Large, constant availability with minimal screening of homes—volume can trump welfare.</li>
            <li>Unrealistic guarantees or punitive clauses that discourage returning a dog if the placement fails.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store the signed contract and test PDFs in Petunia. That keeps your care team aligned and speeds up boarding/daycare bookings.
          </div>
        </section>

        {/* Budget */}
        <section id="budget" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budget: Upfront &amp; Lifetime Costs</h2>
          <p className="mb-3">
            Plan for veterinary care, training, quality nutrition, and climate-aware gear. Adoption fees and breeder prices vary by region and pedigree. Regardless of path, budgeting for preventive care, dental cleanings, and potential specialist visits will make life less stressful.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Upfront:</strong> Adoption/purchase fee, initial vet visit, vaccines as due, crate and mat, safe chew toys, harness/leash, training sessions.</li>
            <li><strong>Recurring:</strong> Food, parasite prevention, grooming and wrinkle care, dental hygiene, replacement of toys/equipment.</li>
            <li><strong>Contingency:</strong> Savings for urgent care or surgery, including airway or eye issues if your veterinarian recommends evaluation.</li>
          </ul>
        </section>

        {/* Bring home checklist */}
        <section id="bring-home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Bring-Home Checklist</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Records:</strong> Printed or digital copies of vaccines, deworming, microchip, and any respiratory/eye/orthopedic screening results.</li>
            <li><strong>Crate &amp; mat:</strong> Calm den space and predictable rest routines—rest is part of safety for energetic puppies.</li>
            <li><strong>Nutrition plan:</strong> Food brand, measured amounts, and transition instructions; avoid rapid diet changes without vet guidance.</li>
            <li><strong>Climate plan:</strong> Cooling mat, shade, fans, and early/late walks; skip mid-day exertion in heat/humidity.</li>
            <li><strong>Vet appointment:</strong> Book a wellness visit to establish care, review breathing/eye/skin notes, and confirm microchip registration.</li>
            <li><strong>Training structure:</strong> Short daily sessions, gentle socialization, and decompression walks; teach an “off switch.”</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Use Petunia reminders to track vaccine expirations and to share climate notes with your sitter/daycare so everyone runs the same plan.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>What is respiratory function grading and why does it matter?</strong><br />
            It is a structured clinical assessment for brachycephalic dogs that evaluates breathing at rest and after light exercise. Results help owners and breeders understand risk and make care or breeding decisions.
          </p>
          <p className="mb-3">
            <strong>Do Frenchies need eye exams?</strong><br />
            Eye screening by a veterinary ophthalmologist can detect issues early and informs ethical breeding. Ask to see certificates and current results.
          </p>
          <p className="mb-3">
            <strong>Are Frenchies safe under anesthesia?</strong><br />
            Many undergo procedures safely with appropriate protocols, but brachycephalic breeds have higher risks around anesthesia/sedation. Discuss airway and recovery plans with your veterinarian well in advance of any procedure.
          </p>
          <p className="mb-3">
            <strong>Can a Frenchie be an active family dog?</strong><br />
            Yes—within climate-aware limits. Short, structured play with generous rest keeps breathing comfortable. Avoid heat spikes and high-arousal marathons.
          </p>
          <p>
            <strong>Does Petunia replace veterinary care?</strong><br />
            No—Petunia organizes information and routines. Your veterinarian provides diagnosis and treatment. Use Petunia to keep care teams aligned.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Kennel Club (AKC). French Bulldog breed overview and care notes.{' '}
              <a href="https://www.akc.org/dog-breeds/french-bulldog/" target="_blank" rel="noopener noreferrer">
                https://www.akc.org/dog-breeds/french-bulldog/
              </a>
            </li>
            <li>
              University of Cambridge &amp; The Kennel Club. Respiratory Function Grading Scheme (BOAS) for brachycephalic breeds.{' '}
              <a href="https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis" target="_blank" rel="noopener noreferrer">
                https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis
              </a>{' '}
              and{' '}
              <a href="https://www.thekennelclub.org.uk/health-and-dog-care/health/getting-started-with-health-testing-and-screening/respiratory-function-grading-scheme/" target="_blank" rel="noopener noreferrer">
                https://www.thekennelclub.org.uk/.../respiratory-function-grading-scheme/
              </a>
            </li>
            <li>
              Orthopedic Foundation for Animals (OFA). CHIC program &amp; Respiratory Function Grading in the U.S.; breed-specific registry guidance.{' '}
              <a href="https://ofa.org/chic-programs/" target="_blank" rel="noopener noreferrer">https://ofa.org/chic-programs/</a>{' '}
              ·{' '}
              <a href="https://ofa.org/diseases/rfgs/" target="_blank" rel="noopener noreferrer">https://ofa.org/diseases/rfgs/</a>
            </li>
            <li>
              French Bull Dog Club of America (FBDCA). Health testing &amp; registries (hips, eyes, patellas, cardiac; CHIC participation).{' '}
              <a href="https://frenchbulldogclub.org/health/testingregistries/" target="_blank" rel="noopener noreferrer">
                https://frenchbulldogclub.org/health/testingregistries/
              </a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). Brachycephalic syndrome overview &amp; surgical options.{' '}
              <a href="https://www.acvs.org/small-animal/brachycephalic-syndrome/" target="_blank" rel="noopener noreferrer">
                https://www.acvs.org/small-animal/brachycephalic-syndrome/
              </a>
            </li>
            <li>
              AVMA / JAVMA &amp; AAHA. Peri-anesthetic considerations for brachycephalic dogs.{' '}
              <a href="https://avmajournals.avma.org/view/journals/javma/253/3/javma.253.3.301.xml" target="_blank" rel="noopener noreferrer">
                https://avmajournals.avma.org/.../javma.253.3.301.xml
              </a>{' '}
              ·{' '}
              <a href="https://www.aaha.org/trends-magazine/publications/anesthetic-considerations-for-brachycephalic-dog-breeds/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/.../anesthetic-considerations-for-brachycephalic-dog-breeds/
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
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
