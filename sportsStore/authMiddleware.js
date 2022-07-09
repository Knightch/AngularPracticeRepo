const jwt = require("jsonwebtoken");
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

// for api request mapping
const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/products", "/products", "/api/categories", "/categories"]
}

//  for authentication
function requiresAuth(method, url) {
  return (mappings[method.toLowerCase()] || []).find(p => url.startsWith(p)) !== undefined;
}

// send response for authentication
module.exports = function (req, res, next) {
  if (req.url.endsWith("/login") && req.method == "POST") {
    if (req.body && req.body.name == USERNAME && req.body.password == PASSWORD) {
      let token = jwt.sign({
        data: USERNAME,
        expiresIn: "1h"
      }, APP_SECRET);
      res.json({
        success: true,
        token: token
      });
      console.log("response value is " + res.json());
    } else {
      res.json({
        success: false
      });
    }
    res.end();
    console.log("response end value is " + res.end());
    return;
  } else if (requiresAuth(req.method, req.url)) {
    let token = req.headers["authorization"] || "";
    if (token.startsWith("Bearer<")) {
      token = token.substring(7, token.length - 1);
      console.log("value of token " + token);
      try {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {}
    }
    res.statusCode = 401;
    res.end();
    return;
  }
  next();
}
