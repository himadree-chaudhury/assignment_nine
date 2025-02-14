
import PropTypes from "prop-types";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const info = {
    name: "salman",
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};