import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

function AuthButton() {
  async function handleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={handleLogin}>Google 로그인</button>;
}

export default AuthButton;
