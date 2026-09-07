# 포트폴리오 사이트

Figma / Web / Unreal Engine 작업을 한 곳에 보여주는 React + Framer Motion 포트폴리오입니다.

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:5173` 에서 확인할 수 있습니다.

배포용 빌드:

```bash
npm run build
```

## 꼭 바꿔야 할 것

1. **이름 / 이메일 / SNS 링크**
   - `src/components/Nav.jsx` — 상단 로고
   - `src/components/Hero.jsx` — 소개 문구
   - `src/components/Contact.jsx` — 이메일, 링크드인, 깃허브, 아트스테이션 주소
   - `src/components/Footer.jsx` — 저작권 표기

2. **프로젝트 내용**
   - `src/data/projects.js` 에서 실제 프로젝트로 교체하세요. `category`는 반드시 `Figma`, `Web`, `Unreal Engine` 중 하나여야 필터가 작동합니다. Unreal 프로젝트는 스크린샷이나 짧은 클립 링크를 추가하는 걸 추천합니다.

3. **이력서**
   - `public/resume.pdf` 파일을 추가하세요. 현재는 파일이 없어 다운로드 버튼이 404를 반환합니다.

## 구조

```
src/
  components/   각 섹션 (Nav, Hero, Marquee, Work, About, Contact, Footer)
  data/         projects.js — 프로젝트 데이터
  index.css     디자인 토큰 (색상, 타이포)
```

## 디자인 메모

- 컬러: 딥 네이비(`#12111a`) 배경 + 브라스 액센트(`#c9a15c`)
- 타이포: 헤드라인 Space Grotesk / 본문 Inter
- 모션: 히어로는 순차 등장 애니메이션, 이후 섹션은 스크롤 진입 시 1회 페이드업, 카드는 필터 전환 시 AnimatePresence로 교체됩니다.
- `prefers-reduced-motion`을 존중하도록 처리되어 있습니다.
