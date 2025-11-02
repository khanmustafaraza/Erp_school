import React, { useState } from "react";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
// import { useAuth } from "../../context/admincontext/authcontext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/authcontext/AuthContext";
import Navbar from "components/navbar/Navbar";
import HomeFooter from "components/footer/homefooter/HomeFooter";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import { MdOutlineLogin } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => setTogglePassword(!togglePassword);

  const { handleLoginUserChange, state, handleLoginUserSubmit } = useAuth();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center mb-2 tracking-wide text-gray-800">
            Welcome Back 👋
          </h1>
          <p className="text-gray-600 text-center mb-6 text-sm">
            Please log in to continue your journey.
          </p>

          <form onSubmit={handleLoginUserSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-indigo-600" /> Email Address or
                  Username
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={state.login.email}
                onChange={handleLoginUserChange}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-gray-50 border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              />
            </div>

            {/* Password Field */}
            <div className="">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                <span className="flex items-center gap-2">
                  <FaLock className="text-indigo-600" /> Password
                </span>
              </label>
              <div className="flex items-center py-2 bg-gray-50 border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-indigo-500 transition">
                <input
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  value={state.login.password}
                  onChange={handleLoginUserChange}
                  placeholder="••••••••"
                  className="bg-transparent border-0 flex-1 text-gray-800 placeholder-gray-400 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="text-gray-500 hover:text-indigo-600 transition"
                >
                  {togglePassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Role Selection */}
            <div className="">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                <span className="flex items-center gap-2">
                  <FaUserAlt className="text-indigo-600 pr-4" /> Role
                </span>
              </label>
              <select
                onChange={handleLoginUserChange}
                name="role"
                className="w-full border border-gray-300 bg-gray-50 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                required
              >
                <option value="">Select a role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Login Button */}
            <HandleBtnSubmit
              icon={<MdOutlineLogin className="text-2xl text-white" />}
              onSubmit={handleLoginUserSubmit}
              text="Login"
            />
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          {/* Footer Links */}
          <p className="text-center text-gray-600 text-sm mt-1">
            Don’t have an account?{" "}
            <strong className="text-indigo-600 hover:underline cursor-pointer">
              Contact Admin
            </strong>
          </p>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default Login;
