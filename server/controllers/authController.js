const Users = require("../model/userModel");
const generateToken = require("../utils/generateToken");
const { errorResponse, successResponse } = require("../utils/responseHandler");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");

const userSignUp = async (req, res) => {
  try {
    const { fullName, phone, email, password } = req.body;

    if (!fullName || !phone || !email || !password) {
      return errorResponse(res, 404, "Required All Fields");
    }
    if (password.length < 6) {
      return errorResponse(res, 400, "Password should be 6 Characters");
    }

    const existUser = await Users.findOne({ $or: [{ email }, { phone }] });
    if (existUser) {
      return errorResponse(res, 403, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      fullName,
      phone,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    newUser.password = undefined;
    newUser.verifyCode = undefined;
    newUser.verifyCodeExpiry = undefined;

    return successResponse(res, 200, "User registration successfully", newUser);
  } catch (error) {
    return errorResponse(res, 500, "User SignUp Failed", error);
  }
};

const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 404, "Required All Fields");
    }
    if (password.length < 6) {
      return errorResponse(res, 400, "Password should be 6 characters");
    }

    const existUser = await Users.findOne({ email });
    if (!existUser) {
      return errorResponse(res, 404, "User not found");
    }

    const checkPassword = await bcrypt.compare(password, existUser.password);
    if (!checkPassword) {
      return errorResponse(res, 400, "Wrong Password");
    }

    const token = await generateToken(existUser._id);
    if (!token) {
      return errorResponse(res, 400, "User token not found");
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    });

    existUser.password = undefined;
    existUser.verifyCode = undefined;
    existUser.verifyCodeExpiry = undefined;

    return successResponse(
      res,
      200,
      "User Login Successfully",
      (data = { user: existUser, token })
    );
  } catch (error) {
    return errorResponse(res, 500, "User login failed", error);
  }
};

const sendVerifyCode = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return errorResponse(res, 404, "Email not found");
    }
    const existUser = await Users.findOne({ email });
    if (!existUser) {
      return errorResponse(res, 404, "User not found");
    }

    if (existUser.isVerified) {
      return errorResponse(res, 400, "User already verified");
    }
    if (Date.now() < existUser.verifyCodeExpiry) {
      return errorResponse(res, 400, "Verify code already sent to your email");
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + 5 * 60 * 1000;

    existUser.verifyCode = code;
    existUser.verifyCodeExpiry = expiry;

    await sendEmail(
      existUser.email,
      "Email verification code",
      code,
      "Verify your account"
    );

    await existUser.save();
    return successResponse(res, 200, "Verify code sent successfully");
  } catch (error) {
    return errorResponse(res, 500, "Send verify code failed", error);
  }
};

const verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email) {
      return errorResponse(res, 404, "Email not found");
    }
    if (!code) {
      return errorResponse(res, 404, "Verify code not found");
    }

    const existUser = await Users.findOne({ email });
    if (!existUser) {
      return errorResponse(res, 404, "User not found");
    }

    if (existUser.isVerified) {
      return errorResponse(res, 400, "User already verified");
    }
    if (!existUser.verifyCode || !existUser.verifyCodeExpiry) {
      return errorResponse(res, 400, "No code set");
    }
    if (Date.now() > existUser.verifyCodeExpiry) {
      return errorResponse(res, 400, "Verify code expired");
    }
    if (code != existUser.verifyCode) {
      return errorResponse(res, 400, "Invalied code");
    }

    existUser.isVerified = true;
    existUser.verifyCode = null;
    existUser.verifyCodeExpiry = null;
    await existUser.save();

    return successResponse(res, 200, "User verification successfully");
  } catch (error) {
    return errorResponse(res, 500, "User verify failed", error);
  }
};

module.exports = {
  userSignUp,
  userLogIn,
  sendVerifyCode,
  verifyCode,
};
