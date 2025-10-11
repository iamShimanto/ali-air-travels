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

const allUsers = async (req, res) => {
  try {
    const { role } = req.query;

    const users = await Users.find({ role })
      .select("-password")
      .sort({ createdAt: 1 });
    if (users.length === 0) return errorResponse(res, 404, "users not found");

    const total = users.length;

    return successResponse(res, 200, "fetch all users successfully", {
      total,
      users,
    });
  } catch (error) {
    return errorResponse(res, 500, "all users failed", error);
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (!user) {
      return errorResponse(res, 404, "User not found");
    }
    user.password = undefined;
    return successResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    return errorResponse(res, 500, "single user fetched failed");
  }
};

const userRoleUpdate = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    if (!id) {
      return errorResponse(res, 404, "user id not found");
    }
    if (!role) {
      return errorResponse(res, 404, "user role not found");
    }

    const updateUser = await Users.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );
    if (!updateUser) {
      return errorResponse(res, 404, "user not found");
    }
    updateUser.password = undefined;
    return successResponse(
      res,
      200,
      "user role updated successfully",
      updateUser
    );
  } catch (error) {
    return errorResponse(res, 500, "user role update failed");
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await Users.findById(userId).select(
      "-password -verifyCode -verifyCodeExpiry"
    );

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    return successResponse(res, 200, "Profile fetched successfully", user);
  } catch (error) {
    return errorResponse(res, 500, "Error fetching profile", error);
  }
};

module.exports = {
  userSignUp,
  userLogIn,
  sendVerifyCode,
  verifyCode,
  allUsers,
  getSingleUser,
  userRoleUpdate,
  getProfile,
};
