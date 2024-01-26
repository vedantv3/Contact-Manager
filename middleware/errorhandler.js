const { constants } = require("../constants");
const errorHandler = (er, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            })
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            })
        case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: err.message,
                stackTrace: err.stack
            })
        case constants.SERVER_ERROR:
            res.json({
                title: "server error",
                message: err.message,
                stackTrace: err.stack
            })
        default:
            console.log("no error all good");
            break;
    }
}

module.exports = errorHandler