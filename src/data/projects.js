export const categories = ["전체", "프로젝트", "React", "Algorithm"];

export const projects = [
  {
    id: "p1",
    title: "SWIVEE",
    category: "프로젝트",
    year: "2022",
    role: "프론트엔드 · 팀 프로젝트",
    tools: ["JavaScript", "Firebase", "Vercel", "SPA"],
    problem:
      "신발 구매 시 리뷰가 쇼핑몰별로 나뉘어 원하는 정보를 한곳에서 찾기 어려웠습니다.",
    solution:
      "바닐라 JavaScript로 SPA를 구현하고 Firebase로 리뷰 데이터를 연동해 브랜드·사용자 리뷰를 한 화면에 모았습니다.",
    impact: "배포 완료 · 팀 5인 협업",
    githubUrl: "https://github.com/heerachoi/swivee",
    liveUrl: "https://swivee-liart.vercel.app/",
  },
  {
    id: "p2",
    title: "POPCORN",
    category: "React",
    year: "2023",
    role: "프론트엔드 · 팀 프로젝트",
    tools: ["React", "TypeScript", "Vercel"],
    problem:
      "팝업스토어 정보가 여러 채널에 흩어져 있어 한눈에 비교·탐색하기 어려웠습니다.",
    solution:
      "팝업스토어 정보를 모아 보여주는 웹 앱을 React·TypeScript로 구현하고 카카오 로그인·휴대폰 인증을 연동했습니다.",
    impact: "실서비스 배포 · 시연 영상 제작",
    githubUrl: "https://github.com/heerachoi/popcorn",
    liveUrl: "https://popcorn-hazel.vercel.app/",
  },
  {
    id: "p3",
    title: "SaveDuck",
    category: "React",
    year: "2023",
    role: "프론트엔드 개발",
    tools: ["React", "Redux", "Firebase", "Styled Components"],
    problem:
      "커뮤니티형 서비스에서 인증·상태 관리·실시간 데이터를 안정적으로 묶어야 했습니다.",
    solution:
      "React Redux Toolkit으로 상태를 구조화하고 Firebase·React Router로 인증과 페이지 흐름을 구현했습니다.",
    impact: "풀스택 웹 앱 아키텍처 경험",
    githubUrl: "https://github.com/heerachoi/save-duck",
  },
  {
    id: "p4",
    title: "InclusiveHealth",
    category: "프로젝트",
    year: "2022",
    role: "웹 개발 · 협업",
    tools: ["HTML", "CSS", "JavaScript"],
    problem:
      "InclusiveHealth 프로젝트의 웹 페이지를 팀원이 함께 유지보수할 수 있는 구조가 필요했습니다.",
    solution:
      "Assets·JavaScript·HTML 디렉터리를 분리하고 GitHub 협업 워크플로우(포크·PR)로 페이지를 확장했습니다.",
    impact: "오픈소스 협업 · 멀티 페이지 구조",
    githubUrl: "https://github.com/heerachoi/InclusiveHealth",
  },
  {
    id: "p5",
    title: "Todo List — Redux + TypeScript",
    category: "React",
    year: "2022",
    role: "프론트엔드 개발",
    tools: ["React", "Redux", "TypeScript"],
    problem:
      "할 일 목록의 추가·완료·삭제 흐름을 예측 가능한 상태 관리로 처리해야 했습니다.",
    solution:
      "Redux로 Works·Done 상태를 분리하고 TypeScript로 컴포넌트·스토어 타입을 정의했습니다.",
    impact: "3일 스프린트 · 인터랙션 GIF 시연",
    githubUrl: "https://github.com/heerachoi/todo-list-redux-typescript",
  },
  {
    id: "p6",
    title: "Todo List — TypeScript",
    category: "React",
    year: "2022",
    role: "프론트엔드 개발",
    tools: ["React", "TypeScript", "Create React App"],
    problem:
      "JavaScript 프로젝트에서 타입 안정성을 확보하고 React 컴포넌트 구조를 익히고 싶었습니다.",
    solution:
      "Create React App + TypeScript로 Todo 앱을 구현하고 props·state 타입을 엄격하게 적용했습니다.",
    impact: "TypeScript 마이그레이션 경험",
    githubUrl: "https://github.com/heerachoi/todolist-typescript",
  },
  {
    id: "p7",
    title: "WebSocket Chatting",
    category: "프로젝트",
    year: "2022",
    role: "프론트엔드 · 백엔드",
    tools: ["JavaScript", "WebSocket", "Node.js"],
    problem:
      "실시간 양방향 통신이 필요한 채팅 기능을 웹에서 구현해야 했습니다.",
    solution:
      "WebSocket 프로토콜로 클라이언트·서버 연결을 구성하고 실시간 메시지 송수신을 구현했습니다.",
    impact: "실시간 통신 구현 경험",
    githubUrl: "https://github.com/heerachoi/websocket-chatting",
  },
  {
    id: "p8",
    title: "Baekjoon JavaScript",
    category: "Algorithm",
    year: "2022–",
    role: "알고리즘 학습",
    tools: ["JavaScript", "Baekjoon"],
    problem:
      "코딩 테스트와 문제 해결 능력을 꾸준히 훈련하고 기록으로 남기고 싶었습니다.",
    solution:
      "백준 온라인 저지 문제를 JavaScript로 풀고 저장소에 풀이와 접근 방식을 정리했습니다.",
    impact: "꾸준한 알고리즘 학습 기록",
    githubUrl: "https://github.com/heerachoi/Baekjoon-JavaScript",
  },
];
