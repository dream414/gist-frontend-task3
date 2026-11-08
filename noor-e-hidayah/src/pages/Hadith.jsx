import { useState } from "react";
import { hadithData } from "../data/islamicData";
import HadithCard from "../components/HadithCard";

export default function Hadith({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(hadithData.map((item) => item.category))
  ];

  const filtered = hadithData.filter((item) => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch =
      `${item.number} ${item.category} ${item.arabic} ${item.english} ${item.roman}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="collection-page">
      <div className="page-heading">
        <span className="eyebrow">IMAM NAWAWI'S COLLECTION</span>
        <h1>Forty Hadith</h1>
        <p>
          Explore 40 teachings with Arabic excerpts,
          English meanings and Roman Urdu explanations.
        </p>
        <div className="collection-count">
          40 Hadith · {filtered.length} shown
        </div>
      </div>

      <input
        className="search-input"
        placeholder="Search by Hadith number, topic or meaning..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-list">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "filter active" : "filter"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="content-grid">
        {filtered.map((item) => (
          <HadithCard
            key={item.id}
            item={item}
            isFavorite={favorites.some(
              (f) => f.id === item.id
            )}
            onFavorite={toggleFavorite}
          />
        ))}
      </div>

      {!filtered.length && (
        <p className="empty-state">No Hadith found.</p>
      )}
    </section>
  );
}