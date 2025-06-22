import React from 'react';
import Banner from '../Components/Banner/Banner';
import FeaturedEvents from '../Pages/FeaturedEvents/FeaturedEvents';
import Testimonials from '../Pages/Testimonials/Testimonials';
import PopularSports from '../Pages/FeaturedEvents/PopularSports';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedEvents></FeaturedEvents>
            <Testimonials></Testimonials>
            <PopularSports></PopularSports>
        </div>
    );
};

export default Home;