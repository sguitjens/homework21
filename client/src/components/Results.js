import React from "react";
import Book from "../components/Book"

function Results(props) {
  console.log("RESULTS PROPS", props);

  return (
    <div className="book-list">
      <Book></Book>
    </div>
  );
}

export default Results;