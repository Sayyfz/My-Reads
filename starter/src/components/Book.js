

const Book = ({book, onUpdateShelf, shelfName}) => {

    let selectedOption = shelfName;

    // console.log(`${book.title}    SHELF: ${shelfName}`)
    const selectShelf = (event) => {
        onUpdateShelf(book, event.target.value);
        selectedOption = event.target.value;
    };

    const undefinedThumbnail = process.env.PUBLIC_URL + '/undefined thumbnail.png';

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 192,
                    backgroundImage: book.imageLinks && book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})`
                    :
                    `url(${undefinedThumbnail})`,
                    }}
                ></div>

                <div className="book-shelf-changer">
                    <select onChange={selectShelf} value={selectedOption}>
                        <option value="default" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>

                    </select>
                </div>
            </div>

            <div className="book-title">{book.title}</div>
            <div className="book-authors">{ book.authors ? book.authors.map( (author) => <div>{author}</div> ) : <span></span>}</div>
        </div>
    )
}

export default Book