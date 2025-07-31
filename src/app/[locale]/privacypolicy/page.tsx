import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6efe4] flex flex-col justify-between">
      {/* ✅ DO NOT INCLUDE MANUAL HEADER HERE — Already included via shared layout */}

      {/* Privacy Policy Content */}
      <section className="flex-grow px-6 py-12 text-[#2c4a30]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy for Petunia Pets</h1>
          <p className="text-sm italic mb-8">Last Updated: July 14, 2025</p>

          <p className="mb-6">
            Berkley Creek Software LLC (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use the Petunia Pets mobile app or our website at <a href="http://www.petuniapets.com" target="_blank" rel="noopener noreferrer" className="underline">www.petuniapets.com</a>.
          </p>

          <p className="mb-6">
            Petunia Pets is owned and operated by Berkley Creek Software LLC, located at 544 Valencia Rd, Mars, PA 16046, United States. If you have any questions about this policy or how we handle your data, you can contact us at <a href="mailto:admin@petuniapets.com" className="underline">admin@petuniapets.com</a>.
          </p>

          <p className="mb-6">
            We only collect personal information that you voluntarily provide when using the app or creating a profile. This may include your name, email address, phone number, mailing address, emergency contact information, and information about your pets such as their names, breeds, or care notes. We do not collect any sensitive personal data, such as health information, financial information, or government-issued IDs. We do not track your location or collect any data in the background. We also do not use cookies or third-party trackers, and we do not collect information from your device unless you choose to upload something, such as a pet photo.
          </p>

          <p className="mb-6">
            The information you provide is used only to support the functionality of the app. This includes enabling account creation, managing pet profiles, facilitating reservations, and supporting general app features. We do not use your information for advertising, analytics, or any other purposes. Your data is never sold, rented, or shared with any third parties. No external companies or marketing services have access to your information.
          </p>

          <p className="mb-6">
            All data is securely stored using Google Cloud infrastructure and Firebase services. These systems offer secure, encrypted storage both in transit and at rest. We are committed to maintaining strong security practices to keep your information safe.
          </p>

          <p className="mb-6">
            As a user, you have full control over your personal information. You may access, update, or delete any data in your profile at any time. You may also delete your account whenever you choose. If you need help with data changes or account deletion, you can contact us directly at <a href="mailto:admin@petuniapets.com" className="underline">admin@petuniapets.com</a>.
          </p>

          <p className="mb-6">
            The Petunia Pets app is not intended for children under the age of 13. We do not knowingly collect data from anyone under 13 years old. If you believe that a child has provided personal information through our platform, please contact us so we can remove the data promptly.
          </p>

          <p className="mb-6">
            We do not currently send marketing messages or newsletters. If we choose to implement marketing communications in the future, users will always have the ability to opt out.
          </p>

          <p className="mb-6">
            Although we do not currently target users in California or the European Union, we strive to follow principles consistent with privacy laws such as the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR). We use your data only with your consent and never sell your information under any circumstances.
          </p>

          <p className="mb-6">
            We may occasionally update this Privacy Policy. If we make changes, we will update the “Last Updated” date shown at the top of this page. You are encouraged to review this policy from time to time to stay informed.
          </p>

          <p className="mb-6">
            If you have any questions or concerns about this policy or your personal data, please email us at <a href="mailto:admin@petuniapets.com" className="underline">admin@petuniapets.com</a>. You may also reach us by mail at Berkley Creek Software LLC, 544 Valencia Rd, Mars, PA 16046, USA.
          </p>
        </div>
      </section>

      {/* ✅ Keep Footer — it’s likely shared and expected */}
      <footer className="bg-[#2c4a30] text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6 text-sm">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Petunia. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <a
              href="https://www.facebook.com/profile.php?id=61575107920935"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YouTube
            </a>
            <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
