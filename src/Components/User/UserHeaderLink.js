import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserStorage';

import styles from './styles.module.css';

import { ReactComponent as Feed } from '../../assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg';
import { ReactComponent as Sair } from '../../assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

function UserHeaderLink() {
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');

    const [mobileMenu, setMobileMenu] = React.useState(false);

    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (

                <button
                    className={`${styles.btnMenuMobile} ${mobileMenu && styles.btnMenuMobileActive}`}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}>

                </button>
            )}
            <nav className={`${mobile ? styles.navMobile
                : styles.navUser} ${mobileMenu && styles.navMobileActive}`}>

                <NavLink to="/conta" end activeClassName={styles.active}>
                    <Feed />
                    {mobile && 'Minhas fotos'}
                </NavLink>

                <NavLink to="/conta/graph-statistics" activeClassName={styles.active}>
                    <Estatisticas />
                    {mobile && 'Estatisticas'}

                </NavLink>

                <NavLink to="/conta/new-post" activeClassName={styles.active}>
                    <AdicionarFoto />
                    {mobile && 'Adicionar Foto'}
                </NavLink>

                <button onClick={userLogout}>
                    <Sair />
                    {mobile && 'Sair'}
                </button>

            </nav>

        </>
    )
}

export default UserHeaderLink
