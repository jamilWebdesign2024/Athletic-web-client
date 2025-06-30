import React, { use} from 'react';
import { Navigate, useLocation } from 'react-router';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';  
import { AuthContext } from '../Contexts/AuthContext/authContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={loadingAnimation} style={{ width: 150, height: 150 }} />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
