"use client";
import { useParams } from "next/navigation";
import products from "@/data/products.json";
import Image from "next/image";
import React from "react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  type CartItem = { id: number; title: string; image: string; price: number; quantity: number };
  const [adding, setAdding] = React.useState(false);
  const product = products.find((p) => String(p.id) === String(id));
  if (!product) return <div className="p-8">Product not found.</div>;
  function handleAddToCart() {
    if (!product) return;
    setAdding(true);
    setTimeout(() => {
      const stored = localStorage.getItem("cart");
      const cart: CartItem[] = stored ? JSON.parse(stored) : [];
      const existing = cart.find((item: CartItem) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
      setAdding(false);
      // Open cart dropdown
      const cartIcon = document.getElementById("cart-icon-group");
      if (cartIcon) {
        cartIcon.classList.add("group-hover:block");
        setTimeout(() => cartIcon.classList.remove("group-hover:block"), 2000);
      }
    }, 1000);
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-200 py-10 px-0">
      <section className="w-full flex flex-col md:flex-row gap-0 px-0">
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <Image
            src={`/images/${product.image}`}
            alt={product.title}
            width={800}
            height={600}
            className="object-cover w-full h-full border border-gray-200"
            loading="lazy"
            unoptimized
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl font-bold text-black mb-4">{product.title}</h1>
      <p className="text-xl text-gray-700 font-semibold mb-4">€{product.price}</p>
          <button onClick={handleAddToCart} className="cursor-pointer px-6 py-3 bg-black text-white font-medium rounded-none shadow hover:bg-gray-900 transition mb-6" disabled={adding}>
            {adding ? <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Adding...</span> : "Add to Cart"}
          </button>
          <div className="mt-4 w-full">
            <div className="flex items-center mb-2">
              <span className="text-base font-semibold text-green-700 mr-2">In Stock:</span>
              <span className="text-base text-gray-800">Available</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-base font-semibold text-blue-700 mr-2">Shipping:</span>
        <span className="text-base text-gray-800">Free shipping on orders over €1000. Delivery in 3-7 business days.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Details</h2>
        <p className="text-base text-gray-700 leading-relaxed">{product.description}</p>
      </section>
    </main>
  );
}
