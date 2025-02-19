import { useContext } from "react";
import { Context } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  // * Context API State & Function
  const { user, loading } = useContext(Context);

  // *Passing The Current Location
  const location = useLocation();

  if (loading) {
    // *Loading Spinner
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  // *Redirect To The Log-In Page If User Is Not Logged In & Return To The Current Page After Log-In
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;

// *PropTypes Validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
