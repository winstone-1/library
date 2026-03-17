import React from 'react'
import BookForm from './Components/BookForm'
import BookLibrary from './Components/BookLibrary'
import Header from './Components/Header'

function App() {
  const headingStyle = {
    color : "blue",
    backgroundColor : ""
  }
  return (
    <div>
      <>
      <BookForm/>
      <BookLibrary/>
      <Header/>
      </>
    </div>
  )
}

export default App
