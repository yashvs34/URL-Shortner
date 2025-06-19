

function ShortURLComponent ({shortUrl, message})
{
    return (
        
        <div className="shorturl-container">
            <div>
                {message}
            </div>
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