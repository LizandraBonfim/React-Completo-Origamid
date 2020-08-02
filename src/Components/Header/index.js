import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/dogs.svg';
import { UserContext } from '../../UserStorage';



function Header() {

    const { data } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                {data
                    ? <Link className={styles.login} to="/conta">
                        {data.nome}

                    </Link>
                    : <Link className={styles.login} to="/login">
                        Login | Cadastro
                     </Link>}

            </nav>
        </header>
    )
}

export default Header
