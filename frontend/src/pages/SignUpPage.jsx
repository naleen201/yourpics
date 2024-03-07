import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

function SignUpPage() {
    const navigateTo = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState(null);
    
    const [isHovered, setIsHovered] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const fileUrl = URL.createObjectURL(file);
        setSelectedFileUrl(fileUrl);
    }
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
        const userData = new FormData();
        userData.append('profilePicture', selectedFile); // selectedFile should be the File object from your file input
        userData.append('username', username);
        userData.append('email', email);
        userData.append('password', password);
        // Send POST request to the server
        axios
            .post(import.meta.env.VITE_API_URL + "/auth/signup", userData)
            .then((response) => {
                navigateTo("/login");
            })
            .catch((error) => {
                setError(error.response);
            });
    };

    const fileInputStyle = {
        display: 'none',
      };
    
      const labelStyle = {
        display: 'inline-block',
        padding: '10px',
        cursor: 'pointer',
        borderRadius: '50%',
        background: selectedFileUrl ? `url(${selectedFileUrl}) center/cover` : isHovered ? '#d0d0d0' : '#f0f0f0',
        textAlign: 'center',
        width: '100px',
        height: '100px',
        lineHeight: '100px',
        color: '#000',
        fontSize: '50px',
        transition: 'background 0.3s ease-in-out'
      };
    return (
        <form id="signUpForm" onSubmit={handleSubmit} encType="multipart/form-data">
            <div id="formFieldsContainer">
                <h1>Create an Account</h1>
                {error && <p id="errorMessage">{error}</p>}
                <label htmlFor="profilePicture" style={labelStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {selectedFileUrl ? '' : '+'}
                </label>
                <p style={{fontSize:'12px'}}>Add profile picture</p>
                <br/>
                <input type="file" id="profilePicture" name="profilePicture" accept=".jpg, .jpeg, .gif" onChange={(e) => handleImageUpload(e)} style={fileInputStyle}/>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}

export default SignUpPage;
