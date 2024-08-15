import './index.scss';
import { Link } from 'react-router-dom';

export default function Exum() {
    return (
        <div className='ex1'>
            <header>
                <div className='imagek'>
                    <img src="/assets/img/frei.png" alt="" />
                    <h2>React FreiS</h2>
                </div>
                <div className='lincados'>
                    <nav>
                        <Link className='brabo' to="/">Inicio</Link>
                        <Link className='brabo' to="/sobre">Sobre</Link>
                    </nav>
                </div>
            </header>
            <div className='cabeca1'>
                <div className='cabeca'>
                    <Link className='volta' to="/">
                        <img src="/assets/img/seta.png" alt="" />
                    </Link>
                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>
                <div className='linha'></div>
                <div className='emci'>
                    <p>
                        Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.
                    </p>
                </div>
                
            </div>
            <div className='textoex'> 
                <div className='exercicio'>
                    <h2>Informe o valor do pedido</h2>
                    <input type="text" />
                    <h2>Informe o valor do cupom</h2>
                    <input type="text" />
                    <button>Executar</button>
                </div>
            </div>
        </div>
    )
}