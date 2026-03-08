export default function SoftwareCustomizationSection() {
    return (
        <section className="py-10">
            <div className="rounded-2xl border border-[#d9cfc2] bg-[#f7faf7] px-6 py-8 shadow-sm">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c4a30]">
                        Built to fit real operations
                    </p>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#2c4a30] leading-tight">
                        If Your Software Does Not Fit How You Operate, We Should Talk.
                    </h2>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-gray-700">
                        Deposits, refunds, approvals, staffing, pricing, reporting, and daily
                        workflows are handled differently by every business. We understand that
                        software only works when it fits the way you actually run your operation,
                        not when it forces you into someone else&apos;s model.
                    </p>

                    <p className="mt-4 text-base sm:text-lg leading-8 text-gray-700">
                        If there is a feature you feel is missing in your current software, or
                        something you need that you do not see in Petunia yet, reach out to us.
                        We will review what you need, tell you whether we can build it, and give
                        you a realistic timeline. Our typical turnaround for feature development
                        is under 60 days, whether you are a small operator or a large enterprise
                        team.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="mailto:admin@petuniapets.com?subject=Petunia%20Feature%20Review%20Request"
                            className="inline-flex items-center justify-center rounded-xl bg-[#2c4a30] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#244024]"
                        >
                            Email Our Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
