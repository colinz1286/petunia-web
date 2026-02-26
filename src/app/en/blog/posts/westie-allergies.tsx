'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function WestieAllergies() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">Written on October 1, 2025</p>

        <h1 className="text-3xl font-bold mb-4">
          West Highland White Terrier Allergies: Why Westies Scratch and What Helps
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Pet Owners
          </span>
          <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
            Breed-Specific Guides
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#tldr">TL;DR</a></li>
            <li><a href="#overview">Why Westies Are Prone to Allergies</a></li>
            <li><a href="#symptoms">Common Symptoms of Allergies in Westies</a></li>
            <li><a href="#types">Types of Allergies Affecting Westies</a></li>
            <li><a href="#skin">Skin Irritation and Secondary Infections</a></li>
            <li><a href="#diagnosis">How Allergies Are Diagnosed</a></li>
            <li><a href="#treatment">Treatment and Relief Options</a></li>
            <li><a href="#prevention">Prevention and Lifestyle Tips</a></li>
            <li><a href="#boarding">Daycare and Boarding Considerations</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
            <li><a href="#sources">Sources</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
          <p>
            West Highland White Terriers (Westies) are genetically predisposed to allergies, leading to chronic itching, scratching, and skin irritation. 
            Allergies may be environmental (pollen, dust), food-related (protein sensitivities), or contact-based. 
            Treatment includes antihistamines, special diets, medicated shampoos, and veterinary guidance. Preventive care—like regular grooming and flea control—helps keep Westies comfortable and healthy.
          </p>
        </section>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Westies Are Prone to Allergies</h2>
          <p>
            Westies are known for their beautiful white coats and lively personalities, but they also rank among the breeds most prone to allergies. 
            This predisposition is partly genetic and partly due to their sensitive skin and immune system responses. 
            Allergies often appear early in life—sometimes as young as one or two years old—and can worsen without proper management.
          </p>
        </section>

        <section id="symptoms" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Common Symptoms of Allergies in Westies</h2>
          <p>
            Owners often notice excessive scratching or licking as the first sign of trouble. Other symptoms include:
          </p>
          <ul className="list-disc list-inside">
            <li>Red, inflamed skin (especially around paws, ears, and belly)</li>
            <li>Chronic ear infections</li>
            <li>Frequent paw chewing or licking</li>
            <li>Hot spots (moist, irritated patches)</li>
            <li>Hair loss or thinning coat</li>
            <li>Watery eyes or runny nose</li>
          </ul>
          <p>
            These symptoms may worsen seasonally (spring/summer) if allergies are environmental, or year-round if caused by food or indoor allergens.
          </p>
        </section>

        <section id="types" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Types of Allergies Affecting Westies</h2>
          <ul className="list-disc list-inside">
            <li><strong>Environmental allergies (atopy):</strong> Triggered by pollen, grass, mold, and dust mites. These are the most common causes of chronic itching.</li>
            <li><strong>Food allergies:</strong> Caused by certain proteins (chicken, beef, lamb, soy, or dairy). They often manifest as skin irritation rather than digestive issues.</li>
            <li><strong>Flea allergy dermatitis:</strong> An exaggerated immune response to flea bites, leading to intense itching even from a single bite.</li>
            <li><strong>Contact allergies:</strong> Reactions to shampoos, detergents, or fabrics that touch the skin.</li>
          </ul>
          <p>
            Identifying the type of allergy is crucial for effective treatment, since management strategies differ for food versus environmental triggers.
          </p>
        </section>

        <section id="skin" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skin Irritation and Secondary Infections</h2>
          <p>
            Allergic reactions weaken the skin’s natural barrier, making it vulnerable to bacterial or yeast infections. 
            Many Westies with allergies develop secondary infections, which worsen itching and discomfort. 
            Signs include foul odor, oozing sores, or crusty patches on the skin.
          </p>
          <p>
            Treatment often requires antibiotics, antifungal medication, or medicated shampoos in addition to allergy management.
          </p>
        </section>

        <section id="diagnosis" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Allergies Are Diagnosed</h2>
          <p>
            Diagnosing allergies in Westies can be complex and requires veterinary evaluation. Methods include:
          </p>
          <ul className="list-disc list-inside">
            <li>Physical exam and medical history review</li>
            <li>Skin scrapings to rule out mites or parasites</li>
            <li>Ear cytology to identify yeast or bacterial overgrowth</li>
            <li>Allergy testing (blood or intradermal tests) for environmental triggers</li>
            <li>Food elimination trials lasting 6–8 weeks to confirm food allergies</li>
          </ul>
        </section>

        <section id="treatment" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Treatment and Relief Options</h2>
          <p>
            Managing Westie allergies often requires a multi-pronged approach:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Medications:</strong> Antihistamines, corticosteroids, or advanced therapies like Apoquel and Cytopoint.</li>
            <li><strong>Dietary changes:</strong> Hypoallergenic or limited-ingredient diets to rule out food sensitivities.</li>
            <li><strong>Medicated shampoos:</strong> Weekly baths with soothing, antifungal, or antibacterial shampoos.</li>
            <li><strong>Allergen avoidance:</strong> Wiping paws after walks, using air filters, and washing bedding frequently.</li>
            <li><strong>Immunotherapy:</strong> Allergy shots or drops customized to the dog’s allergens.</li>
          </ul>
          <p>
            Treatment is often lifelong, but with consistency, Westies can live comfortably despite allergies.
          </p>
        </section>

        <section id="prevention" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Prevention and Lifestyle Tips</h2>
          <p>
            While allergies can’t be cured, preventive care reduces flare-ups:
          </p>
          <ul className="list-disc list-inside">
            <li>Keep Westies on year-round flea prevention</li>
            <li>Brush weekly to remove allergens trapped in their coat</li>
            <li>Use hypoallergenic shampoos and detergents</li>
            <li>Feed a high-quality diet with omega-3 fatty acids for skin support</li>
            <li>Provide regular veterinary checkups to catch flare-ups early</li>
          </ul>
          <p>
            Owners should be prepared for lifelong management but can minimize discomfort with vigilance and proactive care.
          </p>
        </section>

        <section id="boarding" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Daycare and Boarding Considerations</h2>
          <p>
            Allergy-prone Westies may need special accommodations in boarding or daycare settings. 
            Facilities should use hypoallergenic cleaning products and be informed of dietary restrictions or medications. 
            Staff should watch for excessive scratching and alert owners to any flare-ups during stays.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            Allergies are one of the biggest challenges for West Highland White Terrier owners, but with proper management, Westies can live full, happy lives. 
            Recognizing symptoms early, working closely with veterinarians, and making preventive lifestyle adjustments are the keys to success. 
            While Westies may always be prone to itching and scratching, proactive care ensures they remain the lively, loving companions families adore.
          </p>
        </section>

        <section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>American Kennel Club (AKC) – West Highland White Terrier Breed Profile</li>
            <li>American Veterinary Medical Association (AVMA) – Allergy and Dermatology Guidelines</li>
            <li>Journal of Veterinary Dermatology – Studies on Atopic Dermatitis in Terriers</li>
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
