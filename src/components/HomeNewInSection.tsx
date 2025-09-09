import Image from "next/image";
import productsData from "../data/products.json";

const products = productsData.slice(6, 10);

export default function HomeNewInSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white text-black">
      <h2 className="text-4xl font-extrabold mb-10 text-left tracking-tight">NEW IN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-[#f5f5f5] flex flex-col items-center">
            <div className="relative w-full h-72 md:h-96 flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src={`/images/${product.image}`}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center uppercase tracking-wide">{product.title}</h3>
            <p className="text-base font-medium mb-2 text-center text-gray-700">FROM €{product.price.toFixed(2)}</p>
            <a href={`/shop/${product.id}`} className="mb-4 px-4 py-2 bg-black text-white font-medium rounded-none shadow hover:bg-gray-900 transition w-full text-center">View Product</a>
          </div>
        ))}
      </div>
    </section>
  );
}
