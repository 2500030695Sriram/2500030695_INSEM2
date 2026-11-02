import React from 'react';

// Navbar Component
function Navbar() {
  return (
    <nav>
      <h2>Library Management System</h2>
      <p>Home | Books | Contact</p>
    </nav>
  );
}

// BookList Component
function BookList() {
  const books = [
    "Java Programming",
    "Python Basics",
    "Data Structures",
    "Operating Systems",
    "Database Management"
  ];

  return (
    <div>
      <h3>Available Books</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

// Main Component
function App() {
  return (
    <div>
      <Navbar />
      <h2>Welcome to Library</h2>
      <BookList />
    </div>
  );
}

export default App;