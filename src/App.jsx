import React from 'react'
import BookForm from './Components/BookForm'
import BookLibrary from './Components/BookLibrary'
import Header from './Components/Header'
import BookList from './Components/BookList'

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
      <BookList/>
      </>
    </div>
  )
}

export default App
