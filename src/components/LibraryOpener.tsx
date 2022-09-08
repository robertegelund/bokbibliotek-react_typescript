import React from "react"
import { IoIosBook } from "react-icons/io"
import "./LibraryOpener.css"

interface Props {
    bookCount?: number,
    showLibrary?: () => void
}
    

const LibraryOpener: React.FC<Props> = (props) => {
    return(
        <nav className="library-opener">
            <div className="mylibrary" onClick={props.showLibrary}>
                <IoIosBook className="bookicon"/>
                <div className="bookcount">{props.bookCount}</div>
                Mitt bibliotek
            </div>
        </nav>
    )
}

export default LibraryOpener