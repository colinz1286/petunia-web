'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';

export default function DogBoardingAndDaycareSoftwareEnterprise() {

    const [subscriptionCost, setSubscriptionCost] = useState<number | "">("");
    const [processingRate, setProcessingRate] = useState<number | "">("");
    const [flatFee, setFlatFee] = useState<number | "">("");
    const [transactionsPerYear, setTransactionsPerYear] = useState<number | "">("");
    const [averageTicket, setAverageTicket] = useState<number | "">("");
    const [timeSavingsPercent, setTimeSavingsPercent] = useState(50);
    const [locationTier, setLocationTier] = useState<
        "" | "5-9" | "10-24" | "25-49" | "50+"
    >("");

    // Enterprise Administrative & Oversight Tasks
    const enterpriseTasks = [
        "Multi-Location Staff Scheduling Oversight",
        "Cross-Location Deposit Reconciliation",
        "Centralized Payroll Review",
        "Corporate-Level Bookkeeping & Journal Entries",
        "Financial Reporting Consolidation",
        "Audit Preparation & Compliance Documentation",
        "Chargeback & Refund Oversight",
        "Executive Financial Review Meetings",
        "State & Regulatory Filing Coordination",
        "Operational Benchmarking & Performance Review",
    ];

    const [taskInputs, setTaskInputs] = useState<{
        hours: number;
        rate: number;
        employees: number;
    }[]>(
        enterpriseTasks.map(() => ({
            hours: 0,
            rate: 0,
            employees: 0,
        }))
    );

    const updateTask = (
        index: number,
        field: "hours" | "rate" | "employees",
        value: number
    ) => {
        const updated = [...taskInputs];
        updated[index][field] = value;
        setTaskInputs(updated);
    };

    // Optional elimination of in-house accounting department
    const [accountingHoursPerWeek, setAccountingHoursPerWeek] = useState<number | "">("");
    const [accountingAnnualSalary, setAccountingAnnualSalary] = useState<number | "">("");

    // Enterprise tier pricing engine
    const enterprisePricing = {
        "5-9": { monthly: 99, rate: 3.0, flat: 0.25, locations: 7 },
        "10-24": { monthly: 89, rate: 3.0, flat: 0.22, locations: 17 },
        "25-49": { monthly: 79, rate: 3.0, flat: 0.20, locations: 37 },
        "50+": { monthly: 70, rate: 3.0, flat: 0.18, locations: 60 },
    };

    const calculateSavings = () => {
        const subCost = Number(subscriptionCost) || 0;
        const procRate = Number(processingRate) || 0;
        const flat = Number(flatFee) || 0;
        const txPerYear = Number(transactionsPerYear) || 0;
        const avgTicket = Number(averageTicket) || 0;

        const tier =
            locationTier !== "" ? enterprisePricing[locationTier] : null;

        // Competitor cost is whatever the user types — no multiplier
        const annualSoftware = subCost * 12;

        const annualProcessing =
            txPerYear *
            ((procRate / 100) * avgTicket + flat);

        const annualAdminCost =
            taskInputs.reduce((total, task) => {
                return total + task.hours * task.rate * task.employees * 52;
            }, 0) * (timeSavingsPercent / 100);


        const acctHours = Number(accountingHoursPerWeek) || 0;
        const acctSalary = Number(accountingAnnualSalary) || 0;

        const accountingHourlyRate =
            acctSalary > 0 ? acctSalary / 2080 : 0;

        const annualAccountingCost =
            acctHours * 52 * accountingHourlyRate;

        const petuniaSubscription = tier
            ? tier.monthly * 12
            : 0;

        const petuniaProcessing = tier
            ? txPerYear *
            ((tier.rate / 100) * avgTicket + tier.flat)
            : 0;

        const savings =
            (annualSoftware +
                annualProcessing +
                annualAdminCost +
                annualAccountingCost) -
            (petuniaSubscription + petuniaProcessing);

        return savings.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Petunia Enterprise',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            'Enterprise software for multi-location dog boarding and daycare operators with centralized oversight and financial controls.',
        offers: {
            '@type': 'AggregateOffer',
            lowPrice: '70',
            highPrice: '99',
            priceCurrency: 'USD',
            offerCount: '4',
        },
        areaServed: 'US',
        url: '/en/dog-boarding-and-daycare-software-enterprise',
    };

    const faqItems = [
        {
            question: 'Is Petunia Enterprise only for private equity groups?',
            answer:
                'No. Petunia Enterprise is built for both private equity-backed multi-location groups and large independent owner-led operators who need disciplined oversight at scale.',
        },
        {
            question: 'What stage of operation is a fit for Enterprise?',
            answer:
                'Enterprise is generally best for groups managing multiple locations, complex staffing, cross-location reconciliation, and leadership teams that need consolidated reporting.',
        },
        {
            question: 'How does Enterprise help with due diligence and exit readiness?',
            answer:
                'Enterprise centralizes operational and financial visibility, standardizes workflows, and improves reporting consistency, which supports cleaner diligence conversations and better strategic optionality.',
        },
        {
            question: 'Can we model ROI before making a decision?',
            answer:
                'Yes. The enterprise calculator on this page lets you model software, processing, administrative workload, and accounting burden to estimate annual financial impact.',
        },
        {
            question: 'What if we are a large single owner, not a PE platform?',
            answer:
                'The same systems still apply. Founder-led operators at large scale use Enterprise to protect margin, reclaim executive time, and run cleaner operations as they continue to grow.',
        },
        {
            question: 'Does Enterprise support phased rollout across locations?',
            answer:
                'Yes. Enterprise planning can be phased by location group so leadership can standardize operations while managing onboarding risk.',
        },
    ];

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Dog Boarding Software',
                item: '/en/dog-boarding-software',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Enterprise Dog Boarding and Daycare Software',
                item: '/en/dog-boarding-and-daycare-software-enterprise',
            },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 bg-white">
            <Script
                id="enterprise-software-application-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <Script
                id="enterprise-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="enterprise-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO */}
            <section className="py-16 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] mb-6">
                    Enterprise Software for Multi-Location Dog Boarding & Daycare Operators
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-3xl mx-auto mb-6">
                    At enterprise scale, software is not an operations convenience.
                    It is a control system for margin protection, reporting integrity,
                    and institutional execution across every location.
                </p>

                <p className="text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                    Petunia Enterprise is built for centralized ownership groups,
                    private equity-backed platforms, and founder-led large operators that need
                    standardized workflows, consolidated visibility, and disciplined financial infrastructure.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/en/contact"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md text-center"
                    >
                        Request Enterprise Consultation
                    </Link>

                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Enterprise Owner or Investor Review"
                        className="border border-[#2c4a30] text-[#2c4a30] px-8 py-4 rounded-xl transition font-semibold hover:bg-[#f4f4f4] text-center"
                    >
                        Owner or Investor Strategy Call
                    </a>
                </div>
            </section>

            {/* SCALE SHIFT */}
            <section className="py-14 border-t border-gray-200 text-center">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Scale Multiplies Governance and Financial Exposure
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 max-w-3xl mx-auto">
                    <p>
                        Multi-location operations introduce cross-site staffing complexity,
                        fragmented reconciliation, inconsistent local workflows,
                        and elevated compliance burden.
                    </p>

                    <p>
                        At this level, small process gaps become enterprise-level risk:
                        audit inconsistency, margin leakage, weak reporting controls,
                        and delayed executive decision-making.
                    </p>

                    <p>
                        For private equity groups, this is about diligence quality, integration discipline,
                        and defensible reporting across locations. For independent owners, it is about
                        protecting hard-earned margin while keeping leadership time focused on growth.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        Institutional operators need standardized execution and consolidated oversight.
                    </p>
                </div>
            </section>

            {/* WHY ENTERPRISE WORKS */}
            <section className="py-14 border-t border-gray-200 text-center">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Built for Oversight, Expansion, and Exit Readiness
                </h2>

                <div className="space-y-6 text-gray-700 leading-8 max-w-3xl mx-auto">
                    <p>
                        Centralized dashboards, location-level accountability,
                        unified deposit logic, and canonical transaction data
                        reduce reporting ambiguity and tighten operational control.
                    </p>

                    <p>
                        Whether you are optimizing EBITDA, preparing lender diligence,
                        integrating acquisitions, or positioning for exit,
                        disciplined systems reduce uncertainty and improve strategic flexibility.
                    </p>

                    <p>
                        The same operating discipline also protects founder-led businesses:
                        cleaner books, less administrative drag, tighter team coordination,
                        and stronger readiness for eventual strategic options.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        Petunia Enterprise supports controlled scalability without introducing unnecessary complexity.
                    </p>

                    <div className="mt-10 max-w-3xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/15 rounded-2xl p-8 text-center">
                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                            Enterprise Alignment Review
                        </h3>

                        <p className="text-gray-700 leading-8 max-w-2xl mx-auto mb-6">
                            We can review location count, transaction volume, current processing structure,
                            labor overhead, and reporting requirements to confirm institutional fit
                            before rollout planning.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="mailto:admin@petuniapets.com?subject=Petunia Enterprise Alignment Review - Owner"
                                className="inline-block bg-[#2c4a30] text-white px-8 py-3 rounded-lg hover:bg-[#243d27] transition font-semibold"
                            >
                                Owner-Led Review
                            </a>
                            <a
                                href="mailto:admin@petuniapets.com?subject=Petunia Enterprise Alignment Review - Investor"
                                className="inline-block border border-[#2c4a30] text-[#2c4a30] px-8 py-3 rounded-lg hover:bg-[#f4f4f4] transition font-semibold"
                            >
                                Investor / PE Review
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELF-REQUALIFICATION SECTION */}
            <div className="mt-16 max-w-3xl mx-auto border-t border-gray-200 pt-12 text-center">
                <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                    Not Sure Enterprise Is the Right Stage?
                </h3>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    If you are still operating as a single facility or an early growth team,
                    one of the lower-stage models may be a better fit right now.
                    Enterprise is designed for centralized, multi-location operators.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <Link
                        href="/dog-boarding-and-daycare-software-small-business"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Small Business →
                    </Link>

                    <Link
                        href="/dog-boarding-and-daycare-software-medium-business"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Medium Business →
                    </Link>

                    <Link
                        href="/dog-boarding-and-daycare-software-large-business"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Large Business →
                    </Link>
                </div>
            </div>

            {/* SAVINGS CALCULATOR */}
            <section className="py-14 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Step 1: Model Enterprise-Level Financial Impact
                    </h2>

                    <div className="mt-6 space-y-6 text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                        <p>
                            At institutional scale, ROI is measured through margin integrity,
                            labor efficiency, and standardized execution across locations.
                        </p>

                        <p>
                            Enter your real operating data below. The model includes software cost,
                            processing structure, administrative overhead, and optional accounting burden.
                        </p>

                        <p className="font-medium text-[#2c4a30]">
                            Administrative task savings are modeled at your selected percentage.
                        </p>
                    </div>
                </div>

                <div className="space-y-8 max-w-5xl mx-auto">

                    {/* Core Financial Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Number of Locations (Tier)
                            </label>
                            <select
                                className="border p-4 rounded-lg w-full"
                                value={locationTier}
                                onChange={(e) =>
                                    setLocationTier(
                                        e.target.value as "" | "5-9" | "10-24" | "25-49" | "50+"
                                    )
                                }
                            >
                                <option value="">Select # of Locations Range</option>
                                <option value="5-9">5-9 Locations</option>
                                <option value="10-24">10-24 Locations</option>
                                <option value="25-49">25-49 Locations</option>
                                <option value="50+">50+ Locations</option>
                            </select>
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Select your current location count range to apply enterprise tier pricing.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Current Monthly Software Cost Per Location ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={subscriptionCost}
                                onChange={(e) =>
                                    setSubscriptionCost(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Enter your current software subscription cost per location. (example: 199)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Transactions Per Year
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={transactionsPerYear}
                                onChange={(e) =>
                                    setTransactionsPerYear(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Total annual card transaction count across all locations. (example: 42000)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Average Transaction Amount ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={averageTicket}
                                onChange={(e) =>
                                    setAverageTicket(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Average charge per invoice across your organization. (example: 87.50)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Current Processing Rate (%)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={processingRate}
                                onChange={(e) =>
                                    setProcessingRate(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Enter your blended percentage rate only. (example: 3.20)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Flat Fee Per Transaction ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={flatFee}
                                onChange={(e) =>
                                    setFlatFee(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Enter your flat processing fee amount. (example: 0.30)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Weekly Accounting Department Hours
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={accountingHoursPerWeek}
                                onChange={(e) =>
                                    setAccountingHoursPerWeek(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                        <p className="text-sm text-gray-600 leading-6 mt-2">
                                Optional: estimated weekly internal accounting hours across your leadership/accounting function. (example: 80)
                        </p>
                    </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Accounting Team Annual Salary Base ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={accountingAnnualSalary}
                                onChange={(e) =>
                                    setAccountingAnnualSalary(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                        <p className="text-sm text-gray-600 leading-6 mt-2">
                                Optional: combined annual salary basis for in-house accounting labor. (example: 185000)
                        </p>
                    </div>

                    </div>

                    {/* TIME SAVINGS SELECTOR */}
                    <div className="mt-10 mb-6 text-center bg-[#f7faf7] border border-[#2c4a30]/20 rounded-xl p-6">
                        <p className="text-base font-semibold text-[#2c4a30] mb-3">
                            Estimated Enterprise Admin Time Savings
                        </p>

                        <p className="text-sm text-gray-700 mb-4">
                            Choose the percentage reduction you want to model for enterprise administrative workload.
                        </p>

                        <select
                            value={timeSavingsPercent}
                            onChange={(e) => setTimeSavingsPercent(Number(e.target.value))}
                            className="border p-2 rounded w-32 mx-auto block"
                        >
                            <option value={30}>30%</option>
                            <option value={40}>40%</option>
                            <option value={50}>50%</option>
                            <option value={60}>60%</option>
                            <option value={70}>70%</option>
                            <option value={80}>80%</option>
                            <option value={90}>90%</option>
                        </select>
                    </div>



                    {/* Enterprise Oversight Tasks */}
                    <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4 text-center">
                            Weekly Enterprise Oversight Workload
                        </h3>

                        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-6">
                            Enter hours, employee count, and hourly rates for each cross-location task.
                            This model applies your selected automation/efficiency reduction to this category.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-[#f0f7f2] text-[#2c4a30]">
                                        <th className="p-3 text-center border border-gray-200 whitespace-normal leading-tight w-[38%]">
                                            Enterprise Task
                                        </th>
                                        <th className="p-3 text-center border border-gray-200 whitespace-normal leading-tight w-[21%]">
                                            Hours / Week Each Employee
                                        </th>
                                        <th className="p-3 text-center border border-gray-200 whitespace-normal leading-tight w-[21%]">
                                            Employees Assigned Across Locations
                                        </th>
                                        <th className="p-3 text-center border border-gray-200 whitespace-normal leading-tight w-[20%]">
                                            Avg Hourly Rate ($)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enterpriseTasks.map((task, index) => (
                                        <tr key={task}>
                                            <td className="p-3 border border-gray-200">{task}</td>

                                            <td className="p-3 border border-gray-200">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.25"
                                                    className="border p-2 rounded w-full"
                                                    onChange={(e) =>
                                                        updateTask(index, "hours", Number(e.target.value) || 0)
                                                    }
                                                />
                                            </td>

                                            <td className="p-3 border border-gray-200">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    className="border p-2 rounded w-full"
                                                    onChange={(e) =>
                                                        updateTask(index, "employees", Number(e.target.value) || 0)
                                                    }
                                                />
                                            </td>

                                            <td className="p-3 border border-gray-200">
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    className="border p-2 rounded w-full"
                                                    onChange={(e) =>
                                                        updateTask(index, "rate", Number(e.target.value) || 0)
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {(() => {
                        const totalAnnualAdminValue =
                            taskInputs.reduce((total, task) => {
                                return total + task.hours * task.rate * task.employees * 52;
                            }, 0);

                        const modeledAdminSavings = totalAnnualAdminValue * (timeSavingsPercent / 100);

                        const acctHours = Number(accountingHoursPerWeek) || 0;
                        const acctSalary = Number(accountingAnnualSalary) || 0;

                        const accountingHourlyRate =
                            acctSalary > 0 ? acctSalary / 2080 : 0;

                        const annualAccountingCost =
                            acctHours * 52 * accountingHourlyRate;

                        const totalSavings =
                            Number(calculateSavings().replace(/,/g, ""));

                        const tier =
                            locationTier !== "" ? enterprisePricing[locationTier] : null;

                        const estimatedEnterpriseSubscription =
                            tier ? tier.monthly * 12 : 0;

                        return (
                            <div className="border-t border-gray-200 pt-8 text-center">

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Annual Admin Labor Value
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${totalAnnualAdminValue.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Modeled Admin Savings ({timeSavingsPercent}%)
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${modeledAdminSavings.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Optional Accounting Cost Modeled
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${annualAccountingCost.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Enterprise Subscription (Annual)
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${estimatedEnterpriseSubscription.toLocaleString()}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-8 max-w-3xl mx-auto text-center border-t border-gray-200 pt-6">
                                    <p className="text-lg font-semibold text-[#2c4a30]">
                                        Total Estimated Annual Enterprise Savings
                                    </p>
                                    <p className="text-3xl font-bold text-[#2c4a30] mt-3">
                                        ${totalSavings.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-3">
                                        Includes software, processing, enterprise oversight labor, and optional accounting elimination.
                                    </p>
                                </div>

                            </div>
                        );
                    })()}

                </div>
            </section>

            {/* ENTERPRISE COMPARISON */}
            <section className="py-14 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Enterprise Comparison: Operational Risk vs Structured Control
                    </h2>
                    <p className="text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
                        At enterprise scale, differences in process discipline become financial outcomes.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-[#f0f7f2] text-[#2c4a30]">
                                <th className="p-4 border border-gray-200 text-left font-semibold w-1/3">
                                    Operational Area
                                </th>
                                <th className="p-4 border border-gray-200 text-left font-semibold w-1/3">
                                    Typical Legacy Workflow
                                </th>
                                <th className="p-4 border border-gray-200 text-left font-semibold w-1/3">
                                    Enterprise Structured Workflow
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border border-gray-200 font-medium">Deposit Reconciliation</td>
                                <td className="p-4 border border-gray-200">Location-by-location manual checks with inconsistent controls.</td>
                                <td className="p-4 border border-gray-200">Standardized deposit logic with centralized visibility and cleaner audit trails.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-200 font-medium">Cross-Location Staffing</td>
                                <td className="p-4 border border-gray-200">Manager-dependent scheduling with variable execution by site.</td>
                                <td className="p-4 border border-gray-200">Structured staffing oversight with measurable workload consistency.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-200 font-medium">Executive Reporting</td>
                                <td className="p-4 border border-gray-200">Fragmented spreadsheets and delayed roll-up visibility.</td>
                                <td className="p-4 border border-gray-200">Consolidated reporting to support faster and more defensible decisions.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-gray-200 font-medium">Diligence / Exit Readiness</td>
                                <td className="p-4 border border-gray-200">Inconsistent records increase review friction and uncertainty.</td>
                                <td className="p-4 border border-gray-200">Cleaner, standardized operating data supports institutional diligence.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ENTERPRISE FAQ */}
            <section className="py-14 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Enterprise FAQ
                    </h2>
                    <p className="text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
                        Common questions from private equity teams and large independent operators.
                    </p>
                </div>

                <div className="space-y-5 max-w-3xl mx-auto">
                    {faqItems.map((item) => (
                        <div key={item.question} className="rounded-xl border border-gray-200 p-5 bg-white">
                            <h3 className="text-base font-semibold text-[#2c4a30] mb-2">
                                {item.question}
                            </h3>
                            <p className="text-sm text-gray-700 leading-7">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 border-t border-gray-200 text-center">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Build Institutional-Grade Discipline Without Losing Operational Focus
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/en/contact"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Schedule Enterprise Review
                    </Link>

                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Enterprise Private Equity and Owner Discussion"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Discuss PE and Owner Use Cases
                    </a>

                    <Link
                        href="/dog-boarding-software"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Back to Overview
                    </Link>
                </div>
            </section>

        </main>
    );
}
