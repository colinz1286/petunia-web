export type BlogPostEntry = {
    slug: string;
    title: string;
    date: string; // keep as string; we’ll parse when needed
    description: string;
    component: () => Promise<{ default: React.ComponentType<object> }>;
    categories: string[];
    breed?: string; // 👈 NEW (only for breed_specific_guides)
};

export const blogPosts: BlogPostEntry[] = [
    {
        slug: 'professional-associations-certification-pet-care',
        title: 'Professional Associations & Certification Push: Raising Standards in Dog Boarding, Daycare & Pet Care',
        date: 'February 16, 2026',
        description:
            'An in-depth look at how professional associations like IBPSA, PACCC, and PSI are elevating standards across dog boarding, daycare, pet sitting, and dog walking through certification, ethics frameworks, and structured education.',
        component: () => import('./posts/professional-associations-certification-pet-care'),
        categories: ['boarding', 'sitter', 'walker'],
    },
    {
        slug: 'advocacy-pressure-boarding-safety-practices',
        title: 'Advocacy Pressure on Boarding Safety: Why Standards, Training, and Accountability Are Becoming Non-Negotiable',
        date: 'February 15, 2026',
        description:
            'After high-profile cruelty and negligence cases, advocacy voices and BBB guidance are pushing dog boarding and daycare toward stronger safety standards, staff training expectations, and clearer accountability. Here is what is changing, what owners should ask, and what operators can implement now.',
        component: () => import('./posts/advocacy-pressure-boarding-safety-practices'),
        categories: ['boarding', 'owner', 'vet'],
    },
    {
        slug: 'akc-newly-recognized-breeds-2026-owner-guide',
        title:
            'AKC’s Newly Recognized Breeds for 2026 (and What First-Time Owners Get Wrong)',
        date: 'February 9, 2026',
        description:
            'A practical, owner-first breakdown of the American Kennel Club’s newly recognized dog breeds for 2026, covering exercise needs, grooming commitments, training styles, common first-time owner mistakes, and how to find reputable breeders instead of impulse purchases.',
        component: () =>
            import('./posts/akc-newly-recognized-breeds-2026-owner-guide'),
        categories: ['owner', 'breeder']
    },
    {
        slug: 'westminster-2026-doberman-best-in-show',
        title:
            'Westminster 2026: Why a Doberman Winning Best in Show Matters Beyond the Show Ring',
        date: 'February 8, 2026',
        description:
            'An in-depth, owner-first look at why a Doberman Pinscher winning Best in Show at Westminster 2026 matters far beyond the show ring, including health, temperament myths, ethical breeding, and real-world impacts on families and rescues.',
        component: () =>
            import('./posts/westminster-2026-doberman-best-in-show'),
        categories: ['owner', 'breed_specific_guides', 'breeder', 'rescue'],
        breed: 'Doberman Pinscher'
    },
    {
        slug: 'new-york-shelter-rescue-standards-article-26c',
        title:
            'New York Shelter & Rescue Standards (Article 26-C): What Adopters Should Know',
        date: 'February 7, 2026',
        description:
            'A plain-English guide to New York’s new Article 26-C shelter and rescue standards, explaining why rescues may ask more questions, move more slowly, or charge more, and how higher standards aim to improve animal welfare, transparency, and adopter confidence.',
        component: () =>
            import('./posts/new-york-shelter-rescue-standards-article-26c'),
        categories: ['owner', 'rescue', 'vet']
    },
    {
        slug: 'ohio-averys-law-dangerous-vicious-dogs-2026',
        title:
            'Ohio’s Avery’s Law (Effective March 18, 2026): What ‘Dangerous/Vicious Dog’ Updates Mean for Owners',
        date: 'February 6, 2026',
        description:
            'A plain-English guide to Ohio’s Avery’s Law, effective March 18, 2026, explaining updated dangerous and vicious dog designations, liability insurance requirements, due process protections, impacts on dog parks and daycares, and why breed stereotypes are often confused with documented behavior history.',
        component: () =>
            import('./posts/ohio-averys-law-dangerous-vicious-dogs-2026'),
        categories: ['owner', 'vet', 'rescue']
    },
    {
        slug: 'usda-puppy-mill-enforcement-aspca-2025',
        title:
            'Is the USDA Actually Enforcing Puppy Mill Protections? What the ASPCA’s 2025 Critique Reveals',
        date: 'February 5, 2026',
        description:
            'A plain-English look at how USDA breeder enforcement is supposed to work, what the ASPCA says is actually happening in 2025, and how prospective dog owners can verify licensed breeder status and inspection history before buying a puppy.',
        component: () =>
            import('./posts/usda-puppy-mill-enforcement-aspca-2025'),
        categories: ['owner', 'breeder', 'rescue']
    },
    {
        slug: 'labor-forecast-2026-2029-hiring-wages-turnover-and-sitter-surge-spillover-for-boarding-and-daycare-facilities',
        title: 'Labor Forecast 2026–2029 — Hiring, Wages, Turnover, and Sitter Surge Spillover for Boarding & Daycare Facilities',
        date: 'January 28, 2026',
        description:
            'A data-driven labor-market outlook for boarding and daycare facility owners covering hiring availability, wage pressure, turnover risk, schedule quality, training systems, and the operational impact of sitter-surge dynamics from 2026–2029.',
        component: () =>
            import('./posts/labor-forecast-2026-2029-hiring-wages-turnover-and-sitter-surge-spillover-for-boarding-and-daycare-facilities'),
        categories: ['boarding'],
    },
    {
        slug: 'competing-without-a-price-war-2026-2029-how-facilities-win-on-trust-proof-and-retention',
        title: 'Competing Without a Price War (2026–2029): How Facilities Win on Trust, Proof, and Retention',
        date: 'January 19, 2026',
        description:
            'A data-driven guide for boarding and daycare facility owners explaining how trust signals, proof, and retention strategies protect pricing power in crowded markets from 2026–2029—without resorting to discounting.',
        component: () =>
            import('./posts/competing-without-a-price-war-2026-2029-how-facilities-win-on-trust-proof-and-retention'),
        categories: ['boarding'],
    },
    {
        slug: 'new-york-dog-boarding-daycare-laws-2026-proposed-safe-pet-boarding-act',
        title:
            'New York Dog Boarding & Daycare Laws (2026): What the Proposed Safe Pet Boarding Act Would Require',
        date: 'January 15, 2026',
        description:
            'A detailed, plain-English breakdown of New York’s proposed Safe Pet Boarding Act, explaining statewide licensing, inspections, staff training, documentation requirements, and how this legislation could reshape the boarding and daycare industry.',
        component: () =>
            import('./posts/new-york-dog-boarding-daycare-laws-2026-proposed-safe-pet-boarding-act'),
        categories: ['boarding'],
    },
    {
        slug: 'the-sitter-surge-risk-2026-2029-how-side-hustles-could-pressure-boarding-and-daycare-prices',
        title: 'The Sitter Surge Risk (2026–2029): How Side Hustles Could Pressure Boarding & Daycare Prices',
        date: 'January 14, 2026',
        description:
            'A data-driven analysis of the potential “sitter surge” from 2026–2029, explaining how gig work, side hustles, and labor-market shifts could increase in-home sitting and walking supply, pressure facility pricing, and reshape competition for boarding and daycare businesses.',
        component: () =>
            import('./posts/the-sitter-surge-risk-2026-2029-how-side-hustles-could-pressure-boarding-and-daycare-prices'),
        categories: ['boarding', 'sitter'],
    },
    {
        slug: 'ces-2026-pet-tech-smart-feeders-ai-collars-robot-companions',
        title:
            'CES 2026 Pet Tech: Smart Feeders, AI Collars, Self-Cleaning Toilets, and Robot Companions Worth Knowing About',
        date: 'January 12, 2026',
        description:
            'A source-backed roundup of CES 2026 pet tech: smart wet-food feeding, drinking analytics, face-recognition feeders, camera-enabled litter solutions, a self-flushing cat toilet concept, next-gen GPS collars, and the newest robot companions — including who each product fits best and what to watch before buying.',
        component: () =>
            import('./posts/ces-2026-pet-tech-smart-feeders-ai-collars-robot-companions'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'the-2026-2029-boarding-and-daycare-forecast-us-the-3-demand-drivers-owners-should-watch',
        title: 'The 2026–2029 Boarding & Daycare Forecast (U.S.): The 3 Demand Drivers Owners Should Watch',
        date: 'January 11, 2026',
        description:
            'A data-driven, U.S.-focused forecast for boarding and daycare facility owners covering 2026–2029, explaining how travel patterns, time away from home, and household confidence shape demand, pricing pressure, and operational planning.',
        component: () =>
            import('./posts/the-2026-2029-boarding-and-daycare-forecast-us-the-3-demand-drivers-owners-should-watch'),
        categories: ['boarding'],
    },
    {
        slug: 'cost-of-hip-dysplasia-treatment-in-dogs',
        title:
            'Cost of Hip Dysplasia Treatment in Dogs: Non-Surgical Care, Rehab, Injections, and Surgical Ranges',
        date: 'January 10, 2026',
        description:
            'A detailed, owner-first breakdown of the real-world costs of canine hip dysplasia care, including veterinary exams and imaging, PennHIP and OFA screening, medications and monitoring, structured rehab and physical therapy, joint injections and advanced pain-control options, assistive devices and home modifications, surgical cost categories, and practical budgeting strategies to reduce surprise expenses.',
        component: () => import('./posts/cost-of-hip-dysplasia-treatment-in-dogs'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'living-with-hip-dysplasia-in-dogs',
        title:
            'Living With Hip Dysplasia in Dogs: Daily Routines, Home Setup, Exercise, Flare Plans, and Long-Term Quality of Life',
        date: 'January 9, 2026',
        description:
            'A comprehensive, owner-first guide to living with canine hip dysplasia day to day, including home traction and flooring strategies, stairs and car access, sleep comfort, safe exercise routines, flare-up planning, low-impact mental enrichment, grooming and handling tips, seasonal considerations, travel planning, progress tracking, and long-term quality-of-life decision-making.',
        component: () => import('./posts/living-with-hip-dysplasia-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'why-dogs-are-afraid-of-vacuums',
        title:
            'Why Dogs Are Afraid of Vacuums (And How to Fix It): Noise, Instinct, and a Step-by-Step Training Plan',
        date: 'January 7, 2026',
        description:
            'A comprehensive, practical guide explaining why dogs fear vacuums, how to tell fear from excitement or instinctive chasing, common mistakes that make the problem worse, and a clear step-by-step desensitization and training plan to help dogs stay calm and safe.',
        component: () =>
            import('./posts/why-dogs-are-afraid-of-vacuums') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'cdc-dog-import-rules-us-2025-2026',
        title:
            'CDC Dog Import Rules Explained (2025–2026): Returning to the U.S. With Your Dog — What Changed, What Airlines Don’t Tell You, and How to Avoid Denial at the Airport',
        date: 'January 8, 2026',
        description:
            'A comprehensive CDC dog-import guide for 2025–2026: what changed after Aug 2024, the 6-month country-history decision tree, age and microchip requirements, CDC Dog Import Form receipt rules, transit and layover traps, common vet paperwork errors, what happens if your dog is denied, and copy-ready airport-day scripts and templates.',
        component: () =>
            import('./posts/cdc-dog-import-rules-us-2025-2026') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'non-surgical-management-of-hip-dysplasia',
        title:
            'Non-Surgical Management of Hip Dysplasia in Dogs: Evidence-Based Options That Actually Improve Comfort and Mobility',
        date: 'January 1, 2026',
        description:
            'A comprehensive, owner-first guide to managing canine hip dysplasia without surgery, including weight and body condition targets, safe exercise strategies, rehab and physical therapy, veterinarian-guided pain control, joint injections and advanced options, supplements and nutrition priorities, home modifications for traction and mobility, progress tracking, and clear signals for when to reconsider surgical consultation.',
        component: () => import('./posts/non-surgical-management-of-hip-dysplasia'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'occupational-noise-exposure-dog-daycare-hearing-protection',
        title:
            'Occupational Noise Exposure in Dog Boarding & Daycare: Why Hearing Protection Is Being Ignored (and How to Fix It)',
        date: 'January 1, 2026',
        description:
            'A comprehensive, real-world guide for dog boarding and daycare operators on occupational noise exposure, including OSHA and NIOSH thresholds, why hearing protection is routinely overlooked in pet care facilities, the long-term risks to staff, and practical, low-friction ways to reduce exposure without disrupting daily operations.',
        component: () =>
            import('./posts/occupational-noise-exposure-dog-daycare-hearing-protection'),
        categories: ['boarding', 'sitter', 'walker'],
    },
    {
        slug: 'cane-corso-temperament-explained',
        title: 'Cane Corso Temperament Explained: Guardian Instincts, Reactivity, Trainability, and Real-World Ownership',
        date: 'December 31, 2025',
        description:
            'A comprehensive, evidence-informed guide to Cane Corso temperament, covering guardian instincts, neutrality versus friendliness, adolescence and maturity, reactivity prevention, effective training styles, household management with kids and visitors, multi-pet dynamics, and realistic expectations for ownership.',
        component: () => import('./posts/cane-corso-temperament-explained'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'should-daycare-only-expand-into-boarding',
        title:
            'Should a Daycare-Only Business Expand Into Boarding? A Realistic Decision Guide',
        date: 'December 30, 2025',
        description:
            'A grounded, operator-first guide for daycare-only dog businesses considering overnight boarding, covering the realities of 24/7 responsibility, staffing, home-based limitations, licensing and compliance, facility requirements, liability exposure, and how to decide whether boarding truly fits your business and lifestyle.',
        component: () => import('./posts/should-daycare-only-expand-into-boarding'),
        categories: ['boarding', 'sitter', 'walker'],
    },
    {
        slug: 'should-i-offer-a-cash-discount',
        title:
            'Should You Offer a Cash Discount in the Dog Industry? The Real-World Tradeoffs Nobody Talks About',
        date: 'December 30, 2025',
        description:
            'A practical, real-world discussion for dog-industry businesses on whether cash discounts actually help, including fee tradeoffs, tax and lender optics, operational friction, client behavior, brand perception, safety risks, and a simple decision framework—without claiming there is one “right” answer.',
        component: () => import('./posts/should-i-offer-a-cash-discount'),
        categories: ['owner', 'boarding', 'daycare', 'sitter', 'walker', 'trainer'],
    },
    {
        slug: 'study-mushroom-supplement-cognitive-function-senior-dogs',
        title:
            'Study Report: Mushroom Supplement and Cognitive Function in Senior Dogs',
        date: 'December 29, 2025',
        description:
            'A factual summary of a reported 12-week veterinary study examining a mushroom-based nutraceutical in senior dogs, including study design, cognitive measures, reported outcomes, safety observations, and stated limitations.',
        component: () => import('./posts/study-mushroom-supplement-cognitive-function-senior-dogs'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'most-popular-dog-and-cat-names-2025',
        title:
            'Most Popular Dog (and Cat) Names of 2025: What Pet Naming Trends Reveal',
        date: 'December 29, 2025',
        description:
            'A simple, data-informed look at Rover&rsquo;s annual list of the most popular dog and cat names of 2025, including why names like Luna remain dominant and what these trends reveal about pet ownership culture worldwide.',
        component: () => import('./posts/most-popular-dog-and-cat-names-2025'),
        categories: ['owner'],
    },
    {
        slug: 'san-francisco-police-investigation-rover-dog-sitter',
        title:
            'San Francisco Police Investigate Allegations Against a Rover Dog Sitter: What Pet Owners Should Know',
        date: 'December 29, 2025',
        description:
            'A factual, owner-first report on the San Francisco police investigation involving a dog sitter booked through Rover, including what has been reported, what remains unconfirmed, how platform safeguards work, and practical steps owners can take to reduce risk when hiring pet care.',
        component: () => import('./posts/san-francisco-police-investigation-rover-dog-sitter'),
        categories: ['owner', 'sitter'],
    },
    {
        slug: 'uk-animal-welfare-reforms-2025-puppy-farming-dog-breeding-standards',
        title:
            'UK Animal Welfare Reforms (2025): What the New Strategy Could Change for Puppy Farming, Dog Breeding Standards, and Cruel Practices',
        date: 'December 28, 2025',
        description:
            'A detailed, source-cited breakdown of the UK’s 2025 Animal Welfare Strategy: planned puppy-farming crackdown, stronger dog-breeding rules, welfare reforms for pets, farming, and wildlife, and what owners should watch next.',
        component: () => import('./posts/uk-animal-welfare-reforms-2025-puppy-farming-dog-breeding-standards'),
        categories: ['owner', 'breeder'],
    },
    {
        slug: 'how-veterinarians-diagnose-hip-dysplasia',
        title:
            'How Veterinarians Diagnose Hip Dysplasia in Dogs: Exams, X-Rays, PennHIP, OFA, and What Results Mean',
        date: 'December 27, 2025',
        description:
            'A comprehensive, owner-first guide explaining how veterinarians diagnose hip dysplasia in dogs, including orthopedic exams, X-ray positioning and sedation, OFA versus PennHIP screening, arthritis grading, differential diagnoses, and how results guide treatment decisions.',
        component: () => import('./posts/how-veterinarians-diagnose-hip-dysplasia'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'early-signs-of-hip-dysplasia-owners-miss',
        title:
            'Early Signs of Hip Dysplasia Owners Miss: Subtle Clues Before Limping Starts',
        date: 'December 27, 2025',
        description:
            'A deeply practical, owner-focused guide to the early and often-overlooked signs of hip dysplasia in dogs, including subtle movement changes, posture shifts, behavioral clues, and daily-life signals that appear long before obvious limping.',
        component: () => import('./posts/early-signs-of-hip-dysplasia-owners-miss'),
        categories: ['owner'],
    },
    {
        slug: 'wolf-dna-in-modern-dogs-2025-study',
        title:
            'Wolf DNA in Modern Dogs: What the New 2,700-Genome Study Found, What It Means, and What It Does Not',
        date: 'December 26, 2025',
        description:
            'An evidence-based breakdown of a major 2025 canine genetics study analyzing nearly 2,700 genomes, explaining why many modern dogs carry trace wolf ancestry, when the mixing likely occurred, what traits it may influence, and what owners should not assume.',
        component: () => import('./posts/wolf-dna-in-modern-dogs-2025-study'),
        categories: ['owner'],
    },
    {
        slug: 'hip-dysplasia-in-dogs',
        title:
            'Hip Dysplasia in Dogs: Causes, Early Signs, Diagnosis, Treatment Options, Costs, and Long-Term Management',
        date: 'December 26, 2025',
        description:
            'A comprehensive, evidence-based guide to hip dysplasia in dogs: what it is, why it develops, early warning signs owners miss, how veterinarians diagnose it, treatment and surgery options, realistic U.S. cost ranges, prevention myths, and long-term management for comfort and mobility.',
        component: () => import('./posts/hip-dysplasia-in-dogs'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'senolytics-for-dogs-explained',
        title:
            'Senolytics for Dogs Explained: What They Are, What They Claim to Do, What Evidence Exists, Safety Concerns, and What Is Still Unknown',
        date: 'December 25, 2025',
        description:
            'A comprehensive, owner-first guide to senolytics in dogs, explaining cellular senescence, why senolytics are studied for healthy aging, what outcomes researchers measure, how biomarker claims can mislead, the most important safety and interaction concerns for senior dogs, and what remains unknown.',
        component: () => import('./posts/senolytics-for-dogs-explained'),
        categories: ['vet'],
    },
    {
        slug: 'supplements-vs-drugs-dog-longevity',
        title:
            'Supplements vs Drugs in Dog Longevity: How Owners Can Tell the Difference, Avoid Marketing Traps, and Make Safer Decisions',
        date: 'December 25, 2025',
        description:
            'A comprehensive, owner-first guide explaining the real differences between supplements and prescription drugs in dog longevity, including regulatory standards, evidence requirements, biomarker pitfalls, quality and contamination risks, drug interactions, and how to make safer, veterinarian-guided decisions.',
        component: () => import('./posts/supplements-vs-drugs-dog-longevity'),
        categories: ['owner', 'veter'],
    },
    {
        slug: 'should-you-join-dog-longevity-study',
        title:
            'Should You Enroll Your Dog in a Longevity Study? A Clear, Owner-First Checklist for Safety, Endpoints, Costs, and Real Expectations',
        date: 'December 25, 2025',
        description:
            'A thorough, owner-first guide to deciding whether to enroll a dog in a longevity study, covering endpoints, placebo and blinding, safety monitoring, withdrawal rules, costs, logistics, data privacy, and how to make a calm, evidence-driven decision when you feel hopeful or anxious.',
        component: () => import('./posts/should-you-join-dog-longevity-study'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'rapamycin-longevity-research-dogs',
        title:
            'Rapamycin-Style Longevity Research in Dogs: What Studies Measure, Potential Benefits, Safety Risks, Who It May Fit, and What Is Still Unknown',
        date: 'December 25, 2025',
        description:
            'A comprehensive, owner-first guide to rapamycin in dog aging research: what rapamycin is, why scientists study it for healthspan, what major dog trials like TRIAD aim to measure, the most important safety risks and monitoring questions for senior dogs, and why owners should not self-source or experiment outside veterinary supervision.',
        component: () => import('./posts/rapamycin-longevity-research-dogs'),
        categories: ['vet'],
    },
    {
        slug: 'loyal-loy-002-explained',
        title:
            'LOY-002 Explained: What It Is, Who It Is For, What the FDA Milestone Actually Means, What Trials Measure, and What Is Still Unknown',
        date: 'December 25, 2025',
        description:
            'A comprehensive, owner-first deep dive into LOY-002: what it is designed to do, who it is intended for, how FDA milestone language like reasonable expectation of effectiveness is commonly misunderstood, what endpoints trials actually measure, what safety questions matter most for senior dogs, and what remains unknown.',
        component: () => import('./posts/loyal-loy-002-explained'),
        categories: ['vet'],
    },
    {
        slug: 'dog-longevity-biomarkers-guide',
        title:
            'Dog Longevity Biomarkers: Which Ones Matter, Which Ones Mislead, and How Owners Can Interpret Healthy Aging Claims',
        date: 'December 25, 2025',
        description:
            'A practical, owner-first guide to dog longevity biomarkers: what biomarkers are, why surrogate endpoints can mislead, which categories are most meaningful, how trials use biomarkers, and how owners can evaluate biomarker-based aging and longevity claims responsibly.',
        component: () => import('./posts/dog-longevity-biomarkers-guide'),
        categories: ['vet'],
    },
    {
        slug: 'fda-veterinary-longevity-claims',
        title:
            'How the FDA Evaluates Veterinary Longevity Claims: Conditional Approval, Reasonable Expectation of Effectiveness, Endpoints, and What Owners Should Understand',
        date: 'December 25, 2025',
        description:
            'A clear, owner-first explanation of how the FDA’s Center for Veterinary Medicine evaluates longevity-style veterinary drug claims, what conditional approval and reasonable expectation of effectiveness really mean, which endpoints matter, and how to read regulatory milestones without being misled.',
        component: () => import('./posts/fda-veterinary-longevity-claims'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'gdv-bloat-emergency-plan-large-dogs',
        title:
            'GDV (Bloat) Emergency Plan for Large Dogs: What to Do in the First 10 Minutes, What the ER Will Do, and How to Reduce Risk',
        date: 'December 25, 2025',
        description:
            'A calm, practical emergency guide to GDV (bloat) in dogs: the exact signs to treat as an emergency, what to do immediately, what not to do, what the ER typically does, gastropexy explained, and risk-reduction steps.',
        component: () => import('./posts/gdv-bloat-emergency-plan-large-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'epi-in-german-shepherds-owner-guide',
        title:
            'EPI in German Shepherds: The Practical Owner Guide (Symptoms, Testing, Enzymes, B12, Diet, and Troubleshooting)',
        date: 'December 25, 2025',
        description:
            'A clear, step-by-step guide to exocrine pancreatic insufficiency (EPI) in German Shepherds: hallmark signs, cTLI testing, enzyme dosing routines, B12 support, diet choices, monitoring, and why some dogs do not improve right away.',
        component: () => import('./posts/epi-in-german-shepherds-owner-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'vomiting-vs-regurgitation-in-dogs',
        title:
            'Vomiting vs Regurgitation in Dogs: How to Tell the Difference, What It Means, and When It’s an Emergency',
        date: 'December 25, 2025',
        description:
            'A practical, calm guide for worried owners: how to distinguish vomiting from regurgitation, why the difference matters (aspiration risk, obstruction, megaesophagus), what to track, and clear ER thresholds.',
        component: () => import('./posts/vomiting-vs-regurgitation-in-dogs'),
        categories: ['owner']
    },
    {
        slug: 'german-shepherd-hind-end-weakness-dm-vs-arthritis-vs-dlss',
        title:
            'German Shepherd Hind-End Weakness: DM vs Arthritis vs DLSS vs Injury (A Practical Owner Triage Guide)',
        date: 'December 25, 2025',
        description:
            'A practical, calm, step-by-step guide to hind-end weakness in German Shepherds: how to tell pain vs nerve weakness, common causes (arthritis, cruciate injury, DLSS, DM), what to track at home, and when to seek urgent care.',
        component: () =>
            import('./posts/german-shepherd-hind-end-weakness-dm-vs-arthritis-vs-dlss'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'vet-affordability-pet-costs-financial-stress-2025',
        title: 'Why Pet Owners Are Struggling With Vet Affordability: New Data on Costs, Financial Stress, and What Helps (2025)',
        date: 'December 23, 2025',
        description:
            'New surveys and spending data show many pet owners feel financial stress about veterinary costs. Here is what the data says, what drives prices, and practical ways to plan.',
        component: () => import('./posts/vet-affordability-pet-costs-financial-stress-2025'),
        categories: ['owner'],
    },
    {
        slug: 'emergency-specialty-vet-pricing-rising-2025',
        title: "Emergency and Specialty Vet Prices Are Rising Fast: What's Driving It, What the Data Shows, and How Owners Can Prepare (2025)",
        date: 'December 23, 2025',
        description:
            'A factual, owner-first breakdown of why emergency and specialty veterinary bills have jumped: staffing and overhead, advanced medicine, market structure, and what pet parents can do to reduce surprise costs.',
        component: () => import('./posts/emergency-specialty-vet-pricing-rising-2025'),
        categories: ['owner'],
    },
    {
        slug: 'private-equity-veterinary-clinic-consolidation-prices-continuity',
        title: 'Private Equity in Veterinary Clinics: How Consolidation Can Affect Prices and Continuity of Care',
        date: 'December 23, 2025',
        description:
            'A factual, owner-first guide to private-equity consolidation in veterinary care: what consolidation is, what credible evidence suggests about pricing and transparency, and how to protect continuity.',
        component: () => import('./posts/private-equity-veterinary-clinic-consolidation-prices-continuity'),
        categories: ['owner'],
    },
    {
        slug: 'nih-cat-experiments-funding-controversy-2025',
        title: 'NIH Funding for New Cat Experiments (2025): What Was Reported, What NIH Actually Announced, and What Could Change Next',
        date: 'December 23, 2025',
        description:
            'A factual, plain-English explainer of the December 2025 reporting that NIH funded new cat experiments: what was alleged, what NIH policy changes actually say, how NIH grants work, and what outcomes are realistic.',
        component: () => import('./posts/nih-cat-experiments-funding-controversy-2025'),
        categories: ['owner'],
    },
    {
        slug: 'chennai-bans-pitbull-rottweiler-licences-2025',
        title: 'Chennai Bans New Pit Bull and Rottweiler Licences: What the GCC Decision Says, Fines, and What Happens Next (2025)',
        date: 'December 23, 2025',
        description:
            'A factual guide to the Greater Chennai Corporation&#39;s Dec 2025 decision limiting Pit Bull and Rottweiler licences, including fines, rules for current owners, and what other cities may do next.',
        component: () => import('./posts/chennai-bans-pitbull-rottweiler-licences-2025'),
        categories: ['owner'],
    },
    {
        slug: 'arizona-bite-and-run-dog-bite-law-2025',
        title: 'Arizona\'s "Bite and Run" Dog Bite Law (2025): What Owners Must Do, Penalties, and Why Other States May Follow',
        date: 'December 23, 2025',
        description:
            'A plain-English guide to Arizona\'s 2025 "Bite and Run" law: when owners must share contact info after a dog bite, penalties, and how similar accountability laws could spread.',
        component: () => import('./posts/arizona-bite-and-run-dog-bite-law-2025'),
        categories: ['owner'],
    },
    {
        slug: 'dog-tax-dependent-irs-lawsuit-2025',
        title: 'Can You Claim a Dog as a Tax Dependent? The New York IRS Lawsuit Explained (2025)',
        date: 'December 23, 2025',
        description:
            'A plain-English breakdown of the 2025 lawsuit arguing a Golden Retriever should qualify as a federal tax dependent: what the complaint claims, what IRS dependent rules require, and what outcomes are realistic.',
        component: () => import('./posts/dog-tax-dependent-irs-lawsuit-2025'),
        categories: ['owner'],
    },
    {
        slug: 'uk-animal-welfare-reforms-puppy-farms-2025',
        title: 'UK Animal Welfare Reforms (2025): Puppy Farm Crackdown, Pet Protections, and What Changes Next',
        date: 'December 23, 2025',
        description:
            'A plain-English guide to the UK’s December 2025 animal welfare reforms, focusing on the puppy farm crackdown, breeder oversight, import controls, and what these changes mean for dog owners and pet-care businesses.',
        component: () => import('./posts/uk-animal-welfare-reforms-puppy-farms-2025'),
        categories: ['owner', 'breeder']
    },
    {
        slug: 'boarding-anxiety-vs-separation-anxiety-similar-symptoms-different-plans',
        title: 'Boarding Anxiety vs Separation Anxiety: Similar Symptoms, Different Plans',
        date: 'December 22, 2025',
        description:
            'How to tell boarding anxiety from separation anxiety in dogs, why symptoms overlap, and the right plan for each—environmental routine fixes vs alone-time training and veterinary behavior support.',
        component: () =>
            import('./posts/boarding-anxiety-vs-separation-anxiety-similar-symptoms-different-plans'),
        categories: ['boarding'],
    },
    {
        slug: 'what-to-pack-for-a-nervous-dog-scent-items-sleep-setup-and-familiar-cues',
        title: 'What to Pack for a Nervous Dog: Scent Items, Sleep Setup, and Familiar Cues',
        date: 'December 22, 2025',
        description:
            'A thorough packing guide for nervous boarding dogs: which scent items help most, how to set up sleep and routine cues, and what to avoid to prevent stress and GI upset.',
        component: () =>
            import('./posts/what-to-pack-for-a-nervous-dog-scent-items-sleep-setup-and-familiar-cues'),
        categories: ['boarding'],
    },
    {
        slug: 'tracking-welfare-settle-score-notes-system',
        title: 'Tracking Welfare Without Fancy Tools: A Simple “Settle Score” and Notes System',
        date: 'December 22, 2025',
        description:
            'A practical settle score and notes system to track kennel welfare: simple metrics, clear scoring, and repeatable logs that improve routines, noise control, and outcomes.',
        component: () => import('./posts/tracking-welfare-settle-score-notes-system'),
        categories: ['boarding'],
    },
    {
        slug: 'enrichment-menus-rotate-lick-chew-sniff-without-overstimulating-dogs',
        title: 'Enrichment Menus: Rotating Lick/Chew/Sniff Activities Without Overstimulating Dogs',
        date: 'December 22, 2025',
        description:
            'A practical, evidence-informed enrichment menu for boarding and daycare: how to rotate lick, chew, and sniff activities to support calm behavior without triggering overstimulation.',
        component: () =>
            import('./posts/enrichment-menus-rotate-lick-chew-sniff-without-overstimulating-dogs'),
        categories: ['boarding'],
    },
    {
        slug: 'designing-quiet-zones-visual-barriers-spacing-and-settle-friendly-setups',
        title: 'Designing Quiet Zones: Visual Barriers, Spacing, and Settle-Friendly Setups',
        date: 'December 22, 2025',
        description:
            'How to design quiet zones in boarding and daycare: visual barriers, spacing, traffic patterns, and settle-friendly setups that reduce barking loops and support rest.',
        component: () =>
            import('./posts/designing-quiet-zones-visual-barriers-spacing-and-settle-friendly-setups'),
        categories: ['boarding'],
    },
    {
        slug: 'noise-barking-loops-and-kennel-reactivity-how-environment-shapes-behavior',
        title: 'Noise, Barking Loops, and Kennel Reactivity: How Environment Shapes Behavior',
        date: 'December 22, 2025',
        description:
            'An evidence-informed guide to kennel noise and barking loops—why dogs spiral into reactivity, how environment drives behavior, and practical ways to reduce barking and stress.',
        component: () =>
            import('./posts/noise-barking-loops-and-kennel-reactivity-how-environment-shapes-behavior'),
        categories: ['boarding'],
    },
    {
        slug: 'decompression-after-boarding-why-dogs-seem-tired-clingy-or-off-at-home',
        title: 'Decompression After Boarding: Why Some Dogs Seem Tired, Clingy, or “Off” at Home',
        date: 'December 22, 2025',
        description:
            'Why some dogs seem tired, clingy, restless, or “off” after boarding—and a practical decompression plan for the first 72 hours plus red flags to watch.',
        component: () =>
            import('./posts/decompression-after-boarding-why-dogs-seem-tired-clingy-or-off-at-home'),
        categories: ['boarding'],
    },
    {
        slug: 'predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders',
        title: 'Predictability Beats “Extra Attention”: Why Consistent Routines Calm Nervous Boarders',
        date: 'December 22, 2025',
        description:
            'A practical, evidence-informed guide to why predictable routines calm nervous boarding dogs—and how to build a simple daily rhythm that reduces stress and barking.',
        component: () =>
            import('./posts/predictability-beats-extra-attention-why-consistent-routines-calm-nervous-boarders'),
        categories: ['boarding'],
    },
    {
        slug: 'scent-enrichment-for-dogs-research-safe',
        title: 'Scent Enrichment for Dogs: What Research Looks At (and How to Do It Safely)',
        date: 'December 22, 2025',
        description:
            'A comprehensive, evidence-informed guide to scent enrichment for dogs—what shelter and kennel research suggests, which approaches are safest, how to run low-risk sniff activities, and how to avoid common pitfalls like concentrated essential oils.',
        component: () => import('./posts/scent-enrichment-for-dogs-research-safe'),
        categories: ['boarding'],
    },
    {
        slug: 'music-for-kennelled-dogs-studies-habituation',
        title: 'Music for Kennelled Dogs: What Studies Suggest, and Why Dogs Can Habituate',
        date: 'December 22, 2025',
        description:
            'An evidence-informed guide to using music as auditory enrichment for kenneled dogs, including what studies show, why effects can fade from habituation, genre considerations, practical scheduling and volume rules, and how to measure results safely.',
        component: () => import('./posts/music-for-kennelled-dogs-studies-habituation'),
        categories: ['boarding'],
    },
    {
        slug: 'reducing-boarding-stress-sound-scent-routine-choice',
        title: 'Reducing Boarding Stress: Evidence-Informed Enrichment (Sound, Scent, Routine, and Choice)',
        date: 'December 22, 2025',
        description:
            'A practical, evidence-informed guide to reducing kennel stress using sound and scent enrichment, predictable routines, and choice-based handling—plus clear do’s and don’ts, implementation checklists, and welfare tracking tips.',
        component: () => import('./posts/reducing-boarding-stress-sound-scent-routine-choice'),
        categories: ['boarding'],
    },
    {
        slug: 'christmas-tree-holiday-decor-dogs',
        title: 'Christmas Tree & Holiday Decor Dangers for Dogs: Tinsel, Ornaments, Tree Water, and What to Do',
        date: 'December 22, 2025',
        description:
            'A comprehensive Christmas safety guide covering the most common holiday decor dangers for dogs, including tinsel, ornament hooks, tree water, lights and cords, toxic plants, ingestion symptoms, and clear guidance on when emergency care is needed.',
        component: () => import('./posts/christmas-tree-holiday-decor-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'holiday-ingestion-risks-dogs-christmas',
        title: 'Holiday Ingestion Risks for Dogs: Christmas Foods, Wrappers, Toys, Symptoms, and When to Go to the ER',
        date: 'December 22, 2025',
        description:
            'A thorough Christmas safety guide to what dogs commonly swallow over the holidays (dangerous foods, wrappers, ribbons, batteries, toys), the warning signs to watch for, and clear guidance on when emergency care is needed.',
        component: () => import('./posts/holiday-ingestion-risks-dogs-christmas'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'homemade-christmas-dog-treats-recipes',
        title: 'Homemade Christmas Dog Treats: Safe Recipes, Portions, and Holiday Prep Tips',
        date: 'December 22, 2025',
        description:
            'A practical, safety-first guide to homemade Christmas treats for dogs, including simple recipes, safe ingredient swaps, portion guidance by dog size, storage tips, and what holiday foods to avoid.',
        component: () => import('./posts/homemade-christmas-dog-treats-recipes'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'christmas-foods-dogs-should-not-eat',
        title: 'Christmas Foods Dogs Should Not Eat: Holiday Hazards, Symptoms, and What to Do',
        date: 'December 22, 2025',
        description:
            'A practical Christmas safety guide to the foods and ingredients that are dangerous for dogs, why they are risky, common holiday symptoms to watch for, and what to do right away to avoid ER visits.',
        component: () => import('./posts/christmas-foods-dogs-should-not-eat'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'what-dogs-can-eat-on-christmas',
        title: 'What Can Dogs Eat on Christmas? Safe Holiday Foods, Portion Sizes, and What to Avoid',
        date: 'December 22, 2025',
        description:
            'A practical Christmas guide to safe dog-friendly holiday foods, how much is okay by dog size, simple prep tips, and which festive ingredients to avoid to reduce vomiting, diarrhea, pancreatitis, and ER visits.',
        component: () => import('./posts/what-dogs-can-eat-on-christmas'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'allergic-reactions-maropitant-dogs',
        title: 'Allergic Reactions to Maropitant (Cerenia®) in Dogs: Facial Swelling, Hives, and What to Do',
        date: 'December 21, 2025',
        description:
            'Although uncommon, maropitant (Cerenia®) can cause allergic reactions in dogs, including facial swelling, hives, and itching. Learn what these reactions look like, when emergency care is required, whether over-the-counter medications are safe, and what alternatives exist.',
        component: () => import('./posts/allergic-reactions-maropitant-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'behavior-changes-disorientation-maropitant-dogs',
        title: 'Maropitant (Cerenia®) and Disorientation in Dogs: Signs, Risks, and When It’s an Emergency',
        date: 'December 20, 2025',
        description:
            'Some dogs may show behavior changes or disorientation after maropitant (Cerenia®). Learn observable signs, why it can happen, which dogs are higher risk, when to seek emergency care, and alternatives if maropitant is stopped.',
        component: () => import('./posts/behavior-changes-disorientation-maropitant-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'collapse-lethargy-maropitant-dogs',
        title: 'Severe Lethargy or Collapse in Dogs on Maropitant: Causes, Emergencies, and What to Do',
        date: 'December 19, 2025',
        description:
            'In rare cases, dogs taking maropitant (Cerenia®) can develop severe lethargy or collapse. Learn the physiologic mechanisms involved, warning signs that signal an emergency, immediate steps owners can take, and how veterinarians treat these reactions.',
        component: () => import('./posts/collapse-lethargy-maropitant-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'persistent-vomiting-despite-maropitant-dogs',
        title: 'Why Dogs Can Continue Vomiting Despite Maropitant (Cerenia®)',
        date: 'December 18, 2025',
        description:
            'Some dogs continue vomiting despite treatment with maropitant (Cerenia®). Learn why this happens, the physiologic pathways involved, warning signs that require emergency care, and what veterinarians do when anti-nausea therapy fails.',
        component: () => import('./posts/persistent-vomiting-despite-maropitant-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'maropitant-for-dogs',
        title: 'Maropitant for Dogs: Uses, Side Effects, and When It Should Be Avoided',
        date: 'December 13, 2025',
        description:
            'Maropitant (commonly known as Cerenia®) is a widely used anti-nausea and anti-vomiting medication for dogs. Learn how it works, common situations where it is prescribed, potential side effects, contraindications, and when veterinary guidance is essential.',
        component: () => import('./posts/maropitant-for-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'lethargy-metronidazole-dogs',
        title: 'Lethargy in Dogs on Metronidazole: Causes, Risks, and When to Worry',
        date: 'December 16, 2025',
        description:
            'Dogs taking metronidazole or similar GI medications may appear lethargic or unusually tired. Learn why this happens, what is occurring physiologically, how to support recovery at home, and when lethargy signals a veterinary emergency.',
        component: () => import('./posts/lethargy-metronidazole-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'excessive-drooling-metronidazole-dogs',
        title: 'Excessive Drooling in Dogs on Metronidazole: Causes, Risks, and When It’s an Emergency',
        date: 'December 15, 2025',
        description:
            'Dogs taking metronidazole or similar GI medications may drool excessively due to bitterness, nausea, reflux, or (rarely) neurologic toxicity. Learn what causes drooling, what you can do at home, and when to call a veterinarian.',
        component: () => import('./posts/excessive-drooling-metronidazole-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'nausea-vomiting-metronidazole-dogs',
        title: 'What to Do If Your Dog Has Nausea or Vomiting While on Metronidazole',
        date: 'December 14, 2025',
        description:
            'Dogs taking metronidazole or similar GI medications may experience nausea or vomiting. Learn why this happens, what you can safely do at home, when to call your veterinarian, signs of dehydration or toxicity, and when vomiting becomes a medical emergency.',
        component: () => import('./posts/nausea-vomiting-metronidazole-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'help-dog-eat-while-on-metronidazole',
        title: 'How to Help a Dog Eat While on Metronidazole or Other GI Medications',
        date: 'December 13, 2025',
        description:
            'Dogs taking metronidazole or other GI medications may experience reduced appetite or nausea. Learn safe grocery-store food options, what to avoid, when bland diets help, and when appetite loss requires veterinary attention.',
        component: () => import('./posts/help-dog-eat-while-on-metronidazole'),
        categories: ['owner'],
    },
    {
        slug: 'metronidazole-for-dogs',
        title: 'Metronidazole for Dogs: Uses, Side Effects, and When to Be Concerned',
        date: 'December 12, 2025',
        description:
            'Metronidazole is commonly prescribed for dogs with diarrhea, colitis, and certain infections. Learn what this medication is used for, how long it is prescribed, potential side effects, warning signs of toxicity, and when to contact your veterinarian.',
        component: () => import('./posts/metronidazole-for-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'gi-medications-for-dogs',
        title: 'Common GI Medications for Dogs: What Vets Prescribe and Why',
        date: 'December 11, 2025',
        description:
            'Veterinarians prescribe different gastrointestinal medications for dogs based on symptoms like vomiting, diarrhea, nausea, acid reflux, and inflammation. Learn which medications are commonly used, how long they are prescribed for, and what underlying conditions they treat.',
        component: () => import('./posts/gi-medications-for-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'intestinal-blockage-dogs-symptoms',
        title: 'Intestinal Blockages in Dogs: Early Warning Signs, Vomiting Patterns, Diagnosis, and Treatment',
        date: 'December 19, 2025',
        description:
            'Intestinal blockages in dogs can become life-threatening quickly. Learn common objects dogs swallow, early warning signs owners miss, why vomiting without diarrhea is concerning, and how veterinarians diagnose and treat obstructions.',
        component: () => import('./posts/intestinal-blockage-dogs-symptoms'),
        categories: ['owner'],
    },
    {
        slug: 'gut-dysbiosis-in-dogs',
        title: 'Gut Dysbiosis in Dogs: Microbiome Imbalance, Symptoms, and Evidence-Based Recovery',
        date: 'December 18, 2025',
        description:
            'Gut dysbiosis is an imbalance of the canine gut microbiome that can drive chronic diarrhea, gas, and digestive instability. Learn causes, diagnostic limits, and evidence-based recovery strategies.',
        component: () => import('./posts/gut-dysbiosis-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'pancreatitis-and-fatty-foods-in-dogs',
        title: 'Pancreatitis and High-Fat Foods in Dogs: Symptoms, Risks, Treatment, and Prevention',
        date: 'December 17, 2025',
        description:
            'Pancreatitis is a painful and potentially serious condition in dogs, often triggered by high-fat foods. Learn symptoms, diagnosis, treatment, and how to prevent recurrence.',
        component: () => import('./posts/pancreatitis-and-fatty-foods-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'poor-dog-food-digestive-problems',
        title: 'Poor-Quality Dog Food and Digestive Problems: Digestibility, Stool Quality, and Better Choices',
        date: 'December 16, 2025',
        description:
            'Digestive issues are often blamed on sensitive stomachs, but food quality and digestibility play a major role. Learn how poor-quality dog food affects stool, gut health, and how to upgrade diets safely.',
        component: () => import('./posts/poor-dog-food-digestive-problems'),
        categories: ['owner'],
    },
    {
        slug: 'stress-colitis-in-dogs',
        title: 'Stress-Induced Colitis in Dogs: Mucus, Blood, Diarrhea, and How to Prevent Flare-Ups',
        date: 'December 15, 2025',
        description:
            'Stress colitis can cause sudden diarrhea with mucus or bright red blood, often after boarding, travel, or routine changes. Learn symptoms, rule-outs, and prevention strategies.',
        component: () => import('./posts/stress-colitis-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'intestinal-parasites-causing-diarrhea-dogs',
        title: 'Intestinal Parasites Causing Diarrhea in Dogs: Symptoms, Testing, Treatment, and Prevention',
        date: 'December 14, 2025',
        description:
            'Parasites are a common, treatable cause of diarrhea in dogs. Learn which intestinal parasites matter most, how dogs get infected, how fecal testing works, and how to prevent reinfection and household spread.',
        component: () => import('./posts/intestinal-parasites-causing-diarrhea-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'food-intolerance-allergies-dogs-gi-symptoms',
        title: 'Food Intolerance vs Food Allergy in Dogs: GI Symptoms, Triggers, and the Elimination Diet Plan',
        date: 'December 13, 2025',
        description:
            'Food intolerance and food allergy can both cause vomiting, diarrhea, gas, and chronic soft stool in dogs. Learn the difference, common triggers, elimination diet steps, and why many limited-ingredient foods fail.',
        component: () => import('./posts/food-intolerance-allergies-dogs-gi-symptoms'),
        categories: ['owner'],
    },
    {
        slug: 'sudden-diet-changes-gi-upset-dogs',
        title: 'Sudden Diet Changes and GI Upset in Dogs: Symptoms, Timelines, and Safe Transitions',
        date: 'December 12, 2025',
        description:
            'Sudden food changes often trigger vomiting, diarrhea, gas, or soft stools in dogs. Learn why transitions upset digestion, how to switch foods safely, and when symptoms mean something else.',
        component: () => import('./posts/sudden-diet-changes-gi-upset-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'dietary-indiscretion-in-dogs',
        title: 'Dietary Indiscretion in Dogs: Causes, Symptoms, Risks, and Prevention',
        date: 'December 11, 2025',
        description:
            'Dietary indiscretion is one of the most common causes of vomiting and diarrhea in dogs. Learn why dogs scavenge, what they ingest, warning signs of obstruction, and how to prevent repeat episodes.',
        component: () => import('./posts/dietary-indiscretion-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'common-gi-problems-in-dogs',
        title: 'Common Gastrointestinal (GI) Problems in Dogs: Symptoms, Causes, and When to Worry',
        date: 'December 10, 2025',
        description:
            'Vomiting, diarrhea, gas, appetite changes, and abnormal stools are among the most common GI problems in dogs. Learn what causes digestive distress, which symptoms require urgent care, and how veterinarians evaluate gastrointestinal disease.',
        component: () => import('./posts/common-gi-problems-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'traveling-with-a-boston-terrier-2025',
        title:
            'Traveling With a Boston Terrier (2025): Air, Car, Heat Safety & Stress-Free Trips',
        date: 'December 16, 2025',
        description:
            'A safety-first guide to traveling with a Boston Terrier, covering airline restrictions, car restraint systems, hotel etiquette, overheating prevention, packing checklists, and managing anxious travelers.',
        component: () =>
            import('./posts/traveling-with-a-boston-terrier-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'best-dog-sports-for-boston-terriers-2025',
        title:
            'Best Dog Sports for Boston Terriers (2025): Agility, Rally, Obedience & Confidence Building',
        date: 'December 15, 2025',
        description:
            'A practical guide to the best dog sports for Boston Terriers, covering agility, rally, obedience, unsafe sports for brachycephalic dogs, beginner options, confidence building, competition expectations, and behavior benefits.',
        component: () =>
            import('./posts/best-dog-sports-for-boston-terriers-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'leash-training-a-boston-terrier-2025',
        title:
            'Leash Training a Boston Terrier (2025): Loose-Leash Walking, Gear, Reactivity & Realistic Routines',
        date: 'December 14, 2025',
        description:
            'A practical guide to leash training a Boston Terrier, covering loose-leash walking, harness selection for brachycephalic dogs, training progression, reactivity prevention, and puppy versus adult routines.',
        component: () =>
            import('./posts/leash-training-a-boston-terrier-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-recall-training-2025',
        title:
            'Boston Terrier Recall Training (2025): Step-by-Step Protocol for Reliable Off-Leash Safety',
        date: 'December 13, 2025',
        description:
            'A realistic, step-by-step guide to Boston Terrier recall training, covering indoor foundations, yard and long-line work, off-leash safety, reinforcement systems, common mistakes, and distraction proofing.',
        component: () =>
            import('./posts/boston-terrier-recall-training-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-trick-training-2025',
        title:
            'Boston Terrier Trick Training (2025): From Beginner Tricks to Advanced Chains',
        date: 'December 12, 2025',
        description:
            'A step-by-step guide to Boston Terrier trick training, covering why the breed excels, foundational skills, beginner and intermediate tricks, behavior chaining, and long-term reward strategies.',
        component: () =>
            import('./posts/boston-terrier-trick-training-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-vs-bulldog-breeds-2025',
        title:
            'Boston Terrier vs Bulldog Breeds (2025): English, French & American Compared',
        date: 'December 11, 2025',
        description:
            'A detailed comparison of Boston Terriers versus English, French, and American Bulldogs, covering structure, personality, breathing, heat sensitivity, care costs, and lifestyle fit.',
        component: () =>
            import('./posts/boston-terrier-vs-bulldog-breeds-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-vs-pug-2025',
        title:
            'Boston Terrier vs Pug (2025): Temperament, Health, Grooming & Lifestyle Fit',
        date: 'December 10, 2025',
        description:
            'A side-by-side comparison of Boston Terriers and Pugs, covering temperament, grooming and shedding, health risks, exercise needs, recent demand trends, and which lifestyle each breed fits best.',
        component: () =>
            import('./posts/boston-terrier-vs-pug-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-vs-french-bulldog-2025',
        title:
            'Boston Terrier vs French Bulldog (2025): Personality, Health, Cost & Lifestyle Fit',
        date: 'December 9, 2025',
        description:
            'A side-by-side comparison of Boston Terriers and French Bulldogs, covering personality, energy level, health risks, lifespan, ownership costs, and lifestyle compatibility.',
        component: () =>
            import('./posts/boston-terrier-vs-french-bulldog-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'are-boston-terriers-good-for-first-time-owners-2025',
        title:
            'Are Boston Terriers Good for First-Time Owners? (2025): Pros, Challenges & Real Expectations',
        date: 'December 8, 2025',
        description:
            'A realistic guide for first-time dog owners considering a Boston Terrier, covering beginner-friendly traits, common challenges, training needs, costs, behavior pitfalls, and first-year expectations.',
        component: () =>
            import('./posts/are-boston-terriers-good-for-first-time-owners-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'is-a-boston-terrier-the-right-dog-for-you-2025',
        title:
            'Is a Boston Terrier the Right Dog for You? (2025): Personality, Lifestyle Fit & Real Expectations',
        date: 'December 7, 2025',
        description:
            'An honest guide to whether a Boston Terrier fits your lifestyle, covering personality traits, home compatibility, daily needs, pros and cons, and realistic expectations for new owners.',
        component: () =>
            import('./posts/is-a-boston-terrier-the-right-dog-for-you-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-puppy-exercise-needs-2025',
        title:
            'Boston Terrier Puppy Exercise Needs (2025): Safe Activity, Joint Protection & Calm Development',
        date: 'December 6, 2025',
        description:
            'A veterinarian-aligned guide to Boston Terrier puppy exercise needs, covering age-based limits, safe and unsafe activities, indoor alternatives, early leash training, joint protection, and preventing overstimulation.',
        component: () =>
            import('./posts/boston-terrier-puppy-exercise-needs-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-enrichment-and-mental-games-2025',
        title:
            'Boston Terrier Enrichment & Mental Games (2025): Reduce Hyperactivity, Build Confidence & Calm the Home',
        date: 'December 5, 2025',
        description:
            'A practical guide to Boston Terrier mental enrichment, including puzzle toys, scent games, indoor activities, confidence-building exercises, daily enrichment schedules, and safe difficulty progression.',
        component: () =>
            import('./posts/boston-terrier-enrichment-and-mental-games-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-house-rules-2025',
        title:
            'Boston Terrier House Rules (2025): Jumping, Begging, Boundaries & Creating a Calm Home',
        date: 'December 4, 2025',
        description:
            'A practical guide to Boston Terrier house rules, covering jumping, counter-surfing, door manners, furniture boundaries, table begging, consistency strategies, and reinforcing calm indoor behavior.',
        component: () => import('./posts/boston-terrier-house-rules-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'bringing-home-a-boston-terrier-puppy-2025',
        title:
            'Bringing Home a Boston Terrier Puppy (2025): First Day Setup, Safety, Feeding & the First 48 Hours',
        date: 'December 3, 2025',
        description:
            'A complete first-time owner guide to bringing home a Boston Terrier puppy, covering first-day preparation, safe home setup, introductions, feeding schedules, first-night expectations, and what to do in the first 48 hours.',
        component: () =>
            import('./posts/bringing-home-a-boston-terrier-puppy-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'is-raw-dog-food-worth-the-cost',
        title: 'Is Raw Dog Food Worth the Cost? Budgeting & Long-Term Value Explained',
        date: 'December 17, 2025',
        description:
            'A practical cost breakdown of raw feeding: commercial vs homemade budgets, comparisons to premium kibble and fresh food, hidden costs (storage, prep, supplements), and how to decide if raw is worth it long term.',
        component: () => import('./posts/is-raw-dog-food-worth-the-cost'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-diet-troubleshooting-common-issues',
        title: 'Raw Diet Troubleshooting: Common Issues and How to Fix Them',
        date: 'December 16, 2025',
        description:
            'A practical troubleshooting guide for common raw diet problems: diarrhea, constipation, picky eating, weight changes, skin or coat issues, fat balance, bone-related stool problems, and when to seek professional help.',
        component: () => import('./posts/raw-diet-troubleshooting-common-issues'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'how-to-evaluate-raw-food-labels-and-ingredients',
        title: 'How to Evaluate Raw Food Labels & Ingredients (Avoid Hidden Risks)',
        date: 'December 15, 2025',
        description:
            'A practical guide to understanding raw dog food labels, ingredient lists, nutrient balance statements, misleading marketing terms, red flags, and how to compare raw foods objectively.',
        component: () =>
            import('./posts/how-to-evaluate-raw-food-labels-and-ingredients'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'veterinarian-perspectives-on-raw-feeding',
        title: 'Veterinary Perspectives on Raw Diets: What Your Vet May Not Tell You',
        date: 'December 14, 2025',
        description:
            'A clear, evidence-based look at why many veterinarians oppose raw diets, how nutrition training varies, public health and liability pressures, and how to have productive raw-feeding conversations with your vet.',
        component: () => import('./posts/veterinarian-perspectives-on-raw-feeding'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'top-myths-about-raw-feeding-debunked',
        title: 'Top Myths About Raw Feeding — Debunked by Experts',
        date: 'December 13, 2025',
        description:
            'A myth-busting, evidence-based guide to raw feeding: what experts agree on, what the research actually shows, common misinformation patterns, and a practical checklist for evaluating raw diet claims safely.',
        component: () => import('./posts/top-myths-about-raw-feeding-debunked'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-bones-and-dogs-benefits-risks-safe-chewing-tips',
        title: 'Raw Bones & Dogs: Benefits, Risks & Safe Chewing Tips',
        date: 'December 12, 2025',
        description:
            'An evidence-based guide to raw bones for dogs, covering benefits, risks, raw vs cooked bones, safety guidelines, and alternatives for dogs who should not chew bones.',
        component: () =>
            import('./posts/raw-bones-and-dogs-benefits-risks-safe-chewing-tips'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-food-vs-kibble-vs-fresh-food',
        title: 'Raw Food vs. Kibble vs. Fresh Food: Which Diet Is Best for Your Dog?',
        date: 'December 11, 2025',
        description:
            'A practical comparison of raw, kibble, and fresh cooked diets: digestibility, ingredient quality, cost, convenience, safety, and which option fits different dogs and households best.',
        component: () => import('./posts/raw-food-vs-kibble-vs-fresh-food'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'best-raw-dog-food-brands-reviewed',
        title: 'Best Raw Dog Food Brands Reviewed (Current Year Edition)',
        date: 'December 10, 2025',
        description:
            'A credibility-first guide to evaluating raw dog food brands: sourcing, transparency, AAFCO statements, safety steps like HPP and third-party testing, cost/value trade-offs, and who commercial raw fits best.',
        component: () => import('./posts/best-raw-dog-food-brands-reviewed'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-food-diet-for-puppies-is-it-safe',
        title: 'Raw Food Diet for Puppies: Is It Safe and What You Should Know',
        date: 'December 9, 2025',
        description:
            'A high-stakes, evidence-first guide to raw feeding puppies: growth nutrition basics, calcium and phosphorus risks, commercial vs homemade considerations, and when raw is not recommended.',
        component: () => import('./posts/raw-food-diet-for-puppies-is-it-safe'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-dog-food-recipes-you-can-make-at-home',
        title: 'Raw Dog Food Recipes You Can Make at Home (Balanced & Nutritious)',
        date: 'December 8, 2025',
        description:
            'A practical, safety-first guide to homemade raw feeding: what a balanced recipe must include, simple meal frameworks, common supplements, portion sizing basics, and the risks of DIY feeding without formulation support.',
        component: () => import('./posts/raw-dog-food-recipes-you-can-make-at-home'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'how-to-transition-your-dog-to-a-raw-food-diet',
        title: 'Step-by-Step: How to Transition Your Dog to a Raw Food Diet',
        date: 'December 7, 2025',
        description:
            'A practical, step-by-step transition guide for switching dogs to raw food: readiness signs, gradual vs rapid methods, expected stool changes, common digestive issues, timelines, and when to pause or reconsider.',
        component: () => import('./posts/how-to-transition-your-dog-to-a-raw-food-diet'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'barf-diet-explained',
        title: 'BARF Diet Explained: The Complete Beginner’s Guide',
        date: 'December 6, 2025',
        description:
            'A beginner-friendly BARF guide: what it means, typical components and ratios, how it differs from prey-model raw, common mistakes, pros and limitations, and how to decide if it fits long term.',
        component: () => import('./posts/barf-diet-explained'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-food-diet-pros-and-cons',
        title: 'Raw Food Diet Pros & Cons: What Science and Vets Say',
        date: 'December 5, 2025',
        description:
            'A balanced, evidence-driven review of raw dog food diets: claimed benefits, what research supports or does not support, common veterinary concerns, nutrition risks, and how owners can decide responsibly.',
        component: () => import('./posts/raw-food-diet-pros-and-cons'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'raw-dog-food-safety',
        title: 'Raw Dog Food Safety: How to Handle & Prepare Raw Diets Without Risk',
        date: 'December 4, 2025',
        description:
            'A practical, owner-first safety guide for raw feeding: shopping, storage, thawing, prep, sanitation, household precautions, and what to do if someone gets sick.',
        component: () => import('./posts/raw-dog-food-safety'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'the-ultimate-guide-to-raw-dog-food',
        title: 'The Ultimate Guide to Raw Dog Food: What Every Dog Owner Needs to Know',
        date: 'December 3, 2025',
        description:
            'A practical, evidence-based guide to raw feeding: what it is, common styles (BARF and prey-model), nutrition basics, who it may fit, key risks, and safer decision steps.',
        component: () => import('./posts/the-ultimate-guide-to-raw-dog-food'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'psychology-of-hope-in-canine-longevity',
        title:
            'The Psychology of Hope in Longevity Medicine: Why Owners Want Anti-Ageing Solutions — and How to Stay Grounded in Science',
        date: 'December 7, 2025',
        description:
            'A deep exploration of the emotional drivers behind longevity medicine for dogs, including grief avoidance, attachment psychology, marketing risks, red flags, rational evaluation of claims, and the ethical difference between extending life and extending suffering.',
        component: () =>
            import('./posts/psychology-of-hope-in-canine-longevity') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'do-dog-anti-ageing-drugs-really-work',
        title:
            'Do Anti-Ageing Drugs for Dogs Really Work? A Critical Review of the Evidence, Trials, and What Is Still Unknown',
        date: 'December 25, 2025',
        description:
            'A critical examination of canine anti-ageing drugs, reviewing FDA standards, early trial data, metabolic markers, safety questions, placebo effects, breed-specific gaps, and the difference between scientific optimism and proven outcomes.',
        component: () =>
            import('./posts/do-dog-anti-ageing-drugs-really-work') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'companies-behind-canine-longevity',
        title:
            'The Companies Behind Canine Longevity: Who They’re Developing, and How Their Science Holds Up',
        date: 'December 5, 2025',
        description:
            'A deep dive into the biotech and research groups shaping the future of canine longevity, including Loyal, Embark, the Dog Ageing Project, university laboratories, funding transparency, scientific rigor, and realistic expectations for anti-ageing breakthroughs.',
        component: () =>
            import('./posts/companies-behind-canine-longevity') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'ethics-of-extending-dog-lifespan',
        title:
            'The Ethics of Extending Canine Lifespan: Owner Expectations, Quality of Life, and the Future of Ageing Science',
        date: 'December 4, 2025',
        description:
            'An in-depth exploration of the ethical questions surrounding canine lifespan extension, including owner expectations, quality-of-life considerations, veterinary counseling, accessibility challenges, and humane decision-making in the era of longevity medicine.',
        component: () =>
            import('./posts/ethics-of-extending-dog-lifespan') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'prepare-home-for-ageing-dog',
        title:
            'How to Prepare Your Home for an Ageing Dog: Surfaces, Lighting, Temperature, and Safety Layouts',
        date: 'December 3, 2025',
        description:
            'A complete guide to preparing your home for an ageing dog, including flooring solutions, lighting adjustments, temperature control, safe layouts, fall prevention, and practical modifications for comfort and safety.',
        component: () =>
            import('./posts/prepare-home-for-ageing-dog') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'large-breed-dog-longevity-guide',
        title:
            'Longevity for Large Breeds: Why Big Dogs Age Faster and Practical Ways to Slow the Decline',
        date: 'December 2, 2025',
        description:
            'A science-backed guide explaining why large dog breeds age faster and practical longevity strategies including growth rate management, joint protection, muscle maintenance, nutrition, mobility work, cardiovascular care, and breed-specific risk factors.',
        component: () =>
            import('./posts/large-breed-dog-longevity-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet', 'breed_specific_guides']
    },
    {
        slug: 'longest-living-dog-breeds-longevity-lessons',
        title:
            'Breeds With the Longest Lifespans: What We Can Learn From Them About Ageing',
        date: 'December 1, 2025',
        description:
            'A scientific look at dog breeds with exceptionally long lifespans, examining genetic factors, metabolic traits, lifestyle patterns, growth speed, and lessons all owners can apply to support healthy ageing.',
        component: () =>
            import('./posts/longest-living-dog-breeds-longevity-lessons') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet', 'breed_specific_guides']
    },
    {
        slug: 'dog-stress-sleep-environment-lifespan',
        title:
            'How Stress, Sleep, and Environment Affect Dog Lifespan: Daily Habits That Increase Healthspan',
        date: 'November 30, 2025',
        description:
            'A veterinarian-informed guide to how stress, sleep quality, circadian rhythm, and environmental design influence canine lifespan, including daily habits and enrichment techniques that support longevity.',
        component: () =>
            import('./posts/dog-stress-sleep-environment-lifespan') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-longevity-supplements-evidence',
        title:
            'Dog Longevity Supplements: What Works, What Doesn’t, and What Owners Should Avoid',
        date: 'November 29, 2025',
        description:
            'A scientific guide to dog longevity supplements, including evidence-supported ingredients, promising emerging compounds, ineffective products, safety considerations, and how to work with your veterinarian to build a smart supplementation plan.',
        component: () =>
            import('./posts/dog-longevity-supplements-evidence') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-cognitive-decline-ccd-guide',
        title:
            'Understanding Dog Cognitive Decline: Early Symptoms, Science-Based Interventions, and Quality-of-Life Planning',
        date: 'November 28, 2025',
        description:
            'A veterinarian-supported guide explaining canine cognitive dysfunction (CCD), early symptoms, environmental and nutritional interventions, enrichment plans, sensory decline differentiation, and long-term quality-of-life planning.',
        component: () =>
            import('./posts/dog-cognitive-decline-ccd-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-mobility-and-joint-preservation',
        title:
            'Mobility and Joint Preservation: How to Prevent Arthritis, Muscle Loss, and Balance Decline in Ageing Dogs',
        date: 'November 27, 2025',
        description:
            'A veterinarian-supported guide to preventing arthritis, muscle loss, and balance decline in ageing dogs, including flooring solutions, strength exercises, complementary therapies, nutrition, and daily movement routines.',
        component: () =>
            import('./posts/dog-mobility-and-joint-preservation') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'conditions-that-shorten-dog-lifespan',
        title:
            'Conditions That Shorten a Dog’s Lifespan — And How Owners Can Slow Them Down',
        date: 'November 26, 2025',
        description:
            'A science-backed examination of the most common conditions that shorten canine lifespan, including obesity, arthritis, dental disease, kidney disease, heart disease, and strategies owners can use to slow disease progression and improve longevity.',
        component: () =>
            import('./posts/conditions-that-shorten-dog-lifespan') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'future-of-dog-longevity-medicine',
        title:
            'The Future of Veterinary Longevity Medicine: Senolytics, Gene Therapy, and What’s Coming After LOY-002',
        date: 'November 25, 2025',
        description:
            'A forward-looking examination of senolytics, gene therapy, microbiome modulation, metabolic switching, regulatory milestones after LOY-002, realistic timelines, and ethical considerations shaping the future of canine longevity medicine.',
        component: () =>
            import('./posts/future-of-dog-longevity-medicine') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'senior-dog-screening-guide-2026',
        title:
            'Senior Dog Screening Guide (2026): Bloodwork, Mobility Tests, Cognitive Assessments, Early Detection',
        date: 'November 24, 2025',
        description:
            'A veterinarian-backed 2026 guide to senior dog screenings, including bloodwork, mobility exams, cognitive assessments, early-detection red flags, and what owners should prioritize for healthy ageing.',
        component: () =>
            import('./posts/senior-dog-screening-guide-2026') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-weight-and-lifespan-data-analysis',
        title:
            'How Weight Impacts Lifespan: Why Lean Dogs Live Up to 2.5 Years Longer (Data Breakdown)',
        date: 'November 23, 2025',
        description:
            'A detailed analysis of how body weight affects canine lifespan, including the Purina study, inflammation pathways, metabolic disease risk, body condition scoring, and safe weight reduction strategies.',
        component: () =>
            import('./posts/dog-weight-and-lifespan-data-analysis') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-exercise-for-longevity-daily-routines',
        title:
            'Exercise and Longevity: The Exact Daily Routines That Help Dogs Live Longer, According to Research',
        date: 'November 22, 2025',
        description:
            'A science-backed guide to the daily exercise routines that support dog longevity, including cardio, strength, mobility, cognitive work, and breed-specific needs for healthy ageing.',
        component: () =>
            import('./posts/dog-exercise-for-longevity-daily-routines') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-longevity-diet-metabolic-health',
        title:
            'Dog Longevity Diets: What Science Says About Nutrition, Metabolic Health, and Anti-Ageing Foods',
        date: 'November 21, 2025',
        description:
            'A research-based guide to how caloric density, macronutrients, omega-3s, antioxidants, feeding patterns, and emerging supplements influence dog longevity, metabolic health, and ageing.',
        component: () =>
            import('./posts/dog-longevity-diet-metabolic-health') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'dog-ageing-science-cellular-pathways',
        title:
            'How Dog Ageing Actually Works: Cellular Pathways, Inflammation, and Metabolic Decline Explained',
        date: 'November 20, 2025',
        description:
            'A scientific, veterinarian-supported breakdown of how dogs age: inflammation, metabolic slowdown, mitochondrial decline, immune weakening, and how new longevity medicine targets ageing pathways at the cellular level.',
        component: () =>
            import('./posts/dog-ageing-science-cellular-pathways') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet']
    },
    {
        slug: 'adult-boston-terrier-care-2025',
        title: 'Adult Boston Terrier Care (2025): Daily Routine, Weight Maintenance, Joint Health & Preventive Vet Care',
        date: 'December 2, 2025',
        description:
            'A complete guide to adult Boston Terrier care, including daily schedules, feeding and enrichment, ideal weight management, adult behavioral expectations, dental and preventive vet care, joint support, and when to adjust exercise intensity.',
        component: () => import('./posts/adult-boston-terrier-care-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-adolescence-6-18-months-2025',
        title: 'Boston Terrier Adolescence (6–18 Months) (2025): Behavior Changes, Training Regression, Energy Levels & Structure',
        date: 'December 2, 2025',
        description:
            'A complete guide to Boston Terrier adolescence (6–18 months), explaining why this stage is challenging, hormonal behavior shifts, normal training regression, increased energy needs, ideal exercise routines, and how to prevent bad habits from forming.',
        component: () => import('./posts/boston-terrier-adolescence-6-18-months-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'best-grooming-tools-for-boston-terriers-2025',
        title: 'Best Grooming Tools for Boston Terriers (2025): Brushes, Wipes, Nail Trimmers, Sensitive Skin Tools & At-Home Routine',
        date: 'December 2, 2025',
        description:
            'A complete 2025 guide to the best grooming tools for Boston Terriers, including brushes, deshedding tools, wipes, nail trimmers, sensitive-skin tools, what not to use, recommended grooming kits, frequency chart, and a simple at-home routine.',
        component: () => import('./posts/best-grooming-tools-for-boston-terriers-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-paw-and-nail-care-guide-2025',
        title: 'Boston Terrier Paw & Nail Care Guide (2025): Trimming Schedule, Paw Pad Health, Seasonal Risks & Allergy Warning Signs',
        date: 'December 1, 2025',
        description:
            'A complete guide to Boston Terrier paw and nail care, covering nail growth patterns, age-specific trimming frequency, step-by-step nail trimming, paw pad health, seasonal hazards, and when paw discomfort signals allergies or injury.',
        component: () => import('./posts/boston-terrier-paw-and-nail-care-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-shedding-guide-2025',
        title: 'Boston Terrier Shedding Guide (2025): Year-Round Shedding, Grooming Tools, Diet Links & When to See a Vet',
        date: 'December 1, 2025',
        description:
            'A complete guide to Boston Terrier shedding, including year-round expectations, seasonal changes, best brushes, techniques to reduce shedding, diet and allergy connections, and signs of abnormal shedding that require veterinary care.',
        component: () => import('./posts/boston-terrier-shedding-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'how-often-should-you-bathe-a-boston-terrier-2025',
        title: 'How Often Should You Bathe a Boston Terrier? (2025): Bathing Frequency, Skin Care & Safe Bath Routine',
        date: 'December 1, 2025',
        description:
            'A complete guide to bathing a Boston Terrier, including ideal frequency by age, signs they need a bath, best shampoos for sensitive skin, step-by-step safe bathing routine, overbathing risks, and when medicated baths are appropriate.',
        component: () => import('./posts/how-often-should-you-bathe-a-boston-terrier-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-lifespan-2025',
        title: 'Boston Terrier Lifespan (2025): Longevity, Leading Health Risks & How to Extend Your Dog’s Life',
        date: 'November 30, 2025',
        description:
            'A complete 2025 guide to Boston Terrier lifespan, covering average longevity, genetics vs lifestyle influences, leading causes of death, how to extend lifespan, essential senior health screens, and behavioral changes in aging Bostons.',
        component: () => import('./posts/boston-terrier-lifespan-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-ear-care-2025',
        title: 'Boston Terrier Ear Care (2025): Cleaning Routine, Infection Signs, Allergies & Prevention',
        date: 'November 29, 2025',
        description:
            'A complete guide to Boston Terrier ear care, including anatomy, signs of infection, step-by-step cleaning routine, how allergies cause ear inflammation, when vet care is needed, and long-term prevention.',
        component: () => import('./posts/boston-terrier-ear-care-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'are-boston-terriers-prone-to-seizures-2025',
        title: 'Are Boston Terriers Prone to Seizures? (2025): Causes, Symptoms, Emergency Care & Long-Term Management',
        date: 'November 28, 2025',
        description:
            'A complete guide to seizure risk in Boston Terriers, covering idiopathic epilepsy, genetics, triggers, seizure symptoms, emergency steps, diagnostics, and long-term treatment options.',
        component: () => import('./posts/are-boston-terriers-prone-to-seizures-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'senior-boston-terrier-care-2025',
        title: 'Senior Boston Terrier Care (2025): Mobility, Cognition, Breathing, Diet & End-of-Life Comfort',
        date: 'November 27, 2025',
        description:
            'A complete 2025 guide to senior Boston Terrier care, including lifespan expectations, arthritis, cognitive decline, worsening eye and breathing issues, senior diet adjustments, safe exercise plans, and compassionate end-of-life planning.',
        component: () => import('./posts/senior-boston-terrier-care-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-weight-chart-and-puppy-growth-2025',
        title: 'Boston Terrier Weight Chart & Puppy Growth (2025): Normal Ranges, Warning Signs & Nutrition Tips',
        date: 'November 26, 2025',
        description:
            'A complete 2025 guide to Boston Terrier puppy growth, including weight charts, healthy ranges, under/overweight signs, diet and genetic factors, growth stalls, and transitioning from puppy to adult food.',
        component: () => import('./posts/boston-terrier-weight-chart-and-puppy-growth-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'do-boston-terriers-get-cold-easily-2025',
        title: 'Do Boston Terriers Get Cold Easily? (2025): Cold Tolerance, Winter Safety, Gear & Warning Signs',
        date: 'November 25, 2025',
        description:
            'A complete 2025 guide explaining Boston Terrier cold sensitivity, early signs of discomfort, winter exercise limits, outdoor gear, home heating adjustments, and when cold sensitivity indicates a health issue.',
        component: () => import('./posts/do-boston-terriers-get-cold-easily-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-heat-sensitivity-2025',
        title: 'Boston Terrier Heat Sensitivity (2025): Overheating Risks, Early Warning Signs, Safe Temperatures & Cooling Strategies',
        date: 'November 24, 2025',
        description:
            'A complete 2025 guide to Boston Terrier heat sensitivity, explaining why they overheat quickly, early heat stress signs, temperature thresholds, cooling strategies, dangerous activities, and emergency heatstroke steps.',
        component: () => import('./posts/boston-terrier-heat-sensitivity-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-allergies-2025',
        title: 'Boston Terrier Allergies (2025): Food, Seasonal, Environmental Triggers, Itching Patterns & Treatment Options',
        date: 'November 23, 2025',
        description:
            'A complete 2025 guide to Boston Terrier allergies, including food, environmental, and seasonal allergies, unique itching patterns, common triggers, home care strategies, vet treatment options, and how allergies lead to secondary infections.',
        component: () => import('./posts/boston-terrier-allergies-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-breathing-issues-2025',
        title: 'Boston Terrier Breathing Issues (2025): BOAS Warning Signs, Noisy Breathing, Heat Risks & Vet Solutions',
        date: 'November 22, 2025',
        description:
            'A complete 2025 guide to Boston Terrier breathing issues, including BOAS signs, noisy vs dangerous breathing, heat intolerance, exercise limitations, nighttime choking episodes, and vet treatment options.',
        component: () => import('./posts/boston-terrier-breathing-issues-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-eye-problems-2025',
        title: 'Boston Terrier Eye Problems (2025): Cherry Eye, Ulcers, Cataracts, Red Flags & Long-Term Care',
        date: 'November 21, 2025',
        description:
            'A complete 2025 guide to Boston Terrier eye problems, including cherry eye, corneal ulcers, cataracts, red-flag symptoms, at-home care, emergency signs, prevention, and long-term management.',
        component: () => import('./posts/boston-terrier-eye-problems-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'how-to-stop-a-boston-terrier-from-barking-2025',
        title: 'How to Stop a Boston Terrier from Barking (2025): Root Causes, Quiet Training, Environmental Fixes & Red Flags',
        date: 'November 20, 2025',
        description:
            'A complete 2025 guide to stopping barking in Boston Terriers, covering alert, boredom, demand, and anxiety barking, identifying root causes, environmental adjustments, behavior modification, what not to do, and deeper issues behind excessive barking.',
        component: () => import('./posts/how-to-stop-a-boston-terrier-from-barking-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-socialization-guide-2025',
        title: 'Boston Terrier Socialization Guide (2025): Confidence Building, Safe Exposure, Play Sessions & Adult Socialization',
        date: 'November 19, 2025',
        description:
            'A complete 2025 socialization guide for Boston Terriers covering timing windows, exposure checklists, confidence building, safe vs overwhelming experiences, structured play, common mistakes, and adult socialization strategies.',
        component: () => import('./posts/boston-terrier-socialization-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'how-to-train-a-boston-terrier-puppy-2025',
        title: 'How to Train a Boston Terrier Puppy (2025): First 30 Days, Basic Commands, Socialization & Reward-Based Learning',
        date: 'November 18, 2025',
        description:
            'A complete 2025 guide explaining how to train a Boston Terrier puppy, covering the first 30 days of bonding and routine formation, name recognition, sit/stay/come basics, leash introduction, socialization roadmap, reward-based shaping, and age-appropriate session durations.',
        component: () => import('./posts/how-to-train-a-boston-terrier-puppy-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-potty-training-2025',
        title: 'Boston Terrier Potty Training (2025): Schedules, Regression Fixes, Reinforcement & Indoor/Outdoor Setup Tips',
        date: 'November 17, 2025',
        description:
            'A complete 2025 guide to Boston Terrier potty training, covering why the breed is slow to train, ideal schedules, crate-interval timing, reinforcement windows, accidents, regression periods, and indoor vs outdoor potty setups.',
        component: () => import('./posts/boston-terrier-potty-training-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-crate-training-2025',
        title: 'Boston Terrier Crate Training (2025): Routines, Troubleshooting, Age Schedules & Positive Conditioning',
        date: 'November 16, 2025',
        description:
            'A complete 2025 crate training guide for Boston Terriers, covering the benefits for anxiety and safety, positive conditioning steps, nighttime routines, puppy and adult schedules, troubleshooting barking or refusal, and preventing crate overuse.',
        component: () => import('./posts/boston-terrier-crate-training-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-reactivity-around-dogs-2025',
        title: 'Boston Terrier Reactivity Around Dogs (2025): Causes, Triggers, Safe Training Protocols & When to Seek Help',
        date: 'November 15, 2025',
        description:
            'A 2025 guide explaining why some Boston Terriers are reactive around other dogs, how to distinguish reactivity from aggression, what triggers to avoid, step-by-step desensitization, safe-distance walking, setback prevention, and when to involve a professional.',
        component: () => import('./posts/boston-terrier-reactivity-around-dogs-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-puppy-biting-nipping-2025',
        title: 'Boston Terrier Puppy Biting & Nipping (2025): Teething Timeline, Bite Inhibition & Training Strategies',
        date: 'November 14, 2025',
        description:
            'A 2025 guide to Boston Terrier puppy biting covering normal vs problematic nipping, teething stages, redirection methods, bite inhibition, the role of socialization, and what not to do.',
        component: () => import('./posts/boston-terrier-puppy-biting-nipping-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-aggression-2025',
        title: 'Boston Terrier Aggression (2025): Causes, Triggers, Early Intervention & Behavior Modification Strategies',
        date: 'November 13, 2025',
        description:
            'A comprehensive 2025 guide explaining the types of aggression seen in Boston Terriers, common triggers, genetics vs environment, desensitization, counterconditioning, breed compatibility, and when aggression signals a deeper behavioral or medical issue.',
        component: () => import('./posts/boston-terrier-aggression-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-separation-anxiety-2025',
        title: 'Boston Terrier Separation Anxiety (2025): Causes, Warning Signs, Training Protocols & When to Seek Help',
        date: 'November 12, 2025',
        description:
            'A 2025 separation anxiety guide for Boston Terriers covering causes, early warning signs, stages of anxiety, desensitization training, crate conditioning, enrichment, and when to consult a vet or behaviorist.',
        component: () => import('./posts/boston-terrier-separation-anxiety-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'why-is-my-boston-terrier-so-hyper-2025',
        title: 'Why Is My Boston Terrier So Hyper? Understanding Normal Energy, Overstimulation & When to Worry (2025 Guide)',
        date: 'November 11, 2025',
        description:
            'A complete 2025 guide explaining why Boston Terriers seem hyper, how to distinguish normal energy from problematic behavior, overstimulation signs, calming methods, exercise needs, and medical causes.',
        component: () => import('./posts/why-is-my-boston-terrier-so-hyper-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-diet-guide-2025',
        title: 'Boston Terrier Diet Guide (2025): Nutrition, Feeding Schedules, Allergies & Sensitive Stomach Tips',
        date: 'November 10, 2025',
        description:
            'A complete 2025 Boston Terrier diet guide covering macronutrients, sensitive stomach issues, food types, allergies, treat limits, portion sizes, and daily feeding schedules.',
        component: () => import('./posts/boston-terrier-diet-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-grooming-guide-2025',
        title: 'Boston Terrier Grooming Guide (2025): Brushing, Bathing, Facial Folds, Nails & Shedding Patterns',
        date: 'November 9, 2025',
        description:
            'A complete 2025 grooming guide for Boston Terriers covering brushing routines, bathing schedule, facial folds, ears, nails, shedding, and skin red flags.',
        component: () => import('./posts/boston-terrier-grooming-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-puppy-guide-2025',
        title: 'Boston Terrier Puppy Guide (2025): Growth Milestones, Training, Feeding, Socialization & Vet Schedule',
        date: 'November 8, 2025',
        description:
            'A complete 2025 Boston Terrier puppy guide covering growth milestones, crate training, feeding charts, socialization windows, vet care, and safe exercise limits.',
        component: () => import('./posts/boston-terrier-puppy-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'boston-terrier-behavior-problems-2025',
        title: 'Boston Terrier Behavior Problems: Hyperactivity, Barking, Reactivity & Training Challenges (2025 Guide)',
        date: 'November 7, 2025',
        description:
            'A 2025 behavior guide for Boston Terriers covering hyperactivity, barking, stubbornness, separation anxiety, reactivity, attention-seeking behaviors, and red flags that require intervention.',
        component: () => import('./posts/boston-terrier-behavior-problems-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier'
    },
    {
        slug: 'how-much-do-boston-terriers-cost-2025',
        title: 'How Much Do Boston Terriers Cost in 2025? Upfront, Yearly & Lifetime Expenses',
        date: 'November 6, 2025',
        description:
            'A full 2025 breakdown of Boston Terrier costs, including breeder vs rescue prices, yearly medical expenses, food, grooming, training, insurance, senior-year costs, and commonly overlooked expenses.',
        component: () => import('./posts/how-much-do-boston-terriers-cost-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'boston-terrier-training-101',
        title: 'Boston Terrier Training 101: Techniques, Rewards, Structure & Age Milestones',
        date: 'November 5, 2025',
        description:
            'A beginner-friendly guide to training Boston Terriers, covering temperament, rewards, core commands, stubbornness, reinforcement techniques, common mistakes, and age-by-age expectations.',
        component: () => import('./posts/boston-terrier-training-101'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'boston-terrier-exercise-requirements',
        title: 'Boston Terrier Exercise Requirements: Daily Needs, Mental Work & Weather Safety',
        date: 'November 4, 2025',
        description:
            'A complete guide to Boston Terrier exercise needs by age, including walking routines, playtime, mental enrichment, signs of under-exercising, activities to avoid, and safe indoor options for extreme weather.',
        component: () => import('./posts/boston-terrier-exercise-requirements'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'boston-terrier-health-problems',
        title: 'Boston Terrier Health Problems: Eyes, Breathing, Allergies & Wellness',
        date: 'November 3, 2025',
        description:
            'Learn about the most common Boston Terrier health problems, including eye disease, brachycephalic breathing issues, allergies, joint disorders, temperature sensitivity, and preventive care schedules.',
        component: () => import('./posts/boston-terrier-health-problems'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'boston-terrier-temperament',
        title: 'Boston Terrier Temperament: Personality, Sensitivity, Social Behavior & Training',
        date: 'November 2, 2025',
        description:
            'Learn what makes the Boston Terrier unique in temperament, including personality traits, bonding tendencies, social behavior, emotional sensitivity, early socialization needs, and red flags to watch for.',
        component: () => import('./posts/boston-terrier-temperament'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'boston-terrier-breed-guide-2025',
        title: 'Boston Terrier Breed Guide 2025: Temperament, Care, Health & Training',
        date: 'Noevmber 1, 2025',
        description:
            'A complete 2025 guide to the Boston Terrier breed. Learn about temperament, size, activity needs, health risks, ideal homes, training expectations, and long-term care.',
        component: () => import('./posts/boston-terrier-breed-guide-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'dog-boarding-vaccination-requirements-2025',
        title: 'Vaccination & Health Requirements for Dog Daycare & Boarding (2025): Rabies, Distemper, Bordetella, Records & State Rules',
        date: 'November 24, 2025',
        description:
            'A complete 2025 guide to required vaccinations for dog daycare and boarding, including Rabies, DHPP, Bordetella, and Influenza, plus health records, state rules, inspection expectations, and how owners can verify compliance.',
        component: () => import('./posts/dog-boarding-vaccination-requirements-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'dog-boarding-inspection-standards-2025',
        title: 'Dog Boarding Inspection Standards: What States Look For & How Owners Can Spot Red Flags (2025)',
        date: 'November 24, 2025',
        description:
            'A practical 2025 guide to dog daycare and boarding inspection standards: sanitation, safety, grouping, housing, emergency procedures, and how owners can recognize warning signs during tours or evaluations.',
        component: () => import('./posts/dog-boarding-inspection-standards-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'dog-daycare-license-requirements-2025',
        title: 'Dog Daycare License Requirements: How Facilities Get Approved & How You Can Verify Them (2025)',
        date: 'November 24, 2025',
        description:
            'A clear, step-by-step 2025 guide to how dog daycare facilities get licensed in the U.S., what inspectors evaluate, what documents are required, and how owners can quickly verify any facility online or in person.',
        component: () => import('./posts/dog-daycare-license-requirements-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'colorado-dog-boarding-daycare-laws-2025',
        title: 'Dog Boarding Laws in Colorado (2025): Permits, Inspections, Facility Requirements & Owner Rights',
        date: 'November 24, 2025',
        description:
            'A clear, owner-first breakdown of Colorado boarding and daycare laws under PACFA: licensing rules, inspections, sanitation standards, emergency protocols, and how to verify any facility in the state.',
        component: () => import('./posts/colorado-dog-boarding-daycare-laws-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'dog-daycare-boarding-requirements-2025',
        title: 'Dog Daycare & Boarding Requirements: Complete 2025 U.S. Guide (Vaccines, Ratios, Records, Facility Rules)',
        date: 'November 24, 2025',
        description:
            'A complete, plain-English 2025 guide to U.S. daycare and boarding facility requirements: vaccines, staffing ratios, sanitation standards, records, inspections, and how owners can verify licenses and compliance.',
        component: () => import('./posts/dog-daycare-boarding-requirements-2025'),
        categories: ['owner', 'boarding', 'daycare'],
    },
    {
        slug: 'border-collie-training-guide',
        title:
            'Border Collie Training Guide: Obedience, Recall, Mental Stimulation, and Herding Instincts',
        date: 'November 23, 2025',
        description:
            'A complete Border Collie training guide covering obedience, recall training, herding instinct management, mental stimulation, crate training, socialization, and behavior prevention.',
        component: () => import('./posts/border-collie-training-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'border-collie-behavior-problems',
        title:
            'Border Collie Behavior Problems: Nipping, Herding, Reactivity, and How to Manage Them',
        date: 'November 23, 2025',
        description:
            'A complete guide to Border Collie behavior problems—nipping, herding, reactivity, barking, chasing, and more—plus evidence-based solutions to manage and prevent them.',
        component: () => import('./posts/border-collie-behavior-problems'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'border-collie-grooming-guide',
        title:
            'Border Collie Grooming Guide: Coat Types, Shedding, Bathing, and Brushing Schedule',
        date: 'November 23, 2025',
        description:
            'A complete Border Collie grooming guide covering coat types, brushing schedules, shedding patterns, bathing routine, ear care, nail trimming, and long-term skin health.',
        component: () => import('./posts/border-collie-grooming-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'why-are-border-collies-so-smart',
        title: 'Why Are Border Collies So Smart? Understanding Their Intelligence and Mental Needs',
        date: 'November 23, 2025',
        description:
            'Learn why Border Collies are considered the smartest dog breed, including cognitive ability, working intelligence, mental needs, and advanced problem-solving skills.',
        component: () => import('./posts/why-are-border-collies-so-smart'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'border-collie-exercise-requirements',
        title: 'How Much Exercise Do Border Collies Need? Daily Activity, Mental Work, and Energy Levels',
        date: 'November 23, 2025',
        description:
            'Learn how much exercise Border Collies need, including physical activity, mental stimulation, enrichment, and working-style exercises ideal for high-drive dogs.',
        component: () => import('./posts/border-collie-exercise-requirements'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'are-border-collies-good-family-dogs',
        title: 'Are Border Collies Good Family Dogs? Temperament, Behavior, and Suitability for Kids',
        date: 'November 23, 2025',
        description:
            'Are Border Collies good family dogs? Explore their temperament, intelligence, training needs, behavior around kids, and suitability for active households.',
        component: () => import('./posts/are-border-collies-good-family-dogs'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'beagle-weight-guide',
        title: 'Beagle Weight Guide: Healthy Ranges, Feeding Charts, and Preventing Obesity',
        date: 'December 3, 2025',
        description:
            'A complete Beagle weight guide covering ideal ranges, feeding charts, portion recommendations, exercise needs, obesity prevention, and how weight impacts health.',
        component: () => import('./posts/beagle-weight-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'are-beagles-good-family-dogs',
        title: 'Are Beagles Good Family Dogs? Temperament, Training, and Suitability for Kids',
        date: 'December 3, 2025',
        description:
            'Are Beagles good family dogs? Explore their temperament, behavior with children, training needs, energy levels, shedding, and long-term suitability for family life.',
        component: () => import('./posts/are-beagles-good-family-dogs'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'beagle-grooming-guide',
        title: 'Beagle Grooming Guide: Coat Care, Ear Cleaning, Bathing, and Nail Trimming',
        date: 'December 3, 2025',
        description:
            'A complete Beagle grooming guide covering coat maintenance, ear care, bathing, nail trimming, skin health, tools, and preventive care for long-term wellbeing.',
        component: () => import('./posts/beagle-grooming-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'beagle-health-problems',
        title: 'Beagle Health Problems: The Most Common Conditions Owners Should Watch For',
        date: 'December 3, 2025',
        description:
            'Learn the most common Beagle health problems, including obesity, allergies, ear infections, thyroid disorders, and genetic conditions. Evidence-based guidance for early detection and prevention.',
        component: () => import('./posts/beagle-health-problems'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'beagle-exercise-requirements',
        title: 'Beagle Exercise Requirements: How Much Activity Do They Really Need?',
        date: 'December 3, 2025',
        description:
            'Learn how much exercise Beagles really need, why they are such energetic dogs, and how proper activity prevents behavior issues, obesity, and excess shedding.',
        component: () => import('./posts/beagle-exercise-requirements'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'beagle-howling',
        title: 'Why Do Beagles Howl? Understanding Their Vocal Behavior and What It Means',
        date: 'December 3, 2025',
        description:
            'Why do Beagles howl? Learn why Beagles are such vocal dogs, what their howls mean, and how to manage excessive howling using science-backed behavior guidance.',
        component: () => import('./posts/beagle-howling'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'homemade-dog-food-risks-2025',
        title: 'Homemade Dog Food: What the Latest Study Means for Your Dog’s Nutrition',
        date: 'December 2, 2025',
        description:
            'New large-scale research shows that the vast majority of homemade dog diets fail to meet essential nutrient requirements — a must-read for any dog owner considering DIY meals.',
        component: () => import('./posts/homemade-dog-food-risks-2025'),
        categories: ['owner', 'food', 'vet']
    },
    {
        slug: 'should-your-dog-use-daycare-2025',
        title: 'Should Your Dog Use Daycare? How to Tell If Daycare Could Benefit Your Pup',
        date: 'December 2, 2025',
        description:
            'A practical guide for pet owners to evaluate whether their dog might benefit from daycare — looking at behaviour, energy level, social skills, and lifestyle needs.',
        component: () => import('./posts/should-your-dog-use-daycare-2025'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'holiday-specials-dog-boarding-daycare-2025',
        title: 'Holiday-Friendly Specials & Events for Dog Boarding and Daycare Facilities',
        date: 'December 2, 2025',
        description:
            'Creative holiday-season ideas — themed events, crafts, promos — that boarding/daycare facilities can implement to delight owners, engage dogs, and generate extra revenue during festive periods.',
        component: () => import('./posts/holiday-specials-dog-boarding-daycare-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'texas-dog-boarding-daycare-laws-2025',
        title: 'Dog Boarding & Daycare Laws in Texas (2025 Guide for Owners & Facilities)',
        date: 'December 2, 2025',
        description:
            'Plain-language guide to the 2025 Texas kennel law, informed-consent requirements, dangerous-dog rules, and local permits that affect dog boarding and daycare facilities across the state.',
        component: () => import('./posts/texas-dog-boarding-daycare-laws-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'dog-daycare-safety-standards-staff-training-2025',
        title: 'Dog Daycare Safety Standards & Staff Training Requirements',
        date: 'December 2, 2025',
        description:
            'A clear, owner-first breakdown of the safety standards, sanitation protocols, supervision practices, and staff training requirements that make dog daycares and boarding facilities truly safe.',
        component: () => import('./posts/dog-daycare-safety-standards-staff-training-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'cbd-dogs-aggression-study-2025',
        title:
            'Study Finds CBD Supplements May Reduce Aggression in Aging Dogs: What the Research Really Says',
        date: 'November 22, 2025',
        description:
            'A clear, research-backed explanation of a new large-scale study suggesting CBD supplementation may help reduce aggression intensity in older dogs, including limitations and what owners should know.',
        component: () =>
            import('./posts/cbd-dogs-aggression-study-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding']
    },
    {
        slug: 'kennel-cough-new-vaccine-guide',
        title:
            'New Injectable Vaccine for Kennel Cough: What Dog Owners & Daycare/Boarding Facilities Need to Know',
        date: 'November 22, 2025',
        description:
            'An overview of the new injectable Bordetella (kennel cough) vaccine — how it works, who should get it, what it means for daycare/boarding facilities, and how to implement it responsibly.',
        component: () =>
            import('./posts/kennel-cough-new-vaccine-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding']
    },
    {
        slug: 'labrador-shampoo-conditioner-guide',
        title:
            'Best Shampoos & Conditioners for Labrador Retrievers: Coat Care, Skin Concerns & Grooming Tips',
        date: 'November 22, 2025',
        description:
            'Learn how to choose the right shampoos and conditioners for a Labrador Retriever — covering coat type, common skin issues, important ingredients to use and avoid, and a full grooming routine for healthy skin and coat.',
        component: () =>
            import('./posts/labrador-shampoo-conditioner-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever'
    },
    {
        slug: 'hypoallergenic-dog-breeds-guide',
        title:
            'Which Dog Breeds Are Truly Hypoallergenic? A Helpful Guide for Families Seeking Low-Shedding Dogs',
        date: 'November 22, 2025',
        description:
            'A practical, evidence-based guide to hypoallergenic dog breeds, how allergies actually work, and which low-shedding dogs may be better for families with sensitivities.',
        component: () =>
            import('./posts/hypoallergenic-dog-breeds-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner']
    },
    {
        slug: 'great-dane-top-health-issues',
        title:
            'The 3 Most Common Health Problems in Great Danes: A Practical Guide for Owners',
        date: 'November 22, 2025',
        description:
            'A clear, practical overview of the three most common health problems in Great Danes—bloat (GDV), cardiomyopathy, and orthopedic disease—plus symptoms, risk factors and prevention tips for owners.',
        component: () =>
            import('./posts/great-dane-top-health-issues') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Great Dane'
    },
    {
        slug: 'temperament-testing-dogs-boarding-daycare',
        title:
            'How to Temperament Test Dogs for Boarding & Daycare: A Step-By-Step Professional Evaluation Guide',
        date: 'December 1, 2025',
        description:
            'A complete step-by-step temperament testing procedure for boarding and daycare facilities, including body language evaluation, play style assessment, social tolerance, energy matching, and safety considerations.',
        component: () =>
            import('./posts/temperament-testing-dogs-boarding-daycare') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding']
    },
    {
        slug: 'yorkshire-terrier-living-with',
        title: 'Living with a Yorkshire Terrier: Ideal Family Fit, Apartment Life and Lifestyle Considerations',
        date: 'November 21, 2025',
        description:
            'A comprehensive guide to living with Yorkshire Terriers, covering family compatibility, apartment suitability, exercise needs, routines, travel habits, and lifestyle considerations.',
        component: () => import('./posts/yorkshire-terrier-living-with'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'yorkshire-terrier-boarding-daycare',
        title: 'Yorkshire Terrier in a Dog Boarding & Daycare Setting: How to Provide Safe, Enriching Care',
        date: 'November 21, 2025',
        description:
            'A complete guide to Yorkshire Terrier care in daycare and boarding settings, including group play, feeding schedules, coat care, gentle handling, breed-specific health monitoring, and stress management.',
        component: () => import('./posts/yorkshire-terrier-boarding-daycare'),
        categories: ['owner', 'boarding', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'yorkshire-terrier-health-lifespan',
        title: 'Health & Lifespan of the Yorkshire Terrier: Common Conditions and How to Prevent Them',
        date: 'November 21, 2025',
        description:
            'A comprehensive guide to Yorkshire Terrier health, including lifespan expectations, common medical conditions, preventive care, and breed-specific early warning signs.',
        component: () => import('./posts/yorkshire-terrier-health-lifespan'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'yorkshire-terrier-training-guide',
        title: 'Training a Yorkshire Terrier: Managing Terrier Tenacity and Toy Breed Challenges',
        date: 'November 21, 2025',
        description:
            'A complete guide to training Yorkshire Terriers, covering barking control, crate training, socialization, mental enrichment, and terrier temperament management.',
        component: () => import('./posts/yorkshire-terrier-training-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'yorkshire-terrier-nutrition-feeding',
        title: 'Yorkshire Terrier Nutrition & Feeding: What to Feed a Toy Breed with Big Personality',
        date: 'November 21, 2025',
        description:
            'Discover the specific nutrition needs of Yorkshire Terrier puppies and adults. Learn feeding schedules, calorie guidelines, high-quality toy-breed food selection, and managing dental and metabolic risks in this feisty small breed.',
        component: () => import('./posts/yorkshire-terrier-nutrition-feeding'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'dog-daycare-packages-vs-monthly-memberships-a-balanced-look-at-two-common-pricing-models',
        title: 'Dog Daycare Packages vs. Monthly Memberships: A Balanced Look at Two Common Pricing Models',
        date: 'July 10, 2025',
        description:
            'Compare the pros and cons of daycare packages and monthly memberships, and explore the impact on cash flow, loyalty, and admin complexity.',
        component: () =>
            import('./posts/dog-daycare-packages-vs-monthly-memberships-a-balanced-look-at-two-common-pricing-models') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breeder', 'breed specific guides'],
        breed: 'Dachshund',
    },
    {
        slug: 'yorkshire-terrier-grooming-guide',
        title: 'Yorkshire Terrier Grooming and Coat Maintenance: Tips for a Silky, Healthy Coat',
        date: 'November 21, 2025',
        description:
            'Learn how to keep a Yorkshire Terrier’s coat silky and healthy with daily brushing routines, bathing tips, grooming schedules, and tangle prevention strategies.',
        component: () => import('./posts/yorkshire-terrier-grooming-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'yorkshire-terrier-puppy-care',
        title: 'Yorkshire Terrier Puppy Care: A Complete First Year Guide',
        date: 'November 21, 2025',
        description:
            'Learn how to raise a healthy, confident Yorkshire Terrier puppy. This first-year guide covers feeding, grooming, training, socialization, vaccinations, and toy breed safety tips.',
        component: () => import('./posts/yorkshire-terrier-puppy-care'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Yorkshire Terrier',
    },
    {
        slug: 'buying-a-dog-daycare-checklist',
        title:
            'Buying a Dog Daycare Checklist: What to Evaluate Before Purchasing a Daycare or Boarding Facility in 2026',
        date: 'November 19, 2025',
        description:
            'A complete checklist for buying a dog daycare or boarding facility: financial due diligence, safety evaluation, staff review, zoning, licensing, and operational risks.',
        component: () =>
            import('./posts/buying-a-dog-daycare-checklist') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding']
    },
    {
        slug: 'do-dogs-need-canine-influenza-vaccine',
        title:
            'Do Dogs Need the Canine Influenza Vaccine?',
        date: 'November 19, 2025',
        description:
            'Do dogs need the canine influenza vaccine? An evidence-based look at risk, safety, boarding rules, and when veterinarians recommend the dog flu shot.',
        component: () =>
            import('./posts/do-dogs-need-canine-influenza-vaccine') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'dog-daycare-booking-system',
        title:
            'Dog Daycare Booking System: How Modern Scheduling Software Streamlines Operations in 2026',
        date: 'November 19, 2025',
        description:
            'A complete guide to dog daycare booking systems: features, automation, safety workflows, owner experience, and how modern software helps facilities scale efficiently.',
        component: () =>
            import('./posts/dog-daycare-booking-system') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding']
    },
    {
        slug: 'dog-boarding-vs-daycare',
        title:
            'Dog Boarding vs Daycare: How to Choose the Right Option for Your Dog',
        date: 'November 19, 2025',
        description:
            'Dog boarding vs daycare explained: what each service includes, how to evaluate facility fit, costs, risks, benefits, and how to pick what’s right for your dog with confidence.',
        component: () => import('./posts/dog-boarding-vs-daycare') as Promise<{
            default: React.ComponentType<object>;
        }>,
        categories: ['owner'],
    },
    {
        slug: 'anti-ageing-for-dogs',
        title:
            'Anti Ageing for Dogs in 2026: The Science, The New Dog Longevity Drug, FDA Milestones, and What Owners Should Know',
        date: 'November 19, 2025',
        description:
            'Anti ageing for dogs: What the new anti-aging drug could mean for canine healthspan, recent FDA milestones, early study data, and proven ways to support senior dogs today.',
        component: () =>
            import('./posts/anti-ageing-for-dogs') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet'],
    },
    {
        slug: 'how-long-do-golden-retrievers-live',
        title:
            'How Long Do Golden Retrievers Live? Average Lifespan, What Shortens or Extends Life, and Evidence-Based Care in 2026',
        date: 'November 19, 2025',
        description:
            'How long do Golden Retrievers live? A complete guide to lifespan averages, cancer risk, orthopedic health, weight management, preventive care, and senior support.',
        component: () =>
            import('./posts/how-long-do-golden-retrievers-live') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'average-age-of-labrador',
        title: 'Average Age of a Labrador: Evidence-Based Lifespan, What Shortens or Extends Life, and How to Add Healthy Years in 2026',
        date: 'November 19, 2025',
        description:
            'What is the average age of a Labrador? A data-backed breakdown of lifespan ranges, risk factors, genetics, orthopedic health, cancer awareness, senior care, and daily routines that add healthy years.',
        component: () =>
            import('./posts/average-age-of-labrador') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever'
    },
    {
        slug: 'from-clipboards-to-cloud-dog-daycare-management-software-2026',
        title:
            'From Clipboards to Cloud: A Data-Backed Look at How Dog Daycare Management Software Changes Daily Operations in 2026',
        date: 'November 7, 2025',
        description:
            'A data-driven breakdown of how dog daycare management software transforms safety, workflow, staffing, and profitability for pet care facilities in 2026.',
        component: () =>
            import('./posts/from-clipboards-to-cloud-dog-daycare-management-software-2026') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'veterinary-emergency-care-shortage-2025',
        title:
            'When a Vet Can’t Get Help for Her Own Dog: The Emergency-Care Shortage in Veterinary Medicine',
        date: 'November 15, 2025',
        description:
            'A Virginia veterinarian’s struggle to secure emergency care for her own dog highlights the broader staffing crisis affecting veterinary medicine in 2025.',
        component: () =>
            import('./posts/veterinary-emergency-care-shortage-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['vet'],
    },
    {
        slug: 'holiday-ideas-dog-boarding-daycare-2025',
        title:
            'Holiday Ideas for Dog Boarding & Daycare Facilities: 15 Festive Ways to Surprise and Delight Your Clients in 2025',
        date: 'November 14, 2025',
        description:
            'Fifteen festive, creative, and low-cost holiday ideas for dog boarding and daycare facilities, including Santa photos, craft ornaments, themed enrichment, giveaways, and client appreciation activities for 2025.',
        component: () =>
            import('./posts/holiday-ideas-dog-boarding-daycare-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'best-free-and-low-cost-dog-boarding-and-daycare-software-2026',
        title:
            'Best FREE and Low-Cost Dog Boarding & Daycare Software in 2026',
        date: 'November 12, 2025',
        description:
            'A practical breakdown of free vs low-cost kennel software, hidden fees, must-have features, and how operators can choose tools that support margins instead of draining them.',
        component: () =>
            import('./posts/best-free-and-low-cost-dog-boarding-and-daycare-software-2026') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'why-dog-boarding-software-prices-are-dropping',
        title:
            'Why Dog Boarding & Daycare Software Costs Are Dropping While Subscription Prices Keep Going Up',
        date: 'November 14, 2025',
        description:
            'Cloud infrastructure is cheaper than ever, yet software vendors continue raising prices. This article explains what actually got cheaper, why subscription fees climbed anyway, and how facility owners can protect margins using transparent TCO math.',
        component: () =>
            import('./posts/why-dog-boarding-software-prices-are-dropping') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'xl-bully-policy-guide',
        title: 'Understanding the XL Bully Ban in the UK: What Pet Owners & Boarding Facilities Need to Know',
        date: 'November 13, 2025',
        description:
            'An objective overview of the UK regulation changes for XL Bully type dogs: what’s prohibited, what “exemption” means, and practical screening and safety advice for pet-care providers and owners.',
        component: () => import('./posts/xl-bully-policy-guide'),
        categories: ['owner', 'boarding']
    },
    {
        slug: 'whelping-complications-every-breeder-should-know',
        title: 'Whelping Complications Every Breeder Should Know: Early Warning Signs, Emergencies, and When to Call the Vet',
        date: 'October 30, 2025',
        description:
            'Comprehensive guide to recognising and managing whelping emergencies — from dystocia and retained placenta to hypocalcaemia and postpartum infections — with clear vet-backed thresholds for intervention.',
        component: () => import('./posts/whelping-complications-every-breeder-should-know'),
        categories: ['breeder']
    },
    {
        slug: 'dog-boarding-preparation-guide',
        title: 'Dog Boarding Preparation Guide: How to Make Drop-Off Stress-Free for You and Your Pet',
        date: 'October 31, 2025',
        description:
            'Practical guidance for reducing stress before boarding day — from scent-based packing to calm drop-offs and communication tips with staff.',
        component: () => import('./posts/dog-boarding-preparation-guide'),
        categories: ['owner', 'boarding']
    },
    {
        slug: 'how-to-choose-dog-daycare-red-and-green-flags',
        title: 'How to Choose the Right Dog Daycare: Red Flags, Green Flags, and Behavior-Based Standards',
        date: 'November 1, 2025',
        description:
            'An evidence-based guide to identifying quality dog daycare facilities — learn the red flags of unsafe programs, the green flags of great care, and why behavioral science should guide your choice.',
        component: () => import('./posts/how-to-choose-dog-daycare-red-and-green-flags'),
        categories: ['owner']
    },
    {
        slug: 'golden-retriever-cancer-rates-2025',
        title: 'Golden Retriever Cancer Rates: What Every Owner Should Know in 2025',
        date: 'November 2, 2025',
        description:
            'An evidence-based look at Golden Retriever cancer rates in 2025 — the latest research, early detection practices, and steps owners can take to reduce risk and improve outcomes.',
        component: () => import('./posts/golden-retriever-cancer-rates-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever',
    },
    {
        slug: 'ethics-of-dog-breeding-2025',
        title: 'The Ethics of Dog Breeding in 2025: Balancing Profit, Purpose, and Preservation',
        date: 'November 3, 2025',
        description:
            'Colin Zedreck examines how modern dog breeders in 2025 can ethically balance profit, purpose, and preservation to protect canine welfare and genetic diversity.',
        component: () => import('./posts/ethics-of-dog-breeding-2025'),
        categories: ['breeder', 'owner'],
    },
    {
        slug: 'dog-boarding-software-costs',
        title: 'Dog Boarding Software Doesn’t Need to Be Expensive',
        date: 'November 4, 2025',
        description:
            'Colin Zedreck shares why dog boarding and daycare software should be affordable for every business — and why Petunia proves great tools don’t need high prices.',
        component: () => import('./posts/dog-boarding-software-costs'),
        categories: ['boarding'],
    },
    {
        slug: 'french-bulldog-grooming-routine',
        title: 'French Bulldog Grooming Routine: How Often to Bathe, Brush, and Clean Folds',
        date: 'November 5, 2025',
        description:
            'Discover the best grooming schedule for your French Bulldog — how often to bathe, brush, and clean facial folds to prevent odor and skin infections.',
        component: () => import('./posts/french-bulldog-grooming-routine'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'cavalier-king-charles-spaniel-lifespan',
        title: 'Cavalier King Charles Spaniel Lifespan: How to Help Your Dog Live Longer',
        date: 'November 6, 2025',
        description:
            'Explore the average lifespan of Cavalier King Charles Spaniels and discover how nutrition, heart care, and responsible breeding can help your dog live longer and healthier.',
        component: () => import('./posts/cavalier-king-charles-spaniel-lifespan'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cavalier King Charles Spaniel',
    },
    {
        slug: 'leptospirosis-in-dogs-symptoms-prevention-2025',
        title: 'Leptospirosis in Dogs: Symptoms, Transmission, and Protection (2025 Update)',
        date: 'October 24, 2025',
        description:
            'Comprehensive overview of leptospirosis in dogs — symptoms, transmission, treatment, and 2025 prevention updates from the CDC, AVMA, and WSAVA.',
        component: () => import('./posts/leptospirosis-in-dogs-symptoms-prevention-2025'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'boxer-mast-cell-tumors-2025',
        title: 'Mast Cell Tumors in Boxers: Early Detection, Treatment, and Prognosis (2025 Guide)',
        date: 'October 23, 2025',
        description:
            'Comprehensive overview of mast cell tumors in Boxers — causes, symptoms, diagnosis, and treatment options to ensure early detection and better outcomes.',
        component: () => import('./posts/boxer-mast-cell-tumors-2025'),
        categories: ['owner', 'breed_specific_guides'],
    },
    {
        slug: 'cfia-pet-import-rules-canada-2025',
        title: 'CFIA Pet Import Rules for Canada (2025): Dogs & Cats — What Owners Must Know',
        date: 'October 21, 2025',
        description:
            'Updated 2025 guidelines from the CFIA for importing dogs and cats into Canada — covering age, microchipping, rabies vaccination and what U.S.-based pet owners should prepare.',
        component: () => import('./posts/cfia-pet-import-rules-canada-2025'),
        categories: ['owner'],
    },
    {
        slug: 'ring-search-party-ai-update-oct22-2025',
        title: 'Ring Search Party Update: Early Feedback & What’s Next (October 22 2025)',
        date: 'October 22, 2025',
        description:
            'Latest news and user feedback on Ring’s AI-powered Search Party feature for lost dogs, including rollout details, privacy debate, and adoption tips.',
        component: () => import('./posts/ring-search-party-ai-update-oct22-2025'),
        categories: ['owner'],
    },
    {
        slug: 'extending-great-dane-lifespan-2025',
        title: 'Extending the Life of Your Great Dane: Proven Strategies for a Healthier Giant Breed',
        date: 'October 26, 2025',
        description:
            'Science-based strategies to extend Great Dane lifespan through nutrition, gut health, exercise, and preventive screenings.',
        component: () => import('./posts/extending-great-dane-lifespan-2025'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Great Dane',
    },
    {
        slug: 'raw-vs-kibble-metabolic-health-2025',
        title: 'Raw vs. Kibble: What the 2025 Helsinki Metabolic Study Reveals About Canine Health',
        date: 'October 20, 2025',
        description:
            'Detailed summary of the 2025 University of Helsinki study comparing raw meat-based and kibble diets in dogs, highlighting metabolic effects and safety guidance.',
        component: () => import('./posts/raw-vs-kibble-metabolic-health-2025'),
        categories: ['owner', 'vet', 'boarding'],
    },
    {
        slug: 'canine-nutrition-research-roundup-sept-oct-2025',
        title: 'Canine Nutrition Research Roundup: September–October 2025',
        date: 'October 19, 2025',
        description:
            'Evidence-based summary of canine nutrition research from Sept–Oct 2025, including nutrient profiles, sustainability, and kibble vs. raw metabolism.',
        component: () => import('./posts/canine-nutrition-research-roundup-sept-oct-2025'),
        categories: ['owner', 'vet', 'boarding'],
    },
    {
        slug: 'pa-dog-boarding-daycare-license-requirements-2025',
        title: 'Pennsylvania Dog Boarding & Daycare License Requirements (2025 Guide)',
        date: 'October 29, 2025',
        description:
            'Clear, state-specific breakdown of licensing, inspection and regulatory obligations for dog boarding and daycare operations in Pennsylvania, including what you must do, how to verify compliance, and why it matters.',
        component: () => import('./posts/pa-dog-boarding-daycare-license-requirements-2025'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'akc-vs-designer-breeds-2025',
        title: 'AKC Registration vs. Designer Breeds: What’s the Real Difference?',
        date: 'October 18, 2025',
        description:
            'Explore the true differences between AKC-registered purebreds and designer crosses. Covers breed-club history, ethics, hybrid vigor, and how to educate buyers respectfully without alienation.',
        component: () => import('./posts/akc-vs-designer-breeds-2025'),
        categories: ['breeder', 'owner'],
    },
    {
        slug: 'whelping-box-guide-2025',
        title: 'Whelping Box Setup and Temperature Control Guide',
        date: 'October 17, 2025',
        description:
            'A breeder’s complete guide to whelping box design, dimensions, and environmental control. Includes temperature and humidity charts, bedding safety, and week-by-week setup references with photo placeholders.',
        component: () => import('./posts/whelping-box-guide-2025'),
        categories: ['breeder'],
    },
    {
        slug: 'responsible-breeding-pairs-2025',
        title: 'How to Choose Responsible Breeding Pairs (Genetic Testing Explained)',
        date: 'October 16, 2025',
        description:
            'A complete guide for ethical dog breeders on selecting healthy, genetically diverse pairs. Includes OFA and Embark testing, common recessive traits, and real-world breeding ethics examples.',
        component: () => import('./posts/responsible-breeding-pairs-2025'),
        categories: ['breeder'],
    },
    {
        slug: 'senior-dog-health-checklist-2025',
        title: 'Senior Dog Health Checklist: Signs of Aging and When to See the Vet',
        date: 'October 15, 2025',
        description:
            'Learn how to recognize and manage the signs of aging in senior dogs. Covers mobility, cognition, appetite, preventive testing, home adaptations, and nutritional support for long-term wellness.',
        component: () => import('./posts/senior-dog-health-checklist-2025'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'gmb-tips-boarding-2025',
        title: 'Top Google My Business Tips for Pet Boarding Facilities',
        date: 'October 14, 2025',
        description:
            'Boost your pet boarding facility’s visibility with this step-by-step Google My Business optimization guide. Includes a GMB checklist, review strategy, reply templates, and tips for maintaining brand reputation.',
        component: () => import('./posts/gmb-tips-boarding-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'boarding-daycare-checklist-2025',
        title: 'What to Pack for Dog Boarding and Daycare (Owner’s Checklist)',
        date: 'October 13, 2025',
        description:
            'A detailed, printable checklist to help you pack everything your dog needs for boarding or daycare—from food and meds to comfort items and paperwork. Perfect for stress-free drop-offs.',
        component: () => import('./posts/boarding-daycare-checklist-2025'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'daycare-safety-standards-2025',
        title: 'Dog Daycare Safety Standards and Staff Training Requirements',
        date: 'October 12, 2025',
        description:
            'A practical, research-driven guide to daycare safety: vaccination rules, grouping, ratios, sanitation, incident response, and the staff training that keeps dogs safe every day.',
        component: () => import('./posts/daycare-safety-standards-2025'),
        categories: ['boarding'],
    },
    {
        slug: 'pet-insurance-dog-daycare-2025',
        title: 'Pet Insurance and Dog Daycare: What’s Covered, What’s Not',
        date: 'October 11, 2025',
        description:
            'Pet insurance can offset daycare-related accident and illness costs—but not daily fees. Learn what’s covered, what’s excluded, and how to choose the right plan with real examples from leading providers.',
        component: () => import('./posts/pet-insurance-dog-daycare-2025'),
        categories: ['owner'],
    },
    {
        slug: 'dog-socialization-daycare-2025',
        title: 'Dog Socialization: How Daycare Improves Behavior and Reduces Aggression',
        date: 'October 10, 2025',
        description:
            'Explore how structured daycare programs use behavioral science and trained supervision to build confidence, reduce reactivity, and improve social skills in dogs of all ages.',
        component: () => import('./posts/dog-socialization-daycare-2025'),
        categories: ['owner'],
    },
    {
        slug: 'choose-dog-boarding-facility-2025',
        title: 'How to Choose a Dog Boarding Facility You Can Trust',
        date: 'October 9, 2025',
        description:
            'Discover how to evaluate dog boarding facilities for safety, cleanliness, and staff quality. Use our professional checklist and red-flag guide to ensure your dog’s stay is comfortable, healthy, and stress-free.',
        component: () => import('./posts/choose-dog-boarding-facility-2025'),
        categories: ['owner', 'boarding', 'vet'],
    },
    {
        slug: 'boarding-vs-daycare-2025',
        title: 'Dog Boarding vs. Dog Daycare — What’s the Difference and Which Is Right for Your Dog?',
        date: 'October 8, 2025',
        description:
            'Learn the key differences between dog boarding and daycare, including costs, schedules, and behavior benefits. Discover which option fits your dog’s personality and lifestyle best, with expert tips from the Petunia team.',
        component: () => import('./posts/boarding-vs-daycare-2025'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'decompression-boarding-2025',
        title: 'Decompression Boarding: How Quiet Spaces Help Dogs Relax After Drop-Off',
        date: 'October 7, 2025',
        description:
            '“Decompression boarding” is a behavioral science approach where dogs are given quiet, low-stimulation environments post-drop-off to reduce stress. Learn how boarding facilities are adopting decompression zones, the science behind them, and how owners can support calmer transitions.',
        component: () => import('./posts/decompression-boarding-2025'),
        categories: ['owner', 'rescue', 'vet'],
    },
    {
        slug: 'veterinary-staffing-crisis-2025',
        title: 'Why It’s Getting Harder to Find a Vet — and How Pet Owners Can Plan Ahead',
        date: 'October 7, 2025',
        description:
            'Veterinary medicine faces record burnout, staff shortages, and clinic closures. Learn what’s driving the crisis, how vet schools are responding, and how pet owners can plan ahead for care access.',
        component: () => import('./posts/veterinary-staffing-crisis-2025'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'dog-nutrition-updates-2025',
        title: '2025 Dog Nutrition Updates: How Prescription Weight-Control Diets Are Changing Vet Care',
        date: 'October 7, 2025',
        description:
            'New FDA-approved prescription diets in 2025 introduce novel fiber matrices and post-biotic blends aimed at reducing obesity rates in dogs. Learn what changed, how these foods work, and how veterinarians are using data-driven nutrition to improve canine health.',
        component: () => import('./posts/dog-nutrition-updates-2025'),
        categories: ['owner', 'vet', 'food'],
    },
    {
        slug: 'pet-insurance-worth-it-2025',
        title: 'Are Pet Insurance Premiums Worth It in 2025? What to Know Before You Enroll',
        date: 'October 7, 2025',
        description:
            'Nationwide and Trupanion announced 2025 premium hikes amid rising veterinary costs. Learn why pet insurance prices are climbing, how to evaluate coverage, and whether it still makes financial sense for your dog or cat.',
        component: () => import('./posts/pet-insurance-worth-it-2025'),
        categories: ['owner'],
    },
    {
        slug: 'leptospirosis-core-guideline-update-2024-2025',
        title: '2024–2025 Vaccine Guideline Updates: Leptospirosis as “Core” & What That Means for Boarding and Travel',
        date: 'October 7, 2025',
        description:
            'AAHA’s 2024 update elevates leptospirosis to recommended core for most dogs, while WSAVA’s 2024 global guidance outlines where lepto is core by region. Learn how schedules differ, what boarding and travel facilities now require, and see practical checklists for overdue vaccines.',
        component: () => import('./posts/leptospirosis-core-guideline-update-2024-2025'),
        categories: ['owner'],
    },
    {
        slug: 'dog-longevity-drugs-loyal-fda-milestone',
        title: 'Dog Longevity Drugs Are Getting Real: What Loyal’s FDA Milestones Mean for Owners',
        date: 'October 7, 2025',
        description:
            'Loyal’s LOY-002 just reached a major FDA milestone — Reasonable Expectation of Effectiveness (RXE) — moving one step closer to conditional approval. Learn what RXE means, what timelines and costs to expect, and the right questions to ask your vet before considering future longevity drugs.',
        component: () => import('./posts/dog-longevity-drugs-loyal-fda-milestone'),
        categories: ['owner'],
    },
    {
        slug: 'pet-insurance-state-level-reform-2025',
        title: 'Pet Insurance Is Being Rewritten at the State Level: How 2025 Rules Affect Your Policy',
        date: 'October 7, 2025',
        description:
            'California’s SB 1217 and other state reforms are reshaping pet insurance in 2025—stricter disclosures, wellness vs. insurance boundaries, renewal protections, and clearer rules for premium hikes and waiting periods.',
        component: () => import('./posts/pet-insurance-state-level-reform-2025'),
        categories: ['owner'],
    },
    {
        slug: 'dog-ear-infections-causes-symptoms-and-treatment-options',
        title: 'Dog Ear Infections: Causes, Symptoms, and Treatment Options',
        date: 'October 6, 2025',
        description:
            'Learn how to identify, treat, and prevent dog ear infections. Covers yeast, bacterial, and allergy causes, plus home care and prevention tips for swimmers and active breeds.',
        component: () => import('./posts/dog-ear-infections-causes-symptoms-and-treatment-options'),
        categories: ['owner'],
    },
    {
        slug: 'pet-care-waivers-why-they-matter-and-what-to-include',
        title: 'Pet Care Waivers: Why They Matter and What to Include',
        date: 'October 6, 2025',
        description:
            'A clear, well-written waiver is every boarding or daycare business’s first line of defense. Learn what sections to include, how to protect your business legally, and how to store signed waivers securely in digital form.',
        component: () => import('./posts/pet-care-waivers-why-they-matter-and-what-to-include'),
        categories: ['boarding'],
    },
    {
        slug: 'top-risks-in-dog-boarding-businesses-and-how-to-prevent-them',
        title: 'Top Risks in Dog Boarding Businesses (and How to Prevent Them)',
        date: 'October 6, 2025',
        description:
            'Running a boarding or daycare business carries real risks—from medical and behavioral incidents to liability exposure. Learn the top five risk areas and how strong policies, waivers, and training can prevent costly mistakes.',
        component: () => import('./posts/top-risks-in-dog-boarding-businesses-and-how-to-prevent-them'),
        categories: ['boarding'],
    },
    {
        slug: 'healthy-homemade-dog-meals-for-active-breeds',
        title: 'Healthy Homemade Dog Meals for Active Breeds',
        date: 'October 6, 2025',
        description:
            'Active dogs burn calories fast—and need more than basic kibble can provide. Learn how to make balanced homemade meals for working and athletic breeds, with calorie charts, vet-approved recipes, and AAFCO nutrient tips.',
        component: () => import('./posts/healthy-homemade-dog-meals-for-active-breeds'),
        categories: ['owner'],
    },
    {
        slug: 'why-does-my-dog-bark-at-night',
        title: 'Why Does My Dog Bark at Night? Causes, Solutions, and When to Worry',
        date: 'October 6, 2025',
        description:
            'If your dog won’t stop barking at night, there’s usually a reason—ranging from loneliness or anxiety to medical discomfort or outside noises. Learn why dogs bark after dark, how to fix it, and when to consult a trainer or veterinarian.',
        component: () => import('./posts/why-does-my-dog-bark-at-night'),
        categories: ['owner'],
    },
    {
        slug: 'dog-begging-human-cues',
        title: "Insights into Dog Begging Behavior and Human Cues",
        date: 'October 2, 2025',
        description:
            "A recent behavioral study reveals how human gaze influences begging in free-roaming dogs. Learn what this means for canine communication, training, and human-animal bonds.",
        component: () => import('./posts/dog-begging-human-cues'),
        categories: ['owner']
    },
    {
        slug: 'dachshund-it-dog-2025',
        title: "The Rise of Dachshunds as the Next “It” Dog",
        date: 'October 2, 2025',
        description:
            "Dachshunds are trending in urban settings and influencer circles in 2025. Discover why this playful breed is having a cultural moment, what drives the trend, and what it means for owners.",
        component: () => import('./posts/dachshund-it-dog-2025'),
        categories: ['owner', 'trends', 'breeder']
    },
    {
        slug: 'french-bulldogs-most-popular-2025',
        title: "Why French Bulldogs Remain America’s Most Popular Dog in 2025",
        date: 'October 3, 2025',
        description:
            "French Bulldogs continue to dominate in 2025, according to AKC registration. Explore why they remain so popular, the challenges of ownership, and what it means for breeders and pet owners.",
        component: () => import('./posts/french-bulldogs-most-popular-2025'),
        categories: ['owner', 'breeder', 'breed specific guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'dog-anti-aging-pill-fda-milestone',
        title: "Anti-Aging Pill for Dogs Clears FDA Milestone",
        date: 'October 3, 2025',
        description:
            "A biotech company’s dog longevity pill has cleared a key veterinary regulator barrier. Explore how it works, the regulatory path, and what it might mean for pet owners and the pet health industry.",
        component: () => import('./posts/dog-anti-aging-pill-fda-milestone'),
        categories: ['owner']
    },
    {
        slug: 'ring-search-party-ai-lost-dogs',
        title: "Ring’s New ‘Search Party’ Feature: AI That Helps Find Lost Dogs",
        date: 'October 3, 2025',
        description:
            "Ring’s new ‘Search Party’ feature uses AI-powered video matching to help families reunite with lost dogs. Learn how it works, its pros and cons, and what it means for pet owners everywhere.",
        component: () => import('./posts/ring-search-party-ai-lost-dogs'),
        categories: ['owner']
    },
    {
        slug: 'border-collie-health-guide',
        title: 'Border Collie Health Guide: Joint Care, Seizures, and Longevity',
        date: 'October 1, 2025',
        description:
            'Border Collies are active, intelligent dogs with unique health needs. Learn about joint care, seizures, and how to support longevity in this detailed breed health guide.',
        component: () => import('./posts/border-collie-health-guide'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Border Collie',
    },
    {
        slug: 'westie-allergies',
        title: 'West Highland White Terrier Allergies: Why Westies Scratch and What Helps',
        date: 'October 1, 2025',
        description:
            'West Highland White Terriers are prone to allergies that cause scratching, itching, and skin issues. Learn why Westies develop allergies, the signs to watch for, and the best treatments and prevention tips.',
        component: () => import('./posts/westie-allergies'),
        categories: ['owner', 'allergy', 'breed_specific_guides'],
        breed: 'West Highland White Terrier',
    },
    {
        slug: 'great-dane-health-lifespan',
        title: 'Great Dane Health and Lifespan: How to Support a Giant Breed',
        date: 'October 1, 2025',
        description:
            'Great Danes are gentle giants with unique health challenges and shorter lifespans. Learn about common health issues, diet, exercise, and care strategies to support a long and healthy life.',
        component: () => import('./posts/great-dane-health-lifespan'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Great Dane',
    },
    {
        slug: 'allergy-ear-skin-hotspots',
        title: 'Ear Infections, Hot Spots, and Skin Irritation: The Allergy Connection',
        date: 'September 30, 2025',
        description:
            'Learn how allergies cause ear infections, hot spots, and skin irritation in dogs. Discover the connection, early warning signs, and prevention and treatment tips for healthier pets.',
        component: () => import('./posts/allergy-ear-skin-hotspots'),
        categories: ['owner', 'allergy'],
    },
    {
        slug: 'boxer-skin-issues',
        title: 'Boxer Skin Issues Explained: Allergies, Lumps, and Early Warning Signs',
        date: 'September 30, 2025',
        description:
            'Boxers are prone to skin issues including allergies, lumps, and tumors. Learn the early warning signs, treatment options, and care tips for maintaining healthy skin in your Boxer.',
        component: () => import('./posts/boxer-skin-issues'),
        categories: ['owner', 'allergy', 'breed_specific_guides'],
        breed: 'Boxer',
    },
    {
        slug: 'boston-terrier-coat-care',
        title: 'Boston Terrier Coat Care: Shedding, Allergies, and Skin Health',
        date: 'September 29, 2025',
        description:
            'Learn how to care for your Boston Terrier’s coat. Understand shedding patterns, allergy considerations, and common skin health issues with tips for grooming and prevention.',
        component: () => import('./posts/boston-terrier-coat-care'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Boston Terrier',
    },
    {
        slug: 'beagle-shedding',
        title: 'Do Beagles Shed? Grooming, Allergy Considerations, and Household Tips',
        date: 'September 29, 2025',
        description:
            'Do Beagles shed? Learn about Beagle shedding patterns, grooming needs, allergy considerations, and household tips for keeping your home clean and your dog’s coat healthy.',
        component: () => import('./posts/beagle-shedding'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Beagle',
    },
    {
        slug: 'dachshund-back-problems',
        title: 'Dachshund Back Problems Explained: Prevention and Care Tips',
        date: 'September 28, 2025',
        description:
            'Dachshunds are prone to back problems like intervertebral disc disease (IVDD). Learn the causes, prevention tips, treatment options, and how to keep your Dachshund’s spine healthy.',
        component: () => import('./posts/dachshund-back-problems'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Dachshund',
    },
    {
        slug: 'cavalier-king-charles-spaniel-health-risks',
        title: 'Cavalier King Charles Spaniel Health Risks: Heart, Eyes, and Lifespan',
        date: 'September 28, 2025',
        description:
            'Learn about the most common health risks in Cavalier King Charles Spaniels, including heart disease, eye problems, and lifespan factors. Discover how to support a longer, healthier life for your Cavalier.',
        component: () => import('./posts/cavalier-king-charles-spaniel-health-risks'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cavalier King Charles Spaniel',
    },
    {
        slug: 'best-dog-breeds-for-families',
        title: 'Best Dog Breeds for Families with Young Kids',
        date: 'September 27, 2025',
        description:
            'Looking for the best dog breeds for families with young kids? Explore top family-friendly breeds, challenges, safety tips, and daycare insights to help you choose the right dog.',
        component: () => import('./posts/best-dog-breeds-for-families'),
        categories: ['owner'],
    },
    {
        slug: 'senior-dog-health-problems',
        title: 'Top 10 Senior Dog Health Problems (and How to Support Aging Pets)',
        date: 'September 27, 2025',
        description:
            'Explore the top 10 health challenges senior dogs face, including arthritis, dementia, heart issues, and incontinence. Learn diet, exercise, and boarding strategies to support aging pets.',
        component: () => import('./posts/senior-dog-health-problems'),
        categories: ['owner'],
    },
    {
        slug: 'dog-vaccines-what-they-protect',
        title: 'Most Common Dog Vaccines: What They Protect Against and Why They Matter',
        date: 'September 26, 2025',
        description:
            'Learn about the most common dog vaccines, what they protect against, boarding and daycare requirements, and emerging vaccines that may benefit your pet.',
        component: () => import('./posts/dog-vaccines-what-they-protect'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'separation-anxiety-dogs',
        title: 'Signs of Separation Anxiety in Dogs (and How to Help Them Cope)',
        date: 'September 26, 2025',
        description:
            'Learn the signs of separation anxiety in dogs, from pacing and barking to destructive behavior. Explore proven coping strategies including enrichment, daycare, and when to seek professional help.',
        component: () => import('./posts/separation-anxiety-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'french-bulldog-shedding-myths',
        title: 'French Bulldog Shedding Myths: What Owners Really Need to Know',
        date: 'September 26, 2025',
        description:
            'French Bulldogs are often labeled as hypoallergenic, but is that true? Learn the facts about shedding, seasonal patterns, and grooming tips to keep your Frenchie healthy.',
        component: () => import('./posts/french-bulldog-shedding-myths'),
        categories: ['owner'],
    },
    {
        slug: 'new-penn-vet-clinic-advances-treatment-for-canine-retinal-disease',
        title: 'New Penn Vet Clinic Advances Treatment for Canine Retinal Disease',
        date: 'September 25, 2025',
        description:
            'Penn Vet has opened a new specialty clinic for canine retinal disease, including progressive retinal atrophy (PRA). Learn what these diseases are, why they matter, and what diagnostic and treatment innovations are underway in the U.S. and UK.',
        component: () => import('./posts/new-penn-vet-clinic-advances-treatment-for-canine-retinal-disease'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'california-dogs-tick-borne-anaplasmosis-tripled',
        title: 'California Dogs & Tick-Borne Bacteria: Why Anaplasmosis Has Tripled',
        date: 'September 25, 2025',
        description:
            'Dogs in California now test positive for anaplasmosis at nearly triple the historical rate. This article explores tick surveillance, overlapping pathogens, prevention, and what boarding/daycare facilities need to know.',
        component: () => import('./posts/california-dogs-tick-borne-anaplasmosis-tripled'),
        categories: ['owner'],
    },
    {
        slug: 'pet-owners-underestimate-lifetime-costs-new-study-reveals-hidden-financial-risk',
        title: 'Pet Owners Underestimate Lifetime Costs: New Study Reveals Hidden Financial Risk',
        date: 'September 24, 2025',
        description:
            'A 2025 deep dive into the lifetime costs of pet ownership. New research shows most owners underestimate the financial commitment, leaving families unprepared for emergencies. Learn real cost breakdowns, hidden expenses, and planning strategies.',
        component: () => import('./posts/pet-owners-underestimate-lifetime-costs-new-study-reveals-hidden-financial-risk'),
        categories: ['owner'],
    },
    {
        slug: 'dog-fall-allergies-us-canada-with-anz-callouts',
        title: 'Dog Fall Allergies: U.S./Canada Guide with Australia/NZ Spring Callouts',
        date: 'September 23, 2025',
        description:
            'A veterinary-informed 2025 guide to dog fall allergies across the U.S. and Canada, with seasonal callouts for Australia and New Zealand. Learn symptom patterns, pollen calendars, home care that helps, and when to involve your veterinarian.',
        component: () => import('./posts/dog-fall-allergies-us-canada-with-anz-callouts'),
        categories: ['owner'],
    },
    {
        slug: 'dog-titer-testing-explained-where-to-get-it-us-uk',
        title: 'Dog Titer Testing Explained + Where to Get It (U.S. + UK Resources)',
        date: 'September 22, 2025',
        description:
            'A veterinary-informed guide to dog titer testing: what it is, when it matters, how reliable it is, and where owners can access testing in the U.S. and UK.',
        component: () => import('./posts/dog-titer-testing-explained-where-to-get-it-us-uk'),
        categories: ['owner'],
    },
    {
        slug: 'daycare-for-intact-dogs-policies-heat-cycles-safety-us-uk-au',
        title: 'Daycare for Intact Dogs: Policies, Heat Cycles & Safety (U.S. + UK/AU)',
        date: 'September 21, 2025',
        description:
            'A practical, evidence-aligned guide to operating daycare with intact males and females: policy choices, heat-cycle exclusions, grouping, staffing, waivers, and regional notes for the U.S., UK, and Australia.',
        component: () => import('./posts/daycare-for-intact-dogs-policies-heat-cycles-safety-us-uk-au'),
        categories: ['boarding'],
    },
    {
        slug: 'bravecto-quantum-for-dogs-onset-cost-safety-vs-alternatives',
        title: 'Bravecto Quantum for Dogs: Onset, Cost & Safety vs. Alternatives',
        date: 'September 20, 2025',
        description:
            'A veterinary-informed 2025 guide to Bravecto Quantum for dogs: how fast it works, cost comparisons, safety evidence, and alternatives for flea and tick prevention worldwide.',
        component: () => import('./posts/bravecto-quantum-for-dogs-onset-cost-safety-vs-alternatives'),
        categories: ['owner'],
    },
    {
        slug: 'canine-influenza-2025-safety-boosters-boarding-rules',
        title: 'Canine Influenza 2025: Safety, Boosters & Boarding Rules',
        date: 'September 19, 2025',
        description:
            'A veterinary-informed 2025 guide to canine influenza: current vaccine safety, booster recommendations, global boarding requirements, and practical owner advice.',
        component: () => import('./posts/canine-influenza-2025-safety-boosters-boarding-rules'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'food-vs-environmental-allergies-in-dogs-how-to-tell-the-difference',
        title: 'Food vs. Environmental Allergies in Dogs: How to Tell the Difference',
        date: 'September 5, 2025',
        description:
            'A veterinary-informed guide to separating food allergies from environmental allergies in dogs: patterns, diet trials, immunotherapy, and a step-by-step SOP families can follow.',
        component: () => import('./posts/food-vs-environmental-allergies-in-dogs-how-to-tell-the-difference'),
        categories: ['owner'],
    },
    {
        slug: 'excessive-shedding-in-dogs-when-its-normal-and-when-to-see-the-vet',
        title: 'Excessive Shedding in Dogs: When It\'s Normal and When to See the Vet',
        date: 'September 6, 2025',
        description:
            'A research-backed guide covering normal vs. excessive shedding, at-home fixes (grooming, nutrition, environment), red-flag symptoms, and what to expect at the vet.',
        component: () => import('./posts/excessive-shedding-in-dogs-when-its-normal-and-when-to-see-the-vet'),
        categories: ['owner'],
    },
    {
        slug: 'hiring-and-retaining-great-kennel-staff',
        title: 'Hiring and Retaining Great Kennel Staff: Culture and Burnout Prevention',
        date: 'September 18, 2025',
        description:
            'An operator-grade, 2,000+ word guide for kennel and daycare owners on staff retention: hiring pipelines, onboarding, culture-building, mentorship, fair wages, flexible scheduling, communication systems, burnout prevention, and SOPs for sustainable teams.',
        component: () => import('./posts/hiring-and-retaining-great-kennel-staff'),
        categories: ['boarding'],
    },
    {
        slug: 'tracheal-collapse-in-small-breeds',
        title: 'Tracheal Collapse in Small Breeds: Symptoms, Lifestyle Adjustments, and Veterinary Care',
        date: 'September 7, 2025',
        description:
            'A comprehensive, 2,000+ word owner’s guide to tracheal collapse in small dogs: hallmark “goose-honk” cough, triggers, at-home modifications, weight and harness strategies, medications, sedatives, anti-tussives, anesthesia considerations, stent/surgery decision paths, and daily SOPs.',
        component: () => import('./posts/tracheal-collapse-in-small-breeds'),
        categories: ['owner'],
    },
    {
        slug: 'canine-allergies-explained',
        title: 'Canine Allergies Explained: Food vs. Environmental Triggers and How to Help Your Dog Thrive',
        date: 'September 8, 2025',
        description:
            'A comprehensive 2,000+ word guide for pet owners: how dog allergies work, food vs. environmental triggers, the elimination diet done right, flea allergy dermatitis, ear/skin flare protocols, meds and supplements, home/environment tweaks, and practical SOPs.',
        component: () => import('./posts/canine-allergies-explained'),
        categories: ['owner'],
    },
    {
        slug: 'feeding-dogs-in-daycare-and-boarding',
        title: 'Feeding Dogs in Daycare and Boarding: Scheduling, Special Diets, and Risk Management',
        date: 'September 9, 2025',
        description:
            'An operator-grade, 2,000+ word guide to feeding systems in daycare and boarding: intake questions, portioning in grams, food prep, sanitation, allergy controls, raw/prescription diets, med-with-food workflows, bloat and aspiration risk, documentation, and printable SOPs.',
        component: () => import('./posts/feeding-dogs-in-daycare-and-boarding'),
        categories: ['boarding', 'daycare'],
    },
    {
        slug: 'addisons-disease-in-dogs',
        title: 'Addison’s Disease in Dogs: What Owners Need to Know About Diagnosis and Daily Management',
        date: 'December 28, 2025',
        description:
            'A 2,000+ word owner’s guide to Addison’s disease (hypoadrenocorticism): causes, breeds at risk, early symptoms, crisis recognition, diagnostic testing, lifelong treatment with medications, monitoring, and home-care SOPs.',
        component: () => import('./posts/addisons-disease-in-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'managing-group-play-safely',
        title: 'Managing Group Play Safely: Behavior Assessment, Supervision Ratios, and Incident Prevention',
        date: 'September 14, 2025',
        description:
            'An operator-grade, 2,000+ word playgroup safety manual: intake behavior assessments, selection and grouping, supervision ratios, arousal management, environment design, equipment staging, break-up protocols, documentation, and printable SOPs.',
        component: () => import('./posts/managing-group-play-safely'),
        categories: ['boarding'],
    },
    {
        slug: 'bloat-gdv-in-large-breed-dogs',
        title: 'Bloat (GDV) in Large Breed Dogs: Recognizing the Warning Signs and Reducing Risk',
        date: 'December 28, 2025',
        description:
            'A comprehensive, evidence-aware guide to canine bloat (gastric dilatation-volvulus): what it is, early signs, emergency steps, diagnostics, treatment, preventive gastropexy, feeding and exercise rules, and SOPs for households and facilities.',
        component: () => import('./posts/bloat-gdv-in-large-breed-dogs'),
        categories: ['owner'],
    },
    {
        slug: 'hidden-risks-in-pet-boarding',
        title: 'The Hidden Risks in Pet Boarding: Liability, Health, and How to Protect Your Business',
        date: 'September 15, 2025',
        description:
            'Operator-grade guidance on boarding risk: contracts, insurance, disease control, behavior policies, environment design, documentation, crisis response, and printable SOPs.',
        component: () => import('./posts/hidden-risks-in-pet-boarding'),
        categories: ['boarding'],
    },
    {
        slug: 'hip-dysplasia-in-dogs-guide',
        title: 'Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning',
        date: 'September 16, 2025',
        description:
            'A practical, evidence-informed guide to canine hip dysplasia: early signs, diagnostics, non-surgical care, rehab, surgical options, costs, timelines, and prevention through breeding and daily habits.',
        component: () => import('./posts/hip-dysplasia-in-dogs-guide'),
        categories: ['owner'],
    },
    {
        slug: 'common-training-mistakes-for-new-dog-owners',
        title: 'Common Training Mistakes for New Dog Owners: Gentle Guidance and How to Avoid Them',
        date: 'September 10, 2025',
        description:
            'A kind and practical guide for first-time dog owners. Covers the most common training mistakes—like inconsistency, skipping socialization, or relying on punishment—and how to build trust, confidence, and lasting skills instead.',
        component: () => import('./posts/common-training-mistakes-for-new-dog-owners'),
        categories: ['owner'],
    },
    {
        slug: 'dog-breeds-for-older-couples',
        title: 'Dog Breeds for Older Couples: Honest Questions, Gentle Companions, and How to Decide with Kindness',
        date: 'September 12, 2025',
        description:
            'A thoughtful, kind, and practical guide for older couples considering a dog. Covers questions to ask yourself, gentle breeds to consider, senior dog adoption, and alternatives to ownership.',
        component: () => import('./posts/dog-breeds-for-older-couples'),
        categories: ['owner'],
    },
    {
        slug: 'cavalier-king-charles-ownership-costs-vet-bills-grooming-and-boarding',
        title: 'Cavalier King Charles Ownership Costs: Vet Bills, Grooming, and Boarding',
        date: 'September 18, 2025',
        description:
            'A full, operator-grade breakdown of Cavalier King Charles Spaniel ownership costs: realistic budgets for vet care, grooming, food, insurance, daycare/boarding, travel, training, supplies, and senior care—plus cost-control systems that keep comfort high without surprise bills.',
        component: () =>
            import('./posts/cavalier-king-charles-ownership-costs-vet-bills-grooming-and-boarding'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cavalier King Charles Spaniel',
    },
    {
        slug: 'how-many-variants-of-doodles-exist',
        title: 'How Many Variants of Doodles Exist? Popular Types, Temperaments, and What Owners Should Know',
        date: 'September 11, 2025',
        description:
            'Doodles come in dozens of poodle-mix variants. This guide covers the most popular doodles in depth—temperament, hypoallergenic myths, grooming demands, health issues, and which mix might be right for your family.',
        component: () => import('./posts/how-many-variants-of-doodles-exist'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Doodles',
    },
    {
        slug: 'glp-1-for-dogs-hype-vs-data-risks-timelines',
        title: 'GLP-1 for Dogs: Hype vs Data, Risks, Timelines & a Vet-Guided Weight-Loss Playbook',
        date: 'September 1, 2025',
        description:
            'An evidence-informed guide to GLP-1 therapies for dogs: how they work, what OKV-119 aims to do, realistic approval timelines, safety questions, off-label/compounding rules, and a step-by-step, vet-aligned weight-loss program owners and facilities can start today.',
        component: () => import('./posts/glp-1-for-dogs-hype-vs-data-risks-timelines'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'how-to-know-if-my-dog-is-sick',
        title: 'How to Know If My Dog Is Sick: Subtle Signs, Red Flags, Home Checks, Vet Care, Costs, and a Practical 72-Hour Plan',
        date: 'August 29, 2025',
        description:
            'A 5,000+ word, evidence-informed guide to recognizing when a dog may be sick: broad signs and symptoms, home checks (TPR, gums/CRT, hydration), emergency red flags, what vets do, realistic U.S. cost ranges, and a calm 72-hour plan.',
        component: () => import('./posts/how-to-know-if-my-dog-is-sick'),
        categories: ['owner'],
    },
    {
        slug: 'why-does-my-dogs-breath-stink',
        title: "Why Does My Dog's Breath Stink? Dental Health, Real Causes, Red Flags, Fixes, Costs, and Breed Risk—An In-Depth Owner Guide",
        date: 'August 29, 2025',
        description:
            "A 4,000+ word, evidence-informed guide to canine halitosis: true dental causes, when to worry, what actually fixes it, realistic cost ranges, breed risk, and a 90-day plan.",
        component: () => import('./posts/why-does-my-dogs-breath-stink'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'how-do-i-start-a-dog-rescue-or-shelter',
        title: 'How Do I Start a Dog Rescue or Shelter? Costs, Legal Requirements, Qualifications, Sourcing, and Marketing Across Six Countries',
        date: 'August 29, 2025',
        description:
            'A step-by-step roadmap to launching a foster-based rescue or a brick-and-mortar shelter: startup budgets, whether you can start at home, licensing examples for the US, UK, Ireland, Canada, Australia, and New Zealand, required qualifications, ethical sourcing, and marketing beyond social media.',
        component: () => import('./posts/how-do-i-start-a-dog-rescue-or-shelter'),
        categories: ['rescue'],
    },
    {
        slug: 'is-there-a-veterinary-shortage',
        title: 'Is There a Veterinary Shortage? Costs, Causes, Specialty Gaps, Salaries, and a 10–15 Year Outlook',
        date: 'August 29, 2025',
        description:
            'A practical, evidence-informed look at today’s veterinary workforce: what “shortage” really means, why local and specialty gaps persist, how much veterinary school costs, salary ranges, and where relief may come from over the next 10–15 years.',
        component: () => import('./posts/is-there-a-veterinary-shortage'),
        categories: ['owner', 'vet'],
    },
    {
        slug: 'why-employee-turnover-is-so-high-in-the-pet-boarding-and-daycare-industry-and-what-you-can-do-about-it',
        title: 'Why Employee Turnover Is So High in the Pet Boarding and Daycare Industry—and What You Can Do About It',
        date: 'August 28, 2025',
        description:
            'Causes of high turnover in pet boarding/daycare and a practical playbook to cut churn: hiring funnel fixes, 10-shift onboarding, skill-based pay ladder, schedule design, safety culture, and retention KPIs.',
        component: () => import('./posts/why-employee-turnover-is-so-high-in-the-pet-boarding-and-daycare-industry-and-what-you-can-do-about-it'),
        categories: ['boarding'],
    },
    {
        slug: 'How-to-Handle-a-client-complaint-about-kennel-cough',
        title: 'How to Handle a Client Complaint About Kennel Cough',
        date: 'August 27, 2025',
        description:
            'Owner- and operator-ready playbook: what CIRDC/kennel cough is, incubation/timing, why clean facilities can still see cases, how vaccines reduce severity (not risk to zero), scripts for de-escalation, notification policy, and an ops checklist.',
        component: () => import('./posts/how-to-handle-a-client-complaint-about-kennel-cough'),
        categories: ['boarding'],
    },
    {
        slug: 'french-bulldog-puppies-for-sale-near-me',
        title: 'French bulldog puppies for sale near me – a guide to finding the right puppy for you and your family',
        date: 'August 28, 2025',
        description:
            'Practical guide: how to evaluate rescues and responsible breeders, which health tests to ask for (respiratory function grading, eyes, hips/elbows, patellas, cardiac), temperament checks, contracts, costs, and red flags.',
        component: () => import('./posts/french-bulldog-puppies-for-sale-near-me'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'labrador-puppies-for-sale-near-me',
        title: 'Labrador Puppies for Sale Near Me – A Guide to Finding the Right Dog',
        date: 'August 28, 2025',
        description:
            'Practical guide: how to evaluate rescues and responsible breeders, which health tests to ask for (hips, elbows, eyes, EIC/PRA DNA), temperament checks, contracts, costs, and red flags.',
        component: () => import('./posts/labrador-puppies-for-sale-near-me'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'what-is-the-bite-force-of-a-cane-corso',
        title: 'What Is the Bite Force of a Cane Corso? A Fun, Fact-Checked Deep Dive (Without the Hype)',
        date: 'August 28, 2025',
        description:
            'Evidence-based overview: how bite force is measured (Newtons), what peer-reviewed studies report for domestic dogs and canids, why viral PSI lists mislead, and where Cane Corsos likely fit relative to size and skull type.',
        component: () => import('./posts/what-is-the-bite-force-of-a-cane-corso'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'why-do-dogs-chew-on-sticks',
        title: 'Why Do Dogs Chew on Sticks? Instincts, Dental Health, Safety Risks, and Better Alternatives',
        date: 'August 28, 2025',
        description:
            'In-depth look at stick chewing: instincts, teething biology, sensory feedback, boredom relief, dental health (plaque/calculus, gum care), risk assessment (splinters, toxins, obstructions), safer alternatives, redirection training, enrichment systems, first-aid cues, and a daily dental routine.',
        component: () => import('./posts/why-do-dogs-chew-on-sticks'),
        categories: ['owner', 'train', 'vet'],
    },
    {
        slug: 'how-to-potty-train-a-puppy',
        title: 'How to Potty Train a Puppy: The Calm, Science-Backed Guide to Faster Results',
        date: 'August 28, 2025',
        description:
            'A complete housetraining playbook for new puppy families: setup, schedules by age, crate and playpen routines, reward timing, accident cleanup, apartment strategies, bad weather plans, medical watch-outs, regression fixes, and copy-paste checklists. Calm, consistent, and kinder for everyone.',
        component: () => import('./posts/how-to-potty-train-a-puppy'),
        categories: ['owner', 'train'],
    },
    {
        slug: 'merle-french-bulldog-what-is-it',
        title: 'Merle French Bulldog: What Is It?',
        date: 'August 28, 2025',
        description:
            'Merle genetics explained, breed-standard context, price dynamics, health considerations (hearing, eyes, skin), care and grooming, buyer due diligence, and why merle-to-merle breeding is unsafe.',
        component: () => import('./posts/merle-french-bulldog-what-is-it'),
        categories: ['owner', 'breed_specific_guides', 'breeder'],
        breed: 'French Bulldog',
    },
    {
        slug: 'french-bulldog-puppies-first-weeks-at-home',
        title: 'French Bulldog Puppies: The First Few Weeks at Home',
        date: 'August 28, 2025',
        description:
            'Step by step arrival plan for French Bulldog puppies: shopping list, safe home setup, food transition, crate and potty training, first vet visit, and brachycephalic safety.',
        component: () => import('./posts/french-bulldog-puppies-first-weeks-at-home'),
        categories: ['owner', 'breed_specific_guides', 'breeder'],
        breed: 'French Bulldog',
    },
    {
        slug: 'what-health-issues-do-poodles-have',
        title: 'What Health Issues Do Poodles Have? A Practical, Vet-Informed Guide (Standard, Miniature & Toy)',
        date: 'December 28, 2025',
        description:
            'Common Poodle health issues by variety: Addison’s disease, sebaceous adenitis, PRA/cataracts, patellar luxation, Legg–Calvé–Perthes, hip dysplasia, tracheal collapse, hypothyroidism/Cushing’s, von Willebrand disease, GDV/bloat, dental/ear care, senior planning, and breeder testing (CHIC/ACVO).',
        component: () =>
            import('./posts/what-health-issues-do-poodles-have') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Poodle',
    },
    {
        slug: 'why-do-some-dogs-howl-meaning-history-wild-cousins',
        title: 'Why Do Some Dogs Howl? Meaning, History, and Wild Cousins (Wolves, Coyotes & More)',
        date: 'August 26, 2025',
        description:
            'A fun, evidence-based deep dive into dog howling: meanings (contact, separation, territory, emotion), history from wolves to pets, wild cousins (wolves, coyotes, jackals), acoustics, red flags, and training triage—practical, vet-aware, and myth-busting.',
        component: () =>
            import('./posts/why-do-some-dogs-howl-meaning-history-wild-cousins') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'how-much-does-dog-boarding-and-daycare-software-cost-2025',
        title: 'How Much Does Dog Boarding & Daycare Software Cost in 2025?',
        date: 'August 26, 2025',
        description:
            'A 2025 pricing guide for kennel/daycare software: models, real-world ranges, add-ons (SMS/email/modules), hidden one-time fees, TCO math, migration tips—plus Petunia&rsquo;s $5/month plan for boarding & daycare with a 30-day free trial.',
        component: () =>
            import('./posts/how-much-does-dog-boarding-and-daycare-software-cost-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'petunia-pets-what-is-it',
        title: 'Petunia Pets: What It Is, Who Is It For, and How It Works',
        date: 'August 26, 2025',
        description:
            'Canonical brand explainer: what Petunia Pets is, who it serves (owners &amp; facilities), core features (real-time booking, vaccines, waivers, reminders, grooming add-ons), platforms (iOS &amp; web), quick start, support, and $5/month pricing for businesses (30-day free trial).',
        component: () =>
            import('./posts/petunia-pets-what-is-it') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'dog-boarding-checklist-what-to-bring-what-to-upload-when-to-book',
        title: 'Boarding Checklist: What to Bring, What to Upload, and When to Book',
        date: 'August 25, 2025',
        description:
            'Copy-ready boarding & daycare prep: packing list (food, meds, gear), upload steps (vaccines, vet info, emergency contacts), booking timelines, vaccine windows, intake forms, CIRDC/cough reschedule rules, and operator SOPs. Includes printable checklist + Petunia upload CTA.',
        component: () =>
            import('./posts/dog-boarding-checklist-what-to-bring-what-to-upload-when-to-book') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us',
        title:
            'Airline Pet Travel Is Shifting (Italy Allows Big Dogs In-Cabin): What U.S. Flyers Should Know Now',
        date: 'August 25, 2025',
        description:
            'ENAC’s 2025 guidelines for larger dogs in the cabin; how U.S. airline rules differ; United & Delta snapshots; carrier/restraint specs; seat planning; fees; CDC dog-import requirements; and copy-ready packing/booking/airport templates for holiday trips.',
        component: () =>
            import('./posts/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'pet-insurance-2025-costs-claims-coverage-guide-dogs',
        title:
            'Pet Insurance in 2025: Costs, Value, and How Claims Really Pay Out (Premium Trends, Deductible Math, and Break-Even Scenarios)',
        date: 'August 25, 2025',
        description:
            '2025 premium averages; why prices are rising (veterinary inflation, claim severity, reinsurance); top claims categories; step-by-step reimbursement math after deductible/co-insurance; break-even examples; 12 levers to lower premiums without gutting coverage.',
        component: () =>
            import('./posts/pet-insurance-2025-costs-claims-coverage-guide-dogs') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'tick-borne-disease-2025-lyme-anaplasmosis-dogs-prevention',
        title:
            'Ticks Are Surging in 2025: Lyme, Anaplasmosis & ER Visits—What That Means for Dogs (State Snapshots, Checklists, and Facility SOPs)',
        date: 'August 25, 2025',
        description:
            'News-validated surge with state snapshots (California anaplasmosis rise; New York tick submissions & positivity), national ER tick-bite trends, prevention options (monthly, 12-week, once-yearly), owner checklists, and boarding/daycare grooming & yard SOPs. Sources: Los Angeles Times (Aug 18, 2025), 11Alive/CDC (July 9, 2025), VCU Health (July 16, 2025), Times Union (July 2025).',
        component: () =>
            import('./posts/tick-borne-disease-2025-lyme-anaplasmosis-dogs-prevention') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'vet'],
    },
    {
        slug: 'fda-approves-12-month-flea-tick-injection-dogs-bravecto-quantum-2025',
        title:
            'FDA Approves the First 8–12-Month Flea & Tick Injection for Dogs (Bravecto Quantum): A Plain-English Guide for Owners & Boarding/Daycare Operators',
        date: 'August 25, 2025',
        description:
            'What the FDA approved on July 10, 2025; how the 8–12-month injection works; eligibility by age/weight; safety (isoxazoline class) and side effects; lone star tick caveat; cost vs. monthly/12-week orals; vet Q&A; owner and facility checklists.',
        component: () =>
            import('./posts/fda-approves-12-month-flea-tick-injection-dogs-bravecto-quantum-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'boarding', 'vet'],
    },
    {
        slug: 'best-chew-toys-for-heavy-chewers',
        title:
            'Best Chew Toys for Heavy Chewers: Materials, Sizing, Safer Picks, and Real-World Handling for Homes & Facilities',
        date: 'August 25, 2025',
        description:
            'Research-backed guide to power-chew safety: correct sizing to reduce choke risk, durable materials, specific brand/model picks, at-home hardness tests, cleaning and replacement rules, plus home and facility SOPs.',
        component: () =>
            import('./posts/best-chew-toys-for-heavy-chewers') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'fall-seasonal-allergies-in-dogs-usa',
        title:
            'Fall Seasonal Allergies in Dogs (U.S.): Causes, Timing by Region, Signs, Treatments, and a Practical Owner & Boarding Guide',
        date: 'August 24, 2025',
        description:
            'A U.S.-focused fall guide to canine allergies: ragweed and mold triggers, regional timing, paw/skin signs, at-home care, and veterinarian-directed treatments and immunotherapy.',
        component: () =>
            import('./posts/fall-seasonal-allergies-in-dogs-usa') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'allergy'],
    },
    {
        slug: 'best-dog-boarding-and-daycare-software-buyer-guide',
        title:
            'The Best Dog Boarding & Daycare Software? A No-Nonsense Buyer’s Guide (Frameworks, Checklists, Cost Math & Red Flags)',
        date: 'August 24, 2025',
        description:
            'A vendor-neutral evaluation playbook: feature checklists, TCO math, payment strategy trade-offs, data-portability, security, rollout plans, and negotiation tips.',
        component: () =>
            import('./posts/best-dog-boarding-and-daycare-software-buyer-guide') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'how-to-train-my-dog-to-sit',
        title:
            'How to Train My Dog to Sit: Gentle Methods, Age Readiness, Household Consistency, Breed Tips, Training Aids, and Troubleshooting',
        date: 'August 23, 2025',
        description:
            'A step-by-step, owner-focused sit guide: readiness checks by age and comfort, lure vs. shaping, adding cues and hand signals, proofing with the 3 D’s, multi-person consistency, breed notes, training aids, a 14-day plan, and gentle troubleshooting.',
        component: () =>
            import('./posts/how-to-train-my-dog-to-sit') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner', 'train'],
    },
    {
        slug: 'why-do-dogs-lick',
        title:
            'Why Do Dogs Lick? Self-Grooming, Affection, Communication, Health Signals, and When to Call the Vet',
        date: 'August 23, 2025',
        description:
            'Owner-focused guide to licking: what is normal vs. excessive, how to read body language, medical causes (allergies, skin infection, pain, nausea), and practical steps—decision tree, training plans, and home-care do’s and don’ts.',
        component: () =>
            import('./posts/why-do-dogs-lick') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['owner'],
    },
    {
        slug: 'digital-marketing-social-media-dog-boarding-daycare',
        title:
            'Digital Marketing & Social Media Strategies for Dog Boarding & Dog Daycare Businesses',
        date: 'August 23, 2025',
        description:
            'Full-funnel, local-first marketing playbook for boarding and daycare: positioning, website & SEO, Google Business Profile, reviews, organic Facebook/Instagram, short-form video, lightweight ads, email/SMS, partnerships, seasonal promos, KPIs, and copy-and-paste templates.',
        component: () =>
            import('./posts/digital-marketing-social-media-dog-boarding-daycare') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'ollies-law-kennel-safety-2025',
        title:
            '“Ollie’s Law” (2025): What It Is, How It Happened, Where It Applies, and What It Means for Dog Boarding & Daycare — With Global Context and Operator Playbooks',
        date: 'August 23, 2025',
        description:
            'Comprehensive, operator-focused guide to Massachusetts’ “Ollie’s Law”: origins, what the statute does, the 2024–2026 rollout timeline, global analogs (Iowa, UK, ACT Australia, NZ councils, Canadian cities), and how ratios, injury reporting, inspections, and training standards change economics. Includes cost modeling and practical playbooks.',
        component: () =>
            import('./posts/ollies-law-kennel-safety-2025') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'behavior-temperament-notes-dog-boarding-daycare-software',
        title:
            'Behavior & Temperament Notes in Dog Boarding Software & Dog Daycare Software: Safety, Group Play, Staff Matching, and Incident Prevention',
        date: 'August 23, 2025',
        description:
            'A practical, SEO-focused deep dive into behavior & temperament notes: standardized tags, assessments, staff matching, group play design, incident logging, and KPIs—why it matters and how software makes it reliable.',
        component: () =>
            import('./posts/behavior-temperament-notes-dog-boarding-daycare-software') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'medication-administration-tracking-dog-boarding-daycare-software',
        title:
            'Medication Administration Tracking in Dog Boarding Software & Dog Daycare Software: Safety, Workflow Design, Compliance, and Real-World ROI',
        date: 'August 23, 2025',
        description:
            'A practical, SEO-focused deep dive into medication administration tracking: structured intake, MAR logs, double-check protocols, controlled substances, incident reporting, owner communication, and KPIs—why it matters and how software makes it reliable.',
        component: () =>
            import('./posts/medication-administration-tracking-dog-boarding-daycare-software') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'feeding-schedule-management-dog-boarding-daycare-software',
        title:
            'Feeding Schedule Management in Dog Boarding Software & Dog Daycare Software: Safety, Kitchen SOPs, Automation, and Real-World ROI',
        date: 'August 23, 2025',
        description:
            'A practical, SEO-focused deep dive into feeding schedule management for boarding and daycare: precise intake, kitchen SOPs, cross-contact controls, automation, shift handoffs, reporting, and KPIs—why it matters and how software makes it effortless.',
        component: () =>
            import('./posts/feeding-schedule-management-dog-boarding-daycare-software') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'vaccination-tracking-alerts-dog-boarding-daycare-software',
        title:
            'Vaccination Tracking & Alerts for Dog Boarding & Dog Daycare Software: Safety, Compliance, Automation & Real-World ROI',
        date: 'August 23, 2025',
        description:
            'Why vaccination tracking and automated alerts are mission-critical in dog boarding & dog daycare software. Learn core vs non-core vaccines, regional nuance, airtight policy design, booking enforcement, owner uploads, audit-ready reporting, and the KPIs that move occupancy, safety, and trust.',
        component: () =>
            import('./posts/vaccination-tracking-alerts-dog-boarding-daycare-software') as Promise<{
                default: React.ComponentType<object>;
            }>,
        categories: ['boarding'],
    },
    {
        slug: 'allergy-diet-tracking-dog-boarding-daycare-software',
        title:
            'Allergy & Diet Tracking in Dog Boarding Software and Dog Daycare Software',
        date: 'August 23, 2025',
        description:
            'Why precise allergy and diet tracking matters: structured profiles, kitchen SOPs, cross-contact controls, automation, and KPIs that reduce GI upsets and build client trust.',
        component: () =>
            import('./posts/allergy-diet-tracking-dog-boarding-daycare-software') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'comprehensive-pet-client-profiles-boarding-daycare-software',
        title:
            'Comprehensive Pet & Client Profiles in Dog Boarding Software and Dog Daycare Software',
        date: 'August 23, 2025',
        description:
            'Why deep, structured pet and client profiles power safety, speed, and trust: eligibility checks, meds/feeding, vaccine & waiver snapshots, permissions, automation, KPIs, and multi-location.',
        component: () =>
            import('./posts/comprehensive-pet-client-profiles-boarding-daycare-software') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'realtime-reservations-online-booking-dog-boarding-daycare-software',
        title:
            'Real-Time Reservations & Online Booking in Dog Boarding Software and Dog Daycare Software',
        date: 'August 23, 2025',
        description:
            'How live availability, deposits, capacity rules, vaccine/waiver gates, and waitlists raise occupancy and cut admin in dog boarding software and dog daycare software.',
        component: () =>
            import('./posts/realtime-reservations-online-booking-dog-boarding-daycare-software') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025',
        title:
            'Kennel Cough (CIRDC): The 2025 Global Guide for Owners and Boarding & Daycare Facilities (U.S., Canada, U.K., Ireland, Australia & New Zealand)',
        date: 'August 22, 2025',
        description:
            'International, evidence-aligned guide to kennel cough (CIRDC): what it is, how it spreads, life-stage treatment (puppies, adults, seniors), prevention beyond staying home, vaccine roles (Bordetella/CPIV, canine influenza), isolation timelines, and protecting seniors when younger dogs attend daycare or boarding.',
        component: () =>
            import('./posts/kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'kennel-cough-guide-pittsburgh-boarding-daycare-2025',
        title:
            'Kennel Cough (CIRDC) in Pittsburgh: A Practical, Evidence-Informed Guide for Owners and Boarding & Daycare Facilities',
        date: 'August 22, 2025',
        description:
            'Pittsburgh-aware guide to kennel cough (CIRDC): what it is, how it spreads, life-stage treatment (puppies, adults, seniors), realistic prevention beyond staying home, vaccine roles (Bordetella/CPIV, CIV), isolation/return-to-daycare timelines, and protecting seniors when younger dogs attend daycare or boarding.',
        component: () =>
            import('./posts/kennel-cough-guide-pittsburgh-boarding-daycare-2025') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'does-my-dog-need-teeth-cleaning',
        title:
            'Does My Dog Need Teeth Cleaning? A Complete Owner\u2019s Guide to Dental Health, Costs, Insurance, Chews, and Senior Anesthesia Decisions',
        date: 'August 22, 2025',
        description:
            'Evidence-aligned guide to canine dental care: when cleanings are needed, what a COHAT includes, typical costs, insurance coverage, VOHC-accepted chews, and safe anesthesia for seniors.',
        component: () =>
            import('./posts/does-my-dog-need-teeth-cleaning') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'vet'],
    },
    {
        slug: 'what-vaccines-should-you-give-to-elderly-dogs',
        title:
            'What Vaccines Should You Give to Elderly Dogs? Lifespan Schedules, Senior-Specific Adjustments, Side Effects, Geography, and Multi-Dog Household Strategy',
        date: 'August 22, 2025',
        description:
            'A practical, evidence-aligned guide to vaccinating senior dogs: what stays the same from puppyhood through middle age, what changes with immunosenescence, which vaccines matter most by region and lifestyle, how to minimize side effects in small-breed and high-risk seniors, and how younger housemates affect decisions.',
        component: () => import('./posts/what-vaccines-should-you-give-to-elderly-dogs'),
        categories: ['owner', 'boarding', 'vet'] as const,
    },
    {
        slug: 'does-my-dog-need-the-influenza-shot',
        title:
            'Does My Dog Need the Influenza Shot? History, Risk-Based Decisions, Side Effects, Facility Requirements, and a Practical Owner Checklist',
        date: 'August 22, 2025',
        description:
            'Owner-focused guide to the canine influenza (dog flu) vaccine: how H3N2/H3N8 emerged, what bivalent vaccines do, who truly needs it (risk-based, noncore), how to time the 2-dose series before boarding/daycare, common side effects, why some facilities require it and others do not, and a quick decision tool to use with your veterinarian.',
        component: () => import('./posts/does-my-dog-need-the-influenza-shot'),
        categories: ['owner', 'boarding', 'vet'],
    },
    {
        slug: 'grooming-tips-for-labrador-retrievers',
        title:
            'Grooming Tips for Labrador Retrievers: Real-World Shedding Control, Bathing, Tools, Costs, Nutrition for a Healthy Coat, and Owner Checklists',
        date: 'August 22, 2025',
        description:
            'A comprehensive, owner-tested grooming guide for Labrador Retrievers. Learn how to control shedding, set a weekly and seasonal routine, choose the right brushes and dryers, pick safe shampoos and conditioners, understand groomer costs, and support a glossy coat with nutrition and supplements.',
        component: () => import('./posts/grooming-tips-for-labrador-retrievers'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'what-tick-borne-illnesses-can-dogs-get',
        title:
            'What Tick-Borne Illnesses Can Dogs Get? The 7 Big Ones (Vectors, Regions, Signs, Treatment, and Which Dogs Are at Higher Risk)',
        date: 'August 21, 2025',
        description:
            'Clear, evidence-aligned guide to seven major tick-borne diseases in dogs—Lyme disease, Ehrlichiosis, Anaplasmosis, Babesiosis, Rocky Mountain spotted fever, Bartonellosis, and Hepatozoonosis—including the tick species that transmit each, regional patterns, hallmark signs, typical veterinary treatments, co-infection notes, and prevention you can put into practice today.',
        component: () => import('./posts/what-tick-borne-illnesses-can-dogs-get'),
        categories: ['owner'],
    },
    {
        slug: 'should-a-dogs-nose-be-wet-or-dry',
        title:
            'Should a Dog’s Nose Be Wet or Dry? A Clear Owner’s Guide to What’s Normal, What’s Not, and How to Care for Dry, Cracked, or Sunburned Noses',
        date: 'August 2, 2025',
        description:
            'Wet vs. dry isn’t a health test. Learn what nose moisture actually means, when dryness and cracking signal disease, how climate and breed affect the nasal planum, and which dog-safe products protect and heal—plus red flags that warrant a vet visit.',
        component: () => import('./posts/should-a-dogs-nose-be-wet-or-dry'),
        categories: ['owner'],
    },
    {
        slug: 'how-to-choose-the-right-dog-breed',
        title:
            'How to Choose the Right Dog Breed: A Clear, Practical Owner’s Guide to Time, Lifestyle, Budget, Training, Socialization, Size, and Real-World Constraints',
        date: 'August 21, 2025',
        description:
            'Evidence-aligned framework to pick a breed that fits real life: time to train, lifestyle, disposable income and total cost of ownership, socialization effort, size/space, housing or insurance restrictions, grooming and health needs, ethical sourcing, and a first-year success plan.',
        component: () => import('./posts/how-to-choose-the-right-dog-breed'),
        categories: ['owner'],
    },
    {
        slug: 'tracking-medications-in-dog-boarding-software',
        title:
            'Tracking Medications in Dog Boarding Software: Multi-Day Safety, Overnight Protocols, and Petunia’s Real-Time Workflow from Pre-Arrival to Check-Out',
        date: 'August 12, 2025',
        description:
            'Boarding-focused med safety: owner-built profiles surface pre-arrival in Upcoming Reservations and persist in Dogs on Property, with real-time admin logs, appetite-dependent dosing rules, insulin co-signs, seizure plans, chain-of-custody counts, and shift-proof overnight routines.',
        component: () => import('./posts/tracking-medications-in-dog-boarding-software'),
        categories: ['boarding'],
    },
    {
        slug: 'tracking-medications-in-dog-daycare-software',
        title:
            'Tracking Medications in Dog Daycare Software: Real-Time Safety, Clear Protocols, and the Petunia Workflow from Check-In to Check-Out',
        date: 'August 21, 2025',
        description:
            'How Petunia centralizes owner-entered meds and surfaces them in Client Management, Upcoming Appointments, and Dogs on Property—plus practical guardrails for diabetic and seizure-prone dogs, SOP checklists, and real-time logs powered by a Realtime Database.',
        component: () => import('./posts/tracking-medications-in-dog-daycare-software'),
        categories: ['boarding'],
    },
    {
        slug: 'how-long-are-dogs-pregnant',
        title:
            'How Long Are Dogs Pregnant? Gestation Timeline, Week-by-Week Development, Signs, Red Flags, Whelping, and Postpartum Care (With Vet-Backed Sources)',
        date: 'August 20, 2025',
        description:
            'Evidence-informed guide to canine pregnancy: true gestation length (from ovulation vs breeding), diagnostics (relaxin, ultrasound, radiographs), week-by-week fetal development, trimester nutrition and exercise, whelping prep, labor stages and red flags, C-section planning, and postpartum care—plus printable checklists.',
        component: () => import('./posts/how-long-are-dogs-pregnant'),
        categories: ['breeder'],
    },
    {
        slug: 'why-do-dogs-wag-their-tails',
        title: 'Why Do Dogs Wag Their Tails? What Wags Really Mean (and Don’t), How to Read Context, and Practical Safety/Training Tips for Every Age',
        date: 'July 7, 2025',
        description:
            'Evidence-informed guide to tail language: why wags happen, left–right asymmetry, speed/height/stiffness variables, breed and tail-shape caveats, life-stage nuances, safety with kids, training applications, daycare/boarding context, and health issues like “limber tail.”',
        component: () => import('./posts/why-do-dogs-wag-their-tails'),
        categories: ['owner'],
    },
    {
        slug: 'how-much-does-a-cane-corso-cost-to-own',
        title: 'How Much Does a Cane Corso Cost to Own? Purchase vs Adoption, Food by Life Stage, Healthcare, Insurance Math, Boarding/Daycare, Gear, and Lifetime Total',
        date: 'July 15, 2025',
        description:
            'Numbers-driven ownership costs: purchase vs adoption, food by life stage, preventive care, parasite prevention, dental, emergencies and big surgeries, insurance vs self-insure, daycare and boarding, training and gear, plus a lifetime total with sample budgets.',
        component: () => import('./posts/how-much-does-a-cane-corso-cost-to-own'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'how-big-are-cane-corsos',
        title: 'How Big Are Cane Corsos? Realistic Weights by Age, Feeding Amounts, Gear Sizes, and True Cost of Care',
        date: 'July 25, 2025',
        description:
            'Complete size and cost guide: height and weight by life stage, growth curves, daily food needs and budgets, bed and crate sizing, harness and leash choices, travel and home space planning, and realistic vet and surgery costs for large dogs.',
        component: () => import('./posts/how-big-are-cane-corsos'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'are-cane-corsos-an-active-breed',
        title: 'Are Cane Corsos an Active Breed? Exercise, Mental Work, Joint Health, Diet, and Socialization by Life Stage',
        date: 'August 5, 2025',
        description:
            'Life-stage activity guide for Cane Corsos: daily exercise targets, enrichment and mental work, joint health and supplements, diet and body condition, socialization and public neutrality, safety in heat and cold, sample weekly plans, and a first-90-days program.',
        component: () => import('./posts/are-cane-corsos-an-active-breed'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'do-cane-corsos-have-health-issues',
        title: 'Do Cane Corsos Have Health Issues? A Life-Stage Guide to Risks, Prevention, Realistic Costs, and Insurance Decisions',
        date: 'August 10, 2025',
        description:
            'Life-stage health guide for Cane Corsos: growth and joints, skin/ears, eyes, cardiac, GI and bloat awareness, neurology, endocrine, dental, parasites, weight and nutrition, exercise programming, owner screening timeline, realistic U.S. cost ranges, and an insurance decision framework.',
        component: () => import('./posts/do-cane-corsos-have-health-issues'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'are-cane-corsos-good-family-dogs',
        title: 'Are Cane Corsos Good Family Dogs? A Practical, Evidence-Informed Guide by Life Stage, Household Type, and Training Commitment',
        date: 'August 20, 2025',
        description:
            'Evidence-informed guide covering temperament, babies through older adults, busy families, training difficulty, socialization and neutrality, home management, multi-pet tips, boarding/daycare fit, health basics, insurance/legal considerations, a decision framework, and a first-90-days plan.',
        component: () => import('./posts/are-cane-corsos-good-family-dogs'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Cane Corso',
    },
    {
        slug: 'understanding-dog-body-language',
        title: 'Understanding Dog Body Language: A Practical, Evidence-Informed Guide for Everyday Life',
        date: 'August 6, 2025',
        description:
            'Read your dog’s signals with confidence—happy wiggles, play bows, and early stress cues (lip-licks, yawns, whale eye). Evidence-informed guidance using AAHA/AVSAB standards, DogFACS insights, ladder-of-aggression context, and step-by-step scenarios for greetings, play, grooming, vet visits, and more.',
        component: () => import('./posts/understanding-dog-body-language'),
        categories: ['owner'],
        breed: 'All Breeds (Behavior)',
    },
    {
        slug: 'do-dogs-only-see-black-and-white',
        title: 'Do Dogs Only See Black and White? The Science of Canine Color, Motion, and Low-Light Vision',
        date: 'July 19, 2025',
        description:
            'Evidence-informed deep dive into canine vision: dogs are blue–yellow dichromats (not black-and-white only), with rod-heavy retinas, tapetal reflection, fast motion/flicker perception, and different acuity. Practical guidance for toys, training, agility, home design, and senior support—plus sources.',
        component: () => import('./posts/do-dogs-only-see-black-and-white'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'All Breeds (Vision)',
    },
    {
        slug: 'what-does-hypoallergenic-mean',
        title: 'What Does Hypoallergenic Mean? Myths, Allergens, and Picking the Right Dog',
        date: 'August 7, 2025',
        description:
            'Clear, evidence-informed definition of “hypoallergenic,” why no dog is truly allergen-free, how Can f proteins work, and how coat genetics (RSPO2/KRT71/FGF5 + shedding signals) shape real-world variability. Includes breed profiles often recommended for allergy-aware homes, a buyer checklist, and a layered home allergy plan.',
        component: () => import('./posts/what-does-hypoallergenic-mean'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'All Breeds (Allergy & Coat Science)',
    },
    {
        slug: 'do-doodles-shed-fact-or-fiction',
        title: 'Do Doodles Shed? Fact or Fiction — Science, Genetics, and Buying Smart',
        date: 'August 3, 2025',
        description:
            'Evidence-informed deep dive on doodle shedding: allergy biology (Can f allergens), why “hypoallergenic” claims are misleading, and how RSPO2 furnishings + MC5R shedding genotypes shape outcomes. Includes buyer checklist, grooming cadence, and allergen-management strategies with sources.',
        component: () => import('./posts/do-doodles-shed-fact-or-fiction'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Doodles (Poodle Mixes)',
    },
    {
        slug: 'where-do-rescue-dogs-come-from',
        title:
            'Where Do Rescue Dogs Come From? A Data-Only, U.S.-Focused Overview of Intake Sources (Strays, Owner Surrenders, Transfers, Seizures, and More)',
        date: 'July 7, 2025',
        description:
            'Factual, source-backed origins of U.S. rescue dogs: strays, owner surrenders, transfers, confiscations/hoarding, born-in-care, and imports; methods and limitations included.',
        component: () => import('./posts/where-do-rescue-dogs-come-from'),
        categories: ['rescue', 'owner', 'breeder'],
    },
    {
        slug: 'breeder-questions-responsible-answers',
        title: 'Questions Responsible Breeders Should Be Ready to Answer (and Prove): A Practical, Evidence-Informed Foundation for Puppy Buyers',
        date: 'June 12, 2025',
        description:
            'Source-backed foundation for breeders: multi-modal health testing (OFA/CHIC, BVA, PennHIP), Brucella canis screening, pregnancy/whelping/neo care, early socialization and temperament matching, vaccination/deworming/microchip records, contracts & pet-purchase laws, genetic diversity (COI/EBV), and lifetime support.',
        component: () => import('./posts/breeder-questions-responsible-answers'),
        categories: ['breeder', 'owner'],
    },
    {
        slug: 'fun-facts-about-german-shepherds',
        title: 'Fun Facts About German Shepherds: History, Jobs, Coats, Training, and Everyday Life (With Sources)',
        date: 'August 19, 2025',
        description:
            'Long-form, source-backed fun facts about the German Shepherd Dog: origins (von Stephanitz), work roles (guide, SAR, detection), coat types and colors, Panda/KIT genetics, training and exercise needs, health awareness (hips/elbows/DM), and practical life tips.',
        component: () => import('./posts/fun-facts-about-german-shepherds'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'bringing-home-a-new-puppy-first-two-weeks',
        title: 'Bringing Home a New Puppy: A Practical, Evidence-Informed Guide to the First Two Weeks',
        date: 'August 19, 2025',
        description:
            'A step-by-step, vet-aligned plan for the first 14 days: potty training, crate & sleep routines, safe early socialization before full vaccinations, leash basics, alone-time skills, and health checklists.',
        component: () => import('./posts/bringing-home-a-new-puppy-first-two-weeks'),
        categories: ['owner', 'train'],
    },
    {
        slug: 'good-housekeeping-dog-food-roundup-analysis-2025',
        title: 'Does Good Housekeeping\'s "9 Best Dog Food Brands" Use Real Science? A Factual Review and Owner\'s Guide',
        date: 'August 19, 2025',
        description:
            'Source-backed analysis of Good Housekeeping’s 2025 “9 Best Dog Food Brands” roundup: what their methodology includes (and doesn’t), what counts as science in pet nutrition, AAFCO/WSAVA context, and an owner workflow for evidence-based diet selection.',
        component: () => import('./posts/good-housekeeping-dog-food-roundup-analysis-2025'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'fda-raw-pet-food-advisory-july-2025',
        title: 'FDA Advises: Do Not Feed Certain Darwin’s Raw Dog Food Lots; FDA Warning Letter to Answers Pet Food — A Practical Owner’s Guide to Risks, Symptoms, Cleanup, Reporting & Refunds',
        date: 'August 19, 2025',
        description:
            'Evidence-based summary of FDA’s July 2025 Darwin’s advisory (E. coli O157:H7 and Salmonella) and FDA Warning Letter to Answers Pet Food, plus human/pet symptoms, safe cleanup, reporting steps, and refund/return guidance.',
        component: () => import('./posts/fda-raw-pet-food-advisory-july-2025'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'how-to-choose-the-right-dog-food',
        title: 'How to Choose the Right Dog Food',
        date: 'July 14, 2025',
        description:
            'A complete, evidence-informed owner’s guide to label literacy, portion math, sensitivities and elimination trials, exercise fueling, grain vs. grain-free context, storage/recalls, and operator-grade checklists.',
        component: () => import('./posts/how-to-choose-the-right-dog-food'),
        categories: ['owner', 'food'],
    },
    {
        slug: 'how-to-train-a-dog',
        title:
            'How to Train a Dog: A Humane, Evidence-Informed Playbook (Foundation Skills, Real-World Routines, and Behavior Change that Lasts)',
        date: 'July 16, 2025',
        description:
            'A complete, owner-friendly training system grounded in modern learning science and welfare: setup checklists, marker training, reinforcement strategy, leash skills, recall, impulse control, cooperative care, socialization, enrichment, and behavior first-aid.',
        component: () => import('./posts/how-to-train-a-dog'),
        categories: ['owner', 'train'],
    },
    {
        slug: 'why-do-dogs-eat-grass',
        title:
            'Why Do Dogs Eat Grass? A Vet-Informed, Owner-Friendly Guide (Myths, What’s Normal vs Concerning, Risks, and What to Do)',
        date: 'July 17, 2025',
        description:
            'Dogs grazing on grass is common and usually normal. This post explains the evidence, what’s normal vs concerning, real risks (chemicals, parasites, toxic plants), and a practical checklist-driven plan to manage it safely.',
        component: () => import('./posts/why-do-dogs-eat-grass'),
        categories: ['owner'],
    },
    {
        slug: 'how-to-select-a-dog-to-adopt',
        title:
            'How to Select a Dog to Adopt: A Practical, Evidence-Informed Playbook (Lifestyle Fit, Behavior, Health, and a 30-Day Success Plan)',
        date: 'August 18, 2025',
        description:
            'Step-by-step adoption guide covering lifestyle fit, temperament evaluation, health and age trade-offs, a structured meet-and-greet, and a 30-day onboarding plan with checklists.',
        component: () => import('./posts/how-to-select-a-dog-to-adopt'),
        categories: ['owner', 'rescue'],
    },
    {
        slug: 'what-health-problems-are-common-in-german-shepherds',
        title:
            'What Health Problems Are Common in German Shepherds? A Practical, Evidence-Informed Owner’s Guide (Screens, Prevention & When to See the Vet)',
        date: 'December 25, 2025',
        description:
            'A deep, owner-friendly dive into common GSD health issues—hips/elbows, spine (lumbosacral stenosis), degenerative myelopathy, GI diseases (EPI, IBD, megaesophagus), bloat/GDV, skin & immune disease (atopy, pyoderma, perianal fistulas), eye disease (pannus), cancers (e.g., hemangiosarcoma), and rarer conditions (pituitary dwarfism)—plus prevention, screening timelines, and red-flag checklists.',
        component: () => import('./posts/what-health-problems-are-common-in-german-shepherds'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'are-german-shepherds-good-with-kids',
        title: 'Are German Shepherds Good Family Dogs—and Good with Kids? A Practical, Evidence-Informed Owner Guide',
        date: 'July 19, 2025',
        description:
            'A calm, step-by-step framework to decide whether a German Shepherd fits a family with children—temperament, age choices, socialization, home setup (zones, gates, gear), training plans, play rules, visitor SOPs, red flags, and printable checklists.',
        component: () => import('./posts/are-german-shepherds-good-with-kids'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'are-german-shepherds-aggressive-or-dangerous',
        title: 'Are German Shepherds Aggressive or Dangerous? A Data-Informed Owner’s Guide to Temperament, Risk, and Real-World Management',
        date: 'July 21, 2025',
        description:
            'A balanced, evidence-informed look at German Shepherd temperament and bite risk—what the data do and do not say; how genetics, early socialization, training methods, health, and management shape behavior; line differences; scenario-based prevention; operator-grade checklists; and when to seek professional help.',
        component: () => import('./posts/are-german-shepherds-aggressive-or-dangerous'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'how-much-does-a-german-shepherd-cost',
        title: 'How Much Does a German Shepherd Cost? Real Purchase Prices, Regional Costs, and the True Cost of Ownership',
        date: 'July 22, 2025',
        description:
            'A German Shepherd’s purchase price is the smallest line on a much bigger budget. This evidence-informed guide breaks down acquisition costs, first-year setup, food and medical care, insurance, training, grooming, dog-walking/daycare/boarding fees, and regional price differences across the U.S. (plus UK/Canada/Australia). Includes realistic monthly/annual budgets, lifetime scenarios, and cost-control tactics—without cutting corners on health or welfare.',
        component: () => import('./posts/how-much-does-a-german-shepherd-cost'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'what-type-of-dog-is-best-for-me',
        title: 'What Type of Dog Is Best for Me? A Practical, Evidence-Informed Owner Guide',
        date: 'August 17, 2025',
        description:
            'A step-by-step framework to choose a dog that truly fits your life—time, space, energy, grooming, health risks, and budget—with lifestyle archetypes, printable checklists, and vetted sources.',
        component: () => import('./posts/what-type-of-dog-is-best-for-me'),
        categories: ['owner'],
    },
    {
        slug: 'how-long-do-german-shepherds-live',
        title: 'How Long Do German Shepherds Live? Longevity, Healthspan, and a Practical Owner Playbook',
        date: 'August 15, 2025',
        description:
            'A data-informed lifespan guide for German Shepherd Dogs: averages and ranges, what shortens life, and what extends healthspan—weight control, nutrition, exercise, dental care, parasite prevention, GDV risk, genetics (hips, elbows, DM, EPI), and senior plans—with checklists and sources.',
        component: () => import('./posts/how-long-do-german-shepherds-live'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'do-german-shepherds-shed-a-lot',
        title: 'Do German Shepherds Shed a Lot? Coat Science, Grooming Plans, and Real-World Home Strategies',
        date: 'August 16, 2025',
        description:
            'A practical, evidence-informed guide to German Shepherd shedding: double-coat basics, seasonal coat blows, step-by-step grooming (slicker/rake/HV-dry), bathing cadence, skin/coat nutrition, allergy-friendly home routines, vet red flags, and printable checklists.',
        component: () => import('./posts/do-german-shepherds-shed-a-lot'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
    },
    {
        slug: 'dog-daycare-incident-reports',
        title: 'Dog Daycare Incident Reports: Read, Respond, and Resolve (Templates Inside)',
        date: 'July 23, 2025',
        description:
            'A calm, step-wise guide to reading daycare incident reports, triaging injuries, communicating with the facility, documenting expenses, and choosing a resolution path—plus copy/paste templates and a vet-visit decision flow.',
        component: () => import('./posts/dog-daycare-incident-reports'),
        categories: ['owner', 'daycare'],
    },
    {
        slug: 'how-many-dogs-per-attendant',
        title: 'How Many Dogs per Attendant? Daycare Ratios, Supervision & a Tour Checklist',
        date: 'July 24, 2025',
        description:
            'What “ratio” really means (and what it doesn’t): staff-to-dog ratios, line-of-sight supervision, risk variables, training standards, laws & guidance, a conditions-based comparison table, and a 15-question owner tour checklist.',
        component: () => import('./posts/how-many-dogs-per-attendant'),
        categories: ['owner', 'daycare'],
    },
    {
        slug: 'can-intact-dogs-go-to-daycare',
        title: 'Can Intact Dogs Go to Daycare? Policies, Behavior Risks & Alternatives',
        date: 'July 25, 2025',
        description:
            'Respectful, evidence-informed guidance for families with intact dogs: why many daycares restrict admission, behavior and hormonal realities, estrus safety, insurance/operations drivers, better alternatives, planning around heat cycles, and a practical weekly enrichment plan.',
        component: () => import('./posts/can-intact-dogs-go-to-daycare'),
        categories: ['owner', 'daycare'],
    },
    {
        slug: 'boarding-when-your-dog-has-special-needs-reactivity-seizures-diabetes',
        title: 'Boarding When Your Dog Has Special Needs (Reactivity, Seizures, Diabetes)',
        date: 'July 27, 2025',
        description:
            'Evidence-informed boarding plan for behaviorally or medically complex dogs—reactivity/anxiety, seizure disorders, diabetes, cardiac/renal disease, allergies, mobility, seniors. Includes decision trees, packing lists, staff scripts, and printable logs.',
        component: () => import('./posts/boarding-when-your-dog-has-special-needs-reactivity-seizures-diabetes'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'quiet-nights-in-boarding-noise-lighting-and-rest',
        title: 'Quiet Nights in Boarding: Noise, Lighting & Rest—What the Research Says',
        date: 'July 28, 2025',
        description:
            'Evidence-based overnight blueprint for kennels: realistic decibel ranges, lighting/circadian guidance, quiet-hour protocols, enrichment for sleep, measurement plans, and safety notes for staff and dogs.',
        component: () => import('./posts/quiet-nights-in-boarding-noise-lighting-and-rest'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'dog-daycare-and-boarding-waivers-explained',
        title: 'Dog Daycare & Boarding Waivers Explained: Real Scenarios, Your Rights & Smart Next Steps',
        date: 'July 29, 2025',
        description:
            'Plain-English deep dive into pet-care waivers—what you’re signing, common clauses decoded, negligence vs. gross negligence, state consumer-notice rules, and stepwise owner templates for calm, effective resolution after an incident.',
        component: () => import('./posts/dog-daycare-and-boarding-waivers-explained'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'do-kennels-accept-titer-tests',
        title: 'Do Kennels Accept Titer Tests? State Rules, Facility Policies & What to Ask',
        date: 'July 30, 2025',
        description:
            'Plain-language guide to using antibody titer tests for boarding/daycare: what titers actually show, U.S. rabies-law realities, when facilities say yes/no, examples from state and city rules, how to ask your kennel, and printable checklists.',
        component: () => import('./posts/do-kennels-accept-titer-tests'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'dog-daycare-and-boarding-laws-by-state-2025',
        title: 'Dog Daycare & Boarding Laws by State (2025 Owner’s Guide)',
        date: 'August 1, 2025',
        description:
            'Plain-English, owner-first guide to how U.S. daycare and boarding rules work, how to verify licenses fast, what waivers and consumer notices mean, what inspections usually cover, and where to find official state or city links (with examples).',
        component: () => import('./posts/dog-daycare-and-boarding-laws-by-state-2025'),
        categories: ['owner', 'boarding'],
    },
    {
        slug: 'dog-food-ingredients-to-avoid',
        title: 'Dog Food Ingredients to Avoid: An Evidence-Based Checklist',
        date: 'August 2, 2025',
        description:
            'Complete, fully cited guide to decoding dog-food labels and avoiding problem ingredients—covering regulations, processing effects, life-stage specifics, DCM context, packaging exposures, and a printable label-audit checklist.',
        component: () => import('./posts/dog-food-ingredients-to-avoid'),
        categories: ['owner', 'vet', 'food'],
    },
    {
        slug: 'do-labrador-retrievers-make-good-therapy-dogs',
        title: 'Do Labrador Retrievers Make Good Therapy Dogs? An Evidence-Informed Guide for Owners, Handlers & Facilities',
        date: 'August 3, 2025',
        description:
            'Labs are friendly, biddable, and people-focused—excellent candidates for therapy work when paired with the right temperament, solid training (CGC → registry), and welfare-first infection control. This guide covers settings where Labs shine, breed-specific watch-outs, handler/facility SOPs, insurance, ethics, and copy-paste checklists.',
        component: () => import('./posts/do-labrador-retrievers-make-good-therapy-dogs'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'how-much-does-it-cost-to-own-a-golden-retriever',
        title: 'How Much Does It Cost to Own a Golden Retriever? A Full, Evidence-Informed Budget Guide',
        date: 'August 5, 2025',
        description:
            'Realistic first-year and annual costs to own a Golden Retriever—food math, veterinary care, vaccines, preventives, grooming, training, insurance, boarding/daycare, and emergency planning—plus low/median/high budget templates you can copy-paste. Sources included.',
        component: () => import('./posts/how-much-does-it-cost-to-own-a-golden-retriever'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever',
    },
    {
        slug: 'golden-retriever-life-expectancy',
        title: 'What Is the Life Expectancy of Golden Retrievers? An Evidence-Based Owner’s Guide',
        date: 'August 14, 2025',
        description:
            'Most Golden Retrievers live 10–12 years. This operator-grade guide explains what “life expectancy” means, why cancer looms large for the breed, and the concrete levers—genetics, weight, preventive care, and environment—that can add healthy months to years. Includes checklists, owner SOPs, and vetted sources.',
        component: () => import('./posts/golden-retriever-life-expectancy'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'what-houseplants-are-safe-for-pets',
        title: 'What Houseplants Are Safe for Pets? An Evidence-Informed Owner’s Guide',
        date: 'August 6, 2025',
        description:
            'Vet-informed, practical list of pet-safe houseplants (with Latin names), risky look-alikes to avoid, room-by-room checklists, and an emergency playbook for multi-pet homes.',
        component: () => import('./posts/what-houseplants-are-safe-for-pets'),
        categories: ['owner']
    },
    {
        slug: 'types-of-golden-retrievers',
        title: 'Are There Different Types of Golden Retrievers? Types, Similarities & Differences (Owner’s Guide)',
        date: 'August 13, 2025',
        description:
            'Do Golden Retrievers come in different types? Regional styles (American, British, Canadian), field vs. show lines, the “English cream” myth, similarities, differences, and how to choose the right fit—plus checklists.',
        component: () => import('./posts/types-of-golden-retrievers'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'what-health-issues-do-golden-retrievers-have',
        title: 'What Health Issues Do Golden Retrievers Have? A Practical, Vet-Informed Guide for Families',
        date: 'August 7, 2025',
        description:
            'Common Golden Retriever health problems—cancer risks, skin & ear disease, orthopedic issues, eyes (GRPU, cataracts), heart screening, hypothyroidism, ichthyosis, GI emergencies—plus operator-grade checklists and life-stage care.',
        component: () => import('./posts/what-health-issues-do-golden-retrievers-have'),
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'do-golden-retrievers-shed-a-lot',
        title: 'Do Golden Retrievers Shed a Lot? The Complete Owner’s Guide to Shedding, Allergies, and Coat Care',
        date: 'August 10, 2025',
        description:
            'Yes—Golden Retrievers shed. This expert guide covers coat biology, seasonal “coat blow,” allergy realities and home allergen control, grooming tools and weekly SOPs, bath/condition/dry protocols, nutrition for skin/coat, medical red flags, and copy/paste checklists to keep hair under control.',
        component: () =>
            import('./posts/do-golden-retrievers-shed-a-lot') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'are-golden-retrievers-good-family-dogs',
        title: 'Are Golden Retrievers Good Family Dogs? An Expert, Real-World Guide',
        date: 'August 11, 2025',
        description:
            'An evidence-informed, real-world guide to whether Golden Retrievers are good family dogs: temperament, kid-safety systems, training/enrichment, exercise needs, grooming/shedding, health focus, budgeting, adoption vs. breeder, travel/boarding policies, and checklists.',
        component: () =>
            import('./posts/are-golden-retrievers-good-family-dogs') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'golden-retriever-puppy-training-complete-guide-8-weeks-to-18-months',
        title:
            'Golden Retriever Puppy Training: The Complete Guide from 8 Weeks to 18 Months',
        date: 'August 12, 2025',
        description:
            'A complete, evidence-informed training playbook for Golden Retriever puppies from 8 weeks to 18 months. Covers socialization, house/crate training, leash skills, recall, bite-inhibition, alone-time training, enrichment, adolescence, safety red flags, and operator-grade checklists and templates—with veterinary-sourced citations.',
        component: () =>
            import(
                './posts/golden-retriever-puppy-training-complete-guide-8-weeks-to-18-months'
            ),
        categories: ['owner', 'breed_specific_guides'] as const,
        breed: 'Golden Retriever',
    },
    {
        slug: 'boarding-and-daycare-tips-for-golden-retrievers',
        title: 'Boarding & Daycare Tips for Golden Retrievers: A Complete Owner’s Guide',
        date: 'August 8, 2025',
        description:
            'Evidence-informed, operator-grade guidance to board or enroll a Golden Retriever in daycare safely: readiness, vaccines, ear/skin care after water, hot-spot prevention, weight & orthopedic protection, heat/water safety, rest architecture, enrichment, incident escalation, and checklists. Professional sources included.',
        component: () =>
            import('./posts/boarding-and-daycare-tips-for-golden-retrievers') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding', 'breed_specific_guides'],
        breed: 'Golden Retriever'
    },
    {
        slug: 'are-there-different-types-of-french-bulldogs',
        title: 'Are There Different Types of French Bulldogs? Colors, Coats, “Fluffies,” and What Actually Matters',
        date: 'April 4, 2025',
        description:
            'One breed, many looks: recognized colors/patterns (brindle, fawn, pied), non-standard “exotics” (blue, merle), long-haired “fluffies,” size labels, and what’s similar across all Frenchies—plus health notes and an evidence-based buyer’s checklist.',
        component: () =>
            import('./posts/are-there-different-types-of-french-bulldogs') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'boarding-and-daycare-tips-for-french-bulldogs',
        title: 'Boarding & Daycare Tips for French Bulldogs: A Complete Owner’s Guide',
        date: 'April 5, 2025',
        description:
            'Frenchie-specific boarding/daycare playbook: pre-boarding audits, health & vaccine requirements, airway/heat safety, housing & climate, playgroup design, feeding/meds, enrichment, emergencies, and travel—plus checklists and professional sources.',
        component: () =>
            import('./posts/boarding-and-daycare-tips-for-french-bulldogs') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'are-french-bulldogs-good-with-children-and-other-pets',
        title: 'Are French Bulldogs Good with Children and Other Pets? Temperament, Training, and a Proven Home Playbook',
        date: 'April 6, 2025',
        description:
            'Affectionate and social, many French Bulldogs do well with kids and other pets when adults run solid systems. Temperament overview, child-by-age safety, dog–dog and dog–cat plans, resource guarding prevention, daycare policies, and checklists—plus professional sources.',
        component: () =>
            import('./posts/are-french-bulldogs-good-with-children-and-other-pets') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'common-health-problems-in-french-bulldogs',
        title: 'Common Health Problems in French Bulldogs: Early Signs, Prevention, and Operator-Grade Care Systems',
        date: 'April 7, 2025',
        description:
            'A practical, evidence-informed guide to French Bulldog health: airway (BOAS), heat risk, skin/ear disease, eyes, spine & knees, GI, dental, and more—plus early signs, home systems, boarding/daycare protocols, and veterinarian-approved checklists.',
        component: () =>
            import('./posts/common-health-problems-in-french-bulldogs') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'how-many-puppies-do-french-bulldogs-have',
        title: 'How Many Puppies Do French Bulldogs Have? Typical Litter Size, Risks, and a Responsible Care Playbook',
        date: 'April 8, 2025',
        description:
            'Most French Bulldogs have small litters—often 2–4 pups—with higher-than-average assisted delivery rates. This evidence-informed guide covers litter size drivers, timing, whelping vs. planned C-section, neonatal care, and practical checklists.',
        component: () =>
            import('./posts/how-many-puppies-do-french-bulldogs-have') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breeder', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'do-french-bulldogs-shed',
        title: 'Do French Bulldogs Shed? Shedding Levels, Seasonality & Practical Coat Care',
        date: 'April 10, 2025',
        description:
            'Yes—French Bulldogs shed lightly to moderately. What to expect by season and age, plus evidence-based grooming, skin/ear support, nutrition, allergy tips, and home routines (HEPA, lint control) to manage hair and dander.',
        component: () =>
            import('./posts/do-french-bulldogs-shed') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'how-much-do-french-bulldogs-cost',
        title: 'How Much Do French Bulldogs Cost? Realistic First-Year, Annual & Lifetime Budgets',
        date: 'April 9, 2025',
        description:
            'Purchase vs. adoption fees, first-year setup, ongoing annual costs (vet, food, insurance), lifetime totals, and “Frenchie factors” like BOAS and IVDD—plus money-saving systems and professional sources.',
        component: () =>
            import('./posts/how-much-do-french-bulldogs-cost') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'french-bulldog-life-expectancy-and-lifespan',
        title: 'French Bulldog Life Expectancy & Lifespan: Add Healthy Years with Smart Daily Systems',
        date: 'April 11, 2025',
        description:
            'How long do French Bulldogs live? Evidence-informed life expectancy and a practical plan—weight, BOAS care, heat safety, spine/knee protection, skin/ear/eye hygiene, nutrition, preventive vet work, and senior comfort.',
        component: () =>
            import('./posts/french-bulldog-life-expectancy-and-lifespan') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'French Bulldog',
    },
    {
        slug: 'labrador-retriever-life-expectancy-and-lifespan',
        title: 'Labrador Retriever Life Expectancy & Lifespan: How to Maximize Your Lab’s Healthy Years',
        date: 'April 12, 2025',
        description:
            'How long do Labs live? Evidence-based life expectancy, what shortens or extends lifespan, and a practical plan—weight, nutrition, preventive care, orthopedic protection, senior comfort, and quality-of-life tools.',
        component: () =>
            import('./posts/labrador-retriever-life-expectancy-and-lifespan') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'types-of-labrador-retrievers-english-vs-field',
        title: 'Types of Labrador Retrievers (English vs Field): The Complete, Vet-Informed Owner’s Guide',
        date: 'April 13, 2025',
        description:
            'One Labrador breed, two common lines. Compare English (bench/show) vs Field (working): temperament, build, training needs, exercise, health, grooming, breeder questions, and family fit.',
        component: () =>
            import('./posts/types-of-labrador-retrievers-english-vs-field') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'what-health-issues-do-labradors-have',
        title: 'What Health Issues Do Labradors Have? A Practical, Vet-Informed Guide for Families',
        date: 'April 14, 2025',
        description:
            'The most common Labrador Retriever health problems—hips, elbows, cruciate tears, obesity, ear/skin disease, EIC, PRA, cancers, hypothyroidism—plus prevention plans, life-stage checklists, and boarding/daycare notes.',
        component: () =>
            import('./posts/what-health-issues-do-labradors-have') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'do-labrador-retrievers-shed-a-lot',
        title: 'Do Labrador Retrievers Shed a Lot? The Complete Owner’s Guide to Shedding, Allergies, and Coat Care',
        date: 'April 17, 2025',
        description:
            'Yes—Labs shed. Here’s exactly how much and what to do about it: coat biology, seasonal blowouts, allergy realities, grooming tools and routines, diet and skin health, home hair management, and red flags for veterinary care.',
        component: () =>
            import('./posts/do-labrador-retrievers-shed-a-lot') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'are-labrador-retrievers-good-family-dogs',
        title: 'Are Labrador Retrievers Good Family Dogs? An Expert, Real-World Guide',
        date: 'April 21, 2025',
        description:
            'A practical, evidence-backed look at Labs in family life—temperament, training, exercise, health risks, grooming, safety with kids and pets, and decision checklists.',
        component: () =>
            import('./posts/are-labrador-retrievers-good-family-dogs') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'boarding-tips-for-labrador-retrievers',
        title: 'Boarding & Daycare Tips for Labrador Retrievers: A Complete Owner’s Guide',
        date: 'April 27, 2025',
        description:
            'Health-first, operator-ready guidance for safe, low-stress boarding and daycare with Labs—vaccines, facility standards, play-style management, heat/water safety, packing lists, and post-stay recovery.',
        component: () =>
            import('./posts/boarding-tips-for-labrador-retrievers') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding', 'breed_specific_guides'],
        breed: 'Labrador Retriever', // 👈 NEW: used by the dropdown
    },
    {
        slug: 'labrador-retriever-puppy-training-complete-guide',
        title: 'Labrador Retriever Puppy Training: The Complete Guide from 8 Weeks to 18 Months',
        date: 'April 24, 2025',
        description:
            'A step-by-step, age-staged training plan for Lab puppies—house/crate routines, socialization, bite inhibition, leash skills, recall, impulse control, enrichment, and vet-informed health habits.',
        component: () =>
            import('./posts/labrador-retriever-puppy-training-complete-guide') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'Labrador Retriever',
    },
    {
        slug: 'dog-daycare-boarding-kpi-playbook',
        title: 'The Definitive KPI Playbook for Dog Daycare & Boarding (2025 Edition)',
        date: 'May 1, 2025',
        description:
            'An operator-grade, numbers-first guide for dog daycare and boarding businesses. Includes formulas, benchmarks, dashboards, capacity math, labor efficiency, safety and compliance metrics, pricing effects, and a 90-day turnaround plan.',
        component: () =>
            import('./posts/dog-daycare-boarding-kpi-playbook') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'how-will-my-dog-adjust-to-boarding',
        title: 'How Will My Dog Handle or Adjust to Being Boarded?',
        date: 'May 5, 2025',
        description:
            'A warm, professional, and neutral guide for pet owners on how dogs typically adjust to boarding—what facilities like ours do to help, what you can do to prepare, and how different regulations in the U.S., Canada, the U.K./Ireland, Australia, and New Zealand shape good practice.',
        component: () =>
            import('./posts/how-will-my-dog-adjust-to-boarding') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'pet-owners'],
    },
    {
        slug: 'choosing-boarding-daycare-software-2025',
        title: 'Choosing Boarding & Daycare Software in 2025: A Calm, Candid Buyer’s Guide',
        date: 'May 8, 2025',
        description:
            'Neutral, practical guidance for boarding and daycare owners on picking software: anonymized real-world pricing, hidden fee math, security must-haves, and a simple evaluation framework to compare vendors with confidence.',
        component: () =>
            import('./posts/choosing-boarding-daycare-software-2025') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'dog-daycare-and-separation-anxiety',
        title: 'Does Dog Daycare Help with Separation Anxiety? A Neutral, Evidence-Based Guide for Dog Owners',
        date: 'May 13, 2025',
        description:
            'What separation anxiety really is, where daycare helps (and where it doesn’t), how to avoid overstimulation by design, and respectful questions to ask providers—plus owner checklists.',
        component: () =>
            import('./posts/dog-daycare-and-separation-anxiety') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner'],
    },
    {
        slug: 'board-or-hire-pet-sitter',
        title: 'Should I Board My Dog or Hire a Pet Sitter? A Complete, Neutral Guide for Dog Owners',
        date: 'May 18, 2025',
        description:
            'Neutral, practical guidance to choose between boarding and hiring a pet sitter — including separation-anxiety prevention, safety risks, supervision, special cases, a decision checklist, and provider questions.',
        component: () =>
            import('./posts/board-or-hire-pet-sitter') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner'],
    },
    {
        slug: 'pricing-pet-care-services',
        title: 'Pricing Dog Boarding, Daycare, Dog Walking & Pet Sitting: A Practical, Economics-Savvy Playbook',
        date: 'May 22, 2025',
        description:
            'A step-by-step framework to price pet-care services using basic economics, local market data, capacity math, and clear benchmarks — with templates, examples, and professional sources.',
        component: () =>
            import('./posts/pricing-pet-care-services') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'walker', 'sitter'],
    },
    {
        slug: 'helping-a-newly-adopted-dog-settle-in',
        title: 'Helping a Newly Adopted Dog Settle In: A Complete Guide for the First Days, Weeks, and Months',
        date: 'August 9, 2025',
        description:
            'A research-backed, first-person guide to settling a newly adopted dog — covering the first 72 hours, routine, bonding, introductions with other pets, training philosophy, vet care, and global adoption insights.',
        component: () =>
            import('./posts/helping-a-newly-adopted-dog-settle-in') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'rescue'],
    },
    {
        slug: 'should-i-adopt-or-buy-a-dog',
        title: 'Should I Adopt a Dog or Buy One from a Breeder?',
        date: 'May 26, 2025',
        description:
            'A balanced, research-backed guide exploring adoption versus buying from a breeder — with emotional, financial, and behavioral insights to help you choose the best path.',
        component: () =>
            import('./posts/should-i-adopt-or-buy-a-dog') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'rescue', 'breeder'],
    },
    {
        slug: 'what-dog-breed-is-best-for-me-and-my-family',
        title: 'What Dog Breed Is Best for Me and My Family?',
        date: 'June 6, 2025',
        description:
            'Use this no-nonsense guide to assess your lifestyle, budget, training ability, and household needs before choosing a dog breed — or deciding if dog ownership is right for you at all.',
        component: () =>
            import('./posts/what-dog-breed-is-best-for-me-and-my-family') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breeder'],
    },
    {
        slug: 'choose-dog-boarding-daycare',
        title: 'How to Choose a Good Dog Boarding or Daycare Facility',
        date: 'June 11, 2025',
        description:
            'Learn how to evaluate cleanliness, staff quality, safety standards, and personalized care when choosing a daycare or boarding facility.',
        component: () =>
            import('./posts/choose-dog-boarding-daycare') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'owner'],
    },
    {
        slug: 'how-often-should-dogs-visit-the-vet-a-guide-for-pet-care-businesses-and-owners',
        title: 'How Often Should Dogs Visit the Vet? A Guide for Pet Care Businesses and Owners',
        date: 'June 1, 2025',
        description:
            'From puppies to seniors, learn how often dogs should see the vet — with global guidelines, breed-specific advice, and tips for pet care providers from a seasoned boarding facility owner.',
        component: () =>
            import('./posts/how-often-should-dogs-visit-the-vet-a-guide-for-pet-care-businesses-and-owners') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'sitter', 'walker', 'rescue', 'vet', 'owner', 'breeder'],
    },
    {
        slug: 'how-much-does-dog-boarding-cost-what-i-charge-what-others-charge-and-what-ive-learned-after-8-years-in-business',
        title: 'How Much Does Dog Boarding Cost? What I Charge, What Others Charge, and What I’ve Learned After 8 Years in Business',
        date: 'June 21, 2025',
        description:
            'See how one facility owner prices their dog boarding services, compare global market rates, and learn what matters most when setting prices in today’s pet care economy.',
        component: () =>
            import('./posts/how-much-does-dog-boarding-cost-what-i-charge-what-others-charge-and-what-ive-learned-after-8-years-in-business') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'owner'],
    },
    {
        slug: 'writing-a-waiver-for-your-dog-daycare-or-boarding-facility-what-ive-learned-after-8-years-in-business',
        title: 'Writing a Waiver for Your Dog Daycare or Boarding Facility: What I’ve Learned After 8 Years in Business',
        date: 'June 16, 2025',
        description:
            'Your waiver is more than a form — it’s your business’s legal shield. Learn what to include, what to avoid, and how to build one that protects you and sets client expectations clearly.',
        component: () =>
            import('./posts/writing-a-waiver-for-your-dog-daycare-or-boarding-facility-what-ive-learned-after-8-years-in-business') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'sitter', 'walker', 'rescue', 'vet', 'owner'],
    },
    {
        slug: 'is-tiktok-safe-and-useful-for-pet-care-businesses-heres-what-ive-learned',
        title: 'Is TikTok Safe — and Useful — for Pet Care Businesses? Here’s What I’ve Learned',
        date: 'June 26, 2025',
        description:
            'Does TikTok help grow a pet care business — or is it just a distraction? Learn what actually works, what the data says, and how to decide if TikTok is worth your time.',
        component: () =>
            import('./posts/is-tiktok-safe-and-useful-for-pet-care-businesses-heres-what-ive-learned') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'sitter', 'walker', 'rescue', 'vet', 'owner'],
    },
    {
        slug: 'how-i-keep-dogs-quiet-overnight-in-my-boarding-facility-and-what-you-can-try-too',
        title: 'How I Keep Dogs Quiet Overnight in My Boarding Facility (And What You Can Try Too)',
        date: 'July 1, 2025',
        description:
            'Discover how one boarding facility owner reduced barking and built a quieter overnight system using sound, lighting, design, and client boundaries — plus what the science says works.',
        component: () =>
            import('./posts/how-i-keep-dogs-quiet-overnight-in-my-boarding-facility-and-what-you-can-try-too') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'owner'],
    },
    {
        slug: 'setting-boundaries-without-losing-clients-what-ive-learned-running-a-pet-care-business',
        title: 'Setting Boundaries Without Losing Clients: What I’ve Learned Running a Pet Care Business',
        date: 'July 3, 2025',
        description:
            'Learn how to say no to early pickups, last-minute changes, and chronic rule-breakers — while protecting your team, your sanity, and your reputation as a pet care business owner.',
        component: () =>
            import('./posts/setting-boundaries-without-losing-clients-what-ive-learned-running-a-pet-care-business') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'sitter', 'walker', 'rescue', 'vet'],
    },
    {
        slug: 'why-hiring-feels-impossible-in-pet-care-and-whats-actually-worked-for-me',
        title: 'Why Hiring Feels Impossible in Pet Care — and What’s Actually Worked for Me',
        date: 'July 5, 2025',
        description:
            'Hiring feels harder than ever in pet care — but it doesn’t have to be. After 8+ years running a boarding and daycare business, here’s what’s actually worked to attract and retain great employees.',
        component: () =>
            import('./posts/why-hiring-feels-impossible-in-pet-care-and-whats-actually-worked-for-me') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'should-you-offer-dog-pickup-and-drop-off-services-the-risk-vs-reward-of-transport-vans-in-pet-care',
        title: 'Should You Offer Dog Pickup and Drop-Off Services? The Risk vs. Reward of Transport Vans in Pet Care',
        date: 'July 20, 2025',
        description:
            'Explore the legal, financial, and operational risks of offering dog transport services as a pet care business. A must-read for boarding and daycare owners considering this high-risk add-on.',
        component: () =>
            import('./posts/should-you-offer-dog-pickup-and-drop-off-services-the-risk-vs-reward-of-transport-vans-in-pet-care') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'client-conflict-refunds-staff-protection',
        title: 'When Clients Cross the Line: How I Handle Conflict, Refunds, and Protecting My Staff',
        date: 'July 15, 2025',
        description:
            'A real-world approach to managing angry clients, issuing strategic refunds, and protecting your staff from verbal abuse — with insights from a facility owner.',
        component: () =>
            import('./posts/client-conflict-refunds-staff-protection') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'crocs-safety-dog-daycare',
        title: 'Are Crocs Safe to Wear at Dog Boarding & Daycare Facilities?',
        date: 'January 3, 2024',
        description:
            'Explore the pros and cons of wearing Crocs in a pet care facility based on real-world experience and safety insights.',
        component: () =>
            import('./posts/crocs-safety-dog-daycare') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding', 'walker', 'sitter'],
    },
    {
        slug: 'manager-pay-benefits',
        title: 'What Should You Pay Your Dog Boarding & Daycare Manager?',
        date: 'January 10, 2024',
        description:
            'Compare national pay, benefits, and incentive structures for pet boarding managers — plus how we do it at Petunia.',
        component: () =>
            import('./posts/manager-pay-benefits') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'daycare-vs-boarding-vs-grooming',
        title: 'Should You Offer Daycare Only — or Add Boarding and Grooming?',
        date: 'July 26, 2025',
        description:
            'A real-world breakdown of the pros, cons, and revenue impact of daycare-only vs. adding boarding and grooming services. Insights from a facility owner who has done it all.',
        component: () =>
            import('./posts/daycare-vs-boarding-vs-grooming') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'back-to-school-dog-daycare',
        title: 'Back to School Season in Dog Daycare and Boarding: What I’ve Learned and What You Can Try',
        date: 'July 31, 2025',
        description:
            'Learn how one facility handles the back-to-school seasonal shift, with practical ideas for managing early September dips and preparing for fall demand.',
        component: () =>
            import('./posts/back-to-school-dog-daycare') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'demotion-handling-and-legal-risks',
        title: 'Why I’ve Never Demoted an Employee—and What You Should Know If You Have To',
        date: 'August 4, 2025',
        description:
            'A practical guide for business owners on how to prevent, handle, and legally navigate employee demotions—with leadership strategies and legal insights.',
        component: () =>
            import('./posts/demotion-handling-and-legal-risks') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
];
