import React from 'react';
import Input from '../Partials/Input';
import Button from '../Partials/Button';
import Error from '../Partials/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../services/api';
import Head from '../Header/Head';

function LoginPasswordLost() {

    const login = useForm();
    const { data, loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();

        if (login.validate()) {

            const { url, options } = PASSWORD_LOST({ login: login.value, url: 'http://localhost:3000/login/reset' });

            //OU window.location.href.replace('perdeu', 'resetar');

            const { json } = await request(url, options);
            console.log(json);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Perdeu a senha" />

            <h1 className="title">Esqueceu a senha?</h1>

            {data
                ? <p style={{ color: '#4c1' }}>{data}</p>
                : <form onSubmit={handleSubmit}>
                    <Input label="Email | Usuário" type="text" name="login" {...login} />
                    {loading ? <Button disabled>Aguarde...</Button> : <Button>Enviar email</Button>}
                </form>
            }

            {error && <Error error={error} />}
        </section>
    )
}

export default LoginPasswordLost
