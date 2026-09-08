import { motion } from "framer-motion";
import { site } from "../data/site";
import { easeOut } from "../motion";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export default function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__kicker">
            {hero.kicker}
          </motion.p>

          <motion.h1 variants={item} className="hero__title">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
            <br />
            {hero.titleLines[2]} {site.name}
          </motion.h1>

          <motion.p variants={item} className="hero__lede">
            {hero.lede}
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <motion.a
              href={hero.primaryCta.href}
              className="btn btn--primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {hero.primaryCta.label}
            </motion.a>
            <motion.a
              href={site.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {hero.secondaryCta.label}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.span
          className="hero__scroll-line"
          animate={{ scaleX: [0.55, 1, 0.55], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        스크롤
      </motion.div>
    </section>
  );
}
