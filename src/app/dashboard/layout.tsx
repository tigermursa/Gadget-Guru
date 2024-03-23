import DashboardNavbar from "@/Components/UI/Dashboard/DashboardNavbar";
import Sidebar from "@/Components/UI/Dashboard/Sidebar";
import React from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
