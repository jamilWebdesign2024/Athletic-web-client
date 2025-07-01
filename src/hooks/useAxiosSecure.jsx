import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/authContext';

const axiosInstance = axios.create({
    baseURL: 'https://athletic-club-server.vercel.app'
})

const useAxiosSecure = () => {

    const {user, signOutUser}=use(AuthContext)

    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    axiosInstance.interceptors.response.use(response=>{
        return response;
    }, error=>{
        if(error.status === 401){
           signOutUser()
           .then(()=>{
            console.log('sign out user for 401 status code');
            })
            .catch(err=>{
                console.log(err);
            })
        }
        console.log('error in interceptor', error);
        
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;