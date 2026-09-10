/** Site-wide identity, copy & links — single source of truth */

export const site = {
  name: "HEERA_CHOI",
  title: "Web Developer",
  email: "heera7722@gmail.com",
  url: "https://heerachoi.github.io/portfolio-site/",
  description:
    "HTML·CSS·JavaScript·React로 웹 서비스를 만드는 프론트엔드 개발자 최희라의 포트폴리오",
  github: {
    label: "GitHub",
    href: "https://github.com/heerachoi",
    handle: "github.com/heerachoi",
  },
  blog: {
    label: "블로그",
    href: "https://codesign.tistory.com/",
    handle: "codesign.tistory.com",
  },
  nav: [
    { label: "스킬", href: "#skills" },
    { label: "작업", href: "#work" },
    { label: "글", href: "#blog" },
    { label: "소개", href: "#about" },
    { label: "연락", href: "#contact" },
  ],
  hero: {
    kicker: "웹 개발 · UI 디자인 · React",
    titleLines: ["화면을 설계하고", "코드로 구현하는", "웹 개발자"],
    lede: "HTML·CSS·JavaScript로 웹의 기반을 다지고, React로 인터랙티브한 앱을 만들었습니다. Illustrator·Adobe XD로 사용자 경험을 먼저 그리고, Firebase와 Vercel로 실서비스까지 연결하는 프로젝트를 팀과 함께 진행해왔습니다.",
    primaryCta: { label: "작업 살펴보기", href: "#work" },
    secondaryCta: { label: "GitHub 방문" },
  },
  about: {
    title: "소개",
    paragraphs: [
      "디자인과 개발을 함께 다루는 웹 개발자입니다. NoteSquare에서 YK 시간기록, KOTI 자율주행 시범운행지구 평가 시스템, 매일 법률사무소 홈페이지 프론트엔드에 참여했고, SWIVEE·POPCORN 등 팀 프로젝트부터 바닐라 JavaScript SPA·React 앱까지 웹 서비스를 구현해 왔습니다.",
      "백준·LeetCode 문제 풀이로 알고리즘 기초를 꾸준히 다지고, GitHub로 학습과 프로젝트 기록을 쌓아왔습니다. 사용자 경험을 고민하는 프론트엔드 개발자로 성장하고 있습니다.",
    ],
    steps: [
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
    ],
  },
  skills: {
    eyebrow: "역량",
    title: "스킬",
    sub: "웹 개발과 디자인 툴을 함께 다루며 쌓아 온 역량입니다.",
  },
  work: {
    title: "작업",
    sub: "팀 프로젝트·React 앱·알고리즘 학습까지, GitHub에 기록한 작업들",
  },
  contact: {
    kicker: "함께 일해요",
    titleLines: ["새 프로젝트나 협업에", "관심이 있으시면 연락해 주세요"],
  },
};

/** Document title used in HTML meta + browser tab */
export const documentTitle = `${site.name} — ${site.title}`;

/** External profiles for Contact (email is shown separately as the primary CTA) */
export const socials = [
  {
    label: "깃허브",
    value: site.github.handle,
    href: site.github.href,
  },
  {
    label: "블로그",
    value: site.blog.handle,
    href: site.blog.href,
  },
];
