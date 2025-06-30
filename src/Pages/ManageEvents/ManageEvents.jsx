import React, { Suspense} from 'react';
import Lottie from 'lottie-react';
// import loadingAnimation from '../../assets/loading.json';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
// import ManageEventsList from './ManageEventsList';
// import { manageEventsPromise } from '../../api/manageEventsApi';
// import useManageEventsApi from '../../api/useManageEventsApi';
import ManageEventsList from './ManageEventsList';


const ManageEvents = () => {
   
  return (
    <ManageEventsList></ManageEventsList>
  );
};

export default ManageEvents;
