

const BookPageStickyPart = ({book, onUpdateShelf}) => {

    const undefinedThumbnail = process.env.PUBLIC_URL + '/undefined thumbnail.png';
    const updateShelf = (e) => {
        e.preventDefault()
        onUpdateShelf(book, e.target.value)
    }

    return (
        <div className='static-book-preview nice-space d-flex flex-column'>
            <div className='show-book-container d-flex flex-row justify-content-end'>
                <img src={book && book.imageLinks && book.imageLinks.thumbnail?  book.imageLinks.thumbnail : undefinedThumbnail} className='show-book-cover ' />
            </div>
            <button onClick={updateShelf} value='currentlyReading' type="button" class="btn btn-primary mt-3">Currently Reading</button>
            <button onClick={updateShelf} value='wantToRead' type="button" class="btn normal-btn mt-4">Want To Read</button>
            <button onClick={updateShelf} value='read' type="button" class="btn normal-btn gray-500 mt-3">Read</button>
            <button onClick={updateShelf} value='none' type="button" class="btn normal-btn gray-500 mt-3">None</button>
        </div>
    )
}

export default BookPageStickyPart