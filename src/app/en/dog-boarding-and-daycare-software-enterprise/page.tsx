'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { useLocale } from 'next-intl';

const ENTERPRISE_TASKS = [
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

const ENTERPRISE_COMPARISON_ROWS = [
    {
        area: "Deposit Reconciliation",
        legacy: "Location-by-location manual checks with inconsistent controls.",
        structured: "Standardized deposit logic with centralized visibility and cleaner audit trails.",
    },
    {
        area: "Cross-Location Staffing",
        legacy: "Manager-dependent scheduling with variable execution by site.",
        structured: "Structured staffing oversight with measurable workload consistency.",
    },
    {
        area: "Executive Reporting",
        legacy: "Fragmented spreadsheets and delayed roll-up visibility.",
        structured: "Consolidated reporting to support faster and more defensible decisions.",
    },
    {
        area: "Diligence / Exit Readiness",
        legacy: "Inconsistent records increase review friction and uncertainty.",
        structured: "Cleaner, standardized operating data supports institutional diligence.",
    },
];

export default function DogBoardingAndDaycareSoftwareEnterprise() {
    const locale = useLocale();

    const [subscriptionCost, setSubscriptionCost] = useState<number | "">("");
    const [processingRate, setProcessingRate] = useState<number | "">("");
    const [flatFee, setFlatFee] = useState<number | "">("");
    const [transactionsPerYear, setTransactionsPerYear] = useState<number | "">("");
    const [averageTicket, setAverageTicket] = useState<number | "">("");
    const [timeSavingsPercent, setTimeSavingsPercent] = useState(50);
    const [includeDailyOps, setIncludeDailyOps] = useState(false);
    const [includeHrFinance, setIncludeHrFinance] = useState(false);
    const [includeWebsiteHosting, setIncludeWebsiteHosting] = useState(false);
    const [calculationResult, setCalculationResult] = useState<{
        totalAnnualAdminValue: number;
        annualLaborSavings: number;
        totalHoursSaved: number;
        weeksReclaimed: number;
        annualAccountingCost: number;
        totalSavings: number;
        estimatedEnterpriseSubscription: number;
        annualSoftware: number;
        annualProcessing: number;
        petuniaSubscription: number;
        petuniaProcessing: number;
    } | null>(null);
    const [lastCalculatedSignature, setLastCalculatedSignature] = useState("");
    const [isSavingEstimate, setIsSavingEstimate] = useState(false);
    const [estimateSaveError, setEstimateSaveError] = useState<string | null>(null);


    const [taskInputs, setTaskInputs] = useState<{
        hours: number;
        rate: number;
        employees: number;
    }[]>(
        ENTERPRISE_TASKS.map(() => ({
            hours: 0,
            rate: 0,
            employees: 0,
        }))
    );

    const contactHref = `/${locale}/contact`;
    const smallBusinessHref = `/${locale}/dog-boarding-and-daycare-software-small-business`;
    const mediumBusinessHref = `/${locale}/dog-boarding-and-daycare-software-medium-business`;
    const largeBusinessHref = `/${locale}/dog-boarding-and-daycare-software-large-business`;
    const overviewHref = `/${locale}/dog-boarding-software`;

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

    const computeEstimate = () => {
        const subCost = Number(subscriptionCost) || 0;
        const procRate = Number(processingRate) || 0;
        const flat = Number(flatFee) || 0;
        const txPerYear = Number(transactionsPerYear) || 0;
        const avgTicket = Number(averageTicket) || 0;

        // Competitor cost is whatever the user types — no multiplier
        const annualSoftware = subCost * 12;

        const annualProcessing =
            txPerYear *
            ((procRate / 100) * avgTicket + flat);

        const totalAnnualAdminValue =
            taskInputs.reduce((total, task) => {
                return total + task.hours * task.rate * task.employees * 52;
            }, 0);
        const annualLaborSavings =
            totalAnnualAdminValue * (timeSavingsPercent / 100);
        const annualAdminCost = annualLaborSavings;
        const totalWeeklyTaskHours =
            taskInputs.reduce((sum, task) => {
                return sum + task.hours * task.employees;
            }, 0);
        const totalHoursSaved =
            totalWeeklyTaskHours * 52 * (timeSavingsPercent / 100);
        const weeksReclaimed =
            totalHoursSaved / 40;


        const acctHours = Number(accountingHoursPerWeek) || 0;
        const acctSalary = Number(accountingAnnualSalary) || 0;

        const accountingHourlyRate =
            acctSalary > 0 ? acctSalary / 2080 : 0;

        const annualAccountingCost =
            acctHours * 52 * accountingHourlyRate;

        const petuniaSubscription =
            (10 * 12) +
            (includeDailyOps ? 15 * 12 : 0) +
            (includeHrFinance ? 79 * 12 : 0) +
            (includeWebsiteHosting ? 7 * 12 : 0);

        const petuniaProcessing =
            txPerYear *
            ((3.0 / 100) * avgTicket + 0.35);

        const savings =
            (annualSoftware +
                annualProcessing +
                annualAdminCost +
                annualAccountingCost) -
            (petuniaSubscription + petuniaProcessing);

        const estimatedEnterpriseSubscription = petuniaSubscription;

        return {
            totalAnnualAdminValue,
            annualLaborSavings,
            totalHoursSaved,
            weeksReclaimed,
            annualAccountingCost,
            totalSavings: savings,
            estimatedEnterpriseSubscription,
            annualSoftware,
            annualProcessing,
            petuniaSubscription,
            petuniaProcessing,
        };
    };

    const currentInputSnapshot = {
        subscriptionCost,
        processingRate,
        flatFee,
        transactionsPerYear,
        averageTicket,
        timeSavingsPercent,
        includeDailyOps,
        includeHrFinance,
        includeWebsiteHosting,
        accountingHoursPerWeek,
        accountingAnnualSalary,
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
                    page: "/en/dog-boarding-and-daycare-software-enterprise",
                    segment: "enterprise",
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
            'Multi-location software for dog boarding and daycare operators with centralized oversight and financial controls.',
        offers: {
            '@type': 'Offer',
            price: '10',
            priceCurrency: 'USD',
        },
        areaServed: 'US',
        url: '/en/dog-boarding-and-daycare-software-enterprise',
    };

    const faqItems = [
        {
            question: 'Is this platform only for private equity groups?',
            answer:
                'No. This platform is built for both private equity-backed multi-location groups and large independent owner-led operators who need disciplined oversight at scale.',
        },
        {
            question: 'What stage of operation is a fit for multi-location operators?',
            answer:
                'Multi-location operations are generally best for groups managing multiple locations, complex staffing, cross-location reconciliation, and leadership teams that need consolidated reporting.',
        },
        {
            question: 'How does this platform help with due diligence and exit readiness?',
            answer:
                'This platform centralizes operational and financial visibility, standardizes workflows, and improves reporting consistency, which supports cleaner diligence conversations and better strategic optionality.',
        },
        {
            question: 'Can we model ROI before making a decision?',
            answer:
                'Yes. The multi-location calculator on this page lets you model software, processing, administrative workload, and accounting burden to estimate annual financial impact.',
        },
        {
            question: 'What if we are a large single owner, not a PE platform?',
            answer:
                'The same systems still apply. Founder-led operators at large scale use this platform to protect margin, reclaim executive time, and run cleaner operations as they continue to grow.',
        },
        {
            question: 'Does this platform support phased rollout across locations?',
            answer:
                'Yes. Phased planning can be applied by location group so leadership can standardize operations while managing onboarding risk.',
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
                name: 'Multi-Location Dog Boarding and Daycare Software',
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
                    Multi-Location Software for Dog Boarding & Daycare Operators
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-3xl mx-auto mb-6">
                    At multi-location scale, software is not an operations convenience.
                    It is a control system for margin protection, reporting integrity,
                    and institutional execution across every location.
                </p>

                <p className="text-base text-gray-700 leading-8 max-w-3xl mx-auto">
                    This platform is built for centralized ownership groups,
                    private equity-backed platforms, and founder-led large operators that need
                    standardized workflows, consolidated visibility, and disciplined financial infrastructure.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href={contactHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md text-center"
                    >
                        Request Multi-Location Consultation
                    </Link>

                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Multi-Location Owner or Investor Review"
                        className="border border-[#2c4a30] text-[#2c4a30] px-8 py-4 rounded-xl transition font-semibold hover:bg-[#f4f4f4] text-center"
                    >
                        Owner or Investor Strategy Call
                    </a>
                </div>
            </section>

            <section className="md:hidden py-4 border-t border-gray-200">
                <div className="rounded-xl border border-[#d9cfc2] bg-[#fafaf8] p-3">
                    <div className="flex flex-wrap gap-2">
                        <a href="#enterprise-scale" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Scale</a>
                        <a href="#enterprise-oversight" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Oversight</a>
                        <a href="#enterprise-calculator" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Calculator</a>
                        <a href="#enterprise-comparison" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Comparison</a>
                    </div>
                </div>
            </section>

            {/* SCALE SHIFT */}
            <section id="enterprise-scale" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Scale Multiplies Governance and Financial Exposure
                </h2>

                <div className="block">
                    <div className="space-y-6 text-gray-700 leading-8 max-w-3xl mx-auto">
                        <p>
                            Multi-location operations introduce cross-site staffing complexity,
                            fragmented reconciliation, inconsistent local workflows,
                            and elevated compliance burden.
                        </p>

                        <p>
                            At this level, small process gaps become multi-location-level risk:
                            audit inconsistency, margin leakage, weak reporting controls,
                            and delayed executive decision-making.
                        </p>

                        <p>
                            For private equity groups, this is about diligence quality, integration discipline,
                            and defensible reporting across locations. For independent owners, it is about
                            protecting hard-earned margin while keeping leadership time focused on expansion.
                        </p>

                        <p className="font-medium text-[#2c4a30]">
                            Institutional operators need standardized execution and consolidated oversight.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY ENTERPRISE WORKS */}
            <section id="enterprise-oversight" className="py-14 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    Built for Oversight, Expansion, and Exit Readiness
                </h2>

                <div className="block">
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
                            Petunia supports controlled scalability without introducing unnecessary complexity.
                        </p>

                        <div className="mt-10 max-w-3xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/15 rounded-2xl p-8 text-center">
                            <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                                Multi-Location Alignment Review
                            </h3>

                            <p className="text-gray-700 leading-8 max-w-2xl mx-auto mb-6">
                                We can review location count, transaction volume, current processing structure,
                                labor overhead, and reporting requirements to confirm institutional fit
                                before rollout planning.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-3">
                                <a
                                    href="mailto:admin@petuniapets.com?subject=Petunia Multi-Location Alignment Review - Owner"
                                    className="inline-block bg-[#2c4a30] text-white px-8 py-3 rounded-lg hover:bg-[#243d27] transition font-semibold"
                                >
                                    Owner-Led Review
                                </a>
                                <a
                                    href="mailto:admin@petuniapets.com?subject=Petunia Multi-Location Alignment Review - Investor"
                                    className="inline-block border border-[#2c4a30] text-[#2c4a30] px-8 py-3 rounded-lg hover:bg-[#f4f4f4] transition font-semibold"
                                >
                                    Investor / PE Review
                                </a>
                            </div>
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
                                    Intelligent Daily Operations System — $15 / month
                                </p>
                                <p className="mt-2 leading-6">
                                    Automatically generates real-time daily checklists based on routine tasks and dogs
                                    currently on property to reduce missed steps and daily chaos.
                                </p>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-4">
                                <p className="font-semibold text-[#2c4a30]">
                                    Employment, Human Resources &amp; Financial Management — $79 / month
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
                            <p><span className="font-semibold text-[#2c4a30]">$7/mo</span></p>
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
                    Not Sure Multi-Location Is the Right Stage?
                </h3>

                <p className="space-y-6 text-gray-700 leading-8 max-w-2xl mx-auto">
                    If you are still operating as a single facility or an early expansion team,
                    one of the lower-stage models may be a better fit right now.
                    This stage is designed for centralized, multi-location operators.
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
                        href={largeBusinessHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                    >
                        Large Business →
                    </Link>
                </div>
            </div>

            {/* SAVINGS CALCULATOR */}
            <section id="enterprise-calculator" className="py-14 border-t border-gray-200 scroll-mt-24">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Step 1: Model Multi-Location Financial Impact
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

                        <div className="sm:col-span-2 rounded-xl border border-gray-200 p-4 bg-[#fafaf8]">
                            <p className="text-sm font-semibold text-[#2c4a30] mb-2">
                                Core Platform is automatically included at $10/month with 3.0% + $0.35 processing.
                            </p>
                            <p className="text-sm text-gray-700 mb-3">
                                Select any add-ons you want included in this estimate:
                            </p>
                            <div className="space-y-3">
                                <label className="flex items-start gap-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={includeDailyOps}
                                        onChange={(e) => setIncludeDailyOps(e.target.checked)}
                                        className="mt-1"
                                    />
                                    <span><span className="font-semibold text-[#2c4a30]">Intelligent Daily Operations System</span> — $15/month</span>
                                </label>
                                <label className="flex items-start gap-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={includeHrFinance}
                                        onChange={(e) => setIncludeHrFinance(e.target.checked)}
                                        className="mt-1"
                                    />
                                    <span><span className="font-semibold text-[#2c4a30]">Employment, Human Resources &amp; Financial Management</span> — $79/month</span>
                                </label>
                                <div className="space-y-2">
                                    <label className="flex items-start gap-2 text-sm text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={includeWebsiteHosting}
                                            onChange={(e) => setIncludeWebsiteHosting(e.target.checked)}
                                            className="mt-1"
                                        />
                                        <span><span className="font-semibold text-[#2c4a30]">Website Hosting</span> — $7/mo</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Current Monthly Software Cost ($)
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
                                Enter your current monthly software subscription across your operation. (example: 199)
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
                            Estimated Multi-Location Admin Time Savings
                        </p>

                        <p className="text-sm text-gray-700 mb-4">
                            Choose the percentage reduction you want to model for multi-location administrative workload.
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



                    {/* Enterprise Oversight Tasks */}
                    <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-[#2c4a30] mb-4 text-center">
                            Weekly Multi-Location Oversight Workload
                        </h3>

                        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-6">
                            Enter hours, employee count, and hourly rates for each cross-location task.
                            This model applies your selected automation/efficiency reduction to this category.
                        </p>

                        <div className="md:hidden space-y-3">
                            {ENTERPRISE_TASKS.map((task, index) => (
                                <div key={task} className="rounded-xl border border-gray-200 bg-white p-4">
                                    <p className="text-sm font-semibold text-[#2c4a30] mb-3">{task}</p>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-xs text-gray-600 mb-1">Hours / Week Each Employee</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.25"
                                                className="border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    updateTask(index, "hours", Number(e.target.value) || 0)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 mb-1">Employees Assigned Across Locations</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="1"
                                                className="border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    updateTask(index, "employees", Number(e.target.value) || 0)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 mb-1">Avg Hourly Rate ($)</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                className="border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    updateTask(index, "rate", Number(e.target.value) || 0)
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
                                        <th className="p-3 text-center border border-gray-200 whitespace-normal leading-tight w-[38%]">
                                            Multi-Location Task
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
                                    {ENTERPRISE_TASKS.map((task, index) => (
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
                                            ${calculationResult.totalAnnualAdminValue.toLocaleString()}
                                        </p>
                                        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                                            <p className="text-xs text-gray-600 leading-5">
                                                Your current yearly admin labor cost before any time-savings assumptions.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Estimated Labor Savings
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${calculationResult.annualLaborSavings.toLocaleString()}
                                        </p>
                                        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                                            <p className="text-xs text-gray-600 leading-5">
                                                The labor dollars reclaimed after applying your selected time-savings percentage.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Total Hours Saved Per Year
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            {calculationResult.totalHoursSaved.toLocaleString()} hrs
                                        </p>
                                        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                                            <p className="text-xs text-gray-600 leading-5">
                                                Annual admin hours expected to be saved based on your time-savings setting.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Estimated Annual Cost Difference:
                                        </p>
                                        <p className="text-xl font-bold text-[#2c4a30]">
                                            ${calculationResult.totalSavings.toLocaleString(undefined, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}
                                        </p>
                                        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-2">
                                            <p className="text-xs text-gray-600 leading-5">
                                                Current total annual software, processing, labor, and optional accounting costs minus estimated Petunia total costs.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <p className="text-sm text-gray-500 mt-2">
                                    This number takes into account what you are currently spending on software and labor,
                                    and then comparing it against the cost of Petunia Pets and the estimated labor savings cost
                                    Includes subscription, processing, and administrative labor comparisons.
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    Optional accounting cost modeled in this estimate: ${calculationResult.annualAccountingCost.toLocaleString()} per year.
                                </p>

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

            {/* ENTERPRISE COMPARISON */}
            <section id="enterprise-comparison" className="py-14 border-t border-gray-200 scroll-mt-24">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Multi-Location Comparison: Operational Risk vs Structured Control
                    </h2>
                    <p className="text-sm text-gray-600 mt-3 max-w-3xl mx-auto">
                        At multi-location scale, differences in process discipline become financial outcomes.
                    </p>
                </div>

                <div className="md:hidden space-y-3">
                    {ENTERPRISE_COMPARISON_ROWS.map((row) => (
                        <div key={row.area} className="rounded-xl border border-gray-200 bg-white p-4">
                            <p className="text-sm font-semibold text-[#2c4a30] mb-3">{row.area}</p>
                            <div className="space-y-2">
                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Typical Legacy Workflow</p>
                                <p className="text-sm text-gray-700">{row.legacy}</p>
                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide pt-1">Structured Workflow</p>
                                <p className="text-sm text-gray-700">{row.structured}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden md:block overflow-x-auto">
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
                                    Structured Workflow
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ENTERPRISE_COMPARISON_ROWS.map((row) => (
                                <tr key={row.area}>
                                    <td className="p-4 border border-gray-200 font-medium">{row.area}</td>
                                    <td className="p-4 border border-gray-200">{row.legacy}</td>
                                    <td className="p-4 border border-gray-200">{row.structured}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ENTERPRISE FAQ */}
            <section className="py-14 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Multi-Location FAQ
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
                        href={contactHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Schedule Multi-Location Review
                    </Link>

                    <a
                        href="mailto:admin@petuniapets.com?subject=Petunia Multi-Location Private Equity and Owner Discussion"
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Discuss PE and Owner Use Cases
                    </a>

                    <Link
                        href={overviewHref}
                        className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-8 py-4 rounded-xl transition font-semibold shadow-sm hover:shadow-md"
                    >
                        Back to Overview
                    </Link>
                </div>
            </section>

        </main>
    );
}
