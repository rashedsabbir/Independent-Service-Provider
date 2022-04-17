import React from 'react';
import Destination from '../Destination/Destination';
import Faq from '../Faq/Faq';
import HeroBanner from '../HeroBanner/HeroBanner';
import RecentTrips from '../RecentsTrips/RecentTrips';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <Destination></Destination>
            <RecentTrips></RecentTrips>
            <Faq></Faq>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;