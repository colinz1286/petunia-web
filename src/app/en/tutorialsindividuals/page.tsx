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

        {/* ------------------------------
          Tutorial Section
         ------------------------------ */}
        <div className="space-y-8">

          {/* Tutorial 1 */}
          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
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

          {/* Tutorial 2 (NEW) */}
          <div className="bg-white border border-[#d9cfc2] rounded-lg p-5 shadow-sm">
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
                title="How to Add or Edit Your Pets"
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

        </div>

        {/* Spacing */}
        <div className="h-10" />
      </div>
    </div>
  );
}
