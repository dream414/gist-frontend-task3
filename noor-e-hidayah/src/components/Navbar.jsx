import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    ["Home", "/"],
    ["Hadith", "/hadith"],
    ["Duas", "/duas"],
    ["Favorites", "/favorites"],
    ["A Prayer for Everyone", "/contact"]
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-icon">☪</span>
        <span>
          <strong>Noor-e-Hidayah</strong>
          <small>LIGHT OF GUIDANCE</small>
        </span>
      </NavLink>

      <nav>
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/duas" className="nav-cta">
        Explore Duas →
      </NavLink>
    </header>
  );
}