import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

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
        setLoading(false); // Stop loading
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAdd = (newBook) => {
    setBooks([newBook, ...books]);
  };

  if (loading) return <div className="text-center py-10 text-xl font-semibold text-blue-600">Loading Library...</div>;

  return (
    <div className="p-4">
      <BookForm onAdd={handleAdd} />
      <hr className="my-10 border-gray-200" />
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default BookLibrary;