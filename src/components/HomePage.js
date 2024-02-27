import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function HomePage() {
  const history = useHistory();
  const [textInput, setTextInput] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(textInput);
  };

  const handleLogout = () => {
    // Clear the authentication token cookie
    Cookies.remove('authToken');
    history.push('/');
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <input
        type="text"
        value={textInput}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Submitted Text: {submittedText}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
