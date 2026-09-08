import { site } from "../data/site";
import { easeOut } from "../motion";
import FadeIn from "./FadeIn";
import "./About.css";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <FadeIn>
          <h2 className="about__title">{about.title}</h2>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__body">
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <div className="about__steps">
          {about.steps.map((step, i) => (
            <FadeIn
              key={step.n}
              className="about__step"
              delay={i * 0.08}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
            >
              <span className="about__step-n">{step.n}</span>
              <div>
                <h3 className="about__step-title">{step.title}</h3>
                <p className="about__step-body">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
