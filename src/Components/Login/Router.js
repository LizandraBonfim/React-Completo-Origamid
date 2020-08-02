import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CreateLogin from './CreateLogin';
import ResetLogin from './ResetLogin';
import FormLogin from './FormLogin';
import LoginPasswordLost from './LoginPasswordLost';
import { UserContext } from '../../UserStorage';

import styles from './styles.module.css';
import NotFound from '../../services/NotFound';


function Router() {

    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/conta" />

    return (
        <section className={styles.login}>
            <div className={styles.forms}>

                <Routes>
                    <Route path="/" element={<FormLogin />} />
                    <Route path="create" element={<CreateLogin />} />
                    <Route path="esqueci-senha" element={<LoginPasswordLost />} />
                    <Route path="reset" element={<ResetLogin />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </div>
        </section>
    )
}

export default Router
