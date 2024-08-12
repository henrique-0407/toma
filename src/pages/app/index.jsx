
import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-inicial">
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

      <div className="conteudo">
        <h1>
          Escolha um treino...
        </h1>
        <div className='blocos'>
        <Link className='brabo' to="/ex1">
          <div className="q1">
          <img src="/assets/img/amarelo.png" alt="" />
          <h2>
            Cumpom de desconto
          </h2>
          <p>Exercício 01</p>
          
        </div>
        </Link>
        <div className="q2">
          <img src="/assets/img/verde.png" alt="" />
          <h2>
            Converter Kg/gramas
          </h2>
          <p>Exercício 02</p>
          
        </div>
        
        <div className="q3">
          <img src="/assets/img/azul.png" alt="" />
          <h2>
            valor total por quantidade
          </h2>
          <p>Exercício 03</p>
          
        </div>
        </div>
        
      </div>
    </div>
  );
}

