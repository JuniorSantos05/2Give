import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(GiveContextAuthorization);

  if (loading) {
    return null;
  }
  return <>{user ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default ProtectedRoutes;
