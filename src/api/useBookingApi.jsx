import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useBookingApi = () => {
    const axiosSecure = useAxiosSecure();

    const myBookingsPromise = email =>{
        return axiosSecure.get(`/bookings?email=${email}`)
        .then(res =>res.data)
    }

    return {
        myBookingsPromise
    };
};

export default useBookingApi;