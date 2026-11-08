import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Hadith from "./pages/Hadith";
import Duas from "./pages/Duas";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("noor-favorites")
      ) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "noor-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function toggleFavorite(item) {
    setFavorites((old) =>
      old.some((x) => x.id === item.id)
        ? old.filter((x) => x.id !== item.id)
        : [...old, item]
    );
  }

  const shared = { favorites, toggleFavorite };

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home {...shared} />} />
          <Route path="/hadith" element={<Hadith {...shared} />} />
          <Route path="/duas" element={<Duas {...shared} />} />
          <Route path="/favorites" element={<Favorites {...shared} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}