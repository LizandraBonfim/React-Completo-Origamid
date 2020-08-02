import React from 'react';
import { STATS_GET } from '../../services/api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Header/Head';
import Error from '../Partials/Error';
import Loading from '../Partials/Loading';
const UserStatsGrafics = React.lazy(() => import('./UserStatsGrafics'));

function GraphStatistics() {

    const { data, error, request, loading } = useFetch();

    React.useEffect(() => {

        async function getData() {

            const { url, options } = STATS_GET();
            await request(url, options);

        }
        getData()

    }, [request]);

    console.log(data)


    if (loading) return <Loading />
    if (error) return <Error error={error} />
    if (data)
        return (
            <React.Suspense className="animeLeft" fallback={<div></div>}>
                <Head title="Estatisticas" description="Graph Statistics" />

                <UserStatsGrafics data={data} />
            </React.Suspense>
        );

    else return null;

}

export default GraphStatistics
