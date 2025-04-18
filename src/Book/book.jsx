import React, { useState } from 'react';
import initialBooks from './Books'; // data 9 buku
import './book.css';

const Book = () => {
  // State utama
  const [books, setBooks] = useState(initialBooks);

  // State form input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');

  // State pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // Tambah Buku
  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      title,
      description,
      author,
      year,
      image,
    };
    setBooks([...books, newBook]);

    // Reset input
    setTitle('');
    setDescription('');
    setAuthor('');
    setYear('');
    setImage('');
  };

  // Filter hasil pencarian
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset pencarian
  const handleResetSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Daftar Buku</h2>

      {/* Input Pencarian */}
      <div className="row mb-4">
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="Cari buku berdasarkan judul..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3 d-grid">
          <button
            className="btn btn-outline-secondary"
            onClick={handleResetSearch}
            disabled={!searchTerm}
          >
            Reset Pencarian
          </button>
        </div>
      </div>

      {/* Form Tambah Buku */}
      <form onSubmit={handleAddBook} className="row g-3 mb-5">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Penulis"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Tahun"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="URL Gambar"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3 d-grid">
          <button type="submit" className="btn btn-success">
            Tambah Buku
          </button>
        </div>
      </form>

      {/* Daftar Buku */}
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <div className="card h-100">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
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
          ))
        ) : (
          <p className="text-muted">Tidak ada buku yang cocok dengan pencarian.</p>
        )}
      </div>
    </div>
  );
};

export default Book;
