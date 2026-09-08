# 포트폴리오 사이트

React + Vite + Framer Motion으로 만든 프론트엔드 포트폴리오입니다.
실무·팀 프로젝트 케이스 스터디, 스킬 맵, Tistory 블로그 글을 한 페이지에서 보여줍니다.

**Live:** [https://heerachoi.github.io/portfolio-site/](https://heerachoi.github.io/portfolio-site/)

## Architecture

```
index.html  →  main.jsx  →  App.jsx
                              ├─ Nav (섹션 spy · 모바일 메뉴)
                              └─ main
                                   Hero → Marquee → Skills → Work → Blog → About → Contact
                                                    └─ ProjectCard → ProjectModal (lazy)
```

- **데이터 → UI:** `src/data/*`가 콘텐츠의 단일 소스이고, 컴포넌트는 렌더·인터랙션만 담당합니다.
- **케이스 스터디:** 프로젝트마다 `src/data/projects/<id>.js`로 분리되어 있으며, 모달은 `detail.sections[].blocks` 스키마로 본문을 렌더합니다.
- **모션:** `src/motion.js` 토큰 + `MotionConfig reducedMotion="user"` + CSS `prefers-reduced-motion`.

## 시작하기

```bash
npm install
npm run dev
```

```bash
npm run lint         # oxlint
npm run sync:blog    # Tistory RSS → src/data/posts.js
npm run build        # 배포용 빌드
npm run build:fresh  # 블로그 동기화 후 빌드 (CI와 동일)
npm run preview
```

## 구조

```
src/
  components/           섹션·카드·모달 UI
  data/
    site.js             이름·카피·SNS·네비·히어로/소개 문구
    skills.js           스킬 카테고리 (+ 마퀴 파생 목록)
    projects/           프로젝트별 케이스 스터디 + JSDoc 스키마
      types.js
      index.js
      <project-id>.js
    posts.js            sync:blog로 생성
  motion.js             공통 모션 토큰
  index.css             디자인 토큰 + 글로벌 스타일
scripts/
  sync-blog.mjs
.github/workflows/
  deploy.yml            lint → build:fresh → GitHub Pages
```

## 콘텐츠 수정

1. **이름 / 연락처 / 히어로·소개 카피 / SNS** → `src/data/site.js`
2. **스킬** → `src/data/skills.js` (마퀴는 여기서 자동 파생)
3. **프로젝트 추가**
   - `src/data/projects/<id>.js`에 `Project` 스키마로 작성
   - `src/data/projects/index.js`에 import·배열 등록
   - `category`는 `프로젝트` | `React` | `Algorithm` 중 하나
   - 모달 본문은 `detail.sections[].blocks` (`paragraph` | `list` | `numbered` | `subsection`)
   - 스크린샷이 있으면 `detail.image`에 public 경로를 넣습니다
   - 공유 링크: `?project=<id>` (예: `?project=koti-autozone`)
4. **블로그** → `npm run sync:blog` (배포 CI에서도 실행)

## 접근성 · 품질 메모

- Skip link, 섹션 `aria-current="location"`, 작업 필터 tablist 키보드 탐색
- 모달: focus trap, Escape 닫기, 포커스 복원, `aria-modal`
- HTML title/description/OG는 Vite 플러그인이 `site.js`에서 주입

## 디자인

- 컬러: 딥 네이비(`#12111a`) + 브라스(`#c9a15c`)
- 타이포: Space Grotesk / Inter
- 모션: 히어로 스태거, 섹션 페이드업, 카드 필터 `AnimatePresence`
