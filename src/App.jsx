import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import Productlist from "./components/shared/Productlist";
import Team from "./components/shared/Team";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          {/* ✅ Home: Semua komponen tampil */}
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

          {/* 🔹 Halaman khusus Team */}
          <Route path="/product" element={<Productlist />} />
          
          {/* 🔹 Halaman khusus Team */}
          <Route path="/team" element={<Team />} />

          {/* 🔹 Halaman khusus Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
