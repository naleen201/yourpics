const mongoose = require("mongoose");

const UserSchema = require("../Schemas/UserSchema");

const User = mongoose.model("User", UserSchema);

const getDetails = async (req, res) => {
    try {
        const user = await User.findOne({username: req.user.username});
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {getDetails};
