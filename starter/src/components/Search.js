import {Link} from 'react-router-dom'
import { useState } from 'react'
import Book from './Book'

const Search = ({books, onUpdateShelf}) => {

    
    const [searchQuery, setSearchQuery] = useState("");

    const authorsContainQuery = (authors, query) => {
        for(let author of authors)
        {
            if(author.toLowerCase().includes(query.toLowerCase()) )
                return true;
        }
        return false;
    };

    const filteredBooks = (query) => {
        return books.filter( (book) => 
            book.title.toLowerCase().includes(query.toLowerCase()) 
            || authorsContainQuery(book.authors, query) );
    };
    
    const booksToShow = searchQuery === "" ? [] : filteredBooks(searchQuery);

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value);
    };
        
    
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
                        booksToShow.length !== 0 && booksToShow.map((book) => <li key={book.id}> <Book book={book} onUpdateShelf={onUpdateShelf}/> </li>)
                    }
                </ol>
                
            </div>
        </div>
    )
};

export default Search;