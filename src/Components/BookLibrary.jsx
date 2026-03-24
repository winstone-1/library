import { useState, useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const BookLibrary = () => {
  // 1. Initialize with an existing list of books
  const [books, setBooks] = useState([
    { id: '1', title: 'Clean Code', author: 'Robert C. Martin' },
    { id: '2', title: 'The Pragmatic Programmer', author: 'Andy Hunt' },
    { id: '3', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. Fetch from API based on search input
  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=5`)
        .then(res => res.json())
        .then(data => {
          const formatted = data.docs.map(b => ({
            id: b.key,
            title: b.title,
            author: b.author_name ? b.author_name[0] : "Unknown Author"
          }));
          setSearchResults(formatted);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const addToLibrary = (book) => {
    if (!books.find(b => b.id === book.id)) {
      setBooks([book, ...books]);
    }
    setSearchTerm(''); 
    setSearchResults([]);
  };

  return (
    <div className="space-y-8">
      <BookForm onAdd={(newBook) => setBooks([newBook, ...books])} />
      
      <div className="relative max-w-md mx-auto">
        <input 
          type="text"
          placeholder="Search API to add to your list..."
          className="w-full p-3 border-2 border-blue-100 rounded-xl focus:border-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* API Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute z-10 w-full bg-white mt-1 border rounded-xl shadow-xl overflow-hidden">
            {searchResults.map(result => (
              <button 
                key={result.id}
                onClick={() => addToLibrary(result)}
                className="w-full text-left p-3 hover:bg-blue-50 border-b last:border-none"
              >
                <p className="font-bold text-sm">{result.title}</p>
                <p className="text-xs text-blue-500">{result.author}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center underline decoration-blue-500 underline-offset-8">
          Your Collection
        </h2>
        <BookList books={books} onDelete={(id) => setBooks(books.filter(b => b.id !== id))} />
      </div>
    </div>
  );
};

export default BookLibrary;