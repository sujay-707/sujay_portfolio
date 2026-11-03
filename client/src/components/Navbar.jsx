
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function getInitialTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <header className="header portfolio-header">
      {/* Signature Brand */}
      <a
        href="#home"
        className="brand portfolio-brand signature-brand"
        onClick={closeMenu}
        aria-label="Sujay - Home"
      >
        <img
          src="/sujaylogo.png"
          alt="Sujay"
          className="signature-logo"
        />
      </a>

      {/* Navigation */}
      <nav
        id="portfolio-navigation"
        className={`portfolio-nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <a
          href="mailto:sujaymundaragi7@gmail.com"
          className="nav-contact"
          onClick={closeMenu}
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* Theme Toggle */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>

      {/* Mobile Menu */}
      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="portfolio-navigation"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
