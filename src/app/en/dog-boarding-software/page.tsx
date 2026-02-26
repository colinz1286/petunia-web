'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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

  const tasks = [
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

  const [taskInputs, setTaskInputs] = useState<{ hours: number; rate: number }[]>([]);

  useEffect(() => {
    setTaskInputs(tasks.map(() => ({ hours: 0, rate: 0 })));
  }, []);

  const updateTask = (index: number, field: "hours" | "rate", value: number) => {
    const updated = [...taskInputs];
    updated[index][field] = value;
    setTaskInputs(updated);
  };

  const petuniaPlans = {
    Starter: { monthly: 10, rate: 3.0, flat: 0.45 },
    Growth: { monthly: 50, rate: 3.0, flat: 0.35 },
    Pro: { monthly: 109, rate: 3.0, flat: 0.25 }
  };

  const [selectedPlan, setSelectedPlan] = useState<"" | "Starter" | "Growth" | "Pro">("");

  const calculateSavings = () => {

    // Default blank values to 0 safely
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

    const annualAdminCost = taskInputs.reduce((total, task) => {
      return total + task.hours * task.rate * 52;
    }, 0) * 0.5;

    const petuniaSubscription =
      selectedPlan !== ""
        ? petuniaPlans[selectedPlan].monthly * 12
        : 0;

    const petuniaProcessing =
      selectedPlan !== ""
        ? txPerYear *
        ((petuniaPlans[selectedPlan].rate / 100) * avgTicket +
          petuniaPlans[selectedPlan].flat)
        : 0;

    const savings =
      (
        annualSoftware +
        accountingAnnual +
        hrAnnual +
        schedulingAnnual +
        otherSoftwareAnnual +
        annualProcessing +
        annualAdminCost
      ) -
      (petuniaSubscription + petuniaProcessing);

    return savings.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
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

      {/* BUSINESS STAGE IDENTIFIER */}
      <section className="py-14 border-t border-gray-200 text-center bg-[#fafaf8]">
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
              <p>• Is growth creating more issues?</p>
              <p>• How do I have more time for other things?</p>
              <p>• Are my finances in order to get a bank loan?</p>
              <p>• Should I expand my current footprint or move to a new location?</p>
            </div>

            <p className="text-sm font-medium text-[#2c4a30]">
              Explore Growth infrastructure →
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
              View Pro-level structure →
            </p>
          </Link>

        </div>

        <div className="mt-14 max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed text-center">
          <p>
            Petunia is designed to scale with operational complexity. The larger your
            business — and especially the more locations you operate — the more operational
            efficiencies and measurable cost savings we tend to uncover, particularly in
            routine administrative tasks that quietly consume time and margin.
            Multi-location operators benefit from centralized oversight, standardized
            workflows, consolidated reporting, and reduced manual reconciliation across
            teams. What may feel manageable at one location often becomes exponentially
            inefficient across three, five, or ten. In short: the more moving parts you have, the more leverage intelligent
            systems create.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:admin@petuniapets.com"
              className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition text-center"
            >
              Have a Discussion with Us
            </a>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            After our discussion, we will not contact you unless you request a follow up.
          </p>
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
      <section className="py-10 border-t border-gray-200">
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
      <section className="py-10 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2c4a30] mb-3">
            Simple Tiers. Real Leverage.
          </h2>
          <p className="text-base leading-7 text-gray-700 max-w-2xl mx-auto">
            Most boarding software starts near $100/month. We don’t. Tier 1 removes the barrier to entry.
            Tier 2 scales with you. Tier 3 rewards growth with lower processing spreads.
            No artificial feature walls. No bloated pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">Starter</p>
                <p className="text-xs text-gray-600 mt-1">For new &amp; small operators</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#2c4a30]">$15</p>
                <p className="text-xs text-gray-600 whitespace-nowrap">per month</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#f0f7f2] border border-[#2c4a30]/10 p-4">
              <p className="text-sm font-semibold text-[#2c4a30]">Published payment processing</p>
              <p className="mt-1 text-sm text-gray-700 leading-6">
                <strong>3.0% + $0.45</strong> per transaction (transparent, no mystery markup)
              </p>
              <p className="mt-2 text-xs text-gray-600 leading-5">
                Baseline card processing is commonly 2.9% + $0.30. We publish our flat component so you can
                compare apples-to-apples.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/en/createnewaccount"
                className="block text-center bg-[#2c4a30] text-white px-5 py-3 rounded-md hover:bg-[#244024] transition"
              >
                Choose Starter
              </Link>
            </div>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border border-[#2c4a30]/25 p-6 bg-white shadow-sm">

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">Growth</p>
                <p className="text-xs text-gray-600 mt-1">For busy facilities &amp; teams</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#2c4a30]">$50</p>
                <p className="text-xs text-gray-600 whitespace-nowrap">per month</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#f0f7f2] border border-[#2c4a30]/10 p-4">
              <p className="text-sm font-semibold text-[#2c4a30]">Published payment processing</p>
              <p className="mt-1 text-sm text-gray-700 leading-6">
                <strong>3.0% + $0.35</strong> per transaction (transparent)
              </p>
              <p className="mt-2 text-xs text-gray-600 leading-5">
                Many websites don&apos;t publish their effective processing cost. We do—so you can trust what you&apos;re
                buying and forecast your margins confidently.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/en/createnewaccount"
                className="block text-center bg-[#2c4a30] text-white px-5 py-3 rounded-md hover:bg-[#244024] transition"
              >
                Choose Growth
              </Link>
            </div>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">Pro</p>
                <p className="text-xs text-gray-600 mt-1">For large, high-volume facilities</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#2c4a30]">$115</p>
                <p className="text-xs text-gray-600 whitespace-nowrap">per month</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#f0f7f2] border border-[#2c4a30]/10 p-4">
              <p className="text-sm font-semibold text-[#2c4a30]">Published payment processing</p>
              <p className="mt-1 text-sm text-gray-700 leading-6">
                <strong>3.0% + $0.25</strong> per transaction (fully transparent)
              </p>
              <p className="mt-2 text-xs text-gray-600 leading-5">
                Designed for operators processing significant transaction volume.
                Higher scale should come with improved flat transaction components —
                simple, fair, and predictable.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/en/createnewaccount"
                className="block text-center bg-[#2c4a30] text-white px-5 py-3 rounded-md hover:bg-[#244024] transition"
              >
                Choose Pro
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-7 max-w-2xl mx-auto text-xs text-gray-600 leading-5">
          <p>
            Payment processing shown above is published to be fully transparent. Exact processor costs can vary by
            card type and region; Petunia&apos;s flat component is shown so you can compare platforms clearly.
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
      <section className="py-10 border-t border-gray-200">
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
                <td className="p-3 border border-gray-200">$10–$109</td>
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
            Estimate Your Annual Savings
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
            Enter your current costs and the weekly administrative hours spent per task.
            Leave blank if your current system already automates it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Petunia Plan Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#2c4a30] mb-2">
              Which Petunia plan are you considering?
            </label>
            <select
              value={selectedPlan}
              onChange={(e) =>
                setSelectedPlan(e.target.value as "" | "Starter" | "Growth" | "Pro")
              }
              className="border p-3 rounded w-full"
            >
              <option value="">
                Select a Plan
              </option>
              <option value="Starter">
                Starter — $10/mo — 3.0% + $0.45
              </option>
              <option value="Growth">
                Growth — $50/mo — 3.0% + $0.35
              </option>
              <option value="Pro">
                Pro — $109/mo — 3.0% + $0.25
              </option>
            </select>
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
            </div>

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
            </div>

          </div>

          {/* Task Table */}
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
                {tasks.map((task, index) => (
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
                          updateTask(index, "hours", val === "" ? 0 : Math.max(0, Number(val)));
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
                            index,
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

          {/* Result */}
          <div className="text-center pt-8">
            <p className="text-lg font-semibold text-[#2c4a30]">
              Estimated Annual Savings:
            </p>
            <p className="text-3xl font-bold text-[#2c4a30] mt-2">
              ${calculateSavings()}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Includes subscription, processing, and administrative labor comparisons.
            </p>
          </div>

        </div>
      </section>

      {/* MIGRATION + TRANSITION STRUCTURE */}
      <section className="py-10 border-t border-gray-200">
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
              fewer headaches, and more controlled growth.
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
      <section className="py-10 border-t border-gray-200">
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

        <div className="mt-7 max-w-3xl mx-auto rounded-2xl bg-[#fff7ed] border border-amber-200 p-6">
          <h3 className="text-lg font-semibold text-amber-900">
            Expanding in the Next 6 Months
          </h3>

          <p className="mt-3 text-sm text-amber-900 leading-6">
            Petunia is actively rolling out advanced operational infrastructure designed
            to reduce labor waste, eliminate repetitive admin work, and professionalize
            growing facilities.
          </p>

          <div className="mt-6 space-y-6 text-sm text-amber-900 leading-6">

            <div>
              <p className="font-semibold">
                Labor Optimization Insights
              </p>
              <p>
                Real-time staffing guidance to improve efficiency and reduce unnecessary labor costs.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 100–250 labor hours saved annually.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Intelligent Operations Recommendations
              </p>
              <p>
                System-driven suggestions to streamline supervision flow and daily coordination.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 40–80 hours saved annually.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Automated Payments &amp; Invoicing
              </p>
              <p>
                Integrated billing and deposit handling embedded directly into your booking workflow.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 80–150 hours saved annually.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Advanced Financial Reporting
              </p>
              <p>
                Real-time visibility into revenue performance, margin trends, and operational health.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 40–80 hours saved annually.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Employee &amp; HR Management Suite
              </p>
              <p>
                Centralized workforce tools for documentation, performance tracking,
                certifications, and compliance management.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 50–100 hours saved annually.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Legal &amp; Documentation Template Library
              </p>
              <p>
                Professionally structured waiver templates, boarding contracts,
                grooming agreements, employment agreements, and onboarding forms —
                built specifically for pet care operators.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 20–60 hours saved annually in drafting,
                revisions, and administrative document management.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Hiring &amp; New Hire Toolkit
              </p>
              <p>
                Offer letter templates, onboarding checklists, employee handbook
                foundations, performance review templates, and structured training guides.
              </p>
              <p className="mt-1 text-xs">
                Estimated impact: 30–70 hours saved annually in hiring and onboarding coordination.
              </p>
            </div>

          </div>

          <p className="mt-6 text-xs text-amber-900 leading-5">
            The objective is simple: give independent operators the same structured,
            professional infrastructure larger organizations rely on — without
            the enterprise price tag.
          </p>
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
      <section className="py-10 border-t border-gray-200 text-center px-4">
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