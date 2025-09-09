"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  // Get cart from localStorage
  type CartItem = { id: number; title: string; image: string; price: number; quantity: number };
  const [cart, setCart] = React.useState<CartItem[]>([]);
  React.useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 10;
  const shipping = 10;
  const tax = 10;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Checkout Form */}
        <form className="flex-1 bg-white rounded-lg shadow p-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First name" className="border rounded px-4 py-2" />
            <input type="text" placeholder="Last name" className="border rounded px-4 py-2" />
          </div>
          <input type="text" placeholder="Country" className="border rounded px-4 py-2 w-full mb-4" />
          <input type="text" placeholder="Address" className="border rounded px-4 py-2 w-full mb-4" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className="border rounded px-4 py-2 w-full mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="City" className="border rounded px-4 py-2" />
            <input type="text" placeholder="State" className="border rounded px-4 py-2" />
            <input type="text" placeholder="Zipcode/Postal" className="border rounded px-4 py-2" />
          </div>
          <input type="text" placeholder="Phone" className="border rounded px-4 py-2 w-full mb-4" />

          <h3 className="font-bold text-lg mt-8 mb-2">Contact Information</h3>
          <input type="text" placeholder="Email or phone number" className="border rounded px-4 py-2 w-full mb-4" />

          <h3 className="font-bold text-lg mt-8 mb-2">Shipping Method</h3>
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input type="radio" name="shipping" defaultChecked className="mr-2" />
              Free Shipping (Estimate in 7/10 - 10/10/2025)
              <span className="ml-auto font-semibold">€0.00</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="shipping" className="mr-2" />
              Express Shipping (Estimate in 4/10 - 5/10/2025)
              <span className="ml-auto font-semibold">€10.00</span>
            </label>
          </div>

          <h3 className="font-bold text-lg mt-8 mb-2">Payment</h3>
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Direct bank transfer
            </label>
            <div className="text-gray-500 text-sm mb-2 ml-6">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Cash on delivery
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Credit Card <span className="ml-2"> <Image src="/images/cc-visa-brands-solid.svg" alt="Visa" width={32} height={20} /> </span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 ml-6">
              <input type="text" placeholder="Card number" className="border rounded px-4 py-2" />
              <input type="text" placeholder="Security code" className="border rounded px-4 py-2" />
            </div>
            <input type="text" placeholder="Expiration date (MM/YY)" className="border rounded px-4 py-2 w-full mb-2 ml-6" />
            <input type="text" placeholder="Name on card" className="border rounded px-4 py-2 w-full mb-2 ml-6" />
            <label className="flex items-center mb-2 ml-6">
              <input type="checkbox" className="mr-2" />
              Use shipping address as billing address
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              PayPal <span className="ml-2"> <Image src="/images/paypal-brands-solid.svg" alt="PayPal" width={32} height={20} /> </span>
            </label>
          </div>
          <div className="text-xs text-gray-500 mt-6">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="#" className="underline">privacy policy</Link>.
          </div>
        </form>

        {/* Cart Summary Sidebar */}
        <aside className="w-full md:w-96 bg-white rounded-lg shadow p-6 h-fit">
          <h3 className="font-bold text-lg mb-4">In your cart</h3>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <Image src={`/images/${item.image}`} alt={item.title} width={48} height={48} className="rounded-lg object-cover border border-gray-200 mr-3" unoptimized />
                <div className="flex-1">
                  <div className="font-semibold text-black">{item.title}</div>
                  <div className="text-gray-500 text-sm">White / L</div>
                </div>
                <div className="font-semibold text-black ml-2">€{(item.price * item.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-gray-700 mb-1"><span>Subtotal:</span><span>€{subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-700 mb-1"><span>Discount:</span><span>-€{discount.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-700 mb-1"><span>Shipping:</span><span>€{shipping.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-700 mb-1"><span>Tax:</span><span>€{tax.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-black text-lg mt-2 mb-4"><span>Subtotal:</span><span>€{total.toFixed(2)}</span></div>
          <button type="submit" className="cursor-pointer w-full py-3 bg-black text-white font-bold rounded-lg shadow hover:bg-gray-900 transition">Place order</button>
        </aside>
      </div>
    </div>
  );
}
