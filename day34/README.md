# DAY34 Daily Base

Firebase Authentication 복습 과제용 시작 코드입니다.

## 시작 전

1. `npm install`
2. `.env.local`의 `VITE_TMDB_TOKEN=` 뒤에 본인의 TMDB Read Access Token 입력
3. `npm run dev`
4. 기존 Movie App 기능 확인

## 직접 구현할 내용

- Firebase Package 설치
- `src/firebase.js`에서 Firebase App / Authentication 준비
- `src/components/AuthButton.jsx` 구현
- `App.jsx`에서 `user` State 관리
- `onAuthStateChanged()` Listener 등록
- Cleanup으로 `unsubscribe` 반환
- Google 로그인 / 로그아웃
- Header 오른쪽에 로그인 상태 표시

이번 과제는 로컬 환경에서만 진행합니다.
