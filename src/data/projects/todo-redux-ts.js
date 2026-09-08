/** @type {import('./types.js').Project} */
export const project = {
    id: "todo-redux-ts",
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
    detail: {
      fullTitle: "Todo List · Redux + TypeScript",
      skills: ["Redux", "TypeScript", "상태 분리", "UI 인터랙션"],
      tools: ["React", "Redux", "TypeScript"],
      period: "2022 · 3일 스프린트",
      team: "1명 (개발자 1명)",
      roles: [{ label: "개발", tone: "green" }],
      contribution: "5/5",
      categoryLabel: "React",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "할 일 추가·완료·삭제 흐름을 Redux로 예측 가능하게 관리하고, TypeScript로 컴포넌트·스토어 타입을 정의한 Todo 앱입니다. Works와 Done 상태를 분리해 완료 전후 UI를 명확히 나눴습니다.",
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "list",
              items: [
                "Works / Done 상태를 분리해 완료 전후 데이터와 UI를 분리했습니다.",
                "액션·리듀서·컴포넌트 props에 TypeScript 타입을 적용했습니다.",
                "짧은 스프린트 안에 인터랙션 GIF로 동작을 시연할 수 있게 정리했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "작은 앱이라도 상태의 경계를 먼저 정하면 UI 구현이 단순해진다는 것을 확인했습니다. 타입은 ‘나중에 붙이는’ 것보다 스토어 설계 단계에서 같이 잡는 편이 비용이 적었습니다.",
            },
          ],
        },
      ],
    },
  };
