import './index.scss';
import { Link } from 'react-router-dom';

export default function Exum(){
    return(
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
            <div className='cabeca'>
                <Link className='volta' to="/">
                <img src="/assets/img/seta.png" alt="" />
                </Link>
                <h1>Exercício 01 - Cupom de desconto</h1>
            </div>
            <div className='linha'></div>
        </div>
    )
}