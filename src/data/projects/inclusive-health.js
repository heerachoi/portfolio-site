/** @type {import('./types.js').Project} */
export const project = {
    id: "inclusive-health",
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
    detail: {
      fullTitle: "InclusiveHealth · 협업형 멀티 페이지 웹",
      skills: ["HTML/CSS", "디렉터리 구조화", "GitHub 협업", "PR 워크플로우"],
      tools: ["HTML", "CSS", "JavaScript", "GitHub"],
      period: "2022",
      team: "오픈소스 · 팀 협업",
      roles: [
        { label: "협업", tone: "pink" },
        { label: "개발", tone: "green" },
      ],
      contribution: "페이지 구조·유지보수 기여",
      categoryLabel: "프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "InclusiveHealth는 팀원이 함께 웹 페이지를 유지보수할 수 있도록 Assets·JavaScript·HTML 디렉터리를 분리하고, GitHub 포크·PR 워크플로우로 페이지를 확장한 협업 프로젝트입니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "한 사람이 전체를 고치기보다, 여러 기여자가 충돌을 줄이면서 페이지를 추가·수정할 수 있는 구조가 필요했습니다.",
            },
            {
              type: "numbered",
              items: [
                "파일 역할을 디렉터리로 명확히 나눠 변경 범위를 예측 가능하게 만들었습니다.",
                "포크·PR 기반 협업으로 리뷰와 통합 과정을 연습했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "list",
              items: [
                "Assets / JavaScript / HTML을 분리해 관심사를 나눴습니다.",
                "공통 스타일과 페이지별 마크업을 구분해 멀티 페이지 확장을 쉽게 했습니다.",
                "GitHub 이슈·PR로 변경 의도를 남기고 리뷰 가능한 흐름을 유지했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "코드 품질만큼이나 ‘누가 어디를 고쳐도 안전한가’가 협업의 핵심이라는 점을 배웠습니다. 디렉터리 규칙과 PR 습관이 있으면 작은 변경도 안전하게 쌓을 수 있습니다.",
            },
          ],
        },
      ],
    },
  };
