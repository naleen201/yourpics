import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import dotenv from "dotenv";

function SignUpPage() {
    const navigateTo = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
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

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
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
            email: email,
            password: password,
        };
        // Send POST request to the server
        axios
            .post(import.meta.env.VITE_API_URL + "/auth/signup", user)
            .then((response) => {
                navigateTo("/login");
            })
            .catch((error) => {
                setError(error.response.data.error);
            });
    };

    return (
        <form id="signUpForm" onSubmit={handleSubmit}>
            <div id="formFieldsContainer">
                <h1>Create an Account</h1>
                {error && <p id="errorMessage">{error}</p>}
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SignUpPage;
