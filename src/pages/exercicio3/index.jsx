import Exe from '../../components/ex';
import Leito from '../../components/faixa';
import './index.scss';

export default function Exum3(){
    return(
        <div className='ex3'>
            <Leito/>
            <Exe
            titulo="Exercício 03 - Converter Kg/gramas" 
            texto="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente"
            />
            <div className='textoex'> 
                <div className='exercicio'>

                </div>
                <li>Resultado: o resultado é</li>
            </div>
        </div>
        
    )
}