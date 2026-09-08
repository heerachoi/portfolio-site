/** @type {import('./types.js').Project} */
export const project = {
    id: "websocket-chatting",
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
  };
