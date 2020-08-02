import React from 'react';
import styles from './styles.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../services/api';
import Loading from '../Partials/Loading';
import Error from '../Partials/Error';
import PhotoContent from '../Photo/PhotoContent';


function FeedModal({ photo, setModalPhoto }) {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {

        const { url, options } = PHOTO_GET(photo.id);

        request(url, options);

    }, [photo, request]);

    function handleOutside(event) {
        if (event.target === event.currentTarget) setModalPhoto(null);

    }



    return (
        <div className={styles.modal} onClick={handleOutside}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal
