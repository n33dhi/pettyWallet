import * as React from "react";
import Chip from "@mui/material/Chip";
import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const Chips = (props) => {
    return props.status === "Paid" ? (
      <Chip icon={<DoneIcon />} label={props.status} color="success" size="small"/>
    ) : props.status === "Rejected" ? (
      <Chip icon={<ErrorOutlineOutlinedIcon />} label={props.status} color="error" size="small" />
    ) : (
      <Chip icon={<HourglassFullTwoToneIcon />} label={props.status} color="secondary"  size="small"/>
    );
};
  

export default Chips;
