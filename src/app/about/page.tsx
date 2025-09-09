"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
  <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 flex flex-col py-10 px-0">
  <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/90 shadow-2xl p-10 border-b border-gray-100">
        <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4 tracking-tight font-serif">About Us</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Exercitationem ullam</h2>
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
            </p>
            <ul className="space-y-2 text-base md:text-lg text-gray-700 pl-4 list-disc">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Pellentesque euismod, nisi eu consectetur consectetur.</li>
              <li>Nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</li>
              <li>Morbi facilisis, justo eu facilisis dictum, urna erat dictum urna.</li>
              <li>Vestibulum ante ipsum primis in faucibus orci luctus et.</li>
              <li>Etiam euismod, nisi eu consectetur consectetur, nisl nisi.</li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src="/images/sf-pexels-maksgelatin-4352247.webp"
            alt="About Us Hero"
            width={500}
            height={600}
            className="shadow-lg object-cover border border-gray-200"
            loading="lazy"
          />
          <div className="flex gap-4 mt-4">
            <span className="inline-block px-6 py-2 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition">
              Trendy
            </span>
            <span className="inline-block px-6 py-2 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-black transition">
              Creative
            </span>
            <span className="inline-block px-6 py-2 bg-gray-700 text-white rounded-full font-semibold shadow hover:bg-black transition">
              Modern
            </span>
          </div>
        </div>
      </section>
  <section className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/80 shadow-xl p-8 border-b border-gray-100">
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Assumenda est omnis</h3>
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
            </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/bd-pexels-heyho-5998134.webp"
            alt="Curated Style"
            width={400}
            height={500}
            className="shadow object-cover border border-gray-200"
            loading="lazy"
          />
        </div>
      </section>
  <section className="w-full mt-16 bg-white/80 shadow-xl p-8 border-b border-gray-100 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Damit Ihr indess</h3>
          <blockquote className="text-lg md:text-xl text-gray-700 italic font-light leading-relaxed text-center max-w-2xl">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.&quot;
          </blockquote>
          <span className="mt-4 text-base text-gray-500">— John Doe</span>
      </section>
    </main>
  );
}
