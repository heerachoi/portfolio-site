import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Work.css";

export default function Work() {
  const [active, setActive] = useState("전체");

  const filtered = useMemo(
    () => (active === "전체" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="work section">
      <div className="container">
        <motion.div
          className="work__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="work__title">작업</h2>
          <p className="work__sub">
            팀 프로젝트·React 앱·알고리즘 학습까지, GitHub에 기록한 작업들
          </p>
        </motion.div>

        <div className="work__filters" role="tablist" aria-label="작업 분야 필터">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`work__filter ${active === cat ? "is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="work__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
