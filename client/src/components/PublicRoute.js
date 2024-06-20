import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
