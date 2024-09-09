import Exe from '../../components/ex';
import Leito from '../../components/faixa';
import './index.scss';

export default function Exum3(){
    
    return(
        <div className='ex3'>
            <Leito/>
            <Exe
            cor="#37FFF3"
            titulo="Exercício 04 - Converter Kg/gramas" 
            texto="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente"
            />
            <div className='textoex'> 
                <div className='exercicio'>
                    <div className='titu'>
                        <h2>Quantidade pequeno</h2>
                        <h2>Quantidade médio</h2>
                        <h2>Quantidade grande</h2>
                    </div>
                    <div className='inpu'>
                        <input placeholder='digite' type="text" />
                        <input placeholder='digite' type="text" />
                        <input placeholder='digite' type="text" />
                    </div>
                    <button>Executar</button>
                </div>
                    
                <li>Resultado: o resultado é</li>
            </div>
        </div>
        
    )
}