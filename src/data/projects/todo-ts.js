/** @type {import('./types.js').Project} */
export const project = {
    id: "todo-ts",
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
    detail: {
      fullTitle: "Todo List · TypeScript 입문",
      skills: ["TypeScript", "React props/state", "CRA"],
      tools: ["React", "TypeScript", "Create React App"],
      period: "2022",
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
              text: "Create React App + TypeScript로 만든 Todo 앱입니다. JavaScript 중심 작업에서 타입 안정성을 확보하고, React 컴포넌트의 props·state 타입을 엄격하게 적용하는 연습을 목표로 했습니다.",
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "list",
              items: [
                "할 일 항목·이벤트 핸들러에 명시적 타입을 적용했습니다.",
                "컴포넌트 경계를 기준으로 props 인터페이스를 나눠 재사용성을 높였습니다.",
                "CRA 환경에서 TypeScript 빌드·린트 흐름을 익혔습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "TypeScript는 문법을 외우는 것보다 ‘어떤 데이터를 컴포넌트가 책임지는지’를 적는 연습에 가깝다는 것을 배웠습니다. 이후 Redux 버전으로 확장할 때 타입 습관이 그대로 도움이 되었습니다.",
            },
          ],
        },
      ],
    },
  };
