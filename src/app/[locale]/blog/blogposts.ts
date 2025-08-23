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
        slug: 'kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025',
        title:
            'Kennel Cough (CIRDC): The 2025 Global Guide for Owners and Boarding & Daycare Facilities (U.S., Canada, U.K., Ireland, Australia & New Zealand)',
        date: 'August 22, 2025',
        description:
            'International, evidence-aligned guide to kennel cough (CIRDC): what it is, how it spreads, life-stage treatment (puppies, adults, seniors), prevention beyond staying home, vaccine roles (Bordetella/CPIV, canine influenza), isolation timelines, and protecting seniors when younger dogs attend daycare or boarding.',
        component: () =>
            import('./posts/kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025') as Promise<{ default: React.ComponentType<object> }>,
        categories: ['owner', 'boarding', 'daycare'],
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
        categories: ['owner', 'breed_specific_guides'],
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
