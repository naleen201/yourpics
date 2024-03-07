const mongoose = require("mongoose");

const UserLoginDetailsSchema = require("../Schemas/UserSchema");
const UserLoginDetails = mongoose.model("userLoginDetails", UserLoginDetailsSchema);

const ImagesByUsersSchema = require("../Schemas/ImageSchema");
const ImagesByUsers = mongoose.model("imagesByUsers", ImagesByUsersSchema);

const getDetails = async (req, res) => {
    try {
        const userData = await UserLoginDetails.findOne({_id: req.params.userId});
        const imageData = await ImagesByUsers.findOne({userId: userData._id});
        let user = {};
        if(!imageData) {
            user = {
                _id: userData._id,
                username: userData.username,
                email: userData.email,
                imageURL: "",
            };
        } else {
            user = {
                _id: userData._id,
                username: userData.username,
                email: userData.email,
                imageURL: imageData.imageURL,
            };
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {getDetails};
