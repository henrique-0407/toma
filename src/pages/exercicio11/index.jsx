import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';

export default function Exum11(){
    const [valorzaum, setValorzaum] = useState(0);
    const [tabuadasas, setTabuadasas] = useState([]);

    function calcularTabuada() {
        let tabuada = []

        for (let i = 0; i <= 10; i++) {
            let resultado = i * valorzaum
            let tabuadaTexto = `${valorzaum} x ${i} = ${resultado}`

            tabuada.push(tabuadaTexto)
        }

        setTabuadasas(tabuada)
    }
    return(
        <div className='ex11'>
            <Leito/>
            <Exe
            cor="#6533B7"
            titulo="Exercício 11 - Tabuada" 
            texto="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”."
            />
            <div className='textoex11'> 
                <div className='exercicio11'>
                    <h2>Tabuada do:</h2>
                    <input type="text" placeholder='insira um número' onChange={e=>setValorzaum(e.target.value)}/>
                    <button onClick={calcularTabuada}>Executar</button>
                </div>
                {
                    tabuadasas.map(
                        linha =><li>{linha}</li>
                    )
                }
            </div>
        </div>
    )
}