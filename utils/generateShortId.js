
let count = 0;

function generateShortId ()
{
    let shortId = `${String.fromCharCode(65 + Math.floor(count / (26 * 26 * 26 * 26)) % 26)}${String.fromCharCode(65 + Math.floor(count / (26 * 26 * 26)) % 26)}${String.fromCharCode(65 + Math.floor(count / (26 * 26)) % 26)}${String.fromCharCode(65 + Math.floor(count / (26)) % 26)}${String.fromCharCode(65 + count % 26)}`;
    console.log(shortId);
    count++;

    return shortId;
}

module.exports = generateShortId