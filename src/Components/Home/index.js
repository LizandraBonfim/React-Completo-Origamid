import React from 'react';
import Feed from '../Feed/Feed';
import Head from '../Header/Head';

function Home() {
    return (
        <section className="container mainContainer">
            <Head title="Photos" description="Home page" />
            <Feed />
        </section>
    )
}

export default Home;