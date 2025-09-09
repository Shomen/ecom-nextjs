import Link from "next/link";
import CartDropdown from "@/components/CartDropdown";

export default function Navigation() {
  return (
  <nav className="w-full flex items-center justify-between py-2 px-8 bg-black bg-opacity-90 fixed top-0 left-0 z-50 shadow-lg transition-all duration-300">
    {/* Logo */}
    <div className="flex items-center">
      <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
        <Link href="/"><span className="font-bold text-base tracking-wide">Ecom</span></Link>
      </div>
    </div>
    {/* Navigation Links */}
    <div className="flex-1 flex justify-center items-center">
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-white hover:text-gray-300 font-medium text-lg transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300 font-medium text-lg transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-white hover:text-gray-300 font-medium text-lg transition-colors duration-200">
            Shop
          </Link>
        </li>
      </ul>
    </div>
    {/* Cart Icon & Dropdown at far right */}
    <div className="relative group ml-8" id="cart-icon-group">
      <Link href="/cart" className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white hover:text-gray-300 transition">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61l1.6-8.39H6" />
        </svg>
      </Link>
      <CartDropdown />
    </div>
  </nav>
  );
}
