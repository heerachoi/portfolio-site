import { site, socials } from "../data/site";
import FadeIn from "./FadeIn";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <FadeIn className="contact__inner">
          <p className="contact__kicker">{site.contact.kicker}</p>
          <h2 className="contact__title">
            {site.contact.titleLines[0]}
            <br />
            {site.contact.titleLines[1]}
          </h2>

          <a href={`mailto:${site.email}`} className="contact__mail">
            {site.email}
          </a>

          <div className="contact__row">
            <div className="contact__links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="contact__link"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="contact__link-label">{s.label}</span>
                  <span>{s.value}</span>
                </a>
              ))}
            </div>
            <a
              href={site.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              GitHub 방문
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
