'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState, useEffect } from 'react';

const TASKS = [
    "Manual invoicing & reconciliation",
    "Tracking deposits in spreadsheets",
    "Vaccine expiration checks",
    "Client reminders & confirmations",
    "Daily planning & coordination",
    "Basic bookkeeping & reporting",
    "Tax prep document gathering",
];

export default function DogBoardingAndDaycareSoftwareSmallBusiness() {

    const [subscriptionCost, setSubscriptionCost] = useState<number | "">("");
    const [accountingMonthly, setAccountingMonthly] = useState<number | "">("");
    const [hrMonthly, setHrMonthly] = useState<number | "">("");
    const [schedulingMonthly, setSchedulingMonthly] = useState<number | "">("");
    const [otherSoftwareMonthly, setOtherSoftwareMonthly] = useState<number | "">("");

    const [processingRate, setProcessingRate] = useState<number | "">("");
    const [flatFee, setFlatFee] = useState<number | "">("");
    const [transactionsPerYear, setTransactionsPerYear] = useState<number | "">("");
    const [averageTicket, setAverageTicket] = useState<number | "">("");

    const [taskInputs, setTaskInputs] = useState<{ hours: number; rate: number }[]>([]);
    const [timeSavingsPercent, setTimeSavingsPercent] = useState(50);

    useEffect(() => {
        setTaskInputs(TASKS.map(() => ({ hours: 0, rate: 0 })));
    }, []);

    const updateTask = (index: number, field: "hours" | "rate", value: number) => {
        const updated = [...taskInputs];
        updated[index][field] = value;
        setTaskInputs(updated);
    };

    const petuniaPlan = { monthly: 10, rate: 3.0, flat: 0.45 };

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

        const totalAnnualLaborValue =
            taskInputs.reduce((total, task) => {
                return total + (task.hours || 0) * (task.rate || 0) * 52;
            }, 0);

        const annualLaborSavings =
            totalAnnualLaborValue * (timeSavingsPercent / 100);

        const petuniaSubscription = petuniaPlan.monthly * 12;

        const petuniaProcessing =
            txPerYear *
            ((petuniaPlan.rate / 100) * avgTicket +
                petuniaPlan.flat);

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
        name: 'Petunia Starter',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
            'Dog boarding and daycare software for small businesses focused on structure, clarity, and operational control.',
        offers: {
            '@type': 'Offer',
            price: '10',
            priceCurrency: 'USD',
        },
        areaServed: 'US',
        url: '/en/dog-boarding-and-daycare-software-small-business',
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
                name: 'Dog Boarding and Daycare Software Small Business',
                item: '/en/dog-boarding-and-daycare-software-small-business',
            },
        ],
    };

    return (
        <main className="max-w-3xl mx-auto px-4 sm:px-6 bg-white">
            <Script
                id="small-software-application-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <Script
                id="small-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* HERO */}
            <section className="py-14 text-center bg-[#f7faf7] rounded-2xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#2c4a30] mb-6 leading-tight">
                    Dog Boarding & Daycare Software for Small Businesses
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-2xl mx-auto">
                    When you’re running a small facility, every decision matters.
                    You’re thinking about growth, hiring, pricing, legal protection,
                    and whether you’re even charging enough — all while trying to
                    make it through the week.
                </p>

                <p className="text-base sm:text-lg text-gray-700 leading-8 max-w-2xl mx-auto mt-4">
                    You don’t need complicated enterprise software. You need clarity.
                    You need structure. You need to know you’re not missing something.
                    And maybe most importantly — you need your time back.
                </p>

                <p className="text-base sm:text-lg text-[#2c4a30] font-medium leading-8 max-w-2xl mx-auto mt-6">
                    Petunia Starter gives you clean financial tracking, automated
                    deposits, digital waivers, and operational structure —
                    without draining your budget or overwhelming your team.
                </p>

                <div className="mt-10">
                    <Link
                        href="/en/createnewaccount"
                        className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition"
                    >
                        Start for $15/month
                    </Link>
                </div>
            </section>

            <section className="md:hidden py-4 border-t border-gray-200">
                <div className="rounded-xl border border-[#d9cfc2] bg-[#fafaf8] p-3">
                    <div className="flex flex-wrap gap-2">
                        <a href="#small-reality" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Reality</a>
                        <a href="#small-foundation" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Foundation</a>
                        <a href="#small-features" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Included</a>
                        <a href="#small-calculator" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Calculator</a>
                        <a href="#small-cta" className="text-xs px-3 py-1.5 rounded-full border border-[#2c4a30] text-[#2c4a30]">Get Started</a>
                    </div>
                </div>
            </section>

            {/* THE SMALL BUSINESS REALITY */}
            <section id="small-reality" className="py-12 border-t border-gray-200 scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6 text-center">
                    The Reality of Building Something From Scratch
                </h2>

                <div className="block">
                    <div className="space-y-5 text-gray-700 leading-8 max-w-2xl mx-auto">
                    <p>
                        When you’re small, you’re not just running a boarding facility.
                        You’re building your future. You’re trying to grow responsibly,
                        protect yourself legally, hire at the right time, and make sure
                        you’re not undercharging — all while caring for every dog in front of you.
                    </p>

                    <p>
                        It’s exhausting to wonder if you forgot something.
                        If a deposit was applied correctly.
                        If your waiver protects you.
                        If your numbers actually make sense.
                    </p>

                    <p>
                        And when you finally sit down at night, the last thing you want
                        to do is reconcile payments or sort through spreadsheets.
                    </p>
                </div>

                {/* FOUNDER EXPERIENCE INSERT */}
                <div className="mt-10 max-w-2xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/10 rounded-2xl p-6 space-y-5 text-gray-700 leading-8">
                    <p className="font-medium text-[#2c4a30]">
                        I didn’t buy software when I first started.
                    </p>

                    <p>
                        I was a single operator. No employees. Tight budget.
                        Every dollar mattered. I was good with spreadsheets,
                        and I convinced myself I didn’t need to spend money on software.
                    </p>

                    <p>
                        The truth is — I couldn’t justify it.
                        The margin was thin. Growth felt uncertain.
                        And when you’re small, spending money feels risky.
                    </p>

                    <p>
                        Petunia exists because I wanted to give early-stage operators
                        something I didn’t have — real structure, real clarity,
                        and real financial control — at a price that doesn’t
                        create stress.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        This isn’t “fancy software.” It’s the foundation I wish I had.
                    </p>
                    </div>
                </div>
            </section>

            {/* WHY STARTER WORKS */}
            <section id="small-foundation" className="py-12 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-6">
                    You Don’t Need Fancy. You Need Solid.
                </h2>

                <div className="block">
                    <div className="space-y-5 text-gray-700 leading-8 max-w-2xl mx-auto">
                    <p>
                        If you’re perfectly happy with your size and don’t want aggressive expansion,
                        what you’re really buying back is time.
                    </p>

                    <p>
                        Time with your family. Time with your dogs. Time to think clearly.
                        Time to build something stable instead of constantly reacting.
                    </p>

                    <p>
                        Petunia Starter gives you the foundation most operators never had
                        in the beginning — structured deposits, real payment tracking,
                        clean reporting, legal clarity, and financial visibility.
                    </p>

                    <p className="font-medium text-[#2c4a30]">
                        You’re not just organizing bookings. You’re building the future of your business — correctly.
                    </p>
                    </div>

                    {/* SELF-REQUALIFICATION SECTION */}
                    <div className="mt-16 max-w-3xl mx-auto border-t border-gray-200 pt-12 text-center">
                    <h3 className="text-lg font-semibold text-[#2c4a30] mb-4">
                        Not Sure If You’re Still “Small”?
                    </h3>

                    <p className="text-sm text-gray-700 leading-7 mb-10 max-w-xl mx-auto">
                        If your team is growing, deposits are harder to track,
                        or coordination feels heavier than it used to —
                        you may already be operating at a different stage.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

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

                        <Link
                            href="/dog-boarding-software"
                            className="bg-[#2c4a30] hover:bg-[#243d27] text-white px-6 py-5 rounded-xl transition text-sm font-semibold shadow-sm hover:shadow-md"
                        >
                            ← Back to Overview
                        </Link>

                    </div>
                </div>
                </div>
            </section>

            {/* STARTER FEATURES */}
            <section id="small-features" className="py-12 border-t border-gray-200 scroll-mt-24">
                <div className="text-center mb-10">
                    <h2 className="text-xl font-semibold text-[#2c4a30] mb-4">
                        What’s Included in Petunia Starter
                    </h2>
                    <p className="text-base text-gray-700 max-w-2xl mx-auto leading-7">
                        Everything you need to run a small boarding or daycare
                        facility with structure, clarity, and confidence —
                        without paying for tools you don’t need yet.
                    </p>
                </div>

                <div className="block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

                    {/* Booking & Reservations */}
                    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                        <h3 className="text-sm font-semibold text-[#2c4a30] mb-3">
                            Online Booking & Reservation Management
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 leading-6">
                            <li>• Online booking for daycare and boarding</li>
                            <li>• Structured deposit collection</li>
                            <li>• Grooming add-ons within booking flow</li>
                            <li>• Clean upcoming reservation views</li>
                        </ul>
                    </div>

                    {/* Client & Pet Management */}
                    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                        <h3 className="text-sm font-semibold text-[#2c4a30] mb-3">
                            Client & Pet Profiles
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 leading-6">
                            <li>• Centralized client records</li>
                            <li>• Feeding, medication, and care notes</li>
                            <li>• Vaccine requirements & expiration tracking</li>
                            <li>• Emergency contact storage</li>
                        </ul>
                    </div>

                    {/* Payments */}
                    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                        <h3 className="text-sm font-semibold text-[#2c4a30] mb-3">
                            Integrated Payments & Invoicing
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 leading-6">
                            <li>• Transparent card processing</li>
                            <li>• Automatic payment tracking</li>
                            <li>• Deposit application visibility</li>
                            <li>• Monthly transaction summaries</li>
                        </ul>
                    </div>

                    {/* Legal & Structure */}
                    <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                        <h3 className="text-sm font-semibold text-[#2c4a30] mb-3">
                            Legal & Operational Structure
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 leading-6">
                            <li>• Digital waiver enforcement</li>
                            <li>• Automatic re-confirmation if waiver changes</li>
                            <li>• Organized record keeping</li>
                            <li>• Clear financial visibility from day one</li>
                        </ul>
                    </div>

                    </div>

                    <div className="mt-12 text-center max-w-2xl mx-auto">
                        <p className="text-sm text-gray-700 leading-7">
                            Petunia Starter is intentionally focused. It gives you
                            structure, financial clarity, and legal protection —
                            without overwhelming you with enterprise complexity.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mt-6 max-w-xl mx-auto bg-[#f7faf7] border border-[#2c4a30]/20 rounded-xl p-6 text-center">
                <p className="text-base sm:text-lg font-bold text-[#2c4a30] leading-7">
                    Use this Calculator to Estimate You Annual Savings by Implementing or Switching to Petunia!
                    This calculator automatically assumes you are using the
                    Petunia Starter plan — $15/month with 3.0% + $0.45 per transaction.
                </p>
                <p className="text-sm font-bold text-[#2c4a30] mt-3">
                    Includes up to 2 months of migration before subscription billing begins.
                </p>
            </div>

            {/* SAVINGS CALCULATOR */}
            <section id="small-calculator" className="py-12 border-t border-gray-200 scroll-mt-24">

                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#2c4a30]">
                        Estimate Your Cost and Time Savings
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Current Monthly Booking Software ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={subscriptionCost}
                            onChange={(e) =>
                                setSubscriptionCost(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Monthly Accounting Software ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={accountingMonthly}
                            onChange={(e) =>
                                setAccountingMonthly(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Monthly Payroll / HR Software ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={hrMonthly}
                            onChange={(e) =>
                                setHrMonthly(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Monthly Staff Scheduling Software ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={schedulingMonthly}
                            onChange={(e) =>
                                setSchedulingMonthly(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Other Monthly Software Tools ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={otherSoftwareMonthly}
                            onChange={(e) =>
                                setOtherSoftwareMonthly(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Total Transactions Per Year
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={transactionsPerYear}
                            onChange={(e) =>
                                setTransactionsPerYear(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Average Transaction Amount ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={averageTicket}
                            onChange={(e) =>
                                setAverageTicket(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Current Processing Rate (%)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={processingRate}
                            onChange={(e) =>
                                setProcessingRate(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Flat Fee Per Transaction ($)
                        </label>
                        <input
                            type="number"
                            className="border p-3 rounded w-full"
                            value={flatFee}
                            onChange={(e) =>
                                setFlatFee(e.target.value === "" ? "" : Number(e.target.value))
                            }
                        />
                    </div>

                </div>

                {/* TIME SAVINGS SELECTOR */}
                <div className="mt-10 mb-6 text-center bg-[#f7faf7] border border-[#2c4a30]/20 rounded-xl p-6">
                    <p className="text-base font-semibold text-[#2c4a30] mb-3">
                        Estimated Time Savings Percentage
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                        Most small operators report 50–90% time reduction. Choose your time savings below.
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

                {/* ADMIN HOURS TABLE */}
                <div className="border-t border-gray-200 pt-10">

                    <div className="text-center mb-6">
                        <p className="text-base text-gray-700 font-medium">
                            If your current system already automates these, leave them blank.
                        </p>
                    </div>

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
                                        <label className="block text-xs text-gray-600 mb-1">
                                            Hourly Rate of Employee or Rate at which You Pay Yourself ($)
                                        </label>
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
                                    <th className="p-4 border border-gray-200 text-center font-semibold w-[45%]">
                                        Task
                                    </th>
                                    <th className="p-4 border border-gray-200 text-center font-semibold w-[20%]">
                                        Hours / Week
                                    </th>
                                    <th className="p-4 border border-gray-200 text-center font-semibold w-[25%] leading-snug whitespace-normal break-words">
                                        Hourly Rate of Employee or Rate at which You Pay Yourself ($)
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

                                <div className="flex flex-col justify-between h-full min-h-[110px]">
                                    <p className="text-sm text-gray-600 leading-snug min-h-[40px] flex items-center justify-center">
                                        Total Annual Admin Labor Value
                                    </p>
                                    <p className="text-xl font-bold text-[#2c4a30]">
                                        ${totalAnnualLaborValue.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between h-full min-h-[110px]">
                                    <p className="text-sm text-gray-600 leading-snug min-h-[40px] flex items-center justify-center">
                                        Estimated Labor Savings
                                    </p>
                                    <p className="text-xl font-bold text-[#2c4a30]">
                                        ${annualLaborSavings.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between h-full min-h-[110px]">
                                    <p className="text-sm text-gray-600 leading-snug min-h-[40px] flex items-center justify-center">
                                        Total Hours Saved Per Year
                                    </p>
                                    <p className="text-xl font-bold text-[#2c4a30]">
                                        {totalHoursSaved.toLocaleString()} hrs
                                    </p>
                                </div>

                                <div className="flex flex-col justify-between h-full min-h-[110px]">
                                    <p className="text-sm text-gray-600 leading-snug min-h-[40px] flex items-center justify-center">
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
                                    Time that could be spent taking a vacation, pursuing hobbies,
                                    spending time with your family, or growing your business —
                                    instead of managing repetitive administrative work.
                                </p>

                            </div>
                        </div>
                    );
                })()}

            </section>

            {/* FINANCIAL ADVANTAGE */}
            <section className="py-10 border-t border-gray-200 text-center">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-4">
                    Built to Help You Prove Profitability
                </h2>

                <div className="space-y-4 text-gray-700 leading-7 max-w-2xl mx-auto">
                    <p>
                        Clean payment processing. Organized deposits.
                        Monthly summaries. Exportable transaction records.
                    </p>

                    <p>
                        When you decide to expand — whether that means
                        adding runs, building a new space, or seeking
                        financing — you already have your numbers.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section id="small-cta" className="py-12 border-t border-gray-200 text-center scroll-mt-24">
                <h2 className="text-xl font-semibold text-[#2c4a30] mb-4">
                    Start Small. Build Right. Build for Work/Life Balance and Efficiency.
                </h2>

                <Link
                    href="/en/createnewaccount"
                    className="bg-[#2c4a30] text-white px-6 py-3 rounded-md hover:bg-[#244024] transition"
                >
                    Get Started for $10
                </Link>
            </section>

        </main>
    );
}
