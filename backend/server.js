const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv").config();
var path = require("path");

const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
const cors = require("cors");

const mongoose = require("mongoose");

try {
    const client = mongoose
        .connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        })
        .catch((error) => {
            console.log(`Error: ${error.message}`.red.bold);
            process.exit();
        });
} catch (err) {
    console.log(err);
}

const app = express();
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}));

app.use(express.json()); //  To get json and urlencoded data
app.use(express.urlencoded({extended: "false"})); //  in response object

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/images", require("./routes/imageRoutes")); //Image related routes
app.use("/api/auth", require("./routes/authRoutes")); //User authentication routes
app.use("/api/gen", require("./routes/genRoutes")); //General routes

app.listen(port, () => console.log(`Server started on port ${port}`));
