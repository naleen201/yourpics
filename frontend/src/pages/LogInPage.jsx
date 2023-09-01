import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv'

function LogInPage() {
    const navigateTo = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validate username
      const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
      if (!usernameRegex.test(username)) {
        setError("Username must be 3-16 characters long and can only contain alphanumeric characters and underscores.");
        return;
      }

      // Validate password
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      //Creating user object to send to server
      const user = {
        username: username,
        password: password
      }
      // Send POST request to the server
      axios.post(import.meta.env.VITE_API_URL + '/auth/login',user)
        .then((response) => {
            navigateTo('/');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
      <form id='LogInForm' onSubmit={handleSubmit}>
        <div id='formFieldsContainer'>
          <h1>LogIn</h1>
          {error && <p>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            pattern="^[a-zA-Z0-9_]{3,16}$"
            title="Username must be 3-16 characters long and can only contain alphanumeric characters and underscores."
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            title="Password must be at least 6 characters long."
            required
          />
          <button type="submit">LogIn</button>
          </div>
      </form>
    );
}

export default LogInPage