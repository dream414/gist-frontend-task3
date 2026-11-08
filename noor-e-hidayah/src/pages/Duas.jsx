import { useState } from "react";
import { duaData } from "../data/islamicData";
import DuaCard from "../components/DuaCard";

export default function Duas({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");

  const filtered = duaData.filter((dua) =>
    `${dua.title} ${dua.category} ${dua.translation} ${dua.arabic}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="collection-page">
      <div className="page-heading">
        <span className="eyebrow">WORDS OF SUPPLICATION</span>
        <h1>Daily Duas</h1>
        <p>Beautiful prayers for every moment of life.</p>
      </div>

      <input
        className="search-input"
        placeholder="Search your Dua..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="content-grid">
        {filtered.map((item) => (
          <DuaCard
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
        <p className="empty-state">No Duas found.</p>
      )}
    </section>
  );
}