import Link from "next/link";
import { FaHeadset, FaCreditCard, FaDollarSign, FaMobileAlt } from "react-icons/fa";

const infoItems = [
    {
        icon: <FaHeadset size={28} className="text-yellow-500" />,
        title: "08:00 às 20:00",
        subtitle: "Fale com um Consultor",
    },
    {
        icon: <FaCreditCard size={28} className="text-yellow-500" />,
        title: "12x",
        subtitle: "Parcelamento em até",
    },
    {
        icon: <FaDollarSign size={28} className="text-yellow-500" />,
        title: "7% de desconto no PIX",
        subtitle: "",
    },
    {
        icon: <FaMobileAlt size={28} className="text-yellow-500" />,
        title: "Pague em até 12x s/ juros",
        subtitle: "",
    },
];

export default function InfoCards() {
    return (
        <div className="mt-20 flex items-center justify-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg w-full max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 text-center">
                            <div className="flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full bg-yellow-100">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-lg font-semibold text-gray-800">{item.subtitle}</h3>
                                <h3 className="text-lg font-semibold text-gray-800">{item.title} </h3>
                                <Link href="#" className="text-green-600 text-sm hover:underline">Ver mais</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}