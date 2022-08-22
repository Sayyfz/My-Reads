import {Link} from 'react-router-dom'
import { useState } from 'react'
import Book from './Book'

const Search = ({books}) => {

    
    const [searchQuery, setSearchQuery] = useState("");

    
    const filteredBooks = (query) => {
        console.log(books);
        // return books.filter( (book) => 
        //     book.title.toLowerCase().includes(query.toLowerCase()) );
    } 
    
    const booksToShow = searchQuery === "" ? [] : books;

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value);
    }
        
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                to="/"
                className="close-search"
                >
                Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={updateSearchQuery}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        // booksToShow.length !== 0 && booksToShow.map((book) => <li key={book.id}> <Book book={book}/> </li>)
                    }
                </ol>
                
            </div>
        </div>
    )
};

export default Search;