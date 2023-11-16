import React from "react";
import './UserDetails.css';
import Buttons from "../../Shared/Components/Button";

const UserDetails = (props) => {
  // const { data } = props;

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <p>Profile</p>
      </div>
      <div className="profile-body">
        <div className="profile-padding">
          <div className="pb-1">
            <div className="userID">UserID:</div>
            <p>BW1</p>
          </div>
          <div className="pb-2">
            <div className="name">
              Username:
              <p>Needhichozhan M</p>
            </div>
            <div className="email">
              Email:
              <p>needhi.m@birdscale.com</p>
            </div>
          </div>
          <div className="pb-3">
            <div className="createdat">
              Created at:
              <p>09/08/2023</p>
            </div>         
            <div className="number">
              Contact number:
              <p>9876543210</p>
            </div>           
          </div>
          <div className="pb-4">
            <div className="role">
              Role:
              <p>Claimer</p>
            </div>
          </div>
          <div className="btn">
            <Buttons>Delete User</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
