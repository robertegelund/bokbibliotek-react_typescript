import React, { useRef } from "react"
import { IoIosAddCircle } from "react-icons/io"
import "./BookOverview.css"

interface Props {
    cover:string, addToLibrary: (i:number) => void,
    number:number, title:string, published:string
}

const BookOverview: React.FC<Props> = (props) => {
    const coverOverlay = useRef<HTMLDivElement>(null)
    const addedOverlay = useRef<HTMLDivElement>(null)

    const show = ():void => {
        if(coverOverlay != null) {
            coverOverlay.current!.style.visibility = "visible"
        }
    }
    const hide = ():void => {
        if(coverOverlay != null) {
            coverOverlay.current!.style.visibility = "hidden"
        }
    }
    
    return(
        <div className="books">
            <div className="coversection" onMouseEnter={show} onMouseLeave={hide}>
                <img className="cover" src={props.cover} alt="" ></img>
                <div className="coveroverlay" ref={coverOverlay}>
                    <IoIosAddCircle className="addbtn" title="Legg til i bibliotek" 
                    onClick={() => {
                        props.addToLibrary(props.number)
                        coverOverlay.current!.style.visibility = "hidden"
                        addedOverlay.current!.style.animation = "added 1s"
                    }}/>
                </div>
                <div className="addedoverlay" ref={addedOverlay}><p className="added">Lagt til i biblioteket!</p></div>
            </div>
            <h1 className="title">{props.title}</h1>
            <p className="published"><b>{props.published}</b></p>
        </div>
    )}

export default BookOverview