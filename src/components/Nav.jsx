import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { site } from "../data/site";
import "./Nav.css";

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setSolid(latest > 40);
  });

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${solid || menuOpen ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark" onClick={closeMenu}>
          {site.name}
          <span className="nav__mark-dot">.</span>
        </a>

        <nav className="nav__links" aria-label="주요 섹션">
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__status">
            <span className="nav__status-dot" />
            {site.status}
          </span>
          <motion.a
            href={site.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {site.github.label}
          </motion.a>

          <button
            type="button"
            className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id={menuId}
            className="nav__mobile"
            aria-label="모바일 메뉴"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container nav__mobile-inner">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav__mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav__mobile-link nav__mobile-link--cta"
                onClick={closeMenu}
              >
                {site.github.label}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
