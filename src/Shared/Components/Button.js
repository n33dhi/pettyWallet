import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Buttons = (props) => {
  const customStyle = {
    background: "#FF3434",
    boxShadow: "0px 4px 12px 0px rgba(255, 52, 52, 0.50)",
    padding: "9px 24px",
    fontFamily: "Nunito",
    fontWeight: "bold",
  };

  return props.disabled ? (
    <Button variant="contained" size="large" type={props.type} disabled disableElevation>
      {props.children}
    </Button>
  ) : props.href ? (
    <Button variant="contained" size="large" type={props.type} href="#contained-buttons">
      {props.children}
    </Button>
  ) : props.to ? (
    <Button
      variant="contained"
      size="large"
      type={props.type}
      disableElevation
      style={customStyle}
    >
      <Link to={props.to} exact={props.exact}></Link> {props.children}
    </Button>
  ) : (
    <Button
      variant="contained"
      size="large"
      type={props.type}
      disableElevation
      style={customStyle}
    >
      {props.children}
    </Button>
  );
};

export default Buttons;
