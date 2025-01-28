import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/banner1.png",
];

function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96">
            <Image
                src={images[currentImageIndex]}
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
}

export default Banner;
