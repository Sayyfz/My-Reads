import { useParams, Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import BookPageStickyPart from './BookPageStickyPart.js';
import BookPageScrollableContent from './BookPageScrollableContent.js';
import "../BookPage.css";

const BookPage = ({getBook, onUpdateShelf}) => {


    const [book, setBook] = useState({})
    const params = useParams().bookId

    

    useEffect(() => {
        const getBookToShow = async () => {
        
            const res = await getBook(params)
            setBook(res)
            console.log(res)
        }
        getBookToShow()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='all'>
            <Link to="/" className="close-search"> Close  </Link>
            <div className='show-book-page d-flex flex-row'>
            
            {
                book.id? (
                    <div className='content-wrapper d-flex flex-row justify-content-center'>
                        <BookPageStickyPart onUpdateShelf={onUpdateShelf} book={book} />
                        <BookPageScrollableContent book={book} />
                        
                    </div>
                ) : ( <div> Loading </div> )
            }
            
            </div>
        </div>
        
    )
}

export default BookPage