import React, {useRef} from "react"
import { IoMdTrash } from "react-icons/io"
import "./MyLibrary.css"

const MyLibrary = (props) => {
    const libraryBookOverlay = useRef()

    const showOverlay = () => {
        libraryBookOverlay.current.style.visibility = "visible"
    }
    const hideOverlay = () => {
        libraryBookOverlay.current.style.visibility = "hidden" 
    }
    
    return(
        <>  
            <div className="librarybooks">
                <div className="librarycoversection" onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
                    <img className="librarycover" src={props.cover} alt="" />
                    <div className="libraryoverlay" ref={libraryBookOverlay}>
                        <IoMdTrash className="removebtn" title="Slett fra bibliotek"  onClick={() => props.removeFromLibrary(props.number)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyLibrary