export default function StripeReturnPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Stripe Account Setup Submitted
      </h1>

      <div className="max-w-lg text-gray-700 space-y-4">
        <p>
          Your Stripe Express account information has been successfully submitted.
        </p>

        <p>
          Stripe handles all verification and compliance directly. 
          Most accounts are reviewed automatically.
        </p>

        <p>
          If any additional information is required, Stripe will contact you directly by email.
        </p>

        <p className="font-medium">
          No further action is required from you at this time.
        </p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        You may now close this browser window and return to the Petunia app.
      </div>
    </div>
  );
}
