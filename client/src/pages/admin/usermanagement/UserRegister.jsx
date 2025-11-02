import React from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { useAuth } from "store/authcontext/AuthContext";
import Input from "components/inputs/Input";
import { FaList, FaRegistered, FaUser } from "react-icons/fa";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import { MdAdminPanelSettings } from "react-icons/md";
import Btn from "components/buttons/btn/Btn";

const UserRegister = () => {
  const { state, handleUserRegister, handleUserChange } = useAuth();
  return (
    <AdminLayout>
      <div className="p-2">
        <div
          className="h-10 w-10 border border-gray-100 rounded-full flex justify-center items-center"
          title="Admin"
        >
          <MdAdminPanelSettings className="text-green-600 text-2xl" />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-full bg-white border border-gray-200 rounded-sm shadow-sm p-4">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-500">Add User</h1>
            </div>
          </div>

          <div className="w-[100px] ml-auto">
            <Btn text="User List" icon={<FaList />} />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleUserRegister} className="space-y-6">
            {/* Username */}
            <div>
              <Input
                id="userName"
                icon={<FaUser />}
                iconType="react"
                label="User Name"
                type="text"
                name="userName"
                placeholder="Enter your username"
                onChange={handleUserChange}
                value={state.register.userName}
              />
            </div>

            {/* Email */}
            <div>
              <Input
                id="email"
                icon="mark_email_read"
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={state.register.email}
                onChange={handleUserChange}
              />
            </div>

            {/* Password + Role */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="password"
                  icon="wifi_password"
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={state.register.password}
                  onChange={handleUserChange}
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Select Role <sup className="text-red-500">*</sup>
                </label>
                <select
                  name="role"
                  id="role"
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleUserChange}
                  value={state.register.role}
                >
                  <option value="">Choose a role</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="w-[150px]">
              <HandleBtnSubmit text="Register" icon={<FaRegistered />} />
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserRegister;
