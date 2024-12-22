import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import DashTable from "../../components/dashTable/DashTable";

const UserDashboard = () => {
  return (
    <div className="main-dash-container" style={{ display: "flex" }}>
      <Sidebar />
      <DashTable />
    </div>
  );
};

export default UserDashboard;
