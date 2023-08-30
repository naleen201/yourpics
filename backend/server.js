const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");

const mongoose = require('mongoose');

try{
    const client = mongoose.connect('mongodb://127.0.0.1:27017/yourpics').then((conn) => {
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    });
} catch(err) {
    console.log(err);
}

const app = express();
app.use(cors());



app.use(express.json()); //  To get json and urlencoded data
app.use(express.urlencoded({extended: "false"})); //  in response object

app.use("/api/images", require("./routes/imageRoutes")); //Image related routes
app.use("/api/auth", require("./routes/authRoutes"));  //User authentication routes

app.listen(port, () => console.log(`Server started on port ${port}`));
