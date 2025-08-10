import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import RouteTitleUpdater from '../RouterTitleUpdater/RouterTitleUpdater';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Navbar></Navbar>
            <RouteTitleUpdater />
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;