const express = require('express');
const validate = require('../utils/requestValidator');
const url = require('../models/url')
const generateShortId = require('../utils/generateShortId');
const urlRepo = require('../repository/urlRepository');

async function  shortenUrlHandler (req, res, next)
{
    const url = req.body.url;

    validate(req, res);

    try
    {
        const shortId = generateShortId();

        const alreadyPresent = await urlRepo.getUrlByShortId(shortId);
        console.log("Finded URL", alreadyPresent);

        if (alreadyPresent)
        {
            res.send("Url is already shortened");
        }

        const savedUrl = await urlRepo.saveUrl(shortId, url);

        console.log(`URL was converted successfully`);

        res.json({
            shortUrl : `https://${req.get('host')}/${savedUrl.shortUrl}`
        });
    }
    catch(error)
    {
        next(error);
    }
}

module.exports = shortenUrlHandler