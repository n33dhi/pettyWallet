import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './UserDashboard.css';


const UserDashboard = () => {

    const history = useHistory();

    const handleRequestform = () => {
        history.push('/cashQuester/requestForm')
    }

    return (
        <div className='body-wrapper'>
            <div className='heading'>
                Welcome, Needhichozhan 👋
            </div>
            <div className='frame'>
                <div className='intro'>
                    Ready to request cash for your expenses?
                </div>
                <div className='sub-intro'>
                   Let us help you streamline the process.
                </div>
                <div className='cta'>
                    <button className='request-btn' onClick={handleRequestform}>
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;