import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Slide, toast } from "react-toastify";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";

// !Do Not Uncomment The Below Line
// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

// *Firebase Authentication Initialization
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  // *State For User Data, Loading & Email
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailField, setEmailField] = useState("");

  // *Firebase New User Registration Function
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // *Firebase Update User Profile Function
  const updateUser = (updatedData) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  // *Firebase Google Sign-In Function
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // *Firebase Log-In Function
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // *Firebase Log-Out Function
  const userLogOut = () => {
    setLoading(true);
    // *Toastify Notification
    toast.error("Logged Out", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    return signOut(auth);
  };

  // *Firebase User Password Update Function
  const updateUserPassword = (email) => {
    // setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // *Context API Information Object
  const userInfo = {
    user,
    setUser,
    createNewUser,
    updateUser,
    createUserWithGoogle,
    userLogIn,
    userLogOut,
    updateUserPassword,
    emailField,
    setEmailField,
    loading,
    setLoading,
  };

  // *Firebase Authentication State Change Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // *Loading Spinner
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // *Pass The Context Object To The Children Components
  return <Context.Provider value={userInfo}>{children}</Context.Provider>;
};

export default ContextProvider;

// *PropTypes Validation
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
