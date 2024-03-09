import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import Lpdnc from '../../Images/projects/lpdnc.svg'
import Desafiodnc from '../../Images/projects/desafiodnc.svg'

function Projects(){
    return(
        <div className={styles.projects} id="projects">
            <h1>Projetos</h1><br/>
            <Card title='Landing Page DNC' techs='HTML, CSS, JavaScript' image={Lpdnc} link='https://lpdncteste.netlify.app/'></Card>
            <Card title='Desafio DNC' techs='HTML, CSS' image={Desafiodnc} link='https://desafio-01dnc.netlify.app/'></Card><br/>
            <ButtonB link='https://github.com/dtr4p?tab=repositories' text='Ver repositório completo'></ButtonB>
        </div>
    )
}
export default Projects