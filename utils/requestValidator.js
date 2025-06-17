function validate (req, res)
{
    const url = req.body.url;

    if (url === null || url.length === 0)
    {
        res.status(400).send("URL Body cannot be null");
    }
}

module.exports = validate;