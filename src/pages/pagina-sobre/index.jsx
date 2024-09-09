
import './index.scss';
import Leito from '../../components/faixa';

export default function Sobre() {
  return (
    <div className="pagina-inicial">
       <Leito/>

    <div class="titulo">
        <h2>
            Sobre
        </h2>
    </div>

    <div class="texto">
        <p>
            Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. 
        </p>
        <br />
        <p>
          Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br />
          Estamos ansiosos para ver seu progresso e sucesso!
        </p>
        <img src="./assets/img/frei.png" alt=""/>
    </div>
    
    </div>
  );
}
