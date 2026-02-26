'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AirlinePetTravel2025ItalyInCabinLargeDogsWhatItMeansUS() {
  const locale = useLocale();

  const title =
    'Airline Pet Travel Is Shifting (Italy Allows Big Dogs In-Cabin): What U.S. Flyers Should Know Now';
  const date = 'August 25, 2025';
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
          In May–June 2025 Italy’s civil aviation authority (ENAC) approved a headline-grabbing
          update: airlines operating in Italy can now admit <em>medium and large dogs</em> in the
          passenger cabin beside their owners, under detailed safety guidelines and with the
          carrier’s operational plan cleared by ENAC. It is a dramatic break from the traditional
          “small pet under the seat” model—and the news has gone viral worldwide. This guide explains
          what changed in Italy, what has not changed in the United States, how major U.S. airline
          rules currently work, and how CDC import requirements layer on top of airline policies. You
          will also get a turn-key travel template you can copy for holiday trips with pets.
        </p>

        <p className="mb-6">
          Two core ideas up front. First, ENAC’s decision enables Italian airlines to allow big dogs
          in-cabin; it does not force every airline to do it, and carriers must file and follow
          specific procedures to keep aisles clear and exits unobstructed. Second, U.S. airlines
          still set their own pet rules for non-service animals; at the time of writing, large pet
          dogs are not permitted to sit in the cabin on major U.S. airlines unless the dog is a
          trained service animal under DOT rules. Small pets in carriers that fit under the seat
          remain the U.S. status quo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Italy changed the framework:</strong> ENAC approved guidelines that let airlines
            seat medium- and large-breed dogs in the cabin if the airline submits and follows a
            safety and operations plan. Carriers are not obligated to adopt it.
          </li>
          <li>
            <strong>Size concept:</strong> The update removes the rigid 8–10&nbsp;kg cap many
            carriers used; acceptance is tied to seating and restraint safety (for example,
            an approved transport system secured to a seat) rather than a tiny under-seat crate.
          </li>
          <li>
            <strong>U.S. reality today:</strong> U.S. majors continue to allow only small pets
            in-cabin (carrier under the seat). Large non-service dogs must travel via cargo on
            airlines that still offer it, or not at all. United and Delta publish living pet-travel
            pages—always re-check before you book.
          </li>
          <li>
            <strong>CDC import rules still apply for international trips:</strong> Since Aug&nbsp;1,
            2024, all dogs entering the U.S. must be at least 6 months old, microchipped, and have a
            CDC Dog Import Form receipt; additional documents depend on where the dog has been in the
            prior 6 months. These government rules sit on top of airline policies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — What Exactly Changed in Italy?</h2>
        <p className="mb-4">
          ENAC’s board approved a resolution to expand in-cabin transport options for companion
          animals. In simple terms: dogs over the traditional 8–10&nbsp;kg limit can be seated in
          the cabin under specific conditions designed to protect safety and passenger comfort.
          ENAC’s <em>linee guida</em> (guidelines) that airlines can adopt—after filing a plan with
          ENAC—cover how a larger dog may be secured, where seating is allowed, and how crew keep
          aisles and exits clear. Italy’s transport ministry announced the change the same day. This
          is a foundational shift away from “small-pet-only under the seat” toward a seat-secured
          approach for bigger dogs on airlines that opt in.
        </p>

        <p className="mb-4">
          Practical constraints still exist. ENAC emphasizes safety: the animal must be secured so it
          does not impede emergency egress or service, and the operational plan must show how the seat
          and restraint system meet those goals. Consumer groups summarised that the old numeric
          weight cap is gone; instead, the combined system (dog + restraint) must be managed like a
          seated passenger. Airlines decide whether to participate, specify allowable seating
          locations (for example, window pairs), and publish how to book.
        </p>

        <p className="mb-6">
          Because the guidelines are new, media coverage has shown both enthusiasm and controversy.
          Outlets in Italy and English-language coverage reported the update and noted it is optional
          for airlines. Some global consumer coverage highlighted objections—cleanliness, allergies,
          fear of dogs—in the public debate. None of that changes the legal core: ENAC provides a
          framework; airlines choose if and how to use it.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Does this mean “big dogs in the cabin” on every flight to or from Italy?
        </h3>
        <p className="mb-6">
          Not automatically. Each airline must submit its plan to ENAC and publish practical rules
          (for example, approved restraint, seat locations, and limits per flight). Some carriers may
          start with limited routes or aircraft types while training crews and testing customer
          demand. Always check the airline’s page and your specific flight.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — U.S. Context: What Hasn’t Changed (Yet)</h2>
        <p className="mb-4">
          In the United States, non-service animal pet policies are set by airlines (subject to FAA
          safety rules and DOT consumer protections). Today, large pet dogs are not permitted to sit
          in the cabin on major U.S. airlines; small pets may travel in approved carriers that fit
          under the seat. Trained service dogs are a separate category and are accepted in the cabin
          without charge, with documentation under DOT rules.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Spotlight: United &amp; Delta (Living Policy Pages)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>United:</strong> Allows small pets in cabin subject to carrier-under-seat rules.
            Policy notes include per-person limits and booking guidance; the “service animals” page
            confirms only dogs qualify as trained service animals for free carriage. Always re-check
            these pages before travel.
          </li>
          <li>
            <strong>Delta:</strong> Lists current carry-on pet fees and exceptions where pets are not
            permitted in cabin (for example, certain international destinations). Delta ships larger
            pets via Delta Cargo; if your pet does not fit under the seat, you must use cargo (subject
            to route and temperature restrictions).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          How other U.S. majors generally handle pets (snapshot)
        </h3>
        <p className="mb-4">
          Policies vary—use this as a high-level starting point and always confirm on the airline’s
          site before booking; links route you to current rules.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-[#d9cfc2]">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-2">Airline</th>
                <th className="text-left p-2">In-Cabin Pets</th>
                <th className="text-left p-2">Notes</th>
                <th className="text-left p-2">Cargo/Checked</th>
                <th className="text-left p-2">Policy Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">United</td>
                <td className="p-2">Small cats/dogs in carrier under seat</td>
                <td className="p-2">Service dogs handled under DOT rules</td>
                <td className="p-2">Select programs vary by route</td>
                <td className="p-2">
                  <a className="underline" href="https://www.united.com/en/us/fly/travel/traveling-with-pets.html" target="_blank" rel="noopener noreferrer">united.com</a>
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Delta</td>
                <td className="p-2">Small pets in cabin (fees apply)</td>
                <td className="p-2">Some destinations prohibit PETC; fees updated Apr&nbsp;8, 2025</td>
                <td className="p-2">Delta Cargo for pets too large for in-cabin</td>
                <td className="p-2">
                  <a className="underline" href="https://www.delta.com/us/en/pet-travel/overview" target="_blank" rel="noopener noreferrer">delta.com</a>
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">American</td>
                <td className="p-2">Cats &amp; small dogs in cabin; must fit under seat</td>
                <td className="p-2">Service dogs per DOT; emotional-support animals no longer recognized as service animals</td>
                <td className="p-2">Checked/cargo options limited; confirm routing</td>
                <td className="p-2">
                  <a className="underline" href="https://www.aa.com/i18n/travel-info/special-assistance/pets.jsp" target="_blank" rel="noopener noreferrer">aa.com</a>
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Alaska</td>
                <td className="p-2">Dogs &amp; cats in cabin; second carrier allowed with adjacent seat purchase</td>
                <td className="p-2">Publishes specific fees for in-cabin and baggage compartment</td>
                <td className="p-2">Accepts pets in climate-controlled baggage/cargo (limits apply)</td>
                <td className="p-2">
                  <a className="underline" href="https://www.alaskaair.com/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin" target="_blank" rel="noopener noreferrer">alaskaair.com</a>
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">JetBlue</td>
                <td className="p-2">Small pets only; carrier under seat (Core cabin)</td>
                <td className="p-2">International acceptance varies by destination</td>
                <td className="p-2">No checked pets; in-cabin only</td>
                <td className="p-2">
                  <a className="underline" href="https://www.jetblue.com/traveling-together/traveling-with-pets" target="_blank" rel="noopener noreferrer">jetblue.com</a>
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2] align-top">
                <td className="p-2">Southwest</td>
                <td className="p-2">Small vaccinated cats &amp; dogs on domestic flights</td>
                <td className="p-2">Not permitted on international routes; onboard behavior rules apply</td>
                <td className="p-2">No cargo program for pets</td>
                <td className="p-2">
                  <a className="underline" href="https://support.southwest.com/helpcenter/s/article/pet-policy" target="_blank" rel="noopener noreferrer">southwest.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-10">
          Sources: United, Delta, American, Alaska, JetBlue, and Southwest pet-policy pages (all
          living documents; always re-check before purchase).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — Carriers, Crates &amp; Seating: A Hands-On Template</h2>
        <p className="mb-4">
          Whether you are flying U.S. domestic or connecting through Europe, the hardware and seat
          planning matter more than anything. Use the checklist below as a plug-and-play template;
          add the specific measurements and rules from your airline’s page and your aircraft model.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">A) In-Cabin “Small Pet” Setup (U.S. carriers today)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Soft-sided carrier that fits under the seat:</strong> U.S. airlines require the
            pet to remain fully inside a ventilated carrier under the seat ahead (no heads popping
            out). Acceptable exterior dimensions vary by airline and aircraft; consult the policy
            page and your reservation details.
          </li>
          <li>
            <strong>Ventilation &amp; structure:</strong> Mesh on at least two sides; a base that
            will not collapse on the dog; zippers that can be secured; absorbent pad inside; water
            bowl you can remove after boarding.
          </li>
          <li>
            <strong>Behavior plan:</strong> The best “equipment” is training: calm settle in a small
            space, silent time, and a practiced routine (cue to lie down, chew, then sleep). Airlines
            can deny boarding for disruptive behavior (for example, loud vocalization or scratching).
          </li>
          <li>
            <strong>Seating note:</strong> Avoid exit rows and bulkhead rows that remove the
            “under-seat in front” space; the carrier must go under the seat ahead.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">B) “Large Dog in Cabin” in Italy (new ENAC framework)</h3>
        <p className="mb-4">
          If you will be flying an Italian airline that has adopted ENAC’s guidelines, the setup
          differs: the dog does not go under the seat. Instead, the airline’s plan will specify an
          approved restraint system that secures to a passenger seat (often a window seat pair so the
          dog is not exposing aisle space) with the animal contained and crew procedures defined.
          Booking typically requires advance approval and may involve selecting a seat with a
          space-compatible footprint and paying for that extra seat. Watch for airlines to publish
          their exact operational details as adoption expands.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">C) If your pet is too large for U.S. in-cabin rules</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Delta:</strong> Ships larger pets via Delta Cargo; there is no “checked” pet in
            the passenger cabin when the carrier cannot fit under the seat. Temperatures, routing,
            and breed policies apply—reserve early.
          </li>
          <li>
            <strong>Alaska:</strong> Continues to accept pets in a climate-controlled baggage/cargo
            compartment on many routes (fees and seasonal restrictions apply).
          </li>
          <li>
            <strong>Others:</strong> Many carriers ended general “checked pet” options; you may need
            a third-party cargo booking or to choose a carrier that still offers a baggage/cargo
            program for pets. Confirm aircraft type, temperature embargoes, and crate standards with
            the airline’s cargo team.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 4 — CDC Dog-Import Rules: How They Interact with Airline Policies</h2>
        <p className="mb-4">
          Airline rules determine whether a pet can fly on that aircraft and how it must be
          contained. CDC rules determine whether a dog can legally enter the United States and what
          documents are required. They are independent. Since August&nbsp;1, 2024, the CDC requires
          that all dogs entering the U.S. (including returning U.S. pets) be at least 6 months old,
          have an ISO-compatible microchip, and have a CDC Dog Import Form receipt. Dogs coming from
          or that have been in high-risk countries for dog rabies within the prior six months face
          extra requirements (for example, rabies vaccination documentation and possibly arrival at
          designated airports with special screening).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Owner’s paperwork checklist (international legs)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>CDC Dog Import Form receipt</strong> (submitted online before travel).</li>
          <li><strong>Microchip</strong> that can be read by a universal scanner (chip number on docs).</li>
          <li><strong>Age:</strong> at least 6 months on the date of U.S. entry (no exceptions).</li>
          <li>
            <strong>Rabies documentation</strong> pathway depends on where your dog has been in the
            last six months and whether a U.S.-issued vaccine is documented; ask your veterinarian to
            complete any required certification.
          </li>
        </ul>

        <p className="mb-6">
          Tip: If your itinerary touches only dog-rabies-free or low-risk countries for the prior six
          months, requirements are lighter—but you still need the CDC form, a readable microchip, age
          ≥6 months, and a healthy-on-arrival dog. Always verify your country list and the “where the
          dog has been” window.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 5 — Holiday Flight Planner: A Turn-Key Template</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Step 1 — Choose your airline and route</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Domestic U.S. trips:</strong> Assume small-pet-only in cabin. Check the airline’s
            pet page for your dates; policies are living documents.
          </li>
          <li>
            <strong>Italy and EU trips:</strong> Watch for airline-specific adoption of ENAC’s new
            framework; look for language about seat-secured restraint systems for larger dogs and how
            to pre-approve the booking.
          </li>
          <li>
            <strong>International returns to the U.S.:</strong> Layer CDC rules onto your plan early
            (age, microchip, import form, and any high-risk country requirements).
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-4 mb-2">Step 2 — Book the right seat(s)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            For U.S. in-cabin small pets, any standard economy seat that is not an exit or bulkhead
            typically works; the carrier must go under the seat in front of you. Some airlines allow
            two pet carriers if you purchase an adjacent seat.
          </li>
          <li>
            If flying an ENAC-adopting airline with a large dog in the cabin, expect to purchase the
            approved seat (often a window pair) and meet the restraint specification the carrier
            publishes.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Step 3 — Confirm carrier or restraint specs</h3>
        <p className="mb-4">
          For U.S. small-pet travel, each airline publishes maximum external dimensions for soft-
          sided carriers that fit under the seat and sometimes limits how many pets are allowed per
          flight. For Italy’s new framework, the airline’s ENAC-filed plan defines the large-dog
          restraint: how it anchors to a seat, where it may be placed, and how the animal is
          contained. Bring printed policy pages to the airport for backup.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Step 4 — Prepare your dog (the training that solves 90% of problems)
        </h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Acclimate to the carrier or restraint weekly</strong> for 4–6 weeks: cue to lie
            down and settle; feed high-value chews in the space; gradually extend duration until your
            dog naps through a 90-minute “mock flight.”
          </li>
          <li>
            <strong>Potty plan:</strong> final outdoor break just before security; use the pet relief
            area pre-boarding; bring double-layered pee pads and enzyme wipes for clean-ups.
          </li>
          <li>
            <strong>Feeding &amp; hydration:</strong> Feed a reduced meal 4–6 hours before boarding;
            small water sips during layovers; avoid new treats the day of travel.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Step 5 — Documents &amp; day-of logistics</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Print your airline’s pet policy page for the gate agent and a brief vet letter stating
            your dog is healthy for air travel (always required for cargo; sometimes requested for
            in-cabin).
          </li>
          <li>
            For international return legs, attach the CDC Dog Import Form receipt to your passport
            wallet and carry vaccination documentation appropriate for your country list.
          </li>
          <li>
            Check terminal maps for pet relief areas; arrive 30–45 minutes earlier than a non-pet
            flight to keep everything unrushed.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 6 — Product Costs &amp; Fees (2025 Reality Check)</h2>
        <p className="mb-4">
          Expect carry-on pet fees on U.S. carriers (each way) and additional charges for cargo or
          baggage-compartment transport where offered. Delta, for example, adjusted domestic in-cabin
          pet fees to about $150 (USD/CAD) each way for tickets issued on or after April&nbsp;8,
          2025 (higher on most international itineraries). Alaska publishes $100 in-cabin and $150
          baggage compartment per pet (USD/CAD; reduced in some Alaska-only or active-duty scenarios).
          Other carriers set their own fees. Always verify on the airline’s page for your ticketing
          date.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Service animals vs. pets (why your category matters)
        </h3>
        <p className="mb-6">
          Trained service dogs fly at no charge and are accommodated in the cabin under DOT rules;
          documentation is required and behavior standards apply (no blocking aisles or eating off
          tray tables). Emotional-support animals are not recognized as service animals by U.S.
          airlines since DOT’s 2021 rule change and travel under standard pet policies if accepted.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 7 — FAQ (Traveler Questions, Airline-Style Answers)
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Does Italy’s change mean my large dog can sit in the cabin on a U.S. airline?
        </h3>
        <p className="mb-6">
          No. ENAC’s guidelines apply to airlines under Italian jurisdiction that choose to adopt
          them. U.S. airlines still require pets in carriers under the seat unless the dog is a
          trained service animal.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          If I connect in Italy, can my large dog ride in the cabin?
        </h3>
        <p className="mb-6">
          Only if the airline operating that leg has adopted ENAC’s plan and you meet their seating
          and restraint requirements. You will likely need to book by phone for pre-approval and seat
          assignment.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What about safety and other passengers?</h3>
        <p className="mb-6">
          ENAC’s framework centers on safety: seat-secured systems that keep aisles and exits
          unobstructed. U.S. policies require small pets to remain enclosed under the seat to manage
          the same concerns. Airlines can deny boarding for animals that show disruptive behavior.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Do I still have to follow CDC rules when returning to the U.S.?
        </h3>
        <p className="mb-6">
          Yes—regardless of airline policy. All dogs entering the U.S. must meet CDC requirements
          (age ≥6 months, microchip, import-form receipt, and additional documents if they have been
          in high-risk countries).
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Are any U.S. airlines moving toward Italy’s approach?
        </h3>
        <p className="mb-6">
          We have not seen published U.S. carrier plans to seat large pet dogs in-cabin. If that
          changes, airlines will update pet-policy pages and seat-map notes to reflect the new
          program and restraint specifications.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 8 — Templates You Can Copy (Packing, Booking, Script)
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">A) 48-Hour Packing List</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Printed airline pet policy plus reservation code showing pet notation</li>
          <li>CDC Dog Import Form receipt (international legs) and vaccination papers</li>
          <li>Soft-sided carrier (U.S. small-pet) or airline’s approved seat-secured restraint (ENAC)</li>
          <li>Absorbent pads, leak-proof water bowl, enzyme wipes, spare leash, tags, microchip number</li>
          <li>High-value chew; small meal portions; any meds in original labeled vials</li>
          <li>Photo of your dog on your phone (in case of separation)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">B) Booking &amp; Pre-Approval Script</h3>
        <pre className="whitespace-pre-wrap rounded-xl bg-[#f7f4ee] border border-[#d9cfc2] p-3 text-sm mb-6">
