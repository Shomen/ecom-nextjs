"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  type CartItem = { id: number; title: string; image: string; price: number; quantity: number };
  const [cart, setCart] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-200 py-8 px-0">
      <section className="w-full px-2 sm:px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 sm:mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-base sm:text-lg text-gray-700">Your cart is empty.</div>
        ) : (
          <div className="bg-white rounded-lg shadow p-2 sm:p-4 md:p-6 overflow-x-auto">
            <table className="min-w-[600px] w-full text-left text-xs sm:text-base">
              <thead>
                <tr className="border-b">
                  <th className="py-2 sm:py-4 px-1 sm:px-2 font-semibold text-xs sm:text-lg">Product</th>
                  <th className="py-2 sm:py-4 px-1 sm:px-2 font-semibold text-xs sm:text-lg">Price</th>
                  <th className="py-2 sm:py-4 px-1 sm:px-2 font-semibold text-xs sm:text-lg">Quantity</th>
                  <th className="py-2 sm:py-4 px-1 sm:px-2 font-semibold text-xs sm:text-lg">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 sm:py-6 px-1 sm:px-2 flex items-center gap-2 sm:gap-6">
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover border border-gray-200 w-12 h-12 sm:w-24 sm:h-24"
                        unoptimized
                      />
                      <div>
                        <div className="font-bold text-xs sm:text-lg text-black mb-1">{item.title}</div>
                        <div className="text-gray-500 text-xs sm:text-base mb-2">White / L</div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-700 underline text-xs sm:text-sm">Remove</button>
                      </div>
                    </td>
                      <td className="py-3 sm:py-6 px-1 sm:px-2 text-xs sm:text-lg font-semibold text-black">{item.price.toFixed(2)}</td>
                    <td className="py-3 sm:py-6 px-1 sm:px-2">
                      <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 rounded-full px-2 sm:px-4 py-1 sm:py-2 w-fit">
                        <button
                          className="text-base sm:text-xl font-bold text-gray-600 px-1 sm:px-2 focus:outline-none"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-1 sm:mx-2 text-xs sm:text-lg font-semibold text-black">{item.quantity}</span>
                        <button
                          className="text-base sm:text-xl font-bold text-gray-600 px-1 sm:px-2 focus:outline-none"
                          onClick={() => {
                            const updated = cart.map((cartItem) =>
                              cartItem.id === item.id
                                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                : cartItem
                            );
                            setCart(updated);
                            localStorage.setItem("cart", JSON.stringify(updated));
                            window.dispatchEvent(new Event("cart-updated"));
                          }}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                      <td className="py-3 sm:py-6 px-1 sm:px-2 text-xs sm:text-lg font-bold text-black">{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right font-bold text-black text-base sm:text-xl mt-4 sm:mt-6">
              Cart Total: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
        )}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
          {cart.length > 0 && (
            <Link href="/checkout" className="block w-full sm:w-auto px-6 py-3 mb-2 sm:mb-0 bg-black text-white font-bold rounded-lg shadow hover:bg-gray-900 transition text-center ml-auto">Checkout</Link>
          )}
          <Link href="/shop" className="px-6 py-2 bg-black text-white font-semibold rounded-none shadow hover:bg-gray-900 transition w-full sm:w-auto">Continue Shopping</Link>
        </div>
      </section>
    </main>
  );
}
