
let count = 0;

function generateShortId ()
{
    let shortId = `${String.fromCharCode(97 + Math.floor(count / (26 * 26 * 26 * 26)) % 26)}${String.fromCharCode(97 + Math.floor(count / (26 * 26 * 26)) % 26)}${String.fromCharCode(97 + Math.floor(count / (26 * 26)) % 26)}${String.fromCharCode(97 + Math.floor(count / (26)) % 26)}${String.fromCharCode(97 + count % 26)}`;
    count++;

    return shortId;
}

module.exports = generateShortId