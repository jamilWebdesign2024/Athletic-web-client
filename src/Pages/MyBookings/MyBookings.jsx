import React, { Suspense, use, useState } from 'react';
import MyBookingList from './MyBookingList';
import loadingAnimation from '../../assets/loading.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import { myApplicationsPromise } from '../../api/bookingsApi';

const MyBookings = () => {

    const {user}=use(AuthContext);




return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                <Lottie animationData={loadingAnimation} loop className="w-48" />
            </div>}>
                <MyBookingList myApplicationsPromise={myApplicationsPromise(user.email)}></MyBookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;