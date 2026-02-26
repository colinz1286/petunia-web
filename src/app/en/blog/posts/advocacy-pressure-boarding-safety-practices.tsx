'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AdvocacyPressureOnBoardingSafetyPractices() {
    const locale = useLocale();

    const title =
        'ADog Boarding Safety in America: Why Oversight, Staffing Ratios, and National Standards Matter';
    const date = 'February 15, 2026';
    const categories = ['boarding', 'owner', 'vet'] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        food: 'Dog Food & Nutrition',
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
                        >
                            {categoryLabels[cat]}
                        </span>
                    ))}
                </div>

                {/* Intro */}
                <p className="text-lg mb-4">
                    Most dog boarding and daycare businesses are run by caring people who genuinely love animals. But in a fast-growing
                    industry with uneven oversight, it only takes a few high-profile cases to shake public trust. That is exactly
                    what has been happening: animal advocacy voices and consumer-protection guidance are putting real pressure on
                    the industry to prove safety, training, and accountability — not just promise it.
                </p>

                <p className="mb-6">
                    In plain terms, the conversation is shifting from “Does this place look nice?” to “What systems are in place to
                    prevent injury, prevent abuse, and respond correctly when something goes wrong?” That shift is being fueled by
                    heartbreaking incidents, media coverage, and a growing expectation that pet care should have clearer standards
                    — especially when dogs are housed in groups, handled by multiple staff members, and left overnight.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Why the Pressure Is Rising Right Now</h2>

                <p className="mb-4">
                    Advocacy pressure tends to spike after cases that feel “preventable.” One example that received major attention
                    involved a Seattle dog boarding facility where prosecutors alleged a dog was beaten by a now-former employee.
                    Coverage like this does two things: it mobilizes advocacy responses, and it makes pet owners start asking harder
                    questions about training, supervision, screening, and how facilities handle incidents.
                </p>

                <p className="mb-6">
                    At the same time, broader policy conversations are heating up in some states. In New York, for example, a state
                    senator publicly pushed for a “Safe Pet Boarding Act” style approach focused on oversight and licensing of
                    boarding facilities. Even if any single proposal changes over time, the bigger trend is clear: lawmakers are
                    increasingly willing to treat boarding safety like a public consumer issue, not just a private business matter.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    What BBB and Advocacy Voices Are Actually Asking For
                </h2>

                <p className="mb-4">
                    When the Better Business Bureau weighs in, they are usually not trying to run the industry — they are trying to
                    reduce consumer harm. Their guidance to pet owners is straightforward: tour facilities, verify licensing where
                    applicable, confirm vaccine requirements, ask about supervision, and get clear answers on safety procedures and
                    incident handling.
                </p>

                <p className="mb-4">
                    It is important to clarify what the Better Business Bureau actually is. The BBB is not a regulatory body. It does
                    not license boarding facilities, conduct inspections, set staffing requirements, or create enforceable safety
                    standards. In most states, including mine as a boarding and daycare operator, licensing, inspections, and
                    compliance enforcement are handled directly by the state department of agriculture or an equivalent regulatory
                    authority. Those inspections are mandatory, documented, and tied to legal operating requirements.
                </p>

                <p className="mb-4">
                    As a facility owner, my personal experience with the BBB has largely consisted of phone calls asking for payment
                    in exchange for a business listing or accreditation badge. They have never inspected my building, reviewed my
                    playgroup protocols, audited my training procedures, or evaluated my emergency response systems. That oversight
                    comes entirely from state regulators. In my state, the BBB does not have regulatory authority over pet boarding operations over pet boarding and has no
                    measurable impact on safety standards within the industry.
                </p>

                <p className="mb-6">
                    That does not mean consumer guidance is irrelevant — it simply means we should be precise about who influences
                    safety and how. The BBB can publish educational tips and help consumers file complaints, but it does not create
                    enforceable operating standards. Real improvements in safety come from state licensing agencies, structured
                    training programs, internal standard operating procedures, and professional certification pathways — not from a
                    paid directory listing.
                </p>

                <p className="mb-6">
                    In the Seattle case coverage, BBB commentary and advocacy perspectives emphasized very specific operational
                    questions that map directly to safety outcomes: staff training for managing play, staff-to-dog supervision
                    ratios, screening for aggression, and what staff do when dogs start escalating. These are not “gotcha” questions
                    — they are the exact details that separate controlled group care from chaos. And regardless of how one feels
                    about the BBB itself, those operational questions are valid and important.
                </p>

                <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
                    <p className="font-semibold mb-2">The real point of all this pressure:</p>
                    <p className="mb-2">
                        Pet owners do not want a facility to say “We are safe.” They want to hear, “Here is how we keep dogs safe,
                        here is how we train staff, and here is what we do if something goes wrong.”
                    </p>
                    <p>
                        That is the difference between marketing and systems. And systems are built through training, state oversight,
                        documented procedures, and leadership accountability — not through optional listing memberships.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    The Standards Movement: Training and Certification, Not Just Rules
                </h2>

                <p className="mb-4">
                    A major theme in this movement is that “standards” are not only about inspections or laws — they are also about
                    training expectations. If you have ten employees and only one truly knows dog body language, safe handling, and
                    escalation prevention, you have a risk problem even if the building is beautiful.
                </p>

                <p className="mb-4">
                    At the same time, it is critical to recognize a structural issue within the industry: there is currently no
                    national standard for dog boarding or daycare in the United States. Every state operates independently. Some
                    states require licensing, inspections, and defined operational criteria. Others have little to no regulatory
                    framework specific to boarding facilities at all.
                </p>

                <p className="mb-4">
                    New York is a notable example. Despite having a reputation as a highly regulated state in many industries,
                    there is no comprehensive statewide regulatory framework governing dog boarding and daycare facilities.
                    Oversight varies widely by locality, and in many areas there is effectively no formal licensing or inspection
                    process specific to boarding safety. It is difficult not to view that as contradictory — especially in a state
                    known for heavy regulation elsewhere. When tragic incidents occur and there is no consistent state-level
                    oversight structure in place, it raises legitimate questions about priorities.
                </p>

                <p className="mb-6">
                    The reality is this: until real change happens at the state level or national level, improvements in safety,
                    quality, and operational consistency will remain uneven. Advocacy pressure, media coverage, and consumer
                    education can raise awareness, but they do not create enforceable standards. Only legislation and formal
                    regulatory frameworks can mandate inspections, define minimum staffing expectations, require documented
                    training, and hold operators accountable through clear legal authority.
                </p>

                <p className="mb-6">
                    This is why you are seeing more discussion of structured training and certifications. Organizations such as the{' '}
                    <a
                        href="https://www.ibpsa.com/certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        International Boarding &amp; Pet Services Association (IBPSA) certification programs
                    </a>{' '}
                    exist specifically to help pet care businesses professionalize staff knowledge and operational consistency.
                    Whether a business chooses a formal credential path or builds an internal training program, the direction of
                    travel is the same: documented training, repeatable procedures, and proof that staff can handle real situations.
                    These voluntary efforts matter — especially in states where formal oversight is minimal — but they are not a
                    substitute for regulatory clarity.
                </p>

                <p className="mb-6">
                    Even outside the boarding world, animal care organizations publish detailed training materials that demonstrate
                    what “professional onboarding” looks like in practice — including shadowing, checklists, and structured role
                    progression. The broader animal welfare community has been operating with documented systems for years, and
                    pet boarding businesses are increasingly expected to do something similar. In states without oversight, those
                    internal systems become the only real guardrails protecting pets.
                </p>

                <p className="mb-6">
                    If meaningful change is going to happen industry-wide, it will not come from optional listings, consumer tips,
                    or after-the-fact outrage. It will come from clear state-level legislation, consistent enforcement, and possibly
                    future national conversations about baseline standards. Until that happens, the burden remains on individual
                    operators to raise the bar voluntarily — and on pet owners to ask hard questions before trusting someone else
                    with their dog.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    What Pet Owners Should Ask Now
                </h2>

                <p className="mb-4">
                    If you are a pet owner reading this, here is the simplest way to think about it: you are not interviewing a
                    building — you are interviewing a system. And while consumer guidance organizations may publish general
                    checklists, the reality is that many of those groups have no operational authority in the pet boarding
                    industry. They do not inspect facilities, they do not set staffing requirements, and they do not enforce
                    safety standards. In most states, real oversight — where it exists — comes from state regulatory agencies,
                    not consumer listing organizations.
                </p>

                <p className="mb-4">
                    As a boarding and daycare operator, I can say clearly: if you want to know whether your dog is going to be
                    safe, the most important question you can ask is about <strong>staffing ratios during playtime</strong>.
                </p>

                <p className="mb-6">
                    How many dogs is one person supervising at a time? Not theoretically — but routinely. There are facilities
                    operating today where one person is watching 30, 40, or more dogs alone. There are facilities where brand new
                    high school or college employees, with little to no hands-on experience, are responsible for groups of 15 to
                    30 dogs within days of being hired. I know of facilities within a few miles of my own operation where this is
                    happening consistently. That is not a hypothetical risk. That is reality.
                </p>

                <p className="mb-6">
                    Group play can be safe. It can also become dangerous quickly. Proper supervision requires trained eyes that
                    understand canine body language, escalation patterns, and when to intervene. Staffing ratios are not a minor
                    operational detail — they are the difference between controlled socialization and chaos.
                </p>

                <p className="mb-4">
                    Another question owners should ask is: <strong>Are the owners present and actively involved?</strong>
                </p>

                <p className="mb-6">
                    In this industry, it is surprisingly common for facilities to be owned by individuals who are rarely on site.
                    Some own multiple locations in the same city. Some own facilities in one state while living in another. When
                    ownership is absent, the culture and standards of care often depend entirely on lower-level management and
                    frontline staff. In contrast, owner-present facilities tend to have stronger accountability, clearer
                    expectations, and a deeper emotional investment in outcomes.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                        <strong>Staffing ratios:</strong> How many dogs per supervisor during active play? Is there ever a scenario
                        where one person is watching 30 or more dogs alone?
                    </li>
                    <li>
                        <strong>Owner involvement:</strong> Is ownership present daily, or is the operation run remotely?
                    </li>
                    <li>
                        <strong>Staff training:</strong> What specific training must employees complete before supervising groups?
                    </li>
                    <li>
                        <strong>Screening:</strong> How are dogs evaluated for compatibility before being placed in group settings?
                    </li>
                    <li>
                        <strong>Incident protocol:</strong> What is the exact process if a fight or injury occurs?
                    </li>
                    <li>
                        <strong>Transparency:</strong> Can you tour freely and ask direct questions without resistance?
                    </li>
                </ul>

                <p className="mb-6">
                    Here is the unfortunate truth: fewer than 2% of prospective clients ever ask about staffing ratios. Most
                    people assume that if a facility is clean and friendly, it must also be safe. But cleanliness and safety are
                    not the same thing. Marketing and supervision are not the same thing.
                </p>

                <p className="mb-6">
                    The tragedy is what happens after a bad experience. When a dog is injured, frightened, or mishandled at a
                    poorly run facility, many owners understandably decide they will never use boarding or daycare again. Their
                    reaction is justified. But the long-term consequence is often overlooked.
                </p>

                <p className="mb-6">
                    The dogs they bring into their lives for years afterward may never experience healthy socialization. They may
                    never learn to interact safely with other dogs outside of their home. They may spend vacations alone in a
                    house with a neighborhood teenager stopping by briefly, or sitting isolated in a backyard. Over time, that
                    lack of structured social exposure can contribute to anxiety, reactivity, and limited behavioral development.
                </p>

                <p className="mb-6">
                    One negative experience at one poorly managed facility can ripple forward for decades — shaping how an owner
                    approaches every dog they ever have. That is the real cost of weak standards.
                </p>

                <p className="mb-6">
                    The goal is not to scare people away from boarding and daycare. Properly run facilities provide structure,
                    enrichment, social development, and safe supervision that many dogs benefit from immensely. The goal is to
                    encourage better questions, better oversight, and better operational discipline — so that one preventable
                    mistake does not eliminate healthy social opportunities for generations of dogs.
                </p>

                <p className="mb-6">
                    The safest operators welcome detailed questions. They can explain their ratios. They can explain their
                    training program. They can explain who is on the floor and why. They can explain how ownership is involved.
                    Systems create safety. Transparency proves those systems exist.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    What Boarding and Daycare Operators Can Implement Immediately
                </h2>

                <p className="mb-4">
                    If you run a facility, the fastest way to get ahead of this movement is to stop treating safety as a vibe and
                    start treating it as a system. However, it is also important to acknowledge a deeper structural problem within
                    the broader pet care industry: the barrier to entry is extremely low.
                </p>

                <p className="mb-4">
                    In many states, including Pennsylvania, it is illegal to operate a boarding facility from a private residence
                    without proper licensing and inspection. Yet unlicensed in-home boarding still happens. Beyond that, dog
                    walking and house sitting often require little to no formal qualifications, experience, or oversight. There
                    are online platforms and informal community groups where individuals can begin offering services with minimal
                    demonstrated experience and no structured training requirements.
                </p>

                <p className="mb-4">
                    As someone active in numerous professional and public pet care forums, I have seen firsthand the concerning
                    realities that rarely make it into marketing materials. There are anonymous posts asking how to avoid
                    background checks. There are caregivers admitting they do not fully pet-proof their homes. There are people
                    with no hands-on experience being trusted with multiple dogs in private settings. Many of these incidents are
                    documented publicly because individuals share them openly in social media groups. The volume of these stories
                    is deeply troubling.
                </p>

                <p className="mb-6">
                    The larger issue is not simply a lack of documentation or certification — it is the absence of meaningful
                    qualification requirements across large segments of the industry. When anyone can present themselves as a pet
                    professional overnight, without apprenticeship, inspection, or formal training, risk increases dramatically.
                    That reality should concern both operators and pet owners.
                </p>

                <p className="mb-4">
                    That said, licensed boarding and daycare operators cannot wait for structural reform. There are concrete
                    measures facilities can implement immediately to create separation between serious operations and casual
                    providers.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                        <strong>Strict staffing ratios:</strong> Establish and publicly communicate maximum dogs-per-supervisor
                        limits during active play. Ratios should prioritize safety over profitability, and no employee should ever
                        be responsible for overwhelming group sizes alone.
                    </li>
                    <li>
                        <strong>Owner presence and accountability:</strong> Ensure leadership is visibly involved in operations.
                        Facilities where ownership is present daily often maintain stronger culture, oversight, and standards.
                    </li>
                    <li>
                        <strong>Structured onboarding pathway:</strong> Require shadowing periods, progressive responsibility,
                        and documented competency before any staff member supervises group play independently.
                    </li>
                    <li>
                        <strong>Behavior and escalation education:</strong> Mandatory training in canine body language, play style
                        differences, early stress signals, and intervention timing.
                    </li>
                    <li>
                        <strong>Transparent incident protocol:</strong> A clearly defined chain of response for injuries, fights,
                        medical emergencies, and client communication.
                    </li>
                    <li>
                        <strong>Clear compliance with state licensing:</strong> Maintain up-to-date inspection records and be
                        transparent about regulatory oversight applicable in your state.
                    </li>
                </ul>

                <p className="mb-6">
                    The uncomfortable truth is that in many areas of pet care — particularly private house sitting and informal
                    dog walking — there may be little to no oversight at all. That places even greater responsibility on
                    established, licensed facilities to operate at a visibly higher standard. Professional operators must create
                    clear separation between regulated, structured care environments and loosely organized private arrangements.
                </p>

                <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
                    <p className="font-semibold mb-2">Operator reality check:</p>
                    <p>
                        If your “training” consists mainly of having someone watch a shift or two before being placed in charge of
                        large groups of dogs, you are one hiring mistake away from a preventable crisis. Formalizing supervision,
                        ratios, and accountability is not unnecessary bureaucracy — it is the difference between a structured
                        professional environment and uncontrolled risk.
                    </p>
                </div>

                <p className="mb-6">
                    Ultimately, broader reform may require state-level or national conversation about qualification thresholds
                    across the entire pet services spectrum. Until that happens, licensed boarding and daycare operators must
                    voluntarily operate at a level that exceeds the minimum — because in many segments of this industry, there
                    effectively is no minimum at all.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Where This Trend Is Headed
                </h2>

                <p className="mb-4">
                    The movement is not just about punishing bad actors. The larger story is that the pet care industry is slowly
                    waking up to the reality that informal entry and inconsistent oversight are no longer sustainable. Across the
                    country, more state-level legislative proposals appear each year aimed at increasing regulation of boarding
                    and daycare facilities. Progress is uneven, but momentum is real.
                </p>

                <p className="mb-4">
                    What remains missing, however, is any form of national standard. There is currently no federal framework that
                    sets baseline requirements for dog boarding, daycare, dog walking, or house sitting. Each state operates
                    independently. Some have structured licensing and inspection processes. Others have little to no meaningful
                    oversight at all. That fragmentation is one of the biggest weaknesses in the industry today.
                </p>

                <p className="mb-4">
                    In my view, incremental adjustments are not enough. What would truly move the industry forward is a
                    comprehensive national overhaul — one that establishes minimum qualification requirements across all states.
                    Not to eliminate opportunity, but to professionalize it. There must be a balance between allowing passionate
                    people to enter the field and ensuring that those entrusted with animals possess real knowledge and
                    competency.
                </p>

                <p className="mb-4">
                    Imagine an entry pathway similar to skilled trades. Electricians, plumbers, and other highly trained
                    professionals have apprenticeships, certifications, and structured training options. There are trade schools.
                    There are vocational programs. There are defined educational routes that allow young people — even minors —
                    to begin learning the craft responsibly and affordably. The pet care industry could benefit enormously from a
                    similar model.
                </p>

                <p className="mb-4">
                    There should be accessible education programs in high schools and community colleges. There should be
                    affordable certification tracks that teach canine behavior, safe group management, sanitation standards,
                    emergency response, and operational ethics. Entry into the industry should remain financially attainable, but
                    it should not remain unstructured.
                </p>

                <p className="mb-6">
                    Real reform means creating standards that apply everywhere — not relying on voluntary listings, marketing
                    badges, or loosely affiliated consumer organizations. Those groups may offer public awareness tools, but they
                    do not license facilities, inspect operations, or enforce safety compliance. Meaningful improvement will come
                    from legislative action, enforceable oversight, and structured education — not symbolic affiliations.
                </p>

                <p className="mb-6">
                    If the industry continues evolving only through scattered state proposals and reactive responses to
                    high-profile incidents, progress will remain slow and inconsistent. But if policymakers, educators, and
                    industry leaders treat pet care as the serious profession it truly is, we could see the emergence of a
                    standardized, respected career path — one that protects animals, empowers responsible operators, and gives
                    passionate newcomers a legitimate way to build a future in the field.
                </p>

                <p className="mb-6">
                    The direction is clear: safety standards are becoming a baseline expectation. The question is whether the
                    industry will move proactively toward structured national reform — or continue responding only after tragedy
                    forces the conversation.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>

                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>
                        Advocacy pressure is rising because highly publicized cruelty and negligence cases have exposed a deeper
                        structural issue: there is no national standard governing dog boarding, daycare, walking, or house sitting.
                        Oversight varies dramatically state by state, and in some regions there is little to no meaningful regulation.
                    </li>

                    <li>
                        The most important safety question pet owners can ask is about staffing ratios during group play. How many
                        dogs is one person supervising at a time? Supervision capacity — not marketing materials — determines whether
                        play remains controlled or becomes dangerous.
                    </li>

                    <li>
                        Owner involvement matters. Facilities where ownership is present and actively engaged typically demonstrate
                        stronger accountability, clearer operational culture, and faster response when issues arise.
                    </li>

                    <li>
                        The low barrier to entry across large portions of the pet care industry — particularly in private dog
                        walking and house sitting — contributes significantly to risk. Without qualification requirements,
                        apprenticeship models, or standardized education pathways, inexperienced individuals can begin operating
                        immediately with minimal oversight.
                    </li>

                    <li>
                        While training documentation and certifications help responsible operators distinguish themselves, voluntary
                        listings or consumer organizations do not create enforceable safety standards. Real improvement will require
                        structured education pathways and stronger legislative frameworks at the state or national level.
                    </li>

                    <li>
                        Long-term reform should focus on building legitimate career pathways — including trade-style education,
                        accessible certification programs, and defined qualification benchmarks — so passionate individuals can enter
                        the industry affordably while still meeting clear competency standards.
                    </li>

                    <li>
                        Ultimately, safety is not about optics. It is about systems: supervision limits, trained staff, documented
                        procedures, present leadership, and transparent accountability.
                    </li>
                </ul>

                {/* Sources */}
                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Selected Sources &amp; Further Reading
                </h2>

                <ul className="list-disc pl-5 space-y-2 mb-10 text-sm">
                    <li>
                        KOMO News coverage discussing boarding safety concerns, prosecutorial commentary,
                        and public scrutiny following a cruelty case:{' '}
                        <a
                            className="underline"
                            href="https://komonews.com/news/local/better-business-bureau-animal-advocacy-seattle-king-county-prosecutors-bbb-lazy-dog-crazy-dog-cameron-nakashima-safeguards-internal-training-program-pet-services-association"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            komonews.com report
                        </a>
                        .
                    </li>

                    <li>
                        New York State Senate press release calling for increased oversight of boarding facilities
                        following safety concerns:{' '}
                        <a
                            className="underline"
                            href="https://www.nysenate.gov/newsroom/press-releases/2025/james-tedisco/enough-enough-tedisco-calls-new-safe-pet-boarding-act"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            nysenate.gov press release
                        </a>
                        .
                    </li>

                    <li>
                        Pennsylvania Department of Agriculture kennel licensing information outlining
                        inspection requirements for regulated boarding facilities:{' '}
                        <a
                            className="underline"
                            href="https://www.agriculture.pa.gov/Animals/DogLaw/kennel-licensing/Pages/default.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            agriculture.pa.gov kennel licensing
                        </a>
                        .
                    </li>

                    <li>
                        International Boarding &amp; Pet Services Association (IBPSA) certification overview
                        and professional development pathways for boarding and daycare operators:{' '}
                        <a
                            className="underline"
                            href="https://www.ibpsa.com/certifications/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ibpsa.com certifications
                        </a>
                        .
                    </li>

                    <li>
                        Professional Animal Care Certification Council (PACCC) credential information
                        outlining third-party certification standards for pet care professionals:{' '}
                        <a
                            className="underline"
                            href="https://paccert.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            paccert.org
                        </a>
                        .
                    </li>

                    <li>
                        Best Friends Animal Society onboarding and structured training resources
                        demonstrating formalized animal care staff development models:{' '}
                        <a
                            className="underline"
                            href="https://bestfriends.org/network/resources-tools/onboarding-and-training-new-animal-care-staff"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            bestfriends.org training resources
                        </a>
                        .
                    </li>

                    <li>
                        Pet Sitters International (PSI) certification and professional standards information
                        for independent pet sitters and dog walkers:{' '}
                        <a
                            className="underline"
                            href="https://www.petsit.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            petsit.com
                        </a>
                        .
                    </li>
                </ul>

                {/* Back link */}
                <Link
                    href={`/${locale}/blog`}
                    className="underline text-[#2c4a30] font-medium hover:opacity-80"
                >
                    ← Back to Blog
                </Link>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 mt-8">
                    This article provides general education and is not legal advice. Requirements and oversight vary by location.
                    Always consult your local regulations and professional advisors for compliance.
                </p>
            </main>
        </>
    );
}
