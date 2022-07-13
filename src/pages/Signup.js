import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <br />
      <label>Password</label>
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"
      />
      <br />
      <button onClick={signupWithGoogle}>Signup With Google</button>
      <br />
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
