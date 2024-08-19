import './index.scss';
import { Link } from 'react-router-dom';
export default function Leito(){
    return(
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
    )
}