const jwt = require("jsonwebtoken");

const accountMiddleware = (req, resp, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // console.log("id from middware", _id);
      if (_id) {
        req.accountId = _id;
        next();
      }
    } else {
      console.log("no token");
      resp.json({ success: false, msg: "token expired, access denied" });
    }
  } catch (err) {
    resp.json({ success: false, msg: err });
  }
};

module.exports = accountMiddleware;
