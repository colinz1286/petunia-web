'use client';

// SEO weakness notes: article is not registered in blogposts.ts/sitemap; duplicate/highly similar content risk (see /en/blog/whelping-complications-every-breeder-should-know); crowded query with low perceived distinctiveness
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function WhelpingComplicationsEveryBreederShouldKnow() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-2">Written on&nbsp;October&nbsp;30,&nbsp;2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Whelping Complications Every Breeder Should Know: Early Warning Signs, Emergencies, and When to Call the Vet
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Breeders
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2">
            Veterinary Clinics
          </span>
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
            Genetics &amp; Reproduction
          </span>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Awareness Matters</h2>
          <p>
            Most canine births progress normally—but when complications arise, minutes matter. 
            Knowing what’s normal, what’s not, and when to call your veterinarian can make the difference between a smooth delivery and tragedy. 
            The Kennel Club and Merck Veterinary Manual both stress early intervention as the single most important factor in successful outcomes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Common Whelping Complications</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1. Dystocia (Difficult Birth)</h3>
          <p>
            Dystocia occurs when normal labor stalls. Causes include oversized pups, uterine inertia, or pelvic narrowing.
            Strong contractions lasting over 30 minutes with no puppy, or more than 2 hours between pups, require veterinary help. 
            Brachycephalic breeds are especially prone to mechanical obstruction.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">2. Retained Puppies or Placentas</h3>
          <p>
            Retained fetuses or placentas lead to metritis (uterine infection) and toxic shock. 
            Radiographs or ultrasound confirm whether all puppies and placentas have passed. 
            Foul-smelling discharge or fever post-delivery are warning signs.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">3. Hypocalcemia (Eclampsia)</h3>
          <p>
            This life-threatening drop in blood calcium may develop during late pregnancy or lactation. 
            Symptoms include tremors, muscle stiffness, panting, or collapse. 
            Immediate calcium therapy at a veterinary hospital is required—do not give oral calcium during labor without veterinary instruction.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">4. Abnormal Discharge</h3>
          <p>
            Normal lochia is dark green and odorless for a few days. 
            Bright red, brown, or foul-smelling discharge suggests infection or retained tissue. 
            Green or black discharge <em>before</em> any puppy appears always warrants an emergency call.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">5. Uterine Inertia</h3>
          <p>
            Failure of contractions may follow exhaustion, calcium imbalance, or over-stretching from large litters. 
            A veterinarian may administer oxytocin or calcium under controlled conditions—but misuse can rupture the uterus, so never attempt this without guidance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Early Warning Signs</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Straining &gt; 30 minutes with no puppy produced.</li>
            <li>More than 2–3 hours between deliveries when fetuses remain.</li>
            <li>Green/black discharge before the first puppy is born.</li>
            <li>Dam becomes lethargic, weak, feverish, or collapses.</li>
            <li>Puppies appear stuck at the vulva or are not breathing.</li>
          </ul>
          <p>
            Any of these signs justify calling your vet immediately or proceeding to an emergency hospital. 
            Postponing evaluation can result in loss of both dam and litter.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Emergency Readiness</h2>
          <p>
            Preparation saves time in crisis. 
            Keep a whelping “go bag” near the box: clean towels, gloves, thermometer, puppy scale, hemostats, bulb syringe, and your vet’s 24-hour contact numbers. 
            Maintain reliable transport and fuel in case of emergency transfer. 
            Discuss C-section logistics ahead of time for high-risk litters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Reducing Risk Before Labor</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Perform pre-breeding pelvic and cardiac health checks on the dam.</li>
            <li>Record accurate progesterone timing to predict due dates precisely.</li>
            <li>Obtain radiographs after day 55 to know puppy counts and size.</li>
            <li>Keep nutrition balanced and avoid unnecessary supplements.</li>
            <li>Provide quiet, temperature-controlled whelping space with non-slip flooring.</li>
          </ul>
          <p>
            The Merck Veterinary Manual (2024) recommends discussing possible obstetric risks and emergency routes with your clinic before the first sign of labor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Related Reading</h2>
          <p>
            For a full overview of pregnancy stages and gestation timing, see our companion article&nbsp;
            <a
              href="https://www.petuniapets.com/en/blog/how-long-are-dogs-pregnant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How Long Are Dogs Pregnant? Gestation Timeline and Week-by-Week Development
            </a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Breeding responsibly means preparing for every outcome. 
            Understanding early warning signs, maintaining emergency readiness, and coordinating closely with your veterinary team ensures each whelping has the best possible chance for success. 
            In canine reproduction, vigilance is compassion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>
              Merck Veterinary Manual (2024). <em>Labor, Delivery and Postpartum Care in Bitches and Queens.</em>{' '}
              <a
                href="https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-dogs-and-cats/labor-delivery-and-postpartum-care-in-bitches-and-queens"
                target="_blank"
                rel="noopener noreferrer"
              >
                merckvetmanual.com
              </a>
            </li>
            <li>
              The Kennel Club (2025). <em>Whelping Complications and When to Call the Vet.</em>{' '}
              <a
                href="https://www.thekennelclub.org.uk/dog-breeding/first-time-breeders/whelping-complications-and-problems/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thekennelclub.org.uk
              </a>
            </li>
            <li>
              PetMD (2024). <em>Dystocia in Dogs — Recognising and Managing Difficult Births.</em>{' '}
              <a
                href="https://www.petmd.com/blogs/fullyvetted/2013/jan/dystocia-birth-problems-in-dogs-29692"
                target="_blank"
                rel="noopener noreferrer"
              >
                petmd.com
              </a>
            </li>
            <li>
              American Kennel Club (2024). <em>Whelping and Caring for Newborn Puppies.</em>{' '}
              <a
                href="https://www.akc.org/expert-advice/dog-breeding/whelping-and-caring-for-newborn-puppies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                akc.org
              </a>
            </li>
            <li>
              CARE Veterinary Group (2025). <em>Dystocia — Birth Emergencies and Intervention Planning.</em>{' '}
              <a
                href="https://carecharlotte.com/blog/dystocia-what-you-need-to-know-about-birth-emergencies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                carecharlotte.com
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is for educational purposes and does not replace professional veterinary guidance. 
            Always contact your veterinarian or a board-certified theriogenologist for case-specific evaluation.
          </p>
        </section>


        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to match the service to the actual dog</h2>
          <p className="mb-4">Owners get into trouble when they shop for boarding or daycare as if every dog needs the same kind of stimulation. The better question is how your dog handles novelty, recovery, confinement, transitions, noise, and group play. Service fit should follow temperament, health, and routine, not whatever package is easiest to book online.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Energy is not the only variable:</strong> some active dogs still need quiet decompression and controlled group exposure.</li>
            <li><strong>Watch recovery time:</strong> a dog that is excited at drop-off but wrecked for two days afterward may be over threshold.</li>
            <li><strong>Look at staff handling style:</strong> calm transitions, appropriate rest, and clean handoffs matter more than constant activity.</li>
            <li><strong>Test the fit before the big need:</strong> short daycare or trial stays reveal much more than a polished sales call.</li>
          </ul>
          <p className="mb-0">Good decisions come from watching how the dog functions during and after care, not from assuming more social time is always better.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Red flags that are worth walking away from</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>No clear answer on how dogs are separated for rest, medical needs, or overstimulation.</li>
            <li>Facility staff cannot explain incident reporting, medication handling, or emergency veterinary access.</li>
            <li>Evaluation relies on a quick meet-and-greet rather than structured observation over time.</li>
            <li>Communication after a trial stay is vague and focuses only on whether the dog was &quot;fine.&quot;</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/dog-boarding-vs-daycare" className="underline hover:opacity-80">Dog Boarding vs Daycare: How to Choose the Right Option for Your Dog</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/choose-dog-boarding-daycare" className="underline hover:opacity-80">How to Choose a Good Dog Boarding or Daycare Facility</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/how-to-know-if-my-dog-is-sick" className="underline hover:opacity-80">How to Know If My Dog Is Sick: Subtle Signs, Red Flags, Home Checks, Vet Care, Costs, and a Practical 72-Hour Plan</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
        <div className="mt-8">
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            &larr;&nbsp;Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
