const express = require ('express');
const shortenUrlHandler = require('../service/urlService');
const router = express.Router();

router.post('/shorten', shortenUrlHandler);

router.get('/:shortId', async(req, res, next) => {
    try
    {
        const originalUrl = await redirectUrl(req.params.shortId);
        res.redirect(originalUrl);
    }
    catch (error)
    {
        if (error.message === 'Url not found')
        {
            return res.status(404).json({
                error : {
                    message : 'Short URL not found'
                }
            })
        }

        next(error);
    }
});

module.exports = router;