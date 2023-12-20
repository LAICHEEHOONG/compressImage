import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {setFileType} from '../features/parameter/parameterSlice';

export default function TypeSelector() {
  const dispatch = useDispatch();
  const convertType = useSelector((state) => state.parameter.fileType);

  const handleChange = (event) => {
    dispatch(setFileType(event.target.value));
  };

  return (
    <Box sx={{ width: 224.61 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">File Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={convertType}
          label="File Type"
          onChange={handleChange}
        >
          <MenuItem value={"keep"}>Keep Image Type</MenuItem>
          <MenuItem value={"image/webp"}>webp</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
