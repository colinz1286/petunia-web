'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ShouldADogsNoseBeWetOrDry() {
  const locale = useLocale();

  const title =
    'Should a Dog&#39;s Nose Be Wet or Dry? A Clear Owner&#39;s Guide to What&#39;s Normal, What&#39;s Not, and How to Care for Dry, Cracked, or Sunburned Noses';
  const date = 'August 21, 2025';
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
          You&#39;ve probably heard the old saying: a wet nose means a healthy dog; a dry nose means
          a sick one. It&#39;s memorable, but it isn&#39;t reliable. Plenty of healthy dogs wake up
          from a nap with a dry, warm nose and feel great. Many unwell dogs have moist noses. The
          truth is more practical: nose moisture changes throughout the day with sleep, humidity,
          water intake, licking, sun, wind, and exercise. What matters is <em>context</em>—your
          dog&#39;s behavior, appetite, energy, breathing, and whether the nose shows cracking,
          crusting, color change, discharge, bleeding, or pain.
        </p>
        <p className="mb-4">
          This guide takes a clear, owner-first approach. We explain why noses are often wet, why
          dryness can be normal, and when a dry or cracked nose needs care. You&#39;ll get climate
          and season guidance (winter vs. summer; desert vs. temperate), breed and age factors,
          safe-at-home moisturizers and sunscreens, what to avoid, the red flags that call for a vet
          visit, and step-by-step checklists you can actually use.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Wet vs. dry is not a health test.</strong> A dry nose after sleep, by a heater,
            on a windy walk, or after strenuous play can be completely normal.
          </li>
          <li>
            <strong>When to worry:</strong> persistent cracking, thick or bloody discharge, sores,
            loss of the normal cobblestone texture, obvious pain, repeated sneezing fits, one-sided
            discharge or nosebleeds, facial swelling, fever, or lethargy.
          </li>
          <li>
            <strong>Basic care that helps:</strong> hydration, a cool-mist humidifier in very dry
            homes, shade and sun timing in summer, and pet-safe balms on mildly dry noses. Use only
            dog-appropriate sunscreen; avoid human products that contain zinc oxide or PABA since
            dogs lick their noses.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How a Dog&#39;s Nose Works (Why Moisture Helps Scent)</h2>
        <p className="mb-4">
          A dog&#39;s nose is a specialized, textured surface called the nasal planum. Beneath and
          behind it are turbinate structures that dramatically increase surface area for scent
          detection. Moisture on the surface helps capture volatile scent molecules. Dogs also lick
          their noses to clean the surface and to move odor-laden fluid onto the palate, where a
          secondary chemosensory organ helps process scent. The result is remarkable sensitivity,
          tuned for tracking, detecting, and cataloging smells that we would never notice.
        </p>
        <p className="mb-4">
          Because moisture improves scent capture, it is common to feel a cool, damp nose during
          and after activity, sniffing games, or walks. That same nose can be warm and drier during
          naps, in low humidity, or after time near heat sources. The change by itself does not
          diagnose anything.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Normal Reasons a Nose Runs Dry (No Cause for Alarm)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Sleep:</strong> dogs don&#39;t lick their noses while napping; they often wake
            with a warm, dry nose that re-moistens shortly after.
          </li>
          <li>
            <strong>Season and indoor air:</strong> winter heating lowers humidity; desert climates
            are naturally arid. Evaporation increases, and noses feel drier to the touch.
          </li>
          <li>
            <strong>Sun and wind:</strong> both increase evaporation and can mildly chap the
            surface, especially on exposed, lightly pigmented noses.
          </li>
          <li>
            <strong>Age and head shape:</strong> seniors often trend drier; some short-muzzled dogs
            can&#39;t lick the nose surface as effectively, so they run drier by default.
          </li>
          <li>
            <strong>After hard exercise:</strong> mild dehydration or focus on panting can leave the
            surface drier until drinking and resting restore balance.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Wet vs. Dry Myths (Why the Old Rule Misleads)</h2>
        <p className="mb-4">
          The myth persists because a cool, damp nose often accompanies an alert, active dog. But
          plenty of healthy dogs have dry noses for part of the day. Likewise, many illnesses do not
          change nose moisture at all, and some conditions increase watery discharge while the dog
          otherwise appears normal. If you suspect your dog feels unwell, check a real temperature
          with a pet thermometer and look at the whole picture: appetite, energy, breathing, gums,
          hydration, urination, and stool.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What a Healthy Nose Looks and Feels Like</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Texture:</strong> a gentle cobblestone pattern on the nasal planum. This
            pattern varies by dog but should remain intact.
          </li>
          <li>
            <strong>Moisture:</strong> fluctuates. Sometimes cool and damp, sometimes warmer and
            drier. Mild variation is normal.
          </li>
          <li>
          <strong>Color:</strong> stable for the individual dog. Some breeds show seasonal
            hypopigmentation (often called snow nose) that is benign. Texture helps you tell the
            difference: benign changes keep the cobblestone feel, whereas disease processes often
            smooth or erode the surface.
          </li>
          <li>
            <strong>Comfort:</strong> no pawing at the face, no flinching to touch, no consistent
            sneezing fits, and no repetitive, painful crusting or bleeding.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Dry, Cracked, or Crusting: When to Pay Attention</h2>
        <p className="mb-4">
          Persistent dryness with cracking, crusting, scabs, or bleeding deserves a closer look.
          Prolonged exposure to wind and sun can chap the surface, but ongoing damage can also
          reflect dermatologic disease, infection, parasites, dental communication into the nasal
          passages, or even nasal tumors in older dogs. Below are the common categories, what they
          look like, and why your veterinarian may want to examine and test.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Hyperkeratosis (Overgrowth of Keratin)</h3>
        <p className="mb-4">
          Hyperkeratosis is a thickening of the outer layer of skin on the nose. It can look like
          dry, rough, frond-like projections or a brittle, cracked surface that sometimes bleeds.
          Some dogs have idiopathic forms with no underlying illness; others have breed-linked or
          systemic causes. Management focuses on softening the tissue, preventing cracking and
          secondary infection, and addressing any underlying trigger. Your vet may suggest cycles of
          keratolytic soaks, gentle debridement when appropriate, and ongoing moisturizers that are
          proven safe if licked.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Autoimmune Dermatoses</h3>
        <p className="mb-4">
          Immune-mediated conditions such as discoid lupus erythematosus or pemphigus foliaceus can
          depigment the nose and create erosions, ulcers, and crusts on the nasal planum and
          surrounding skin. The cobblestone texture may smooth away, and the area can become
          painful. Diagnosis typically involves biopsy, and treatment may include immunomodulating
          medications, careful sun protection, and topical therapies supervised by a veterinarian.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Infectious or Inflammatory Rhinitis</h3>
        <p className="mb-4">
          Thick, colored discharge; repeated sneezing; snoring; or nasal congestion can signal
          bacterial infection, fungal disease in certain regions, or inflammation secondary to
          allergies. One-sided discharge raises suspicion for a lodged foreign body (like a grass
          awn), a dental root problem with a tract into the nose, or mass effect. Workups may
          include skull imaging, rhinoscopy, dental evaluation, and culture.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Nasal Parasites</h3>
        <p className="mb-4">
          Nasal mites can cause facial itch, sneezing, reverse sneezing, and irritation. Your vet
          can diagnose with rhinoscopy or lavage and treat with targeted medications. Many owners
          first notice repeated, dramatic sneezing and rubbing after outdoor adventures.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Nasal Tumors (Typically Older Dogs)</h3>
        <p className="mb-4">
          Unilateral discharge that becomes progressive, repeated nosebleeds, facial deformity,
          noisy breathing, or ocular changes can indicate a mass inside the nasal cavity or sinuses.
          Early imaging and specialist referral improve planning and comfort. If your senior dog
          develops a persistent one-sided problem, do not wait for it to switch sides—get it checked
          promptly.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Sun Damage and Lightly Pigmented Noses</h3>
        <p className="mb-4">
          Lightly pigmented noses and ear tips can burn. Early signs are pinkness and mild crusting
          that wax and wane with sun exposure; long-term damage can progress to chronic lesions.
          Preventive strategies include shade, walking at lower UV times, and dog-specific sunscreens
          that avoid problematic human ingredients. Use a thin film on exposed areas and prevent
          immediate licking by pairing with a calm settle routine.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Season &amp; Climate: Winter vs. Summer, Desert vs. Temperate</h2>
        <p className="mb-4">
          <strong>Winter &amp; heated homes:</strong> humidity drops, and so does surface moisture on
          noses. Dogs that sleep near floor vents almost always feel dry to the touch when they wake.
          A cool-mist humidifier restores indoor humidity and helps many dogs with mild dryness. Aim
          for proper cleaning of the device to avoid microbial growth.
        </p>
        <p className="mb-4">
          <strong>Summer &amp; high UV:</strong> sun and wind can chap and burn. Plan walks earlier
          and later, provide shade at rest stops, and use dog-specific sunscreen on exposed, lightly
          pigmented areas. Take water breaks for hydration and to rinse sand or dust off the nose if
          you have been at a beach or on a dusty trail.
        </p>
        <p className="mb-4">
          <strong>Desert climates:</strong> the combination of low humidity, sun, and wind requires
          consistent management—humidify indoor spaces, time outdoor activity to avoid peak sun, and
          use protective balms for mild dryness. Bring a soft, clean cloth to gently remove fine dust
          after hikes so it does not cake on the surface.
        </p>
        <p className="mb-4">
          <strong>Temperate and coastal climates:</strong> humidity can be more forgiving, but wind
          exposure on open beaches still chaps. Rinse salt spray off the face after ocean play and
          dry the folds of short-muzzled breeds to prevent yeast overgrowth.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Breed &amp; Age Factors (What Changes the Baseline)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Brachycephalic dogs:</strong> some cannot reach the nasal planum well with the
            tongue. Their noses trend drier, and nasal folds trap moisture and debris. Gentle,
            regular cleaning of folds and supervised use of unscented, dog-safe balms can help.
          </li>
          <li>
            <strong>Seniors:</strong> often drier overall. The goal is comfort—prevent cracking and
            monitor for new lesions, not to force a consistently wet surface.
          </li>
          <li>
            <strong>Lightly pigmented noses:</strong> need more sun management and, in some cases,
            sunscreen designed for dogs.
          </li>
          <li>
            <strong>Seasonal hypopigmentation:</strong> some dogs lighten in color seasonally, but
            the surface texture remains normal. Loss of texture or ulceration warrants a vet visit.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Color &amp; Discharge: What the Changes Suggest</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Clear, watery discharge:</strong> may be normal in small amounts after vigorous
            sniffing or mild irritants. Heavy, persistent dripping is not normal.
          </li>
          <li>
            <strong>Yellow or green mucus:</strong> suggests infection or significant inflammation
            and merits a vet exam.
          </li>
          <li>
            <strong>Blood-tinged or frank blood:</strong> can reflect trauma, foreign material,
            parasites, clotting issues, or masses. Seek care, especially if one-sided or recurring.
          </li>
          <li>
            <strong>Loss of cobblestone texture with color change:</strong> think immune-mediated
            disease or chronic damage; evaluation is important.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Fever Myths &amp; How to Check Temperature Correctly</h2>
        <p className="mb-4">
          A hot, dry nose is not a temperature reading. If your dog seems unwell, use a pet
          thermometer. Typical canine temperature lives roughly around the low one hundreds in
          Fahrenheit; sustained readings several degrees higher warrant prompt veterinary guidance.
          Pair the number with how your dog looks and acts: lethargy, appetite loss, shivering,
          rapid breathing, or vomiting raise concern.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Safe Moisturizers &amp; Sunscreens (What to Use, What to Avoid)</h2>
        <p className="mb-4">
          The nose is front and center—anything you apply will be licked. Choose products that are
          specifically labeled for dogs or that your veterinarian endorses for nasal use. Unscented
          formulas are preferable; strong scents encourage licking and can irritate.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>For mild dryness:</strong> a thin film of a dog-safe nose balm applied at calm
            times (rest on mat, chew time) so it can absorb without immediate licking.
          </li>
          <li>
            <strong>For sun protection:</strong> use dog-specific sunscreen. Avoid human products
            containing zinc oxide or PABA; ingestion is unsafe.
          </li>
          <li>
            <strong>Avoid essential oils on the nose:</strong> many are irritating or toxic if
            licked, and the concentrated scent near the airway can be overwhelming.
          </li>
          <li>
            <strong>Skip medicated creams unless prescribed:</strong> steroid or antibiotic mixes
            have specific use cases and durations. Use only under veterinary direction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Environmental Tweaks That Make a Real Difference</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Humidify in dry seasons:</strong> a cool-mist device placed securely away from
            cords helps reduce evaporation from the nasal surface.
          </li>
          <li>
            <strong>Reposition beds:</strong> move away from floor vents or direct fan blasts.
          </li>
          <li>
            <strong>Shade and timing:</strong> plan walks to avoid peak sun and drying winds; rest
            in shade with water breaks.
          </li>
          <li>
            <strong>Stainless or ceramic bowls:</strong> easy to clean and inert; helpful if your
            dog has contact irritation around the mouth or nose.
          </li>
          <li>
            <strong>Rinse dust and salt:</strong> use a soft, damp cloth after beaches, dusty
            trails, or winter sidewalk treatments so particulate matter does not cake on the nose.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">At-Home Care Plan (Step by Step)</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Observe the whole dog:</strong> appetite, thirst, energy, breathing, urination,
            stool, and comfort. Nose moisture alone does not decide health.
          </li>
          <li>
            <strong>Hydrate:</strong> offer water after play and on hot or windy days. Consider a
            pet fountain for dogs who prefer moving water.
          </li>
          <li>
            <strong>Adjust the environment:</strong> humidify dry rooms; shift beds away from vents;
            schedule walks outside peak sun.
          </li>
          <li>
            <strong>Use a dog-safe balm:</strong> apply a pea-sized amount at rest. Do not pick at
            crusts; allow softening over days.
          </li>
          <li>
            <strong>Sun management:</strong> shade, clothing for light-skinned ear tips when needed,
            and dog-specific sunscreen on exposed areas.
          </li>
          <li>
            <strong>Track changes:</strong> take clear photos in good light every few days. Note any
            discharge, color change, or loss of normal texture.
          </li>
          <li>
            <strong>Escalate appropriately:</strong> if cracks persist, if the surface smooths and
            ulcerates, if discharge becomes thick or bloody, or if your dog seems off—call your vet.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-3">When to See the Vet (Red-Flag Checklist)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Persistent cracking, crusting, or scabs that do not heal.</li>
          <li>Loss of the normal cobblestone texture, erosions, or ulceration.</li>
          <li>Thick, colored, foul, or bloody discharge—especially if one-sided or recurrent.</li>
          <li>Repeated sneezing fits, nasal pain, facial swelling, or noisy breathing.</li>
          <li>Sudden, unexplained nosebleed or any nosebleed in a senior dog.</li>
          <li>Systemic signs: fever, lethargy, appetite loss, vomiting, or weight loss.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What Your Vet May Do (So You Can Plan Ahead)</h2>
        <p className="mb-4">
          A thorough exam looks at the nose, teeth, palate, and face; many nasal problems connect to
          dental roots or sinus spaces. Depending on signs, your veterinarian may recommend blood
          work, skull imaging, rhinoscopy, cultures, mite evaluation, or biopsy. Typical therapies
          include targeted antimicrobials, anti-inflammatory plans, immunomodulating medications for
          autoimmune disease, carefully supervised topical care, or referral for oncologic planning
          in the case of masses. Good photos and a short timeline of changes help guide decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Working Dogs, Sport Dogs, and Outdoor Jobs</h2>
        <p className="mb-4">
          Detection, herding, hunting, and search teams live nose-forward. Their work often happens
          in drying wind or sun with dust, sand, or seed heads in play. Practical habits reduce risk:
          pre-briefs with shade and water, post-work wipes of the muzzle to remove dust, avoidance of
          fragranced products, and early veterinary checks for repeated sneezing or one-sided issues.
          For field dogs in thorny cover, keep a small kit with sterile eye wash to gently flush
          superficial dust off the face and a clean cloth to pat dry before the ride home.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Puppies vs. Seniors (Different Baselines, Different Plans)</h2>
        <p className="mb-4">
          Puppies explore with their noses and mouths; clear drips after dramatic sniffing are not
          rare. But thick discharge, coughing, or labored breathing are not normal and should be
          checked. Seniors have thinner skin, may drink less, and can develop chronic conditions
          that change the surface over time. The senior plan focuses on comfort: hydration, gentle
          moisturizers, and early evaluation of any new lesion before it becomes complicated.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Short-Muzzled Breeds (Extra Notes for Daily Care)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Clean and dry nasal folds with a soft cloth; avoid harsh soaps and fragrances.</li>
          <li>Use unscented, dog-safe balms sparingly to soften mild dryness.</li>
          <li>Monitor breathing sounds and heat tolerance; seek veterinary input for snoring that
            worsens, gagging, or labored breathing during routine walks.</li>
          <li>Prevent overexertion in high heat or humidity; schedule calm, shaded outings.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Owner Stories (Composites From Real Life)</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">The Post-Nap Panic</h3>
        <p className="mb-4">
          A family notices their dog wakes with a warm, dry nose and worries daily. After shifting
          the bed away from a floor vent, adding a humidifier, and watching overall behavior, they
          realize nothing is wrong—the nose re-moistens after breakfast and a short walk. The fix was
          environmental, not medical.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Trail Runner With a One-Sided Problem</h3>
        <p className="mb-4">
          An active dog starts sneezing violently after desert runs, with clear discharge only from
          one side. A grass awn is found and removed on veterinary exam. With prevention—flush and
          wipe after dusty runs—no further issues occur.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Senior Dog, Smooth Nose</h3>
        <p className="mb-4">
          A senior retriever develops smooth, depigmented patches on the nose and light crusting that
          worsens in summer. Biopsy confirms an immune-mediated condition. With a sun plan,
          veterinarian-guided topicals, and a tailored medication course, the dog is comfortable and
          back to beach walks at low sun hours.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Printable Daily &amp; Weekly Checklists</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Daily</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Fresh water available; encourage a drink after walks and play.</li>
          <li>Shade and timing plan if sun or wind is strong.</li>
          <li>Quick look at the nose: texture intact, no new cracks or sores.</li>
          <li>Lightly wipe off dust or salt if needed; pat dry.</li>
          <li>Apply dog-safe balm if mildly dry, during a calm settle.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Weekly</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Confirm bed placement away from vents or fans.</li>
          <li>Clean and refill humidifier; follow manufacturer guidelines.</li>
          <li>Take a well-lit photo to track texture and color over time.</li>
          <li>Restock sunscreen and wipes for the car kit if you hike or beach walk.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Does a dry nose mean my dog is dehydrated?</h3>
        <p className="mb-4">
          Not by itself. Offer water and look at the whole picture—gums, energy, panting, recent
          exercise, and temperature if you are worried.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Can I use my own sunscreen or lotion?</h3>
        <p className="mb-4">
          Use dog-specific sunscreen and unscented balms approved for dogs. Avoid human sunscreens
          that contain zinc oxide or PABA and avoid essential oils unless your veterinarian
          explicitly approves a product for nasal use.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">What if my dog gets a sudden nosebleed?</h3>
        <p className="mb-4">
          Seek veterinary guidance, especially if bleeding is one-sided, recurs, or follows intense
          sneezing. Keep your dog calm and avoid heat until examined.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Do plastic bowls affect nose pigment?</h3>
        <p className="mb-4">
          Rarely, contact irritation has been associated with pigment changes around the mouth and
          nose in sensitive dogs. Stainless steel or ceramic bowls are easy to clean and a safe
          default while your vet evaluates any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Nose moisture varies normally through the day; it is not a stand-alone health test.</li>
          <li>Look at behavior, appetite, breathing, and the surface itself: texture and comfort matter.</li>
          <li>Dry seasons, sun, and wind increase evaporation; manage the environment first.</li>
          <li>For mild dryness, use dog-safe balms and time application during calm settles.</li>
          <li>Red flags include persistent cracks, loss of texture, thick or bloody discharge, one-sided
            signs, and systemic illness—call your vet.</li>
          <li>Short-muzzled and senior dogs may trend drier; tailor care to comfort and prevention.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            VCA Hospitals: Why Do Dogs Have Wet Noses?
            <a
              className="underline ml-1"
              href="https://vcahospitals.com/know-your-pet/why-do-dogs-have-wet-noses"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcahospitals.com
            </a>
          </li>
          <li>
            VCA Hospitals: Taking Your Pet&#39;s Temperature
            <a
              className="underline ml-1"
              href="https://vcahospitals.com/know-your-pet/taking-your-pets-temperature"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcahospitals.com
            </a>
          </li>
          <li>
            MSD Veterinary Manual: Nasal Dermatoses of Dogs
            <a
              className="underline ml-1"
              href="https://www.merckvetmanual.com/integumentary-system/nasal-dermatoses-of-dogs/nasal-dermatoses-of-dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              merckvetmanual.com
            </a>
          </li>
          <li>
            MSD Veterinary Manual: Canine Nasal Mites
            <a
              className="underline ml-1"
              href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-nasal-mites"
              target="_blank"
              rel="noopener noreferrer"
            >
              merckvetmanual.com
            </a>
          </li>
          <li>
            VCA Hospitals: Nasal Tumors in Dogs
            <a
              className="underline ml-1"
              href="https://vcahospitals.com/know-your-pet/nasal-tumors"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcahospitals.com
            </a>
          </li>
          <li>
            AKC: Do Dogs Need Sunscreen?
            <a
              className="underline ml-1"
              href="https://www.akc.org/expert-advice/health/do-dogs-need-sunscreen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              akc.org
            </a>
          </li>
          <li>
            Preventive Vet: How to Care for Your Dog&#39;s Nose
            <a
              className="underline ml-1"
              href="https://www.preventivevet.com/dogs/how-to-care-for-your-dogs-nose"
              target="_blank"
              rel="noopener noreferrer"
            >
              preventivevet.com
            </a>
          </li>
          <li>
            Pet Poison Helpline: Tea Tree Oil
            <a
              className="underline ml-1"
              href="https://www.petpoisonhelpline.com/poison/tea-tree-oil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              petpoisonhelpline.com
            </a>
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
          This article is for general information and does not replace professional veterinary care.
          Always consult your veterinarian if your dog shows nose cracking, sores, thick or bloody
          discharge, loss of normal texture, breathing changes, or any signs of illness.
        </p>
      </main>
    </>
  );
}
