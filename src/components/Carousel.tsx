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
		<div className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
			{slides.map((slide, idx) => (
				<div
					key={idx}
					className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
						idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
					} w-full min-h-screen flex`}
				>
					{/* Left: Image */}
					<div className="w-1/2 h-full relative">
						<Image
 							src={slide.image}
 							alt={slide.heading}
 							fill
 							style={{ objectFit: "cover" }}
 							className="w-full h-full"
 							{...(idx === current ? { priority: true } : { loading: "lazy" })}
 						/>
					</div>
					{/* Right: Text */}
					<div className="w-1/2 h-full flex flex-col justify-center items-center bg-white p-12">
						<h2 className="text-6xl md:text-8xl font-extrabold text-black drop-shadow mb-6 tracking-tight text-center font-serif">
							{slide.heading}
						</h2>
						<p
							className="text-2xl md:text-4xl text-black text-center max-w-xl mb-2 font-serif font-semibold"
							dangerouslySetInnerHTML={{ __html: slide.text }}
						/>
					</div>
				</div>
			))}
			{/* Navigation Arrows */}
			<button
				className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition"
				onClick={() =>
					setCurrent((current - 1 + slides.length) % slides.length)
				}
				aria-label="Previous slide"
			>
				<svg
					width="32"
					height="32"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-chevron-left"
				>
					<polyline points="21 28 11 16 21 4" />
				</svg>
			</button>
			<button
				className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition"
				onClick={() => setCurrent((current + 1) % slides.length)}
				aria-label="Next slide"
			>
				<svg
					width="32"
					height="32"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-chevron-right"
				>
					<polyline points="11 28 21 16 11 4" />
				</svg>
			</button>
			{/* Dots */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
				{slides.map((_, idx) => (
					<button
						key={idx}
						className={`w-4 h-4 rounded-full border-2 border-black transition-all duration-300 ${
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
