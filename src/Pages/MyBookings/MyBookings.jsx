import React, { Suspense, use} from 'react';
import MyBookingList from './MyBookingList';
import loadingAnimation from '../../assets/loading.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import useBookingApi from '../../api/useBookingApi';


const MyBookings = () => {

    const {user}=use(AuthContext);
    const {myBookingsPromise}=useBookingApi();

    console.log('token in the context', user.accessToken);
    



return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                <Lottie animationData={loadingAnimation} loop className="w-48" />
            </div>}>
                <MyBookingList myApplicationsPromise={myBookingsPromise(user.email)}></MyBookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;