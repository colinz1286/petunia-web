'use client';

export default function TutorialsPage() {

  return (
    <div className="w-full flex flex-col items-center bg-[#f6efe4] text-[#2c4a30] px-4 py-10">
      <div className="max-w-3xl w-full text-center">

        {/* Centered Heading */}
        <h1 className="text-3xl font-bold mb-6">Petunia Tutorials</h1>

        <p className="text-base mb-8">
          Welcome to Petunia Tutorial Guides! These videos walk you through important features
          of the Petunia app. More tutorials will be added on a rolling basis.
        </p>

        {/* Quick Jump Links */}
        <div className="mb-10 text-left">
          <h2 className="text-lg font-semibold mb-3">
            Jump to a Tutorial
          </h2>

          <ul className="space-y-1">
            <li>
              <a href="#sign-waiver" className="text-blue-700 underline">
                How to Sign a Waiver
              </a>
            </li>

            <li>
              <a href="#upload-vaccine" className="text-blue-700 underline">
                How to Upload a Vaccine Document for Your Pet
              </a>
            </li>

            <li>
              <a href="#book-boarding" className="text-blue-700 underline">
                How to Book Boarding
              </a>
            </li>

            <li>
              <a href="#view-appointments" className="text-blue-700 underline">
                How to View Your Upcoming Appointments
              </a>
            </li>

            <li>
              <a href="#find-business" className="text-blue-700 underline">
                How to Find a Business
              </a>
            </li>

            <li>
              <a href="#book-assessment-day" className="text-blue-700 underline">
                How to Book Your Assessment Day
              </a>
            </li>

            <li>
              <a href="#vaccine-expiration-dates" className="text-blue-700 underline">
                How to Enter Vaccine Expiration Dates
              </a>
            </li>
          </ul>
        </div>

        {/* ------------------------------
        Tutorial Section
        ------------------------------ */}
        <div className="space-y-8">

          {/* Tutorial 1 */}
          <div
            id="sign-waiver"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Sign a Waiver
            </h2>

            <p className="mb-4">
              This short video demonstrates how to complete Petunia&#39;s waiver process step by step.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/KALM7dA3ZZs"
                title="How to Sign a Waiver"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/KALM7dA3ZZs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 2 */}
          <div
            id="upload-vaccine"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Upload a Vaccine Document for Your Pet
            </h2>

            <p className="mb-4">
              This video walks you through uploading vaccine records.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/R6y1bC1gp5I"
                title="How to Upload a Vaccine Document"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/R6y1bC1gp5I"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 3 */}
          <div
            id="book-boarding"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Book Boarding
            </h2>

            <p className="mb-4">
              This video shows how to book a boarding stay step by step inside the Petunia app.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/3zMRApJ2EbM"
                title="How to Book Boarding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/3zMRApJ2EbM"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 4 */}
          <div
            id="view-appointments"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to View Your Upcoming Appointments
            </h2>

            <p className="mb-4">
              This video shows how to quickly view all of your upcoming appointments in the Petunia app.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/bjyU1xvOHLo"
                title="How to View Your Upcoming Appointments"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/bjyU1xvOHLo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 5 */}
          <div
            id="find-business"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Find a Business
            </h2>

            <p className="mb-4">
              This video explains how to search for and find a pet care business using the Petunia app.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/EgeNeT9SID0"
                title="How to Find a Business"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/EgeNeT9SID0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 6 */}
          <div
            id="book-assessment-day"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Book Your Assessment Day
            </h2>

            <p className="mb-4">
              This video walks you through booking your dog&rsquo;s assessment day in the Petunia app.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/fStLxc-WkmU"
                title="How to Book Your Assessment Day"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/fStLxc-WkmU"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

          {/* Tutorial 7 */}
          <div
            id="vaccine-expiration-dates"
            className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-3">
              How to Enter Vaccine Expiration Dates
            </h2>

            <p className="mb-4">
              This video shows how to correctly enter vaccine expiration dates for your pet so records stay up to date and compliant.
            </p>

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                className="w-full h-80 rounded-lg"
                src="https://www.youtube.com/embed/5t_2XM5Q0Nc"
                title="How to Enter Vaccine Expiration Dates"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/shorts/5t_2XM5Q0Nc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700"
              >
                Watch directly on YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Spacing */}
        <div className="h-10" />
      </div>
    </div>
  );
}
