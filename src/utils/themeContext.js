import React from "react";
// create context
const ThemeContext = React.createContext(false);
// Provider
const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
