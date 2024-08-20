
import Leito from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Bloco from '../../components/blocos';


export default function App() {
  return (
    <div className="pagina-inicial">
      <Leito/>
      <div className="conteudo">
        <h1>
          Escolha um treino...
        </h1>
        <div className='lage'>
        <Bloco
        link="/ex1"
        titulo="Cupom de desconto"
        texto="Exercicio 1"
        img= "/assets/img/amarelo.png"
        />
        <Bloco
        link="ex2"
        titulo="Converter KG/gramas"
        texto="Exercicio 2"
        img= "/assets/img/verde.png"
        />
        <Bloco
        link="ex3"
        titulo="Valor total por quantidade"
        texto="Exercicio 3"
        img= "/assets/img/ciano.png"
        />
        </div>
        
        
      </div>
    </div>
  )
}

