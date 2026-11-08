import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>☪ Noor-e-Hidayah</h2>

      <p>
        Discover authentic Islamic teachings, beautiful
        supplications and daily reminders.
      </p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/hadith">Hadith</Link>
        <Link to="/duas">Duas</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="copyright">
        © 2026 Noor-e-Hidayah. Made with faith and purpose.
      </div>
    </footer>
  );
}