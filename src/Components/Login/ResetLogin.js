import React, { useEffect, useState } from 'react';
import Input from '../Partials/Input';
import Button from '../Partials/Button';
import Error from '../Partials/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Head from '../Header/Head';


function ResetLogin() {
    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');
    const password = useForm();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');


        if (key) setKey(key);
        if (login) setLogin(login);

        console.log(key)
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if (password.validate()) {

            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value
            });

            const { response } = await request(url, options);

            if (response.ok) {
                navigate('/login');
            }
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Reset password" />

            <h1 className="title">Digite nova senha.</h1>
            <form onSubmit={handleSubmit}>

                <Input label="Nova senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Aguarde...</Button> : <Button >Resetar</Button>}
            </form>

            {error && <Error error={error} />}
        </section>
    )
}

export default ResetLogin
