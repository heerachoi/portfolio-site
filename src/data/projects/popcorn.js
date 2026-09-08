/** @type {import('./types.js').Project} */
export const project = {
    id: "popcorn",
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
    detail: {
      fullTitle: "POPCORN · 팝업스토어 탐색 웹",
      skills: ["React", "TypeScript", "인증 연동", "컴포넌트 설계"],
      tools: ["React", "TypeScript", "Vercel", "Kakao Login"],
      period: "2023.01 – 2023.03",
      team: "팀 프로젝트",
      roles: [
        { label: "기획", tone: "pink" },
        { label: "개발", tone: "green" },
      ],
      contribution: "프론트엔드 UI·인증 흐름",
      categoryLabel: "React",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "POPCORN은 흩어진 팝업스토어 정보를 모아 한눈에 비교·탐색할 수 있게 한 웹 앱입니다. React와 TypeScript로 UI를 구성하고, 카카오 로그인·휴대폰 인증을 연동해 사용자 진입 흐름을 구현했습니다.",
            },
            {
              type: "paragraph",
              text: "실서비스 배포와 시연 영상까지 남겨, 기획부터 배포·데모까지 한 사이클을 완주한 프로젝트입니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "팝업스토어 정보는 SNS·블로그·지도 앱 등에 흩어져 있어, 관심 매장을 빠르게 찾고 비교하기 어려웠습니다.",
            },
            {
              type: "numbered",
              items: [
                "정보를 한 화면에서 탐색할 수 있는 목록·상세 UI를 우선 설계했습니다.",
                "로그인·인증을 붙여 실제 서비스에 가까운 사용자 흐름을 만들었습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "TypeScript + React",
              items: [
                "컴포넌트 props와 API 응답 타입을 명시해 협업 중 깨지기 쉬운 부분을 줄였습니다.",
                "화면 단위로 컴포넌트를 분리해 목록·상세·인증 UI를 독립적으로 수정할 수 있게 했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "인증 연동",
              items: [
                "카카오 로그인과 휴대폰 인증을 연동해 회원 진입 경로를 구성했습니다.",
                "Vercel에 배포해 시연·공유가 가능한 상태를 유지했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "정보 탐색 UX는 데이터 구조만큼이나 필터·목록·상세의 흐름이 중요하다는 것을 체감했습니다. 인증은 UI보다 예외·리다이렉트·세션 상태를 먼저 정리해야 안정적으로 붙는다는 점도도 남았습니다.",
            },
          ],
        },
      ],
    },
  };
