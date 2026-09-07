import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "../motion";
import "./ProjectModal.css";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function MetaTags({ items, className = "" }) {
  if (!items?.length) return null;
  return (
    <div className={`pmodal__tags ${className}`.trim()}>
      {items.map((item) =>
        typeof item === "string" ? (
          <span key={item} className="pmodal__tag">
            {item}
          </span>
        ) : (
          <span
            key={item.label}
            className={`pmodal__tag pmodal__tag--${item.tone || "default"}`}
          >
            {item.label}
          </span>
        )
      )}
    </div>
  );
}

function Block({ block }) {
  if (block.type === "paragraph") {
    return <p className="pmodal__p">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="pmodal__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "numbered") {
    return (
      <ol className="pmodal__numbered">
        {block.items.map((item, i) => (
          <li key={item}>
            <span className="pmodal__numbered-label">
              {i === 0 ? "첫째" : i === 1 ? "둘째" : `${i + 1}.`}
            </span>{" "}
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "subsection") {
    return (
      <div className="pmodal__subsection">
        <h4 className="pmodal__subsection-title">{block.title}</h4>
        <ul className="pmodal__list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default function ProjectModal({ project, onClose }) {
  const detail = project?.detail;
  const open = Boolean(project);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previousFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const nodes = [...panelRef.current.querySelectorAll(FOCUSABLE)].filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );
      if (!nodes.length) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus.current?.focus?.();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="pmodal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pmodal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <button
            type="button"
            className="pmodal__backdrop"
            aria-label="모달 닫기"
            onClick={onClose}
            tabIndex={-1}
          />

          <motion.div
            ref={panelRef}
            className="pmodal__panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <button
              ref={closeRef}
              type="button"
              className="pmodal__close"
              onClick={onClose}
              aria-label="닫기"
            >
              ×
            </button>

            <div className="pmodal__scroll">
              <p className="pmodal__eyebrow">PROJECT</p>
              <h2 id="pmodal-title" className="pmodal__title">
                {detail?.fullTitle || project.title}
              </h2>

              {detail?.image && (
                <div className="pmodal__hero">
                  <img src={detail.image} alt="" />
                </div>
              )}

              {detail && (
                <dl className="pmodal__meta">
                  <div className="pmodal__meta-row">
                    <dt>SKILLS</dt>
                    <dd>
                      <MetaTags items={detail.skills} />
                    </dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>TOOLS</dt>
                    <dd>
                      <MetaTags items={detail.tools} />
                    </dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>진행기간</dt>
                    <dd>{detail.period}</dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>개발인원</dt>
                    <dd>{detail.team}</dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>역할</dt>
                    <dd>
                      <MetaTags items={detail.roles} />
                    </dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>기여도</dt>
                    <dd>{detail.contribution}</dd>
                  </div>
                  <div className="pmodal__meta-row">
                    <dt>카테고리</dt>
                    <dd>
                      <MetaTags items={[detail.categoryLabel || project.category]} />
                    </dd>
                  </div>
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="pmodal__meta-row">
                      <dt>사이트</dt>
                      <dd className="pmodal__links">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pmodal__link"
                          >
                            {project.githubUrl}
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pmodal__link"
                          >
                            {project.liveUrl}
                          </a>
                        )}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              <div className="pmodal__divider" />

              {detail?.sections?.map((section) => (
                <section key={section.title} className="pmodal__section">
                  <h3 className="pmodal__section-title">{section.title}</h3>
                  <div className="pmodal__section-body">
                    {section.blocks.map((block, i) => (
                      <Block key={`${section.title}-${i}`} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              {!detail && (
                <section className="pmodal__section">
                  <h3 className="pmodal__section-title">작품 설명</h3>
                  <p className="pmodal__p">{project.problem}</p>
                  <p className="pmodal__p">{project.solution}</p>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pmodal__link"
                    >
                      {project.githubUrl}
                    </a>
                  )}
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
