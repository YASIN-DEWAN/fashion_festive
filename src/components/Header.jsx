import { useState } from "react";
import { navLinks } from "../data/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <a href="#" className="header__logo">
          Fashion Festive
        </a>

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button type="button" className="header__icon" aria-label="Search">
            Search
          </button>
          <button type="button" className="header__icon" aria-label="Bag">
            Bag (0)
          </button>
        </div>
      </div>
    </header>
  );
}
