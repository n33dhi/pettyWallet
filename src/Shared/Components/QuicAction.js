import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const QuickAction = (props) => {
  const [quickAction, setQuickaction] = React.useState('');

  const handleChange = (event) => {
    setQuickaction(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={quickAction}
        label="Quick Action"
        onChange={handleChange}
        // style={{borderRadius:'20px'}}
      >
        <MenuItem value="paid" color='success'>Paid</MenuItem>
        <MenuItem value="pending" color='secondary'>Pending</MenuItem>
        <MenuItem value="rejected" color='danger'>Rejected</MenuItem>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default QuickAction;