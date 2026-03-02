import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Trust from '../Trust/Trust';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {

    const fetchData = fetch('datas.json').then(res => res.json())

    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <Suspense fallback={<span className="loading loading-ring loading-xl text-center"></span>}>
                <TrendingApps fetchData={fetchData}/>
            </Suspense>
        </div>
    );
};

export default Home;