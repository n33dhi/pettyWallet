import React from "react";
import HistoryTable from "../Components/HistoryTable";
import Buttons from "../../Shared/Components/Button";
import './History.css'



const History = () => {

    const HISTORY = [
        {
          claimId: '1',
          name: 'Needhichozhan',
          date: '12/09/23',
          amount: 750,
          status:'Paid',
          category: 'Fuel Expense'
        },
  ];

    return (
        <div className="body-wrapper">
            <div className="heading">
                History of Claims
            </div>
            <div className="report">
                <Buttons>Generate Report</Buttons>
            </div>
            <HistoryTable data={HISTORY}/>
        </div>
    );
};

export default History;