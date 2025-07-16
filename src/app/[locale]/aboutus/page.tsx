import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
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
      <section className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <img
          src="/IMG_0354.jpeg"
          alt="Milo"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-6 text-center">Why We Built Petunia</h1>

        <p className="text-lg mb-4">
          Petunia was created in memory of a dog named <strong>Milo</strong> — a dog who changed our lives in ways we never expected.
          This app isn’t just software. It’s a tribute. A continuation of Milo’s legacy. A way to bring light, warmth, and connection to
          other pet lovers and businesses who share the same love we had for him.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">Milo’s Story</h2>

        <p className="text-lg mb-4">
          Milo came into our lives in December of 2017, during a time when his original family could no longer care for him.
          He arrived quietly, unsure of where he belonged — and within hours, we knew he had found his forever home with us.
        </p>

        <p className="text-lg mb-4">
          That first night, he jumped onto the bed and laid his head on Erin’s chest. From that moment on, he never left our side.
          He wasn't just a dog — he was a healer, a companion, and the missing piece of our family.
        </p>

        <p className="text-lg mb-4">
          Over time, Milo overcame his fears, passed his therapy dog exam, and developed a gift for connecting deeply with people.
          His most famous gesture, lying down and lifting his paw into someone’s hand, became the way he expressed his love — and his only goal was to be your friend.
        </p>

        <div className="mb-8 text-center">
          <img
            src="/IMG_6110.jpeg"
            alt="Milo, Erin, and Mia"
            className="mx-auto rounded-lg shadow-md max-w-full w-[90%] sm:w-[80%] md:w-[60%]"
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Starting from left: Milo, Erin, and Mia on one of our final walks together.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">His Final Gift To Us – Our Gift To You</h2>

        <p className="text-lg mb-4">
          In November of 2024, Milo was diagnosed with cancer. We spent every day of his final months making him feel cherished.
          We cooked for him, stayed by his side, and soaked in every quiet moment. On December 21st, Milo passed peacefully in Erin’s arms — the same way he entered our lives.
        </p>

        <p className="text-lg mb-4">
          Milo’s life was about connection, comfort, and love. This app — Petunia — is about exactly that. It’s our way of continuing what he started:
          making people feel seen, supported, and never alone in the world of pet care. We're not just building a business that supports your needs — we want you to feel like you are our friend.
        </p>

        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>For pet businesses: a tool to operate with ease and connect with their clients.</li>
          <li>For pet owners: a place to organize, track, and protect what matters most — especially your time with the ones you love.</li>
          <li>For every animal lover: a community that listens and evolves with your needs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">A New Chapter: Meet Petunia</h2>

        <p className="text-lg mb-4">
          After Milo passed, our hearts felt empty — but love has a way of finding its way back in. Not long after, we welcomed a new dog into our family.
          Her name is Petunia. From the moment she arrived, she brought with her a gentle spirit, a sense of calm, and a new kind of hope.
        </p>

        <p className="text-lg mb-4">
          It only felt right that we name this app after her — a symbol of continuity, love, and new beginnings.
          Petunia represents the future, the families yet to be touched, and the stories still being written.
        </p>

        <div className="mb-8 text-center">
          <img
            src="/rachelrowland-59.jpg"
            alt="Petunia and Mia"
            className="mx-auto rounded-lg shadow-md max-w-full w-[90%] sm:w-[80%] md:w-[60%]"
          />
          <p className="mt-2 text-sm italic text-[#555]">
            Petunia (left) and Mia (right) — the next generation of love.
          </p>
        </div>

        <p className="text-lg mt-10 text-center italic text-[#444]">
          Thank you for visiting our page. Whether you’re a business owner trying to build something meaningful,
          or a pet parent looking for connection, we hope Milo’s story creates a feeling of love that will stay with you forever.
          <br /><br />
          He wasn’t just a dog. He was a reminder that loyalty still matters — and that love, real lasting love, is worth building around.
          <br /><br />
          That’s what Petunia is. And we’re grateful you’re here.
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
