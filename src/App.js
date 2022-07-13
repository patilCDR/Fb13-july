import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import "./App.css";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, you are logged in
        setUser(user);
      } else {
        // User is logged out
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
