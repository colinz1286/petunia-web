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
        slug: 'dog-daycare-packages-vs-monthly-memberships-a-balanced-look-at-two-common-pricing-models',
        title: 'Dog Daycare Packages vs. Monthly Memberships: A Balanced Look at Two Common Pricing Models',
        date: 'July 10, 2025',
        description:
            'Compare the pros and cons of daycare packages and monthly memberships, and explore the impact on cash flow, loyalty, and admin complexity.',
        component: () =>
            import('./posts/dog-daycare-packages-vs-monthly-memberships-a-balanced-look-at-two-common-pricing-models') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['boarding'],
    },
    {
        slug: 'how-much-does-a-german-shepherd-cost-to-buy-and-own',
        title: 'How Much Does a German Shepherd Cost to Buy and Own? A Full, Evidence-Informed Budget Guide',
        date: 'August 17, 2025',
        description:
            'Purchase vs. adoption costs, first-year setup, realistic monthly food + preventives, vet/dental/orthopedic realities, insurance, daycare/boarding, lifetime budgets, and cost-control tactics.',
        component: () =>
            import('./posts/how-much-does-a-german-shepherd-cost-to-buy-and-own') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'breed_specific_guides'],
        breed: 'German Shepherd',
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
