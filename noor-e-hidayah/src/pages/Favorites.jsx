import HadithCard from "../components/HadithCard";
import DuaCard from "../components/DuaCard";

export default function Favorites({ favorites, toggleFavorite }) {
  return (
    <section className="collection-page">
      <div className="page-heading">
        <span className="eyebrow">YOUR PERSONAL COLLECTION</span>
        <h1>My Favorites</h1>
        <p>Your saved Hadith and Duas in one place.</p>
      </div>

      <div className="content-grid">
        {favorites.map((item) => {
          const isDua = item.id.startsWith("d");

          return isDua ? (
            <DuaCard
              key={item.id}
              item={item}
              isFavorite
              onFavorite={toggleFavorite}
            />
          ) : (
            <HadithCard
              key={item.id}
              item={item}
              isFavorite
              onFavorite={toggleFavorite}
            />
          );
        })}
      </div>

      {!favorites.length && (
        <div className="empty-state">
          <span>♡</span>
          <h2>No Favorites Yet</h2>
          <p>Save your favourite Hadith and Duas here.</p>
        </div>
      )}
    </section>
  );
}