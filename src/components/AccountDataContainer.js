import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import AccountData from './AccountData';

const AccountDataContainer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="account-data-container">
      <AccountData user={user} />
    </div>
  );
};

export default AccountDataContainer;
