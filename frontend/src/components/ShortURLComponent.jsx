

function ShortURLComponent ({shortUrl, message})
{
    return (
        
        <div className="shorturl-container">
            <div className="shorturl-alert">
                {message}
            </div>

            <div className="url-container">
                <div className="shorturl-text">
                    Short URL:  
                </div>

                <div className="shorturl">
                    {shortUrl}
                </div>
            </div>
        </div>
    )
}

export default ShortURLComponent