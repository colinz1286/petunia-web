'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhatHealthIssuesDoGoldenRetrieversHave() {
    const locale = useLocale();

    // --- Metadata ----------------------------------------------------------------
    const title =
        'What Health Issues Do Golden Retrievers Have? A Practical, Vet-Informed Guide for Families';
    const date = 'August 7, 2025';
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
        'Common Golden Retriever health problems—what to watch for and how to prevent them. Covers cancer risks, skin &amp; ear disease, orthopedic issues, eyes (GRPU, cataracts), heart screening (cardiac), hypothyroidism, ichthyosis, GI emergencies, senior care, and life-stage checklists with operator-grade routines.';

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
                        <li><a href="#how-to-think" className="underline hover:opacity-80">How to Think About Golden Health</a></li>
                        <li><a href="#top-risks" className="underline hover:opacity-80">Top Risks (At a Glance)</a></li>
                        <li><a href="#cancer" className="underline hover:opacity-80">Cancer in Goldens</a></li>
                        <li><a href="#skin-ears" className="underline hover:opacity-80">Skin &amp; Ears</a></li>
                        <li><a href="#orthopedic" className="underline hover:opacity-80">Orthopedic (Hips, Elbows, CCL, Arthritis)</a></li>
                        <li><a href="#eyes" className="underline hover:opacity-80">Eyes (GRPU, Cataracts, PRA)</a></li>
                        <li><a href="#cardiac" className="underline hover:opacity-80">Cardiac Screening</a></li>
                        <li><a href="#endocrine" className="underline hover:opacity-80">Endocrine (Hypothyroidism)</a></li>
                        <li><a href="#derm-ichthyosis" className="underline hover:opacity-80">Breed-Specific: Ichthyosis</a></li>
                        <li><a href="#neuro" className="underline hover:opacity-80">Senior Neurolaryngology (Lar Par)</a></li>
                        <li><a href="#gastro" className="underline hover:opacity-80">GI &amp; Emergencies (GDV/Bloat)</a></li>
                        <li><a href="#dental" className="underline hover:opacity-80">Dental Care</a></li>
                        <li><a href="#lifestage" className="underline hover:opacity-80">Life-Stage Vet Care</a></li>
                        <li><a href="#nutrition" className="underline hover:opacity-80">Nutrition &amp; Supplements</a></li>
                        <li><a href="#fitness" className="underline hover:opacity-80">Fitness, Conditioning &amp; Recovery</a></li>
                        <li><a href="#daycare-boarding" className="underline hover:opacity-80">Boarding &amp; Daycare Notes</a></li>
                        <li><a href="#operator-systems" className="underline hover:opacity-80">Operator-Grade Systems &amp; Templates</a></li>
                        <li><a href="#when-to-call-vet" className="underline hover:opacity-80">When to Call the Vet Now</a></li>
                        <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
                        <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
                    </ul>
                </nav>

                {/* TL;DR */}
                <section id="summary" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">TL;DR Summary</h2>
                    <p className="mb-4">
                        Golden Retrievers are affectionate, athletic family dogs with a few predictable health vulnerabilities: a higher risk of some <strong>cancers</strong> (notably hemangiosarcoma, lymphoma, and mast cell tumors), chronic <strong>skin &amp; ear disease</strong> (allergies/otitis), <strong>orthopedic</strong> problems (hip/elbow dysplasia, cruciate tears, arthritis), <strong>eye</strong> concerns (Golden Retriever pigmentary uveitis, cataracts, PRA), screening-relevant <strong>cardiac</strong> issues, <strong>hypothyroidism</strong>, breed-linked <strong>ichthyosis</strong>, occasional senior <strong>laryngeal paralysis</strong>, and rare but life-threatening GI emergencies like <strong>bloat (GDV)</strong>. Most risk is manageable with lean body condition, smart exercise and surface traction, routine screening (hips/elbows/eyes/cardiac), early lump checks, ear care, and a tight relationship with your veterinarian.
                    </p>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Petunia tip:</strong> Ask your boarding/daycare to add you as an <em>approved client</em> in Petunia so vaccine dates, meds, feeding amounts, allergies, lump logs, and vet alerts sync across home and provider. Shared data prevents small mistakes and speeds up decisions when minutes matter.
                    </div>
                </section>

                {/* HOW TO THINK */}
                <section id="how-to-think" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">How to Think About Golden Health</h2>
                    <p className="mb-3">
                        Health outcomes sit at the intersection of <strong>genetics</strong>, <strong>management</strong>, and <strong>environment</strong>. For Golden Retrievers:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li><strong>Genetics:</strong> Choose breeders who screen hips/elbows (OFA/PennHIP), perform annual ophthalmology exams (ACVO/CAER), and use DNA tests appropriate to the breed (e.g., PRA variants, ichthyosis). See OFA/GRCA guidance for a health-tested breeding program.</li>
                        <li><strong>Management:</strong> Keep a <em>lean</em> body condition; structure daily activity; prevent and promptly treat skin/ear flare-ups; do monthly “nose-to-tail” checks for lumps and gait changes; keep up with dental hygiene; and follow preventive care and vaccine schedules.</li>
                        <li><strong>Environment:</strong> Control heat/humidity; provide traction on slick floors; use ramps for cars/sofas in seniors; and supervise water play with thorough post-swim ear care.</li>
                    </ul>
                    <p>
                        This guide is your practical risk map for a Golden’s lifespan. We focus on the <em>systems</em> families can run at home (and facilities can run in operations) to catch problems earlier and keep dogs comfortable longer.
                    </p>
                </section>

                {/* TOP RISKS */}
                <section id="top-risks" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Top Risks for Golden Retrievers (At a Glance)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
                            <h3 className="font-semibold mb-2">Modifiable / Management</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Obesity &amp; deconditioning (drives orthopedic pain, heat stress).</li>
                                <li>Allergic skin disease with secondary ear infections.</li>
                                <li>Slips on smooth floors → soft-tissue injury &amp; cruciate strain.</li>
                                <li>Heat/humidity during high-arousal play.</li>
                                <li>Delayed lump checks (small masses are easier to remove completely).</li>
                            </ul>
                        </div>
                        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
                            <h3 className="font-semibold mb-2">Inherited / Screening-Relevant</h3>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Some cancers: hemangiosarcoma, lymphoma, mast cell tumor.</li>
                                <li>Orthopedic: hip/elbow dysplasia, cruciate disease.</li>
                                <li>Eyes: GR pigmentary uveitis, cataracts, PRA variants.</li>
                                <li>Cardiac: breed-relevant screening recommended.</li>
                                <li>Endocrine: hypothyroidism; Dermatologic: ichthyosis variants.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CANCER */}
                <section id="cancer" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Cancer in Goldens: What Families Should Know</h2>
                    <p className="mb-3">
                        Cancer is a major health conversation in Golden Retrievers. Large, long-running research including the <em>Golden Retriever Lifetime Study</em> (GRLS) is actively investigating genetic, environmental, lifestyle, and nutritional risk factors to improve prevention and early detection. While any dog can develop cancer, Goldens are frequently represented in diagnoses of <strong>hemangiosarcoma</strong>, <strong>lymphoma</strong>, and <strong>mast cell tumors</strong>.
                    </p>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Early-Detection Mindset</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li><strong>Monthly lump checks:</strong> Run your hands over the entire body. Measure any lump (length/width), note date/location, and photograph.</li>
                        <li><strong>See small, remove small:</strong> Many skin tumors are easier to excise fully when small, which can improve margins and outcomes. Do not “wait and see.”</li>
                        <li><strong>Emergency red flags:</strong> sudden collapse/weakness, pale gums (possible internal bleeding, e.g., splenic tumors) → seek emergency care.</li>
                    </ul>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-3">
                        <strong>Facility operations note:</strong> Train staff to log lumps and energy changes during intake and bathing. In Petunia, use a standard “Lump &amp; Lesion” note with size/location and a parent notification workflow.
                    </div>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Lifestyle Levers (Supportive)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Keep lean (weight control correlates with improved mobility and lower inflammation).</li>
                        <li>Structure exercise; avoid chronic over-arousal and heat stress.</li>
                        <li>Follow dental and skin/ear hygiene routines to reduce secondary inflammation burden.</li>
                    </ul>
                </section>

                {/* SKIN & EARS */}
                <section id="skin-ears" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Skin &amp; Ears: Everyday Issues You Can Win</h2>
                    <p className="mb-3">
                        Goldens commonly develop <strong>atopic dermatitis</strong> (environmental allergies) and <strong>otitis externa</strong> (ear infections). Signs include itching, paw licking, hot spots, odor/redness in ears, head shaking, and recurrent secondary infections. Water play and floppy ears trap moisture, increasing risk.
                    </p>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Owner System: The 3-2-1 Allergy Playbook</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li><strong>3 Baselines:</strong> year-round parasite prevention; weekly skin scan (belly, armpits, groin, feet); post-swim ear drying.</li>
                        <li><strong>2 Routines:</strong> bathe with vet-approved shampoo on a cadence your veterinarian sets; keep nails short to reduce self-trauma.</li>
                        <li><strong>1 Escalation:</strong> if itch score &gt; 5/10 or ears are painful/odorous, see your veterinarian promptly for cytology and targeted therapy.</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Ear Care After Water</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Dry ears thoroughly after swims/baths; use a vet-recommended cleaner <em>only as directed</em>.</li>
                        <li>Avoid cotton swabs deep in canals; they can injure and push debris inward.</li>
                    </ul>
                </section>

                {/* ORTHOPEDIC */}
                <section id="orthopedic" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Orthopedic: Hips, Elbows, Cruciate, &amp; Arthritis</h2>
                    <p className="mb-3">
                        Goldens are medium-large athletes. Common issues include <strong>hip dysplasia</strong>, <strong>elbow dysplasia</strong>, and <strong>cranial cruciate ligament (CCL) disease</strong>, with arthritis developing over time. Sound breeding and day-to-day management go a long way.
                    </p>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Everyday Prevention</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Maintain a <strong>lean</strong> body condition (feel ribs with light pressure; visible waist/tuck).</li>
                        <li>Use traction runners on slick floors; ramp access for cars/sofas.</li>
                        <li>Build muscle with <em>controlled</em> work: hill walks, leash walks with sniffing, short-set fetch, swim sets (with ear care).</li>
                        <li>Avoid repetitive high-impact jump drills in puppies.</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-2 mb-1">If Lameness Appears</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Veterinary exam for orthopedic assessment; imaging as indicated.</li>
                        <li>Rehab plans, anti-inflammatories, and joint-friendly home setups help dogs stay comfortable.</li>
                        <li>Discuss surgical options (e.g., TPLO for CCL) with an ACVS surgeon when appropriate.</li>
                    </ul>
                </section>

                {/* EYES */}
                <section id="eyes" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Eyes: GR Pigmentary Uveitis, Cataracts, &amp; PRA</h2>
                    <p className="mb-3">
                        Golden Retrievers have a breed-specific condition called <strong>Golden Retriever Pigmentary Uveitis (GRPU)</strong>, a late-onset inflammatory eye disease that can lead to glaucoma and vision loss. <strong>Cataracts</strong> and inherited retinal conditions (e.g., <strong>PRA variants</strong>) are also seen. Because GRPU often emerges later in life, <strong>annual</strong> eye exams by a board-certified ophthalmologist (ACVO/CAER) are recommended throughout adulthood.
                    </p>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Home &amp; Facility Signs to Watch</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Redness, squinting, light sensitivity, or a change in iris appearance.</li>
                        <li>Cloudiness of the lens (possible cataract); night-vision changes or bumping into objects.</li>
                        <li>Any eye pain is an emergency—seek veterinary care promptly.</li>
                    </ul>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Petunia ops tip:</strong> Add “eye check” to intake and lights-out rounds. Teach staff to escalate eye redness, discharge, or squinting the same day.
                    </div>
                </section>

                {/* CARDIAC */}
                <section id="cardiac" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Cardiac Screening: What’s Sensible for Goldens</h2>
                    <p className="mb-3">
                        Responsible breeding programs include <strong>cardiac evaluations</strong> by a veterinary cardiologist, alongside hips, elbows, and eyes. For pet families, your primary veterinarian will listen for murmurs and recommend further cardiology work-up (echocardiography) when indicated. Screening aims to identify conditions early and inform safe exercise or anesthesia plans.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Ask breeders for OFA cardiac results (advanced cardiac by a cardiologist is preferred).</li>
                        <li>Report exercise intolerance, fainting episodes (syncope), or coughing promptly.</li>
                    </ul>
                </section>

                {/* ENDOCRINE */}
                <section id="endocrine" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Endocrine: Hypothyroidism</h2>
                    <p className="mb-3">
                        Hypothyroidism (low thyroid hormone) is relatively common in middle-aged dogs, including Goldens. Signs include weight gain without increased intake, reduced energy, cold intolerance, dry coat, recurrent skin/ear infections, and sometimes behavior changes. Diagnosis is via blood tests; treatment is daily medication with periodic monitoring.
                    </p>
                </section>

                {/* DERM ICHTHYOSIS */}
                <section id="derm-ichthyosis" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Breed-Specific Dermatology: Ichthyosis</h2>
                    <p className="mb-3">
                        <strong>Golden Retriever ichthyosis</strong> (often linked to variants in <em>PNPLA1</em>) can cause a flaky, scaly skin phenotype. Severity varies from cosmetic to more clinically significant scaling and secondary infections. Responsible breeders use DNA testing and informed mating decisions to reduce risk.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>If your Golden has persistent scale, seek dermatology guidance; regular bathing and topical therapy may help.</li>
                        <li>Rule-outs include nutrient imbalance, endocrine disease, and secondary infection.</li>
                    </ul>
                </section>

                {/* NEURO / LARYNGEAL PARALYSIS */}
                <section id="neuro" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Senior Neurolaryngology: Laryngeal Paralysis</h2>
                    <p className="mb-3">
                        In older, large-breed dogs (including Goldens), <strong>laryngeal paralysis</strong> can cause noisy breathing (stridor), heat intolerance, and distress with exertion. If your dog’s bark sounds hoarse/raspy or they struggle in heat, speak to your veterinarian. Management ranges from weight control and cooling to surgical options in selected cases.
                    </p>
                </section>

                {/* GI & EMERGENCIES */}
                <section id="gastro" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">GI &amp; Emergencies: Bloat (GDV)</h2>
                    <p className="mb-3">
                        Goldens are not the highest-risk breed for <strong>gastric dilatation-volvulus</strong>, but medium-to-large, deep-chested dogs can be affected. Signs include a distended abdomen, unproductive retching, drooling, restlessness, collapse, and sudden weakness. This is an <strong>emergency</strong>—go to a veterinary hospital immediately. Ask your veterinarian whether preventative gastropexy makes sense if your dog has risk factors or is having an abdominal procedure for another reason.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Feed measured meals; avoid all-out exercise right before/after eating.</li>
                        <li>Manage anxiety/competition around food; use slow-feeder bowls if needed.</li>
                    </ul>
                </section>

                {/* DENTAL */}
                <section id="dental" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Dental Care: Small Habits, Big Payoff</h2>
                    <p className="mb-3">
                        Periodontal disease is the most common clinical condition in adult dogs. Brushing several times per week and using VOHC-accepted products improve oral health and may support overall comfort and longevity.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Brush with dog-safe toothpaste; start with short sessions and reward generously.</li>
                        <li>Use chews/rinses approved by the <em>Veterinary Oral Health Council (VOHC)</em>.</li>
                        <li>Schedule professional cleanings as advised by your veterinarian.</li>
                    </ul>
                </section>

                {/* LIFE STAGE */}
                <section id="lifestage" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Life-Stage Veterinary Care &amp; Screenings</h2>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Puppy (8 weeks–12 months)</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Vaccinations per AAHA guidance; parasite prevention year-round.</li>
                        <li>Large-breed puppy diet; avoid repetitive high-impact jumping.</li>
                        <li>Discuss pedigree health (hips/elbows/eyes/heart) and early socialization that includes cooperative care (ear drying, nail trims, tooth brushing).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Adult (1–7 years)</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Annual physicals; dental assessments; quarterly at-home weight checks.</li>
                        <li>Year-round flea/tick/heartworm prevention; address itching early to prevent chronic skin/ear disease.</li>
                        <li>Annual ophthalmology (ACVO/CAER) exams are sensible for this breed; keep ear/skin routines tight during allergy seasons.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Senior (7+ years)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Twice-yearly vet visits; arthritis pain plans; traction mats and ramps.</li>
                        <li>Annual or semiannual bloodwork/urinalysis as advised; screen thyroid; monitor for lumps monthly and escalate when small.</li>
                        <li>Adjust exercise to cooler hours; watch for loud breathing or heat intolerance (possible laryngeal paralysis).</li>
                    </ul>
                </section>

                {/* NUTRITION */}
                <section id="nutrition" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Nutrition &amp; Supplements (Plan with Your Vet)</h2>
                    <p className="mb-3">
                        Feed a complete, balanced diet appropriate for life stage and activity and keep your Golden <strong>lean</strong>. Maintaining ideal body condition is the single biggest lever families control for orthopedic comfort and overall healthspan.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li><strong>Omega-3s (EPA/DHA):</strong> may support skin/coat and joint comfort; dose with guidance to avoid GI upset.</li>
                        <li><strong>Joint nutraceuticals:</strong> evidence varies; your veterinarian can recommend products they trust.</li>
                        <li><strong>Food transitions:</strong> change over 7–10 days to minimize GI upset that can complicate skin/ear disease.</li>
                    </ul>
                </section>

                {/* FITNESS */}
                <section id="fitness" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Fitness, Conditioning &amp; Recovery</h2>
                    <p className="mb-3">
                        Goldens thrive with <strong>structured</strong> movement. Replace chaotic, endless fetch with routines that build muscle and protect joints: sniff walks, controlled retrieves in short sets, hill walking, and swim sets paired with strict ear-drying afterward. Heat/humidity multiplies risk—schedule activity for mornings/evenings and build a “warm-up → activity → cool-down → nap” rhythm.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Use 10–15 minute “blocks” separated by calm downtime to prevent over-arousal.</li>
                        <li>Teach mat relaxation; it reduces injuries and improves handler control in busy settings.</li>
                    </ul>
                </section>

                {/* DAYCARE/BOARDING */}
                <section id="daycare-boarding" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Boarding &amp; Daycare: Golden-Specific Notes</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li><strong>Rest is safety:</strong> Play → Rest → Enrichment cycles reduce soft-tissue injuries and ear/skin flares.</li>
                        <li><strong>Ear care workflow:</strong> If water play is offered, perform post-swim drying and note ear status each departure.</li>
                        <li><strong>Lump logging:</strong> Train staff to record any lump with size/location; notify the owner the same day.</li>
                        <li><strong>Heat plan:</strong> Cap fetch sets; provide shade and cool floors; watch for noisy breathing or wobble and stop activity early.</li>
                    </ul>
                </section>

                {/* OPERATOR-GRADE SYSTEMS */}
                <section id="operator-systems" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Operator-Grade Systems &amp; Templates</h2>
                    <h3 className="text-lg font-semibold mt-2 mb-1">1) Monthly “Nose-to-Tail” Scan (Owner Template)</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Weight/BCS check; adjust food if trending up.</li>
                        <li>Skin/lumps: measure anything new; photo + date.</li>
                        <li>Ears: redness/odor; clean/dry after baths or swims.</li>
                        <li>Gait: watch first steps after rest and after moderate exercise; note stiffness.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">2) Early-Lump Escalation (Home &amp; Facility)</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Any new mass → schedule a vet visit (FNA/biopsy guidance from your veterinarian).</li>
                        <li>Do not “wait and see”—small masses are easier to remove completely.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">3) Ear-After-Water Protocol</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Dry external ear; use vet-recommended cleaner as directed for prone dogs.</li>
                        <li>Escalate to a vet visit if pain, odor, or discharge appears.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">4) Orthopedic-Safe Home Setup</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Traction runners on slick floors; ramps for car/sofa.</li>
                        <li>Short, structured activity blocks; strength before speed.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">5) Boarding/Daycare Transfer-of-Care Sheet</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Current meds (name, dose, timing); feeding amounts; allergy triggers.</li>
                        <li>Lump log summary; arthritis plan; ear-care notes after water play.</li>
                        <li>Primary vet, specialty contacts, and emergency hospital preference.</li>
                    </ul>
                </section>

                {/* WHEN TO CALL THE VET */}
                <section id="when-to-call-vet" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">When to Call the Vet Now</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Unproductive retching, sudden abdominal distension, weakness/collapse (suspect GDV) → emergency.</li>
                        <li>Acute eye pain/redness, squinting, or vision change → same-day ophthalmic evaluation.</li>
                        <li>Non-weight-bearing lameness or obvious pain after a twist/sprint → prompt assessment.</li>
                        <li>New mass that grows over days/weeks; bleeding/ulcerated skin lesions → schedule soon.</li>
                        <li>Heat distress, raspy/noisy breathing, or exertional collapse, especially in seniors → immediate cooling and call your veterinarian.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

                    <p className="mb-3">
                        <strong>Are Goldens “doomed” to get cancer?</strong><br />
                        No. Risk is meaningful, but not destiny. Use monthly lump checks, maintain lean weight, and escalate concerns early. Research like the Golden Retriever Lifetime Study exists to improve prevention and detection across the breed.
                    </p>

                    <p className="mb-3">
                        <strong>How can I reduce joint problems?</strong><br />
                        Keep a lean body condition, provide traction on floors, build strength with controlled exercise, and avoid repetitive high-impact drills in puppies. Buy from breeders who screen hips/elbows.
                    </p>

                    <p className="mb-3">
                        <strong>What’s the simplest ear-care routine after swimming?</strong><br />
                        Gently dry ears; use a veterinarian-recommended cleaner if your dog is prone to infections; and seek care for pain, odor, or discharge.
                    </p>

                    <p className="mb-3">
                        <strong>Do all Goldens need annual eye exams?</strong><br />
                        Annual ophthalmology (ACVO/CAER) exams are a sensible life-long habit in Goldens to monitor for GRPU, cataracts, and other conditions. Your primary veterinarian can refer you.
                    </p>

                    <p>
                        <strong>Does Petunia replace veterinary care?</strong><br />
                        No—Petunia organizes information and routines. Your veterinarian provides diagnosis and treatment. Use Petunia to keep owners, facilities, and vets aligned.
                    </p>
                </section>

                {/* SOURCES */}
                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                            American Kennel Club (AKC). Golden Retriever breed overview.{' '}
                            <a href="https://www.akc.org/dog-breeds/golden-retriever/" target="_blank" rel="noopener noreferrer">https://www.akc.org/dog-breeds/golden-retriever/</a>
                        </li>
                        <li>
                            AAHA. 2022 Canine Vaccination Guidelines.{' '}
                            <a href="https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/" target="_blank" rel="noopener noreferrer">https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/canine-vaccination-guidelines/</a>
                        </li>
                        <li>
                            WSAVA. Global Nutrition Guidelines &amp; Toolkit.{' '}
                            <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer">https://wsava.org/global-guidelines/global-nutrition-guidelines/</a>
                        </li>
                        <li>
                            Merck Veterinary Manual. Gastric Dilation and Volvulus (GDV) in Small Animals.{' '}
                            <a href="https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals" target="_blank" rel="noopener noreferrer">https://www.merckvetmanual.com/.../gastric-dilation-and-volvulus-in-small-animals</a>
                        </li>
                        <li>
                            Merck Veterinary Manual. Laryngeal Paralysis in Dogs and Cats.{' '}
                            <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/laryngeal-paralysis-in-dogs-and-cats" target="_blank" rel="noopener noreferrer">https://www.merckvetmanual.com/.../laryngeal-paralysis-in-dogs-and-cats</a>
                        </li>
                        <li>
                            ACVS. Canine Cranial Cruciate Ligament Disease.{' '}
                            <a href="https://www.acvs.org/small-animal/canine-cranial-cruciate-ligament-disease" target="_blank" rel="noopener noreferrer">https://www.acvs.org/small-animal/canine-cranial-cruciate-ligament-disease</a>
                        </li>
                        <li>
                            ACVS. Hip Dysplasia in Dogs.{' '}
                            <a href="https://www.acvs.org/small-animal/hip-dysplasia" target="_blank" rel="noopener noreferrer">https://www.acvs.org/small-animal/hip-dysplasia</a>
                        </li>
                        <li>
                            ACVS. Elbow Dysplasia in Dogs.{' '}
                            <a href="https://www.acvs.org/small-animal/elbow-dysplasia" target="_blank" rel="noopener noreferrer">https://www.acvs.org/small-animal/elbow-dysplasia</a>
                        </li>
                        <li>
                            ACVS. Laryngeal Paralysis.{' '}
                            <a href="https://www.acvs.org/small-animal/laryngeal-paralysis/" target="_blank" rel="noopener noreferrer">https://www.acvs.org/small-animal/laryngeal-paralysis/</a>
                        </li>
                        <li>
                            American College of Veterinary Ophthalmologists (ACVO). Cataracts (owner resource).{' '}
                            <a href="https://www.acvo.org/common-conditions-1/2018/3/1/cataracts" target="_blank" rel="noopener noreferrer">https://www.acvo.org/common-conditions-1/2018/3/1/cataracts</a>
                        </li>
                        <li>
                            AKC Canine Health Foundation. Diagnostic Criteria for Golden Retriever Pigmentary Uveitis; Vision Loss in GRPU.{' '}
                            <a href="https://www.akcchf.org/breakthrough/diagnostic-criteria-for-1/" target="_blank" rel="noopener noreferrer">https://www.akcchf.org/breakthrough/diagnostic-criteria-for-1/</a>{' '}
                            |{' '}
                            <a href="https://www.akcchf.org/breakthrough/vision-loss-in-golden/" target="_blank" rel="noopener noreferrer">https://www.akcchf.org/breakthrough/vision-loss-in-golden/</a>
                        </li>
                        <li>
                            Townsend WM. Golden Retriever pigmentary uveitis: challenges and perspectives (review).{' '}
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7540390/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC7540390/</a>
                        </li>
                        <li>
                            Golden Retriever Club of America (GRCA). Pigmentary Uveitis resources.{' '}
                            <a href="https://grca.org/about-the-breed/health-research/pigmentary-uveitis-letter-to-owners/" target="_blank" rel="noopener noreferrer">https://grca.org/about-the-breed/health-research/pigmentary-uveitis-letter-to-owners/</a>{' '}
                            |{' '}
                            <a href="https://grca.org/wp-content/uploads/2022/08/GoldenUpdate_Summer2022_Pigmentary-Uveitis-Final.pdf" target="_blank" rel="noopener noreferrer">GRCA Pigmentary Uveitis (PDF)</a>
                        </li>
                        <li>
                            UC Davis Veterinary Genetics Laboratory. Golden Retriever Ichthyosis (PNPLA1).{' '}
                            <a href="https://vgl.ucdavis.edu/test/golden-retriever-ichthyosis" target="_blank" rel="noopener noreferrer">https://vgl.ucdavis.edu/test/golden-retriever-ichthyosis</a>
                        </li>
                        <li>
                            UC Davis Veterinary Genetics Laboratory. PRA1 (Golden Retriever).{' '}
                            <a href="https://vgl.ucdavis.edu/test/pra1-golden-retriever" target="_blank" rel="noopener noreferrer">https://vgl.ucdavis.edu/test/pra1-golden-retriever</a>
                        </li>
                        <li>
                            Orthopedic Foundation for Animals (OFA). Golden Retriever health testing (hips, elbows, eyes, cardiac).{' '}
                            <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">https://ofa.org</a>
                        </li>
                        <li>
                            AVMA. Pet owner health resources (preventive care, obesity, dental).{' '}
                            <a href="https://www.avma.org/resources-tools/pet-owners" target="_blank" rel="noopener noreferrer">https://www.avma.org/resources-tools/pet-owners</a>
                        </li>
                        <li>
                            Veterinary Oral Health Council (VOHC). Accepted products list.{' '}
                            <a href="https://vohc.org" target="_blank" rel="noopener noreferrer">https://vohc.org</a>
                        </li>
                        <li>
                            RVC VetCompass Programme (UK). Research on canine health &amp; longevity.{' '}
                            <a href="https://www.rvc.ac.uk/vetcompass" target="_blank" rel="noopener noreferrer">https://www.rvc.ac.uk/vetcompass</a>{' '}
                            |{' '}
                            <a href="https://www.rvc.ac.uk/vetcompass/news/new-rvc-research-helps-owners-better-understand-the-remaining-life-expectancy-of-dogs" target="_blank" rel="noopener noreferrer">Remaining life expectancy tool (news)</a>
                        </li>
                        <li>
                            Morris Animal Foundation. Golden Retriever Lifetime Study (overview &amp; updates).{' '}
                            <a href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study" target="_blank" rel="noopener noreferrer">https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study</a>{' '}
                            |{' '}
                            <a href="https://www.morrisanimalfoundation.org/article/what-have-we-learned-golden-retriever-lifetime-study-after-10-years" target="_blank" rel="noopener noreferrer">10-year update</a>
                        </li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-4">
                        This article is educational and not a substitute for veterinary diagnosis or treatment. Always consult your veterinarian for medical decisions.
                    </p>
                </section>

                <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
                    ← Back to Blog
                </Link>
            </main>
        </>
    );
}
