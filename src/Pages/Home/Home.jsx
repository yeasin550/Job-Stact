import React from 'react';
import ChooseWork from './ChooseWork/ChooseWork';
import Contact from './HomeChildren/Contact/Contact';
import BrowseJob from './HomeChildren/BrowseJobs/BrowseJob';
import Banner from './HomeChildren/Banner/Banner';
import PromotingCareer from './HomeChildren/PromotingCareer/PromotingCareer';
import NewsInsights from './HomeChildren/NewsInsights/NewsInsights';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <BrowseJob></BrowseJob>
            <ChooseWork></ChooseWork>
            <PromotingCareer />
            <NewsInsights/>
            <Contact></Contact>
        </div>
    );
};

export default Home;