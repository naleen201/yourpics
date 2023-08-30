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

//@desc   =     sign up user
//@route  =     POST /api/signup
//@access =     Public
const signupUser = (req, res) => {
    res.status(200).json({message: "Signed Up"});
};

module.exports = {
    loginUser,
    logoutUser,
    signupUser
};
