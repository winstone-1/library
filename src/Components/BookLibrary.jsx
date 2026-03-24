import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New State for Search

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/programming.json?limit=10')
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

  // Filter logic: Only show books that match the search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      <BookForm onAdd={(newBook) => setBooks([newBook, ...books])} />
      
      {/* Search Input Field */}
      <div className="relative max-w-md mx-auto">
        <input 
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
      </div>

      <hr className="my-6" />
      
      {/* Pass filteredBooks instead of books */}
      <BookList books={filteredBooks} onDelete={handleDelete} />
    </div>
  );
};

export default BookLibrary;