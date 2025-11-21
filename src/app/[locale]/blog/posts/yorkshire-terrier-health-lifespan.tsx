'use client';

import { useLocale } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';

export default function YorkshireTerrierHealthLifespan() {
  const locale = useLocale();

  return (
    <>
      <Head>
        <title>
          Health & Lifespan of the Yorkshire Terrier: Common Conditions and How to Prevent Them | Petunia Blog
        </title>
        <meta
          name="description"
          content="Learn about the most common health conditions in Yorkshire Terriers, including dental disease, tracheal collapse, and luxating patella. Understand lifespan, preventive care strategies, early warning signs, and veterinary recommendations for a long, healthy life."
        />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/yorkshire-terrier-health-lifespan`}
        />
      </Head>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">

        <p className="text-sm text-gray-500 mb-4">Written on November 21, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Health & Lifespan of the Yorkshire Terrier: Common Conditions and How to Prevent Them
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full mr-2">
            Health
          </span>
          <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
            Breed-Specific Guides
          </span>
        </div>

        {/* TABLE OF CONTENTS */}
        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#lifespan">Lifespan Expectations</a></li>
            <li><a href="#dental">Dental Disease</a></li>
            <li><a href="#tracheal">Tracheal Collapse</a></li>
            <li><a href="#patella">Luxating Patella</a></li>
            <li><a href="#hypoglycemia">Hypoglycaemia in Puppies</a></li>
            <li><a href="#liver-shunt">Liver Shunts</a></li>
            <li><a href="#skin">Skin and Coat Conditions</a></li>
            <li><a href="#preventive">Preventive Care & Early Screening</a></li>
            <li><a href="#boarding">Boarding & Daycare Health Considerations</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            Yorkshire Terriers are generally long-lived and healthy but face several breed-specific risks, including
            dental disease, tracheal collapse, luxating patella, hypoglycaemia, and liver shunts. With proper
            preventive care, early screening, and weight management, most Yorkies can enjoy 13–16 years of excellent
            quality of life. Paying attention to early warning signs and scheduling regular veterinary visits is
            essential for maintaining long-term health.
          </p>
        </section>

        {/* LIFESPAN */}
        <section id="lifespan" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Lifespan Expectations</h2>
          <p>
            The average Yorkshire Terrier lives between 13 and 16 years, with many reaching well into their late teens.
            Their long lifespan is supported by their small size, moderate exercise needs, and adaptable temperament.
            As with all long-lived breeds, consistent preventive care becomes increasingly important as they age.
          </p>
        </section>

        {/* DENTAL */}
        <section id="dental" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Dental Disease</h2>
          <p>
            Dental disease is one of the most common health issues in Yorkshire Terriers due to their small mouths and
            tightly spaced teeth. Without early intervention, tartar buildup can lead to gum recession, tooth loss, and
            systemic health complications. Daily brushing, dental chews, and routine veterinary cleanings help protect
            long-term dental health. Early dental care is one of the most effective ways to extend a Yorkie’s lifespan.
          </p>
        </section>

        {/* TRACHEAL COLLAPSE */}
        <section id="tracheal" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tracheal Collapse</h2>
          <p>
            Tracheal collapse is a chronic condition seen frequently in toy breeds. Affected dogs may develop a
            characteristic honking cough, difficulty breathing, or intolerance to heat and exercise. Preventive steps
            include maintaining a healthy weight, using a harness instead of a collar, and avoiding environmental
            irritants like smoke. Veterinary intervention may include medications or, in severe cases, surgical stenting.
          </p>
        </section>

        {/* LUXATING PATELLA */}
        <section id="patella" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Luxating Patella</h2>
          <p>
            Luxating patella (a kneecap that slips out of position) is a common orthopedic issue in small breeds.
            Symptoms often include intermittent skipping, occasional lameness, or reluctance to jump. Maintaining a
            healthy weight and providing joint-supportive nutrition can reduce symptoms. Severe cases may require
            orthopedic surgery to restore normal mobility.
          </p>
        </section>

        {/* HYPOGLYCEMIA */}
        <section id="hypoglycemia" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hypoglycaemia in Puppies</h2>
          <p>
            Yorkshire Terrier puppies, especially those under 12 weeks old, are vulnerable to drops in blood sugar.
            Early signs include wobbliness, lethargy, and tremors. Frequent meals, consistent routines, and careful
            monitoring prevent most episodes. Immediate veterinary care is essential when symptoms are present.
          </p>
        </section>

        {/* LIVER SHUNT */}
        <section id="liver-shunt" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Liver Shunts</h2>
          <p>
            Portosystemic shunts are congenital conditions disproportionately affecting Yorkshire Terriers. Affected
            dogs may show stunted growth, neurological episodes, or digestive issues. Early diagnosis through blood
            work and imaging allows for dietary management or surgical correction. Responsible breeding practices
            significantly reduce the incidence of this condition.
          </p>
        </section>

        {/* SKIN */}
        <section id="skin" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skin and Coat Conditions</h2>
          <p>
            Yorkies have fine, silky coats that require consistent grooming. Skin irritation, allergies, or dryness may
            occur without proper maintenance. Diet, bathing frequency, and grooming routines all contribute to coat
            health. Early veterinary assessment helps differentiate between allergic reactions and other dermatological
            conditions.
          </p>
        </section>

        {/* PREVENTIVE CARE */}
        <section id="preventive" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Preventive Care & Early Screening</h2>
          <p>
            Preventive care is one of the most effective ways to extend a Yorkshire Terrier’s lifespan. Essential
            strategies include:
          </p>
          <ul className="list-disc list-inside">
            <li>Annual wellness exams and blood work</li>
            <li>Routine dental cleanings and at-home dental care</li>
            <li>Joint support through healthy weight management</li>
            <li>Harness use instead of collars</li>
            <li>Quality nutrition tailored to toy breeds</li>
          </ul>
          <p>
            Early intervention is especially important for identifying orthopedic, metabolic, or congenital issues.
          </p>
        </section>

        {/* BOARDING */}
        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Boarding & Daycare Health Considerations</h2>
          <p>
            In boarding or daycare settings, staff should be aware of the breed’s orthopedic sensitivity, tracheal
            vulnerability, and need for rest breaks. Calm playgroups, gentle handling, and environmental awareness help
            create a safe experience. Yorkies with known medical conditions should have care notes attached to their
            reservation so staff can monitor for symptoms and respond quickly.
          </p>
        </section>

        {/* CONCLUSION */}
        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Yorkshire Terriers are charming, long-lived companions with several breed-specific health needs. With proper
            preventive care, early screenings, and attention to warning signs, most Yorkies thrive well into their
            senior years. Thoughtful health management is the key to giving these spirited dogs the long, happy life they
            deserve.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) — Yorkshire Terrier Breed Health Overview</li>
            <li>American Veterinary Medical Association (AVMA) — Canine Preventive Health Guidelines</li>
            <li>Journal of Small Animal Practice — Studies on Tracheal Collapse and Orthopedic Disease</li>
            <li>American Animal Hospital Association (AAHA) — Canine Senior Care and Dental Guidelines</li>
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
