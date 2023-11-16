import React, { useCallback, useState } from "react";
import InputField from "../../Shared/InputField/InputField";
import Buttons from "../../Shared/Components/Button";
import SimpleReactValidator from "simple-react-validator";

import "./RequestForm.css";

const RequestForm = () => {
  const [description, setDescription] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const requestFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      description,
      approvedBy,
      category,
      amount,
    };
    console.log(formData);
  };

  const inputHandler = useCallback((id, value) => {
    switch (id) {
      case "description":
        setDescription(value);
        break;
      case "approvedBy":
        setApprovedBy(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="req-wrapper">
      <div className="req-left">
        <div className="req-left-text">
          <h1>Claim Your Flight 🚀</h1>
          <span />
          <p>Petty Cash Request Form</p>
        </div>
        <div className="req-left-img">
          <img src="" alt="BirdWallet" />
        </div>
      </div>
      <form className="req-right" onSubmit={requestFormSubmitHandler}>
        <div className="description">
          <InputField
            required
            id="description"
            label="Description"
            placeholder="Ex: Courier to Coimbatore"
            value={description}
            onInput={inputHandler}
          />
        </div>
        <div className="approvedBy">
          <InputField
            required  
            id="approvedBy"
            label="Approved by"
            placeholder="Person Name"
            value={description}
            onInput={inputHandler}
          />
        </div>
        <div className="category">
          <InputField
            required
            element="Category"
            id="category"
            label="Category"
            value={description}
            onInput={inputHandler}
          />
        </div>
        <div className="amt">
          <InputField
            required
            element="Amount"
            id="amount"
            label="Amount"
            value={description}
            onInput={inputHandler}
          />
        </div>
        <div className="amt">
          <InputField type="number" label="Bill" />
        </div>
        <div className="requestForm-btn">
          <Buttons type="submit">Submit</Buttons>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
