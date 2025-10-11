const express = require('express')
const { userSignUp, userLogIn, sendVerifyCode, verifyCode, allUsers, getSingleUser, userRoleUpdate, getProfile } = require('../controllers/authController')
const verifyToken = require('../middleware/verifyToken')
const verifyAdmin = require('../middleware/verifyAdmin')
const router = express.Router()

// ======= user signup
router.post("/signup", userSignUp)

// ====== user login
router.post("/login", userLogIn)

// ====== send verify code
router.post("/send-verify-code", verifyToken,  sendVerifyCode)

// ========== verify code
router.post("/verify-code", verifyToken, verifyCode)

router.get("/all-users", verifyToken, verifyAdmin, allUsers);

router.get("/user/:id", verifyToken, verifyAdmin, getSingleUser);

router.put("/user/:id", verifyToken, verifyAdmin, userRoleUpdate);

router.get("/profile", verifyToken, getProfile);



module.exports = router