"use client";

import Sidebar from "@/components/Sidebar";
import React from "react";
import isAuth from "@/Components/AuthGuard";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default isAuth(AdminLayout);
