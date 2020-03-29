import React from "react";

function Book(props) {
  return (
    <div className="book-info">
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <h5>Authors: {props.authors}</h5>
      <div><img src={props.image} alt="temp"></img></div>
      <div>Information: {props.info}</div>
    </div>
  );
}

export default Book;