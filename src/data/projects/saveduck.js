/** @type {import('./types.js').Project} */
export const project = {
    id: "saveduck",
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
    detail: {
      fullTitle: "SaveDuck · 커뮤니티형 웹 앱",
      skills: ["Redux Toolkit", "Firebase Auth", "React Router", "Styled Components"],
      tools: ["React", "Redux", "Firebase"],
      period: "2023",
      team: "개인 · 학습 프로젝트",
      roles: [{ label: "개발", tone: "green" }],
      contribution: "5/5",
      categoryLabel: "React",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "SaveDuck은 커뮤니티형 서비스에서 인증, 전역 상태, 실시간 데이터, 라우팅을 한 흐름으로 묶어 본 풀스택 웹 앱 프로젝트입니다. Redux Toolkit으로 상태를 구조화하고 Firebase·React Router로 인증과 페이지 전환을 구현했습니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "화면만 만드는 수준을 넘어, 실제 서비스에 가까운 인증·상태·데이터 계층을 직접 연결해 보고 싶었습니다.",
            },
            {
              type: "numbered",
              items: [
                "전역 상태를 예측 가능하게 관리하기 위해 Redux Toolkit을 도입했습니다.",
                "Firebase로 인증·데이터를 연결해 백엔드 없이도 동작하는 아키텍처를 경험했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "상태 관리",
              items: [
                "기능 단위로 슬라이스를 나누고 비동기 흐름을 Redux Toolkit으로 정리했습니다.",
                "컴포넌트는 필요한 상태만 구독하도록 해 렌더링 범위를 좁혔습니다.",
              ],
            },
            {
              type: "subsection",
              title: "인증 · 라우팅",
              items: [
                "Firebase Auth와 React Router를 연결해 로그인 전후 접근 경로를 분리했습니다.",
                "Styled Components로 UI 스타일을 컴포넌트 단위로 관리했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "인증·상태·라우팅은 각각 구현하는 것보다 ‘어디서 책임이 끝나는지’를 정하는 설계가 더 어렵다는 것을 배웠습니다. 전역 상태는 적을수록 좋고, 필요할 때만 올리는 편이 유지보수에 유리했습니다.",
            },
          ],
        },
      ],
    },
  };
