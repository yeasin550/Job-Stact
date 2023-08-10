import React from 'react';
import Categories from './HomeChildren/Categories/Categories';
import LatestJobs from './HomeChildren/LatestJob/LatestJobs';

const Home = () => {
    return (
        <div>
            
            <Categories />
            <LatestJobs/>
        </div>
    );
};

export default Home;