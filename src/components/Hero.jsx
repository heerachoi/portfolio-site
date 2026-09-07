import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__kicker">
            웹 개발 · UI 디자인 · React
          </motion.p>

          <motion.h1 variants={item} className="hero__title">
            화면을 설계하고
            <br />
            코드로 구현하는
            <br />
            웹 개발자 최희라
          </motion.h1>

          <motion.p variants={item} className="hero__lede">
            HTML·CSS·JavaScript로 웹의 기반을 다지고, React와 TypeScript로
            인터랙티브한 앱을 만들었습니다. Illustrator·Adobe XD로 사용자 경험을
            먼저 그리고, Firebase와 Vercel로 실서비스까지 연결하는 프로젝트를
            팀과 함께 진행해왔습니다.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#work" className="btn btn--primary">
              작업 살펴보기
            </a>
            <a
              href="https://github.com/heerachoi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              GitHub 방문
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="hero__scroll-line" />
        스크롤
      </motion.div>
    </section>
  );
}
