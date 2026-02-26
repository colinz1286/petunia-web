'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LeptospirosisCoreGuidelineUpdate2024_2025() {
    const locale = useLocale();

    const title =
        '2024–2025 Vaccine Guideline Updates: Leptospirosis as “Core” & What That Means for Boarding and Travel';
    const date = 'October 7, 2025';

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* 🏷️ Category Tag */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
                        Pet Owners
                    </span>
                </div>

                <p className="text-lg mb-4">
                    In 2024, major veterinary groups sharpened canine vaccine guidance in a way that directly affects everyday pet life—especially boarding, daycare, grooming, and interstate or international travel. The headline: the leptospirosis vaccine is now treated as <em>core</em> for most dogs in North America under the American Animal Hospital Association (AAHA) 2024 update, and the World Small Animal Veterinary Association (WSAVA) 2024 global guidance recommends treating lepto as core in regions where disease is present and suitable vaccines are available.
                </p>

                <p className="mb-6">
                    That shift reflects modern epidemiology (urban wildlife exposure, changing climate patterns, travel), improved vaccine safety, and the reality that lepto is a serious zoonotic disease that can threaten dogs and their humans. For readers exploring how age influences vaccine planning, see our related post{' '}
                    <a
                        href="https://www.petuniapets.com/en/blog/what-vaccines-should-you-give-to-elderly-dogs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#2c4a30]"
                    >
                        What Vaccines Should You Give to Elderly Dogs
                    </a>.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — What Changed in 2024 (AAHA & WSAVA)</h2>
                <p className="mb-4">
                    <strong>AAHA 2024 update:</strong> AAHA confirms that vaccination against leptospirosis is now recommended as <em>core</em> for most dogs in North America. In practice, that means a typical primary series followed by annual boosters for continued protection. AAHA communications in 2024–2025 explicitly state that lepto vaccination is recommended for dogs twelve weeks of age or older, regardless of breed or lifestyle, whenever outdoor access or wildlife exposure is possible.
                </p>

                <p className="mb-4">
                    <strong>WSAVA 2024 global guidance:</strong> WSAVA’s 2024 Global Vaccination Guidelines now classify leptospirosis as core where disease is endemic and effective vaccines are available. This international perspective helps align travel and boarding policies across regions. Owners planning cross-border trips can also revisit our overview{' '}
                    <a
                        href="https://www.petuniapets.com/en/blog/dog-vaccines-what-they-protect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#2c4a30]"
                    >
                        Dog Vaccines: What They Protect Against
                    </a>{' '}
                    for context on other core and non-core components frequently bundled with lepto.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 2 — Why Leptospirosis Is Now Treated as Core</h2>
                <p className="mb-4">
                    Leptospirosis is a bacterial disease transmitted by wildlife and livestock and can survive in wet environments for weeks. Urbanization has expanded risk beyond rural farms—rodent populations, city park puddles, and communal water bowls can all serve as exposure points. The disease causes kidney and liver failure and carries human health implications, reinforcing its new “core” classification.
                </p>

                <p className="mb-6">
                    Because it’s zoonotic, vaccination helps protect not only dogs but also the people and staff around them. This public-health perspective is now central to boarding and daycare requirements.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 3 — Leptospirosis Schedule Overview (AAHA & WSAVA 2024)</h2>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border border-[#d9cfc2]">
                        <thead className="bg-[#e4dbcb]">
                            <tr>
                                <th className="text-left p-2">Dog Life Stage</th>
                                <th className="text-left p-2">Primary Series</th>
                                <th className="text-left p-2">Booster / Revaccination</th>
                                <th className="text-left p-2">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Puppies (8–16 weeks)</td>
                                <td className="p-2">Two doses 2–4 weeks apart.</td>
                                <td className="p-2">Annual booster thereafter.</td>
                                <td className="p-2">Use vaccine covering regional serogroups; start around 8–12 weeks of age.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Adults (never vaccinated)</td>
                                <td className="p-2">Two-dose primary 2–4 weeks apart.</td>
                                <td className="p-2">Annual booster if risk persists.</td>
                                <td className="p-2">Often combined with DAPP boosters; safe for most breeds per 2024 safety data.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Dogs overdue &gt; 18 months</td>
                                <td className="p-2">Restart two-dose series for reliable immunity.</td>
                                <td className="p-2">Resume annual boosters after re-priming.</td>
                                <td className="p-2">Document completion for boarding/daycare approval.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 4 — Boarding, Daycare, and Travel Requirements</h2>
                <p className="mb-4">
                    Facilities increasingly treat lepto proof as mandatory alongside rabies and DAPP. Most boarding centers request completion of both priming doses at least one to two weeks before arrival. International travel adds another layer—some destination kennels or import permits cite “core vaccination per AAHA/WSAVA guidelines.” Combine this record with rabies and health certificates to avoid hold-ups.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Documents to Carry</h3>
                <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Rabies certificate with expiration date and veterinarian signature.</li>
                        <li>DAPP (distemper, adenovirus, parvovirus) history and next due date.</li>
                        <li>Leptospirosis dose 1 and 2 dates; annual booster date if applicable.</li>
                        <li>Bordetella/parainfluenza record (many facilities require both).</li>
                        <li>
                            Canine influenza (CIV) documentation—see our detailed overview{' '}
                            <a
                                href="https://www.petuniapets.com/en/blog/does-my-dog-need-the-influenza-shot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30]"
                            >
                                Does My Dog Need the Influenza Shot?
                            </a>
                        </li>
                        <li>Microchip number and recent photo for identification.</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 5 — Core vs Non-Core Quick Table (2024–2025 Summary)</h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border border-[#d9cfc2]">
                        <thead className="bg-[#e4dbcb]">
                            <tr>
                                <th className="text-left p-2">Vaccine</th>
                                <th className="text-left p-2">Category</th>
                                <th className="text-left p-2">Typical Interval</th>
                                <th className="text-left p-2">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Rabies</td>
                                <td className="p-2">Core (legal)</td>
                                <td className="p-2">1 or 3 years per jurisdiction</td>
                                <td className="p-2">Mandatory for travel and licensing.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">DAPP</td>
                                <td className="p-2">Core</td>
                                <td className="p-2">Every 3 years after adult series</td>
                                <td className="p-2">May combine parainfluenza; required for group settings.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Leptospirosis</td>
                                <td className="p-2">Core (AAHA 2024; WSAVA core where endemic)</td>
                                <td className="p-2">Annual</td>
                                <td className="p-2">Now widely required for boarding/daycare enrollment.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Canine Influenza (CIV)</td>
                                <td className="p-2">Non-core (risk-based)</td>
                                <td className="p-2">Two-dose primary, then annual</td>
                                <td className="p-2">Recommended during regional outbreaks or heavy boarding cycles.</td>
                            </tr>
                            <tr className="border-t border-[#d9cfc2] align-top">
                                <td className="p-2">Lyme</td>
                                <td className="p-2">Non-core (risk-based)</td>
                                <td className="p-2">Two-dose primary, then annual</td>
                                <td className="p-2">Discuss if your dog hikes or lives in tick-dense areas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 6 — Working With Your Veterinarian</h2>
                <p className="mb-4">
                    With lepto now core, annual check-ins are the time to review everything from risk-based vaccines to overdue intervals. Bring your full vaccine log, ask about spacing injections for sensitive dogs, and review CIV or Lyme add-ons based on travel and outbreak maps.
                </p>

                <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-2">Quick Questions for Your Next Visit</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Which leptospirosis serogroups are prevalent in our area?</li>
                        <li>Should we include CIV this season given daycare attendance?</li>
                        <li>Is my older dog due for all core vaccines or selective boosters only?</li>
                        <li>Do I need to restart any series if overdue?</li>
                        <li>What written proof will boarding or travel facilities want?</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 7 — When Overdue (Owner Flow)</h2>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border border-[#d9cfc2]">
                        <thead className="bg-[#e4dbcb]">
                            <tr>
                                <th className="text-left p-2">Scenario</th>
                                <th className="text-left p-2">Typical Veterinary Plan</th>
                                <th className="text-left p-2">Owner Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t align-top" style={{ borderColor: '#d9cfc2' }}>
                                <td className="p-2">No record or &gt; 8 weeks since dose 1</td>
                                <td className="p-2">Restart two-dose series</td>
                                <td className="p-2">Book both appointments; finish before boarding/travel</td>
                            </tr>
                            <tr className="border-t align-top" style={{ borderColor: '#d9cfc2' }}>
                                <td className="p-2">Annual booster missed</td>
                                <td className="p-2">Re-prime per label; some products require two doses again</td>
                                <td className="p-2">Bring old records to confirm timing and avoid duplicate shots</td>
                            </tr>
                            <tr className="border-t align-top" style={{ borderColor: '#d9cfc2' }}>
                                <td className="p-2">Facility demands CIV immediately</td>
                                <td className="p-2">Use fast-acting mucosal route if available</td>
                                <td className="p-2">Ask for earliest acceptable window after vaccination</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Part 8 — Summary & Key Takeaways</h2>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>AAHA 2024 makes leptospirosis a core vaccine for most dogs in North America.</li>
                    <li>WSAVA 2024 labels lepto core where endemic and effective vaccines exist.</li>
                    <li>Facilities now require lepto proof alongside rabies and DAPP.</li>
                    <li>Start vaccination 4–6 weeks before boarding or travel.</li>
                    <li>Review CIV and other non-core options annually with your vet.</li>
                </ul>

                <div className="border-t border-[#d9cfc2] pt-6 text-sm text-gray-700">
                    <h3 className="text-lg font-semibold mb-2">References & Further Reading</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            AAHA Canine Vaccination Guidelines (2022 hub + 2024 update):{' '}
                            <a
                                className="underline"
                                href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                aaha.org/resources/2022-aaha-canine-vaccination-guidelines/
                            </a>
                        </li>
                        <li>
                            WSAVA Global Vaccination Guidelines (2024):{' '}
                            <a
                                className="underline"
                                href="https://wsava.org/global-guidelines/vaccination-guidelines/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                wsava.org/global-guidelines/vaccination-guidelines/
                            </a>
                        </li>
                        <li>
                            AVMA Summary of 2024 WSAVA Updates:{' '}
                            <a
                                className="underline"
                                href="https://www.avma.org/news/wsava-updates-global-guidelines-vaccination"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                avma.org/news/wsava-updates-global-guidelines-vaccination
                            </a>
                        </li>
                    </ul>
                </div>

                <Link
                    href={`/${locale}/blog`}
                    className="underline text-[#2c4a30] font-medium hover:opacity-80 mt-10 inline-block"
                >
                    ← Back to Blog
                </Link>

                <p className="text-xs text-gray-500 mt-8">
                    This article is for informational purposes only and does not replace veterinary advice. Always confirm vaccine schedules and documentation with your veterinarian and with any facility or carrier before booking.
                </p>
            </main>
        </>
    );
}
