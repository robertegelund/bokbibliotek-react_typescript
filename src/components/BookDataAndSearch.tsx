import React, {useState, useRef} from 'react'
import { IoIosSearch, IoMdCloseCircle } from "react-icons/io"
import BookOverview from "./BookOverview"
import MyLibrary from "./MyLibrary"
import Navigation from "./Navigation"
import knausbooks from "../data/knausbooks"
import bookCovers from "../data/book-covers"
import "./BookDataAndSearch.css"

const BookDataAndSearch = () => {
    const [books, setBooks] = useState(knausbooks)
    const [libraryBooks, setLibraryBooks] = useState([])
    const [isLibraryEmpty, setIsLibraryEmpty] = useState(true)
    
    const mySearchSection = useRef()
    const librarycontainer = useRef()

    const bookSearch = (e) => {
        setBooks(
            knausbooks.filter(knausbook => knausbook.title.toLowerCase().includes(e.target.value.toLowerCase())
        ))
    }
    
    const growSearch = () => mySearchSection.current.style.width = "28rem"
    const shrinkSearch = () => mySearchSection.current.style.width = "8.5rem"
    
    const showLibrary = () =>librarycontainer.current.style.animation = "comeDown 1s forwards"
    const hideLibrary = () => librarycontainer.current.style.animation = "getUp 1s forwards"
    
    const addToLibrary = (i) => { setLibraryBooks( prev => [...prev, books[i] ] ); setIsLibraryEmpty(false);
    console.log(libraryBooks.length) }

    const removeFromLibrary = (i) => {
        const libraryCopy = [...libraryBooks]
        libraryCopy.splice(i, 1)
        setLibraryBooks(libraryCopy)
        if(libraryCopy.length === 0) setIsLibraryEmpty(true)
    }

    let statusMessage;
    if(isLibraryEmpty) {
        statusMessage = <p style={{color: "white", fontSize: "3rem"}}>Ditt bibliotek er tomt</p>;
    } else {
        statusMessage = ""
    }

    return(
        <>
            <div className="bookoverview">
                <div className="searchsection" ref={mySearchSection}>
                    <IoIosSearch className="searchicon"/>
                    <input className="booksearch" type="text" placeholder="Søk på bok" onInput={bookSearch} onMouseEnter={growSearch} onMouseLeave={shrinkSearch}/> 
                </div>                 
                    
                <div className="bookcontainer">
                    {
                        books.map( (book, i) => 
                            <BookOverview key={i} number={i} cover={bookCovers[i]} published={book.published} title={book.title} addToLibrary={addToLibrary} />
                    )}
                </div>  
            </div>
                
                <div className="librarycontainer" ref={librarycontainer}>
                    <IoMdCloseCircle className="xclose" onClick={hideLibrary} />
                    
                    {/* Adding paragraph if the my library container is empty */}
                    {statusMessage}

                    {
                        libraryBooks.map( (libraryBook, i) =>
                            <MyLibrary key={i} number={i} cover={bookCovers[i]} published={libraryBook.published} title={libraryBook.title} removeFromLibrary={removeFromLibrary} />
                    )}
                </div>

            <Navigation showLibrary={showLibrary} bookCount={libraryBooks.length} />
        </>
    )}

export default BookDataAndSearch