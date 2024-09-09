import './index.scss';
import Leito from '../../components/faixa';
import Exe from '../../components/ex';
import { useState } from 'react';

export default function Exum10(){

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
        <div className='ex10'>
            <Leito/>
            <Exe
            cor="#B75333"
            titulo="Exercício 10 - Calculo de IMC com histórico" 
            texto="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"
            />
            <div className='textoex10'> 
                <div className='exercicio10'>
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