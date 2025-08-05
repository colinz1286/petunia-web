'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WritingAWaiverForYourDogDaycareOrBoardingFacilityWhatIveLearnedAfter8YearsInBusinessBlog() {
    const locale = useLocale();

    const title = "Writing a Waiver for Your Dog Daycare or Boarding Facility: What I’ve Learned After 8 Years in Business";
    const date = "August 4, 2025";
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
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta
                    name="description"
                    content="Learn what every waiver for a dog daycare or boarding business should include — based on 8 years of experience, real scenarios, and legal insights."
                />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

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

                <p className="mb-4">
                    When I opened my dog daycare and boarding facility eight years ago, I came from a completely different world — corporate. I hadn’t worked in the pet care industry before, but I saw a clear opportunity: there was a lot of room for improvement in how services were delivered, how pets were cared for, and how client expectations were managed.
                </p>

                <p className="mb-4">
                    What I didn’t fully grasp at the time was how intense the workload would be. Dog daycare and boarding is a 365-day-a-year commitment — no weekends off, no slow seasons. But despite the constant pace, I wouldn’t trade it. I’ve learned so much over the years, and one of the most important lessons I’ve learned is this: your waiver is your shield.
                </p>

                <p className="mb-4">
                    If you’re just getting started and you’re wondering how to create a release form or waiver for your dog daycare or boarding facility, here’s everything I wish I had known — plus what I’ve learned since.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⚖️ Why a Waiver Matters More Than You Think</h2>
                <p className="mb-4">
                    A good waiver isn’t about protecting yourself from everything. It’s about making sure everyone understands the expectations and risks — and that you’re protected from things outside of your control.
                </p>
                <p className="mb-4">
                    It sets the tone. It tells clients: <em>&quot;I care deeply about your dog’s safety. But I’m also running a real business — and I’m not responsible for things I didn’t cause.&quot;</em>
                </p>
                <p className="mb-4">
                    The biggest concern I’ve had over the years is being blamed for things without proof — like a limp that didn’t appear until 24 hours later, or a dog’s upset stomach that might’ve been caused by anything. Your waiver gives you a foundation of fairness, backed by legal protection.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🙅 My Experience With Pushback</h2>
                <p className="mb-4">
                    In eight years, I’ve only had one person ever push back on signing my waiver. I listened respectfully, and then told them:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “I totally understand. If this waiver doesn’t feel right for you, I hope you find a facility that does. No hard feelings.”
                </blockquote>
                <p className="mb-4">
                    They didn’t stay. And that was fine. Because the truth is, your waiver isn’t going to scare away your ideal clients. It’s a filter — and it should be.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📋 What Should Be in a Dog Daycare or Boarding Waiver?</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">1. Basic Owner and Pet Information</h3>
                <p className="mb-4">
                    This includes contact info, emergency contacts, vet info, pet name, breed, age, and relevant history. Most online waiver tools (like Jotform or Cognito Forms) handle this easily.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. Vaccination &amp; Health Requirements</h3>
                <p className="mb-4">
                    You must clearly list what vaccines are required (e.g., Bordetella, rabies, flea/tick-free status). Clients must affirm their dog is healthy and not contagious. If they lie, your waiver helps protect you.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">3. Assumption of Risk &amp; Liability Release</h3>
                <p className="mb-4">
                    This is one of the most important sections. It confirms:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>The client accepts risks of social play (scratches, bites, illness, etc.)</li>
                    <li>You’re not liable unless gross negligence is proven</li>
                </ul>
                <p className="mb-4">
                    Even with perfect supervision, dogs get hurt. It’s part of the business — and your waiver needs to acknowledge that.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">4. Emergency Medical Consent</h3>
                <p className="mb-4">
                    Your waiver should:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Give you permission to seek veterinary care</li>
                    <li>State the owner is responsible for all costs</li>
                    <li>Allow you to act without waiting for verbal confirmation</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">5. Behavior &amp; Removal Policy</h3>
                <p className="mb-4">
                    You’re not a rehab center for aggressive dogs. Your waiver should:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Require that dogs be non-aggressive</li>
                    <li>Give you authority to remove dogs for unsafe behavior</li>
                    <li>Clarify the owner is liable for damage their dog causes</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">6. Payment, Late Pick-Up &amp; Abandonment</h3>
                <p className="mb-4">
                    In my waiver, I include payment terms directly and refer to all other policies as published on our website (so I can update without rewriting the waiver).
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Include late pick-up fees (e.g., “$15 per 15 minutes”)</li>
                    <li>Include abandonment clause (e.g., after 5 days, dog may be surrendered)</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-3">📸 The Media Clause? Include It… But Be Smart.</h2>
                <p className="mb-4">
                    We do have a photo/video clause in our waiver, but here’s the truth: if your content goes viral or makes money, someone might try to say you owe them something.
                </p>
                <p className="mb-4">
                    To protect yourself:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Include a clear, written release in your waiver</li>
                    <li>Give clients the option to opt out (initial here to decline)</li>
                </ul>
                <p className="mb-4">
                    Most people are fine with it — but you want it in writing, just in case.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧠 How I Built My Waiver — and What I Recommend</h2>
                <p className="mb-4">
                    I didn’t borrow a waiver from someone else. I didn’t piece one together from Reddit or Google Docs. I sat down with a real attorney.
                </p>
                <p className="mb-4">
                    We talked through every scenario I could imagine. They helped me build a document that’s not just protective — it’s professional and easy for clients to understand.
                </p>
                <p className="mb-4">
                    That’s my advice to anyone getting started: <strong>don’t cut corners here.</strong> It’s worth the money. And it will protect you when things go sideways.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📝 Can You Use Online Templates?</h2>
                <p className="mb-4">
                    Yes — online templates are a great way to get started and see what kind of language is typically used.
                </p>
                <p className="mb-4">
                    Platforms like:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Jotform</li>
                    <li>Cognito Forms</li>
                    <li>Template.net</li>
                </ul>
                <p className="mb-4">
                    These can help you structure your waiver. But I would never recommend using them <em>without</em> having a lawyer review and finalize it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Final Thoughts: Protect the Business You’re Building</h2>
                <p className="mb-4">
                    You will work hard. You will give up holidays. You will put in early mornings and late nights. And eventually, you’ll build something that feels like a second home — to you, your team, and the dogs.
                </p>
                <p className="mb-4">
                    Don’t let a vague or borrowed waiver jeopardize that.
                </p>
                <p className="mb-4">
                    A strong, thoughtful release form:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Reduces misunderstandings</li>
                    <li>Protects you legally</li>
                    <li>Shows clients you’re serious and prepared</li>
                </ul>
                <p className="mb-4">
                    And if someone doesn’t want to sign it? That’s OK. Let them go. Your best clients will respect your policies — and your peace of mind.
                </p>
                <p className="mb-6">
                    You’ve got dogs to care for — not lawsuits to fight.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 References</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Jotform. Pet Boarding Waiver Template</li>
                    <li>Cognito Forms. Dog Boarding Release Template</li>
                    <li>Practice.do. Why Dog Boarding Waiver Forms Matter</li>
                    <li>Enjuris. Pet Injury Liability at Boarding Facilities</li>
                    <li>Laughing Dog Kennels. Waiver &amp; Consent Form</li>
                    <li>Amity Woods Animal Hospital. Boarding Waiver</li>
                    <li>Happy Pets Palace. Release of Liability</li>
                    <li>Every Doggie Has Its Daycare. Waiver PDF</li>
                    <li>Village Gate Veterinary. Daycare &amp; Boarding Waiver</li>
                </ul>

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
