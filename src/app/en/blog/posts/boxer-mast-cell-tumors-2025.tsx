'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoxerMastCellTumors2025() {
  const locale = useLocale();

  const title = 'Mast Cell Tumors in Boxers: Early Detection, Treatment, and Prognosis (2025 Guide)';
  const date = 'October 23, 2025';
  const description =
    'Boxers are genetically predisposed to mast cell tumors, a common but potentially serious form of skin cancer in dogs. Learn the symptoms, diagnosis, and treatment options for early detection and better outcomes.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    dateModified: date,
    author: { '@type': 'Organization', name: 'Petunia Pets' },
    publisher: { '@type': 'Organization', name: 'Petunia Pets' },
    description,
    image: 'https://cdn.petuniapets.com/blog/boxer-mast-cell-tumors-2025.jpg',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Written on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Pet Owners
          </span>
          <span className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            Breed-Specific Guides
          </span>
        </div>

        <section className="mb-10">
          <p className="mb-4">
            This article builds on our broader guide,{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/boxer-skin-issues"
              className="underline font-medium"
            >
              Boxer Skin Issues Explained: Allergies, Lumps, and Early Warning Signs
            </Link>
            . One of the most significant concerns for Boxer owners is the mast cell tumor — 
            a skin-based cancer that can range from benign to aggressive. Understanding how 
            to identify, test, and treat these tumors early can dramatically improve outcomes.
          </p>
        </section>

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Are Mast Cell Tumors?</h2>
          <p className="mb-3">
            Mast cell tumors (MCTs) are cancers of immune cells called mast cells, which are normally 
            involved in allergic responses. When these cells become cancerous, they form lumps in the 
            skin or subcutaneous tissue. In Boxers, MCTs are among the most frequently diagnosed 
            skin cancers.
          </p>
          <p>
            According to the <a href="https://vcahospitals.com/know-your-pet/mast-cell-tumors-in-dogs" target="_blank" rel="noopener noreferrer" className="underline">VCA Animal Hospitals</a>, 
            mast cell tumors account for approximately 16–21% of all canine skin tumors, with Boxers 
            and Boston Terriers overrepresented due to genetic predisposition.
          </p>
        </section>

        <section id="signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Warning Signs</h2>
          <p className="mb-3">
            MCTs can mimic benign lumps, which is why early detection is critical. 
            Boxers often develop multiple masses during their lifetime, and it can 
            be impossible to distinguish malignant from benign without testing.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>New or changing lump under or on the skin</li>
            <li>Redness, swelling, or bruised appearance around a bump</li>
            <li>Intermittent enlargement and shrinking of the lump (histamine release effect)</li>
            <li>Itching, licking, or ulceration at the site</li>
            <li>Vomiting or digestive upset (in more advanced cases)</li>
          </ul>
          <p>
            Any lump that appears suddenly or changes size should be checked by a veterinarian 
            within days—not weeks. Early biopsy remains the gold standard for diagnosis.
          </p>
        </section>

        <section id="diagnosis" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diagnosis and Grading</h2>
          <p className="mb-3">
            Diagnosis typically starts with a fine-needle aspiration (FNA), where a small sample 
            of cells is extracted from the lump and examined under a microscope. A biopsy or 
            surgical removal is often performed to determine grade and stage.
          </p>
          <p className="mb-3">
            Tumors are graded based on aggressiveness:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Grade I (low grade):</strong> Usually confined to the skin; often curable with surgery.</li>
            <li><strong>Grade II (intermediate):</strong> May spread to nearby lymph nodes; requires broader treatment.</li>
            <li><strong>Grade III (high grade):</strong> Aggressive; high risk of metastasis and recurrence.</li>
          </ul>
          <p>
            <a
              href="https://www.acvs.org/small-animal/mast-cell-tumors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              The American College of Veterinary Surgeons
            </a>{' '}
            notes that surgery with clean margins remains the most important prognostic factor, 
            followed by histologic grade.
          </p>
        </section>

        <section id="treatment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Treatment Options</h2>
          <p className="mb-3">
            Treatment depends on tumor grade, location, and whether it has spread:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Surgical removal:</strong> First-line therapy for most MCTs, ideally with wide margins.</li>
            <li><strong>Radiation therapy:</strong> Used when complete excision is not possible or to reduce recurrence.</li>
            <li><strong>Chemotherapy:</strong> Indicated for high-grade or metastatic cases.</li>
            <li><strong>Targeted therapy:</strong> Drugs like toceranib phosphate (Palladia®) can shrink certain tumor types.</li>
            <li><strong>Antihistamines and steroids:</strong> Manage inflammation and histamine-related symptoms.</li>
          </ul>
          <p>
            A referral to a veterinary oncologist is often recommended after an MCT diagnosis to 
            determine the most appropriate combination therapy.
          </p>
        </section>

        <section id="prevention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Prevention and Ongoing Monitoring</h2>
          <p className="mb-3">
            While you cannot prevent the genetic risk in Boxers, proactive care makes a major difference:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Perform full-body skin checks weekly for new lumps.</li>
            <li>Document each growth’s size, color, and location with photos.</li>
            <li>Have every new lump aspirated, even if small or soft.</li>
            <li>Feed a balanced diet rich in antioxidants and omega-3 fatty acids.</li>
            <li>Maintain regular veterinary exams — ideally twice yearly for adult Boxers.</li>
          </ul>
          <p>
            Early removal offers the best prognosis: in low-grade MCTs, surgical cure rates exceed 90%.
          </p>
        </section>

        <section id="boarding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Boarding and Daycare Considerations</h2>
          <p className="mb-3">
            Boxers with a history of mast cell tumors may have sensitive or scarred skin. Boarding 
            and daycare facilities should use soft bedding, avoid rough play, and monitor for 
            bumps or abrasions. Owners should inform staff about prior tumor sites or ongoing 
            treatments to prevent accidental trauma.
          </p>
        </section>

        <section id="conclusion" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p>
            Mast cell tumors are unfortunately common in Boxers, but early detection and proper 
            treatment drastically improve survival rates. Monthly skin checks, immediate veterinary 
            evaluation of new lumps, and collaboration with a trusted veterinarian or oncologist 
            can ensure your Boxer enjoys the longest, healthiest life possible.
          </p>
        </section>

        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References & Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              VCA Animal Hospitals. (2025). <i>Mast Cell Tumors in Dogs.</i>{' '}
              <a
                href="https://vcahospitals.com/know-your-pet/mast-cell-tumors-in-dogs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vcahospitals.com
              </a>
            </li>
            <li>
              American College of Veterinary Surgeons (ACVS). (2025).{' '}
              <i>Mast Cell Tumors in Dogs.</i>{' '}
              <a
                href="https://www.acvs.org/small-animal/mast-cell-tumors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                acvs.org
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). (2024).{' '}
              <i>Canine Cancer and Dermatology Guidance.</i>{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-and-welfare/canine-cancer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                avma.org
              </a>
            </li>
            <li>
              Veterinary Cancer Society. (2025).{' '}
              <i>Guidelines for Mast Cell Tumor Management in Dogs.</i>{' '}
              <a
                href="https://vetcancersociety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                vetcancersociety.org
              </a>
            </li>
          </ul>
        </section>

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
