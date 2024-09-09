
import Leito from '../../components/faixa';
import './index.scss';
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
    {
      link:"/ex4",
      titulo:"Leitura de livro",
      texto:"Exercicio 4",
      cor: "/assets/img/azulado.png"
    },
    {
      link:"/ex5",
      titulo:"Média de notas",
      texto:"Exercicio 5",
      cor: "/assets/img/roxo.png"
    },
    {
      link:"/ex10",
      titulo:"Calculo de IMC com histórico",
      texto:"Exercicio 10",
      cor: "/assets/img/marrom.png"
    },
    {
      link:"/ex11",
      titulo:"Tabuada",
      texto:"Exercicio 11",
      cor: "/assets/img/azules.png"
    }
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

