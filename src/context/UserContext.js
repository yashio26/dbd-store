import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* useEffect(() => {
    const session = sessionStorage.getItem('usuario');
    if (session) {
      console.log('hay datos en session');
      setUser(JSON.parse(session));
    } else console.log('no hay datos en session');
  }, [setUser]); */

  const data = { user, setUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
