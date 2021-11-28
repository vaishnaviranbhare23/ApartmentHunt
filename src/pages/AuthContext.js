import React, { useEffect, useState, useContext, createContext } from "react";

const AuthStateContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [userAuthState, setUserAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    setUserAuth({
      isLoggedIn: false,
      user: null,
    });
  }, []);

  const setUserAuth = (authObject) => setUserAuthState(authObject);

  return (
    <AuthStateContext.Provider value={{ userAuthState, setUserAuth }}>
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthStateContext);
