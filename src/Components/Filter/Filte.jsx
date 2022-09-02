import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import "./Filter.css";

const Filte = ({ type, setType }) => {
  return (
    <div>
      <FormControl className="d-flex filterSection">
        <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Management"
            control={<Radio />}
            label="management"
            style={{ color: "black" }}
          />

          <FormControlLabel value="Design" control={<Radio />} label="Design" />
          <FormControlLabel
            value="Marketing"
            control={<Radio />}
            label="marketing"
          />

          <FormControlLabel
            value="Development"
            control={<Radio />}
            label="Development"
          />
          <FormControlLabel value="all" control={<Radio />} label="all" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filte;
