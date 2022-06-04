const { expressjwt: jwt } = require("express-jwt");

const jwtCheck = jwt({
    secret: 'K8sV6nDbYiVVFw5if1F4HQ3ZhfLWjoU1',
    audience: 'https://nbaapi.azurewebsites.net',
    issuer: 'https://dev-5dgpjcl0.us.auth0.com/',
    algorithms: ["HS256"],
  });

module.exports = jwtCheck;