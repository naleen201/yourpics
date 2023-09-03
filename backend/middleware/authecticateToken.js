const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
    // Get the token from the request headers or cookies
    const token = req.headers.authorization || req.cookies.token;
    if (!token) {
        // Token is not present, user is not authenticated
        return res.status(401).json({error: "Unauthorized"});
    }
    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Check if the token has expired
        const currentTimestamp = Math.floor(Date.now() / 1000); // in seconds
        if (decoded.exp <= currentTimestamp) {
            res.clearCookie("token", {
                path: "/",
            });
            // Token has expired, user is not authenticated
            return res.status(401).json({error: "Token has expired! Login again."});
        }
        // Attach the decoded user information to the request object
        req.user = decoded;
        // User is authenticated, proceed to next middleware or route handler
        next();
    } catch (error) {
        // Token verification failed, user is not authenticated
        return res.status(401).json({message: "Invalid token"});
    }
};
module.exports = authenticateToken;
