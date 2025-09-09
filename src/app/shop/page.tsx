"use client";
import Link from "next/link";
import React from "react";
import Spinner from "@/components/Spinner";
import products from "@/data/products.json";
import Image from "next/image";

export default function ShopPage() {
  // Get unique categories
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortOrder, setSortOrder] = React.useState('none');
  let filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);
  if (sortOrder === 'low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <React.Suspense fallback={<Spinner />}>
      <main className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-200 py-10 px-0">
        <section className="w-full px-8">
          <h1 className="text-4xl font-extrabold text-black mb-8">Shop</h1>
          <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div className="flex items-center gap-2 ml-4">
            <label className="text-base font-semibold text-gray-700">Sort by Price:</label>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded"
            >
              <option value="none">Default</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
            <button
              className={`cursor-pointer px-6 py-2 rounded-none font-semibold border border-black bg-black text-white hover:bg-gray-900 transition ${selectedCategory === 'All' ? 'opacity-100' : 'opacity-70'}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cursor-pointer px-6 py-2 rounded-none font-semibold border border-black bg-black text-white hover:bg-gray-900 transition ${selectedCategory === cat ? 'opacity-100' : 'opacity-70'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow flex flex-col items-start border border-gray-200 h-[520px]">
                <div className="w-full h-[410px] relative">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover w-full h-full border border-gray-200"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <h2 className="px-4 text-lg font-bold text-gray-900 mt-2 mb-1">{product.title}</h2>
                <p className="px-4 text-base text-gray-700 font-semibold mb-1">€{product.price}</p>
                <Link href={`/shop/${product.id}`} className="mt-0 px-4 py-2 bg-black text-white font-medium rounded-none shadow hover:bg-gray-900 transition w-full text-center">View</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </React.Suspense>
  );
}
