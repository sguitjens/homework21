import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  console.log("input props", props);
  return (
    <div className="form-group">
    <label><h4>{props.name}</h4></label>
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  console.log("formbtn props", props);
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
