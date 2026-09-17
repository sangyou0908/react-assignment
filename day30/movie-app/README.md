# 2-6-5 데일리 과제 Base

2-6-4까지 완료된 상태에서 시작하는 과제용 기본 파일입니다.

## 실행

```bash
cd movie-app
npm install
npm run dev
```

## 시작 상태

- `App → MovieList → MovieCard` 구조가 완성되어 있습니다.
- 하드 코딩된 `movies` 배열을 `map()`으로 출력합니다.
- `keyword` State와 검색 기능이 구현되어 있습니다.
- 각 `MovieCard`의 찜 State가 구현되어 있습니다.
- TMDB API 요청, Loading/Error 처리는 아직 구현되어 있지 않습니다.
- `MovieList.jsx`, `MovieCard.jsx`의 TODO를 순서대로 완성하세요.

## 환경 변수

학생이 프로젝트 최상위 경로에 직접 `.env.local` 파일을 만들고
자신의 TMDB Read Access Token을 입력해야 합니다.

```text
VITE_TMDB_TOKEN=발급받은_TMDB_Read_Access_Token
```

`.env.local`은 Base zip에 포함되어 있지 않습니다.
