const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        // Fix typo: it should be authHeader, not auth.Header
        token = authHeader.split(" ")[1];
    } else {
        res.status(401);
        throw new Error("User is not authorized");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401);
            throw new Error("User is not authorized");
        }
        console.log(decoded);
        // Attach decoded user information to the request for later use
        req.user = decoded;
        next();
    });
});

module.exports = validateToken;
