import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthAppProvider } from "store/authcontext/AuthContext.jsx";
import { SchoolAppProvider } from "store/admincontext/schoolcontext/SchoolContext.jsx";
import { ClassAppProvider } from "store/admincontext/classcontext/ClassContext.jsx";
import { ClassTeacherAppProvider } from "./store/admincontext/classteachercontext/ClassTeacherContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthAppProvider>
      <SchoolAppProvider>
        <ClassAppProvider>
          <ClassTeacherAppProvider>
            <App />
          </ClassTeacherAppProvider>
        </ClassAppProvider>
      </SchoolAppProvider>
    </AuthAppProvider>
  </BrowserRouter>
);
