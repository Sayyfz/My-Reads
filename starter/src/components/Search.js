import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

const Search = ({onUpdateShelf, getShelfByID, bookOnClick}) => {

    

   
    const [searchQuery, setSearchQuery] = useState("");
    
    const [booksToShow, setBooksToShow] = useState([]);

    const updateSearchQuery = (event) => {
        setSearchQuery(event.target.value);
    };


    useEffect(() => {

        let isMounted = true;
        const searchForBooks = async () => {
            const response = await BooksAPI.search(searchQuery, 40);
            if(response)
            {
                if(response.error)
                    setBooksToShow([]);

                // If request to api search is made but the component is unmounted when it gets the response, it will not update books
                else if(isMounted)
                    setBooksToShow(response);
                
            }
            else 
                setBooksToShow([]);

        };
        
        if(searchQuery === "")
            setBooksToShow([]);
        else
            searchForBooks();

        return (() => {isMounted = false;} );
    }

    , [searchQuery]);
 
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
                        booksToShow &&
                        booksToShow.length ? 
                            booksToShow.map((book) => {
                                return ( <li key={book.id}> <Book book={book} onUpdateShelf={onUpdateShelf} shelfName={getShelfByID(book.id)} bookOnClick={bookOnClick}/> </li> ) 
                            }) :
                            <h4>No results to show!</h4>
                    }
                </ol>
                
            </div>
        </div>
    );
};

export default Search;