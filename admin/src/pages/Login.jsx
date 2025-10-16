import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { loginUser } from "../store/auth/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userData.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl()}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      const result = res.data;
      if (result.data.user.role === "admin") {
        localStorage.setItem("tokenTime", Date.now());
        localStorage.setItem("token", result.data.token);
        dispatch(loginUser(result?.data?.user));
        toast.success("Admin login successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Access Denied");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        console.error("Error:", err.message);
      }
    }
  };

  if (userInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center w-full max-w-[300px] gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-semibold ">Admin</h2>
        {/* Email */}
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-[#58bc82] font-semibold">
            Email
          </label>
          <input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md p-3 border-none outline outline-2 outline-[#707070] bg-[#9c9c9c60] focus:outline-[#58bc82]"
          />
        </span>

        {/* Password */}
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-[#58bc82] font-semibold">
            Password
          </label>
          <input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            id="password"
            name="password"
            required
            className="w-full rounded-md p-3 border-none outline outline-2 outline-[#707070] bg-[#9c9c9c60] focus:outline-[#58bc82]"
          />
        </span>

        {/* Submit button */}
        <input
          type="submit"
          value="Log in"
          className="w-full rounded-full p-3 bg-[#707070] text-[#efefef] font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-[#58bc82] hover:text-[#707070]"
        />
      </form>
    </div>
  );
};

export default Login;
