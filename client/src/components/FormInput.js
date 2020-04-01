import React from "react";
import { Button, TextField } from '@material-ui/core';

export function FormInput(props) {
  console.log("input props", props);
  return (
    <div className="form-group">
      <label>{props.name}</label>
      <TextField {...props} fullWidth={true} margin="normal" variant="outlined" InputLabelProps={{shrink:true,}}/>
    </div>
  );
}

export function FormBtn(props) {
  console.log("formbtn props", props);
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {/* {props.children} */}
    </Button>
  );
}
