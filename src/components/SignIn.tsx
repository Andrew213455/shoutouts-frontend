import { signInWithGoogle } from "../firebaseConfig";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <p>Sign in to leave a shoutout.</p>
      <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
