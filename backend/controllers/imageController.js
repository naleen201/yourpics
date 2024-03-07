const mongoose = require("mongoose");

const UserLoginDetailsSchema = require("../Schemas/UserSchema");
const UserLoginDetails = mongoose.model("userLoginDetails", UserLoginDetailsSchema);

const ImagesByUsersSchema = require("../Schemas/ImageSchema");
const ImagesByUsers = mongoose.model("imagesByUsers", ImagesByUsersSchema);

const ImageDetailsSchema = require("../Schemas/ImageDetailsSchema");
const ImageDetails = mongoose.model("imageDetails", ImageDetailsSchema);

//@desc   =     get all images
//@route  =     GET /api/images
//@access =     Private
const getImages = async (req, res) => {
    try {
        const images = await ImagesByUsers.find({ imageType: "image" }).sort({ _id: -1 }).limit(10).populate("userId");
        
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: "Failed to get images" });
    }
};

//@desc   =     get image with id
//@route  =     GET /api/images/:id
//@access =     Private
const getImageById = (req, res) => {
    res.status(200).json({message: `Image with IMAGE_ID: ${req.params.id}`});
};

//@desc   =     post image('s)
//@route  =     POST /api/images
//@access =     Private
const postImage = (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error("Please add an image to upload.");
    }
    if(req.file){
        const {userId, tags} = req.body;
        const img = req.file;
        const imageTags = tags.split(",");
        const image = new ImagesByUsers({
            userId: userId,
            imageId: img.key,
            imageType: "image",
            imageURL: img.location,
        });
        image.save().then((result) => {
            const imageDetails = new ImageDetails({
                userId: userId,
                imageId: result._id,
                imageType: "image",
                imageURL: img.location,
                imageTag: imageTags,
            });
            imageDetails.save().then((result) => {
            }).catch((err) => {
                console.log(err);
            });
            res.status(201).json({message: "Image added!"});
        }).catch((err) => { 
            console.log(err);
        });
    } else {
        res.status(400);
        throw new Error("Error saving image.");
    }
};

//@desc   =     update(PUT) image with id
//@route  =     PUT /api/images/:id
//@access =     Private
const updateImage = (req, res) => {
    res.status(200).json({message: `Image Updated IMAGE_ID: ${req.params.id}`});
};

//@desc   =     delete image with id
//@route  =     DELETE /api/images/:id
//@access =     Private
const deleteImage = (req, res) => {
    res.status(200).json({message: `Image Deleted IMAGE_ID: ${req.params.id}`});
};

//@desc   =     Get number of images with same tag
//@route  =     GET /api/images/:tag&:count
//@access =     Private
const getImageByTagAndCount = (req, res) => {
    res.status(200).json({message: `Image with TAG : ${req.params.tag} Number of Images: ${req.params.count}`});
};

//@desc   =     Get images by a user
//@route  =     GET /api/images/:userId
//@access =     Private
const getImagesByUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const images = await ImagesByUsers.find({ userId: userId }).sort({ _id: -1 });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: "Failed to get images" });
    }
};
module.exports = {
    getImages,
    getImageById,
    postImage,
    updateImage,
    deleteImage,
    getImageByTagAndCount,
    getImagesByUser,
};
