import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authReducer from "../../reducers/authreducer/AuthReducer";

//  ========================== Initial state ================================
const initialState = {
  isLoading: false,
  enquiry: {
    fullName: "",
    phone: "",
    subject: "",
    message: "",
  },
  register: {
    userName: "",
    email: "",
    password: "",
    role: "",
  },
  adminList: [],
  teacherList: [],
  studentList: [],
  enquiryList: [],
  login: {
    email: "",
    password: "",
    role: "",
  },
  user: null, // store logged in user info here
};

const AuthAppContext = createContext();

const AuthAppProvider = ({ children }) => {
  // // ************* use Reducer start **********************

  const [state, dispatch] = useReducer(authReducer, initialState);

  // // ***************** use Reducer end ********************
  const navigate = useNavigate();

  // ######################## Load user from localStorage on mount ##########################
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({
        type: "SET_LOGGED_IN_USER",
        payload: JSON.parse(storedUser),
      });
    }
  }, []);

  // ! ================== handle enquiry change start ================
  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "ENQUIRY_CHANGE",
      payload: { name, value },
    });
  };
  // ! ================== handle enquiry change  end ================
  // todo *********************** handle enquiry submit start *********************
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const enquiryObj = { ...state.enquiry };
    console.log(enquiryObj);
    try {
      const res = await fetch("http://localhost:3000/api/enquiry/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryObj),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };
  // todo *********************** handle enquiry submit end *****************

  // ! ************** get enquiry list ****************
  const enquiryList = async (value = "") => {
    console.log(value);
    try {
      const res = await fetch(
        `http://localhost:3000/api/enquiry/enquiry-list?search=${value}`
      );
      const data = await res.json();

      if (data.success) dispatch({ type: "ENQUIRY_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  // ! ************** get enquiry list ****************
  // Handle admin change a new user
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADMIN_USER_CHANGE", payload: { name, value } });
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();
    const registerObj = { ...state.register };
    try {
      const res = await fetch("http://localhost:3000/api/admin/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerObj),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch lists
  const getAdminList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/admin-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_ADMIN_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTeacherList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/teacher-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_TEACHER_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  const getStudentList = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/user/student-list"
      );
      const data = await res.json();
      if (data.success)
        dispatch({ type: "GET_STUDENT_LIST", payload: data.data });
    } catch (error) {
      console.error(error.message);
    }
  };

  //!==================== Handle login change start ==========================

  const handleLoginUserChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "LOGIN_USER_CHANGE", payload: { name, value } });
  };

  //!==================== Handle login change end ==========================

  // todo ????????????????? login user submit start ??????????????????

  const handleLoginUserSubmit = async (e) => {
    e.preventDefault();
    const loginObj = { ...state.login };
    try {
      const res = await fetch("http://localhost:3000/api/admin/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginObj),
      });
      const data = await res.json();

      if (data.success && data.data.setRole) {
        const loggedInUser = {
          token: data.data.token,
          userName: loginObj.email,
          role: loginObj.role,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        dispatch({ type: "SET_LOGGED_IN_USER", payload: loggedInUser });

        // Redirect based on role
        switch (loginObj.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "teacher":
            navigate("/teacher/teacher-dashboard");
            break;
          case "student":
            navigate("/student/student-dashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        alert("Invalid login: " + data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // todo ????????????????? login user submit end ??????????????????

  return (
    <AuthAppContext.Provider
      value={{
        state,
        handleUserChange,
        handleUserRegister,
        getAdminList,
        getTeacherList,
        getStudentList,
        handleLoginUserChange,
        handleLoginUserSubmit,
        handleEnquiryChange,
        handleEnquirySubmit,
        enquiryList,
      }}
    >
      {children}
    </AuthAppContext.Provider>
  );
};

// Custom hook
const useAuth = () => {
  const context = useContext(AuthAppContext);
  if (!context) throw new Error("useAuth must be used within AuthAppProvider");
  return context;
};

export { AuthAppProvider, useAuth };
