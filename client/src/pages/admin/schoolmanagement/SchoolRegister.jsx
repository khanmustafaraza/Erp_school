import React from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import Input from "components/inputs/Input";
import { FaList, FaRegistered, FaSchool, FaUser } from "react-icons/fa";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import { MdAdminPanelSettings } from "react-icons/md";
import Btn from "components/buttons/btn/Btn";
import { useSchool } from "store/admincontext/schoolcontext/SchoolContext";
import { NavLink } from "react-router-dom";

const SchoolRegister = () => {
  const { state, handleSchoolRegister, handleSchoolChange } = useSchool();

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

          <div className="w-[120px] ml-auto">
            <NavLink to="/admin/school-list">
              <Btn text="School List" icon={<FaList />} />
            </NavLink>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSchoolRegister} className="space-y-6">
            {/* Username */}
            <div>
              <Input
                id="name"
                icon={<FaSchool />}
                iconType="react"
                label="School Name"
                type="text"
                name="name"
                placeholder="School Name"
                onChange={handleSchoolChange}
                value={state.school.name}
              />
            </div>

            {/* Email */}
            <div>
              <Input
                id="subName"
                icon="mark_email_read"
                label="Sub Name"
                type="text"
                name="subName"
                placeholder="Enter the Sub Name"
                value={state.school.subName}
                onChange={handleSchoolChange}
              />
            </div>

            {/* ========== code affiCode ================ */}
            <div className="code afficode flex flex-wrap gap-2">
              <div className="flex-1">
                <Input
                  id="code"
                  icon="wifi_password"
                  label="School Code"
                  type="text"
                  name="code"
                  placeholder="Enter School Code"
                  value={state.school.code}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="affiCode"
                  icon="wifi_password"
                  label="Affiliation Code"
                  type="text"
                  name="affiCode"
                  placeholder="Enter Affiliation No"
                  value={state.school.affiCode}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="board"
                  icon="wifi_password"
                  label="Board"
                  type="text"
                  name="board"
                  placeholder="Enter Board Name"
                  value={state.school.board}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>
            {/* ???????????????????????? afficode ???????????????? */}

            {/* ================= address: "", email: "", contact: "", ============= */}
            <div className="code afficode flex flex-wrap gap-2">
              <div className="flex-1">
                <Input
                  id="address"
                  icon="wifi_password"
                  label="School Address"
                  type="text"
                  name="address"
                  placeholder="Enter School Address"
                  value={state.school.address}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="Email"
                  icon="wifi_password"
                  label="Email Of School"
                  type="email"
                  name="email"
                  placeholder="Enter Email Of School"
                  value={state.school.school}
                  onChange={handleSchoolChange}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="contact"
                  icon="wifi_password"
                  label="Contact No."
                  type="text"
                  name="contact"
                  placeholder="Enter Contact No"
                  value={state.school.contact}
                  onChange={handleSchoolChange}
                />
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

export default SchoolRegister;
