import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />

      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
