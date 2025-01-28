'use client';

import React, { useState } from 'react';

const OrcamentoPage: React.FC = () => {
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    const handleSimulacaoClick = () => {
        const dados = {
            cpfCnpj,
            nome,
            endereco,
            telefone,
            email,
        };
        localStorage.setItem('dadosSimulacao', JSON.stringify(dados));
        alert('Dados armazenados com sucesso!');
    };

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10"
                style={{
                    backgroundImage: "url('https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/casa_solar.png')",
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                    <div className="text-white md:w-3/5 text-center md:text-left mb-8 md:mb-0 px-4 md:px-0">
                        <h1 className="text-4xl md:text-8xl font-extrabold leading-tight">
                            <span className="text-yellow-400">Reduza</span> sua <br />
                            <span className="text-yellow-400">conta de luz</span> agora!
                        </h1>
                        <p className="text-lg md:text-2xl mt-6 bg-black bg-opacity-75 p-4 rounded-lg inline-block" style={{ maxWidth: '80%' }}>
                            Confie na <span className="text-yellow-400 font-bold">líder do mercado</span> e comece a economizar hoje mesmo.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
                        <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">Calculadora Solar</h2>
                        <p className="text-gray-600 text-sm md:text-base mt-2">
                            Descubra agora o gerador de Energia Solar ideal para você!
                        </p>

                        <div className="mt-4">
                            <label className="text-gray-700 text-sm">CPF/CNPJ</label>
                            <input
                                className="w-full p-2 border rounded mt-1"
                                type="text"
                                placeholder="Digite o CPF ou CNPJ"
                                value={cpfCnpj}
                                onChange={(e) => setCpfCnpj(e.target.value)}
                            />

                            <label className="text-gray-700 text-sm mt-3 block">Nome Completo</label>
                            <input
                                className="w-full p-2 border rounded mt-1"
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            <label className="text-gray-700 text-sm mt-3 block">Endereço</label>
                            <input
                                className="w-full p-2 border rounded mt-1"
                                type="text"
                                placeholder="Digite seu endereço"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />

                            <label className="text-gray-700 text-sm mt-3 block">Telefone</label>
                            <input
                                className="w-full p-2 border rounded mt-1"
                                type="text"
                                placeholder="(00) 00000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />

                            <label className="text-gray-700 text-sm mt-3 block">Email</label>
                            <input
                                className="w-full p-2 border rounded mt-1"
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button
                                className="bg-orange-500 text-white w-full p-2 rounded mt-4 hover:bg-orange-600"
                                onClick={handleSimulacaoClick}
                            >
                                Simulação Grátis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrcamentoPage;