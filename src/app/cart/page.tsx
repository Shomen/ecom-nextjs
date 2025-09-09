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
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-200 py-10 px-0">
      <section className="w-full px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-black mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-lg text-gray-700">Your cart is empty.</div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-2 font-semibold text-lg">Product</th>
                  <th className="py-4 px-2 font-semibold text-lg">Price</th>
                  <th className="py-4 px-2 font-semibold text-lg">Quantity</th>
                  <th className="py-4 px-2 font-semibold text-lg">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-6 px-2 flex items-center gap-6">
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover border border-gray-200"
                        unoptimized
                      />
                      <div>
                        <div className="font-bold text-lg text-black mb-1">{item.title}</div>
                        <div className="text-gray-500 text-base mb-2">White / L</div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-700 underline text-sm">Remove</button>
                      </div>
                    </td>
                      <td className="py-6 px-2 text-lg font-semibold text-black">€{item.price.toFixed(2)}</td>
                    <td className="py-6 px-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-fit">
                        <button
                          className="text-xl font-bold text-gray-600 px-2 focus:outline-none"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-2 text-lg font-semibold text-black">{item.quantity}</span>
                        <button
                          className="text-xl font-bold text-gray-600 px-2 focus:outline-none"
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
                      <td className="py-6 px-2 text-lg font-bold text-black">€{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right font-bold text-black text-xl mt-6">
              Cart Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
              Cart Total: €{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
        )}
        <div className="mt-8">
          {cart.length > 0 && (
            <Link href="/checkout" className="block w-sm px-6 py-3 mb-4 bg-black text-white font-bold rounded-lg shadow hover:bg-gray-900 transition text-center ml-auto">Checkout</Link>
          )}
          <Link href="/shop" className="px-6 py-2 bg-black text-white font-semibold rounded-none shadow hover:bg-gray-900 transition">Continue Shopping</Link>
        </div>
      </section>
    </main>
  );
}
