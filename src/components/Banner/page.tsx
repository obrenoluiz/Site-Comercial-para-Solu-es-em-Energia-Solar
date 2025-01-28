import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/banner1.png",
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
        <div className="relative w-full h-64 md:h-80">
            <Image
                src={images[currentImageIndex]}
                alt="Banner"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}

export default Banner;
