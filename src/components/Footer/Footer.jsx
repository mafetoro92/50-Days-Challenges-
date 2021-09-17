import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.containerFooter}>
            <p>© 2021 MFT los derechos reservados.</p>
            <div className={styles.containerLinks}>
                <a className={styles.link} href="https://github.com/mafetoro92"><FaGithubSquare/></a>
                <a className={styles.link} href="https://www.linkedin.com/in/maria-toro-5a0339201/"><FaLinkedin/></a>
                <a className={styles.link} href="https://twitter.com/MafeToro7"><FaTwitterSquare/></a>
            </div>
            
        </div>
    )
}

export default Footer
