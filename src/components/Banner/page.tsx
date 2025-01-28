import { useEffect, useState } from "react";

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
            <img
                src={images[currentImageIndex]}
                alt="Banner"
                className="object-cover w-full h-full"
            />
        </div>
    );
}

export default Banner;