'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function IntestinalBlockageDogsSymptoms() {
  const locale = useLocale();

  const title =
    'Intestinal Blockages in Dogs: Early Warning Signs, Vomiting Patterns, Diagnosis, and Treatment';
  const date = 'December 19, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
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

        {/* Intro */}
        <p className="text-lg mb-6">
          Intestinal blockages are among the most urgent gastrointestinal emergencies in dogs. Many
          blockages start with a common story: a dog chews something they should not, swallows it, and
          appears fine for a while. Then vomiting begins, appetite disappears, and stool output changes.
        </p>

        <p className="mb-6">
          Some obstructions are partial and progress slowly. Others become complete, cutting off normal
          transit and creating rapid dehydration, severe pain, and life-threatening complications. This
          article explains what causes obstructions, the warning signs owners often miss, how diagnosis
          works, and why early veterinary care matters.
        </p>

        {/* TL;DR */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Dogs commonly develop obstructions after swallowing toys, socks, bones, or other foreign objects.</li>
          <li>Vomiting without diarrhea and reduced stool output are major red flags.</li>
          <li>Imaging is often needed to confirm a blockage and determine severity.</li>
          <li>Many blockages require surgery, and delays increase risk and cost.</li>
        </ul>

        {/* Table of Contents */}
        <h2 className="text-2xl font-semibold mb-3">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-1 mb-10">
          <li>What Causes Intestinal Obstructions</li>
          <li>Common Foreign Objects Dogs Ingest</li>
          <li>Partial vs Complete Blockages</li>
          <li>Early Warning Signs Owners Miss</li>
          <li>Why Vomiting Without Diarrhea Is Concerning</li>
          <li>Diagnostic Imaging and Confirmation</li>
          <li>Surgical vs Non-Surgical Treatment</li>
          <li>Recovery Expectations and Risks</li>
          <li>Prevention Strategies for High-Risk Dogs</li>
          <li>Why Blockages Are Medical Emergencies</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">What Causes Intestinal Obstructions</h2>
        <p className="mb-4">
          An intestinal obstruction occurs when material blocks the normal passage of food and fluid
          through the digestive tract. In dogs, the most common cause is foreign body ingestion.
        </p>
        <p className="mb-6">
          Obstructions can occur in the stomach or intestines. They may be caused by a single large
          object, multiple small items, or linear foreign bodies such as string that bunch the intestine
          and cause severe damage.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Common Foreign Objects Dogs Ingest</h2>
        <p className="mb-4">
          Dogs do not need to be reckless to swallow dangerous items. Many dogs ingest objects during
          normal chewing and play. Risk is higher in puppies, adolescent dogs, and adults with high
          oral fixation or anxiety-driven chewing.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Socks, underwear, towels, and fabric</li>
          <li>Stuffed toys, squeakers, tennis ball pieces</li>
          <li>Bones, rawhide-like chews, and hard chew fragments</li>
          <li>Rope toys, string, ribbon, and hair ties</li>
          <li>Corn cobs, fruit pits, and large food scraps</li>
          <li>Plastic wrappers, baggies, and packaging</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Partial vs Complete Blockages</h2>
        <p className="mb-4">
          Partial blockages allow some material to pass. Symptoms may come and go, which can delay
          diagnosis. Dogs may still produce stool, but it may be smaller, irregular, or paired with
          vomiting and appetite loss.
        </p>
        <p className="mb-6">
          Complete blockages prevent normal transit. Vomiting often becomes frequent, hydration status
          deteriorates rapidly, and abdominal pain can intensify. Complete blockages are urgent and
          frequently require surgical intervention.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Early Warning Signs Owners Miss</h2>
        <p className="mb-4">
          Early signs can be subtle and are often mistaken for a mild stomach bug. In many cases, the
          dog&rsquo;s behavior changes before classic vomiting and stool changes become obvious.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Sudden food refusal or unusual pickiness</li>
          <li>Repeated attempts to vomit with little output</li>
          <li>Restlessness, pacing, or inability to settle</li>
          <li>Abdominal tenderness or reluctance to be touched</li>
          <li>Less frequent or smaller stools than normal</li>
          <li>Quiet behavior that looks like &ldquo;fatigue&rdquo; but is actually discomfort</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Vomiting Without Diarrhea Is Concerning
        </h2>
        <p className="mb-4">
          Many common GI upsets cause both vomiting and diarrhea because the gut is irritated throughout.
          With a blockage, the problem is mechanical. Material cannot pass, and vomiting becomes a
          pressure-release mechanism.
        </p>
        <p className="mb-6">
          A classic red-flag pattern is repeated vomiting paired with reduced stool output or no stool.
          This does not prove obstruction, but it is a strong reason to seek veterinary evaluation.
        </p>

        {/* Internal Links */}
        <div className="rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-4 mb-10">
          <p className="mb-3 font-semibold">Related reading in this GI cluster:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              For broader symptom context and when to worry, read{' '}
              <Link href={`/${locale}/blog/common-gi-problems-in-dogs`} className="underline">
                Common Gastrointestinal Problems in Dogs
              </Link>.
            </li>
            <li>
              If the risk started with scavenging or swallowing non-food items, see{' '}
              <Link href={`/${locale}/blog/dietary-indiscretion-in-dogs`} className="underline">
                Dietary Indiscretion in Dogs
              </Link>.
            </li>
            <li>
              If vomiting is paired with abdominal pain after rich foods, read{' '}
              <Link href={`/${locale}/blog/pancreatitis-and-fatty-foods-in-dogs`} className="underline">
                Pancreatitis and High-Fat Foods in Dogs
              </Link>.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Diagnostic Imaging and Confirmation</h2>
        <p className="mb-4">
          Veterinarians use history, physical examination, and diagnostic testing to confirm obstruction
          and determine severity. Because many objects are not visible on standard radiographs, imaging
          strategy may include multiple modalities.
        </p>
        <p className="mb-4">
          Radiographs can sometimes show obvious foreign material or abnormal gas patterns. Ultrasound
          can help identify soft-tissue objects, intestinal thickening, fluid patterns, and the location
          of an obstruction. Additional testing may be recommended based on severity and stability.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Physical exam to assess pain, hydration status, and abdominal distension</li>
          <li>Bloodwork to evaluate dehydration, electrolyte changes, and inflammation</li>
          <li>Radiographs to assess gas patterns and visible objects</li>
          <li>Ultrasound for more detailed evaluation and confirmation in many cases</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Surgical vs Non-Surgical Treatment</h2>
        <p className="mb-4">
          Treatment depends on object type, location, duration, and clinical stability. Some objects in
          the stomach may be removed with endoscopy if available and appropriate. Many intestinal
          obstructions require surgery.
        </p>
        <p className="mb-6">
          Non-surgical management is not appropriate for many obstructions and should only be attempted
          under veterinary supervision. Waiting for an object to pass can lead to worsening damage,
          perforation, and severe infection if the object does not move.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Recovery Expectations and Risks</h2>
        <p className="mb-4">
          Recovery depends on how quickly the obstruction is treated and how much damage occurred.
          Dogs treated early often recover well. Dogs treated late may face complications such as
          intestinal tissue compromise or infection.
        </p>
        <p className="mb-6">
          Your veterinarian will provide a recovery plan that typically includes pain control, diet
          restrictions, activity limitation, and monitoring for vomiting, appetite changes, or incision
          concerns.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">Prevention Strategies for High-Risk Dogs</h2>
        <p className="mb-4">
          Prevention is especially important for dogs that repeatedly chew and swallow objects. For
          these dogs, the safest plan is management and training combined. This is not about blame. It
          is about reducing access to high-risk items and providing safer outlets for chewing.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Supervise play and remove damaged toys immediately</li>
          <li>Use secure laundry storage to prevent sock and underwear access</li>
          <li>Avoid rope toys and string-like items for dogs that swallow fibers</li>
          <li>Use structured chew routines with safe, appropriate items</li>
          <li>Teach leave-it and trade cues to reduce swallowing behavior</li>
          <li>Use crates or safe spaces during high-risk periods when supervision is limited</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Blockages Are Medical Emergencies
        </h2>
        <p className="mb-4">
          Blockages are emergencies because they can progress quickly and because delayed care increases
          both medical risk and treatment complexity. Obstruction can compromise blood flow to the
          intestines, leading to tissue death and perforation.
        </p>
        <p className="mb-10">
          If your dog is vomiting repeatedly, refusing food, showing abdominal pain, or producing little
          to no stool after suspected foreign object exposure, contact a veterinarian immediately. Early
          diagnosis improves outcomes.
        </p>

        {/* References */}
        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Merck Veterinary Manual</li>
          <li>American Veterinary Medical Association (AVMA)</li>
          <li>American College of Veterinary Internal Medicine (ACVIM)</li>
        </ul>

        {/* Back to Blog */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only and does not replace professional veterinary
          diagnosis or treatment. If your dog has repeated vomiting, severe lethargy, abdominal pain,
          dehydration, or decreased stool output, seek veterinary care urgently.
        </p>
      </main>
    </>
  );
}
