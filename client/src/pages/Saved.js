import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Book from "../components/Book";
import Header from "../components/Header";
import { FormInput, FormBtn } from "../components/FormInput";
import API from "./utils/API";

function Saved() {
  const [formObject, setFormObject] = useState({}); // using this to get book title
  const [bookData, setBookData] = useState([]); // using this for book data from the API call

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, "title": value}); // had to hard code 'title' for some reason
  // }

  function handleDeleteClick(event, id) {
    API.deleteBook(id)
    .then(() => getBookList());
  }

  function getBookList() {
    console.log("FORM OBJECT", formObject)
      API.getBooks()
      .then(response => {
        // console.log("DATABASE RESPONSE", response.data);
        setBookData(response.data);
      })
      .catch(err => console.log("ERROR", err));
  }

  useEffect(() => {
    getBookList();
    console.log("use effect");
  //   console.log("BOOK DATA EFFECT", bookData);
  //   // console.log(bookData[0].volumeInfo.imageLinks);
  //   console.log("FORMOBJECT", formObject);
  }, []);

  return (
    <div>
      <Header></Header>
      <Card>
        <CardHeader
          title="Saved Books"
        >
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
        {bookData.map(book => (
          <div>
          <Book
            leftButton="View"
            rightButton="Delete"
            id={book._id}
            title={book.title}
            author={book.authors}
            description={book.description}
            // image={book.volumeInfo.imageLinks.thumbnail ?
            //   book.volumeInfo.imageLinks.thumbnail :
            //   "/images/no_picture_available.png"}
            image={book.image}
            infoLink={book.infoLink}
            handleClick={handleDeleteClick}
          ></Book>
          </div>
        ))}
    </div>
  );
}

export default Saved;