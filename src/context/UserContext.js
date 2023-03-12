import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    if (!!user) {
      setUser(null);
      sessionStorage.removeItem('usuario');
    } else setUser(true);
  };

  const data = { user, setUser, login };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
