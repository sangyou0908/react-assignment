import { Link } from "react-router";

function NotFound() {
  return (
    <section>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link to="/">영화 목록으로 돌아가기</Link>
    </section>
  );
}

export default NotFound;
