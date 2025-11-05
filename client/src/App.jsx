import React from "react";
import { Route, Routes } from "react-router-dom";
// todo ???????????????????????????? main routes start ??????????????????????????
import Home from "pages/home/Home";
import Login from "pages/auth/login/Login";
import Enquiry from "pages/enquiry/Enquiry";
// ! ============================ main routes ends ============================

// // ***************** admin routes start *******************************
import AdminDashboard from "pages/admin/admindashbaord/AdminDashboard";
import UserManagement from "pages/admin/usermanagement/UserManagement";
import EnquiryManagement from "pages/admin/enquirymanagement/EnquiryManagement";
import EnquiryList from "pages/admin/enquirymanagement/EnquiryList";
import UserStudentList from "pages/admin/usermanagement/UserStudentList";
import UserTeacherList from "pages/admin/usermanagement/UserTeacherList";
import UserAdminList from "pages/admin/usermanagement/UserAdminList";
import UserRegister from "pages/admin/usermanagement/UserRegister";
import SchoolManagement from "pages/admin/schoolmanagement/SchoolManagement";
import SchoolRegister from "pages/admin/schoolmanagement/SchoolRegister";
import SchoolList from "pages/admin/schoolmanagement/SchoolList";
import ClassManagement from "pages/admin/classmanagement/ClassManagement";
import ClassRegister from "pages/admin/classmanagement/ClassRegister";
import ClassList from "pages/admin/classmanagement/ClassList";
import AdminRoute from "./routes/adminroute/AdminRoute";
import ClassTeacherRegister from "pages/admin/teachermanagement/ClassTeacherRegister";
import ClassTeacherList from "./pages/admin/teachermanagement/ClassTeacherList";
// // ======================= admin routes end ==============================

const App = () => {
  return (
    <Routes>
      {/* ================= main routes===================== */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/enquiry" element={<Enquiry />} />
      {/* ================= main routes===================== */}

      {/* **************************  admin routes***************** */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="enquiry-management" element={<EnquiryManagement />} />
        <Route path="enquiry-list" element={<EnquiryList />} />
        <Route path="school-management" element={<SchoolManagement />} />
        <Route path="school-register" element={<SchoolRegister />} />
        <Route path="school-list" element={<SchoolList />} />
        <Route path="class-management" element={<ClassManagement />} />
        <Route path="class-register" element={<ClassRegister />} />
        <Route path="class-list" element={<ClassList />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="user-register" element={<UserRegister />} />
        <Route path="user-admin-list" element={<UserAdminList />} />
        <Route path="user-teacher-list" element={<UserTeacherList />} />
        <Route path="user-student-list" element={<UserStudentList />} />
        <Route
          path="class-teacher-register/:id"
          element={<ClassTeacherRegister />}
        />
        <Route path="class-teacher-list" element={<ClassTeacherList />} />
      </Route>
      {/* **************************  admin routes***************** */}
    </Routes>
  );
};

export default App;
