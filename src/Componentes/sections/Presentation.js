import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id="presentation">
                <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
                <h1>Olá, eu sou o Pedro Dutra</h1>
                <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br/> 
                Como Desenvolvedor Front-End, eu me comprometo a criar<br/> 
                interfaces modernas e responsivas, que sejam intuitivas e fáceis de se utilizar.<br/> 
                Estou sempre em busca de inovar e evoluir, através de novos desafios.</p>
                <ButtonA link='https://github.com/dtr4p' text='Conecte-se comigo'></ButtonA>
        </div> 
        
    )
}
export default Presentation