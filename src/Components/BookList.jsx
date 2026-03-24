import React from 'react';

const BookList = ({ books, onDelete }) => {
  // Check if the list is empty after filtering
  if (books.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 text-lg font-medium">No matching books found.</p>
        <p className="text-gray-400 text-sm">Try a different search or add a new book!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="border border-gray-100 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl text-gray-800 leading-tight mb-1">{book.title}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">by {book.author}</p>
          </div>
          <button 
            onClick={() => onDelete(book.id)} 
            className="text-red-400 hover:text-red-600 font-bold text-sm self-end"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;