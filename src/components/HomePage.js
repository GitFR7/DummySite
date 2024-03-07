import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

function HomePage() {
  const history = useHistory();
  const [textInput, setTextInput] = useState('');
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmitComment = () => {
    // Add the new comment to the comments array
    setComments([...comments, textInput]);
    // Clear the text input
    setTextInput('');
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
      <button onClick={handleSubmitComment}>Submit Comment</button>

      {/* Display the list of comments */}
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            // Use dangerouslySetInnerHTML to render the comment
            <li key={index} dangerouslySetInnerHTML={{ __html: comment }} />
          ))}
        </ul>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
