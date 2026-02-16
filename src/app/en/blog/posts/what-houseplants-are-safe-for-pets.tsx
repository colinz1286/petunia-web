'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHouseplantsAreSafeForPets() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title = 'What Houseplants Are Safe for Pets? An Evidence-Informed Owner’s Guide';
  const date = 'August 6, 2025';
  const categories = ['owner'] as const;

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
    'A practical, vet-informed guide to pet-safe houseplants for homes with cats &amp; dogs—top non-toxic picks (with scientific names), risky look-alikes to avoid, room-by-room checklists, and operator-grade systems for prevention and emergency response.';

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
            <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About Plant Safety</a></li>
            <li><a href="#top-safe-list" className="underline hover:opacity-80">Top Pet-Safe Houseplants (with Latin Names)</a></li>
            <li><a href="#low-light" className="underline hover:opacity-80">Low-Light &amp; Beginner-Friendly</a></li>
            <li><a href="#statement" className="underline hover:opacity-80">Statement &amp; Floor Plants</a></li>
            <li><a href="#hanging" className="underline hover:opacity-80">Hanging &amp; Shelf Plants</a></li>
            <li><a href="#succulents" className="underline hover:opacity-80">Succulents That Are Safer</a></li>
            <li><a href="#kitchen-herbs" className="underline hover:opacity-80">Kitchen Herbs &amp; Edibles</a></li>
            <li><a href="#avoid" className="underline hover:opacity-80">Common “Do-Not-Buy” List</a></li>
            <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems</a></li>
            <li><a href="#checklists" className="underline hover:opacity-80">Room-by-Room Checklists</a></li>
            <li><a href="#vet-now" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="summary" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR + Petunia Tip</h2>
          <p className="mb-4">
            You can keep a lush indoor jungle <em>and</em> keep pets safe. Choose from a large catalog of <strong>non-toxic</strong> plants (e.g., spider plant, Boston fern, parlor palm, calathea/prayer plants, peperomia, African violet, ponytail palm, haworthia, echeveria, many herbs, and Phalaenopsis orchids) and avoid frequent offenders (e.g., <strong>true lilies</strong> for cats, sago palm, pothos, philodendron, dieffenbachia, ZZ plant, aloe, jade, peace lily, oleander). Label everything with the <strong>Latin name</strong> so you can verify safety quickly.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add a “Plants &amp; Poisons” note in your Petunia profile and store your household plant list (with Latin names). If a curious pup nibbles something while you’re traveling, your sitter or boarding team has the exact names for rapid triage.
          </div>
        </section>

        {/* HOW TO THINK */}
        <section id="how-to-think" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to Think About Plant Safety (Cats, Dogs &amp; Real Homes)</h2>
          <p className="mb-3">
            The safest plant strategy combines <strong>selection</strong> (choose non-toxic species), <strong>placement</strong> (out of reach or protected), and <strong>verification</strong> (confirm Latin names against authoritative databases). Dogs tend to chew opportunistically—especially puppies and adolescents—while cats often explore elevated surfaces and may be triggered by movement (dangling leaves) or texture (grasses). A plant can be non-toxic and still cause <em>GI upset</em> if eaten in volume; the goal is to avoid species with <strong>known toxins</strong> and to manage access for everything else.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Know the Latin name:</strong> “Palm” can mean multiple genera; some are safe (e.g., <em>Dypsis</em>, <em>Chamaedorea</em>), others are dangerous (e.g., sago is <em>Cycas</em>, not a true palm).</li>
            <li><strong>Use verified lists:</strong> Check the ASPCA Toxic/Non-Toxic Plants database and Pet Poison Helpline before you buy. Bookmark both.</li>
            <li><strong>Birds &amp; exotics:</strong> This article focuses on cats/dogs. Birds, rabbits, and exotic pets may have different sensitivities—check species-specific resources.</li>
            <li><strong>Emesis is not benign:</strong> If ingestion is suspected, <em>call your veterinarian</em> or a poison hotline; do not induce vomiting unless a professional instructs you.</li>
          </ul>
          <p>
            Below is a curated “buy list” of decorative houseplants commonly available in North America, U.K./Ireland, Australia/New Zealand, and Canada, with scientific names and practical placement notes.
          </p>
        </section>

        {/* TOP SAFE LIST */}
        <section id="top-safe-list" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Top Pet-Safe Houseplants (with Latin Names)</h2>
          <p className="mb-3">
            The following plants are widely cited as <strong>non-toxic to cats and dogs</strong> by veterinary and animal-welfare references.
            Even with non-toxic species, prevent habitual chewing and monitor for GI upset.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Ferns (True Ferns)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Boston fern</strong> (<em>Nephrolepis exaltata</em>)</li>
            <li><strong>Bird’s nest fern</strong> (<em>Asplenium nidus</em>)</li>
            <li><strong>Maidenhair fern</strong> (<em>Adiantum spp.</em>)</li>
            <li className="text-sm text-gray-700">Avoid misnamed “Asparagus fern” (<em>Asparagus densiflorus</em>)—it’s not a fern and is <em>toxic</em>.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Palms (True Palms)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Parlor palm</strong> (<em>Chamaedorea elegans</em>)</li>
            <li><strong>Areca palm</strong> (<em>Dypsis lutescens</em>)</li>
            <li><strong>Bamboo palm</strong> (<em>Chamaedorea seifrizii</em>)</li>
            <li><strong>Ponytail palm</strong> (<em>Beaucarnea recurvata</em>) — not a true palm; non-toxic</li>
            <li className="text-sm text-gray-700">Avoid <strong>sago palm</strong> (<em>Cycas revoluta</em>) — <em>highly</em> toxic.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Prayer-Plant Family &amp; Cohorts</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Calatheas</strong> (<em>Calathea/Goeppertia spp.</em>)</li>
            <li><strong>Prayer plant</strong> (<em>Maranta leuconeura</em>)</li>
            <li><strong>Rattlesnake plant</strong> (<em>Calathea/Goeppertia lancifolia</em>)</li>
            <li><strong>Ctenanthe</strong> (<em>Ctenanthe spp.</em>)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Peperomias &amp; Small Tropicals</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Baby rubber plant</strong> (<em>Peperomia obtusifolia</em>) — do not confuse with toxic <em>Ficus elastica</em></li>
            <li><strong>Watermelon peperomia</strong> (<em>Peperomia argyreia</em>)</li>
            <li><strong>Radiator plants</strong> (<em>Peperomia spp.</em>)</li>
            <li><strong>Nerve plant</strong> (<em>Fittonia albivenis</em>)</li>
            <li><strong>Polka dot plant</strong> (<em>Hypoestes phyllostachya</em>)</li>
            <li><strong>Aluminum/friendship plant</strong> (<em>Pilea cadierei</em>)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Classic, Easy Houseplants</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Spider plant</strong> (<em>Chlorophytum comosum</em>)</li>
            <li><strong>Cast iron plant</strong> (<em>Aspidistra elatior</em>)</li>
            <li><strong>Swedish ivy</strong> (<em>Plectranthus verticillatus</em>)</li>
            <li><strong>Hoya/wax plant</strong> (<em>Hoya spp.</em>)</li>
            <li><strong>Phalaenopsis orchid</strong> (<em>Phalaenopsis spp.</em>)</li>
            <li><strong>African violet</strong> (<em>Saintpaulia ionantha</em>)</li>
            <li><strong>Friendship plant</strong> (<em>Pilea involucrata</em>)</li>
          </ul>
        </section>

        {/* LOW LIGHT */}
        <section id="low-light" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Low-Light &amp; Beginner-Friendly Picks</h2>
          <p className="mb-3">
            For rentals, north-facing rooms, and “set-and-forget” households, choose durable species that tolerate benign neglect and provide visual greens without inviting trouble.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cast iron plant</strong> (<em>Aspidistra elatior</em>) — among the toughest; slow but steady.</li>
            <li><strong>Parlor palm</strong> (<em>Chamaedorea elegans</em>) — compact, elegant; avoid over-watering.</li>
            <li><strong>Spider plant</strong> (<em>Chlorophytum comosum</em>) — adaptable; pot babies to share.</li>
            <li><strong>Peperomia</strong> (<em>Peperomia obtusifolia</em>, <em>P. caperata</em>) — small footprints for shelves and desks.</li>
            <li><strong>Hoya</strong> (<em>Hoya carnosa</em>, <em>Hoya kerrii</em>) — slow growers; trailing or trellised.</li>
            <li><strong>African violet</strong> (<em>Saintpaulia ionantha</em>) — blooms under steady indoor light.</li>
          </ul>
        </section>

        {/* STATEMENT */}
        <section id="statement" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Statement &amp; Floor Plants (Living Rooms &amp; Lobbies)</h2>
          <p className="mb-3">
            Large containers and floor plants draw attention—and paws. Use <strong>heavy, tip-resistant planters</strong>, elevate leaves off the ground, and place away from zoom-paths and soft-landing furniture edges.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Areca palm</strong> (<em>Dypsis lutescens</em>) — airy fronds; bright, indirect light.</li>
            <li><strong>Bamboo palm</strong> (<em>Chamaedorea seifrizii</em>) — a classic air-purifier species in older lists.</li>
            <li><strong>Ponytail palm</strong> (<em>Beaucarnea recurvata</em>) — sculptural caudex; moderate light.</li>
            <li><strong>Cast iron plant</strong> (<em>Aspidistra elatior</em>) — deep-shade friendly; minimal shedding.</li>
            <li><strong>Money tree</strong> (<em>Pachira aquatica</em>) — braided trunks; bright, indirect light; non-toxic listings are common, but keep out of habitual chewers’ reach to avoid GI upset.</li>
          </ul>
        </section>

        {/* HANGING */}
        <section id="hanging" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hanging &amp; Shelf Plants (Cat-Smart Placement)</h2>
          <p className="mb-3">
            Hanging baskets are great for cat homes—<em>if</em> they cannot be reached via furniture “launch pads.” Consider ceiling hooks centered over open space and swap trailing toxic look-alikes (e.g., pothos) for non-toxic alternatives.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Spider plant</strong> (<em>Chlorophytum comosum</em>) — arching leaves; bright to medium light.</li>
            <li><strong>Hoya/wax plant</strong> (<em>Hoya spp.</em>) — vining; flowers with nectar scent.</li>
            <li><strong>Swedish ivy</strong> (<em>Plectranthus verticillatus</em>) — trailing and forgiving.</li>
            <li><strong>String of turtles</strong> (<em>Peperomia prostrata</em>) — miniature trailing pattern.</li>
            <li className="text-sm text-gray-700">Avoid <strong>pothos</strong> (<em>Epipremnum aureum</em>) and <strong>philodendron</strong> spp.—common, but contain irritating calcium oxalates.</li>
          </ul>
        </section>

        {/* SUCCULENTS */}
        <section id="succulents" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Succulents That Are Safer (Skip Aloe &amp; Jade)</h2>
          <p className="mb-3">
            Many households love the low-maintenance vibe of succulents. Some are fine around pets; others are not. Favor these genera and keep out of habitual chewers’ reach.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Haworthia</strong> (<em>Haworthia spp.</em>) — rosettes; bright, indirect light.</li>
            <li><strong>Echeveria</strong> (<em>Echeveria spp.</em>) — colorful rosettes; strong light.</li>
            <li><strong>Sempervivum</strong> (<em>Sempervivum spp.</em>) — “hens &amp; chicks.”</li>
            <li><strong>Gasteria</strong> (<em>Gasteria spp.</em>) — mottled leaves; bright to medium light.</li>
            <li className="text-sm text-gray-700">Avoid <strong>jade</strong> (<em>Crassula ovata</em>) and <strong>aloe</strong> (<em>Aloe vera</em>)—both are listed as toxic; also avoid euphorbias with milky sap.</li>
          </ul>
        </section>

        {/* KITCHEN HERBS */}
        <section id="kitchen-herbs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Kitchen Herbs &amp; Edibles (Windowsills &amp; Towers)</h2>
          <p className="mb-3">
            Culinary herbs are some of the safest green companions you can grow indoors. They also deter nibbling because they’re generally less leafy and more aromatic.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Basil</strong> (<em>Ocimum basilicum</em>)</li>
            <li><strong>Thyme</strong> (<em>Thymus vulgaris</em>)</li>
            <li><strong>Rosemary</strong> (<em>Salvia rosmarinus</em>)</li>
            <li><strong>Sage</strong> (<em>Salvia officinalis</em>)</li>
            <li><strong>Oregano</strong> (<em>Origanum vulgare</em>)</li>
            <li><strong>Mint</strong> (<em>Mentha spp.</em>) — can be invasive; pot separately.</li>
            <li><strong>Catnip/catmint</strong> (<em>Nepeta cataria</em>/<em>Nepeta faassenii</em>) — enrichment for feline households.</li>
            <li><strong>Pet grass</strong> (oat/wheat/barley microgreens) — designate as the <em>only</em> chew target for cats.</li>
          </ul>
          <p className="text-sm text-gray-700">
            Note: Onions, garlic, chives, and leeks (<em>Allium</em> spp.) are <strong>unsafe</strong> for pets; do not include those in indoor edible gardens accessible to animals.
          </p>
        </section>

        {/* AVOID */}
        <section id="avoid" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common “Do-Not-Buy” List (Quick Reference)</h2>
          <p className="mb-3">
            These popular indoor plants are widely listed as toxic to cats and/or dogs. This is <em>not</em> exhaustive—always verify before buying.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>True lilies</strong> (<em>Lilium</em>/<em>Hemerocallis</em>) — <em>extremely toxic to cats</em>; even pollen can injure kidneys.</li>
            <li><strong>Sago palm</strong> (<em>Cycas revoluta</em>) — highly toxic; all parts, especially seeds.</li>
            <li><strong>Pothos</strong> (<em>Epipremnum aureum</em>) and <strong>Philodendron</strong> spp. — calcium oxalates irritate mouth/GI.</li>
            <li><strong>Peace lily</strong> (<em>Spathiphyllum</em>) — oxalates; not a true lily but still problematic.</li>
            <li><strong>Dieffenbachia</strong> — oxalates; oral irritation and drooling.</li>
            <li><strong>ZZ plant</strong> (<em>Zamioculcas zamiifolia</em>) — irritating sap.</li>
            <li><strong>Aloe</strong> (<em>Aloe vera</em>) — GI signs in pets.</li>
            <li><strong>Jade</strong> (<em>Crassula ovata</em>) — vomiting, lethargy reported.</li>
            <li><strong>Oleander</strong> (<em>Nerium oleander</em>) — cardiac glycosides; <em>do not</em> keep indoors with pets.</li>
            <li><strong>Amaryllis</strong> (<em>Hippeastrum</em> spp.), <strong>daffodils</strong> (<em>Narcissus</em> spp.) — bulb toxins.</li>
            <li><strong>Monstera</strong> (<em>Monstera deliciosa</em>) — oxalates; oral irritation if chewed.</li>
            <li><strong>Snake plant</strong> (<em>Sansevieria/Dracaena trifasciata</em>) — GI upset if ingested.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            When in doubt, look it up by <em>Latin name</em> in the ASPCA database before purchase.
          </p>
        </section>

        {/* OPERATOR SYSTEMS */}
        <section id="operator-systems" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems (Home &amp; Facility)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">1) The “Buy-Safe” Protocol</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>At the store, photograph <em>plant tag</em> and <em>Latin name</em> before checkout.</li>
            <li>Verify in two sources (e.g., ASPCA + Pet Poison Helpline). If results conflict, <strong>do not purchase</strong>.</li>
            <li>Log the plant in your Petunia note (Latin name, common name, room).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">2) Placement &amp; Proofing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Use weighted planters and plant stands that can’t be knocked over during zoomies.</li>
            <li>For cats, assume shelves are reachable; prefer ceiling-hung planters over open space.</li>
            <li>Place chewable textures (grasses, catnip) in the “yes” zone and keep other trailing plants trimmed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">3) Labeling &amp; Inventory</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Affix a discreet label with the Latin name on the pot underside or planter rim.</li>
            <li>Keep a shared, cloud-based spreadsheet (or your Petunia note) with room location, watering cadence, and toxicity status.</li>
            <li>Quarterly audit: re-verify species and purge anything with uncertain identity.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">4) Emergency Playbook (Print &amp; Post)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contacts: primary vet; nearest 24/7 ER; ASPCA Animal Poison Control (U.S.) 888-426-4435; Pet Poison Helpline 855-764-7661.</li>
            <li>Bag/tag a sample of the plant (leaf, flower) and bring the label/Latin name to the clinic.</li>
            <li>Do <em>not</em> induce vomiting unless directed by a professional.</li>
          </ul>
        </section>

        {/* CHECKLISTS */}
        <section id="checklists" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Room-by-Room Checklists</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Living Room</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Swap pothos/philodendron for spider plant, hoya, or peperomia.</li>
            <li>Use floor planters with areca/parlor/pony-tail palm; add weights or stone top-dressings to deter digging.</li>
            <li>Check jump paths (sofa → shelf → hanging basket). Relocate or shorten trailing vines.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Kitchen</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Windowsill herb rail: basil, thyme, rosemary, sage, oregano, mint. Avoid <em>Allium</em> spp. (onions, garlic, chives, leeks).</li>
            <li>Secure hydroponic towers against tipping; route cords/tubing away from chew zones.</li>
            <li>Keep compost bins sealed; moldy scraps can be toxic.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bedroom</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>African violets and calatheas for low light; avoid placing plants on nightstands if pets sleep on the bed.</li>
            <li>Skip diffusers with essential oils unless your vet confirms safety and you ensure ventilation.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bathroom</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High humidity picks: bird’s nest fern, calathea, spider plant.</li>
            <li>Secure toilet lids (dogs can drink treated water); store cleaning agents above pet reach.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Home Office</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Desk plants: peperomia, fittonia, pilea. Avoid “stimulating toys” like dangling pothos within paw range.</li>
            <li>Cable management: cord sleeves and under-desk routes to prevent chewing while you’re on calls.</li>
          </ul>
        </section>

        {/* VET NOW */}
        <section id="vet-now" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
          <p className="mb-3">
            If you witness ingestion or suspect exposure to a toxic plant, act quickly—<em>time matters</em>, especially for true lilies (cats) and sago palm (dogs).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cats + lilies:</strong> Any exposure to <em>Lilium</em>/<em>Hemerocallis</em> (even pollen) is an emergency; seek care immediately.</li>
            <li><strong>Dogs + sago palm:</strong> Ingestion of seeds or leaves warrants urgent veterinary evaluation.</li>
            <li><strong>Neurologic signs:</strong> tremors, seizures, collapse → emergency.</li>
            <li><strong>GI signs:</strong> repeated vomiting, bloody stool, drooling, anorexia, or abdominal pain after plant chewing.</li>
            <li><strong>Cardiac/arrhythmic plants:</strong> oleander exposure → emergency care.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">
            Bring a sample/photo and the <em>Latin name</em>. Call your veterinarian or a poison hotline for step-by-step guidance.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Are “air-purifying” plant lists relevant to pet safety?</strong><br />
            Not directly. Air-quality claims come from old, sealed-chamber studies; they don’t predict household toxin removal. For pets, focus on <em>toxicity</em> and <em>access management</em>, not air-purifying hype.
          </p>

          <p className="mb-3">
            <strong>Is “non-toxic” the same as “edible”?</strong><br />
            No. Non-toxic means a plant is unlikely to cause serious poisoning; it can still upset the stomach if eaten in quantity. Train pets to leave plants alone and offer safe chews/enrichment.
          </p>

          <p className="mb-3">
            <strong>Which plants are safest for cats that love grass?</strong><br />
            Offer a dedicated tray of pet grasses (oat/wheat/barley) and catnip/catmint (<em>Nepeta</em>). Rotate trays and keep other trailing plants trimmed or hung out of reach.
          </p>

          <p className="mb-3">
            <strong>What if sources disagree about a plant?</strong><br />
            Default to caution. Cross-check by <em>Latin name</em> with ASPCA and Pet Poison Helpline. If one lists toxicity and the other doesn’t, choose a different plant.
          </p>

          <p>
            <strong>Do I need to remove every toxic plant if I can place it out of reach?</strong><br />
            Ideally, yes—especially in homes with cats (who jump) and small dogs (who can knock planters over). If you keep any risk plants, treat them like household chemicals: restricted area, no access, and a clear plan if an accident occurs.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              ASPCA Animal Poison Control Center. <em>Toxic and Non-Toxic Plants</em> (cats &amp; dogs searchable database).{' '}
              <a href="https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants
              </a>
            </li>
            <li>
              Pet Poison Helpline. <em>Poisonous Plants</em> (case-based summaries by species).{' '}
              <a href="https://www.petpoisonhelpline.com/poisons/plants/" target="_blank" rel="noopener noreferrer">
                https://www.petpoisonhelpline.com/poisons/plants/
              </a>
            </li>
            <li>
              Merck Veterinary Manual (Professional). <em>Poisoning by Plants</em>; <em>Selected Plant Toxins</em>.{' '}
              <a href="https://www.merckvetmanual.com/toxicology/plant-poisoning" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/toxicology/plant-poisoning
              </a>
            </li>
            <li>
              AVMA. <em>Household Hazards</em> (pet owner resources on common toxins).{' '}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare/household-hazards" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources-tools/pet-owners/petcare/household-hazards
              </a>
            </li>
            <li>
              Royal Horticultural Society (RHS). <em>Poisonous Plants</em> &amp; pet guidance.{' '}
              <a href="https://www.rhs.org.uk/plants/types/poisonous-plants" target="_blank" rel="noopener noreferrer">
                https://www.rhs.org.uk/plants/types/poisonous-plants
              </a>
            </li>
            <li>
              Cornell University College of Agriculture &amp; Life Sciences. <em>Toxic Plants to Animals</em> (extension resources).{' '}
              <a href="https://poisonousplants.ansci.cornell.edu/" target="_blank" rel="noopener noreferrer">
                https://poisonousplants.ansci.cornell.edu/
              </a>
            </li>
            <li>
              University of California Agriculture &amp; Natural Resources. <em>Safe and Poisonous Garden Plants</em>.{' '}
              <a href="https://ucanr.edu/sites/poisonous_safe_plants/" target="_blank" rel="noopener noreferrer">
                https://ucanr.edu/sites/poisonous_safe_plants/
              </a>
            </li>
            <li>
              RSPCA. <em>Toxic Plants &amp; Flowers to Cats and Dogs</em> (owner factsheets).{' '}
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/general/poisons/plants" target="_blank" rel="noopener noreferrer">
                https://www.rspca.org.uk/adviceandwelfare/pets/general/poisons/plants
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions. If you suspect poisoning, contact your vet or a poison hotline immediately.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
