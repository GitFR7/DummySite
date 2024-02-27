import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove('authToken');
    history.push('/login');
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;