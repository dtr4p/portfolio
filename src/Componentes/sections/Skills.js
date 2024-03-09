import styles from './Skills.module.css'
import Javascript from '../../Images/skills/java.svg'
import Html from '../../Images/skills/html.svg'
import Css from '../../Images/skills/css.svg'
import React from '../../Images/skills/react.svg'

function Skills(){
    return(
        <div className={styles.skillsDiv} id="skills">
           <h1>Habilidades</h1>
           <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
           <section>
                <img src={Javascript} alt=''></img>
                <img src={Html} alt=''></img>
                <img src={Css} alt=''></img>
                <img src={React} alt=''></img>
           </section>
        </div>
    )
}
export default Skills