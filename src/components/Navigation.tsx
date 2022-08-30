import React from "react"
import { IoIosBook } from "react-icons/io"
import "./Navigation.css"

interface Props {
    bookCount: number,
    showLibrary: () => void
}
    

const Navigation: React.FC<Props> = (props) => {
    return(
        <nav className="navigation">
            <div className="mylibrary" onClick={props.showLibrary}>
                <IoIosBook className="bookicon"/>
                <div className="bookcount">{props.bookCount}</div>
                Mitt bibliotek
            </div>
        </nav>
    )
}

export default Navigation