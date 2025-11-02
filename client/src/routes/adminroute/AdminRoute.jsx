import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isAdmin = true;

  return isAdmin ? <Outlet /> : null;
};

export default AdminRoute;
