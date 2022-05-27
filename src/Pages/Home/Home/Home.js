import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ComingSoon from '../ComingSoon/ComingSoon';
import Items from '../Items/Items';


import Reviews from '../Reviews/Reviews';
import Progress from './Progress/Progress';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <BusinessSummary></BusinessSummary>
            <Progress></Progress>
            <Reviews></Reviews>
            <ComingSoon></ComingSoon>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;