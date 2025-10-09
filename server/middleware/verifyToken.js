const { errorResponse } = require("../utils/responseHandler");
const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET_KEY;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      return errorResponse(res, 404, "Token not found");
    }

    const decoded = jwt.verify(token, jwt_secret);
    if (!decoded) {
      return errorResponse(res, 400, "Invalid token");
    }

    req.userId = decoded.userId;
    req.role = decoded.role;

    next();
  } catch (error) {
    return errorResponse(res, 500, "verify token failed", error);
  }
};

module.exports = verifyToken;
