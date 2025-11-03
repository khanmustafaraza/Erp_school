import AdminLayout from "layouts/adminlayout/AdminLayout";
import Input from "components/inputs/Input";
import { FaList, FaRegistered, FaSchool,FaCodeBranch, FaCode,FaRegAddressBook} from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import HandleBtnSubmit from "components/buttons/handlesubmitbtn/HandleSubmitBtn";
import { MdDriveFileRenameOutline,MdAlternateEmail } from "react-icons/md";
import Btn from "components/buttons/btn/Btn";
import { useSchool } from "store/admincontext/schoolcontext/SchoolContext";
import { NavLink } from "react-router-dom";
import MainHeading from "components/heading/mainheading/MainHeading";
import { CiPhone } from "react-icons/ci";

const SchoolRegister = () => {
  const { state, handleSchoolRegister, handleSchoolChange } = useSchool();

  return (
    <AdminLayout>
      <div className="">
       {/* main heading */}
       <MainHeading title ="School Mangement"/>
       {/* main heading */}
      </div>
      <div className="flex justify-center items-center my-1 ">
        <div className="w-full bg-white border border-gray-200 rounded-sm shadow-sm p-2">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold text-gray-500">Add User</h1>
            </div>
          </div>
          {/* Page Header */}

    {/* side button */}
          <div className="w-[140px] ml-auto">
            <NavLink to="/admin/school-list">
              <Btn text="School List" icon={<FaList />} />
            </NavLink>
          </div>
        {/* side button */}

          {/* Registration Form */}
          <form onSubmit={handleSchoolRegister} className="space-y-6">
            {/* name */}
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

            {/* subname */}
            <div>
              <Input
                id="subName"
                icon={<MdDriveFileRenameOutline/>}
                iconType = "react"
                label="Sub Name"
                type="text"
                name="subName"
                placeholder="Enter the Sub Name"
                value={state.school.subName}
                onChange={handleSchoolChange}
              />
            </div>

            {/* ========== code  ================ */}
            <div className="code afficode flex flex-wrap gap-2">
              <div className="flex-1">
                <Input
                  id="code"
                  icon={<FaCodeBranch/>}
                iconType = "react"
                  label="School Code"
                  type="text"
                  name="code"
                  placeholder="Enter School Code"
                  value={state.school.code}
                  onChange={handleSchoolChange}
                />
              </div>
              {/* =============== afficode ================ */}
              <div className="flex-1">
                <Input
                  id="affiCode"
                 icon={<FaCodeFork/>}
                  iconType ="react"
                  label="Affiliation Code"
                  type="text"
                  name="affiCode"
                  placeholder="Enter Affiliation No"
                  value={state.school.affiCode}
                  onChange={handleSchoolChange}
                />
              </div>
              {/*  ==============baord ============ */}
              <div className="flex-1">
                <Input
                  id="board"
                  icon={<FaCode/>}
                  iconType ="react"
                  label="Board"
                  type="text"
                  name="board"
                  placeholder="Enter Board Name"
                  value={state.school.board}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>
            {/* ???????????????????????? code ,baord afficode ???????????????? */}

            {/* ================= address: "", email: "", contact: "", ============= */}
            <div className="email address flex flex-wrap gap-2">
              {/* address */}
              <div className="flex-1">
                <Input
                  id="address"
                  icon={<FaRegAddressBook/>}
                  iconType ="react"
                  label="School Address"
                  type="text"
                  name="address"
                  placeholder="Enter School Address"
                  value={state.school.address}
                  onChange={handleSchoolChange}
                />
              </div>
              {/* email */}
              <div className="flex-1">
                <Input
                  id="Email"
                  icon={<MdAlternateEmail />}
                  iconType ="react"
                  label="Email Of School"
                  type="email"
                  name="email"
                  placeholder="Enter Email Of School"
                  value={state.school.school}
                  onChange={handleSchoolChange}
                />
              </div>
              {/* phone */}
              <div className="flex-1">
                <Input
                  id="contact"
                 icon={<CiPhone/>}
                  iconType ="react"
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
