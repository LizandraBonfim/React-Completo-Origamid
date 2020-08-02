import React, { useEffect } from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../services/api';
import Error from '../Partials/Error';
import Loading from '../Partials/Loading';
import styles from './styles.module.css';


function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {

    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhoto() {
            const total = 3;
            const { url, options } = PHOTOS_GET({ page, total, user });

            const { response, json } = await request(url, options);

            if (response && response.ok && json.length < total) setInfinite(false);



        }
        fetchPhoto();
    }, [request, user, page, setInfinite]);

    if (error) return <Error error={error} />;

    if (loading) return <Loading />;

    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>

                {data.map(photo =>
                    <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                )}

            </ul>
        );


    else return null;
}

export default FeedPhotos
