import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "../motion";
import { skillCategories } from "../data/skills";
import { site } from "../data/site";
import FadeIn from "./FadeIn";
import "./Skills.css";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <FadeIn className="skills__head">
          <p className="skills__eyebrow">{site.skills.eyebrow}</p>
          <h2 className="skills__title">{site.skills.title}</h2>
          <p className="skills__sub">{site.skills.sub}</p>
        </FadeIn>

        <div className="skills__grid">
          {skillCategories.map((category, ci) => (
            <FadeIn
              key={category.id}
              className="skills__category"
              delay={ci * 0.12}
            >
              <div className="skills__category-head">
                <span className="skills__category-index">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <h3 className="skills__category-title">{category.title}</h3>
                <motion.span
                  className="skills__category-line"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              <div className="skills__levels">
                {category.levels.map((level) => (
                  <div key={level.id} className="skills__level">
                    <h4 className="skills__level-title">{level.title}</h4>
                    <motion.ul
                      className="skills__tags"
                      variants={listVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      {level.skills.map((skill) => (
                        <motion.li
                          key={skill}
                          className="skills__tag"
                          variants={tagVariants}
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
