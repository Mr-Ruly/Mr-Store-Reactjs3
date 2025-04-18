import React, { useState } from 'react';
import initialBooks from './Books';

const Home = () => {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Ini adalah buku yang baru ditambahkan.",
      image: "https://via.placeholder.com/150"
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Daftar Buku (Home)</h2>
      <button onClick={handleAddBook} className="btn btn-primary mb-3">
        Tambah Buku
      </button>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100">
              <img src={book.image} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {book.author} - {book.year}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
