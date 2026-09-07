import { motion } from "framer-motion";
import "./Contact.css";

const SOCIALS = [
  { label: "이메일", value: "heera7722@gmail.com", href: "mailto:heera7722@gmail.com" },
  { label: "깃허브", value: "github.com/heerachoi", href: "https://github.com/heerachoi" },
  {
    label: "블로그",
    value: "codesign.tistory.com",
    href: "https://codesign.tistory.com/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="contact__inner"
        >
          <p className="contact__kicker">함께 일해요</p>
          <h2 className="contact__title">
            새 프로젝트나 협업에
            <br />
            관심이 있으시면 연락해 주세요
          </h2>

          <a href="mailto:heera7722@gmail.com" className="contact__mail">
            heera7722@gmail.com
          </a>

          <div className="contact__row">
            <div className="contact__links">
              {SOCIALS.map((s) => (
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
              href="https://github.com/heerachoi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              GitHub 방문
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
