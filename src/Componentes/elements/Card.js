import style from './Card.module.css'
import Lpdnc from '../../Images/projects/lpdnc.svg'
import ButtonB from './ButtonB'

function Card({title, techs, link, image}){
    return(
        <div className={style.Cards}>
            <img src={image}/>
            <div className={style.desc}>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong></p><p>{techs}</p>
                <a target='_blank' href={link}><ButtonB text='Acesse o repositório'></ButtonB></a>
            </div>
        </div>
    )
}

export default Card