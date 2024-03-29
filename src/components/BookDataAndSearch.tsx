import React, {useState, useRef, FormEvent} from 'react'
import { IoIosSearch, IoMdCloseCircle } from "react-icons/io"
import BookOverview from "./BookOverview"
import MyLibrary from "./MyLibrary"
import LibraryOpener from "./LibraryOpener"
import knausbooks from "../data/knausbooks"
import "./BookDataAndSearch.css"

const BookDataAndSearch: React.FC = () => {
    interface BookData {
        title: string, cover: string, published:string, description:string
    }

    const [books, setBooks] = useState<BookData[]>(knausbooks)
    const [libraryBooks, setLibraryBooks] = useState<BookData[]>([])
    const [isLibraryEmpty, setIsLibraryEmpty] = useState<boolean>(true)
    const [searchString, setSearchString] = useState<string>("")
    
    const mySearchSection = useRef<HTMLDivElement>(null)
    const librarycontainer = useRef<HTMLDivElement>(null)

    const bookSearch = (e:FormEvent<HTMLInputElement>) => {
        setSearchString((e.target as HTMLInputElement).value.toLowerCase())
        setBooks(
            knausbooks.filter(knausbook => knausbook.title.toLowerCase().includes(searchString)
        ))
    }
    
    const showLibrary = ():void => {
        if(librarycontainer != null) {
            librarycontainer.current!.style.animation = "comeDown 1s forwards"
        }
    }

    const hideLibrary = ():void => {
        if(librarycontainer != null) {
            librarycontainer.current!.style.animation = "getUp 1s forwards"
        }
    }
    
    const addToLibrary = (i:number):void => { 
        setLibraryBooks( prev => [...prev, books[i] ] );
        setIsLibraryEmpty(false); 
    }

    const removeFromLibrary = (i:number):void => {
        const libraryCopy = [...libraryBooks]
        libraryCopy.splice(i, 1)
        setLibraryBooks(libraryCopy)
        if(libraryCopy.length === 0) setIsLibraryEmpty(true)
    }

    let statusMessage;
    if(isLibraryEmpty) {
        statusMessage = <p style={{color: "white", fontSize: "1.5rem"}}>Ditt bibliotek er tomt</p>;
    } else {
        statusMessage = ""
    }

    return(
        <>
            <div className="bookoverview">
                <nav className="searchsection" ref={mySearchSection}>
                    <LibraryOpener showLibrary={showLibrary} bookCount={libraryBooks.length} />
                    <div className="searchbar">
                        <IoIosSearch className="searchicon"/>
                        <input className="booksearch" type="text" placeholder="Søk på bok" onChange={bookSearch} />
                    </div>
                </nav>                 
                    
                <div className="bookcontainer">
                    {
                        books.map( (book, i) => 
                            <BookOverview key={i} number={i} cover={book.cover} published={book.published} title={book.title} addToLibrary={addToLibrary} />
                    )}
                </div>  
            </div>
                
                <div className="librarycontainer" ref={librarycontainer}>
                    <IoMdCloseCircle className="xclose" onClick={hideLibrary} />
                    
                    {/* Adding paragraph if the my library container is empty */}
                    {statusMessage}

                    {
                        libraryBooks.map( (libraryBook, i) =>
                            <MyLibrary key={i} number={i} cover={libraryBook.cover} title={libraryBook.title} removeFromLibrary={removeFromLibrary} />
                    )}
                </div>

            
        </>
    )}

export default BookDataAndSearch