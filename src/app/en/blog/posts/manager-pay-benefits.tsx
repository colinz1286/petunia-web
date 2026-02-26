'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ManagerPayBlog() {
    const locale = useLocale();

    const title = 'What Should You Pay Your Dog Boarding & Daycare Manager?';
    const date = 'January 10, 2024';
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

                <p className="text-lg mb-4">
                    Whether you&apos;re running a growing pet care business or applying for your first manager role in a dog boarding or daycare facility, compensation is a common — and often unclear — question.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💵 National Salary and Hourly Pay Ranges</h2>
                <p className="mb-4">
                    According to recent industry reports and salary data from Indeed and ZipRecruiter:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Average salary: $38,000–$42,000/year</li>
                    <li>Hourly pay: $14–$25/hour</li>
                    <li>Regional variance: $25/hour (~$52,000/year) near Pittsburgh, PA</li>
                </ul>

                <p className="mb-4">
                    Entry-level managers may earn closer to $30,000, while experienced general managers can command $50,000+ — especially in competitive urban markets or larger operations.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏥 Benefits: PTO, Health Insurance & More</h2>
                <p className="mb-4">
                    While not all small pet care facilities offer full benefits, here&apos;s what many provide to managers:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>1–2 weeks of Paid Time Off (PTO) after 1 year of employment</li>
                    <li>Health insurance coverage for full-time or lead staff (varies widely)</li>
                    <li>Performance-based bonuses or holiday incentives</li>
                </ul>

                <p className="mb-4">
                    At our own facility north of Pittsburgh, we offer our long-term business partner and general manager:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Four full weeks of paid time off annually</li>
                    <li>Access to premium health insurance (declined by choice)</li>
                    <li>Bonus eligibility and full business ownership stake</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💡 Beyond Pay: What Makes a Great Manager?</h2>
                <p className="mb-4">
                    In our experience, we look for managers who:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Never call off, always show up, and take pride in consistency</li>
                    <li>Deeply understand our custom operating style (not corporate-franchise)</li>
                    <li>Take ownership of outcomes, not just tasks</li>
                </ul>

                <p className="mb-4">
                    These are the managers we invest in. We promote from within. We reward loyalty. And in the right cases — we make them owners.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📊 Quick Pay Table</h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm text-left border border-[#d9cfc2]">
                        <thead className="bg-[#f6efe4]">
                            <tr>
                                <th className="p-2 border border-[#d9cfc2]">Role Type</th>
                                <th className="p-2 border border-[#d9cfc2]">Avg. Pay</th>
                                <th className="p-2 border border-[#d9cfc2]">PTO</th>
                                <th className="p-2 border border-[#d9cfc2]">Health</th>
                                <th className="p-2 border border-[#d9cfc2]">Bonuses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Entry-Level</td>
                                <td className="p-2 border border-[#d9cfc2]">$30k–$36k</td>
                                <td className="p-2 border border-[#d9cfc2]">Rare</td>
                                <td className="p-2 border border-[#d9cfc2]">Unlikely</td>
                                <td className="p-2 border border-[#d9cfc2]">Rare</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Mid-Level</td>
                                <td className="p-2 border border-[#d9cfc2]">$37k–$45k</td>
                                <td className="p-2 border border-[#d9cfc2]">1–2 wks</td>
                                <td className="p-2 border border-[#d9cfc2]">Sometimes</td>
                                <td className="p-2 border border-[#d9cfc2]">Occasionally</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">General Manager</td>
                                <td className="p-2 border border-[#d9cfc2]">$45k–$60k+</td>
                                <td className="p-2 border border-[#d9cfc2]">2–4 wks</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes (negotiated)</td>
                                <td className="p-2 border border-[#d9cfc2]">Yes / Equity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔗 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>
                        <a
                            href="https://www.indeed.com/career/kennel-manager/salaries"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] hover:opacity-80"
                        >
                            Indeed: Kennel Manager Salary Data
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.ziprecruiter.com/Salaries/Dog-Daycare-Manager-Salary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] hover:opacity-80"
                        >
                            ZipRecruiter: Dog Daycare Manager Salary
                        </a>
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📬 Final Thoughts</h2>
                <p className="mb-4">
                    If you want great management, it starts with compensation and ends with opportunity. Loyalty, ownership, and growth matter — especially in pet care, where trust is everything.
                </p>

                <p className="mb-6">
                    <strong>Have questions or insights on manager compensation?</strong>
                    <br />
                    We&apos;d love to hear from you — email us at{' '}
                    <a
                        href="mailto:admin@petuniapets.com"
                        className="underline text-[#2c4a30]"
                    >
                        admin@petuniapets.com
                    </a>
                    .
                </p>

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
