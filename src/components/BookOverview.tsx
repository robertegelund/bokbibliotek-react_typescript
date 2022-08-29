import React, { useRef } from "react"
import { IoIosAddCircle } from "react-icons/io"
import "./BookOverview.css"


const BookOverview: React.FC = (props) => {
    const coverOverlay = useRef()
    const addedOverlay = useRef()

    const Show = () => {
        coverOverlay.current.style.visibility = "visible"
    }
    const Hide = () => {
        coverOverlay.current.style.visibility = "hidden" 
    }
    
    return(
        <div className="books">
            <div className="coversection" onMouseEnter={Show} onMouseLeave={Hide}>
                <img className="cover" src={props.cover} alt="" ></img>
                <div className="coveroverlay" ref={coverOverlay}>
                    <IoIosAddCircle className="addbtn" title="Legg til i bibliotek" 
                    onClick={() => {
                        props.addToLibrary(props.number)
                        coverOverlay.current.style.visibility = "hidden"
                        addedOverlay.current.style.animation = "added 1s"
                    }}/>
                </div>
                <div className="addedoverlay" ref={addedOverlay}><p className="added">Lagt til i biblioteket!</p></div>
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="published"><b>{props.published}</b></p>
        </div>
    )}

export default BookOverview