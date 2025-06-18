

function ShortURLComponent ({shortUrl})
{
    return (
        <div className="shorturl-container">
            <div className="shorturl-text">
                Shortened URL : 
            </div>

            <div className="shorturl">
                {shortUrl}
            </div>
        </div>
    )
}

export default ShortURLComponent