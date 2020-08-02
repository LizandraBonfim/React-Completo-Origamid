import React from 'react';
import styles from './styles.module.css';
import { ReactComponent as FooterImg } from '../../assets/dogs-footer.svg';


function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterImg />
            <p>
                @ Direitos reservados | 2020.
            </p>
        </footer>
    )
}

export default Footer
