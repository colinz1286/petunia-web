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
