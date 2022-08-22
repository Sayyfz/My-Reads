
import Book from './Book'

const Shelf = ({shelfName, books, onUpdateShelf}) => {



    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => 
                            <li key={book.id}>
                                <Book book={book} onUpdateShelf={onUpdateShelf}/>
                            </li>
                        )
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf