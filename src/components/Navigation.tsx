import React from "react"
import { IoIosBook } from "react-icons/io"
import "./Navigation.css"

const Navigation = (props) => {
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