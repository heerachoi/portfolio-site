/** @type {import('./types.js').Project} */
export const project = {
    id: "yk-timetracking",
    title: "YK 시간기록",
    category: "프로젝트",
    year: "2024",
    role: "프론트엔드 · NoteSquare",
    tools: ["React", "Apollo GraphQL", "Ant Design", "Styled Components"],
    problem:
      "법률·자문 업무에서 사건별 타임시트 작성, 위임·배당, 직원 권한, 통계까지 한 웹에서 다뤄야 했습니다.",
    solution:
      "React·Apollo GraphQL·Ant Design으로 타임시트·사건관리·직원/권한·통계 UI를 구현하고 권한에 따라 화면을 분기했습니다.",
    impact: "실서비스 운영 · 프론트엔드 핵심 기여 (비공개)",
    githubUrl: "https://github.com/notesquare/yk-timetracking-frontend",
    detail: {
      fullTitle: "YK 시간기록 · 사건·타임시트 관리 시스템",
      skills: [
        "타임시트 작성·권한 분기",
        "사건 위임·배당·일괄 배정",
        "GraphQL 쿼리 최적화",
        "통계·엑셀 연동",
        "직원·부서·직급 설정",
      ],
      tools: [
        "React",
        "Create React App",
        "Apollo GraphQL",
        "Ant Design",
        "Styled Components",
        "React Router",
        "Nivo",
        "xlsx",
        "dnd-kit",
      ],
      period: "2024.01 – 2024.09",
      team: "NoteSquare (프론트엔드 중심)",
      roles: [
        { label: "개발", tone: "green" },
        { label: "UI", tone: "pink" },
      ],
      contribution: "타임시트·사건관리·권한·쿼리 개선 핵심 기여",
      categoryLabel: "회사 프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "YK 시간기록은 법률·자문 업무의 사건(CASE)·자문·기타 단위로 타임시트를 작성·조회하고, 담당자 위임·배당과 직원 권한·부서·직급, 통계·엑셀까지 다루는 웹 프론트엔드입니다. NoteSquare에서 React·Apollo GraphQL·Ant Design으로 구축했으며, 저장소는 회사 정책상 비공개입니다.",
            },
            {
              type: "paragraph",
              text: "진행사건 달력·폴더·테이블 뷰, 타임시트 작성/상세, 사건관리·휴지통, 검색, 통계, 설정(직원·부서·사건분류) 흐름을 React Router로 연결하고 GraphQL·FastAPI(엑셀) API를 연동했습니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "타임시트는 ‘누가 어떤 사건에 얼마나’만 남기는 화면이 아니라, 열람·입력·위임·배당 권한이 화면마다 달라지는 업무 도구여야 했습니다.",
            },
            {
              type: "numbered",
              items: [
                "권한·배당 상태에 따라 사건 노출과 타임시트 작성 가능 여부를 막았습니다.",
                "사건 일괄 위임/배당, 조정 시간, 통계·엑셀로 관리자 운영 비용을 줄였습니다.",
                "목록·폴더·달력 뷰의 GraphQL 쿼리를 다듬어 체감 속도와 무한 스크롤을 개선했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "타임시트 · 권한",
              items: [
                "열람·타인 입력·배당·위임 상태에 따라 사건번호 disable, 작성 차단, 목록 필터를 분기했습니다.",
                "달력·폴더·테이블 뷰와 작성자 필터, 날짜별 스크롤·목록 연동을 구현·수정했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "사건관리 · 직원",
              items: [
                "사건 일괄 위임/배당 모달, 담당자 배당, 휴지통·종결/복구, 직원 등록·권한·부서·직급 설정을 다뤘습니다.",
                "엑셀 업로드/다운로드·템플릿 다운로드에 로딩·중복 클릭 방지를 넣고 통계 그래프(Nivo)를 개선했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "데이터 · 성능",
              items: [
                "진행사건·사건관리·휴지통·타임시트 상세·직원 상세 등 getCaseList/getTimesheetList/getUserList 계열 쿼리를 정리·필터링했습니다.",
                "폴더 뷰 무한 스크롤, 알림 폴링 주기, 파일 업로드 로딩 등 운영 중 병목을 줄였습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "권한 UI는 버튼을 숨기는 것만으로는 부족하고, 목록 쿼리·작성 폼·필터가 같은 규칙을 공유해야 빈 화면·잘못된 작성이 사라진다는 점을 배웠습니다. GraphQL은 화면마다 필요한 필드만 가져오도록 쪼개야 목록·상세 체감 속도가 같이 좋아졌습니다.",
            },
          ],
        },
      ],
    },
  };
