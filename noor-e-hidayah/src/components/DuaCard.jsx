export default function DuaCard({
  item,
  isFavorite,
  onFavorite
}) {
  return (
    <article className="content-card dua-card">
      <div className="card-top">
        <span className="category">{item.category}</span>

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onFavorite(item)}
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <h3 className="dua-title">{item.title}</h3>

      <div className="arabic-text" dir="rtl">
        {item.arabic}
      </div>

      <p className="transliteration">
        {item.transliteration}
      </p>

      <p className="english-text">{item.translation}</p>

      <div className="reference">
        <span>Quran / Dua Reference</span>
        <strong>{item.reference}</strong>
      </div>
    </article>
  );
}