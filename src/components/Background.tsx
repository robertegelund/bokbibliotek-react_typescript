import React from 'react'
import "./Background.css"
import knausgaard from "../data/background"

const Background: React.FC = () => {
    return(
        <img className="knausgaard" src={knausgaard} alt="Karl Ove Knausgård"/>    
    )
}

export default Background