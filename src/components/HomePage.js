// HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function HomePage() {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the authentication token cookie
    Cookies.remove('authToken');
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
