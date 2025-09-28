import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CineShare</title>
            </Helmet>
            <p>Home Page</p>
        </div>
    );
};

export default Home;