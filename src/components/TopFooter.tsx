import Link from "next/link";

export default function TopFooter() {
  return (
    <section className="w-full bg-[#eae7df] py-8 px-4 md:py-12 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left: Logo & Address */}
              <div className="flex flex-col justify-start mb-8 md:mb-0">
                <div className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-4">
                  <span className="font-bold text-xl tracking-wide">Ecom</span>
                </div>
                <div className="text-lg text-gray-700 mb-2">Accusamus et iusto odio</div>
                <div className="text-base text-gray-700 mb-2 cursor-pointer">Xupiditate non provident</div>
                <div className="text-base text-gray-700 mb-2">(00) 1234 5678</div>
                <div className="text-base text-gray-700 mb-2">hello@ecom.com</div>
              </div>
              {/* Middle: Page Links */}
              <div className="flex flex-col justify-start mb-8 md:mb-0">
                <div className="text-2xl font-bold mb-4 tracking-wide">QUICK LINK</div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                  <Link href="/" className="hover:text-gray-300 font-medium text-lg transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300 font-medium text-lg transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-gray-300 font-medium text-lg transition-colors duration-200">
                    Shop
                  </Link>
                </li>                 
                </ul>
              </div>
              {/* Right: Email Subscription */}
              <div className="flex flex-col justify-start">
                <div className="text-2xl font-bold mb-4 tracking-wide">SUBSCRIBE TO NEWSLETTER</div>
                <div className="text-lg text-gray-700 mb-4">At vero eos et accusamus et iusto 10% odio dignissimos ducimus qui blanditiis praesentium</div>
                <form className="flex flex-col sm:flex-row w-full max-w-md">
                  <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-t sm:rounded-l sm:rounded-t-none bg-white border border-gray-300 text-base sm:text-lg focus:outline-none" />
                  <button type="submit" className="px-6 py-3 bg-black text-white text-base sm:text-lg font-semibold rounded-b sm:rounded-r sm:rounded-b-none flex items-center gap-2 hover:bg-gray-900 transition mt-2 sm:mt-0">
                    Submit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
      </div>
    </section>
  );
}
