import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Partials/Input';
import Button from '../Partials/Button';
import Error from '../Partials/Error';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserStorage';

import styles from './styles.module.css';
import Head from '../Header/Head';


function FormLogin() {

    const username = useForm();
    const password = useForm();
    const { userLogin, error, loading } = useContext(UserContext);



    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login" />

            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Username" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                <Error error={error && 'Dados incorretos.'} />

                {loading
                    ? <Button disabled>Carregando...</Button>
                    : <Button>Entrar</Button>
                }

            </form>
            <Link className={styles.perdeu} to="/login/esqueci-senha">
                Esqueci minha senha
            </Link>

            <div className={styles.cadastro}>
                <h1 className={styles.substitle}>Cadastre-se</h1>
                <p>Ainda não possui conta? Cadastre-se!</p>
                <Link className="button" to="/login/create">Cadastro</Link>
            </div>
        </section>
    )
}

export default FormLogin
