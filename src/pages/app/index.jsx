
import './index.scss';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <div className="pagina-inicial">
      <header>
        <div className='imagek'>
          <img src="/assets/img/image1.png" alt="" />
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
        <div class="q1">
          <h2>
            Cumpom de desconto
          </h2>
          <p>Exercício 01</p>
          <img src="/public/assets/img/verde.png" alt="" />
        </div>

        <div class="q2">
          <h2>
            Converter Kg/gramas
          </h2>
          <p>Exercício 02</p>
          <img src="/public/assets/img/amarelo.png" alt="" />
        </div>
        
        <div class="q3">
          <h2>
            valor total por quantidade
          </h2>
          <p>Exercício 03</p>
          <img src="/public/assets/img/azul.png" alt="" />
        </div>
        </div>
        
      </div>
    </div>
  );
}

