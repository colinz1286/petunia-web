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

export default function DogBoardingAndDaycareSoftwareLargeBusiness() {
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
    const [includeDailyOps, setIncludeDailyOps] = useState(false);
    const [includeHrFinance, setIncludeHrFinance] = useState(false);
    const [includeWebsiteHosting, setIncludeWebsiteHosting] = useState(false);
    const [websiteHostingContract, setWebsiteHostingContract] = useState<"1-year" | "3-year">("1-year");
    const [currentWebsiteHostingBilling, setCurrentWebsiteHostingBilling] = useState<"monthly" | "annual">("monthly");
    const [currentWebsiteHostingCost, setCurrentWebsiteHostingCost] = useState<number | "">("");

    const [taskInputs, setTaskInputs] = useState<{ hours: number; rate: number }[]>([]);
    const [calculationResult, setCalculationResult] = useState<{
        totalAnnualLaborValue: number;
        annualLaborSavings: number;
        totalHoursSaved: number;
        weeksReclaimed: number;
        totalSavings: number;
        annualSoftware: number;
        annualCurrentWebsiteHostingCost: number;
        accountingAnnual: number;
        hrAnnual: number;
        schedulingAnnual: number;
        otherSoftwareAnnual: number;
        annualProcessing: number;
        petuniaSubscription: number;
        petuniaProcessing: number;
    } | null>(null);
    const [lastCalculatedSignature, setLastCalculatedSignature] = useState("");
    const [isSavingEstimate, setIsSavingEstimate] = useState(false);
    const [estimateSaveError, setEstimateSaveError] = useState<string | null>(null);

    const createAccountHref = `/${locale}/createnewaccount`;
    const smallBusinessHref = `/${locale}/dog-boarding-and-daycare-software-small-business`;
    const mediumBusinessHref = `/${locale}/dog-boarding-and-daycare-software-medium-business`;
    const enterpriseHref = `/${locale}/dog-boarding-and-daycare-software-enterprise`;
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

    const computeEstimate = () => {
        const subCost = Number(subscriptionCost) || 0;
        const procRate = Number(processingRate) || 0;
        const flat = Number(flatFee) || 0;
        const txPerYear = Number(transactionsPerYear) || 0;
        const avgTicket = Number(averageTicket) || 0;

        const annualSoftware = subCost * 12;
        const annualCurrentWebsiteHostingCost =
            includeWebsiteHosting
                ? currentWebsiteHostingBilling === "monthly"
                    ? (Number(currentWebsiteHostingCost) || 0) * 12
                    : (Number(currentWebsiteHostingCost) || 0)
                : 0;

        const accountingAnnual = (Number(accountingMonthly) || 0) * 12;
        const hrAnnual = (Number(hrMonthly) || 0) * 12;
        const schedulingAnnual = (Number(schedulingMonthly) || 0) * 12;
        const otherSoftwareAnnual = (Number(otherSoftwareMonthly) || 0) * 12;

        const annualProcessing =
            txPerYear *
            ((procRate / 100) * avgTicket + flat);

        const petuniaSubscription =
            (10 * 12) +
            (includeDailyOps ? 20 * 12 : 0) +
            (includeHrFinance ? 109 * 12 : 0) +
            (includeWebsiteHosting
                ? (websiteHostingContract === "1-year" ? 79 : 149 / 3)
                : 0);

        const petuniaProcessing =
            txPerYear *
            ((3.0 / 100) * avgTicket + 0.45);

        const totalAnnualLaborValue =
            taskInputs.reduce((total, task) => {
                return total + (task.hours || 0) * (task.rate || 0) * 52;
            }, 0);

        const annualLaborSavings =
            totalAnnualLaborValue * (timeSavingsPercent / 100);

        const savings =
            (
                annualSoftware +
                annualCurrentWebsiteHostingCost +
                accountingAnnual +
                hrAnnual +
                schedulingAnnual +
                otherSoftwareAnnual +
                annualProcessing +
                annualLaborSavings
            ) -
            (petuniaSubscription + petuniaProcessing);

        const totalWeeklyHours =
            taskInputs.reduce((sum, task) => sum + (task.hours || 0), 0);

        const totalHoursSaved =
            totalWeeklyHours * 52 * (timeSavingsPercent / 100);

        const weeksReclaimed =
            totalHoursSaved / 40;

        return {
            totalAnnualLaborValue,
            annualLaborSavings,
            totalHoursSaved,
            weeksReclaimed,
            totalSavings: savings,
            annualSoftware,
            annualCurrentWebsiteHostingCost,
            accountingAnnual,
            hrAnnual,
            schedulingAnnual,
            otherSoftwareAnnual,
            annualProcessing,
            petuniaSubscription,
            petuniaProcessing,
        };
    };

    const currentInputSnapshot = {
        subscriptionCost,
        accountingMonthly,
        hrMonthly,
        schedulingMonthly,
        otherSoftwareMonthly,
        processingRate,
        flatFee,
        transactionsPerYear,
        averageTicket,
        includeDailyOps,
        includeHrFinance,
        includeWebsiteHosting,
        websiteHostingContract,
        currentWebsiteHostingBilling,
        currentWebsiteHostingCost,
        timeSavingsPercent,
        taskInputs,
    };
    const currentInputSignature = JSON.stringify(currentInputSnapshot);
    const needsRecalculate =
        calculationResult !== null && currentInputSignature !== lastCalculatedSignature;

    const handleCalculate = async () => {
        const result = computeEstimate();
        setCalculationResult(result);
        setLastCalculatedSignature(currentInputSignature);
        setEstimateSaveError(null);

        const endpoint = process.env.NEXT_PUBLIC_SAVINGS_ESTIMATE_ENDPOINT;
        if (!endpoint) {
            return;
        }

        try {
            setIsSavingEstimate(true);
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page: "/en/dog-boarding-and-daycare-software-large-business",
                    segment: "large-business",
                    createdAtClient: new Date().toISOString(),
                    inputs: currentInputSnapshot,
                    results: result,
                }),
            });

            if (!response.ok) {
                throw new Error(`Estimate save failed: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            setEstimateSaveError("Calculation shown, but estimate could not be saved.");
        } finally {
            setIsSavingEstimate(false);
        }
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Petunia Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            'Dog boarding and daycare software for established facilities focused on financial discipline and long-term value.',
        offers: {
            '@type': 'Offer',
            price: '10',
            priceCurrency: 'USD',
        },
        areaServed: 'US',
        url: '/en/dog-boarding-and-daycare-software-large-business',
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
                name: 'Dog Boarding and Daycare Software Large Business',
                item: '/en/dog-boarding-and-daycare-software-large-business',
            },
        ],
    };

    return (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 bg-white">
            <Script
                id="large-software-application-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <Script
                id="large-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* HERO */}
            <section className="py-16 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] mb-6">
                    Software for Established Dog Boarding & Daycare Owners
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-3xl mx-auto mb-6">
                    You built something real. You carried the risk, hired the team,
                    weathered the slow seasons, and earned your reputation.
                    Now your operation runs at meaningful volume.
                </p>

                <p className="text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                    At this level, systems directly impact margin, valuation,
                    expansion potential, and eventual exit conversations.
                    Petunia Platform is built for disciplined ownership.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Platform Owner Strategy Discussion"
                        className="border border-[#2c4a30] text-[#2c4a30] px-8 py-4 rounded-xl transition font-semibold hover:bg-[#f4f4f4] text-center"
                    >
                        Discuss Long-Term Strategy
                    </a>
                </div>
            </section>

            <section className="md:hidden py-4 border-t border-gray-200">
                <div className="rounded-xl border border-[#d9cfc2] bg-[#fafaf8] p-3">
                    <div className="flex flex-wrap gap-2">
                        <a href="#large-exposure" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Exposure</a>
                        <a href="#large-readiness" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Readiness</a>
                        <a href="#large-calculator" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Calculator</a>
                        <a href="#large-cta" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Get Started</a>
                    </div>
                </div>
            </section>

            {/* SCALE & OWNERSHIP SHIFT */}
            <section id="large-exposure" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Volume Magnifies Financial Exposure
                </h2>

                <div className="block">
                    <div className="space-y-6 text-gray-700 leading-8 max-w-3xl mx-auto">
                    <p>
                        At higher revenue levels, small inconsistencies become material financial risk.
                        Deposit liability compounds. Processing spreads multiply.
                        Reconciliation errors scale with volume.
                    </p>

                    <p>
                        A $0.10 flat transaction difference across 40,000 annual transactions
                        equals $4,000 per year. Five unnoticed administrative hours per week
                        equals 260 hours of leadership time lost.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        Large operations require structured systems — not patched workflows.
                    </p>
                </div>
                </div>
            </section>

            {/* WHY GROWTH WORKS */}
            <section id="large-readiness" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Built for Expansion, Valuation, and Exit Readiness
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
                        Petunia Platform gives you structured financial discipline —
                        so scale strengthens valuation instead of increasing risk.
                    </p>

                    <div className="mt-10 max-w-3xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/15 rounded-2xl p-8 text-center">
                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                            Owner-Level Strategic Review
                        </h3>

                        <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                            Established operators often benefit from a structured financial review.
                            We can walk through your current revenue volume, processing spread,
                            reporting structure, and long-term objectives — whether expansion,
                            capital planning, or exit preparation.
                        </p>

                        <a
                            href="mailto:admin@petuniapets.com?subject=Petunia Platform Owner Strategy Discussion"
                            className="inline-block bg-[#2c4a30] text-white px-8 py-3 rounded-lg hover:bg-[#243d27] transition font-semibold"
                        >
                            Schedule Owner Strategy Call
                        </a>
                    </div>
                </div>
                </div>
            </section>

            {/* FINALIZED PRICING MODEL */}
            <section className="py-12 border-t border-gray-200 scroll-mt-24">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-3">
                        Finalized Operator Pricing Model
                    </h2>
                    <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
                        Start with affordable core infrastructure, then layer in advanced systems only when
                        operational complexity justifies it. This is stage alignment, not feature gating.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-gray-700 max-w-3xl mx-auto">
                        Too many platforms keep raising prices while operators are still using largely the same workflows.
                        Petunia is built to move daily operations forward with measurable improvements, not recycled feature lists.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-2xl border border-[#2c4a30]/20 bg-[#f0f7f2] p-6">
                        <p className="text-sm font-semibold text-[#2c4a30]">Core Platform</p>
                        <p className="mt-2 text-3xl font-bold text-[#2c4a30]">$10</p>
                        <p className="text-sm text-gray-700">per location / month</p>
                        <p className="mt-4 text-sm text-gray-700 leading-6">
                            Includes booking, clients/pets, waivers, messaging, integrated payments,
                            automated invoicing, deposit tracking, recurring revenue engine, and client portal.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <p className="text-sm font-semibold text-gray-900">Add-Ons</p>
                        <div className="mt-4 space-y-4 text-sm text-gray-700">
                            <div className="rounded-xl border border-gray-200 p-4">
                                <p className="font-semibold text-[#2c4a30]">
                                    Intelligent Daily Operations System — $20 / month
                                </p>
                                <p className="mt-2 leading-6">
                                    Automatically generates real-time daily checklists based on routine tasks and dogs
                                    currently on property to reduce missed steps and daily chaos.
                                </p>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-4">
                                <p className="font-semibold text-[#2c4a30]">
                                    Employment, Human Resources &amp; Financial Management — $109 / month
                                </p>
                                <p className="mt-2 leading-6">
                                    Includes intelligent scheduling, labor-to-revenue analytics, profit tracking, and
                                    playgroup intelligence.
                                </p>
                                <p className="mt-2 text-xs leading-5 text-gray-600">
                                    Requires payment processing to be enabled; transactions must run through Petunia for accurate analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <p className="text-sm font-semibold text-gray-900">Website Hosting</p>
                        <div className="mt-3 space-y-2 text-sm text-gray-700">
                            <p><span className="font-semibold text-[#2c4a30]">1-Year Contract:</span> $79</p>
                            <p><span className="font-semibold text-[#2c4a30]">3-Year Contract:</span> $149</p>
                            <p className="text-xs text-gray-600 leading-5">
                                Mirror version hosted at www.petuniapets.com/yourbusinessname with unified booking navigation.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                        <p className="text-sm font-semibold text-gray-900">Optional Services</p>
                        <div className="mt-3 space-y-3 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold text-[#2c4a30]">Accelerated Data Migration — $250 one-time</p>
                                <p className="mt-1 leading-6">
                                    Up to 6-month rollover is included free; fast-track migration is available after evaluating
                                    facility size and complexity.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-[#2c4a30]">Financial History Migration — Scope-based pricing</p>
                                <p className="mt-1 leading-6">
                                    If historical financial reporting is requested, pricing depends on data volume and depth
                                    of metrics carried forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SELF-REQUALIFICATION SECTION */}
            <div className="mt-16 max-w-3xl mx-auto border-t border-gray-200 pt-12 text-center">
                <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                    Are You Operating at Established Scale?
                </h3>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    If your revenue is substantial, margins matter daily,
                    reporting must be clean, and you are thinking about
                    long-term asset value — you are operating at established scale.
                </p>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    Many established facilities exceed $750,000 in annual revenue.
                    At this level, your focus shifts from survival to optimization,
                    expansion planning, and protecting long-term business value.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                    <Link
                        href={smallBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Small Business →
                    </Link>

                    <Link
                        href={mediumBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Medium Business →
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
            <section id="large-calculator" className="py-14 border-t border-gray-200 scroll-mt-24">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Use this Calculator to Estimate Your Annual Savings by Implementing or Switching to Petunia!
                        Step 1: Measure the Financial Impact of Structured Operations
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
                            The calculator begins with Core pricing ($10/location/month) and lets you
                            layer add-ons and hosting to match your actual operating structure.
                        </p>

                        <p>
                            If the calculator shows meaningful annual savings or reclaimed time,
                            that is your signal to schedule a strategy discussion so we can
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
                    {/* Petunia Add-On Selection */}
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-[#2c4a30] mb-2">
                            Are you planning on adding any features to your software?
                        </label>
                        <p className="text-xs text-gray-600 mb-3">
                            Core Platform is automatically included at $10/location/month with 3.0% + $0.45 processing.
                        </p>
                        <div className="space-y-3 rounded-xl border border-gray-200 p-4 bg-white">
                            <label className="flex items-start gap-3 text-sm text-gray-700">
                                <input type="checkbox" checked={includeDailyOps} onChange={(e) => setIncludeDailyOps(e.target.checked)} className="mt-1" />
                                <span><span className="font-semibold text-[#2c4a30]">Intelligent Daily Operations System</span> — $20/month</span>
                            </label>
                            <label className="flex items-start gap-3 text-sm text-gray-700">
                                <input type="checkbox" checked={includeHrFinance} onChange={(e) => setIncludeHrFinance(e.target.checked)} className="mt-1" />
                                <span><span className="font-semibold text-[#2c4a30]">Employment, Human Resources &amp; Financial Management</span> — $109/month</span>
                            </label>
                            <div className="pt-1 border-t border-gray-200">
                                <label className="flex items-start gap-3 text-sm text-gray-700">
                                    <input type="checkbox" checked={includeWebsiteHosting} onChange={(e) => setIncludeWebsiteHosting(e.target.checked)} className="mt-1" />
                                    <span><span className="font-semibold text-[#2c4a30]">Website Hosting</span> — 1-Year: $79 or 3-Year: $149</span>
                                </label>
                                {includeWebsiteHosting && (
                                    <div className="mt-3 sm:ml-7 space-y-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">Website Hosting Contract</label>
                                            <select
                                                value={websiteHostingContract}
                                                onChange={(e) => setWebsiteHostingContract(e.target.value as "1-year" | "3-year")}
                                                className="border p-2 rounded w-full sm:w-60"
                                            >
                                                <option value="1-year">1-Year Contract ($79 annualized)</option>
                                                <option value="3-year">3-Year Contract ($49.67 annualized)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">Your Current Web Hosting Billing</label>
                                            <select
                                                value={currentWebsiteHostingBilling}
                                                onChange={(e) => setCurrentWebsiteHostingBilling(e.target.value as "monthly" | "annual")}
                                                className="border p-2 rounded w-full sm:w-60"
                                            >
                                                <option value="monthly">Monthly</option>
                                                <option value="annual">Annual</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                                Your Current Web Hosting Cost ({currentWebsiteHostingBilling === "monthly" ? "$ / month" : "$ / year"})
                                            </label>
                                            <input
                                                type="number"
                                                className="border p-2 rounded w-full sm:w-60"
                                                min="0"
                                                step="0.01"
                                                value={currentWebsiteHostingCost}
                                                onChange={(e) => setCurrentWebsiteHostingCost(e.target.value === "" ? "" : Number(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

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
                            Estimate the weekly hours spent managing scaling complexity.
                            Petunia conservatively assumes a 50% reduction.
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

                    <div className="border-t border-gray-200 pt-8 text-center">
                        {!calculationResult && (
                            <button
                                type="button"
                                onClick={handleCalculate}
                                disabled={isSavingEstimate}
                                className="bg-[#2c4a30] text-white px-8 py-3 rounded-md hover:bg-[#244024] transition disabled:opacity-60"
                            >
                                {isSavingEstimate ? "Calculating..." : "Calculate"}
                            </button>
                        )}

                        {calculationResult && needsRecalculate && (
                            <button
                                type="button"
                                onClick={handleCalculate}
                                disabled={isSavingEstimate}
                                className="bg-[#2c4a30] text-white px-8 py-3 rounded-md hover:bg-[#244024] transition disabled:opacity-60"
                            >
                                {isSavingEstimate ? "Recalculating..." : "Recalculate"}
                            </button>
                        )}

                        {calculationResult && (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-8">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Annual Admin Labor Value
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${calculationResult.totalAnnualLaborValue.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Estimated Labor Savings
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${calculationResult.annualLaborSavings.toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Hours Saved Per Year
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            {calculationResult.totalHoursSaved.toLocaleString()} hrs
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Estimated Annual Savings
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${calculationResult.totalSavings.toLocaleString(undefined, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 max-w-3xl mx-auto text-center border-t border-gray-200 pt-6">
                                    <p className="text-base text-gray-700 leading-7">
                                        That’s approximately{" "}
                                        <span className="font-semibold text-[#2c4a30]">
                                            {calculationResult.weeksReclaimed.toFixed(2)} full workweeks
                                        </span>{" "}
                                        every year.
                                    </p>

                                    <p className="text-sm text-gray-600 mt-3 leading-6">
                                        Time that could be spent strengthening leadership,
                                        improving margins, mentoring managers,
                                        or building the next stage of your business.
                                    </p>
                                </div>
                            </>
                        )}

                        {estimateSaveError && (
                            <p className="text-xs text-amber-700 mt-4">
                                {estimateSaveError}
                            </p>
                        )}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section id="large-cta" className="py-16 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Protect Margin. Strengthen Valuation. Lead with Discipline.
                </h2>

                <Link
                    href={createAccountHref}
                    className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                >
                    Start with Core on Petunia
                </Link>
            </section>

            {/* STAGE NAVIGATION */}
            <section className="py-16 border-t border-gray-200 text-center">
                <h3 className="text-lg font-semibold text-[#2c4a30] mb-5">
                    Explore Other Stages
                </h3>

                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 max-w-6xl mx-auto">

                    <Link
                        href={smallBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-4 py-2 rounded-lg transition text-sm font-semibold shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        Small Business →
                    </Link>

                    <Link
                        href={mediumBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-4 py-2 rounded-lg transition text-sm font-semibold shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        Medium Business →
                    </Link>

                    <Link
                        href={enterpriseHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-4 py-2 rounded-lg transition text-sm font-semibold shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        Multi-Location →
                    </Link>

                    <Link
                        href={overviewHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-4 py-2 rounded-lg transition text-sm font-semibold shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        ← Overview
                    </Link>

                </div>
            </section>

        </main>
    );
}
