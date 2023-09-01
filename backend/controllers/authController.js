const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const { useHistory } = require('react-router-dom');

const UserSchema = require("../Schemas/UserSchema");

const User = mongoose.model('User',UserSchema);

//@desc   =     log in user
//@route  =     POST /api/login
//@access =     Public
const loginUser = (req, res) => {
    res.status(200).json({message: "Logged In"});
};

//@desc   =     log out user
//@route  =     POST /api/logout
//@access =     Public
const logoutUser = (req, res) => {
    res.status(200).json({message: `Logged Out`});
};

//@desc   =     sign up user (create a user)
//@route  =     POST /api/signup
//@access =     Public
const signupUser = (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        // Check if username, email, and password are provided
        if (!username || !email || !password) {
          return res.status(400).json({ error: 'Username, email, and password are required' });
        }
    
        // Check if username is valid (e.g., alphanumeric with minimum length of 3 characters)
        if (!/^[a-zA-Z0-9]{3,16}$/.test(username)) {
          return res.status(400).json({ error: 'Invalid username' });
        }
    
        // Check if email is valid
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return res.status(400).json({ error: 'Invalid email address' });
        }
    
        // Check if password meets the requirements (e.g., minimum length of 6 characters)
        if (password.length < 6) {
          return res.status(400).json({ error: 'Password should have at least 6 characters' });
        }
    
        User.findOne({ email: email }).then((existingEmail) => {
            if (existingEmail) {
              return res.status(400).json({ error: 'User with the provided email already exists!' });
            }
            User.findOne({ username: username }).then((existingUsername) => {
                if (existingUsername) {
                  return res.status(400).json({ error: 'Username is taken!' });
            }
              const user = new User({
                username: username,
                email: email,
                password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
              });
          
              user
                .save()
                .then((user) => {
                  res.status(200).json({ message: 'User created successfully', user: user });
                })
                .catch((err) => {
                  res.status(400).json({ error: err.message });
                });
            });
          });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    loginUser,
    logoutUser,
    signupUser
};
