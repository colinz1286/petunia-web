export type BlogPostEntry = {
    slug: string;
    title: string;
    date: string;
    description: string;
    categories: string[];
    component: () => Promise<{ default: React.ComponentType<object> }>;
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
        date: 'August 5, 2025',
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
