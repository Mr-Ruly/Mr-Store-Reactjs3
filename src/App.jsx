import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import Productlist from "./components/shared/Productlist";
import Team from "./components/shared/Team";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// ✅ Import halaman baru
import Home from "./Book/Home";
import Book from "./Book/book";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          {/* Halaman utama: Hero, Produk, Team, Contact */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Productlist />
                <Team />
                <Contact />
              </>
            }
          />

          {/* ✅ Halaman Home Buku */}
          <Route path="/home" element={<Home />} />

          {/* ✅ Halaman Book */}
          <Route path="/book" element={<Book />} />

          {/* Halaman-halaman lain */}
          <Route path="/product" element={<Productlist />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
