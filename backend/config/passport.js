const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const UserSchema = require("../Schemas/UserSchema");
const User = mongoose.model("User", UserSchema);

const initializePassport = (passport) => {
    passport.serializeUser(function (user, cb) {
        process.nextTick(function () {
            cb(null, {id: user.id, username: user.username});
        });
    });

    passport.deserializeUser(function (user, cb) {
        process.nextTick(function () {
            return cb(null, user);
        });
    });
    passport.use(
        new LocalStrategy(
            {
                usernameField: "username",
                passwordField: "password",
            },
            async (username, password, done) => {
                try {
                    // Implement your authentication logic here
                    // Fetch the user from the database based on the provided username
                    const user = await User.findOne({username});

                    if (!user) {
                        return done(null, false, {message: "Incorrect username"});
                    }

                    // Compare the provided password with the hashed password stored in the user object
                    const isPasswordValid = await bcrypt.compare(password, user.password);

                    if (!isPasswordValid) {
                        return done(null, false, {message: "Incorrect password"});
                    }
                    return done(null, user);
                } catch (error) {
                    return done(error);
                }
            }
        )
    );
};

module.exports = initializePassport;
