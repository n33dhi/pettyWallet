import React from "react";
import UserHistory from "../Components/UserHistory";
import UserDetails from "../Components/UserDetails";
import './UserProfile.css'

const UserProfile = () => {

    const USERPROFILE = [
        {
            claimId:'1',
            date: '02/09/2023',
            discription: 'Refreshments for Client',
            amount: 345,
            category: 'Refreshments',
            approvedBy : 'Person 1',
            status: 'Pending'
        },
    ];

    const USERDETAILS = [
        {
            userId: 'BW1',
            name: 'Needhichozhan M',
            email: 'needhi.m@birdscale.com',
            createdAt: '01/07/2023',
            contactNumber: 9876543210,
            role: 'Claimer'
        },
    ];

    return (
        <div className="body-wrapper">
            <div className="heading">
                <p>BirdWallet Users - BW1</p>
            </div>
            <UserDetails data={USERDETAILS} />
            <div className="heading">
                <p>Claims</p>
            </div>
            <UserHistory data={USERPROFILE} />
        </div>       
    );
};

export default UserProfile;