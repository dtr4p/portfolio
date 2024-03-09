import {useEffect, useState} from 'react'
import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['o Pedro Dutra!', 'Desenvolvedor Front-End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 120;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presentation} id="presentation">
                <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
                <h1>Olá, eu sou {text}</h1>
                <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br/> 
                Como Desenvolvedor Front-End, eu me comprometo a criar<br/> 
                interfaces modernas e responsivas, que sejam intuitivas e fáceis de se utilizar.<br/> 
                Estou sempre em busca de inovar e evoluir, através de novos desafios.</p>
                <ButtonA link='https://github.com/dtr4p' text='Conecte-se comigo'></ButtonA>
        </div> 
        
    )
}
export default Presentation