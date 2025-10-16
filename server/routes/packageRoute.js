const express = require("express");
const {
  createPackage,
  allPackage,
  getSinglePackage,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

// ========== create package
router.post("/create-package", verifyToken, verifyAdmin, createPackage);

// ============ all package
router.get("/all-package", allPackage);

// ========= get single package
router.get("/package/:id", getSinglePackage);

// ========= update package details
router.put("/package/:id", verifyToken, verifyAdmin, updatePackage);

// =========== delete package
router.delete("/package/:id", deletePackage)

module.exports = router;
