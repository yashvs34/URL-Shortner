const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs : 1 * 60 * 1000,
    limit : 3,
    message : "Too many requests from this IP, kindly try again after 1 minute",
    standardHeaders : true,
    legacyHeaders : false
})

module.exports = limiter;