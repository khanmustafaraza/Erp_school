import AdminLayout from "layouts/adminlayout/AdminLayout";
import Input from "components/inputs/Input";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import Btn from "components/buttons/btn/Btn";
import MainHeading from "components/heading/mainheading/MainHeading";
import { NavLink, useParams } from "react-router-dom";
import { useClass } from "store/admincontext/classcontext/ClassContext";
import { useEffect } from "react";
import {
  FaChalkboardTeacher,
  FaList,
  FaRegistered,
  FaUser,
  FaMoneyBill,
  FaAddressCard,
  FaMobile,
} from "react-icons/fa";
import { useClassTeacher } from "store/admincontext/classteachercontext/ClassTeacherContext";

const ClassTeacherRegister = () => {
  const { id } = useParams();

  // const { state, handleUseRegister, handleUserChange } = useAuth();
  const { state, handleClassTeacherRegister, handleClassTeacherChange } =
    useClassTeacher();
  const {
    state: { classList },
    getClassList,
  } = useClass();

  useEffect(() => {
    getClassList();
  }, []);

  return (
    <AdminLayout>
      <div className="p-2">
        <MainHeading title="Class Teacher Management" />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full bg-white border border-gray-200 rounded-md shadow-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-600" /> Add Class
              Teacher
            </h1>

            <NavLink to="/admin/teacher-list">
              <Btn text="Teacher List" icon={<FaList />} />
            </NavLink>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={(e) => handleClassTeacherRegister(e, id)}
            className="space-y-6"
          >
            {/* Row 1: User ID + Class ID */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="mobile"
                  label="Mobile"
                  type="number"
                  name="mobile"
                  placeholder="Enter unique teacher user ID"
                  value={state.register.mobile}
                  onChange={handleClassTeacherChange}
                  iconType="react"
                  icon={<FaMobile />}
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <label htmlFor="">Class Teacher & Section</label>
                <select
                  name="classId"
                  onChange={handleClassTeacherChange}
                  className="border p-2"
                >
                  <option value="">Select Class</option>
                  {classList?.map((curEle) => {
                    return (
                      <option key={curEle._id} value={curEle._id}>
                        Class {curEle.name.toUpperCase()} - Section-
                        {curEle.section.toUpperCase()}
                      </option>
                    );
                  })}
                </select>
                {/* <Input
                  id="classId"
                  label="Class ID"
                  type="text"
                  name="classId"
                  placeholder="Enter assigned class ID"
                  value={state.register.classId}
                  onChange={handleUserChange}
                  iconType="react"
                  icon={<FaChalkboardTeacher />}
                /> */}
              </div>
            </div>

            {/* Row 2: Name + Email */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="teacherName"
                  label="Full Name"
                  type="text"
                  name="fullName"
                  placeholder="Enter teacher's full name"
                  value={state.register.fullName}
                  onChange={handleClassTeacherChange}
                  iconType="react"
                  icon={<FaUser />}
                />
              </div>

              <div className="flex-1">
                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={state.register.email}
                  onChange={handleClassTeacherChange}
                  icon="mark_email_read"
                />
              </div>
            </div>

            {/* Row 3: Subject + Qualification */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="subject"
                  label="Subject"
                  type="text"
                  name="subjects"
                  placeholder="Enter subject specialization"
                  value={state.register.subjects}
                  onChange={handleClassTeacherChange}
                  iconType="react"
                  icon={<FaChalkboardTeacher />}
                />
              </div>

              <div className="flex-1">
                <Input
                  id="qualification"
                  label="Qualification"
                  type="text"
                  name="qualification"
                  placeholder="e.g. M.Sc, B.Ed"
                  value={state.register.qualification}
                  onChange={handleClassTeacherChange}
                />
              </div>
            </div>

            {/* Row 4: Experience + Salary */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="experience"
                  label="Experience (Years)"
                  type="number"
                  name="experience"
                  placeholder="e.g. 5"
                  value={state.register.experience}
                  onChange={handleClassTeacherChange}
                />
              </div>

              <div className="flex-1">
                <Input
                  id="salary"
                  label="Monthly Salary (₹)"
                  type="number"
                  name="salary"
                  placeholder="e.g. 40000"
                  value={state.register.salary}
                  onChange={handleClassTeacherChange}
                  iconType="react"
                  icon={<FaMoneyBill />}
                />
              </div>
            </div>

            {/* Row 5: Aadhaar + Marital Status */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <Input
                  id="aadhaar"
                  label="Aadhaar Card Number"
                  type="text"
                  name="aadhaar"
                  placeholder="Enter 12-digit Aadhaar number"
                  value={state.register.aadhaar}
                  onChange={handleClassTeacherChange}
                  iconType="react"
                  icon={<FaAddressCard />}
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="maritalStatus"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Marital Status <sup className="text-red-500">*</sup>
                </label>
                <select
                  id="marital"
                  name="marital"
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={handleClassTeacherChange}
                  value={state.register.marital}
                >
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            {/* Row 6: Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="Enter full address"
                value={state.register.address}
                onChange={handleClassTeacherChange}
                className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-[200px]">
              <HandleBtnSubmit
                text="Register Teacher"
                icon={<FaRegistered />}
              />
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassTeacherRegister;
