const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv").config();
var path = require("path");

const passport = require("passport");

const initializePassport = require("./config/passport");

const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
const cors = require("cors");

const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");

const UserSchema = require("./Schemas/UserSchema");

const User = mongoose.model("User", UserSchema);

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

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: "mySessions",
});

const app = express();
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(
    session({
        name: "UserSess",
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "none",
            secure: true,
            httpOnly: true,
        },
    })
);

// Initialize passport and configure the authentication strategy
//initializePassport(passport);

app.use(express.json()); //  To get json and urlencoded data
app.use(express.urlencoded({extended: "false"})); //  in response object

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/images", require("./routes/imageRoutes")); //Image related routes
app.use("/api/auth", require("./routes/authRoutes")); //User authentication routes
app.use("/api/gen", require("./routes/genRoutes")); //General routes

app.listen(port, () => console.log(`Server started on port ${port}`));
