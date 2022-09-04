import { Link } from 'react-router-dom'

const BookPage = ({book}) => {

    const undefinedThumbnail = process.env.PUBLIC_URL + '/undefined thumbnail.png';


    return(
        <div>
            <Link
                to="/"
                className="close-search"
                >
                Close
                </Link>
               

                <div
                    className="book-cover"
                    style={{
                    width: 256,
                    height: 384,
                    backgroundImage: book.imageLinks && book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})`
                    :
                    `url(${undefinedThumbnail})`,
                    }}
                ></div>

        </div>
    )
}

export default BookPage