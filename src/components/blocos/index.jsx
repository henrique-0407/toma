import './index.scss';
import { Link } from 'react-router-dom';

export default function Bloco(props){
    return(
        <div className='blocos'>
        <Link className='brabo' to={props.link}>
          <div className="q1">
          <img src={props.img} alt="" />
          <h2>
            {props.titulo}
          </h2>
          <p>{props.texto}</p>
          
        </div>
        </Link>
        </div>
    )
}

