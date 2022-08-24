import {Link} from 'react-router-dom'
import {  useState } from 'react'
import Book from './Book'

const Search = ({onUpdateShelf, onSearchRequest}) => {

    
    const [searchQuery, setSearchQuery] = useState("");
    
    const [booksToShow, setBooksToShow] = useState([]);


    const searchBooks = async (query, maxResults) => {
        const response = await onSearchRequest(query, maxResults);
        return response;
    };

    const updateSearchQuery = async (event) => {
        setSearchQuery(event.target.value);
        setBooksToShow(event.target.value === "" ? [] : await searchBooks(event.target.value, 20));
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
                        value={searchQuery}
                        onChange={updateSearchQuery}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        booksToShow.length ? 
                            booksToShow.map((book) => <li key={book.id}> <Book book={book} onUpdateShelf={onUpdateShelf}/> </li>) :
                            <p>Search for any book!</p>
                    }
                </ol>
                
            </div>
        </div>
    );
};

export default Search;