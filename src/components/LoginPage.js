// LoginPage.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform authentication here (e.g., API call)
    // On success:
    try {
      // Replace this with your actual authentication API call
      const response = { ok: true};

      if (response.ok) {
        console.log('Authentication successful');
        Cookies.set('authToken', '12345678');
        history.push('/home');
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  useEffect(()=> {
    const authToken = Cookies.get( 'authToken' );
    if (authToken) {
      history.push('/home');
    }
  }, [history]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
