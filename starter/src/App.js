import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from 'react-router-dom'
import MContext from "./Context.js";
import Shelves from "./components/Shelves.js";
import Search from "./components/Search.js";
import BookPage from "./components/BookPage.js";
import * as BooksAPI from "./BooksAPI.js"

function App() {
  
  const [allBooks, setAllBooks] = useState([])

  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book,shelf)
    getBooks()
  }
  // const updateShelf = async (book,shelf) => {
  //   await BooksAPI.update(book,shelf);
  //   await updateShelfLocally(book,shelf);
  //   setAllBooks(allBooks);

  // }

  // const updateShelfLocally = (book,shelf) => {
  //   allBooks.filter((b) => b.id === book.id).shelf = shelf
  //   console.log(allBooks.filter((b) => b.id === book.id).shelf)
  // }

  const getBookShelfByID = (id) => {
    const targetBook = allBooks.filter((book) => book.id === id)
    return targetBook.length === 1 ? targetBook[0].shelf : "none"
  }

  const getBookById = async (id) => {
    const response = await BooksAPI.get(id)
    return response
  }

  const getBooks = async () => {
    const response = await BooksAPI.getAll()
    if(response.error)
      console.log(response.error)
    else
      setAllBooks(response)
    
  }

  useEffect(() => {

    getBooks()

  }, [])

  return (
    <div className="app">
      <MContext.Provider value={updateShelf}>
        <Routes>
            <Route exact path="/" element = {<Shelves books={allBooks}  />}/>
            <Route exact path="/search" element = {<Search onUpdateShelf={updateShelf}  getShelfByID={getBookShelfByID} />}/>
            <Route path="/book/:bookId" element = {<BookPage onUpdateShelf={updateShelf} getBook = {getBookById}/>}/>
          </Routes>
      </MContext.Provider>
      
      

    </div>
  );
};

export default App
