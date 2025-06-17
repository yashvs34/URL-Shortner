const express = require('express');
const validate = require('../utils/requestValidator');
const url = require('../models/url')
const urlRepo = require('../repository/urlRepository');

async function  shortenUrlHandler (req, res, next)
{
    const url = req.body.url;

    validate();

    try
    {
        const shortId = generateShortId();

        const savedUrl = await urlRepo.saveUrl(shortId, url); 

        console.log(`Converted Url is ${savedUrl}`);

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