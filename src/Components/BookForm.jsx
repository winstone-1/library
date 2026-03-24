import { useState } from 'react';

const BookForm = ({ onAdd }) => {
  // 1. Define state for the inputs
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  
  const handleSubmit = (e) => {
    // Prevents the page from refreshing on submit
    e.preventDefault(); 
    
    // Validation: Don't add if inputs are empty
    if (!title || !author) return;

    // 3. Call the function passed down from BookLibrary
    onAdd({ 
      title, 
      author, 
      id: Date.now() // Creates a unique ID for the new book
    });

    // 4. Clear the inputs after adding
    setTitle(''); 
    setAuthor('');
  };

  return (
    // 5. Attach the function to the form's onSubmit event
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow flex gap-4">
      <input 
        className="border p-2 flex-1" 
        placeholder="Book Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        className="border p-2 flex-1" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;