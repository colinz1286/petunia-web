'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SeniorDogHealthChecklist2025() {
  const locale = useLocale();

  const title = 'Senior Dog Health Checklist: Signs of Aging and When to See the Vet';
  const date = 'October 15, 2025';
  const categories = ['owner', 'vet', 'health'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    vet: 'Veterinary Clinics',
    health: 'Dog Health & Wellness',
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare Facilities',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
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
          Just like people, dogs experience gradual physical and behavioral changes as they
          age. Recognizing these early helps extend quality of life and strengthen the bond
          you share. From subtle mobility shifts to changes in sleep, appetite, and
          cognition, this checklist helps owners spot red flags and prepare for each stage
          of their dog’s golden years.
        </p>

        <p className="mb-6">
          This article outlines the most common signs of aging, recommended preventive
          testing schedules, practical home modifications, and dietary adjustments that
          support comfort and longevity. Whether your dog is slowing down or still acting
          like a puppy, a proactive health plan can make all the difference.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Senior dogs are typically 7+ years old (5+ for giant breeds).</li>
          <li>Watch for changes in mobility, sleep, appetite, and interaction.</li>
          <li>Schedule wellness exams every 6 months with bloodwork and urinalysis.</li>
          <li>Adapt your home with ramps, traction mats, and orthopedic beds.</li>
          <li>
            Add omega-3 fatty acids and joint-support nutrients to maintain cognitive and
            physical health.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — Understanding the Aging Process
        </h2>
        <p className="mb-4">
          Dogs age faster than humans, and the pace varies by breed and size. Small dogs may
          live 14–16 years, while large or giant breeds often reach senior status by age 6
          or 7. According to the American Veterinary Medical Association (AVMA, 2023),
          dogs experience age-related cellular changes similar to humans, affecting
          metabolism, joint elasticity, and brain function.
        </p>

        <p className="mb-6">
          Regular veterinary care and environmental support can slow many effects of aging.
          The goal isn’t to stop time—it’s to optimize comfort and maintain function through
          early detection and daily wellness habits.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — Common Signs of Aging in Senior Dogs
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Signs to Watch For</th>
                <th className="p-2 text-left">What It May Indicate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Mobility</td>
                <td className="p-2">
                  Stiffness, limping, reluctance to climb stairs, slower gait
                </td>
                <td className="p-2">Arthritis, muscle loss, joint degeneration</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Cognition</td>
                <td className="p-2">
                  Confusion, pacing, forgetting routines, disorientation
                </td>
                <td className="p-2">Cognitive dysfunction (canine dementia)</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Appetite</td>
                <td className="p-2">Loss of appetite, overeating, weight fluctuation</td>
                <td className="p-2">Dental pain, metabolic change, endocrine issues</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Sleep</td>
                <td className="p-2">
                  Restlessness at night, excessive daytime napping
                </td>
                <td className="p-2">Pain, anxiety, hormonal imbalance, age-related fatigue</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Behavior</td>
                <td className="p-2">
                  Clinginess, irritability, withdrawal from play or socialization
                </td>
                <td className="p-2">Pain, sensory decline, or neurological changes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Behavioral shifts are often subtle—early detection relies on knowing your dog’s
          baseline habits. Keep notes on routines and share them with your veterinarian
          during each check-up.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — Preventive Testing and Veterinary Visits
        </h2>
        <p className="mb-4">
          Senior dogs benefit from more frequent exams and diagnostics to catch emerging
          conditions before symptoms escalate. The American Animal Hospital Association
          (AAHA, 2023) recommends the following schedule:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Physical exam:</strong> every 6 months, including weight, heart, lungs,
            and musculoskeletal assessment.
          </li>
          <li>
            <strong>Bloodwork:</strong> annually for adults; every 6 months for seniors to
            monitor liver, kidney, and thyroid function.
          </li>
          <li>
            <strong>Urinalysis:</strong> yearly to detect infection, kidney, or bladder
            disease.
          </li>
          <li>
            <strong>Dental cleaning:</strong> annually; oral bacteria contribute to systemic
            inflammation.
          </li>
          <li>
            <strong>Blood pressure and eye exams:</strong> annually for early detection of
            hypertension or glaucoma.
          </li>
        </ul>

        <p className="mb-6">
          Early screening is especially vital for breeds predisposed to heart disease,
          cancer, or endocrine disorders. Catching small changes—like elevated liver
          enzymes or protein in urine—can lead to interventions that extend lifespan and
          comfort.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Adapting the Home Environment
        </h2>
        <p className="mb-4">
          Simple modifications can make daily life easier for aging dogs. Think of it as
          pet-proofing for mobility and sensory changes:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Ramps or pet stairs:</strong> Prevent joint strain when climbing beds or
            couches.
          </li>
          <li>
            <strong>Orthopedic beds:</strong> Support joints and promote deep sleep;
            memory-foam beds retain warmth and cushion bony areas.
          </li>
          <li>
            <strong>Non-slip mats:</strong> Add traction on tile or hardwood floors to
            prevent falls.
          </li>
          <li>
            <strong>Elevated food and water bowls:</strong> Reduce neck strain for dogs with
            arthritis or spondylosis.
          </li>
          <li>
            <strong>Night lights:</strong> Help dogs with vision loss navigate safely at
            night.
          </li>
        </ul>

        <p className="mb-6">
          These small adaptations protect mobility and confidence. The American College of
          Veterinary Behaviorists (ACVB, 2024) notes that maintaining a predictable
          environment reduces anxiety and cognitive decline.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — Nutrition and Supplement Support
        </h2>
        <p className="mb-4">
          Diet plays a critical role in slowing the effects of aging. Senior formulas are
          typically lower in calories and higher in antioxidants, fiber, and omega-3 fatty
          acids. Consult your veterinarian before switching foods—changes should be gradual
          and tailored to your dog’s health profile.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Nutrient / Supplement</th>
                <th className="p-2 text-left">Purpose</th>
                <th className="p-2 text-left">Common Sources</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Omega-3 fatty acids</td>
                <td className="p-2">Reduce inflammation, support cognition and coat health</td>
                <td className="p-2">Fish oil, salmon oil, DHA supplements</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Glucosamine &amp; chondroitin</td>
                <td className="p-2">Support joint cartilage and mobility</td>
                <td className="p-2">Joint chews, powders, or prescription diets</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">L-carnitine</td>
                <td className="p-2">Aids muscle function and heart health</td>
                <td className="p-2">Senior formulas, targeted supplements</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Antioxidants (vitamin E, C)</td>
                <td className="p-2">Combat oxidative stress and cognitive decline</td>
                <td className="p-2">Balanced senior diets, fortified treats</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Weight management is equally vital. Senior dogs are prone to obesity due to lower
          activity levels. Even small weight loss—5–10% of body weight—can reduce joint
          pressure and pain significantly (American Kennel Club, 2024).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 6 — When to See the Veterinarian
        </h2>
        <p className="mb-4">
          Aging alone is not a disease, but age increases susceptibility to illness. Contact
          your veterinarian promptly if you notice:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Sudden appetite or weight changes</li>
          <li>Persistent coughing, heavy breathing, or lethargy</li>
          <li>Unsteady gait or loss of balance</li>
          <li>Cloudy eyes or vision loss</li>
          <li>Incontinence or increased thirst/urination</li>
          <li>Disorientation, whining, or unexplained anxiety</li>
        </ul>

        <p className="mb-6">
          Many treatable conditions—like arthritis pain or early kidney disease—improve
          dramatically with prompt medical care. Waiting too long often reduces treatment
          options or increases cost.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Final Takeaway</h2>
        <p className="mb-6">
          Senior dogs bring wisdom, loyalty, and joy into our lives. Supporting them means
          adapting proactively—watching for subtle signs, maintaining consistent vet care,
          and creating a safe, comfortable environment. With regular testing, proper
          nutrition, and home modifications, many dogs enjoy active, fulfilling lives well
          into their teens.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Veterinary Medical Association. (2023). <em>Care of the Senior Dog:
            Preventive Health Guidelines.</em>
          </li>
          <li>
            American Animal Hospital Association. (2023). <em>Senior Pet Health Screening
            Recommendations.</em>
          </li>
          <li>
            American Kennel Club. (2024). <em>Senior Dog Health: Common Signs and Dietary
            Support.</em>
          </li>
          <li>
            American College of Veterinary Behaviorists. (2024). <em>Environmental Support
            for Cognitive Decline in Dogs.</em>
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
          This article is for educational purposes only and does not replace veterinary
          diagnosis or treatment. Always consult your veterinarian for personalized
          recommendations tailored to your dog’s age, breed, and health condition.
        </p>
      </main>
    </>
  );
}
