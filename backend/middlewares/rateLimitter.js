const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs : 1 * 60 * 1000, // 10 requests/minute
    limit : 10,
    message : "Too many requests from this IP, kindly try again after 1 minute",
    standardHeaders : true,
    legacyHeaders : false,
    skip : function (req, res) {
        if (req.clientType && req.clientType === 'backend')
        {
            return true;
        }

        return false;
    }
})

module.exports = limiter;