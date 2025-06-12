🏡 homepage : https://hyoooooojin.github.io/dev-kit/

- React Router Dom으로 페이지 전환

- 📁 : 프로젝트 최상위(루트) 폴더 또는 basename /dev-kit
- 🏠 : 홈 페이지 경로 /
- ⚡ : viteReactKit 페이지 경로 /viteReactKit
- 🐙 : githubPagesKit 페이지 경로 /githubPagesKit

- Recoil로 상태 관리

- 초기 개발 단계에서는 `useState`를 활용한 컴포넌트 단위 상태 관리를 사용
- Recoil을 도입하여 상태를 전역에서 관리하도록 전환
- props를 반복적으로 전달하는 구조를 제거
- 데이터 흐름이 명확해지고, 상태 관리가 간결해져 코드 유지보수성의 향상

- dir 구조

```
📦 src
  📄 main.jsx          # 앱 진입점
  📄 App.jsx           # 라우팅 및 전역 설정
  📄 App.css           # App 전용 스타일
  📄 index.css         # 글로벌 스타일
  📂 components
    📂 background      # 공통 배경 컴포넌트
    📂 darkModeSwitch  # 다크 모드 토글 스위치 컴포넌트
  📂 pages
    📂 home            # 홈페이지
    📂 viteReactKit    # Vite + React 명령어 생성 페이지
    📂 githubPagesKit  # GitHub Pages 명령어 생성 페이지
```
