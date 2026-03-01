'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

const TASKS = [
    "Staff scheduling & shift adjustments",
    "Invoicing & payment reconciliation",
    "Vaccine expiration checks",
    "Daily Task List / Checklist Prep",
    "Playgroup & Safety Planning",
    "Employee Performance Tracking & Raises",
    "Hiring Prep (job descriptions / onboarding)",
    "Accounting & Bookkeeping Prep",
    "Financial Analysis, Budgeting, and Forecasting",
    "Forecasting Occupancy & Labor Demand",
    "State Paperwork and Compliance"
];

export default function DogBoardingAndDaycareSoftwareMediumBusiness() {
    const locale = useLocale();

    const [subscriptionCost, setSubscriptionCost] = useState<number | "">("");
    const [accountingMonthly, setAccountingMonthly] = useState<number | "">("");
    const [hrMonthly, setHrMonthly] = useState<number | "">("");
    const [schedulingMonthly, setSchedulingMonthly] = useState<number | "">("");
    const [otherSoftwareMonthly, setOtherSoftwareMonthly] = useState<number | "">("");

    const [processingRate, setProcessingRate] = useState<number | "">("");
    const [flatFee, setFlatFee] = useState<number | "">("");
    const [transactionsPerYear, setTransactionsPerYear] = useState<number | "">("");
    const [averageTicket, setAverageTicket] = useState<number | "">("");

    const petuniaPlan = { monthly: 50, rate: 3.0, flat: 0.35 };

    const [taskInputs, setTaskInputs] = useState<{ hours: number; rate: number }[]>([]);

    const createAccountHref = `/${locale}/createnewaccount`;
    const smallBusinessHref = `/${locale}/dog-boarding-and-daycare-software-small-business`;
    const largeBusinessHref = `/${locale}/dog-boarding-and-daycare-software-large-business`;
    const overviewHref = `/${locale}/dog-boarding-software`;

    useEffect(() => {
        setTaskInputs(TASKS.map(() => ({ hours: 0, rate: 0 })));
    }, []);

    const [timeSavingsPercent, setTimeSavingsPercent] = useState(50); // Adjustable savings selector

    const updateTask = (index: number, field: "hours" | "rate", value: number) => {
        const updated = [...taskInputs];
        updated[index][field] = value;
        setTaskInputs(updated);
    };

    const calculateSavings = () => {
        const subCost = Number(subscriptionCost) || 0;
        const procRate = Number(processingRate) || 0;
        const flat = Number(flatFee) || 0;
        const txPerYear = Number(transactionsPerYear) || 0;
        const avgTicket = Number(averageTicket) || 0;

        const annualSoftware = subCost * 12;

        const accountingAnnual = (Number(accountingMonthly) || 0) * 12;
        const hrAnnual = (Number(hrMonthly) || 0) * 12;
        const schedulingAnnual = (Number(schedulingMonthly) || 0) * 12;
        const otherSoftwareAnnual = (Number(otherSoftwareMonthly) || 0) * 12;

        const annualProcessing =
            txPerYear *
            ((procRate / 100) * avgTicket + flat);

        const petuniaSubscription = petuniaPlan.monthly * 12;

        const petuniaProcessing =
            txPerYear *
            ((petuniaPlan.rate / 100) * avgTicket +
                petuniaPlan.flat);

        const totalAnnualLaborValue =
            taskInputs.reduce((total, task) => {
                return total + (task.hours || 0) * (task.rate || 0) * 52;
            }, 0);

        const annualLaborSavings =
            totalAnnualLaborValue * (timeSavingsPercent / 100);

        const savings =
            (
                annualSoftware +
                accountingAnnual +
                hrAnnual +
                schedulingAnnual +
                otherSoftwareAnnual +
                annualProcessing +
                annualLaborSavings
            ) -
            (petuniaSubscription + petuniaProcessing);

        return savings.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Petunia Growth',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            'Dog boarding and daycare software for growing businesses that need staffing structure and financial visibility.',
        offers: {
            '@type': 'Offer',
            price: '50',
            priceCurrency: 'USD',
        },
        areaServed: 'US',
        url: '/en/dog-boarding-and-daycare-software-medium-business',
    };

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
                name: 'Dog Boarding and Daycare Software Medium Business',
                item: '/en/dog-boarding-and-daycare-software-medium-business',
            },
        ],
    };

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 bg-white">
            <Script
                id="medium-software-application-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <Script
                id="medium-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* HERO */}
            <section className="py-16 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] mb-6">
                    Dog Boarding & Daycare Software for Businesses Scaling Fast
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-2xl mx-auto mb-6">
                    Growth rarely happens gradually.
                    It happens all at once.
                    Suddenly you’re hiring nonstop, rewriting job descriptions,
                    conducting interviews, expanding services, and drowning in paperwork.
                </p>

                <p className="text-base text-gray-700 leading-8 max-w-2xl mx-auto">
                    Everything you did as a small business is now amplified by ten —
                    and you have even less time than before.
                    Petunia Growth is structured operational infrastructure built
                    to eliminate that chaos and restore control.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href={createAccountHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md text-center"
                    >
                        Start Growth Plan — $50/month
                    </Link>

                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Growth Consultation Inquiry"
                        className="border border-[#2c4a30] text-[#2c4a30] px-8 py-4 rounded-xl transition font-semibold hover:bg-[#f4f4f4] text-center"
                    >
                        Schedule a Growth Consultation
                    </a>
                </div>
            </section>

            <section className="md:hidden py-4 border-t border-gray-200">
                <div className="rounded-xl border border-[#d9cfc2] bg-[#fafaf8] p-3">
                    <div className="flex flex-wrap gap-2">
                        <a href="#medium-growth" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Growth</a>
                        <a href="#medium-infrastructure" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Infrastructure</a>
                        <a href="#medium-calculator" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Calculator</a>
                        <a href="#medium-cta" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Get Started</a>
                    </div>
                </div>
            </section>

            {/* GROWTH SHIFT */}
            <section id="medium-growth" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Growth Multiplies Complexity
                </h2>

                <div className="block">
                    <div className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    <p>
                        You’re up before the sun rises and awake long after it sets.
                        Hiring never seems to stop.
                        Payroll expands. Bookkeeping becomes heavier.
                        You’re buying more equipment, expanding services,
                        and juggling more revenue streams than ever before.
                    </p>

                    <p>
                        What used to be manageable now feels overwhelming.
                        Tax season becomes stressful.
                        Quarterly filings become real.
                        Your accounting grows exponentially.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        At this stage, time is your most limited resource —
                        and structure becomes non-negotiable.
                    </p>

                    <div className="mt-10 max-w-3xl mx-auto text-center">
                        <h3 className="text-xl font-semibold text-[#2c4a30] mb-4">
                            Growth Also Magnifies Financial Leakage
                        </h3>

                        <div className="space-y-6 text-base text-gray-700 leading-8">
                            <p>
                                Small inefficiencies that were manageable at $120,000 in annual revenue
                                become meaningful at $400,000 or $600,000. A minor processing spread,
                                a small reconciliation error, or inconsistent deposit handling
                                begins to compound over thousands of transactions.
                            </p>

                            <p>
                                A $0.10 difference in flat transaction fees across 15,000 transactions
                                equals $1,500 per year. Five unnecessary administrative hours per week
                                equals 260 hours per year. At medium scale, these are no longer small details —
                                they are margin decisions.
                            </p>

                            <p>
                                Growth infrastructure isn’t about adding complexity.
                                It’s about eliminating financial drift before it quietly erodes profitability.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* WHY GROWTH WORKS */}
            <section id="medium-infrastructure" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Infrastructure for Real Operators
                </h2>

                <div className="block">
                    <div className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    <p>
                        Advanced employee management tools, structured checklists,
                        smarter scheduling, automated deposit tracking, and clean
                        reporting reduce the manual workload that consumes your day.
                    </p>

                    <p>
                        Instead of spending evenings buried in spreadsheets,
                        you spend your time leading your team and growing the business.
                        Instead of scrambling at tax time,
                        you operate with financial clarity year-round.
                    </p>

                    <p>
                        At this size, profit margins matter more.
                        Systems matter more.
                        And if you’re successful, the business itself becomes
                        a real asset — something that could one day be sold
                        or positioned for a buyout.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        Petunia Growth gives you structure from day one —
                        so scale strengthens your business instead of stressing it.
                    </p>

                    <div className="mt-10 max-w-3xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/15 rounded-2xl p-8 text-center">
                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                            Discuss Your Growth Stage Before You Commit
                        </h3>

                        <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                            Medium-stage facilities often benefit from a short strategic review.
                            We can walk through your current revenue volume, processing structure,
                            team size, and operational complexity to determine if Growth is the right fit.
                        </p>

                        <a
                            href="mailto:admin@petuniapets.com?subject=Petunia Growth Strategy Discussion"
                            className="inline-block bg-[#2c4a30] text-white px-8 py-3 rounded-lg hover:bg-[#243d27] transition font-semibold"
                        >
                            Request a Growth Strategy Call
                        </a>
                    </div>
                </div>
                </div>
            </section>

            {/* SELF-REQUALIFICATION SECTION */}
            <div className="mt-16 max-w-3xl mx-auto border-t border-gray-200 pt-12 text-center">
                <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                    Are You in the Growth Stage?
                </h3>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    Growth often happens faster than expected.
                    If hiring feels constant, bookkeeping is heavier than ever,
                    and operational complexity is multiplying,
                    you may already be in the medium stage.
                </p>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    Many facilities at this phase generate roughly $150,000 to $750,000
                    in annual revenue — though that range varies by region and pricing.
                    Revenue alone isn’t the indicator. What problems do you have to
                    personally handle most often? Where is your time being spent?
                    What tasks are still manually completed? These are your indicators.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                    <Link
                        href={smallBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Small Business →
                    </Link>

                    <Link
                        href={largeBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Large Business →
                    </Link>

                    <Link
                        href={overviewHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        ← Back to Overview
                    </Link>

                </div>
            </div>

            {/* SAVINGS CALCULATOR */}
            <section id="medium-calculator" className="py-14 border-t border-gray-200 scroll-mt-24">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Use this Calculator to Estimate You Annual Savings by Implementing or Switching to Petunia!
                        Step 1: Measure the Financial Impact of Growth
                    </h2>

                    <div className="mt-6 space-y-6 text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                        <p>
                            At this stage, you are no longer comparing software features.
                            You are evaluating operational efficiency, margin preservation,
                            and long-term financial discipline.
                        </p>

                        <p>
                            The calculator below is the starting point. Enter real numbers —
                            your current subscriptions, processing structure, administrative workload,
                            and transaction volume. The output reflects measurable financial impact.
                        </p>
                    </div>

                    <div className="mt-6 space-y-6 text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                        <p>
                            The calculator begins with Petunia Growth’s annual cost already applied
                            ($50 × 12 = $600). As you enter your details, the estimate adjusts in real time.
                        </p>

                        <p>
                            If the calculator shows meaningful annual savings or reclaimed time,
                            that is your signal to schedule a Growth strategy discussion so we can
                            validate the assumptions and refine the model with you.
                        </p>

                        <p>
                            If the numbers do not clearly show savings, that is equally important.
                            Reach out. We can review your inputs together to ensure the comparison
                            reflects your true processing structure and operational workload.
                        </p>

                        <p className="font-medium text-[#2c4a30]">
                            The goal is clarity and ensuring you have the best fit for your business model!
                        </p>
                    </div>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">

                    {/* Core Financial Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Current Monthly Booking Software ($)
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
                                Enter your current monthly boarding/daycare software subscription. (example: 100)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Monthly Accounting Software ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={accountingMonthly}
                                onChange={(e) =>
                                    setAccountingMonthly(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Include QuickBooks, Xero, or any bookkeeping platforms. (example: 139)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Monthly Payroll / HR Software ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={hrMonthly}
                                onChange={(e) =>
                                    setHrMonthly(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Include payroll systems, HR tools, or compliance software. (example: 29)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Monthly Staff Scheduling Software ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={schedulingMonthly}
                                onChange={(e) =>
                                    setSchedulingMonthly(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Enter any scheduling or shift management platform fees. (example: 49)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Other Monthly Software Tools ($)
                            </label>
                            <input
                                type="number"
                                className="border p-4 rounded-lg w-full"
                                value={otherSoftwareMonthly}
                                onChange={(e) =>
                                    setOtherSoftwareMonthly(e.target.value === "" ? "" : Number(e.target.value))
                                }
                            />
                            <p className="text-sm text-gray-600 leading-6 mt-2">
                                Include any additional SaaS tools not listed above. (example: 150)
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
                                Total card transactions processed annually. (example: 6492)
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
                                Average charge per invoice. (example: 79.38)
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
                                Enter percentage only (example: 3.20 or 3.25).
                            </p>
                        </div>

                        <div className="sm:col-span-2">
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
                                Enter dollar amount only (example: 0.30).
                            </p>
                        </div>

                    </div>

                    {/* TIME SAVINGS SELECTOR */}
                    <div className="mt-10 mb-6 text-center bg-[#f7faf7] border border-[#2c4a30]/20 rounded-xl p-6">
                        <p className="text-base font-semibold text-[#2c4a30] mb-3">
                            Estimated Time Savings Percentage
                        </p>

                        <p className="text-sm text-gray-700 mb-4">
                            Adjust based on your confidence level. Medium-stage operators often report 50–90% reduction in administrative time.
                        </p>

                        <select
                            value={timeSavingsPercent}
                            onChange={(e) => setTimeSavingsPercent(Number(e.target.value))}
                            className="border p-2 rounded w-32 mx-auto block"
                        >
                            <option value={50}>50%</option>
                            <option value={60}>60%</option>
                            <option value={70}>70%</option>
                            <option value={80}>80%</option>
                            <option value={90}>90%</option>
                        </select>
                    </div>

                    {/* Time & Administrative Impact */}
                    <div className="border-t border-gray-200 pt-8">

                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4 text-center">
                            Weekly Administrative Time at This Stage
                        </h3>

                        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-6">
                            Estimate the weekly hours spent managing growth complexity.
                            Petunia Growth conservatively assumes a 50% reduction.
                        </p>

                        <div className="md:hidden space-y-3">
                            {TASKS.map((task, i) => (
                                <div key={task} className="rounded-xl border border-gray-200 bg-white p-4">
                                    <p className="text-sm font-semibold text-[#2c4a30] mb-3">{task}</p>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-xs text-gray-600 mb-1">Hours / Week</label>
                                            <input
                                                type="number"
                                                className="border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    updateTask(i, "hours", Number(e.target.value) || 0)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 mb-1">Hourly Rate ($)</label>
                                            <input
                                                type="number"
                                                className="border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    updateTask(i, "rate", Number(e.target.value) || 0)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-[#f0f7f2] text-[#2c4a30]">
                                        <th className="p-4 border border-gray-200 text-left font-semibold w-[45%]">
                                            Task
                                        </th>
                                        <th className="p-4 border border-gray-200 text-center font-semibold w-[20%]">
                                            Hours / Week
                                        </th>
                                        <th className="p-4 border border-gray-200 text-center font-semibold w-[25%]">
                                            Hourly Rate ($)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TASKS.map((task, i) => (
                                        <tr key={task}>
                                            <td className="p-4 border border-gray-200">{task}</td>
                                            <td className="p-4 border border-gray-200">
                                                <input
                                                    type="number"
                                                    className="border p-2 rounded w-full"
                                                    onChange={(e) =>
                                                        updateTask(i, "hours", Number(e.target.value) || 0)
                                                    }
                                                />
                                            </td>
                                            <td className="p-4 border border-gray-200">
                                                <input
                                                    type="number"
                                                    className="border p-2 rounded w-full"
                                                    onChange={(e) =>
                                                        updateTask(i, "rate", Number(e.target.value) || 0)
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

                        const totalAnnualLaborValue =
                            taskInputs.reduce((total, task) => {
                                return total + (task.hours || 0) * (task.rate || 0) * 52;
                            }, 0);

                        const annualLaborSavings =
                            totalAnnualLaborValue * (timeSavingsPercent / 100);

                        const totalWeeklyHours =
                            taskInputs.reduce((sum, task) => sum + (task.hours || 0), 0);

                        const totalHoursSaved =
                            totalWeeklyHours * 52 * (timeSavingsPercent / 100);

                        const weeksReclaimed =
                            totalHoursSaved / 40;

                        const totalSavings =
                            Number(calculateSavings().replace(/,/g, ""));

                        return (
                            <div className="border-t border-gray-200 pt-8 text-center">

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Annual Admin Labor Value
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${totalAnnualLaborValue.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Estimated Labor Savings
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${annualLaborSavings.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Hours Saved Per Year
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            {totalHoursSaved.toLocaleString()} hrs
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Estimated Annual Savings
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${totalSavings.toLocaleString()}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-8 max-w-3xl mx-auto text-center border-t border-gray-200 pt-6">

                                    <p className="text-base text-gray-700 leading-7">
                                        That’s approximately{" "}
                                        <span className="font-semibold text-[#2c4a30]">
                                            {weeksReclaimed.toFixed(2)} full workweeks
                                        </span>{" "}
                                        every year.
                                    </p>

                                    <p className="text-sm text-gray-600 mt-3 leading-6">
                                        Time that could be spent strengthening leadership,
                                        improving margins, mentoring managers,
                                        or building the next stage of your business.
                                    </p>

                                </div>
                            </div>
                        );

                    })()}

                </div>
            </section>

            {/* CTA */}
            <section id="medium-cta" className="py-16 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Grow Without Losing Control
                </h2>

                <Link
                    href={createAccountHref}
                    className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                >
                    Choose to Grow With Petunia
                </Link>
            </section>

            {/* STAGE NAVIGATION */}
            <section className="py-16 border-t border-gray-200 text-center">
                <h3 className="text-lg font-semibold text-[#2c4a30] mb-6">
                    Explore Other Stages
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">

                    <Link
                        href={smallBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Small Business →
                    </Link>

                    <Link
                        href={largeBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Large / Multi-Location →
                    </Link>

                    <Link
                        href={overviewHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        ← Back to Overview
                    </Link>

                </div>
            </section>

        </main>
    );
}
