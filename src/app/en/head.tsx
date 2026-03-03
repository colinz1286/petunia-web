const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY?.trim();

export default function Head() {
  return (
    <>
      <title>Petunia – All-in-One Pet Care for Owners, Sitters, and Businesses</title>
      <meta
        name="description"
        content="Create pet profiles, manage reservations, and run your pet care business from one place. Trusted by pet owners, sitters, shelters, and clinics."
      />
      {recaptchaSiteKey ? (
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`}
          async
          defer
        />
      ) : null}
    </>
  );
}
