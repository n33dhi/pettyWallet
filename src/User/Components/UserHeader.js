import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./UserHeader.css";

const UserHeader = () => {
  return (
    <header className="header-wrapper">
      <div className="left-div">
        <Link to="/cashQuestor" className="logo-1">
          Bird
        </Link>
        <Link to="/cashQuestor" className="logo-2">
          Wallet
        </Link>
      </div>
      <div className="right-div">
        <div className="content">
          <div className="user-role">CashQuester</div>
          <div className="links">
            <Link to="/cashQuestor/history"  className="nav-2">
              History
            </Link>
            <Link to="/" className="nav-3">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
