import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/dutra_lj/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/dtr4p' target='_blank'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/pedro-henrique-ramos-dutra-5b0b832a5/' target='_blank'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>pedro@agenciatopo.net</p>
            <p>Pedro Dutra © 2024</p>
        </div>
    )
}
export default Footer