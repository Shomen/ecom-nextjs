"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function CartDropdown() {
  type CartItem = { id: number; title: string; image: string; price: number; quantity: number };
  const [cart, setCart] = React.useState<CartItem[]>([]);
  React.useEffect(() => {
    const updateCart = () => {
      const stored = localStorage.getItem("cart");
      let parsed: CartItem[] = [];
      try {
        parsed = stored ? JSON.parse(stored) : [];
      } catch {
        parsed = [];
      }
      setCart(Array.isArray(parsed) ? parsed : []);
    };
    updateCart();
    const handler = () => updateCart();
    window.addEventListener("storage", handler);
    window.addEventListener("cart-updated", handler);
    // Listen for hover on cart icon to update cart instantly
    const cartIcon = document.getElementById("cart-icon-group");
    if (cartIcon) {
      cartIcon.addEventListener("mouseenter", updateCart);
    }
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("cart-updated", handler);
      if (cartIcon) {
        cartIcon.removeEventListener("mouseenter", updateCart);
      }
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  // Attach hover listeners to cart icon
  React.useEffect(() => {
    const icon = document.getElementById("cart-icon-group");
    if (!icon) return;
    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);
    icon.addEventListener("mouseenter", handleEnter);
    icon.addEventListener("mouseleave", handleLeave);
    return () => {
      icon.removeEventListener("mouseenter", handleEnter);
      icon.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  // Dropdown hover listeners
  React.useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);
    dropdown.addEventListener("mouseenter", handleEnter);
    dropdown.addEventListener("mouseleave", handleLeave);
    return () => {
      dropdown.removeEventListener("mouseenter", handleEnter);
      dropdown.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  if (cart.length === 0) return null;
  return (
    <div className="relative inline-block">
      <div
        ref={dropdownRef}
        className={`absolute right-full top-0 z-50 -mt-6 -mr-10 w-80 bg-white border border-gray-200 shadow-lg rounded transition-all duration-200 pointer-events-auto ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
        tabIndex={0}
      >
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Cart</h3>
          <ul className="divide-y divide-gray-200">
            {cart.map((item: CartItem) => (
              <li key={item.id} className="flex items-center py-2">
                <div className="w-14 h-14 relative mr-3">
                  <Image src={`/images/${item.image}`} alt={item.title} fill className="object-cover rounded border border-gray-200" unoptimized />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-700">€{item.price} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-2 text-right font-bold text-black">
            Total: €{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </div>
          <Link href="/cart" className="block mt-4 px-4 py-2 bg-black text-white text-center font-semibold rounded-none shadow hover:bg-gray-900 transition">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}