import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const isLink = Boolean(project.githubUrl);
  const Card = isLink ? motion.a : motion.article;
  const linkProps = isLink
    ? {
        href: project.githubUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.title} GitHub 저장소 열기`,
      }
    : {};

  return (
    <Card
      {...linkProps}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: "var(--brass)" }}
      className={`pcard ${isLink ? "pcard--link" : ""}`}
    >
      <div className="pcard__head">
        <span className="pcard__category">{project.category}</span>
        <span className="pcard__year">{project.year}</span>
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__role">{project.role}</p>

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
        {isLink && <span className="pcard__github">GitHub에서 보기 →</span>}
      </div>
    </Card>
  );
}
