const express = require("express");
const { getOverview } = require("../controllers/overviewController");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

// ======= admin overview
router.get("/overview", verifyToken, verifyAdmin, getOverview);

module.exports = router;
