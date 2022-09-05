import { useParams, Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import StarsRating from './StarsRating';
import "../BookPage.css";

const BookPage = ({getBook}) => {

    const undefinedThumbnail = process.env.PUBLIC_URL + '/undefined thumbnail.png';

    const [book, setBook] = useState({})
    const params = useParams().bookId

    const getBookToShow = async () => {
        
        const res = await getBook(params)
        setBook(res)
        console.log(res)
    }

    useEffect(() => {
        getBookToShow()
    }, [])

    return(
        <div>
            <Link to="/" className="close-search"> Close  </Link>
            <div className='show-book-page'>
            
            {
                book.id? (
                    <div className='content-wrapper'>
                        <div className='static-book-preview nice-space'>
                            <div className='show-book-container '>
                                <img src={book && book.imageLinks && book.imageLinks.thumbnail?  book.imageLinks.thumbnail : undefinedThumbnail} className='show-book-cover' />
                            </div>
                        </div>
                        
                        <div className='scrollable-content-container nice-space'> 
                            <h2> {book.title}</h2>
                            <h3> { book.authors && <div>{book.authors.join(", ")}</div> } </h3>
                            <StarsRating rating={book.averageRating} />

                            <p className="book-page-description">
                                {book.description}
                            </p>
                            <br />
                            <div className='book-page-categories'>
                                <h6><b>Categories: </b>   
                                    <span className='text-muted'>
                                        { 
                                            book.categories ? 
                                            book.categories.join(', ').toLowerCase() : 
                                             'No categories to show! '
                                        }
                                    </span> 
                                </h6>
                            </div>
                            <div className='book-page-publish-date'>
                                <h6>
                                    <b>Publish Date: </b> <span className='text-muted'>{book.publishedDate}</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                ) : ( <div> Loading </div> )
            }
            
            </div>
        </div>
        
    )
}

export default BookPage