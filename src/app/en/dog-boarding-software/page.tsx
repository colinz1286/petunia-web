'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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

const CORE_TASKS = [
  "Invoicing & payment reconciliation",
  "Vaccine expiration checks"
];

const DAILY_OPS_TASKS = [
  "Daily Task List / Checklist Prep"
];

const HR_FIN_TASKS = [
  "Staff scheduling & shift adjustments",
  "Playgroup & Safety Planning",
  "Employee Performance Tracking & Raises",
  "Hiring Prep (job descriptions / onboarding)",
  "Accounting & Bookkeeping Prep",
  "Financial Analysis, Budgeting, and Forecasting",
  "Forecasting Occupancy & Labor Demand",
  "State Paperwork and Compliance"
];

export default function DogBoardingSoftwarePage() {

  // Allow empty inputs instead of forcing 0
  const [subscriptionCost, setSubscriptionCost] = useState<number | "">("");
  const [processingRate, setProcessingRate] = useState<number | "">("");
  const [flatFee, setFlatFee] = useState<number | "">("");
  const [transactionsPerYear, setTransactionsPerYear] = useState<number | "">("");
  const [averageTicket, setAverageTicket] = useState<number | "">("");
  const [accountingMonthly, setAccountingMonthly] = useState<number | "">("");
  const [hrMonthly, setHrMonthly] = useState<number | "">("");
  const [schedulingMonthly, setSchedulingMonthly] = useState<number | "">("");
  const [otherSoftwareMonthly, setOtherSoftwareMonthly] = useState<number | "">("");

  const [taskInputs, setTaskInputs] = useState<Record<string, { hours: number; rate: number }>>({});
  const [includeDailyOps, setIncludeDailyOps] = useState(false);
  const [includeHrFinance, setIncludeHrFinance] = useState(false);
  const [includeWebsiteHosting, setIncludeWebsiteHosting] = useState(false);
  const [currentWebsiteHostingBilling, setCurrentWebsiteHostingBilling] = useState<"monthly" | "annual">("monthly");
  const [currentWebsiteHostingCost, setCurrentWebsiteHostingCost] = useState<number | "">("");
  const [timeSavingsPercent, setTimeSavingsPercent] = useState(50);
  const [calculationResult, setCalculationResult] = useState<{
    annualSavings: number;
    totalSavings: number;
    totalAnnualAdminValue: number;
    annualLaborSavings: number;
    totalHoursSaved: number;
    weeksReclaimed: number;
    annualHoursSaved: number;
    weeklyHoursSaved: number;
    reclaimedWorkweeks: number;
    annualAdminCost: number;
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

  useEffect(() => {
    const initialTaskInputs: Record<string, { hours: number; rate: number }> = {};
    TASKS.forEach((task) => {
      initialTaskInputs[task] = { hours: 0, rate: 0 };
    });
    setTaskInputs(initialTaskInputs);
  }, []);

  const updateTask = (task: string, field: "hours" | "rate", value: number) => {
    setTaskInputs((prev) => {
      const existing = prev[task] ?? { hours: 0, rate: 0 };
      return {
        ...prev,
        [task]: {
          ...existing,
          [field]: value,
        },
      };
    });
  };

  const visibleTasksForCalculator = [
    ...CORE_TASKS,
    ...(includeDailyOps ? DAILY_OPS_TASKS : []),
    ...(includeHrFinance ? HR_FIN_TASKS : []),
  ];

  const currentInputSnapshot = {
    subscriptionCost,
    processingRate,
    flatFee,
    transactionsPerYear,
    averageTicket,
    accountingMonthly,
    hrMonthly,
    schedulingMonthly,
    otherSoftwareMonthly,
    includeDailyOps,
    includeHrFinance,
    includeWebsiteHosting,
    currentWebsiteHostingBilling,
    currentWebsiteHostingCost,
    timeSavingsPercent,
    taskInputs,
    visibleTasksForCalculator,
  };
  const currentInputSignature = JSON.stringify(currentInputSnapshot);
  const needsRecalculate =
    calculationResult !== null && currentInputSignature !== lastCalculatedSignature;

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
    const accountingAnnual = includeHrFinance ? (Number(accountingMonthly) || 0) * 12 : 0;
    const hrAnnual = includeHrFinance ? (Number(hrMonthly) || 0) * 12 : 0;
    const schedulingAnnual = includeHrFinance ? (Number(schedulingMonthly) || 0) * 12 : 0;
    const otherSoftwareAnnual = includeHrFinance ? (Number(otherSoftwareMonthly) || 0) * 12 : 0;

    const annualProcessing =
      txPerYear *
      ((procRate / 100) * avgTicket + flat);

    const totalAnnualAdminValue = visibleTasksForCalculator.reduce((total, task) => {
      const taskValues = taskInputs[task] ?? { hours: 0, rate: 0 };
      return total + taskValues.hours * taskValues.rate * 52;
    }, 0);
    const annualLaborSavings = totalAnnualAdminValue * (timeSavingsPercent / 100);
    const annualAdminCost = annualLaborSavings;

    const coreAnnual = 10 * 12;
    const dailyOpsAnnual = includeDailyOps ? 15 * 12 : 0;
    const hrFinanceAnnual = includeHrFinance ? 79 * 12 : 0;
    const websiteHostingAnnual =
      includeWebsiteHosting
        ? 7 * 12
        : 0;

    const petuniaSubscription =
      coreAnnual +
      dailyOpsAnnual +
      hrFinanceAnnual +
      websiteHostingAnnual;

    const petuniaProcessing =
      txPerYear *
      ((3.0 / 100) * avgTicket + 0.35);

    const annualSavings =
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

    const totalWeeklyTaskHours = visibleTasksForCalculator.reduce((sum, task) => {
      return sum + (taskInputs[task]?.hours || 0);
    }, 0);
    const totalHoursSaved = totalWeeklyTaskHours * 52 * (timeSavingsPercent / 100);
    const annualHoursSaved = totalHoursSaved;
    const weeklyHoursSaved = totalWeeklyTaskHours * (timeSavingsPercent / 100);
    const weeksReclaimed = totalHoursSaved / 40;
    const reclaimedWorkweeks = weeksReclaimed;

    return {
      annualSavings,
      totalSavings: annualSavings,
      totalAnnualAdminValue,
      annualLaborSavings,
      totalHoursSaved,
      weeksReclaimed,
      annualHoursSaved,
      weeklyHoursSaved,
      reclaimedWorkweeks,
      annualAdminCost,
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
          page: "/en/dog-boarding-software",
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

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 bg-white">
      {/* HERO */}
      <section className="py-10 px-4 bg-[#f0f7f2] rounded-2xl shadow-sm text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/70 text-[#2c4a30] border border-[#2c4a30]/15">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          Transparent pricing • Migration-friendly • Built for real operations
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] leading-tight mt-4 mb-4">
          Operator-Built Dog Boarding &amp; Daycare Software — Transparent, Modern, Fair.
        </h1>

        <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto leading-7">
          Petunia was built by operators who own and run a large boarding and daycare facility.
          We’ve personally transitioned from legacy software and independent billing systems—
          so we understand what daily operations actually look like. Automate bookings, deposits,
          waivers, reminders, and daily coordination so you can run a calmer, more profitable
          business from day one.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/en/dog-boarding-and-daycare-software-small-business"
            className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition text-center"
          >
            Start for $10/mo
          </Link>
          <a
            href="mailto:admin@petuniapets.com"
            className="border border-[#2c4a30] text-[#2c4a30] px-6 py-3 rounded-md hover:bg-[#f6f6f6] transition text-center"
          >
            Talk to Us
          </a>
        </div>
      </section>

      {/* MOBILE QUICK CTA + SECTION INDEX */}
      <section className="md:hidden py-6 border-t border-gray-200">
        <div className="flex flex-col gap-3 mb-4">
          <Link
            href="/en/createnewaccount"
            className="bg-[#2c4a30] text-white px-6 py-3 rounded-md text-center"
          >
            Get Started
          </Link>
          <a
            href="mailto:admin@petuniapets.com"
            className="border border-[#2c4a30] text-[#2c4a30] px-6 py-3 rounded-md text-center"
          >
            Contact Our Team
          </a>
        </div>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#fafaf8] p-3">
          <div className="flex flex-wrap gap-2">
            <a href="#stage" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Stage</a>
            <a href="#tiers" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Tiers</a>
            <a href="#comparison" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Compare</a>
            <a href="#comparison" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Model</a>
            <a href="#savings" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Savings</a>
            <a href="#migration" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Switching</a>
            <a href="#features" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Features</a>
            <a href="#cta" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Get Started</a>
          </div>
        </div>
      </section>

      {/* BUSINESS STAGE IDENTIFIER */}
      <section id="stage" className="py-14 border-t border-gray-200 text-center bg-[#fafaf8] scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2c4a30] mb-6">
          What Stage Is Your Boarding Business In?
        </h2>

        <p className="max-w-2xl mx-auto text-base leading-7 text-gray-700 mb-10">
          Not every facility needs the same infrastructure. The question isn&apos;t
          whether you need software — it&apos;s whether your current system is costing
          you time, clarity, or profit.
        </p>

        <div className="max-w-4xl mx-auto space-y-6 text-left">

          {/* Small Business */}
          <Link
            href="/en/dog-boarding-and-daycare-software-small-business"
            className="block rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-md transition text-center"
          >
            <h3 className="text-xl font-semibold text-[#2c4a30] mb-6">
              Small Business / Early-Stage Operator
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 leading-6 mb-6 max-w-2xl mx-auto text-left">
              <p>• Does my state require me to keep logs?</p>
              <p>• When should I consider hiring someone?</p>
              <p>• Are you legally protected with proper waivers?</p>
              <p>• Are deposits and payments organized correctly?</p>
              <p>• Do I even need software?</p>
              <p>• What all am I manually tracking?</p>
              <p>• How can software save me time?</p>
              <p>• Do I want to grow my business?</p>
              <p>• Is this just a side hustle?</p>
              <p>• What can I do more efficiently?</p>
              <p>• Do I want to grow my business?</p>
              <p>• Am I actually making money?</p>
            </div>

            <p className="text-sm font-medium text-[#2c4a30]">
              Build the right foundation now →
            </p>
          </Link>

          {/* Medium */}
          <Link
            href="/en/dog-boarding-and-daycare-software-medium-business"
            className="block rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-md transition text-center"
          >
            <h3 className="text-xl font-semibold text-[#2c4a30] mb-6">
              Growing Facility
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 leading-6 mb-6 max-w-2xl mx-auto text-left">
              <p>• How many staff do I need?</p>
              <p>• What does my software actually do FOR me?</p>
              <p>• Are spreadsheets multiplying?</p>
              <p>• What tasks am I manually doing in my software?</p>
              <p>• Can my software replace my spreadsheet?</p>
              <p>• Is forecasting labor still guesswork?</p>
              <p>• Are payment reports matching your bank deposits?</p>
              <p>• Is management spending more time on admin tasks rather than with dogs?</p>
              <p>• Can I grow this into something bigger?</p>
              <p>• Are repeat clients slipping through cracks?</p>
              <p>• Is expansion creating more issues?</p>
              <p>• How do I have more time for other things?</p>
              <p>• Are my finances in order to get a bank loan?</p>
              <p>• Should I expand my current footprint or move to a new location?</p>
            </div>

            <p className="text-sm font-medium text-[#2c4a30]">
              Explore scaling infrastructure →
            </p>
          </Link>

          {/* Large */}
          <Link
            href="/en/dog-boarding-and-daycare-software-large-business"
            className="block rounded-2xl border border-gray-200 p-8 bg-white hover:shadow-md transition text-center"
          >
            <h3 className="text-xl font-semibold text-[#2c4a30] mb-6">
              Large / Multi-Location
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 leading-6 mb-6 max-w-2xl mx-auto text-left">
              <p>• Are financial reports audit-ready?</p>
              <p>• Are you considering selling?</p>
              <p>• Is reconciliation automated?</p>
              <p>• Are locations standardized?</p>
              <p>• Can you prove profitability instantly?</p>
              <p>• Does your data help identify your issues?</p>
              <p>• Are labor ratios optimized daily?</p>
              <p>• Is payment processing modeled institutionally?</p>
              <p>• Do managers operate with consistent systems?</p>
              <p>• Can leadership forecast expansion confidently?</p>
              <p>• Can you prove profitability instantly?</p>
              <p>• Small gains in efficiency mean big savings!</p>
            </div>

            <p className="text-sm font-medium text-[#2c4a30]">
              View advanced structure →
            </p>
          </Link>

        </div>

        <div className="mt-14 max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed text-center">
          <p>
            Petunia is the software I wish had existed when I was just starting out my boarding and daycare business. Because it offers every feature I actually need to save time and grow my business.

            But Petunia is also built to scale — it’s simply waiting for the day you grow and expand, and it will continue to provide everything you need as you do, eliminating the need to ever change software as you scale. No matter the size of your business, Petunia is designed to uncover meaningful efficiencies and measurable cost savings. From solo operators to multi-location teams, routine administrative tasks quietly consume time and margin — and intelligent systems help give that time back.

            As you grow, those efficiencies compound. Multi-location operators benefit from centralized oversight, standardized workflows, consolidated reporting, and reduced manual reconciliation across teams. What may feel manageable at one location can become exponentially inefficient across three, five, or ten. In short: the more moving parts you have, the more leverage intelligent systems create — but the advantage starts on day one.

          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:admin@petuniapets.com"
              className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition text-center"
            >
              Have a Discussion with Us
            </a>
          </div>
        </div>
      </section>

      {/* WHY THIS PAGE EXISTS */}
      <section className="py-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-4">
          Why Petunia&apos;s Pricing Looks Different
        </h2>

        <div className="max-w-2xl mx-auto space-y-4 text-base leading-7 text-gray-700">
          <p>
            Many platforms combine high monthly subscriptions with unclear processing spreads.
            That structure can make it difficult for independent operators to forecast margins confidently.
          </p>
        </div>
      </section>

      {/* COMPETITIVE REALITY (HIGH LEVEL, NO NAMES) */}
      <section id="tiers" className="py-10 border-t border-gray-200 scroll-mt-24">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-1">
            What Most Platforms Charge
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#2c4a30] mb-3">
            (and what they don&apos;t say out loud)
          </p>
          <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
            Across the major platforms in this space, monthly subscriptions commonly land in the <strong>$95–$299+</strong>{' '}
            range, and trials are often <strong>7–14 days</strong>. That&apos;s not enough time for real boarding or grooming
            migration when you have future reservations and deposits tied to your old system.
          </p>
        </div>

        <div className="mt-7 space-y-4">

          {/* Top Row: Monthly + Trial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-5 bg-white text-center">
              <p className="text-sm font-semibold text-gray-900">Typical Monthly Subscription</p>
              <p className="mt-2 text-2xl font-bold text-[#2c4a30]">$95–$299+</p>
              <p className="mt-2 text-sm text-gray-600">
                Flat-rate pricing that can be difficult for new or independent operators.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 bg-white text-center">
              <p className="text-sm font-semibold text-gray-900">Typical Trial Window</p>
              <p className="mt-2 text-2xl font-bold text-[#2c4a30]">7–14 days</p>
              <p className="mt-2 text-sm text-gray-600">
                Often fine for daycare — rarely long enough for boarding deposit transitions.
              </p>
            </div>
          </div>

          {/* Full Width Payment Processing Box */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white text-center">
            <p className="text-sm font-semibold text-gray-900">Payment Processing (What&apos;s Common)</p>
            <p className="mt-2 text-2xl font-bold text-[#2c4a30]">2.9% + $0.30 AND UP TO 3.5% + $0.50</p>
            <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
              Many platforms add their own flat markup on top of baseline processor fees,
              pushing effective rates significantly higher than advertised.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING TIERS */}
      <section id="comparison" className="py-10 border-t border-gray-200 scroll-mt-24">
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

        <div className="mt-8 rounded-2xl border border-[#2c4a30]/20 bg-[#fafaf8] p-6">
          <h3 className="text-lg font-semibold text-[#2c4a30] text-center">
            Stage-Based Alignment (Not Feature Gating)
          </h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold text-[#2c4a30]">Small / Early Stage</p>
              <p className="mt-2 leading-6">
                Start with Core Platform to protect margin while reducing the booking and admin burden from day one.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold text-[#2c4a30]">Growing Facility</p>
              <p className="mt-2 leading-6">
                Add Intelligent Daily Operations when checklists, handoffs, and routine execution become inconsistent.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold text-[#2c4a30]">Scaling / Multi-Location</p>
              <p className="mt-2 leading-6">
                Add the Employment, HR &amp; Financial layer when labor planning and profit visibility become
                daily management decisions.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-semibold text-[#2c4a30]">Institutional / Multi-Site</p>
              <p className="mt-2 leading-6">
                Combine Core + both add-ons + structured migration to support standardized operations,
                cleaner diligence, and expansion readiness.
              </p>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-600 text-center leading-5">
            This structure keeps entry affordable, adds professional layers only when useful, and supports
            long-term land-grab expansion without punishing operators early.
          </p>
        </div>

        {/* Multi-Site & Institutional Operators */}
        <div className="mt-8 rounded-2xl border border-[#2c4a30]/20 bg-[#f0f7f2] p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-[#2c4a30] mb-3">
            Multi-Site &amp; Institutional Operators
          </h3>

          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-7">
            If you operate multiple facilities, are preparing for expansion,
            or are consolidating locations under centralized ownership,
            structured financial infrastructure becomes essential.
          </p>

          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-7 mt-4">
            Petunia supports consolidated reporting, standardized workflows,
            and clean transaction records designed to withstand audit review,
            financing scrutiny, and acquisition diligence.
          </p>

          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-7 mt-4">
            For private equity groups, strategic buyers, or operators preparing
            for a future exit, disciplined systems increase valuation by reducing
            operational risk and improving financial transparency.
          </p>

          <div className="mt-6">
            <a
              href="mailto:admin@petuniapets.com"
              className="inline-block bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition"
            >
              Request Multi-Site or Institutional Pricing
            </a>
          </div>
        </div>
      </section>

      {/* COMPARISON CHART */}
      <section id="savings" className="py-10 border-t border-gray-200 scroll-mt-24">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-4">
            How Petunia Compares
          </h2>
          <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
            Transparent pricing. Real migration time. No hidden processing spreads.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#f0f7f2] text-[#2c4a30]">
                <th className="p-3 text-left font-semibold border border-gray-200">Feature</th>
                <th className="p-3 text-left font-semibold border border-gray-200">Typical Competitor</th>
                <th className="p-3 text-left font-semibold border border-gray-200">Petunia</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border border-gray-200">Monthly Cost</td>
                <td className="p-3 border border-gray-200">$95–$199+</td>
                <td className="p-3 border border-gray-200">$10–$104</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Trial Length</td>
                <td className="p-3 border border-gray-200">7–14 days</td>
                <td className="p-3 border border-gray-200">Up to 3–6 months transition window</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Processing Transparency</td>
                <td className="p-3 border border-gray-200">Often not fully published</td>
                <td className="p-3 border border-gray-200">Fully published flat component</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Deposit Migration Planning</td>
                <td className="p-3 border border-gray-200">Unclear / manual reconciliation</td>
                <td className="p-3 border border-gray-200">Structured Deposit Bridge approach</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Parallel Run Without Double Billing</td>
                <td className="p-3 border border-gray-200">Rare</td>
                <td className="p-3 border border-gray-200">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-600 text-center">
          Pricing reflects publicly available data. Petunia publishes its processing structure openly—because
          transparency shouldn’t be optional.
        </p>
      </section>

      {/* SAVINGS CALCULATOR */}
      <section className="py-10 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-4">
            Estimate Your Annual Savings by Implementing or Switching to Petunia!
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
            Enter your current costs and the weekly administrative hours spent per task.
            Leave blank if your current system already automates it.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-[#2c4a30]/15 bg-[#f8faf8] p-5">
          <p className="text-sm font-semibold text-[#2c4a30] text-center">
            Where ROI Usually Shows Up First
          </p>
          <p className="mt-2 text-xs text-gray-600 text-center max-w-2xl mx-auto leading-5">
            This is where we focus product progress: practical execution gains that protect margin instead of
            asking operators to pay more for the same baseline system.
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              Less manual admin time every week
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              Better labor-to-demand alignment on busy days
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3">
              Margin protection from transparent pricing
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Petunia Add-On Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#2c4a30] mb-2">
              Are you planning on adding any features to your software?
            </label>
            <p className="text-xs text-gray-600 mb-3">
              Core Platform is automatically included at $10/month with 3.0% + $0.35 processing.
            </p>

            <div className="space-y-3 rounded-xl border border-gray-200 p-4 bg-white">
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={includeDailyOps}
                  onChange={(e) => setIncludeDailyOps(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  <span className="font-semibold text-[#2c4a30]">Intelligent Daily Operations System</span>
                  {' '}— $15/month
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={includeHrFinance}
                  onChange={(e) => setIncludeHrFinance(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  <span className="font-semibold text-[#2c4a30]">Employment, Human Resources &amp; Financial Management</span>
                  {' '}— $79/month
                </span>
              </label>

              <div className="pt-1 border-t border-gray-200">
                <label className="flex items-start gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={includeWebsiteHosting}
                    onChange={(e) => setIncludeWebsiteHosting(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    <span className="font-semibold text-[#2c4a30]">Website Hosting</span>
                    {' '}— $7/mo
                  </span>
                </label>

                {includeWebsiteHosting && (
                  <div className="mt-3 sm:ml-7 space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Current Web Hosting Billing
                      </label>
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
                      <div className="relative max-w-sm">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          className="border p-2 pl-7 rounded w-full"
                          min="0"
                          step="0.01"
                          value={currentWebsiteHostingCost}
                          onChange={(e) => {
                            const val = e.target.value;
                            setCurrentWebsiteHostingCost(val === "" ? "" : Number(val));
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your current hosting cost so website hosting is included in the annual comparison.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Example: {currentWebsiteHostingBilling === "monthly" ? "29.00 per month" : "348.00 per year"}.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Software Costs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Monthly Software Cost */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current Monthly Software Cost ($)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  className="border p-3 pl-7 rounded w-full"
                  min="0"
                  step="0.01"
                  value={subscriptionCost}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSubscriptionCost(val === "" ? "" : Number(val));
                  }}
                  onBlur={(e) => {
                    if (e.target.value !== "") {
                      const value = Number(e.target.value);
                      if (!isNaN(value)) {
                        setSubscriptionCost(Number(value.toFixed(2)));
                      }
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Example: 149.00
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Enter your current booking software subscription.
              </p>
            </div>

            {/* Transactions Per Year */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Total Transactions Per Year
              </label>
              <input
                type="number"
                className="border p-3 rounded w-full"
                min="0"
                value={transactionsPerYear}
                onChange={(e) => {
                  const val = e.target.value;
                  setTransactionsPerYear(val === "" ? "" : Number(val));
                }}
              />
              <p className="text-xs text-gray-500 mt-1">
                Example: 10,000
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Include all card transactions for one year.
              </p>
            </div>

            {/* Average Ticket */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Average Transaction Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  className="border p-3 pl-7 rounded w-full"
                  min="0"
                  step="0.01"
                  value={averageTicket}
                  onChange={(e) => {
                    const val = e.target.value;
                    setAverageTicket(val === "" ? "" : Number(val));
                  }}
                  onBlur={(e) => {
                    if (e.target.value !== "") {
                      const value = Number(e.target.value);
                      if (!isNaN(value)) {
                        setAverageTicket(Number(value.toFixed(2)));
                      }
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Example: 55.00
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Average dollar amount per transaction.
              </p>
            </div>

            {/* Processing Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current Processing Rate (%)
              </label>
              <input
                type="number"
                className="border p-3 rounded w-full"
                min="0"
                step="0.01"
                value={processingRate}
                onChange={(e) => {
                  const val = e.target.value;
                  setProcessingRate(val === "" ? "" : Number(val));
                }}
              />
              <p className="text-xs text-gray-500 mt-1">
                Example: 3.2
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Use percent format (for example, 3.2).
              </p>
            </div>

            {/* Flat Fee */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Flat Fee Per Transaction ($)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  className="border p-3 pl-7 rounded w-full"
                  min="0"
                  max="0.99"
                  step="0.01"
                  value={flatFee}
                  onChange={(e) => {
                    const val = e.target.value;

                    if (val === "") {
                      setFlatFee("");
                      return;
                    }

                    const num = Number(val);
                    if (!isNaN(num) && num >= 0 && num < 1) {
                      setFlatFee(num);
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value !== "") {
                      const value = Number(e.target.value);
                      if (!isNaN(value)) {
                        setFlatFee(Number(value.toFixed(2)));
                      }
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Example: 0.30
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Fixed processor fee charged per transaction.
              </p>
            </div>

            {includeHrFinance && (
              <>
                {/* Monthly Accounting Software */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Monthly Fee for Accounting Software ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      className="border p-3 pl-7 rounded w-full"
                      min="0"
                      step="0.01"
                      value={accountingMonthly}
                      onChange={(e) => {
                        const val = e.target.value;
                        setAccountingMonthly(val === "" ? "" : Number(val));
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    What you currently pay per month for accounting tools.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 45.00
                  </p>
                </div>

                {/* Monthly HR Software */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Monthly Fee for HR Software ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      className="border p-3 pl-7 rounded w-full"
                      min="0"
                      step="0.01"
                      value={hrMonthly}
                      onChange={(e) => {
                        const val = e.target.value;
                        setHrMonthly(val === "" ? "" : Number(val));
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    What you currently pay per month for HR/payroll tools.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 79.00
                  </p>
                </div>

                {/* Monthly Scheduling Software */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Monthly Fee for Scheduling Software ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      className="border p-3 pl-7 rounded w-full"
                      min="0"
                      step="0.01"
                      value={schedulingMonthly}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSchedulingMonthly(val === "" ? "" : Number(val));
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    What you currently pay per month for scheduling tools.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 59.00
                  </p>
                </div>

                {/* Other Software */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Monthly Fees for Other Software ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      className="border p-3 pl-7 rounded w-full"
                      min="0"
                      step="0.01"
                      value={otherSoftwareMonthly}
                      onChange={(e) => {
                        const val = e.target.value;
                        setOtherSoftwareMonthly(val === "" ? "" : Number(val));
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Other monthly software subscriptions not listed above.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 39.00
                  </p>
                </div>
              </>
            )}

          </div>

          {/* TIME SAVINGS SELECTOR */}
          <div className="mt-10 mb-6 text-center bg-[#f7faf7] border border-[#2c4a30]/20 rounded-xl p-6">
            <p className="text-base font-semibold text-[#2c4a30] mb-3">
              Estimated Time Savings Percentage
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Most operators report 50–90% time reduction. Choose your time savings below.
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

          {/* Task Table */}
          <div className="block">
            <div className="mb-6 text-base sm:text-lg text-gray-700 text-center font-medium">
              If your current software already automates any of these processes, or makes intuitive suggestions for you, leave those fields blank.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#f0f7f2] text-[#2c4a30]">
                    <th className="p-3 text-left border border-gray-200">Task</th>
                    <th className="p-3 text-left border border-gray-200">Hours / Week</th>
                    <th className="p-3 text-left border border-gray-200">Hourly Rate ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleTasksForCalculator.map((task) => (
                    <tr key={task}>
                      <td className="p-3 border border-gray-200">{task}</td>
                      <td className="p-3 border border-gray-200">
                        <input
                          type="number"
                          min="0"
                          step="0.25"
                          className="border p-2 rounded w-full"
                          onChange={(e) => {
                            const val = e.target.value;
                            updateTask(task, "hours", val === "" ? 0 : Math.max(0, Number(val)));
                          }}
                        />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          className="border p-2 rounded w-full"
                          onChange={(e) => {
                            const val = e.target.value;
                            updateTask(
                              task,
                              "rate",
                              val === "" ? 0 : Math.max(0, Number(val))
                            );
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Result */}
          <div className="text-center pt-8">
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
                        Current total annual software, processing, and labor costs minus estimated Petunia total costs.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  This number takes into account what you are currently spending on software and labor,
                  and then comparing it against the cost of Petunia Pets and the estimated labor savings cost
                  Includes subscription, processing, and administrative labor comparisons.
                </p>

                <div className="mt-8 max-w-3xl mx-auto text-center border-t border-gray-200 pt-6">
                  <p className="text-base text-gray-700 leading-7">
                    That&apos;s approximately{" "}
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

      {/* MIGRATION + TRANSITION STRUCTURE */}
      <section id="migration" className="py-10 border-t border-gray-200 scroll-mt-24">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-3">
            Switching Software Shouldn’t Put Your Facility At Risk
          </h2>
          <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
            Facilities don’t switch platforms lightly. Short trial windows force rushed decisions.
            Paying for two systems at once strains margins. Learning a new system under time pressure
            can lead to mistakes — and in our industry, mistakes can affect safety.
            <br /><br />
            We understand this because we run a facility ourselves.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <p className="text-sm font-semibold text-gray-900">We Switch Alongside You</p>
            <p className="mt-3 text-sm text-gray-700 leading-6">
              We establish an agreed go-live date and structure the transition around your real booking
              horizon — not an arbitrary 7-day trial.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-6">
              During your transition window, you receive full access to every feature.
              You can train your team, test workflows, and evaluate the platform properly
              before billing begins.
            </p>
            <div className="mt-4 rounded-xl bg-[#f8faf8] border border-[#2c4a30]/10 p-4">
              <p className="text-sm text-gray-700 leading-6">
                <span className="font-semibold text-[#2c4a30]">Billing starts at go-live — not before.</span>
                The goal is a safe, controlled transition.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <p className="text-sm font-semibold text-gray-900">Immediate Financial and Operational Upside</p>

            <p className="mt-3 text-sm text-gray-700 leading-6">
              If you are already using software, switching to Petunia can begin saving
              money immediately. There is no monthly subscription during your structured
              onboarding period, and our published processing rates sit below many
              competitors.
            </p>

            <p className="mt-3 text-sm text-gray-700 leading-6">
              At the same time, your managers gain access to tools that streamline
              daily operations — clearer communication, structured checklists,
              reduced billing friction, and improved staff coordination.
            </p>

            <p className="mt-3 text-sm text-gray-700 leading-6">
              Owners gain financial visibility. Managers gain operational clarity.
              Staff gain cleaner communication. The result is fewer mistakes,
              fewer headaches, and more controlled expansion.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center space-y-4">
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-7">
            Before any demo, we want to understand how your facility actually operates.
            The goal isn’t to change your system — it’s to determine whether Petunia
            can align with the way you already run your business.
          </p>

          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-7">
            If the operational structure makes sense on both sides, we’ll walk through
            a live Zoom session together. The demo only matters if the alignment is right.
          </p>

          <a
            href="mailto:admin@petuniapets.com"
            className="inline-block bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition"
          >
            Schedule an Operational Review
          </a>
        </div>
      </section>

      {/* KEY FEATURES (REFRESHED) */}
      <section id="features" className="py-10 border-t border-gray-200 scroll-mt-24">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2c4a30]">
            The Features That Actually Matter Day-To-Day
          </h2>
          <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
            You don&apos;t need more dashboards. You need fewer interruptions. Petunia is designed to reduce the mental
            load of running the facility.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Online Booking (24/7)',
              desc: 'Clients request services without the back-and-forth, while you stay in control of rules and capacity.',
            },
            {
              title: 'Client & Pet Profiles',
              desc: 'Feeding, meds, allergies, emergency contacts, and notes live with the dog—not in your head.',
            },
            {
              title: 'Vaccine Requirements + Expirations',
              desc: 'Clear requirements, proactive visibility, and smoother check-ins.',
            },
            {
              title: 'Waiver Enforcement + Versioning',
              desc: 'Bookings can be blocked until signed, and re-confirmed automatically if the waiver changes.',
            },
            {
              title: 'Reservation Management',
              desc: 'Clean upcoming views for daycare and boarding so the team stays aligned.',
            },
            {
              title: 'Automated Reminders',
              desc: 'Reduce no-shows and missed details with confirmations and reminders at the right times.',
            },
            {
              title: 'Grooming Add-Ons in Booking Flow',
              desc: 'Offer optional services per pet without double entry or messy notes.',
            },
            {
              title: 'Medication Tracking',
              desc: 'Capture meds and instructions alongside each reservation for safer care.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 p-5 bg-white">
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              <p className="mt-2 text-sm text-gray-700 leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND / EMOTIONAL */}
      <section className="py-10 border-t border-gray-200 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2c4a30]">
          Built For People Who Love Dogs—Not Software Busywork
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-base leading-7 text-gray-700">
          <p>
            You didn&apos;t open your doors to chase paperwork. You did it for calm days, wagging tails, loyal clients,
            and a business you can be proud of.
          </p>
          <p>
            Petunia is designed to disappear into your workflow—so the team can focus on care instead of admin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-10 border-t border-gray-200 text-center px-4 scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2c4a30]">
          Ready to Modernize Your Boarding &amp; Daycare Business?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            href="/en/createnewaccount"
            className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition text-center"
          >
            Get Started
          </Link>
          <a
            href="mailto:admin@petuniapets.com"
            className="border border-[#2c4a30] text-[#2c4a30] px-6 py-3 rounded-md hover:bg-[#f0f0f0] transition text-center"
          >
            Contact Our Team
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-[#2c4a30] mb-2">Educational Resources</h3>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            We regularly publish practical guides for boarding and daycare operators to help you run safer, calmer,
            more efficient operations in our{' '}
            <Link href="/en/blog" className="underline">
              Petunia blog
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
