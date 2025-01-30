'use client';

import React, { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaSolarPanel, FaRulerCombined } from 'react-icons/fa';
import axios from 'axios';

const OrcamentoPage: React.FC = () => {
    const [etapa, setEtapa] = useState(1);

    const [valorConta, setValorConta] = useState('');
    const [cep, setCep] = useState('');
    const [concessionaria, setConcessionaria] = useState('Desconhecida');
    const [precoEnergia, setPrecoEnergia] = useState(0.75);
    const [custoEstimado, setCustoEstimado] = useState(0);
    const [producaoMensal, setProducaoMensal] = useState(0);

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://www.portalsolar.com.br/api/v1/simulations/power_distributors?postalcode=${cep}`)
                .then(response => {
                    if (response.data.power_distributors.length > 0) {
                        const tarifa = parseFloat(response.data.power_distributors[0].price);
                        setConcessionaria(response.data.power_distributors[0].name);
                        setPrecoEnergia(!isNaN(tarifa) && tarifa > 0 ? tarifa : 0.75);
                    } else {
                        setConcessionaria('Desconhecida');
                        setPrecoEnergia(0.75);
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar concessionária:', error);
                    setConcessionaria('Desconhecida');
                    setPrecoEnergia(0.75);
                });
        }
    }, [cep]);

    const calcularOrcamento = () => {
        const valorContaNum = parseFloat(valorConta.replace(',', '.'));
        if (!isNaN(valorContaNum) && valorContaNum > 0) {
            const fatorConversao = 20;
            const estimativa = (valorContaNum / precoEnergia) * fatorConversao;
            setCustoEstimado(estimativa);
            setProducaoMensal(parseInt((valorContaNum / precoEnergia).toFixed(0)));
        } else {
            alert("Por favor, insira um valor válido para a conta de energia.");
        }
    };    

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10" style={{ backgroundImage: "url('https://raw.githubusercontent.com/obrenoluiz/syntesol/refs/heads/main/public/casa_solar.png')" }}>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/3">
                    {etapa === 1 && (
                        <div>
                            <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">Calculadora Solar</h2>
                            <label className="text-gray-700 text-sm">CEP</label>
                            <input className="w-full p-2 border rounded mt-1" type="text" placeholder="Digite o seu CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                            <button className="bg-orange-500 text-white w-full p-2 rounded mt-4 hover:bg-orange-600" onClick={() => setEtapa(2)}>
                                Simulação Grátis
                            </button>
                        </div>
                    )}
                    {etapa === 2 && (
                        <div>
                            <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">Calculadora Solar</h2>
                            <label className="text-gray-700 text-sm">Valor da conta de energia</label>
                            <input className="w-full p-2 border rounded mt-1" type="text" placeholder="Digite o valor" value={valorConta} onChange={(e) => setValorConta(e.target.value)} />
                            <p className="text-gray-700 text-sm mt-3">Concessionária: <span className="font-bold">{concessionaria}</span></p>
                            <button className="bg-orange-500 text-white w-full p-2 rounded mt-4 hover:bg-orange-600" onClick={() => { calcularOrcamento(); setEtapa(3); }}>
                                Calcular Orçamento
                            </button>
                        </div>
                    )}
                    {etapa === 3 && (
                        <div className="text-center">
                            <h2 className="text-gray-800 text-2xl font-bold mb-4">Resultado da Simulação</h2>
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                                <p className="text-lg text-gray-700 font-semibold">Economia Anual Estimada</p>
                                <p className="text-3xl text-green-600 font-bold">R$ {((parseFloat(valorConta.replace(',', '.')) * 12)).toFixed(2)}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <FaMoneyBillWave className="text-orange-500 text-3xl mx-auto mb-2" />
                                    <p className="text-gray-600">Custo Estimado (Mínimo)</p>
                                    <p className="text-xl font-bold">{custoEstimado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <FaMoneyBillWave className="text-red-500 text-3xl mx-auto mb-2" />
                                    <p className="text-gray-600">Custo Estimado (Máximo)</p>
                                    <p className="text-xl font-bold">{(custoEstimado * 1.2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <FaSolarPanel className="text-yellow-500 text-3xl mx-auto mb-2" />
                                    <p className="text-gray-600">Produção Mensal</p>
                                    <p className="text-xl font-bold">{producaoMensal.toFixed(0)} kWh</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <FaRulerCombined className="text-blue-500 text-3xl mx-auto mb-2" />
                                    <p className="text-gray-600">Área Necessária</p>
                                    <p className="text-xl font-bold">30 m²</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mt-4">
                                Os valores apresentados são estimativas e podem variar de acordo com diversos fatores.
                            </p>
                            <button className="bg-orange-500 text-white w-full p-3 rounded mt-6 hover:bg-orange-600" onClick={() => setEtapa(1)}>
                                Refazer Simulação
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrcamentoPage;