import React from 'react';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../services/api';
import Error from '../Partials/Error';
import styles from './styles.module.css';


function PhotoCommentsForm({ id, setComments, single }) {

    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();

        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);


        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json])
        }
    }

    return (
        <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea}
                id="comment"
                value={comment}
                onChange={({ target }) => setComment(target.value)}
                name="comment"
                placeholder="Comente..."
            />


            <button className={styles.button} >
                <Enviar />
            </button>

            <Error error={error} />

        </form>
    )
}

export default PhotoCommentsForm;
