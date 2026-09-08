import { Suspense, lazy, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, getProjectById, projects } from "../data/projects";
import { site } from "../data/site";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import "./Work.css";

const ProjectModal = lazy(() => import("./ProjectModal"));

function readProjectIdFromLocation() {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("project");
}

function syncProjectParam(id) {
  const url = new URL(window.location.href);
  if (id) url.searchParams.set("project", id);
  else url.searchParams.delete("project");
  window.history.replaceState({}, "", url);
}

function getInitialProject() {
  const id = readProjectIdFromLocation();
  return id ? getProjectById(id) : null;
}

export default function Work() {
  const [active, setActive] = useState("전체");
  const [selected, setSelected] = useState(getInitialProject);
  const tablistId = useId();
  const panelId = `${tablistId}-panel`;
  const filtered =
    active === "전체" ? projects : projects.filter((p) => p.category === active);

  const openProject = (project) => {
    setSelected(project);
    syncProjectParam(project.id);
  };

  const closeProject = () => {
    setSelected(null);
    syncProjectParam(null);
  };

  return (
    <section id="work" className="work section">
      <div className="container">
        <FadeIn className="work__head">
          <h2 className="work__title">{site.work.title}</h2>
          <p className="work__sub">{site.work.sub}</p>
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
                aria-controls={panelId}
                tabIndex={selectedTab ? 0 : -1}
                className={`work__filter ${selectedTab ? "is-active" : ""}`}
                onClick={() => setActive(cat)}
                onKeyDown={(e) => {
                  const i = categories.indexOf(cat);
                  let next = null;
                  if (e.key === "ArrowRight") {
                    next = categories[(i + 1) % categories.length];
                  } else if (e.key === "ArrowLeft") {
                    next =
                      categories[(i - 1 + categories.length) % categories.length];
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
          id={panelId}
          aria-labelledby={`${tablistId}-${active}`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={openProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        <ProjectModal project={selected} onClose={closeProject} />
      </Suspense>
    </section>
  );
}
