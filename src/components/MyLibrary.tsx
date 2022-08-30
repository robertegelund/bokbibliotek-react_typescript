import React, {useRef} from "react"
import { IoMdTrash } from "react-icons/io"
import "./MyLibrary.css"

interface Props {
    cover:string, 
    removeFromLibrary:(i:number) => void,
    number:number,
    title:string
}

const MyLibrary: React.FC<Props> = (props) => {
    const libraryBookOverlay = useRef<HTMLDivElement>(null)

    const showOverlay = () => {
        if(libraryBookOverlay != null) {
            libraryBookOverlay.current!.style.visibility = "visible"
        }
    }
    const hideOverlay = () => {
        if(libraryBookOverlay != null) {
            libraryBookOverlay.current!.style.visibility = "hidden" 
        }
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