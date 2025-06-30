import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useManageEventsApi = () => {

    const axiosSecure = useAxiosSecure();

    const manageEventsPromise = email =>{
        return axiosSecure.get(`/events?creator_email=${email}`)
        .then(res=>res.data);

       
        
    }

    return {
       manageEventsPromise
    };
};

export default useManageEventsApi;


