import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import Book from "../components/Book";
import { Input, FormBtn, } from "../components/Form"
import API from "./utils/API";

function Search() {
  const [formObject, setFormObject] = useState({}); // using this to get book title
  const [bookData, setBookData] = useState({}); // using this for book data from the API call

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("NAME", value);
    setFormObject({...formObject, [name]: value});
  }

  useEffect(() => {

  })

  function handleFormSubmit(event) {
    console.log("FORM OBJECT", formObject)
    event.preventDefault();
    if(formObject.title) {
      API.getGoogleBooks(formObject.title) // want to get the list of books
      .then(response => {
        console.log("RESPONSE", response); // this is working
        setBookData({...bookData = response.data});
      })
      .catch(err => console.log("ERROR", err));
    }
  }

  return (
    <div className="search-page">
      <header className="search-page-header">
      </header>
      <div className="book-search">
        {/* <Title></Title> */}
        {/* <SearchForm></SearchForm> */}
        <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Search for a book by title"
            />
            <FormBtn
              disabled={!(formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        <Book></Book>
        <Results></Results>
      </div>
    </div>
  );
}

export default Search;