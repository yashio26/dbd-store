import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const data = { user, setUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
