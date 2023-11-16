import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import QuickAction from "../Components/QuicAction";
import Category from "../Components/Category";
import { OutlinedInput, InputAdornment } from "@mui/material";

import "./InputField.css";


const InputField = (props) => {

  const [inputState, setInputState] = useState({value:''});

  const changeHandler = (e) => {
    setInputState({value: e.target.value});
  };

  const {value} = inputState;
  const {onInput, id} = props;

  useEffect(() => {
    if (typeof props.onInput === 'function') {
      onInput(id, value);
    }
  }, [onInput, id, value]);

  return props.element === "Category" ? (
    <div>
      <p className="label">
        <label htmlFor={props.id}>{props.label}</label>
      </p>
      <Category onChange={changeHandler} value={inputState.value} />
    </div>
  ) : props.element === "QuickAction" ? (
    <div>
      <p className="label">
        <label htmlFor={props.id}>{props.label}</label>
      </p>
      <QuickAction onChange={changeHandler} value={inputState.value}  />
    </div>
  ) : props.element === "Amount" ? (
    <div>
      <p className="label">
        <label htmlFor={props.id}>{props.label}</label>
      </p>
      <OutlinedInput
        required
        id="amount"
        type="number"
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        style={{ width: "345px" }}
        onChange={changeHandler} 
        value={inputState.value}
      />
    </div>
  ) : (
    <div>
      <p className="label">
        <label htmlFor={props.id}>{props.label}</label>
      </p>
      <TextField
        placeholder={props.placeholder}
        required = {props.required}
        id={props.id}
        type="input"
        style={{ width: "345px" }}
        onChange={changeHandler} 
        value={inputState.value}
      />
    </div>
  );
};

export default InputField;
