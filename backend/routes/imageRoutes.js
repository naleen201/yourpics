const express = require("express");
const router = express.Router();
const {getImages, getImageById, postImage, updateImage, deleteImage, getImageByTagAndCount, getImagesByUser} = require("../controllers/imageController");

router.route("/").get(getImages).post(postImage);
router.route("/:id").get(getImageById).put(updateImage).delete(deleteImage);
router.route("/users/:userId").get(getImagesByUser);
router.route("/:tag/:count").get(getImageByTagAndCount);
//#region Routes Info

//To GET all images
//router.get("/", getImages);

//To GET a specific image
//router.get("/:id", getImageById);

//To POST or ADD an image
//router.post("/", postImage);

//To Update an image
//router.put("/:id", updateImage);

//To DELETE an image
//router.delete("/:id", deleteImage);

//router.get("/:tag", (req, res) => {
//    res.send(`IMAGE_TAG: ${req.params.tag}`);
//});
//
//router.get("/:tag&:count", (req, res) => {
//    res.send(`IMAGE_TAG: ${req.params.tag}
//    IMAGE_COUNT: ${req.params.count}`);
//});

//#endregion

module.exports = router;