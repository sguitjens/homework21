import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Book from "../components/Book";
import Header from "../components/Header";
import { FormInput, FormBtn } from "../components/FormInput";
import API from "./utils/API";

function Saved() {
  const [formObject, setFormObject] = useState({}); // using this to get book title
  const [bookData, setBookData] = useState([]); // using this for book data from the API call

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, "title": value}); // had to hard code 'title' for some reason
  }

  // useEffect(() => {
  //   console.log("BOOK DATA EFFECT", bookData);
  //   // console.log(bookData[0].volumeInfo.imageLinks);
  //   console.log("FORMOBJECT", formObject);
  // })

  function handleFormSubmit(event) {
    console.log("FORM OBJECT", formObject)
    event.preventDefault();
    if(formObject.title) {
      API.getGoogleBooks(formObject.title) // want to get the list of books
      .then(response => {
        setBookData(response.data.items);
      })
      .catch(err => console.log("ERROR", err));
    }
  }

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
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            // image={book.volumeInfo.imageLinks.thumbnail ?
            //   book.volumeInfo.imageLinks.thumbnail :
            //   "/images/no_picture_available.png"}
            image={"/images/no_picture_available.png"}
            infoLink={book.volumeInfo.infoLink}
          ></Book>
          </div>
        ))}
    </div>
  );
}

export default Saved;