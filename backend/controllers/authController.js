const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

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
    try{
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        });
        user.save()
            .then((user) => {
            res.status(200).json({ user });
        })
            .catch((err) => {
            res.status(400).json({ error: err });
        });
    } catch(err) {
        console.error(err);
    }
};

module.exports = {
    loginUser,
    logoutUser,
    signupUser
};
