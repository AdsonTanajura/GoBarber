import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface ProtectedRouteProps {
    isPrivate?: boolean;
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isPrivate, children }) => {

    const { user } = useAuth();
  
    const isSigned = !!user;

    console.log(user);
    console.log(isSigned);


    if (isPrivate && !isSigned) {
      console.log("Redirecting to login");
      return <Navigate to="/" />;
    }
  
    if (!isPrivate && isSigned) {
      console.log("Redirecting to dashboard");
      return <Navigate to="/dashboard" />;
    }

  return <>{children}</>;
};

export default ProtectedRoute;
