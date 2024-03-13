import React, { createContext, useContext, useState } from 'react';

const DevModeContext = createContext({
  devMode: false,
  toggleDevMode: () => {},
});

export const DevModeProvider = ({ children }) => {
  const [devMode, setDevMode] = useState(false);

  const toggleDevMode = () => {
    setDevMode(!devMode);
  };

  return (
    <DevModeContext.Provider value={{ devMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
};

export const useDevMode = () => useContext(DevModeContext);
