import './index.scss';
import { Link } from 'react-router-dom';

export default function Blocs(props){
    return(
        <div className='bloco'>
        <Link className='brabo' to={props.link}>
          <div className="q1">
          <img src={props.img} alt="" />
          <h2>
            {props.titulo}
          </h2>
          <p>props.texto</p>
          
        </div>
        </Link>
        </div>
    )
}