'use client';

import Image from 'next/image';

export default function ConsultingPage() {
    return (
        <main className="min-h-screen bg-[#f6efe4] text-[#2c4a30] px-4 sm:px-6 py-12 font-sans flex flex-col items-center">
            <div className="w-full max-w-3xl space-y-10 text-center">
                {/* Logo */}
                <Image
                    src="/petunia_logo.png"
                    alt="Petunia Logo"
                    width={160}
                    height={0}
                    className="w-36 sm:w-40 h-auto mx-auto"
                    priority
                />

                {/* Header */}
                <h1 className="text-3xl font-bold">Free One-on-One Pet Care Consulting</h1>
                <p className="text-lg leading-relaxed">
                    I&rsquo;m offering free, private one-on-one consulting for people in pet care &mdash; boarding and daycare, pet sitting, dog
                    walking, and related services. This is meant to be a safe place to ask real questions, get real answers, and keep your
                    privacy.
                </p>

                {/* Consulting Photo */}
                <Image
                    src="/RachelRowland-46.JPG"
                    alt="Building Petunia and supporting the pet care community together"
                    width={1200}
                    height={800}
                    quality={95}
                    sizes="(max-width: 768px) 92vw, 720px"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                    priority
                />

                <p className="text-sm italic text-[#555] mt-2">
                    Pictured: Colin, holding Petunia. Mia sitting.
                </p>

                {/* Credentials / Story */}
                <h2 className="text-2xl font-semibold">Who I Am</h2>
                <p className="text-lg leading-relaxed">
                    I am the owner of <strong>Berkley Creek Pet Retreat</strong> in Mars, Pennsylvania. In 2017, I took over an existing
                    boarding and daycare facility that was located in a 130 year old barn, that had only been licensed for about six months, and had never even passed a winter
                    inspection. My dad and I renovated the entire facility together, and over the next several years, I dramatically grew the business and eventually built a much larger facility. When the time came to expand, I served as the general contractor throughout the
                    project. Today, Berkley Creek operates as a 10,000-square-foot facility with 27 employees.
                </p>
                <p className="text-lg leading-relaxed">
                    Over the years, we have been honored to win multiple Best of the Best GOLD (highest honor given) awards for boarding and daycare facilities in the
                    Pittsburgh area. Our philosophy has always been simple: do simple things very well, remain consistent, and provide a truly
                    personalized experience for every client and every dog. None of this has been easy. The journey has been challenging,
                    demanding, and humbling &mdash; but it has also been incredibly rewarding.
                </p>
                <p className="text-lg leading-relaxed">
                    I want to take what I&rsquo;ve learned through that journey and share it with others. Whether someone&rsquo;s dream is large
                    or small, whether they want to open a facility, start a pet sitting business, or simply understand how to do things the
                    right way, I want to help.
                </p>

                {/* Why This Exists */}
                <h2 className="text-2xl font-semibold">Why I&rsquo;m Doing This</h2>
                <p className="text-lg leading-relaxed">
                    Over the years, I have watched countless people join Facebook groups and online communities because they want to learn how
                    to get started in pet care &mdash; boarding and daycare, pet sitting, dog walking, and everything in between. Most of these
                    people are drawn to the work for the right reasons: a genuine love for animals and a desire to build something meaningful
                    around that passion.
                </p>
                <p className="text-lg leading-relaxed">
                    Unfortunately, many of those same people hesitate to ask questions publicly. They post anonymously, or not at all, out of
                    fear &mdash; fear of embarrassment, fear of sounding inexperienced, or fear of being treated poorly for simply not knowing
                    something yet. The truth is, everyone has real questions. And the reality is that the pet care world would be safer,
                    kinder, and more professional if education were encouraged instead of judged.
                </p>
                <p className="text-lg leading-relaxed">
                    I have been around dogs for most of my life, and even today, I am still learning. That never stops &mdash; and it
                    shouldn&rsquo;t. When you choose to do work you love, especially work that involves caring for living creatures, learning is
                    not a phase you graduate from. It is a responsibility you carry at every stage.
                </p>

                {/* Family Photo */}
                <Image
                    src="/familyphoto.jpeg"
                    alt="Building Petunia and supporting the pet care community together"
                    width={1200}
                    height={800}
                    quality={95}
                    sizes="(max-width: 768px) 92vw, 720px"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                    priority
                />

                <p className="text-sm italic text-[#555] mt-2">
                    Pictured left to right: Colin, Mia, Petunia, Erin
                </p>

                {/* Privacy Promise */}
                <h2 className="text-2xl font-semibold">Private, Judgment-Free, and Personal</h2>
                <p className="text-lg leading-relaxed">
                    That belief is what led me to offer free, one-on-one consulting for people in the pet care space. These conversations will
                    be private, personal, and judgment-free, so that people can ask honest questions without worrying about how they might be
                    perceived. This is about education, encouragement, and clarity &mdash; not criticism.
                </p>

                {/* Milo Photo */}
                <Image
                    src="/milo3.jpeg"
                    alt="Building Petunia and supporting the pet care community together"
                    width={1200}
                    height={800}
                    quality={95}
                    sizes="(max-width: 768px) 92vw, 720px"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                    priority
                />

                <p className="text-sm italic text-[#555] mt-2">
                    Pictured left to right: Milo, Erin
                </p>

                {/* Milo / Mission */}
                <h2 className="text-2xl font-semibold">In Honor of Milo</h2>
                <p className="text-lg leading-relaxed">
                    This consulting work is an expansion of the Petunia Pets project and is deeply personal to me. It is done in honor of
                    <strong> Milo</strong>. When we adopted Milo, he needed a fresh start in life &mdash; and we were able to give him one.
                    I have come to believe that people often need fresh starts too. Sometimes that looks like a new career. Sometimes it&rsquo;s
                    the desire to build something better. Sometimes it&rsquo;s simply wanting to make the world a little kinder. Whatever form
                    it takes, that need is real &mdash; and it deserves support.
                </p>

                <p className="text-lg leading-relaxed">
                    If you would like to read more about Milo&rsquo;s story and why Petunia exists, you can learn more on our{' '}
                    <a
                        href="https://www.petuniapets.com/en/aboutus"
                        className="underline font-medium hover:opacity-80"
                    >
                        About Us
                    </a>{' '}
                    page.
                </p>

                {/* Free / Community Service */}
                <h2 className="text-2xl font-semibold">Completely Free &mdash; Always</h2>
                <p className="text-lg leading-relaxed">
                    This consulting will always be completely free. It is my way of giving back through community service, supporting people
                    who care deeply about animals, and continuing to honor Milo by helping others build something meaningful with compassion,
                    patience, and integrity.
                </p>

                {/* Colin Mia Milo Photo */}
                <Image
                    src="/colinmiamilo.jpeg"
                    alt="Building Petunia and supporting the pet care community together"
                    width={1200}
                    height={800}
                    quality={95}
                    sizes="(max-width: 768px) 92vw, 720px"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                    priority
                />

                <p className="text-sm italic text-[#555] mt-2">
                    Pictured left to right: Mia, Colin, Milo
                </p>

                {/* What You Can Ask */}
                <h2 className="text-2xl font-semibold">What You Can Ask About</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-left sm:text-center px-4 sm:px-0">
                    <li>Getting started in boarding, daycare, pet sitting, or dog walking</li>
                    <li>Facility setup, daily operations, staffing, and customer experience</li>
                    <li>Policies, safety standards, and how to build trust with clients</li>
                    <li>Legal concerns and how to protect youerself as best as possible</li>
                    <li>How to grow responsibly without losing the personal touch</li>
                    <li>Anything you&rsquo;re afraid to ask publicly &mdash; no judgment</li>
                    <li>Training staff and lowering turnover (people quitting or leaving)</li>
                    <li>ANYTHING YOU CAN THINK OF!</li>
                </ul>

                {/* How to Get Started */}
                <div className="mt-8 space-y-3">
                    <h2 className="text-2xl font-semibold">How to Get Started</h2>

                    <p className="text-lg leading-relaxed">
                        All consulting is done one-on-one and face to face via video facetime. This allows us to have real, focused
                        conversations and ensures that every discussion is personal, private, and productive. You can also add me on
                        facebook if you use that platform. Many younger people feel like this is a very easy form of communication
                        and provides the ability to send messages back and forth quickly. It is simply one more option!
                    </p>

                    <p className="text-lg leading-relaxed">
                        To inquire or request a session, please email{' '}
                        <a
                            href="mailto:admin@petuniapets.com"
                            className="underline font-medium hover:opacity-80"
                        >
                            admin@petuniapets.com
                        </a>. Please include the following information in your message:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-lg text-left sm:text-center px-4 sm:px-0">
                        <li>Your full name</li>
                        <li>The NAME OF THE BUSINESS you own or are in the process of starting</li>
                        <li>The ADDRESS of your current or new business location</li>
                        <li>The best PHONE NUMBER to reach you</li>
                    </ul>

                    <p className="text-lg leading-relaxed">
                        You&rsquo;ll receive a response with next steps and scheduling details.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Thank you for your interest! I look forward to speaking with you :)
                    </p>
                </div>

                {/* Closing Note */}
                <p className="text-lg mt-10 italic text-[#444] leading-relaxed">
                    If you&rsquo;re just starting out, you&rsquo;re not alone &mdash; and you&rsquo;re not behind. Everyone learns by asking
                    questions. If you care about animals, and you want some guidance, this is the place for you!
                </p>
            </div>
        </main>
    );
}
