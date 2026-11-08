export default function HadithCard({
  item,
  isFavorite,
  onFavorite
}) {
  return (
    <article className="content-card">
      <div className="card-top">
        <span className="category">
          Hadith #{item.number} · {item.category}
        </span>

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onFavorite(item)}
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="arabic-text" dir="rtl">
        {item.arabic}
      </div>

      <h3 className="meaning-title">English Meaning</h3>
      <p className="english-text">{item.english}</p>

      <h3 className="meaning-title">Roman Urdu</h3>
      <p className="roman-text">{item.roman}</p>

      <div className="reference">
        <span>Reference</span>
        <strong>{item.reference}</strong>
      </div>
    </article>
  );
}