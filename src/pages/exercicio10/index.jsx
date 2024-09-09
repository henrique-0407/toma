import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';

export default function Exum10() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState("");
    const [lista, setLista] = useState([]);

    function calculoss() {
        const alturaNumerica = parseFloat(altura);
        const pesoNumerico = parseFloat(peso);

        if (isNaN(alturaNumerica) || isNaN(pesoNumerico) || alturaNumerica === 0) {
            alert("Por favor, insira valores válidos para altura e peso.");
            return;
        }

        let imcr = pesoNumerico / (alturaNumerica * alturaNumerica);
        let situacao = "";

        if (imcr <= 16.9) {
            situacao = "Muito abaixo do peso";
        } else if (imcr >= 17 && imcr <= 18.4) {
            situacao = "Abaixo do peso";
        } else if (imcr >= 18.5 && imcr <= 24.9) {
            situacao = "Peso normal";
        } else if (imcr >= 25 && imcr <= 29.9) {
            situacao = "Acima do peso";
        } else if (imcr >= 30 && imcr <= 34.9) {
            situacao = "Obesidade grau I";
        } else if (imcr >= 35 && imcr <= 40) {
            situacao = "Obesidade grau II";
        } else if (imcr >= 40) {
            situacao = "Obesidade grau III";
        }

        setImc(situacao);

        setLista([...lista, { altura, peso, imc: situacao }]);

        // Limpar os campos após adicionar
        setPeso(0);
        setAltura(0);
    }

    return (
        <div className='ex10'>
            <div className='toma10'>
                <Leito />
                <Exe
                    cor="#B75333"
                    titulo="Exercício 10 - Cálculo de IMC com histórico"
                    texto="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"
                />
                <div className='textoex10'>
                    <div className='exercicio10'>
                        <div className='brabudos'>
                            <div className='inputss1'>
                                <h2>Altura</h2>
                                <input
                                    type="number"
                                    placeholder='Insira a altura'
                                    value={altura}
                                    onChange={e => setAltura(e.target.value)}
                                />
                            </div>
                            <div className='inputss2'>
                                <h2>Peso</h2>
                                <input
                                    type="number"
                                    placeholder='0'
                                    value={peso}
                                    onChange={e => setPeso(e.target.value)}
                                />
                            </div>
                        </div>
                        <button onClick={calculoss}>Executar</button>
                    </div>
                    <div className='list'>
                        {lista.map((item, pos) => (
                            <div key={pos}>
                                <div>Altura: {item.altura} m</div>
                                <div>Peso: {item.peso} kg</div>
                                <div>IMC: {item.imc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
