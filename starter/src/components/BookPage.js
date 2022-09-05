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
        <div className='show-book-page'>
            <Link to="/" className="close-search"> Close  </Link>
            <div className='content-wrapper'>
                {
                    book.id? (
                        <div className='show-book-container'>
                            <img src={book && book.imageLinks && book.imageLinks.thumbnail?  book.imageLinks.thumbnail : undefinedThumbnail} className='show-book-cover' />
                            <StarsRating rating={book.averageRating} />
                        </div>
                        
                    ) : ( <div> Loading </div> )
                }
            </div>
            
            
        </div>
    )
}

export default BookPage