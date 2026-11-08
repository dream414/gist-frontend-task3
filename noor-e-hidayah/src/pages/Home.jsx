import { Link } from "react-router-dom";
import { hadithData, duaData } from "../data/islamicData";
import HadithCard from "../components/HadithCard";
import DuaCard from "../components/DuaCard";

export default function Home({ favorites, toggleFavorite }) {
  const dailyHadith = hadithData[0];
  const dailyDua = duaData[0];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✦ A JOURNEY TOWARDS PEACE
          </span>

          <h1>
            Find Your Peace
            <br />
            Through <span>Faith & Guidance</span>
          </h1>

          <p>
            Discover beautiful Hadith, meaningful Duas
            and daily Islamic reminders to bring light
            into your everyday life.
          </p>

          <div className="hero-buttons">
            <Link to="/hadith" className="primary-btn">
              Explore 40 Hadith →
            </Link>

            <Link to="/duas" className="secondary-btn">
              Discover Duas
            </Link>
          </div>

          <div className="hero-note">
            ✦ Remember Allah, and hearts find peace.
          </div>
        </div>

        <div className="hero-art">
          <div className="moon">☪</div>
          <div className="mosque">🕌</div>
          <div className="art-caption">
            نور على نور
            <small>Light upon light</small>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat">
          <strong>{hadithData.length}</strong>
          <span>Forty Hadith Collection</span>
        </div>
        <div className="stat">
          <strong>{duaData.length}</strong>
          <span>Islamic Duas</span>
        </div>
        <div className="stat">
          <strong>{favorites.length}</strong>
          <span>Your Favorites</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DAILY INSPIRATION</span>
            <h2>Hadith of the Day</h2>
          </div>
          <Link to="/hadith" className="view-link">
            View All 40 →
          </Link>
        </div>

        <HadithCard
          item={dailyHadith}
          isFavorite={favorites.some(
            (f) => f.id === dailyHadith.id
          )}
          onFavorite={toggleFavorite}
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CONNECT WITH ALLAH</span>
            <h2>Dua of the Day</h2>
          </div>
          <Link to="/duas" className="view-link">
            View All →
          </Link>
        </div>

        <DuaCard
          item={dailyDua}
          isFavorite={favorites.some(
            (f) => f.id === dailyDua.id
          )}
          onFavorite={toggleFavorite}
        />
      </section>

      <section className="quote-section">
        <span>✦ A BEAUTIFUL REMINDER ✦</span>
        <h2>
          "Indeed, in the remembrance of Allah
          do hearts find rest."
        </h2>
        <p>Surah Ar-Ra'd 13:28</p>
      </section>

      <section className="explore-section">
        <span className="eyebrow">EXPLORE YOUR FAITH</span>
        <h2>Continue Your Journey</h2>
        <p>Small steps towards a stronger connection with faith.</p>

        <div className="explore-grid">
          <Link to="/hadith" className="explore-card">
            <span>📖</span>
            <h3>Read Forty Hadith</h3>
            <p>Learn from the teachings of Prophet Muhammad ﷺ.</p>
          </Link>

          <Link to="/duas" className="explore-card">
            <span>🤲</span>
            <h3>Explore Duas</h3>
            <p>Find beautiful supplications for daily life.</p>
          </Link>

          <Link to="/favorites" className="explore-card">
            <span>♡</span>
            <h3>Saved Collection</h3>
            <p>Keep your favourite reminders in one place.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}