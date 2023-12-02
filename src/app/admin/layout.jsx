import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div class="flex flex-row min-h-screen">
      <Sidebar />

      <div class="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
