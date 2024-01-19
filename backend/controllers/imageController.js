//@desc   =     get all images
//@route  =     GET /api/images
//@access =     Private
const getImages = (req, res) => {
    res.status(200).json({message: "All Images"});
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
    res.status(200).json({message: "Images added!"});
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
const getImagesByUser = (req, res) => {
    res.status(200).json({message: `Images with User ID : ${req.params.userId}`});
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
