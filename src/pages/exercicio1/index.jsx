import Leito from '../../components/faixa';
import './index.scss';
import Exe from '../../components/ex';
import { useState } from 'react';
export default function Exum() {

    const [calcular,setCalcular] = useState(0);
    const [desc,setDesc] = useState(0);
    const [resul,setResul] = useState(0);

    function calculo(){
        let calculo = calcular-desc;
        setResul(calculo)
    }
    
    return (


        <div className='ex1'>
            <Leito/>
            <Exe 
            cor="#FFCE37"
            titulo="Exercício 01 - Cupom de desconto" 
            texto="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto."/>
            <div className='textoex'> 
                <div className='exercicio'>
                    <h2>Informe o valor do pedido</h2>
                    <input placeholder='0' type="text" onChange={e => setCalcular(e.target.value)} />
                    <h2>Informe o valor do cupom</h2>
                    <input placeholder='0' type="text" onChange={e => setDesc(e.target.value)} />
                    <button onClick={calculo}>Executar</button>
                </div>
                <li>{'Resultado: o resultado é ' + resul}</li>
            </div>
        </div>
    )
}