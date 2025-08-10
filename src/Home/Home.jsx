import React from 'react';
import Banner from '../Components/Banner/Banner';
import FeaturedEvents from '../Pages/FeaturedEvents/FeaturedEvents';
import Testimonials from '../Pages/Testimonials/Testimonials';
import Contact from '../Pages/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedEvents></FeaturedEvents>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;