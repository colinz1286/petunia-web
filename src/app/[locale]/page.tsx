'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomePage() {
  const locale = useLocale();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const roles = [
    { key: 'petOwner', label: 'Pet Owner' },
    { key: 'boarding', label: 'Boarding and Daycare Facility Owner/Manager' },
    { key: 'sitterWalker', label: 'Pet Sitter or Dog Walker' },
    { key: 'rescue', label: 'Rescue or Adoption Shelter Owner/Manager' },
    { key: 'vetClinic', label: 'Veterinary Clinic Owner/Manager' },
  ];

  useEffect(() => {
    if (selectedRole && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedRole]);

  return (
    <main className="flex-grow flex flex-col items-center justify-start text-center px-4 mt-10">
      {/* Centered Logo */}
      <img src="/petunia_logo.png" alt="Petunia Logo Center" className="w-72 h-auto mb-4" />

      {/* Slogan */}
      <p className="text-gray-600 italic text-lg mb-6">
        The perfect app for your business.<br />
        The perfect world for your pet.
      </p>

      {/* Headline */}
      <h2 className="text-2xl font-bold mb-6 text-[#2c4a30] tracking-wide">
        Are You a Current or Prospective...
      </h2>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-md mb-10">
        {roles.map((role) => (
          <button
            key={role.key}
            onClick={() => setSelectedRole(role.key)}
            className={`py-3 px-4 rounded text-[#2c4a30] border border-[#2c4a30] hover:bg-[#e4dbcb] transition ${
              selectedRole === role.key ? 'bg-[#2c4a30] text-white' : ''
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div ref={contentRef} className="w-full max-w-3xl mt-6 text-left space-y-6 text-[#2c4a30]">
        {selectedRole === 'petOwner' && (
          <section>
            <h3 className="text-2xl font-bold text-center">Welcome, Pet Owners!</h3>
            <p className="text-lg">
              Petunia is free to all pet owners! This is your all-in-one hub to manage your pet’s care — from daycare and boarding reservations to vaccination tracking and feeding instructions.
            </p>
            <p className="text-lg">
              Create personalized profiles for each of your pets, upload important records like vaccine certificates, and book services from trusted providers — all in one place.
            </p>
            <p className="text-lg">
              Our reminders keep you on top of things like annual vet visits and expiring vaccines. We’ve built everything with love, ease, and your pet’s safety in mind.
            </p>
            <p className="text-lg">
              🐾 Whether you're a new pet parent or a seasoned pro, Petunia gives you peace of mind — and more time to enjoy the moments that matter.
            </p>
            <p className="text-lg">
              💌 Have feedback? Email us at{" "}
              <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                admin@petuniapets.com
              </a>.
            </p>
            <p className="text-lg">
              🎉 <Link href={`/${locale}/loginsignup`} className="underline text-[#2c4a30] font-semibold">
                Click here to get started today.
              </Link>
            </p>
          </section>
        )}

        {selectedRole === 'boarding' && (
          <section>
            <h3 className="text-2xl font-bold text-center">For Boarding & Daycare Facilities</h3>
            <p className="text-lg">
              Petunia is here to help you streamline operations, save time, and focus on what matters most — the dogs in your care and the people who love them.
            </p>
            <p className="text-lg">
              From check-ins and feeding notes to client management, reminders, and real-time schedule visibility — it's all right here.
            </p>
            <p className="text-lg">
              💡 Free for your first 30 days — just $25/month after. No contracts. No nonsense.
            </p>
            <p className="text-lg">
              💌 Questions or requests? Email{" "}
              <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                admin@petuniapets.com
              </a>.
            </p>
            <p className="text-lg">
              🎉 <Link href={`/${locale}/loginsignup`} className="underline text-[#2c4a30] font-semibold">
                Click here to get started today.
              </Link>
            </p>
          </section>
        )}

        {selectedRole === 'sitterWalker' && (
          <section>
            <h3 className="text-2xl font-bold text-center">Pet Sitters & Dog Walkers</h3>
            <p className="text-lg">
              This part of Petunia is coming soon! We're rolling out tools built specifically for sitters and walkers.
            </p>
            <p className="text-lg">
              Just $10/month. No commissions, ever. Bring your existing clients and grow from there.
            </p>
            <p className="text-lg">
              💌 Want to shape the features? Email us at{" "}
              <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                admin@petuniapets.com
              </a>.
            </p>
          </section>
        )}

        {selectedRole === 'rescue' && (
          <section>
            <h3 className="text-2xl font-bold text-center">For Rescues & Adoption Shelters</h3>
            <p className="text-lg">
              Petunia will always be 100% free for rescue organizations and shelters.
            </p>
            <p className="text-lg">
              A one-time $2 transfer fee helps pass medical history and care notes to the new family at adoption.
            </p>
            <p className="text-lg">
              💚 Thank you for everything you do.
            </p>
          </section>
        )}

        {selectedRole === 'vetClinic' && (
          <section>
            <h3 className="text-2xl font-bold text-center">Veterinary Clinics</h3>
            <p className="text-lg">
              Most clinic software is rigid and outdated. We're building something better — flexible, modern, and shaped around how real veterinary teams operate.
            </p>
            <p className="text-lg">
              Stay tuned as we expand support for multi-location practices and seamless pet record syncing.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
