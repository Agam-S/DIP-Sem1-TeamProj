const jwt_decode = require("jwt-decode")

function decodeToken(authToken) {
    const token = authToken;
    const token1 = token.substring(7, token.length);
    const sub = jwt_decode(token1).sub;
    return sub;
}
module.exports = decodeToken;
