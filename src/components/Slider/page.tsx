import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider1.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider2.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider3.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider4.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider5.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider6.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider7.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider8.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider9.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider10.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider11.jpg",
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/slider12.jpg",
];

export default function Slider() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center py-16 bg-gray-100">
            <div className="text-center z-10 mb-10">
                <h2 className="text-4xl font-extrabold text-yellow-500 drop-shadow-lg">
                    + 20.000 Sistemas Vendidos
                </h2>
                <p className="text-xl text-gray-800 font-semibold mt-2 drop-shadow-lg">
                    Instalações <span className="font-bold">sem surpresas</span> e com{" "}
                    <span className="font-bold">os melhores equipamentos</span> do mercado
                </p>
            </div>

            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full"
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                    1920: { slidesPerView: 5 },
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="relative w-full h-[300px]">
                            <Image
                                src={src}
                                alt={`Imagem ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                loading="lazy"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="mt-20 bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg">
                INSTALE ENERGIA SOLAR
            </button>
        </div>
    );
}
