import React from "react";
import UserTable from "../Components/UserTable";
import './Users.css';

const Users = () => {

  const USERS = [
    {
      id: 'BW1',
      name: 'Needhichozhan',
      email: 'needhi.m@birdscale.com',
      role: 'Claimer',
      amountClaimed: 3500,
    },
    {
      id: 'BW2',
      name: 'Gowtham',
      email: 'gowtham@birdscale.com',
      role: 'Admin',
      amountClaimed: 724,
    },
    {
      id: 'BW3',
      name: 'Chan',
      email: 'chan@birdscale.com',
      role: 'Claimer',
      amountClaimed: 344,
    },
  ];

  return (
    <div className="body-wrapper">
      <div className="heading">
        BirdWallet Users
      </div>
      <UserTable data={USERS} />
    </div>
  );
};

export default Users;
