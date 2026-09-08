/** @type {import('./types.js').Project} */
export const project = {
    id: "maeil-homepage",
    title: "매일 법률사무소",
    category: "프로젝트",
    year: "2026",
    role: "프론트엔드 · NoteSquare",
    tools: ["Next.js", "React", "TypeScript", "Strapi", "Meilisearch"],
    problem:
      "법률사무소의 변호사·성공사례·법률이야기·상담 신청을 CMS로 운영하면서도, 정적 배포에 맞는 빠른 홈페이지가 필요했습니다.",
    solution:
      "Next.js App Router와 Strapi·Meilisearch를 연동하고, static export 후 Cloudflare Workers로 배포하는 프론트엔드를 구현했습니다.",
    impact: "실서비스 운영 · UI·검색·홈 인터랙션 기여",
    githubUrl: "https://github.com/notesquare/maeil-homepage-frontend",
    liveUrl: "https://lawmaeil.com/",
    detail: {
      fullTitle: "매일 법률사무소 · 기업 홈페이지 프론트엔드",
      skills: [
        "Strapi CMS 연동",
        "Meilisearch 검색 UI",
        "정적 export · Workers 배포",
        "홈·상세 레이아웃 폴리시",
        "마퀴·티커 인터랙션",
      ],
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Strapi",
        "Meilisearch",
        "Tailwind CSS",
        "Cloudflare Workers",
        "Lenis",
      ],
      period: "2026.03",
      team: "NoteSquare (프론트엔드 협업)",
      roles: [
        { label: "개발", tone: "green" },
        { label: "UI", tone: "pink" },
      ],
      contribution: "검색·변호사 상세·홈 마퀴/티커·레이아웃 폴리시",
      categoryLabel: "회사 프로젝트",
      sections: [
        {
          title: "작품 설명",
          blocks: [
            {
              type: "paragraph",
              text: "매일 법률사무소 공식 홈페이지 프론트엔드입니다. 업무영역·변호사·성공사례·법률이야기·상담 신청·오시는 길 등을 Next.js App Router로 구성하고, Strapi CMS와 Meilisearch로 콘텐츠·검색을 연동했습니다. NoteSquare에서 팀 단위로 구축했으며, 저장소는 회사 정책상 비공개입니다.",
            },
            {
              type: "paragraph",
              text: "프로덕션은 static export 후 Cloudflare Workers Static Assets로 배포하며, 채널톡·상담 폼·팝업 등 실서비스에 필요한 진입 흐름까지 포함합니다.",
            },
          ],
        },
        {
          title: "기획 의도",
          blocks: [
            {
              type: "paragraph",
              text: "법무법인 사이트는 콘텐츠 갱신이 잦고, 검색·상담 전환이 중요합니다. 편집은 CMS에 두고, 방문자는 빠른 정적 페이지와 통합 검색으로 정보를 찾게 하는 구조가 필요했습니다.",
            },
            {
              type: "numbered",
              items: [
                "변호사·사례·법률이야기·업무영역을 Strapi에서 관리하고 빌드·런타임에 반영했습니다.",
                "Meilisearch 하이브리드 검색으로 유형별 결과를 한 화면에서 탐색할 수 있게 했습니다.",
                "export + Workers로 CDN에 가까운 배포를 유지하면서도 미리보기·드래프트 연동을 지원했습니다.",
              ],
            },
          ],
        },
        {
          title: "구현 포인트",
          blocks: [
            {
              type: "subsection",
              title: "CMS · 검색",
              items: [
                "Strapi v5 API로 practice areas·lawyers·cases·legal stories·hashtag tree를 조회하고 Blocks·미디어 URL을 안전하게 렌더링했습니다.",
                "Meilisearch로 통합 검색 결과를 유형별로 나누고, 헤더·검색 베이스 UI와 결과 페이지를 연결했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "UI · 인터랙션 기여",
              items: [
                "홈 상담 티커, 전문가 인증·외부 링크 마퀴, 변호사 상세·법률이야기 레이아웃을 다듬었습니다.",
                "검색 헤더·결과 화면·TopButton 등 공통 인터랙션과 반응형 스타일을 보강했습니다.",
              ],
            },
            {
              type: "subsection",
              title: "배포",
              items: [
                "NEXT_OUTPUT_EXPORT 기반 static build와 next-image-export-optimizer로 이미지를 최적화했습니다.",
                "Wrangler로 `out/`을 Cloudflare Workers에 배포하는 release 스크립트를 사용했습니다.",
              ],
            },
          ],
        },
        {
          title: "배운 점",
          blocks: [
            {
              type: "paragraph",
              text: "CMS·검색·정적 배포를 한 제품으로 묶을 때는 ‘빌드 시점 데이터’와 ‘클라이언트 검색’의 경계를 먼저 정해야 한다는 점을 느꼈습니다. UI 폴리시는 개별 페이지보다 공통 타이포·여백·빈 상태 규칙을 맞추는 쪽이 체감 품질에 더 크게 영향을 줬습니다.",
            },
          ],
        },
      ],
    },
  };
