import { motion } from "framer-motion";
import { easeOut } from "../motion";
import "./ProjectCard.css";

export default function ProjectCard({ project, onSelect }) {
  const titleId = `project-title-${project.id}`;

  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: easeOut }}
      whileHover={{ borderColor: "var(--brass)" }}
      className="pcard"
    >
      <button
        type="button"
        className="pcard__action"
        onClick={() => onSelect?.(project)}
        aria-labelledby={titleId}
      />

      <div className="pcard__top">
        <div className="pcard__head">
          <span className="pcard__category">{project.category}</span>
          <span className="pcard__year">{project.year}</span>
        </div>

        <h3 id={titleId} className="pcard__title">
          {project.title}
        </h3>
        <p className="pcard__role">{project.role}</p>
      </div>

      <div className="pcard__body">
        <p className="pcard__label">과제</p>
        <p className="pcard__text">{project.problem}</p>

        <p className="pcard__label">접근</p>
        <p className="pcard__text">{project.solution}</p>
      </div>

      <div className="pcard__foot">
        <p className="pcard__impact">{project.impact}</p>
        <div className="pcard__tools">
          {project.tools.map((tool) => (
            <span key={tool} className="pcard__tool">
              {tool}
            </span>
          ))}
        </div>
        <span className="pcard__github" aria-hidden="true">
          자세히 보기 →
        </span>
      </div>
    </motion.article>
  );
}
