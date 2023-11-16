import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <header className="header-wrapper">
      <div className="left-div">
        <Link to="/cashMaster" className="logo-1">
          Bird
        </Link>
        <Link to="/cashMaster" className="logo-2">
          Wallet
        </Link>
      </div>
      <div className="right-div">
        <div className="content">
          <div className="user-role">CashMaster</div>
          <div className="links">
            <Link to="/cashMaster/users" className="nav-1">
              Users
            </Link>
            <Link to="/cashMaster/history" className="nav-2">
              History
            </Link>
            <Link to="/cashMaster/logout" className="nav-3">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
