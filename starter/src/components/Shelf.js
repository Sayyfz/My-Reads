
import Book from './Book'

const Shelf = ({shelfName, books, onUpdateShelf}) => {

    const shelfNamesMap = {
        "Currently Reading": "currentlyReading",
        "Want to Read": "wantToRead",
        "Read": "read",
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => 
                            <li key={book.id}>
                                <Book book={book} onUpdateShelf={onUpdateShelf} shelfName={shelfNamesMap[shelfName]}/>
                            </li>
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf