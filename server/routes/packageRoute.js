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

router.post("/create-package", verifyToken, verifyAdmin, createPackage);

router.get("/all-package", allPackage);

router.get("/package/:id", getSinglePackage);

router.put("/package/:id", verifyToken, verifyAdmin, updatePackage);

router.delete("/package/:id", deletePackage)

module.exports = router;
