import React, { Suspense, use } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import ManageEventsList from './ManageEventsList';
import { manageEventsPromise } from '../../api/manageEventsApi';


const ManageEvents = () => {
  const { user } = use(AuthContext);

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <Lottie animationData={loadingAnimation} loop className="w-48" />
      </div>
    }>
      <ManageEventsList manageEventsPromise={manageEventsPromise(user.email)} />
    </Suspense>
  );
};

export default ManageEvents;
