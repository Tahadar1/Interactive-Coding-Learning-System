import React from "react";
import MainDash from "../Components/MainDashboard/MainDash";
import Sidebar from "../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="app">
      <div className="AppGlasws">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
};

export default Dashboard;
