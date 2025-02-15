import PropTypes from "prop-types";
import { createContext } from "react";
import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {

  // const [user, setUser] = useState(null)
  
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userInfo = {
    createNewUser
  }

  return <Context.Provider value={userInfo}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
