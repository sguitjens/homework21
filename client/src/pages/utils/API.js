import axios from "axios";
const Url="https://www.googleapis.com/books/v1/";
// let query = "";

export default {
  getGoogleBooks: function(search) {
    // const regex = /\s/g;
    // search = search.replace(regex, "%20")
    search = "harry potter"
    let query = "volumes?q=" + search;
    return axios.get(Url + query)
    // .then(res => {
    //   console.log("RESULT", res);
    //   console.log("FIRST BOOK", res.data.items[0].volumeInfo);
    //   console.log("title", res.data.items[0].volumeInfo.title);
    //   console.log("authors", res.data.items[0].volumeInfo.authors[0]); //iterate over the array
    //   console.log("description", res.data.items[0].volumeInfo.description);
    //   console.log("thumbnail link", res.data.items[0].volumeInfo.imageLinks.thumbnail);
    //   console.log("small thumbnail link", res.data.items[0].volumeInfo.imageLinks.smallThumbnail);
    //   console.log("infoLink", res.data.items[0].volumeInfo.infoLink);
    // })
    // .catch(err => console.log("ERROR", err));
    // return axios.get(query);
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};