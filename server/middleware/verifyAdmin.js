const { errorResponse } = require("../utils/responseHandler");


const verifyAdmin = async (req, res, next) => {
  if (req.role !== "admin") {
    return errorResponse(res, 403, "unauthorized access");
  }
  next();
};

module.exports = verifyAdmin;
