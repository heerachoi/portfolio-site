import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "../data/projects";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Work.css";

export default function Work() {
  const [active, setActive] = useState("전체");
  const [selected, setSelected] = useState(null);
  const tablistId = useId();
  const filtered =
    active === "전체" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="work section">
      <div className="container">
        <FadeIn className="work__head">
          <h2 className="work__title">작업</h2>
          <p className="work__sub">
            팀 프로젝트·React 앱·알고리즘 학습까지, GitHub에 기록한 작업들
          </p>
        </FadeIn>

        <div className="work__filters" role="tablist" aria-label="작업 분야 필터">
          {categories.map((cat) => {
            const selectedTab = active === cat;
            const tabId = `${tablistId}-${cat}`;
            return (
              <button
                key={cat}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={selectedTab}
                aria-controls={`${tablistId}-panel`}
                tabIndex={selectedTab ? 0 : -1}
                className={`work__filter ${selectedTab ? "is-active" : ""}`}
                onClick={() => setActive(cat)}
                onKeyDown={(e) => {
                  const i = categories.indexOf(cat);
                  let next = null;
                  if (e.key === "ArrowRight") {
                    next = categories[(i + 1) % categories.length];
                  } else if (e.key === "ArrowLeft") {
                    next = categories[(i - 1 + categories.length) % categories.length];
                  } else if (e.key === "Home") {
                    next = categories[0];
                  } else if (e.key === "End") {
                    next = categories[categories.length - 1];
                  }
                  if (!next) return;
                  e.preventDefault();
                  setActive(next);
                  requestAnimationFrame(() => {
                    document.getElementById(`${tablistId}-${next}`)?.focus();
                  });
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="work__grid"
          role="tabpanel"
          id={`${tablistId}-panel`}
          aria-label={`${active} 프로젝트`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
