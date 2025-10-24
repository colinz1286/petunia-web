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
        categories: ['owner', 'breeder', 'breed specific guides'],
        breed: 'Dachshund',
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
        categories: ['owner', 'boarding', 'daycare'],
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
        categories: ['owner', 'veterinary'],
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
        categories: ['owner', 'veterinary'],
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
        date: 'September 13, 2025',
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
        date: 'September 17, 2025',
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
        date: 'August 26, 2025',
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
        date: 'July 18, 2025',
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
