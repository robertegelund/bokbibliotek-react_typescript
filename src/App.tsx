import React from 'react'
import Background from "./components/Background"
import Navigation from "./components/Navigation"
import BookDataAndSearch from "./components/BookDataAndSearch"
import MyLibrary from "./components/MyLibrary"
import "./App.css"


const App: React.FC = () => {
  return(
    <div className="app">
      <Background />
      <Navigation />
      <BookDataAndSearch />
      <MyLibrary />
    </div>
  )
}

export default App