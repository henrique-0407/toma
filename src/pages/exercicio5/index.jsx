import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';

export default function Exum5(){

    const[nota1,setNota1]= useState(0);
    const[nota2,setNota2]= useState(0);
    const[nota3,setNota3]= useState(0);
    const[media,setMedia]= useState(0);
    const[passou,setPassou]= useState(false);

    function calculos(){
        let medias = (Number(nota1)+Number(nota2)+Number(nota3))/3;

        setMedia(medias.toFixed(2));
        if(medias>=6){
            setPassou(true);
        }
    }
    return(
        <div className='ex5'>
            <Leito/>
            <Exe
            cor="#CB37FF"
            titulo="Exercício 05 - Média de notas" 
            texto="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"
            />
            <div className='textoex5'> 
                <div className='exercicio5'>
                    <h2>Nota 01</h2>
                    <input type="text" placeholder='insira um texto' onChange={e=>setNota1(e.target.value)}/>
                    <h2>Nota 02</h2>
                    <input type="text" placeholder='0' onChange={e=>setNota2(e.target.value)}/>
                    <h2>Nota 03</h2>
                    <input type="text" placeholder='0' onChange={e=>setNota3(e.target.value)}/>
                    <button onClick={calculos} >Executar</button>
                </div>
                <li>{`A média do aluno é ${media}
                o aluno passou? ${passou}`}</li>
            </div>
        </div>
    )
}