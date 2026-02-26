'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ChooseDogBoardingDaycareBlog() {
  const locale = useLocale();

  const title = 'How to Choose a Good Dog Boarding or Daycare Facility';
  const date = 'June 11, 2025';
  const categories = ['boarding', 'owner'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
    breeder: 'Breeders',
  };

  return (
    <>

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

        <p className="italic mb-4">From someone who&apos;s run one for nearly a decade</p>

        <p className="mb-4">
          As someone who has owned and operated a dog boarding and daycare facility for many years,
          I&apos;ve had thousands of conversations with pet parents trying to make the best decision for their dog.
          I&apos;ve seen firsthand how overwhelming it can be — the brochures, the websites, the polished social media —
          and I&apos;ve also seen what really matters once your dog is actually staying behind that gate.
        </p>

        <p className="mb-4">
          If you&apos;re trying to decide where to board your dog or send them for daycare, I&apos;m going to walk you through what you
          should be looking for, what to avoid, and how to trust your instincts. Not based on a checklist I found online —
          but based on real-world operations, industry best practices, and the standards I hold my own facility to every single day.
        </p>

        <p className="mb-4">
          This guide isn&apos;t going to tell you there&apos;s only one &quot;perfect&quot; model. Different dogs and different families have different needs.
          But I can absolutely tell you how to spot quality, how to evaluate safety, and what separates good facilities from those
          that just look good on Instagram.
        </p>

        <p className="mb-6">
          Let&apos;s start with the basics: what good boarding and daycare actually looks like behind the scenes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. A Quiet, Clean, Purpose-Designed Facility</h2>

        <p className="mb-4">
          One of the first things people notice when they visit our facility is how quiet it is. And that surprises them —
          because in most people&apos;s minds, dog boarding equals constant barking, chaos, and noise. But I firmly believe
          that a peaceful environment is not only possible — it&apos;s essential.
        </p>

        <p className="mb-4">
          We don&apos;t have dogs barking nonstop throughout the day because we arrange our dogs strategically, based on temperament,
          energy, and personality. Not just size. We use space and thoughtful grouping to keep stress low and reduce triggers.
          This isn&apos;t just about noise; it&apos;s about mental health. Constant barking means constant stress. And chronic stress
          can lead to behavioral regression, immune suppression, and even injury from overstimulation.
        </p>

        <p className="mb-4">
          Most facilities don&apos;t prioritize quiet. But they should.
        </p>

        <p className="mb-4">
          We also run a much cleaner facility than many commercial operations because we&apos;re not overloaded with dogs. We deep clean
          every room, every day, using vet-grade disinfectants. Every kennel is scrubbed, every water bowl refreshed.
          You won&apos;t see a lazy mop job or bleach bucket. And you won&apos;t smell urine. Cleanliness is something clients notice subconsciously —
          if you smell feces or ammonia in the lobby, imagine what it&apos;s like behind closed doors.
        </p>

        <p className="mb-4">
          This is echoed by industry best practices: according to the American Kennel Club (AKC), the best-run boarding operations
          &quot;smell clean,&quot; are well-ventilated, and follow strict sanitation protocols【AKC, 2024】.
          Floors should be non-slip and easily sanitized. Waste should be picked up frequently. And dogs should not be lying in
          soiled bedding or old food bowls.
        </p>

        <p className="mb-6">We don&apos;t cut corners, and neither should the place you choose.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Personalized Care Over High Volume</h2>

        <p className="mb-4">
          Our peak capacity is around 80–90 dogs — and that&apos;s on a full holiday weekend. I&apos;ve seen facilities that cram 150–180 dogs
          into their spaces, with staff scrambling and dogs stacked in crates. That&apos;s not care. That&apos;s containment.
        </p>

        <p className="mb-4">
          Our approach is personalized. We know every dog&apos;s name, personality, quirks, and feeding schedule. We tailor their day —
          including playtime, rest breaks, and enrichment — based on who they are, not what package their owner bought.
          This level of care simply isn&apos;t possible when your facility is running like a factory.
        </p>

        <p className="mb-4">
          Here&apos;s something most people don&apos;t realize: bigger isn&apos;t always better. In fact, smaller is often safer.
          Overcrowding increases stress, barking, disease transmission, and injury risk. The International Boarding &amp;
          Pet Services Association (IBPSA) recommends no more than 15 dogs per staff member — but the best-run places aim for
          even lower ratios【IBPSA, 2022】.
        </p>

        <p className="mb-6">
          When you&apos;re touring a facility, ask how many dogs they take at once. Ask how many people are on shift.
          And ask how they group dogs for playtime. If they can&apos;t give you clear answers, or they say something like
          &quot;Oh, we just put them all together,&quot; that&apos;s a red flag.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Staff Quality and Turnover</h2>

        <p className="mb-4">
          We pay our staff very well, and we have very low turnover. That&apos;s not just a brag — it&apos;s one of the biggest reasons our
          facility runs so smoothly. Our team knows the dogs, knows each other, and understands our protocols inside and out.
          Mistakes are rare because communication is constant and the people here actually care.
        </p>

        <p className="mb-4">
          Unfortunately, the pet care industry is notorious for low pay and high turnover. And that affects everything from safety to sanitation.
          A facility with a revolving door of teenage staff who got two hours of training before being handed the morning feeding chart
          is one you should avoid.
        </p>

        <p className="mb-2 font-semibold">Ask the hard questions:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>&quot;How long has your staff been here?&quot;</li>
          <li>&quot;Do you have the same people every day?&quot;</li>
          <li>&quot;Are they trained in pet first aid or behavior?&quot;</li>
        </ul>

        <p className="mb-4">
          If the person showing you around dodges or gives vague answers, take that seriously.
          According to PetMD and the Humane Society, staff-to-dog ratio, training, and experience are
          some of the most critical factors in daycare safety【PetMD, 2024】【HSUS, 2023】.
        </p>

        <p className="mb-6">
          We don&apos;t just hire warm bodies. We hire people who care. And we train them like they&apos;re running a veterinary practice —
          because in many ways, they are.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Tours Matter More Than Brochures</h2>

        <p className="mb-4">
          This one is simple: if a facility won&apos;t give you a real tour, don&apos;t leave your dog there.
        </p>

        <p className="mb-4">
          I can&apos;t count how many clients have told me they went to other facilities and were handed a pamphlet and told to call later.
          That&apos;s not a tour. That&apos;s a dodge.
        </p>

        <p className="mb-4">
          At our facility, we walk you through the entire operation — play yards, kennels, feeding prep areas, and yes,
          even where the mop buckets live. We tell you how dogs are grouped, what our cleaning process looks like,
          how we respond to emergencies, and what we do when dogs aren&apos;t a good fit for group play.
        </p>

        <p className="mb-4">
          Why? Because transparency matters. And because pet parents deserve real answers. You&apos;re not buying a blender.
          You&apos;re leaving a member of your family.
        </p>

        <p className="mb-4">
          This is one of the biggest red flags I tell people to watch for: if the person giving the tour just rattles off rehearsed
          marketing lines, or avoids your questions, they probably don&apos;t know the operation.
          And if they don&apos;t know the operation, they probably don&apos;t care much about it.
        </p>

        <p className="mb-6">
          Choose places where someone takes the time to talk with you — not someone who ushers you out as fast as they can.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Health, Safety, and Emergency Protocols</h2>

        <p className="mb-4">
          Let&apos;s talk about what actually keeps your dog safe — not just what looks good on paper.
        </p>

        <p className="mb-4">
          At our facility, we require proof of vaccinations before any dog enters. That includes rabies, DHPP (distemper/parvo),
          and Bordetella (kennel cough). We also highly recommend canine influenza, especially during peak travel seasons.
        </p>

        <p className="mb-4">
          This isn&apos;t negotiable. We turn people away all the time if their vaccines aren&apos;t up to date.
          I&apos;m not going to risk the health of 80+ dogs and the jobs of my staff just to take a few extra bucks from someone who skipped their vet visit.
        </p>

        <p className="mb-4">
          And here&apos;s the truth: if a facility doesn&apos;t require vaccines — or lets you &quot;sign a waiver&quot; — run.
          This isn&apos;t about preferences. It&apos;s about disease prevention. Kennel cough, giardia, and even parvovirus can spread in communal settings.
          Good facilities enforce vaccine policies to protect everyone.
          According to PetMD, a lack of vaccine enforcement is one of the top signs of a poorly run operation【PetMD, 2024】.
        </p>

        <p className="mb-4">
          We also have a relationship with a local veterinary clinic. They know our staff, our protocols, and they take us seriously when we call.
          Emergency vet care is increasingly hard to access — it&apos;s not unusual to wait 48 hours at an ER just to be seen.
          So having that pre-existing relationship gives us better access when minutes matter.
        </p>

        <p className="mb-2 font-semibold">Ask the facility you&apos;re touring:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>&quot;Do you have a vet on call?&quot;</li>
          <li>&quot;What&apos;s your emergency protocol?&quot;</li>
          <li>&quot;Have you had to transport a dog before, and how was it handled?&quot;</li>
        </ul>

        <p className="mb-4">
          If they can&apos;t answer those questions, they&apos;re not prepared.
        </p>

        <p className="mb-4 font-semibold">
          One more thing I wish more clients asked:
          &nbsp;&quot;What are your safety protocols for dogs that don&apos;t get along with others?&quot;
        </p>

        <p className="mb-4">
          Not every dog is cut out for group play. Some are anxious. Some are reactive. Some just prefer being alone.
          And that&apos;s OK — but it&apos;s not OK to put those dogs into chaotic group settings.
          We evaluate every dog before letting them join group play. If they don&apos;t do well, they still get exercise and stimulation —
          just in a way that fits their needs.
        </p>

        <p className="mb-6">
          Facilities that accept every dog for group play are rolling the dice. And your dog might be the one who gets hurt.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Why We Don&apos;t Use Webcams — and Why That&apos;s Okay</h2>

        <p className="mb-4">
          I get asked this a lot: &quot;Can I check in on my dog through a webcam?&quot;
          My answer is no. And I&apos;ll tell you why.
        </p>

        <p className="mb-4">
          First, we employ teenagers. Some of our staff are under 18. And I do not — and will not — allow random people to log in
          and watch our employees all day, every day. It&apos;s invasive. It&apos;s creepy. And it&apos;s unfair to the people who work here.
        </p>

        <p className="mb-4">
          Second, even for adult staff, I don&apos;t believe in 24/7 surveillance. You wouldn&apos;t want a camera on you while you worked,
          used the restroom, or handled difficult situations with animals. Our staff deserve privacy, respect, and trust.
        </p>

        <p className="mb-4">
          Third — and I&apos;ll say this bluntly — if your trust in a facility depends entirely on a camera feed, you probably shouldn&apos;t use that facility.
        </p>

        <p className="mb-4">
          I&apos;m not hiding anything. Our space is clean. Our dogs are happy. Our protocols are solid. But I&apos;m also not here to entertain or perform.
          I want our team focused on the dogs — not on whether they&apos;re being watched every second.
        </p>

        <p className="mb-4">
          If you&apos;re the kind of person who demands 24/7 access via webcam, that&apos;s your right. There are places that offer it.
          Just like certain restaurants cater to certain dietary preferences. If that&apos;s what you want, find a place that aligns.
          But it doesn&apos;t mean that places without cameras are doing anything wrong.
        </p>

        <p className="mb-6">
          For us, it&apos;s about protecting our team, maintaining peace, and focusing on the dogs — not the optics.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Not Every Facility Can Do Everything — And That&apos;s Okay</h2>

        <p className="mb-4">
          Here&apos;s something that most pet parents don&apos;t realize: not all facilities are built the same, and that&apos;s not a bad thing.
        </p>

        <p className="mb-4">
          At our place, we don&apos;t offer tours when we&apos;re completely full. Why? Because some dogs get excited by new people.
          Others get anxious. And some may even react poorly to strangers walking by their space.
        </p>

        <p className="mb-4">
          When we have 90 dogs checked in and every room is full, I&apos;m not going to parade potential clients through that environment.
          It&apos;s not fair to the dogs. It&apos;s not safe for the tour guests. And it&apos;s not necessary.
          We offer tours when we have space and calm energy. That way, you can actually hear me speak and see the space as it&apos;s meant to be used.
        </p>

        <p className="mb-4">
          We also don&apos;t have furniture, carpet, or decor that a dog could chew and swallow.
          And believe it or not, that makes most dog boarding facilities safer than your home.
          I&apos;ve seen more dogs chew through sandals, remotes, chair legs, and socks in their own living rooms than I&apos;ve ever seen in a kennel.
        </p>

        <p className="mb-4">
          Does that mean boarding is risk-free? No. Group play comes with risk. Kennels are not padded bubbles.
          But when managed properly, they are designed environments built for safety, durability, and hygiene.
          And they are often less dangerous than unsupervised time at home.
        </p>

        <p className="mb-6">
          The point is: don&apos;t judge a facility for what it doesn&apos;t have. Judge it based on what it prioritizes.
          For us, that&apos;s peace, cleanliness, low noise, and consistent care —
          not live feeds, plush couches, or showroom tours when the dogs are full of energy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Licensing, Legal Compliance, and Why It Matters</h2>

        <p className="mb-4">
          Here&apos;s a truth bomb: most pet parents have no idea whether the sitter or facility they&apos;re using is legal.
          And in my opinion, that&apos;s a problem.
        </p>

        <p className="mb-4">
          In most U.S. states — and in countries like Canada, Australia, New Zealand, and Ireland — facilities must be licensed.
          That usually means inspections, business registration, zoning compliance, sanitation protocols, and a whole lot of paperwork.
          If a facility has that license, it means someone (usually animal control or a local council) has vetted them to make sure they&apos;re meeting the basics.
        </p>

        <p className="mb-2 font-semibold">Ask:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>&quot;Are you licensed to board dogs?&quot;</li>
          <li>&quot;When were you last inspected?&quot;</li>
          <li>&quot;Do you carry liability insurance?&quot;</li>
        </ul>

        <p className="mb-4">
          You&apos;d be amazed how many operations dodge these questions.
        </p>

        <p className="mb-4">
          And here&apos;s where it gets tricky: most in-home dog sitters are not licensed at all.
          They don&apos;t register their business. Their property isn&apos;t zoned for animal care. They aren&apos;t inspected.
          And if your dog gets hurt or escapes, you may have no legal recourse. You&apos;re placing your pet — and sometimes hundreds or thousands of dollars —
          into a system with no oversight.
        </p>

        <p className="mb-4">
          In our industry, this is a huge source of frustration.
        </p>

        <p className="mb-4">
          Because the truth is: people who run legal facilities are often at a disadvantage.
          We pay taxes. We carry insurance. We follow safety rules.
          And then we watch unlicensed backyard sitters collect money under the table with none of the same costs or compliance.
          It&apos;s like running a restaurant next to a guy selling burgers out of his garage.
        </p>

        <p className="mb-4">
          Worse, pet parents don&apos;t even realize they&apos;re participating in it.
        </p>

        <p className="mb-6">
          <strong>So here&apos;s my plea:</strong><br />
          Ask your sitter or boarding facility if they are licensed and insured.<br />
          If they say no — or give you an excuse — understand what that means.
          You&apos;re supporting a business that&apos;s choosing to operate outside the law, and that&apos;s not something to take lightly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">9. What Clients Should Be Asking (But Usually Don&apos;t)</h2>

        <p className="mb-4">
          If I could snap my fingers and make every pet parent ask three questions, they&apos;d be:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>What&apos;s your staff turnover rate?</strong> – Because consistency matters. Familiar faces prevent mistakes.</li>
          <li><strong>Are you licensed and inspected?</strong> – Because legality is non-negotiable.</li>
          <li><strong>Are you caring for more dogs than you&apos;re legally allowed?</strong> – Because exceeding your legal limit is a safety risk.</li>
        </ul>

        <p className="mb-6">
          These are the questions that cut through marketing fluff and expose whether a facility is safe, stable, and ethical.
          But most people don&apos;t ask them. They get caught up in branding, cute photos, and price tags.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Pricing and Priorities: What Really Matters</h2>

        <p className="mb-4">
          We charge less than most of our competitors. Not because we cut corners —
          but because we&apos;ve built efficient systems and we don&apos;t believe in gouging.
        </p>

        <p className="mb-4">
          That said, some clients will happily pay anything. Others are extremely price-conscious.
          That&apos;s fine — but remember that cheaper isn&apos;t always better. And more expensive isn&apos;t either.
        </p>

        <p className="mb-4 font-semibold">What matters is value. What are you getting for that rate?</p>

        <p className="mb-4">
          Are you getting quiet rooms, good ratios, trained staff, and low stress?
          Or are you getting a warehouse full of overstimulated dogs and a checklist of &quot;add-ons&quot; that cost extra just to get basic care?
        </p>

        <p className="mb-4">
          Look at what the price includes — and what it doesn&apos;t.
        </p>

        <p className="mb-6">
          Also, don&apos;t fall for flashy upcharges. You don&apos;t need mood lighting or premium music playlists.
          You need cleanliness, supervision, health policies, and staff who actually care.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">11. Final Thoughts (and What I Wish Every Pet Parent Knew)</h2>

        <p className="mb-4">
          After all these years, here&apos;s what I really wish more clients understood:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Supporting unlicensed sitters takes business away from people who follow the law.</strong> It&apos;s not just a cute side hustle. It&apos;s tax evasion. It&apos;s a liability risk. And it actively hurts the people who are trying to run legitimate operations.</li>
          <li><strong>Your dog&apos;s safety depends on who&apos;s watching — not where they&apos;re staying.</strong> A luxurious facility with bad staff is dangerous. A humble facility with great staff is gold.</li>
          <li><strong>Transparency is everything.</strong> If a place won&apos;t answer your questions, give you a tour (when appropriate), or explain their policies, walk away.</li>
          <li><strong>Trust your gut.</strong> If you feel like something is off — if the energy is weird, if the staff seem disengaged, if the place feels chaotic — don&apos;t ignore that. Your dog can&apos;t talk. You have to be their advocate.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Conclusion</h2>

        <p className="mb-4">
          Choosing a dog boarding or daycare facility isn&apos;t just about amenities or convenience — it&apos;s about trust.
          You&apos;re handing over a member of your family. And you deserve to feel confident in that decision.
        </p>

        <p className="mb-4">
          I&apos;ve spent years building a facility that I&apos;d trust with my own dogs. That&apos;s my benchmark. And that should be yours too.
        </p>

        <p className="mb-6">
          So whether you choose my facility or another, I hope this guide empowers you to ask better questions,
          demand higher standards, and ultimately, choose a place where your dog can thrive — not just survive.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">📚 Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-6">
          <li>
            American Kennel Club (AKC). &quot;Boarding Your Dog.&quot;<br />
            <a
              href="https://www.akc.org/expert-advice/training/boarding-your-dog"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.akc.org/expert-advice/training/boarding-your-dog
            </a>
          </li>
          <li>
            PetMD. &quot;Choosing a Doggie Daycare.&quot;<br />
            <a
              href="https://www.petmd.com/dog/general-health/evr_multi_choosing_a_doggie_daycare"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.petmd.com/dog/general-health/evr_multi_choosing_a_doggie_daycare
            </a>
          </li>
          <li>
            Humane Society of the United States. &quot;Finding a Good Doggie Daycare.&quot;<br />
            <a
              href="https://www.humanesociety.org/resources/finding-good-doggie-daycare"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.humanesociety.org/resources/finding-good-doggie-daycare
            </a>
          </li>
          <li>
            IBPSA. Staff Ratio Guidelines.<br />
            <a
              href="https://www.ibpsa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.ibpsa.com
            </a>
          </li>
          <li>
            PACCC – Professional Animal Care Certification Council.<br />
            <a
              href="https://www.paccert.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.paccert.org
            </a>
          </li>
          <li>
            Victoria, Australia. Code of Practice for Boarding Establishments.<br />
            <a
              href="https://agriculture.vic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://agriculture.vic.gov.au
            </a>
          </li>
          <li>
            SPCA New Zealand. Boarding and Daycare Advice.<br />
            <a
              href="https://www.spca.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.spca.nz
            </a>
          </li>
          <li>
            Irish Boarding Kennels &amp; Cattery Association (IBKCA).<br />
            <a
              href="https://www.ibkca.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.ibkca.ie
            </a>
          </li>
          <li>
            BookYourPet. Licensing Dog Daycares.<br />
            <a
              href="https://www.bookyourpet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.bookyourpet.com
            </a>
          </li>
        </ul>

        <p className="text-xs text-gray-500 italic mb-6">
          Disclaimer: This article is based on personal experience and research, but it does not constitute veterinary or legal advice.
          Always consult your veterinarian or attorney for guidance tailored to your dog or facility.
        </p>

        <Link
          href={`/${locale}/blog`}
          className="inline-block underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
