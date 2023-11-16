import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Category = (props) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120, width: "345px" }} required>
        <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="courier">Courier</MenuItem>
          <MenuItem value="Refreshments">Refreshments</MenuItem>
          <MenuItem value="supplies">Supplies</MenuItem>
          <MenuItem value="travel">Travel</MenuItem>
          <MenuItem value="others">
            <em>Others</em>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
