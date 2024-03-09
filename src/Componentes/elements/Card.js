import style from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({title, techs, link, image}){

    const [info, setInfo] = useState(false)
    function showInfo(){
        setInfo(true)
    };
    function hideInfo(){
        setInfo(false)
    }


    return(
        <div onMouseLeave={hideInfo} className={style.Cards}>
            <a target='_blank' href={link}><img onMouseEnter={showInfo} src={image}/></a>

            {info === true &&(
                        <div onMouseEnter={showInfo} className={style.desc}>
                            <h3>{title}</h3>
                            <p><strong>Tecnologias:</strong></p><p>{techs}</p>
                            <a target='_blank' href={link}><ButtonB text='Ver projeto'></ButtonB></a>
                        </div>
            )}

        </div>
    )
}

export default Card