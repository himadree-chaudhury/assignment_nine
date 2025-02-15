import { useContext } from "react";
import { Context } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(Context);

  const location = useLocation();

    if (loading) {
        return "wait"
    }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
