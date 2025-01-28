'use client';

import React, { useState } from 'react';
import { FC } from 'react';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white text-dark-blue py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-4">
                    <Image src="https://github.com/obrenoluiz/syntesol/blob/main/public/placa_icon.png?raw=true" alt="Logo" width={80} height={80} className="object-cover rounded-full" />
                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-blue-900">
                            SYNTESOL
                        </h1>
                        <p className="text-sm font-medium text-gray-600">Energia Eficiente</p>
                    </div>
                </div>

                <div className="hidden md:flex space-x-8 items-center text-sm">
                    <div className="flex items-center space-x-2">
                        <FaPhone className="text-blue-700" />
                        <div>
                            <p className="font-bold text-blue-900">Atendimento</p>
                            <p className="text-gray-600">62 <span className="font-bold">00000-0000</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaWhatsapp className="text-green-500" />
                        <div>
                            <p className="font-bold text-blue-900">Chamar no Whats</p>
                            <p className="text-gray-600">62 <span className="font-bold">00000-0000</span></p>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/orcamento">
                        <button className="bg-yellow-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-200">
                            ORÇAMENTO
                        </button>
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-blue-900 text-xl cursor-pointer">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-blue-700" />
                                <div>
                                    <p className="font-bold text-blue-900">Atendimento</p>
                                    <p className="text-gray-600">62 <span className="font-bold">00000-0000</span></p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaWhatsapp className="text-green-500" />
                                <div>
                                    <p className="font-bold text-blue-900">Chamar no Whats</p>
                                    <p className="text-gray-600">62 <span className="font-bold">00000-0000</span></p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200">
                            ORÇAMENTO
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
