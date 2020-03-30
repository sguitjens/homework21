import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Book from "../components/Book";
import Header from "../components/Header";
import { FormInput, FormBtn } from "../components/FormInput";
import API from "./utils/API";

function Search() {
  const [formObject, setFormObject] = useState({}); // using this to get book title
  const [bookData, setBookData] = useState({items: []}); // using this for book data from the API call

  function handleInputChange(event) {
    const { value } = event.target;
    setFormObject({...formObject, "title": value}); // had to hard code 'title' for some reason
  }

  useEffect(() => {
    console.log("BOOK DATA EFFECT", bookData.items);
    console.log("just book data", bookData);
    // console.log(bookData[0].volumeInfo.imageLinks);
    console.log("FORMOBJECT", formObject);
  })

  function handleFormSubmit(event) {
    console.log("FORM OBJECT", formObject)
    event.preventDefault();
    if(formObject.title) {
      API.getGoogleBooks(formObject.title) // want to get the list of books
      .then(response => {
        setBookData(response.data);
      })
      .catch(err => console.log("ERROR", err));
    }
  }

  return (
    <div>
      <Header></Header>
      <Card>
        <CardHeader
          title="Search for a Book"
        >
        </CardHeader>
        <CardContent>
          <FormInput
            id="standard-full-width"
            onChange={handleInputChange}
            label="Title"
            placeholder="Search for a book by title"
            >
          </FormInput>
          <FormBtn
            disabled={!(formObject.title)}
            onClick={handleFormSubmit}>
            SEARCH
          </FormBtn>
        </CardContent>
      </Card>
        {bookData.items.map(book => (
          <div>
          <Book
            leftButton="View"
            rightButton="Save"
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks ? 
              book.volumeInfo.imageLinks.thumbnail :
              "/images/no_picture_available.png"
              }
            infoLink={book.volumeInfo.infoLink}
          ></Book>
          </div>
        ))}
    </div>
  );
}

export default Search;