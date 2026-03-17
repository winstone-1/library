import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    fetch('https://openlibrary.org/subjects/programming.json?limit=5')
      .then(res => res.json())
      .then(data => {
        
        const formatted = data.works.map(b => ({ 
          id: b.key, 
          title: b.title, 
          author: b.authors ? b.authors[0].name : "Unknown Author" 
        }));
        setBooks(formatted);
      });
  }, []);

  return (
    <div className="p-4">
      
      <BookForm onAdd={(newBook) => setBooks([newBook, ...books])} />
      
      <hr className="my-6" />

      
      <BookList books={books} />
    </div>
  );
};
export default BookLibrary;