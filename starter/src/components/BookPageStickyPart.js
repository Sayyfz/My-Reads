

const BookPageStickyPart = ({book, onUpdateShelf}) => {
    
    const shelfBtnStyles = 'btn btn-outline-primary mt-3'


    const undefinedThumbnail = process.env.PUBLIC_URL + '/undefined thumbnail.png';
    const updateShelf = (e) => {
        e.preventDefault()
        onUpdateShelf(book, e.target.value)
    }
    return (
        <div className='static-book-preview nice-space d-flex flex-column'>
            <div className='show-book-container d-flex flex-row justify-content-end'>
                <img src={book && book.imageLinks && book.imageLinks.thumbnail?  book.imageLinks.thumbnail : undefinedThumbnail} className='show-book-cover ' alt='book cover' />
            </div>
            <button onClick={updateShelf} value='currentlyReading' type="button" className="btn btn-primary mt-3">Currently Reading</button>
            <button onClick={updateShelf} value='wantToRead' type="button" className={`btn ${shelfBtnStyles} `}>Want To Read</button>
            <button onClick={updateShelf} value='read' type="button" className={`btn ${shelfBtnStyles} `}>Read</button>
            <button onClick={updateShelf} value='none' type="button" className={`btn ${shelfBtnStyles} `}>None</button>
            
        </div>
        
    )
}

export default BookPageStickyPart