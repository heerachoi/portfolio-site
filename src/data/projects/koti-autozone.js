/** @type {import('./types.js').Project} */
export const project = {
    id: "koti-autozone",
    title: "KOTI Autozone",
    category: "프로젝트",
    year: "2025–26",
    role: "프론트엔드 · NoteSquare",
    tools: ["React", "Vite", "Ant Design", "GraphQL", "Paged.js"],
    problem:
      "자율주행 시범운행지구 운영성과를 지자체·평가자·관리자가 단계별로 입력·평가·집계할 웹 시스템이 필요했습니다.",
    solution:
      "React·Vite 기반으로 성과보고서 작성, 다단계 평가 워크플로, PDF·HWPX 산출물까지 한 서비스로 구현했습니다.",
    impact: "실서비스 운영 · 프론트엔드 핵심 기여 (비공개)",
    githubUrl: "https://github.com/notesquare/koti-autozone-frontend-app",
    detail: {
      fullTitle: "KOTI Autozone · 자율주행 시범운행지구 평가 시스템",
      skills: [
        "역할·단계별 권한 UI",
        "GraphQL 연동",
        "보고서 편집·평가 도크",
        "PDF / HWPX 산출",
        "Feature-Sliced 아키텍처",
      ],
      tools: [
        "React",
        "Vite",
        "Ant Design",
        "Apollo GraphQL",
        "Styled Components",
        "TipTap",
        "Paged.js",
        "React Router",
      ],
      period: "2025.01 – 2026.09",
      team: "NoteSquare (프론트엔드 중심)",
      roles: [
        { label: "개발", tone: "green" },
        { label: "UI", tone: "pink" },
      ],
      contribution: "프론트엔드 핵심 기능·워크플로·산출물",
      categoryLabel: "회사 프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "KOTI Autozone은 한국교통연구원(KOTI) 자율주행 시범운행지구 운영성과를 지자체·평가자·관리자·관찰자 역할에 맞춰 입력·평가·집계하는 웹 프론트엔드입니다. NoteSquare에서 React·Vite·Ant Design·Apollo GraphQL로 구축했으며, 저장소는 회사 정책상 비공개입니다.",
            },
            {
              type: "paragraph",
              text: "성과보고서 작성부터 사전검토·1·2차 평가·보완·집계·결과 공개까지 7단계 워크플로를 화면과 권한으로 구현하고, PDF·HWPX 등 공식 산출물 생성까지 프론트엔드에서 담당했습니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "시범운행지구 운영성과 평가는 역할·단계마다 입력·조회·숨김 범위가 달라, 단순 CRUD가 아니라 상태 머신에 가까운 UI가 필요했습니다.",
            },
            {
              type: "numbered",
              items: [
                "지자체는 성과 입력·보완 답변, 평가자는 질의·점수·총평, 관리자·관찰자는 조회·운영에 집중하도록 권한을 나눴습니다.",
                "보고서 본문·평가 도크·목록·인쇄 산출물을 한 제품 흐름으로 묶어 실무 평가 일정을 지원했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "평가 워크플로 · 권한",
              items: [
                "성과입력 → 사전검토 → 1차평가 → 성과보완 → 2차평가 → 집계 → 결과공개 단계별로 편집·조회 UI를 분기했습니다.",
                "작성 가능 상태·페이지 락·제출 후 라우트 가드로 브라우저 뒤로가기/히스토리 복원까지 통제했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "보고서 · 산출물",
              items: [
                "Ant Design·TipTap 기반으로 대량 폼·표·리치 텍스트 보고서 편집 화면을 구성했습니다.",
                "Paged.js로 PDF 성과보고서를, 브라우저에서 HWPX 상세 평가 결과 문서를 생성하는 흐름을 구현했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "아키텍처",
              items: [
                "app → pages → features → widgets → domains → shared 단방향 의존으로 기능·도메인·공유 UI를 분리했습니다.",
                "Apollo Client·GraphQL로 보고서·평가·Presence(Heartbeat) API를 연동했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "버튼 disabled만으로는 민감한 화면 진입을 막을 수 없고, 라우트 가드·history·paint 타이밍까지 같이 설계해야 한다는 점을 체감했습니다. 권한·단계가 많은 B2G 업무 화면에서는 도메인 규칙을 UI보다 먼저 문서화하는 편이 유지보수에 유리했습니다.",
            },
          ],
        },
      ],
    },
  };
