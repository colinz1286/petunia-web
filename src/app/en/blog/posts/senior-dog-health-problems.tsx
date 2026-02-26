'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function SeniorDogHealthProblems() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on September 27, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Top 10 Senior Dog Health Problems (and How to Support Aging Pets)
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
            Health
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#arthritis">1. Arthritis and Joint Pain</a></li>
            <li><a href="#dementia">2. Canine Cognitive Dysfunction (Dementia)</a></li>
            <li><a href="#heart">3. Heart Disease</a></li>
            <li><a href="#dental">4. Dental Disease</a></li>
            <li><a href="#vision">5. Vision and Hearing Loss</a></li>
            <li><a href="#cancer">6. Cancer</a></li>
            <li><a href="#kidney">7. Kidney Disease</a></li>
            <li><a href="#obesity">8. Obesity and Metabolic Disorders</a></li>
            <li><a href="#skin">9. Skin and Coat Issues</a></li>
            <li><a href="#incontinence">10. Incontinence</a></li>
            <li><a href="#diet">Senior Diet and Exercise</a></li>
            <li><a href="#boarding">Boarding and Daycare Tips for Senior Dogs</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Senior dogs face unique health problems, from arthritis and dementia to heart disease
            and incontinence. With the right diet, gentle exercise, veterinary care, and boarding
            accommodations, older dogs can enjoy happy, comfortable golden years. Owners should
            monitor for changes, adapt routines, and prioritize preventive care.
          </p>
        </section>

        <section id="arthritis" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Arthritis and Joint Pain</h2>
          <p>
            Arthritis is one of the most common issues in senior dogs. Symptoms include stiffness,
            limping, reluctance to climb stairs, and difficulty rising. Large breeds are especially
            vulnerable, but any aging dog can be affected.
          </p>
          <p>
            Support includes weight management, joint supplements (glucosamine, chondroitin, omega-3s),
            low-impact exercise like swimming, and veterinary-prescribed pain relief. Orthopedic beds
            and ramps also make daily life easier.
          </p>
        </section>

        <section id="dementia" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Canine Cognitive Dysfunction (Dementia)</h2>
          <p>
            Like humans, dogs can develop dementia in old age. Symptoms include confusion,
            nighttime restlessness, house-soiling, and changes in social interaction. Owners may
            notice their dog staring into corners or seeming “lost” in familiar spaces.
          </p>
          <p>
            Veterinary support may include supplements, medications, and structured routines to
            reduce anxiety. Mental stimulation—puzzle toys, training games, short walks—helps
            maintain cognitive function.
          </p>
        </section>

        <section id="heart" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Heart Disease</h2>
          <p>
            Heart problems, particularly congestive heart failure, are prevalent in older dogs.
            Symptoms include coughing, reduced stamina, labored breathing, and fainting spells.
          </p>
          <p>
            Treatment options range from medications to manage fluid retention to diet adjustments
            (low sodium, prescription diets). Early detection via annual veterinary exams is key.
          </p>
        </section>

        <section id="dental" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Dental Disease</h2>
          <p>
            Dental disease is nearly universal in senior dogs. Plaque, tartar, and gum infection
            can cause pain, tooth loss, and even systemic infections affecting the kidneys or heart.
          </p>
          <p>
            Daily brushing, dental chews, and professional cleanings support oral health. Ignoring
            dental care can shorten a dog’s lifespan.
          </p>
        </section>

        <section id="vision" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Vision and Hearing Loss</h2>
          <p>
            Cloudy eyes, cataracts, and deafness are common in seniors. These changes may not
            cause pain but can alter quality of life and safety.
          </p>
          <p>
            Owners can adapt by using hand signals, keeping furniture consistent, and avoiding
            startling their pets. Boarding facilities should be notified of sensory impairments
            so staff can provide extra support.
          </p>
        </section>

        <section id="cancer" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Cancer</h2>
          <p>
            Cancer is a leading cause of death in senior dogs. Symptoms vary widely but can include
            lumps, weight loss, lethargy, or persistent sores. Regular vet checkups help with early
            detection.
          </p>
          <p>
            Treatment depends on the type and stage but may involve surgery, chemotherapy, or palliative care.
          </p>
        </section>

        <section id="kidney" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Kidney Disease</h2>
          <p>
            Chronic kidney disease leads to gradual organ decline. Early symptoms include excessive
            thirst and urination, loss of appetite, and vomiting.
          </p>
          <p>
            Veterinary support may include prescription diets, fluid therapy, and medications to
            slow progression. Routine bloodwork is essential for senior dogs to detect kidney issues
            early.
          </p>
        </section>

        <section id="obesity" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Obesity and Metabolic Disorders</h2>
          <p>
            Slower metabolism and reduced activity mean many senior dogs gain weight. Obesity
            worsens arthritis, diabetes, and heart disease.
          </p>
          <p>
            Support includes calorie-controlled diets, gentle exercise, and frequent weigh-ins.
            For diabetic dogs, insulin and special feeding schedules may be necessary.
          </p>
        </section>

        <section id="skin" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Skin and Coat Issues</h2>
          <p>
            Senior dogs may develop dry skin, thinning coats, or benign lumps. Hormonal changes and
            reduced grooming habits can also contribute.
          </p>
          <p>
            Omega-3 supplements, regular brushing, and veterinary checks for unusual growths
            keep coats healthier.
          </p>
        </section>

        <section id="incontinence" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Incontinence</h2>
          <p>
            Many senior dogs lose bladder or bowel control. While frustrating for owners, this is
            often a medical issue rather than disobedience.
          </p>
          <p>
            Management includes more frequent potty breaks, waterproof bedding, medications, and
            veterinary diagnosis to rule out urinary tract infections.
          </p>
        </section>

        <section id="diet" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Senior Diet and Exercise</h2>
          <p>
            Nutrition and movement are pillars of senior health. High-quality diets with adjusted
            protein and calorie levels help prevent obesity while supporting muscle mass. 
            Added joint supplements and antioxidants may protect against inflammation and 
            cognitive decline.
          </p>
          <p>
            Exercise should remain regular but low impact: short walks, gentle fetch, and swimming 
            are excellent. Avoid pushing seniors into strenuous activities that could strain joints 
            or the heart.
          </p>
        </section>

        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Boarding and Daycare Tips for Senior Dogs</h2>
          <p>
            When boarding or sending a senior dog to daycare, extra precautions are needed:
          </p>
          <ul className="list-disc list-inside">
            <li>Choose facilities with climate control and soft flooring</li>
            <li>Provide detailed medical histories and medication instructions</li>
            <li>Request quieter accommodations away from hyperactive young dogs</li>
            <li>Pack familiar bedding to reduce anxiety</li>
          </ul>
          <p>
            Senior dogs benefit from facilities that recognize their slower pace and need for comfort.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Aging is inevitable, but suffering doesn’t have to be. By recognizing the most common
            senior dog health problems, providing appropriate diet and exercise, and adapting home
            and boarding routines, owners can help their pets live longer, happier lives. Senior
            dogs give us years of loyalty—supporting them in their golden years is the least we
            can do in return.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Veterinary Medical Association (AVMA) – Senior Pet Care Guidelines</li>
            <li>American Kennel Club (AKC) – Caring for Older Dogs</li>
            <li>Journal of Veterinary Internal Medicine – Senior Canine Health Studies</li>
          </ul>
        </section>

        <div className="mt-8">
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
