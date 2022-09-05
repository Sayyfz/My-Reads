
import StarsRating from './StarsRating';

const BookPageScrollableContent = ({book}) => {
    return (
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
    )
}

export default BookPageScrollableContent