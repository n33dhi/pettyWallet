import React from "react";
import Widget from "../Components/Widget";
import RequestTable from "../Components/RequestTable";

import "./AdminDashboard.css";

const AdminDashboard = () => {

  const REQUESTTABLE = [
    {
      date:'09/09/23',
      name: 'Needhichozhan',
      amount: 560,
      category: 'Travel',
      approvedBy: 'Person2',
      action: 'Approved'
    },
  ];

  return (
    <div className="body-wrapper">
      <div className="heading">Welcome, Needhichozhan👋</div>
      <Widget />
      <div className="heading">New Requests</div>
      <RequestTable data={REQUESTTABLE}/>
    </div>
  );
};

export default AdminDashboard;
