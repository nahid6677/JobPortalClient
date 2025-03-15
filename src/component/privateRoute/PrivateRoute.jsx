import React, { useContext } from "react";
import AuthContext from "../authContext/AuthContext";
import Loading from "../loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation()
// console.log(location)
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
