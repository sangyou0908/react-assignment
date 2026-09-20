# Day31 Daily Assignment Base

수업 코드와 동일하게 `MovieSearch.jsx` 안에서 `fetch()`를 직접 사용하는 구조입니다.

JavaScript 파트에서 이미 학습한 다음 코드는 기본으로 제공됩니다.

- `fetch()`
- `encodeURIComponent()`
- Authorization Header
- `response.ok`
- `response.json()`
- `try / catch / finally`

이번 과제에서는 React에서 중요한 부분만 TODO로 남겨두었습니다.

```text
Search API Response
→ setMovies()
→ State 변경
→ 리렌더링
```

그리고 `onSubmit`, Loading 중 버튼 상태를 직접 완성합니다.

## 실행

```bash
npm install
npm run dev
```

`.env.local`의 `VITE_TMDB_TOKEN` 값을 자신의 TMDB Read Access Token으로 변경하세요.
