import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

const Shelves = ({currentlyReading, wantToRead, read}) => {
    return ( 
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf shelfName="Currently Reading" books={currentlyReading}/>
                        <Shelf shelfName="Want to Read" books={wantToRead}/>
                        <Shelf shelfName="Read" books={read}/>
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
                </div>
            </div>
    )
};

export default Shelves;