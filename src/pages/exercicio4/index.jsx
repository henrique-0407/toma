import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';

export default function Exum4(){
    const [nome,setNome] = useState('');
    const [totalP,setTotalP]= useState(0);
    const [tempo,setTempo]= useState(0);
    const [resul,setResul]= useState(0);


    function calculo(){
        let total = Number(totalP)*(Number(tempo)/3600)

        setResul(total);

        return resul

    }

    return(
        <div className='ex4'>
            <Leito/>
            <Exe
            cor="#37B7FF"
            titulo="Exercício 04 - Leitura de livro" 
            texto="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"
            />
            <div className='textoex4'> 
                <div className='exercicio4'>
                    <h2>Nome do livro</h2>
                    <input type="text" placeholder='insira um texto' onChange={e=>setNome(e.target.value)} />
                    <h2>Total de páginas</h2>
                    <input type="text" placeholder='0' onChange={e=>setTotalP(e.target.value)}/>
                    <h2>Tempo em segundos de leitura</h2>
                    <input type="text" placeholder='0' onChange={e=>setTempo(e.target.value)}/>
                    <button onClick={calculo}>Executar</button>
                </div>
                <li>{`Você lera ${nome} em ${resul}`}</li>
            </div>
        </div>
    )
}