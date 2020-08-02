import React from 'react'
import Input from '../Partials/Input';
import Button from '../Partials/Button';
import Error from '../Partials/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../services/api';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserStorage';
import Head from '../Header/Head';

function CreateLogin() {

    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const { userLogin } = React.useContext(UserContext);

    const { loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();

        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })

        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, email.value);

    }
    return (
        <div className="animeLeft">
            <Head title="Create logon" />
            <h1 className="title">
                Cadastre-se
            </h1>


            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" label="Usuário" {...username} />
                <Input type="email" name="email" label="Email" {...email} />
                <Input type="password" name="password" label="Password" {...password} />

                <Error error={error} />
                {loading
                    ? <Button disabled >Carregando...</Button>
                    : <Button >Cadastrar</Button>
                }
            </form>
        </div>
    )
}

export default CreateLogin
