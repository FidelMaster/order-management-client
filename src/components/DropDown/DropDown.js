import * as React from "react";
import { createElement } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const DropDown = ({
  id,
  labelId,
  label,
  value,
  handleChangeValue,
  data,
  keyValue,
  keyDescription,
}) => (
  <FormControl fullWidth>
    <InputLabel id={labelId}>{label}</InputLabel>
    <Select
      labelId={labelId}
      id={id}
      value={value}
      label={label}
      onChange={handleChangeValue}
    >
      {data.map((item, index) => {
        return (
          <MenuItem value={item[keyValue]}>{item[keyDescription]}</MenuItem>
        );
      })}
    </Select>
  </FormControl>
);

export default DropDown;
