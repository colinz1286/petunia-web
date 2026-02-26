'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoesDogBoardingCostWhatIChargeWhatOthersChargeAndWhatIveLearnedAfter8YearsInBusinessBlog() {
    const locale = useLocale();

    const title = "How Much Does Dog Boarding Cost? What I Charge, What Others Charge, and What I’ve Learned After 8 Years in Business";
    const date = "June 21, 2025";
    const categories = ['boarding', 'owner'];

    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        owner: 'Pet Owners',
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

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

                <p className="mb-4">
                    When I first opened my dog boarding and daycare facility, I had no idea how often I’d be asked this question:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “How much does dog boarding cost?”
                </blockquote>

                <p className="mb-4">
                    It sounds simple. But the truth is, prices vary — a lot. Not just from city to city, but across facilities in the same zip code. If you’re a pet owner trying to understand what’s fair, or someone thinking about opening a facility yourself, it can be overwhelming.
                </p>

                <p className="mb-4">
                    So in this article, I’m giving you real numbers — starting with what I charge at my own business, why I charge it, and how that compares to other cities and countries.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💰 What I Charge for Dog Boarding — and Why</h2>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>$49–$55 per night for one dog</li>
                    <li>~$96 per night for two dogs from the same household</li>
                    <li>$60 per night for dogs that cannot join group play</li>
                </ul>

                <p className="mb-4">
                    These rates include full care, group socialization (when applicable), clean accommodations, feeding, and staff supervision. We have a standard checkout time of 11 a.m., and pickups after that are charged an extra day.
                </p>

                <p className="mb-4">
                    I don’t raise prices during holidays or drop them in slow seasons. I don’t tier by dog size. My pricing is flat, simple, and consistent — and it works.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📊 Why I Charge What I Charge</h2>
                <p className="mb-4">
                    Like most people, I started by checking what my competitors charged. But I didn’t stop there. I asked:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>What will it take to pay my staff fairly?</li>
                    <li>What does it cost to maintain high standards daily?</li>
                    <li>Can I do all that and still make a profit?</li>
                </ul>

                <p className="mb-4">
                    I run lean and efficiently — not by cutting corners, but by being deliberate. Because of that, I often charge less than competitors, even when we deliver better care.
                </p>

                <p className="mb-4">
                    Clients know they’re getting value. They rarely push back. And in many cases, they’ve paid more elsewhere for less.
                </p>

                <p className="mb-4">
                    That’s what I aim for: consistent, high-quality service at a fair rate that fills our facility without compromising on care.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">🌍 What Other Facilities Charge — City by City, Country by Country</h2>
                <p className="mb-4">
                    I’ve done deep research on this — not just for this blog, but to stay competitive in my own market. Below is a breakdown of professional facility prices in 2024–2025 across major cities:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">📊 Dog Boarding Cost Comparison (One Dog, One Night)</h3>

                <div className="overflow-x-auto mb-6 text-sm">
                    <table className="w-full border border-[#d9cfc2]">
                        <thead className="bg-[#f6efe4]">
                            <tr>
                                <th className="p-2 border border-[#d9cfc2]">City / Country</th>
                                <th className="p-2 border border-[#d9cfc2]">Avg. Cost</th>
                                <th className="p-2 border border-[#d9cfc2]">Peak Surcharge?</th>
                                <th className="p-2 border border-[#d9cfc2]">Luxury Available?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">New York City, USA</td>
                                <td className="p-2 border border-[#d9cfc2]">$60–$90+</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (+$10–$25)</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes ($100–$200)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Los Angeles, USA</td>
                                <td className="p-2 border border-[#d9cfc2]">$63–$70</td>
                                <td className="p-2 border border-[#d9cfc2]">Common</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Chicago, USA</td>
                                <td className="p-2 border border-[#d9cfc2]">$45–$70</td>
                                <td className="p-2 border border-[#d9cfc2]">Sometimes</td>
                                <td className="p-2 border border-[#d9cfc2]">Some</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Toronto, Canada</td>
                                <td className="p-2 border border-[#d9cfc2]">C$50–65 (~US$37–48)</td>
                                <td className="p-2 border border-[#d9cfc2]">Limited</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (C$70+)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">London, UK</td>
                                <td className="p-2 border border-[#d9cfc2]">£50–£60 (~US$64–76)</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (£100+)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Sydney, Australia</td>
                                <td className="p-2 border border-[#d9cfc2]">A$50–A$80 (~US$33–52)</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (10–20%)</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (A$100+)</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Dublin, Ireland</td>
                                <td className="p-2 border border-[#d9cfc2]">€30–€42 (~US$33–46)</td>
                                <td className="p-2 border border-[#d9cfc2]">Occasionally</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (Limited)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-4">
                    Prices reflect indoor, professionally run facilities within ~1 hour of major city centers. Currency conversions are approximate as of mid-2025.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧾 What’s Included in These Rates?</h2>
                <p className="mb-4">
                    Most facilities include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Indoor sleeping area or kennel</li>
                    <li>Feeding based on client instructions</li>
                    <li>Playtime (group or solo)</li>
                    <li>Basic medication administration</li>
                    <li>Bedding, water, and staff supervision</li>
                </ul>
                <p className="mb-4">
                    Premium upgrades — like TVs, couches, webcams, or climate-controlled suites — can push nightly rates well past $100 in some cities.
                </p>

                <p className="mb-4">
                    In contrast, smaller or rural kennels might charge as little as $25–$30 per night, especially in areas with lower cost of living or volunteer staff.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">📉 How the Industry Has Changed Over the Last 4 Years</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">1. The COVID Collapse (2020)</h3>
                <p className="mb-4">
                    When the pandemic hit, travel stopped — and so did boarding demand. Many facilities shut down temporarily or permanently. I stayed open, but it was quiet for months.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. The Pandemic Puppy Boom (2021)</h3>
                <p className="mb-4">
                    Then came the dog boom. By late 2021, we were flooded with new client requests. People were ready to travel again — but now with a puppy in tow.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">3. Post-Pandemic Normalization (2023–2025)</h3>
                <p className="mb-4">
                    Demand has leveled out. I’m still often fully booked, but it’s more predictable. Clients are price-conscious. Inflation affects everything — labor, rent, food — but people still pay for care they trust.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏗️ How I Stay Competitive Without Cutting Corners</h2>
                <p className="mb-4">
                    I monitor competitor pricing, but I don’t race to the bottom. I build operational systems that let me run lean and clean — while paying staff fairly and maintaining high-quality service.
                </p>
                <p className="mb-4">
                    Efficient operations are what allow me to offer fair pricing — not cutting wages or care. That’s been my approach from day one.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🙋 Do Clients Push Back on Pricing?</h2>
                <p className="mb-4">
                    Rarely. I think that’s because I’m transparent and consistent. I don’t charge hidden fees. I don’t nickel-and-dime people. And I don’t ask for extra money unless extra care is required.
                </p>
                <p className="mb-4">
                    My clients know what they’re getting — and many have told me they’ve paid more elsewhere for less attentive care.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🌐 Are Dog Boarding Prices Fair Overall?</h2>
                <p className="mb-4">
                    It depends where you’re looking. In my area, I think rates are generally fair. Elsewhere, I’ve seen overpriced “luxury” places and underpriced services that can’t possibly stay sustainable.
                </p>

                <p className="mb-4">
                    Here’s a rough summary from what I’ve gathered:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>London & NYC: Similar pricing, high-end options available</li>
                    <li>Toronto & Vancouver: Slightly cheaper than U.S. averages</li>
                    <li>Sydney & Melbourne: Close to U.S. city rates</li>
                    <li>Auckland & Dublin: A bit lower overall, especially outside cities</li>
                </ul>
                <p className="mb-4">
                    But the challenges are the same: inflation, labor costs, shifting demand.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💡 Final Thoughts: What I’ve Learned About Pricing</h2>
                <p className="mb-4">
                    Pricing isn’t just about covering costs. It’s about identity. It signals who you are, what you value, and who you serve.
                </p>

                <p className="mb-4">
                    I’m not afraid to say: <em>This is what we charge. We believe it’s fair.</em> And I’ve found clients are happy to pay for trust, safety, and quality.
                </p>

                <p className="mb-4">
                    You don’t have to be the cheapest or most luxurious — but you do have to be consistent, transparent, and thoughtful.
                </p>

                <p className="mb-6">
                    That applies no matter where you live — whether it’s Los Angeles, London, or a quiet little corner of Pennsylvania like mine.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Jotform. Pet Boarding Waiver and Consent Form Template</li>
                    <li>Rover.com Rate Reports, U.S. and Canada – 2024–2025</li>
                    <li>MoneyHub NZ. Kennel Cost Guide</li>
                    <li>Urban Mutts Dog Club, London – Pricing Page</li>
                    <li>Jet Pet Resort, Vancouver – Rate Calculator</li>
                    <li>Practice.do. Dog Boarding Waiver Guide</li>
                    <li>Enjuris. Pet Boarding Legal Risks</li>
                    <li>ThoughtHub Australia. Dog Boarding Pricing</li>
                    <li>Dublin SPCA. Pet Hotel Pricing</li>
                    <li>Google Trends & Morgan Stanley Pet Industry Reports (2021–2025)</li>
                    <li>U.S. Bureau of Labor Statistics. Wage Inflation Data (2024)</li>
                </ul>

                <Link
                    href={`/${locale}/blog`}
                    className="underline text-[#2c4a30] font-medium hover:opacity-80"
                >
                    ← Back to Blog
                </Link>
            </main>
        </>
    );
}
