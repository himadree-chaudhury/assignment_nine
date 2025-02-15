import PropTypes from "prop-types";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const createUserWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const userLogIn = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password)
}

  const userInfo = {
    user,
    setUser,
    createNewUser,
    updateUser,
    createUserWithGoogle,
    userLogIn,
  };

  return <Context.Provider value={userInfo}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
