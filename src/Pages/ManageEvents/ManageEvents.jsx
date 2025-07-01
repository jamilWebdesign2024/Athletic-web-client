import React, { Suspense} from 'react';
import Lottie from 'lottie-react';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import ManageEventsList from './ManageEventsList';


const ManageEvents = () => {
   
  return (
    <ManageEventsList></ManageEventsList>
  );
};

export default ManageEvents;
