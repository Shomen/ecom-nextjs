import Image from "next/image";
export default function HomeSecondSection() {
    return (
        <section className="w-full bg-[#e7e4db] flex flex-col items-center justify-center py-0 px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full mx-auto min-h-screen">
                {/* Left image */}
                <div className="h-96 md:h-screen w-full relative overflow-hidden bg-white flex items-center justify-center">
                    <Image
                        src="/images/sf-left-pexels-olenkabohovyk-18468859.webp"
                        alt="Left Section"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow-lg hover:bg-gray-100 transition">EXCEPTEUR &amp; SINT</button>
                </div>
                {/* Center column split top/bottom */}
                <div className="flex flex-col h-96 md:h-screen w-full bg-[#d6d3cb]">
                    <div className="flex items-center justify-center relative overflow-hidden flex-1">
                        <Image
                            src="/images/md-pexels-thisispav-29383009.webp"
                            alt="Middle Section"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow-lg hover:bg-gray-100 transition">MOLLIT &amp; ANIM</button>
                    </div>
                    <div className="flex flex-col justify-center items-center px-0 md:px-4 pb-4 flex-1">
                        <h2 className="text-xl md:text-3xl font-bold mb-2 text-gray-800 text-center">Excepteur sint</h2>
                        <p className="text-sm text-gray-700 text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    </div>
                </div>
                {/* Right image */}
                <div className="h-96 md:h-screen w-full relative overflow-hidden bg-white flex items-center justify-center">
                    <Image
                        src="/images/sof-side-pexels-abrar-29838521.webp"
                        alt="Right Section"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow-lg hover:bg-gray-100 transition">FUGIAT &amp; NULLA</button>
                </div>
            </div>
        </section>
    );
}
