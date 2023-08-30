import React, {useState} from 'react'
import axios from 'axios'

function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
        username: username,
        email: email,
        password: password
      }
      axios.post('//localhost:5000/api/auth/signup',user)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
}

export default SignUpPage