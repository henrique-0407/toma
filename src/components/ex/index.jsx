import './index.scss';
import { Link } from 'react-router-dom';
export default function Exe(props){

    let Linha = {
        backgroundColor:props.cor || "#000"
    }
    return(
        <div className='cabeca1'>
                <div className='cabeca'>
                    <Link className='volta' to="/">
                        <img src="/assets/img/seta.png" alt="" />
                    </Link>
                    <h1>{props.titulo}</h1>
                </div>
                <div style={Linha}className='linha'></div>
                <div className='emci'>
                    <p>
                        {props.texto}
                    </p>
                </div>
            </div>
    )
}