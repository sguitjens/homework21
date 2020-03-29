import React from "react";
import Book from "../components/Book"

function Results(props) {
  return (
    <div className="book-list">
      <Book></Book>
      {/* <Book
        title={appState.title}
        image={appState.image}
        info={appState.info}
      >
      </Book> */}
    </div>
  );
}

export default Results;