import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from 'react-router-dom'
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI"

function App() {
  
  const [allBooks, setAllBooks] = useState([]);

  const updateShelf = async (book, shelf) => {
    const response = await BooksAPI.update(book,shelf);
    console.log(response);
  }

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setAllBooks(response);
      
      console.log(response);
    };

    getBooks();

  });


  return (
    <div className="app">

      <Routes>
        <Route path="/" element = {<Shelves books={allBooks} onUpdateShelf={updateShelf}/>}/>
        <Route path="/search" element = {<Search books={allBooks} onUpdateShelf={updateShelf}/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
