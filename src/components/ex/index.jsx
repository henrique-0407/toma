import './index.scss';
import { Link } from 'react-router-dom';
export default function Exe(props){
    return(
        <div className='cabeca1'>
                <div className='cabeca'>
                    <Link className='volta' to="/">
                        <img src="/assets/img/seta.png" alt="" />
                    </Link>
                    <h1>{props.titulo}</h1>
                </div>
                <div className='linha'></div>
                <div className='emci'>
                    <p>
                        {props.texto}
                    </p>
                </div>
            </div>
    )
}