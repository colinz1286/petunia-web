// File: src/app/blog/posts/board-or-hire-pet-sitter.tsx
'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardOrHirePetSitter() {
  const locale = useLocale();

  const title =
    'Should I Board My Dog or Hire a Pet Sitter? A Complete, Neutral Guide for Dog Owners';
  const date = 'May 18, 2025';
  const categories = ['owner', 'sitter', 'boarding'];

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

        {/* Local anchor nav */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#intro" className="underline hover:opacity-80">Introduction</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Separation Anxiety & Socialization</a></li>
            <li><a href="#boarding" className="underline hover:opacity-80">What Boarding/Daycare Offer</a></li>
            <li><a href="#sitting" className="underline hover:opacity-80">What In-Home Sitting Involves</a></li>
            <li><a href="#pros-cons" className="underline hover:opacity-80">Pros & Cons</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Safety & Security</a></li>
            <li><a href="#special-cases" className="underline hover:opacity-80">Special Cases</a></li>
            <li><a href="#owner" className="underline hover:opacity-80">Owner Comfort & Privacy</a></li>
            <li><a href="#checklist" className="underline hover:opacity-80">Decision Checklist</a></li>
            <li><a href="#questions" className="underline hover:opacity-80">Questions to Ask Providers</a></li>
            <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Introduction — Why This Decision Matters</h2>
          <p className="mb-4">
            Travel plans raise a big question for every dog owner: <em>Should I board my dog
            or hire a pet sitter?</em> The right answer depends on your dog’s age, temperament,
            health, social needs, and your comfort with privacy and logistics. This guide stays
            strictly neutral and practical. We’ll outline what each option really looks like,
            their unique risks and benefits, and how to choose what’s best for <strong>your</strong> dog.
          </p>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Separation Anxiety & Early Socialization</h2>
          <p className="mb-4">
            Thoughtful exposure to short, safe separations early in life can reduce the odds of
            separation anxiety later. In practice, that means introducing brief daycare or boarding
            experiences while your dog is young and gradually building duration. Waiting until age
            three, four, or five to try boarding for the first time often makes acclimation harder.
          </p>
          <p className="mb-4">
            Research on socialization suggests that positive, structured exposure to new places,
            people, and routines improves adaptability and resilience. Your goal isn’t to flood the
            dog with novelty; it’s to create a handful of calm, successful reps that teach
            “being away from my person is safe.”
          </p>
        </section>

        {/* BOARDING / DAYCARE */}
        <section id="boarding" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What Boarding & Daycare Offer</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Physical security</strong> via fencing, controlled entry/exit, and staff oversight.</li>
            <li><strong>Social enrichment</strong> through temperament-matched playgroups or one-on-one time.</li>
            <li><strong>Structured routine</strong> for feeding, rest, and activity blocks.</li>
            <li><strong>Professional monitoring</strong> for health/behavior changes and medication administration.</li>
          </ul>
          <p className="mb-2 font-semibold">Common risks/considerations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Higher exposure to infectious disease compared with home care.</li>
            <li>Potential overstimulation for noise-sensitive or socially selective dogs.</li>
            <li>Not all facilities offer small group sizes or quiet rooms—ask.</li>
          </ul>
        </section>

        {/* IN-HOME PET SITTING */}
        <section id="sitting" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What In-Home Pet Sitting Involves</h2>
          <p className="mb-4">
            In-home sitters either make multiple daily visits or live in your home overnight.
            Dogs stay in their own environment and routine, which can be calming—especially for
            seniors or dogs that dislike group settings.
          </p>
          <p className="mb-2 font-semibold">Advantages:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Familiar sights, sounds, and resting places; minimal disruption to routine.</li>
            <li>One-on-one attention tailored to your dog’s needs.</li>
            <li>Helpful for shy, reactive, or medically fragile dogs who don’t enjoy group care.</li>
          </ul>
          <p className="mb-2 font-semibold">Risks/considerations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Escape risk if the sitter mishandles doors/yards (especially unfenced spaces).</li>
            <li>Privacy and security concerns with a person in your home.</li>
            <li>Gaps in supervision during non-overnight sitter schedules.</li>
            <li>Highly variable training/experience among sitters—vet thoroughly.</li>
          </ul>
        </section>

        {/* PROS & CONS TABLE */}
        <section id="pros-cons" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Side-by-Side Pros & Cons</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#d9cfc2]">
              <thead className="bg-[#e4dbcb]">
                <tr>
                  <th className="text-left p-3 border-b border-[#d9cfc2]">Factor</th>
                  <th className="text-left p-3 border-b border-[#d9cfc2]">Boarding & Daycare</th>
                  <th className="text-left p-3 border-b border-[#d9cfc2]">In-Home Pet Sitting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Safety/Security</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Controlled facility with fencing and staff.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Depends on sitter’s practices and your home setup.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Socialization</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Playgroups or supervised interactions.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">One-on-one human attention; no dog group time.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Routine</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Facility schedule; some flexibility with add-ons.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Home routine preserved; familiar environment.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Supervision</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Continuous during open hours, checks overnight.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Varies: live-in vs. drop-in visits.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Privacy</td>
                  <td className="p-3 border-b border-[#d9cfc2]">No one in your home.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Sitter accesses your home; set boundaries/cameras.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Illness Risk</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Higher (group environment); mitigated by vaccines/sanitation.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Lower if no contact with outside dogs.</td>
                </tr>
                <tr className="align-top">
                  <td className="p-3 border-b border-[#d9cfc2] font-medium">Escape Risk</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Low with proper fencing and double-gating.</td>
                  <td className="p-3 border-b border-[#d9cfc2]">Higher if yards are unfenced or doors/gates mishandled.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SAFETY & SECURITY */}
        <section id="safety" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Safety & Security Considerations</h2>
          <h3 className="text-xl font-semibold mb-2">Boarding/Daycare — What to Verify</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Vaccination requirements and illness protocols.</li>
            <li>Staff training, supervision levels, and group-size policies.</li>
            <li>Facility layout (double-door entries, fencing, quiet areas).</li>
            <li>Emergency plans (vet partnerships, transport, incident reporting).</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">In-Home Sitters — What to Verify</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Background checks, references, insurance/bonding.</li>
            <li>Clear instructions for doors, gates, alarms, and keys.</li>
            <li>Visit schedule vs. overnight presence; maximum alone time.</li>
            <li>Plan for emergencies and access to your veterinarian.</li>
          </ul>
        </section>

        {/* SPECIAL CASES */}
        <section id="special-cases" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Special Cases</h2>
          <h3 className="text-xl font-semibold mb-2">Puppies</h3>
          <p className="mb-4">
            Prioritize short, positive exposures. Choose facilities with puppy-appropriate
            groupings and vaccination policies. For very young or not-yet-fully-vaccinated puppies,
            consider limited in-home care plus controlled social exposure.
          </p>

          <h3 className="text-xl font-semibold mb-2">Seniors</h3>
          <p className="mb-4">
            Many seniors value predictability. In-home care can be ideal; alternatively, quiet
            boarding suites with extra rest time work well if medical monitoring is needed.
          </p>

          <h3 className="text-xl font-semibold mb-2">Medical Needs</h3>
          <p className="mb-4">
            Whether you choose boarding or sitting, confirm experience with medication schedules,
            injections (if needed), and red-flag symptoms. Written instructions and pre-trip test
            runs are essential.
          </p>

          <h3 className="text-xl font-semibold mb-2">Anxious or Reactive Dogs</h3>
          <p>
            For dogs who struggle in groups, in-home sitters or quiet, individual boarding tracks
            can reduce stress. Gradual acclimation to a facility (short stays first) can help if
            boarding will be necessary in the future.
          </p>
        </section>

        {/* OWNER COMFORT & PRIVACY */}
        <section id="owner" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Owner Comfort & Privacy</h2>
          <p className="mb-4">
            Some owners prefer not to have anyone in their home, period. Others value the
            convenience of a sitter and are comfortable with cameras or limited access areas.
            There’s no “right” answer—only the one that lets you travel without worrying.
          </p>
        </section>

        {/* CHECKLIST */}
        <section id="checklist" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Decision Checklist</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>How does my dog handle <em>new places</em> vs. <em>routine at home</em>?</li>
            <li>Does my dog enjoy calm group play, or prefer human-only contact?</li>
            <li>What’s the realistic escape risk in each scenario for my dog?</li>
            <li>Can I tolerate someone in my home? Do I want cameras/limited access?</li>
            <li>Medical/behavioral needs: who can meet them reliably?</li>
            <li>What’s the maximum alone time my dog can handle comfortably?</li>
            <li>Do I anticipate boarding/daycare in the future (start acclimation now)?</li>
          </ul>
        </section>

        {/* QUESTIONS */}
        <section id="questions" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Questions to Ask Providers</h2>
          <h3 className="text-xl font-semibold mb-2">Boarding/Daycare</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>What vaccines are required and how do you handle illness?</li>
            <li>How are playgroups formed and supervised? Staff-to-dog ratios?</li>
            <li>What’s your emergency protocol and which vet do you use?</li>
            <li>Do you offer quiet time or individual tracks for sensitive dogs?</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">In-Home Sitters</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Are you insured/bonded? Can you share recent references?</li>
            <li>Do you stay overnight or make visits? What’s the longest gap between visits?</li>
            <li>How do you secure the home and prevent escapes?</li>
            <li>What training do you have in pet first aid and emergencies?</li>
          </ul>
        </section>

        {/* CONCLUSION */}
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p className="mb-4">
            Boarding and in-home sitting can both be excellent—when matched to the right dog and
            paired with clear expectations. If you foresee needing outside care later, introduce
            short, positive separations early. If you value absolute privacy, boarding keeps
            strangers out of your home. If your dog craves routine and quiet, an in-home sitter
            might be the win. Choose the path that delivers the <strong>lowest stress</strong>,
            <strong> highest safety</strong>, and <strong>most predictable oversight</strong> for your dog.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (APA)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Appleby, D. L., Bradshaw, J. W. S., & Casey, R. A. (2002). Relationship between aggressive and avoidance behaviour by dogs and their experience in the first six months of life. <em>Veterinary Record, 150</em>(14), 434–438.
            </li>
            <li>
              American Veterinary Medical Association. (2023). <em>Boarding your pet</em>. https://www.avma.org/resources-tools/pet-owners/petcare/boarding-your-pet
            </li>
            <li>
              Pet Sitters International. (2022). <em>Hiring a professional pet sitter: What you should know</em>. https://www.petsit.com/
            </li>
            <li>
              American Kennel Club. (2023). <em>Separation anxiety in dogs</em>. https://www.akc.org/
            </li>
            <li>
              RSPCA. (2023). <em>Choosing care for your pet while you’re away</em>. https://www.rspca.org.uk/
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
