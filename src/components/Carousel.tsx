"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
	{
		image: "/images/land-pexels-fotoaibe-1571460.webp",
		heading: "Modern Living",
		text: "Lorem ipsum dolor.<br />Consectetur adipiscing.<br />Sed do eiusmod.",
	},
	{
		image: "/images/Landing-pexels-falling4utah-2724749.webp",
		heading: "Elegant Comfort",
		text: "Sed ut perspiciatis<br />unde omnis iste<br />natus error sit.",
	},
	{
		image: "/images/land-pexels-maria-salazar-303506-879010.webp",
		heading: "Timeless Design",
		text: "At vero eos et accus<br />amus et iusto odio <br />dignissimos ducimus",
	},
];

export default function Carousel() {
	const [current, setCurrent] = useState(0);

	// Auto-slide effect
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 3500); // 3.5 seconds per slide
		return () => clearTimeout(timer);
	}, [current]);

	return (
		<div className="relative w-full min-h-[400px] md:min-h-screen flex items-center justify-center pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
			{slides.map((slide, idx) => (
				<div
					key={idx}
					className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
						idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
					} w-full flex flex-col md:flex-row min-h-[400px] md:min-h-screen`}
				>
					{/* Left: Image */}
					<div className="w-full md:w-1/2 h-64 md:h-full relative">
						<Image
							src={slide.image}
							alt={slide.heading}
							fill
							className="w-full h-full object-cover"
							{...(idx === current ? { priority: true } : { loading: "lazy" })}
						/>
					</div>
					{/* Right: Text */}
					<div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center bg-white px-4 py-6 md:px-12 md:py-0">
						<h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-black drop-shadow mb-4 md:mb-6 tracking-tight text-center font-serif">
							{slide.heading}
						</h2>
						<p
							className="text-base sm:text-lg md:text-2xl lg:text-4xl text-black text-center max-w-xl mb-2 font-serif font-semibold"
							dangerouslySetInnerHTML={{ __html: slide.text }}
						/>
					</div>
				</div>
			))}
			{/* Navigation Arrows */}
			<button
				className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition"
				onClick={() =>
					setCurrent((current - 1 + slides.length) % slides.length)
				}
				aria-label="Previous slide"
			>
				<svg
					width="24"
					height="24"
					className="md:w-8 md:h-8"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="21 28 11 16 21 4" />
				</svg>
			</button>
			<button
				className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition"
				onClick={() => setCurrent((current + 1) % slides.length)}
				aria-label="Next slide"
			>
				<svg
					width="24"
					height="24"
					className="md:w-8 md:h-8"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="11 28 21 16 11 4" />
				</svg>
			</button>
			{/* Dots */}
			<div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
				{slides.map((_, idx) => (
					<button
						key={idx}
						className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black transition-all duration-300 ${
							current === idx ? "bg-black" : "bg-transparent"
						}`}
						onClick={() => setCurrent(idx)}
						aria-label={`Go to slide ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