“Hi! I’m traveling with a dog on [date/route]. I need to confirm your current pet policy for my exact flight number and aircraft.
• For in-cabin: What are the max carrier dimensions for this aircraft? Any limits per flight I should note?
• For Italy legs: Have you adopted ENAC’s large-dog seating guidelines on this route? If so, what restraint do you require and which seat locations are permitted?
• Can you add the pet to my booking and note the approved seat? May I receive the pet travel fee and any airport check-in instructions in writing?”
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">C) Airport Flow (Owner SOP)</h3>
        <ol className="list-decimal pl-5 space-y-3 mb-10">
          <li>Walk and water 45–60 minutes pre-arrival; final relief at the terminal pet area.</li>
          <li>Check in early; pay the pet fee if due; verify the pet notation on your boarding pass.</li>
          <li>Security: follow TSA guidance; keep your dog leashed; carry the empty carrier through screening; re-crate calmly post-screen.</li>
          <li>At the gate: re-confirm your seat and pet status with the agent; pre-board if invited.</li>
          <li>Onboard: carrier under the seat (U.S.) or seat-secured restraint (ENAC carriers). Keep zippers closed and behavior calm.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 9 — The Debate &amp; What to Watch Next</h2>
        <p className="mb-4">
          Italy’s move triggered global conversation—advocates call it humane and modern; critics
          raise concerns about space, allergies, and edge-case behavior. The operational truth for
          travelers is simpler: regulators set the ceiling, airlines decide how far to go within it.
          For now, U.S. carriers continue with small-pet in-cabin models; if any experiment with
          seat-secured options for larger dogs, expect explicit equipment specifications and seat-map
          constraints.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            ENAC’s 2025 guidelines allow (but do not require) Italian airlines to seat medium and
            large dogs in the cabin under strict safety rules and approved airline plans.
          </li>
          <li>
            U.S. airlines still limit in-cabin pets to small carriers under the seat; trained service
            dogs are handled under separate DOT rules. Always re-check living policy pages before you
            buy.
          </li>
          <li>
            If you are returning to the U.S. from abroad, CDC dog-import rules (age ≥6 months,
            microchip, import-form receipt, and sometimes more) apply in addition to airline rules.
          </li>
          <li>
            For large dogs on U.S. carriers today, consider Alaska’s baggage/cargo program or Delta
            Cargo; prepare airline-approved crates and book early.
          </li>
          <li>
            Use the booking script, packing list, and airport SOP to prevent last-minute surprises.
            The combination of training, paperwork, and the right seat solves nearly everything.
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
          This article is for general information and does not replace airline policies, DOT/FAA
          rules, or CDC import requirements. Always review your carrier’s current pet page and
          consult your veterinarian before travel.
        </p>
      </main>
    </>
  );
}
