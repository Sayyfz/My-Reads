import { Dropdown, DropdownButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Book = ({book, onUpdateShelf, shelfName}) => {

    let selectedOption = shelfName;
    // console.log(`${book.title}    SHELF: ${shelfName}`)
    const selectShelf = (event) => {
        
        onUpdateShelf(book, event);
        selectedOption = event;
    };

    const highlightShelf = (event) => {
        console.log(event)
    }
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

    

                <div style={{ position: 'absolute', bottom: -10, right: 0}}>

                    <DropdownButton onSelect={selectShelf} className="book-shelf-changer" as={ButtonGroup} title="" >
                        <Dropdown.Item active={selectedOption === "currentlyReading"} eventKey="currentlyReading" onSelect={highlightShelf}>Currently Reading</Dropdown.Item>
                        <Dropdown.Item active={selectedOption === "wantToRead"} eventKey="wantToRead" onSelect={highlightShelf}>Want to Read</Dropdown.Item>
                        <Dropdown.Item active={selectedOption === "read"} eventKey="read" onSelect={highlightShelf}>Read</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item active={selectedOption === "none"} eventKey="none">None</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            {/* book.authors.map( (author) => <div key={author}>{author}</div> ) */}
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{ book.authors ? <div>{book.authors.join(", ")}</div> : <span></span>}</div>
        </div>
    )
}

export default Book