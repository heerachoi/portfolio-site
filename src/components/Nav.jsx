import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import "./Nav.css";

const LINKS = [
  { label: "작업", href: "#work" },
  { label: "글", href: "#blog" },
  { label: "소개", href: "#about" },
  { label: "연락", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setSolid(latest > 40);
  });

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark">
          최희라<span className="nav__mark-dot">.</span>
        </a>

        <nav className="nav__links" aria-label="주요 섹션">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__status">
            <span className="nav__status-dot" />
            새 프로젝트 가능
          </span>
          <motion.a
            href="https://github.com/heerachoi"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </header>
  );
}
