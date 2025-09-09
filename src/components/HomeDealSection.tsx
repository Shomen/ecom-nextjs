import Link from "next/link";

export default function HomeDealSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center min-h-[500px] py-20 px-4 md:px-0"
      style={{
        backgroundImage: 'url(/images/cabi-pexels-saviesa-home-1098995-2089698.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-60 -z-10" />
      <div className="mx-auto w-full max-w-3xl bg-white bg-opacity-95 rounded-lg shadow-lg flex flex-col items-center justify-center py-16 px-8 text-center">
        <div className="text-lg font-medium text-gray-700 mb-4 tracking-wide">Lorem ipsum dolor sit amet</div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">Consectetur adipiscing elit</h2>
        <p className="text-xl text-gray-700 mb-8">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>        
        <Link href="/shop" className="px-8 py-4 bg-[#8d735b] text-white text-xl font-semibold rounded shadow hover:bg-[#6e5a45] transition">Shop Now</Link>
      </div>
    </section>
  );
}
