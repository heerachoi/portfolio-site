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
    detail: {
      fullTitle: "WebSocket Chatting · 실시간 채팅",
      skills: ["WebSocket", "Node.js", "실시간 메시징", "클라이언트-서버"],
      tools: ["JavaScript", "WebSocket", "Node.js"],
      period: "2022",
      team: "1명 (개발자 1명)",
      roles: [
        { label: "기획", tone: "pink" },
        { label: "개발", tone: "green" },
      ],
      contribution: "5/5",
      categoryLabel: "프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "WebSocket 프로토콜로 클라이언트와 서버를 연결하고, 실시간으로 메시지를 주고·수신하는 채팅 기능을 구현한 프로젝트입니다. HTTP 요청-응답과 다른 양방향 통신 모델을 직접 다뤄 보았습니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "폴링 방식만으로는 느끼기 어려운 ‘연결이 열린 상태에서의 이벤트 흐름’을 이해하고 싶었습니다.",
            },
            {
              type: "numbered",
              items: [
                "연결 수립·메시지 브로드캐스트·끊김 처리를 최소 단위로 구현했습니다.",
                "프론트와 서버를 함께 작성해 프로토콜 양쪽을 모두 경험했습니다.",
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
                "WebSocket 서버에서 클라이언트 연결을 관리하고 메시지를 중계했습니다.",
                "클라이언트는 연결 상태와 수신 이벤트를 구분해 UI에 반영했습니다.",
                "단순 채팅 UI로도 실시간 통신의 핵심 흐름을 검증할 수 있게 했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "실시간 기능은 UI보다 연결 수명·재연결·메시지 순서를 먼저 설계해야 한다는 점을 배웠습니다. 이후 채팅·알림 같은 기능을 볼 때 프로토콜 관점에서 생각하게 되었습니다.",
            },
          ],
        },
      ],
    },
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
    detail: {
      fullTitle: "Baekjoon JavaScript · 알고리즘 학습 기록",
      skills: ["알고리즘", "문제 분해", "JavaScript", "학습 기록"],
      tools: ["JavaScript", "Baekjoon"],
      period: "2022 – 진행 중",
      team: "1명",
      roles: [{ label: "학습", tone: "pink" }],
      contribution: "지속 업데이트",
      categoryLabel: "Algorithm",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "백준 온라인 저지 문제를 JavaScript로 풀고, 풀이와 접근 방식을 저장소에 정리한 알고리즘 학습 기록입니다. 코딩 테스트와 문제 해결 능력을 꾸준히 훈련하기 위한 개인 아카이브입니다.",
            },
          ],
        },
        {
          title: "학습 방식",
          blocks: [
            {
              type: "list",
              items: [
                "문제를 읽고 입력·출력·제약 조건을 먼저 정리합니다.",
                "brute force에서 시작해 시간·공간 제약을 보며 개선합니다.",
                "풀이 코드를 저장소에 남겨 나중에 같은 유형을 복습할 수 있게 합니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "정답을 내는 것만큼, ‘왜 이 자료구조·이 복잡도인가’를 한 줄로 남기는 습관이 성장에 도움이 되었습니다. 프론트엔드 작업에서도 상태와 렌더링 비용을 생각할 때 같은 사고방식이 이어집니다.",
            },
          ],
        },
      ],
    },
  },
];
