import React, { useEffect } from 'react';
import UserHeaderLink from './UserHeaderLink';
import { useLocation } from 'react-router-dom';

import styles from './styles.module.css';

function UserHeader() {
    const [title, setTitle] = React.useState('');
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/conta/graph-statistics':
                setTitle('Estatisticas')
                break;

            case '/conta/new-post':
                setTitle('Adicionar Nova Foto')
                break;

            default:
                setTitle('Minha Conta')
                break;


        }

    }, [location]);

    return (
        <div className={styles.userHeader}>
            <h1 className="title">{title}</h1>
            <UserHeaderLink />
        </div>
    )
}

export default UserHeader
