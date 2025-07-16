import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6efe4] flex flex-col justify-between text-[#2c4a30] font-sans">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-[#d9cfc2] bg-[#f6efe4]">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/petunia_logo.png"
            alt="Petunia Logo"
            className="w-20 h-auto"
          />
        </Link>

        {/* Navbar Links */}
        <nav className="flex gap-6 text-sm font-medium text-[#2c4a30]">
          <Link href="/login" className="hover:underline">Login / Sign Up</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
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
        </nav>
      </header>

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">We’d love to hear from you!</h1>
        <p className="text-lg max-w-xl text-[#2c4a30]">
          Whether you have a question, suggestion, or just want to say hello —
          we’re here for you. Please feel free to reach out anytime at{" "}
          <a href="mailto:admin@petuniapets.com" className="underline text-[#2c4a30]">
            admin@petuniapets.com
          </a>. We’ll get back to you as soon as we can!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c4a30] text-white py-6 mt-12 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6">
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
