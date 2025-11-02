import React from "react";
import Input from "components/inputs/Input";
import { MdAdminPanelSettings, MdClass } from "react-icons/md";
import { LuSection } from "react-icons/lu";
import { FaList, FaRegistered } from "react-icons/fa";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { useClass } from "store/admincontext/classcontext/ClassContext";
import { NavLink } from "react-router-dom";
import Btn from "components/buttons/btn/Btn";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";

const ClassRegister = () => {
  const { state, handleClassChange, handleClassRegister } = useClass();

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
      <div className="flex items-center justify-center">
        <div className="bg-white border border-gray-200 w-full  rounded-sm shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-500">Add Class</h1>
            </div>
          </div>

          <div className="w-[120px] ml-auto">
            <NavLink to="/admin/class-list">
              <Btn text="Class List" icon={<FaList />} />
            </NavLink>
          </div>

          <form onSubmit={handleClassRegister}>
            {/* User Name */}
            <div className="flex flex-wrap gap-1">
              <div className=" lg:flex-1">
                <Input
                  id="className"
                  icon={<MdClass />}
                  iconType="react"
                  label="Class Name"
                  type="text"
                  name="name"
                  placeholder="Enter Class Name"
                  onChange={handleClassChange}
                  value={state.register.name}
                />
              </div>
              {/* Email */}
              <div className="lg:flex-1">
                <Input
                  id="sectionName"
                  iconType="react"
                  icon={<LuSection />}
                  label="Section Name"
                  type="text"
                  name="section"
                  placeholder="Enter Section Name"
                  value={state.register.section}
                  onChange={handleClassChange}
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

export default ClassRegister;
