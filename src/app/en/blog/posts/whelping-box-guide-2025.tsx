'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhelpingBoxGuide2025() {
  const locale = useLocale();

  const title = 'Whelping Box Setup and Temperature Control Guide';
  const date = 'October 17, 2025';
  const categories = ['breeder', 'vet', 'care'] as const;

  const categoryLabels: Record<string, string> = {
    breeder: 'Breeders',
    vet: 'Veterinary Clinics',
    care: 'Puppy Care & Whelping',
    genetics: 'Genetics & Reproduction',
    owner: 'Pet Owners',
    rescue: 'Rescues',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
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

        {/* INTRO */}
        <p className="text-lg mb-4">
          A properly designed whelping area keeps the dam comfortable and newborn puppies
          safe, warm, and clean. Temperature, space, and hygiene directly affect puppy
          survival rates in the first critical weeks. Whether you’re whelping your first
          litter or managing a professional breeding program, careful setup prevents
          accidents and supports healthy development.
        </p>

        <p className="mb-6">
          This guide outlines whelping box dimensions by breed size, optimal temperature
          and humidity ranges, bedding and cleaning checklists, and week-by-week setup
          adjustments. It’s designed for breeders preparing a safe, low-stress environment
          —and includes placeholders for Petunia media library photos to accompany each
          stage.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Box size should be <strong>1.5× the dam’s length</strong> and tall enough to
            contain pups but allow easy entry.
          </li>
          <li>
            Maintain <strong>85–90 °F (29–32 °C)</strong> the first week, decreasing
            gradually.
          </li>
          <li>
            Keep <strong>humidity 55–65 %</strong> to prevent dehydration or chill.
          </li>
          <li>
            Use <strong>washable, non-slip bedding</strong> and clean twice daily.
          </li>
          <li>
            Adjust setup weekly—remove rails at 3 weeks, introduce play area by week 4.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — Choosing the Right Box Dimensions
        </h2>
        <p className="mb-4">
          The whelping box should provide enough room for the dam to stretch out fully and
          for puppies to nurse without crowding. Too small and pups risk suffocation;
          too large and they can wander away from warmth. Dimensions vary by breed size:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Breed Size</th>
                <th className="p-2 text-left">Typical Adult Weight</th>
                <th className="p-2 text-left">Box Dimensions (L × W × H)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Toy / Small</td>
                <td className="p-2">Up to 25 lb (11 kg)</td>
                <td className="p-2">3 ft × 3 ft × 1 ft (0.9 × 0.9 × 0.3 m)</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Medium</td>
                <td className="p-2">25–60 lb (11–27 kg)</td>
                <td className="p-2">4 ft × 4 ft × 1.5 ft (1.2 × 1.2 × 0.45 m)</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Large</td>
                <td className="p-2">60–100 lb (27–45 kg)</td>
                <td className="p-2">5 ft × 5 ft × 2 ft (1.5 × 1.5 × 0.6 m)</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Giant</td>
                <td className="p-2">100 + lb (45 + kg)</td>
                <td className="p-2">6 ft × 6 ft × 2 ft (1.8 × 1.8 × 0.6 m)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Include <strong>pig rails</strong> (1.5 in / 4 cm diameter for small breeds; up
          to 4 in / 10 cm for large) along interior walls to prevent the dam from
          accidentally crushing pups. Materials such as sealed plywood or heavy plastic are
          easy to disinfect and maintain temperature consistency.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — Temperature and Humidity Control
        </h2>
        <p className="mb-4">
          Newborns cannot regulate body temperature until about 3 weeks old. Keeping the
          whelping area warm but not overheated is critical to survival. Ideal temperature
          ranges are based on the week after birth:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Week</th>
                <th className="p-2 text-left">Temperature °F (°C)</th>
                <th className="p-2 text-left">Relative Humidity %</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Week 1</td>
                <td className="p-2">85–90 °F (29–32 °C)</td>
                <td className="p-2">60–65 %</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Week 2</td>
                <td className="p-2">80–85 °F (27–29 °C)</td>
                <td className="p-2">55–60 %</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Week 3</td>
                <td className="p-2">75–80 °F (24–27 °C)</td>
                <td className="p-2">50–55 %</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Week 4 +</td>
                <td className="p-2">70–75 °F (21–24 °C)</td>
                <td className="p-2">45–50 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Use a <strong>thermostat-controlled ceramic heat lamp</strong> or under-box
          heating pad covering only half the floor so puppies can self-regulate by moving
          closer or farther from the heat source. Monitor with dual thermometers—one near
          floor level and one at dam height.
        </p>

        <div className="border border-[#d9cfc2] bg-[#f5f2ed] rounded-xl p-4 mb-8">
          <h3 className="text-xl font-semibold mb-2">💡 Humidity Tip:</h3>
          <p className="text-sm">
            Low humidity causes dehydration and sticky membranes. Maintain 55–65 % with a
            cool-mist humidifier placed outside the box but within the room. Avoid heating
            pads that cover the full surface—they can cause burns.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — Bedding Safety and Cleaning Checklist
        </h2>
        <p className="mb-4">
          Bedding must keep pups warm yet prevent slipping and entanglement. Avoid loose
          fabrics or long fibers that can wrap around limbs or necks. Instead, choose
          flat, absorbent materials that wash easily.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>✅ Washable fleece or vet-grade whelping pads with non-slip backing</li>
          <li>✅ Absorbent underpads (“puppy pads”) beneath fleece for easy changes</li>
          <li>✅ No straw, hay, or shredded paper (mold & respiratory risk)</li>
          <li>✅ Rotate bedding twice daily during first 2 weeks</li>
          <li>✅ Disinfect box and rails with diluted chlorhexidine or veterinary-approved cleaner</li>
        </ul>

        <p className="mb-6">
          Cleaning frequency increases after day 10 when puppies begin crawling. Always
          remove the dam during disinfecting and allow surfaces to dry fully before
          re-entry.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Week-by-Week Setup Adjustments
        </h2>
        <p className="mb-6">
          Below is a general timeline for modifying the whelping area as puppies mature.
          Each week aligns with developmental milestones. <em>(Future Petunia media library
          photos will illustrate these stages.)</em>
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Week</th>
                <th className="p-2 text-left">Puppy Stage</th>
                <th className="p-2 text-left">Environment Adjustments</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">0–1</td>
                <td className="p-2">Newborn</td>
                <td className="p-2">Maintain 85–90 °F; full rail set; minimal handling; constant supervision</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">2</td>
                <td className="p-2">Eyes opening</td>
                <td className="p-2">Lower heat to 80 °F; introduce soft lighting; begin daily weighing chart</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">3</td>
                <td className="p-2">Learning to walk</td>
                <td className="p-2">Reduce rails height; start short handling sessions; maintain clean floor grip</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">4</td>
                <td className="p-2">Exploration</td>
                <td className="p-2">Attach playpen extension; reduce heat to 75 °F; introduce low toys</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">5–6</td>
                <td className="p-2">Weaning</td>
                <td className="p-2">Add feeding zone with shallow bowls; begin litter training pad area</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          By week 6, puppies regulate their own body temperature and can transition to a
          larger nursery or playpen with washable flooring. The dam should still have a
          private rest space to prevent nursing fatigue.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — Monitoring and Record Keeping
        </h2>
        <p className="mb-4">
          Data tracking is vital. Maintain daily logs for:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Room temperature and humidity readings</li>
          <li>Puppy weights and nursing times</li>
          <li>Feeding intake and elimination notes</li>
          <li>Bedding changes and cleaning times</li>
          <li>Any signs of respiratory or digestive distress</li>
        </ul>
        <p className="mb-6">
          Keeping meticulous notes allows veterinarians to assess progress and identify
          issues like fading puppy syndrome early. Digital logs or shared cloud sheets
          simplify coordination across team members.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Final Takeaway</h2>
        <p className="mb-6">
          A thoughtful whelping setup protects both dam and puppies during their most
          fragile stage. Focus on correct box sizing, steady warmth, safe bedding, and
          diligent sanitation. As puppies grow, gradually transition their space to promote
          exploration, strength, and early socialization. Preparation, monitoring, and
          consistency define truly responsible breeding practice.
        </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Kennel Club. (2024). <em>Whelping and Neonatal Care for Breeders.</em>
          </li>
          <li>
            Orthopedic Foundation for Animals. (2024). <em>Canine Reproductive Health and Environment Guidelines.</em>
          </li>
          <li>
            Royal Canin Breeder Program. (2023). <em>Environmental Management for Whelping Success.</em>
          </li>
          <li>
            World Small Animal Veterinary Association. (2023). <em>Hygiene and Biosecurity for Canine Breeding Facilities.</em>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for educational purposes only and does not replace veterinary or professional breeding guidance.
          Always monitor environmental conditions with precision tools and consult your veterinarian for breed-specific
          recommendations before whelping.
        </p>
      </main>
    </>
  );
}
