/** @type {import('./types.js').Project} */
export const project = {
    id: "swivee",
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
    detail: {
      fullTitle: "SWIVEE · 신발 리뷰 통합 플랫폼",
      skills: ["SPA", "Firebase Realtime DB", "클라이언트 라우팅", "반응형 UI"],
      tools: ["JavaScript", "Firebase", "Vercel"],
      period: "2022.03 – 2022.05",
      team: "5명 (프론트엔드 중심)",
      roles: [
        { label: "기획", tone: "pink" },
        { label: "개발", tone: "green" },
      ],
      contribution: "프론트엔드 핵심 화면·리뷰 연동",
      categoryLabel: "팀 프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "SWIVEE는 여러 쇼핑몰에 흩어진 신발 리뷰를 한곳에서 모아 보여주는 웹 서비스입니다. 바닐라 JavaScript로 SPA를 구성하고 Firebase로 리뷰 데이터를 연동해, 브랜드·사용자 리뷰를 한 화면에서 탐색할 수 있게 했습니다.",
            },
            {
              type: "paragraph",
              text: "프레임워크 없이 클라이언트 라우팅·상태 흐름·배포까지 직접 다루며, 팀 단위로 화면을 나누고 PR 기반으로 통합하는 협업 경험을 쌓았습니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "신발 구매 전 리뷰를 확인하려면 여러 쇼핑몰을 오가야 했고, 정보가 파편화되어 비교가 어려웠습니다.",
            },
            {
              type: "numbered",
              items: [
                "리뷰 탐색 비용을 줄이기 위해 브랜드·사용자 리뷰를 단일 뷰로 통합했습니다.",
                "빠른 프로토타이핑을 위해 Firebase로 데이터 계층을 단순화하고 Vercel로 배포했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "SPA 라우팅",
              items: [
                "페이지 전환을 클라이언트에서 처리해 새로고침 없이 리뷰·상세 화면을 이동했습니다.",
                "공통 레이아웃과 화면 단위 모듈을 분리해 팀원이 병렬로 작업할 수 있게 했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "Firebase 연동",
              items: [
                "리뷰 데이터를 Realtime Database에 저장하고 화면에서 읽어 렌더링했습니다.",
                "배포는 Vercel로 연결해 데모·시연이 가능한 상태로 유지했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "프레임워크에 의존하지 않고도 SPA의 필요한 라우팅·상태·데이터 흐름을 직접 설계하는 경험이 남았습니다. 팀으로 화면을 나누고 통합할 때는 인터페이스와 네이밍 규칙을 먼저 맞추는 것이 중요하다는 점도 배웠습니다.",
            },
          ],
        },
      ],
    },
  };
