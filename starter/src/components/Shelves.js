import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'
import 'bootstrap/dist/css/bootstrap.min.css';

const Shelves = ({books, onUpdateShelf, bookOnClick}) => {

    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");

    return ( 
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf shelfName="Currently Reading" books={currentlyReading} onUpdateShelf={onUpdateShelf} bookOnClick={bookOnClick}/>
                        <Shelf shelfName="Want to Read" books={wantToRead} onUpdateShelf={onUpdateShelf} bookOnClick={bookOnClick}/>
                        <Shelf shelfName="Read" books={read} onUpdateShelf={onUpdateShelf} bookOnClick={bookOnClick}/>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
    )
};

export default Shelves;