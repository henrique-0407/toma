import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';
export default function Exum2(){

    const [kilo,setKilo] = useState (0);
    const [grama,setGrama] = useState (0);

    function gramar(){
        let gramar = kilo*1000;
        setGrama(gramar)
    }

    return(
        <div className='ex2'>
            <Leito/>
            <Exe
            cor="#B3FF37"
            titulo="Exercício 02 - Converter Kg/gramas" 
            texto="Implementar um programa em Javascript para converter kilos em gramas."
            />
            <div className='textoex'> 
                <div className='exercicio'>
                    <h2>Valor em kilos</h2>
                    <input type="text" placeholder='Digite aqui' onChange={e=>setKilo(e.target.value)}  />
                    <button onClick={gramar}>Executar</button>
                </div>
                <li>Resultado: o resultado é {grama}</li>
            </div>
        </div>
    )
}