# 포트폴리오 사이트

React + Vite + Framer Motion으로 만든 프론트엔드 포트폴리오입니다.
팀 프로젝트(SWIVEE, POPCORN), React 앱, 알고리즘 학습 기록과 Tistory 블로그 글을 한곳에서 보여줍니다.

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:5173` 에서 확인할 수 있습니다.

```bash
npm run build      # 배포용 빌드
npm run preview    # 빌드 결과 미리보기
npm run lint       # oxlint
npm run sync:blog  # Tistory RSS → src/data/posts.js 갱신
```

## 구조

```
src/
  components/     섹션 단위 UI (Nav, Hero, Work, Blog…)
  data/
    site.js       이름·이메일·SNS·네비 (단일 설정)
    projects.js   프로젝트·상세 케이스 스터디
    posts.js      sync:blog로 생성되는 블로그 목록
  motion.js       공통 모션 토큰
  index.css       디자인 토큰 + 글로벌 스타일
scripts/
  sync-blog.mjs   블로그 RSS 동기화
```

## 콘텐츠 수정

1. **이름 / 연락처 / SNS** → `src/data/site.js`
2. **프로젝트** → `src/data/projects.js`  
   - `category`는 `전체` 필터를 제외하고 `프로젝트` | `React` | `Algorithm` 중 하나여야 합니다.
   - 모달 상세는 `detail.sections[].blocks` (`paragraph` | `list` | `numbered` | `subsection`)로 구성합니다.
   - 스크린샷이 있으면 `detail.image`에 public/assets 경로를 넣으면 모달에 표시됩니다.
3. **블로그** → `npm run sync:blog`로 최신 글을 가져옵니다. 배포 전에 한 번 실행하는 것을 권장합니다.

## 디자인 메모

- 컬러: 딥 네이비(`#12111a`) 배경 + 브라스 액센트(`#c9a15c`)
- 타이포: 헤드라인 Space Grotesk / 본문 Inter
- 모션: 히어로 스태거, 섹션 스크롤 페이드업, 카드 필터 `AnimatePresence`
- `prefers-reduced-motion`은 CSS와 Framer Motion(`MotionConfig reducedMotion="user"`) 모두에서 존중합니다.
