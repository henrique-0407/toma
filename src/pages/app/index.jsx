
import Leito from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Bloco from '../../components/blocos';


export default function App() {
  let props = [
    {
      cor: "/assets/img/amarelo.png",
      link:"/ex1",
      titulo: "Cupom de desconto",
      texto: "Exercicio 1"
    },
    {
      link:"/ex2",
      titulo:"Converter KG/gramas",
      texto:"Exercicio 2",
      cor: "/assets/img/verde.png"
    },
    {
      link:"/ex3",
      titulo:"Valor total por quantidade",
      texto:"Exercicio 3",
      cor: "/assets/img/ciano.png"
    },
]
  return (
    <div className="pagina-inicial">
      <Leito/>
      <div className="conteudo">
        <h1>
          Escolha um treino...
        </h1>
        <div className='lage'>
          {
          props.map (c=>
            <Bloco
            link={c.link}
            titulo={c.titulo}
            texto={c.texto}
            img= {c.cor}
            />
          )
          }

        </div>
        
        
      </div>
    </div>
  )
}

