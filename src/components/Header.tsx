import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header className="Header">
      <div className="HeaderCon">
        <h1>Shoutout App</h1>
        <div className="welcome">
          <p>Welcome, {user?.displayName}</p>
          {user ? (
            <div>
              <img src={user.photoURL || ""} alt="profile image" />
            </div>
          ) : (
            <p>please sign in!</p>
          )}
          {user ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <button onClick={() => signInWithGoogle()}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
