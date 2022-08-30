import React from 'react'
import Background from "./components/Background"
import BookDataAndSearch from "./components/BookDataAndSearch"
import "./App.css"


const App: React.FC = () => {
  return(
    <div className="app">
      <Background />
      <BookDataAndSearch />
    </div>
    
  )
}

export default App