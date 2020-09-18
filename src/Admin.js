import React from "react";
import "./Admin.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <div className="admin">
      <Header isAdmin />

      <div className="admin_sidebarSection">
        <Sidebar />
      </div>
    </div>
  );
}

export default Admin;
