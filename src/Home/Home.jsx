import React from 'react';
import Banner from '../Components/Banner/Banner';
import FeaturedEvents from '../Pages/FeaturedEvents/FeaturedEvents';
import Testimonials from '../Pages/Testimonials/Testimonials';
import Contact from '../Pages/Contact/Contact';
import Recent from '../Pages/Recent/Recent';
import Sales from '../Pages/Sales/Sales';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedEvents></FeaturedEvents>
            <Recent></Recent>
            <Sales></Sales>
            <Testimonials></Testimonials>
            
            <Contact></Contact>
        </div>
    );
};

export default Home;