import React from "react";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import "./Widget.css";

const Widget = () => {
  return (
    <>
      <div className="card-widget">
        <div className="card">
          <div className="left-content">
            <div className="details">
              Total Amount (INR)
              <span />
              <p>The Amount you Spent in Total</p>
            </div>
            <div className="amount">₹22,709</div>
          </div>
          <div className="right-content">
            <div className="card-1">
              <div className="border">
                <div className="icons-container">
                  <div className="card-1_icon1">
                    <PaymentsOutlinedIcon color="success" />
                  </div>
                  <div className="card-1_icon2">
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="card-1_content">
                  <div className="card-1_content1">
                    Amount Received <span />
                    <p>₹10,456</p>
                  </div>
                  <div className="card-1_content2">Date:9/11</div>
                </div>
              </div>
            </div>
            <div className="card-2">
              <div className="border">
                <div className="icons-container-2">
                  <div className="card-2_icon1">
                    <AccountBalanceWalletOutlinedIcon color="error" />
                  </div>
                  <div className="card-2_icon2">
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="card-2_content">
                  <div className="card-2_content1">
                    Wallet Balance <span />
                    <p>₹8,456</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-3">
              <div className="border">
                <div className="icons-container-3">
                  <div className="card-3_icon1">
                    <ChecklistOutlinedIcon color="primary" />
                  </div>
                  <div className="card-3_icon2">
                    <MoreVertIcon />
                  </div>
                </div>
                <div className="card-3_content">
                  <div className="card-3_content1">
                    Paid: 34
                    <p>Pending Payment: 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
