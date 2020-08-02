import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET_URL } from '../../services/api';
import Error from '../Partials/Error';
import Loading from '../Partials/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Header/Head';


function Photo() {
    const { id } = useParams();
    console.log(id)
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        const { url, options } = PHOTO_GET_URL(id);
        request(url, options);

    }, [request, id]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <section className="container mainContainer">
                <Head title={data.photo.title} description={data.photo.title} />

                <PhotoContent single={true} data={data} />
            </section>
        )

    else return null;
}

export default Photo
