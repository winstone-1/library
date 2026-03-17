import React from 'react';
import Header from './Components/Header';
import BookLibrary from './Components/BookLibrary';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        {/* BookLibrary handles the state for both the Form and the List */}
        <BookLibrary />
      </main>
    </div>
  );
}

export default App;
