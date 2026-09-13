# HEERA_CHOI — Frontend Portfolio

HTML·CSS·JavaScript·React로 웹 서비스를 만드는 프론트엔드 개발자 최희라의 포트폴리오입니다.
NoteSquare 실무와 팀 프로젝트 케이스 스터디, 스킬 맵, Tistory 글을 한 페이지에서 보여줍니다.

**Live:** [https://heerachoi.github.io/portfolio-site/](https://heerachoi.github.io/portfolio-site/)

## Stack

React 19 · Vite · Framer Motion · GitHub Pages · Tistory RSS

## Includes

- **작업** — NoteSquare 실무(KOTI Autozone, 매일 법률사무소, YK 시간기록)와 팀·개인 프로젝트 케이스 스터디. 카드 클릭 시 모달, `?project=<id>`로 공유
- **스킬** — 개발·디자인 툴을 숙련도별로 정리. 마퀴는 스킬 데이터에서 파생
- **글** — Tistory RSS를 `src/data/posts.js`로 동기화
- **소개 / 연락** — 메일, GitHub, 블로그

## Run locally

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
