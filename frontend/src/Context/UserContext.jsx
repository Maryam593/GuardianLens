import React, { createContext, useState, useEffect } from 'react';

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const value = { user, setUser };
  return <userDataContext.Provider value={value}>{children}</userDataContext.Provider>;
};

export default UserContext;
