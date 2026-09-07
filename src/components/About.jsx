import { easeOut } from "../motion";
import FadeIn from "./FadeIn";
import "./About.css";

const STEPS = [
  {
    n: "01",
    title: "설계한다",
    body: "Adobe XD·Illustrator로 화면 흐름과 UI를 먼저 그리고, 사용자가 실제로 경험할 인터랙션을 검증합니다.",
  },
  {
    n: "02",
    title: "구현한다",
    body: "Vanilla JS·React로 웹 앱을 만들고, Redux와 Firebase로 상태·데이터를 연결합니다.",
  },
  {
    n: "03",
    title: "배포한다",
    body: "Vercel·Firebase로 실서비스를 배포하고, GitHub로 팀 협업과 코드 리뷰를 이어갑니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <FadeIn>
          <h2 className="about__title">소개</h2>
          <p className="about__body">
            디자인과 개발을 함께 다루는 웹 개발자입니다. SWIVEE·POPCORN 등 팀
            프로젝트에서 프론트엔드를 담당했고, 바닐라 JavaScript SPA부터 React
            앱까지 다양한 스택으로 웹 서비스를 구현했습니다.
          </p>
          <p className="about__body">
            백준·LeetCode 문제 풀이로 알고리즘 기초를 꾸준히 다지고, GitHub로
            학습과 프로젝트 기록을 쌓아왔습니다. 사용자 경험을 고민하는
            프론트엔드 개발자로 성장하고 있습니다.
          </p>
        </FadeIn>

        <div className="about__steps">
          {STEPS.map((step, i) => (
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
