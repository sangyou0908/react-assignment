import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

function AuthButton({ user }) {
  const provider = new GoogleAuthProvider();

  async function handleLogin() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  }

  if (user) {
    return (
      <>
        <p>{user.displayName}님, 환영합니다!</p>
        <button onClick={handleLogout}>로그아웃</button>
      </>
    );
  }

  return <button onClick={handleLogin}>Google 로그인</button>;
}

export default AuthButton;
