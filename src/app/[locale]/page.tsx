'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
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
    <main className="min-h-screen bg-[#f6efe4] flex flex-col justify-between">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[#f6efe4] border-b border-[#d9cfc2]">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/petunia_logo.png" alt="Petunia Logo" className="w-20 h-auto" />
        </Link>
        <nav className="flex gap-6 text-sm text-[#2c4a30] font-medium">
          <Link href="/loginsignup" className="hover:underline">Login / Sign Up</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a href="https://www.facebook.com/profile.php?id=61575107920935" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center text-center px-4 mt-20">
        <img src="/petunia_logo.png" alt="Petunia Logo Center" className="w-72 h-auto mb-6" />
        <p className="text-gray-600 italic text-lg mb-10">
          The perfect app for your business.<br />
          The perfect world for your pet.
        </p>

        {/* Engagement Prompt */}
        <h2 className="text-2xl font-bold mb-6 text-[#2c4a30] tracking-wide">
          Are You a Current or Prospective...
        </h2>

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

        {/* Dynamic Content Area */}
        <div ref={contentRef} className="w-full max-w-3xl mt-6">
          {selectedRole === 'petOwner' && (
            <div className="text-left mt-6 space-y-6 text-[#2c4a30]">
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
                💌 Petunia is still in its infancy — we’re just beginning to build the features that matter most to the people (and pets) we serve.
                If there’s something you’d love to see in the app, please don’t hesitate to email us at{" "}
                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                  admin@petuniapets.com
                </a>. Your feedback shapes our roadmap — and we’re here to build something beautiful, together.
              </p>

              <p className="text-lg">
                🎉 Ready to give Petunia a try?{" "}
                <Link href="/loginsignup" className="underline text-[#2c4a30] font-semibold">
                  Click here to get started today.
                </Link>
              </p>
            </div>
          )}
          {selectedRole === 'boarding' && (
            <div className="text-left mt-6 space-y-6 text-[#2c4a30]">
              <h3 className="text-2xl font-bold text-center">
                For Boarding & Daycare Facilities
              </h3>

              <p className="text-lg">
                Petunia is here to help you streamline operations, save time, and focus on what matters most — the dogs in your care and the people who love them.
              </p>

              <p className="text-lg">
                Our app was built specifically for small-to-midsize boarding and daycare facilities. From check-ins and feeding notes to client management, reminders, and real-time schedule visibility — it's all right here.
              </p>

              <p className="text-lg">
                We have only started to begin to build our customizable business settings that adapt to each of your individual, every day needs. We are continuing to add new features every month. As we continue to get requests in from our current and perspective, clients, we will continue to make updates and upload new versions on a monthly basis.
              </p>

              <p className="text-lg">
                💡 The best part? It’s **free for your first 30 days** — and just **$25/month** after that. No contracts. No nonsense. Just powerful, pet-focused tools. If you sign up, you can expect a phone call directly from Colin, the owner and primary design designer of this software. He will personally help on board you and answer your initial questions and make sure that you get the support that you need, so you can spend more time growing your business.
              </p>

              <p className="text-lg">
                💌 We’re still in our early stages, and your voice matters. As the person who designed the software, as well as a boarding daycare facility owner, myself, I understand how drastically different operations can be from one business to another. If there’s a feature you'd love to see, shoot us a note at{" "}
                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                  admin@petuniapets.com
                </a>. We’re here to listen, learn, and build the best possible experience for your team. After all the long hours you put in day after day, with little to no time off, isn't it time that there is a software company who listens to your needs and tries to give you some of that precious time back!
              </p>

              <p className="text-lg">
                🎉 Ready to give Petunia a try?{" "}
                <Link href="/loginsignup" className="underline text-[#2c4a30] font-semibold">
                  Click here to get started today.
                </Link>
              </p>
            </div>
          )}

          {selectedRole === 'sitterWalker' && (
            <div className="text-left mt-6 space-y-6 text-[#2c4a30]">
              <h3 className="text-2xl font-bold text-center">Pet Sitters & Dog Walkers</h3>

              <p className="text-lg">
                This part of Petunia is just around the corner — we’ll be rolling out features designed specifically for you over the coming months.
              </p>

              <p className="text-lg">
                We know that not every dog thrives in a boarding or daycare setting. Some pets need one-on-one care. Every home is different — some already have a trusted sitter or walker, while others are just beginning their search for the right fit. We’re here for all of you. And that’s why we haven’t forgotten about you.
              </p>

              <p className="text-lg">
                Many of the apps built for pet sitters and dog walkers today charge high commissions or annual fees to either pet owners and/or the pet sitters and dog walkers — cutting into the hard-earned income you’ve built through relationships and trust.
                At Petunia, we’re doing things differently.
              </p>

              <p className="text-lg">
                Our pricing will be simple: just **$10 per month** the dog dog walker or pet sitter business account. No commissions! Just the tools you need to stay organized, grow confidently, and serve your clients with love.
              </p>

              <p className="text-lg">
                And don’t worry — we know your reviews and relationships matter. When you sign up, you’ll be able to invite your existing clients to join you on Petunia.
                It’ll be 100% free for them to use, and because they came in through your invite, they’ll immediately be able to leave you a review — preserving the trust and reputation you’ve built over the years, allowing you to continue to build your business and brand, far and wide!
              </p>

              <p className="text-lg">
                🐾 You’ve worked hard to build something meaningful. We’re just here to make sure it lasts, grows, and shines even brighter.
                If you have any feature requests or ideas, please email us at{" "}
                <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
                  admin@petuniapets.com
                </a>. We’d love to hear what would make your day-to-day smoother and more fulfilling.
              </p>
            </div>
          )}

          {selectedRole === 'rescue' && (
            <div className="text-left mt-6 space-y-6 text-[#2c4a30]">
              <h3 className="text-2xl font-bold text-center">
                For Rescues & Adoption Shelters
              </h3>

              <p className="text-lg">
                When Petunia’s software is rolled out for rescues and shelters, it will be **100% free** for the businesses to use... ALWAYS!
              </p>

              <p className="text-lg">
                We understand the heart and energy that goes into rescue work — and we want to make sure you're not burdened with extra overhead on top of all the incredible things you're already doing.
                You're giving pets a new life, a new home, and a fresh start. And the last thing you need is another software fee.
              </p>

              <p className="text-lg">
                The only fee involved is a **$2 transfer of ownership** whenever a pet is adopted. The new family can create an account, and you'll be able to transfer that pet’s full history — including medical records, notes, and care details — with just one click.
              </p>

              <p className="text-lg">
                That small handoff helps everyone start strong, keeps records accurate, and most importantly — gives that pet a smooth transition into their forever home.
              </p>

              <p className="text-lg">
                💚 We’re doing everything we can to give you the tools you deserve — so you have the energy to keep doing some of the greatest work anyone can do.
              </p>
            </div>
          )}

          {selectedRole === 'vetClinic' && (
            <div className="text-left mt-6 space-y-6 text-[#2c4a30]">
              <h3 className="text-2xl font-bold text-center">Veterinary Clinics</h3>

              <p className="text-lg">
                We’ve heard the same thing from clinic owners time and time again: most software feels cookie-cutter. It’s hard to customize, hard to adapt, and rarely fits the real way your clinic operates day to day.
              </p>

              <p className="text-lg">
                At Petunia, we're building something different. Our goal is to give you flexibility — not force you into a box. Whether you're managing a single office or a multi-location clinic, you'll have the ability to tailor your workflow, streamline communication, and structure your tools around how your team actually works.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c4a30] text-white py-6 mt-12 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Petunia. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <a href="https://www.facebook.com/profile.php?id=61575107920935" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
            <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
