const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json()); //  To get json and urlencoded data
app.use(express.urlencoded({extended: "false"})); //  in response object

app.use("/api/images", require("./routes/imageRoutes")); //Image related routes
app.use("/api/auth", require("./routes/authRoutes"));  //User authentication routes

app.listen(port, () => console.log(`Server started on port ${port}`));
