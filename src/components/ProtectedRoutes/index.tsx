import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(GiveContextAuthorization);
  console.log(user);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return null;
  }
  return <>{user ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default ProtectedRoutes;
