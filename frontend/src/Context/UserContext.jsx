import React, { createContext, useState } from 'react';

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = { user, setUser, isLoading, setIsLoading, error, setError };
  console.log("UserContext Value:", value);
  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
