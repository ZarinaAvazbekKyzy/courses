import React from "react";
import { createContext, useEffect, useState } from "react";
import fire from "../fire";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInp = () => {
    setEmail("");
    setPassword("");
  };

  const clearErr = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogIn = () => {
    clearErr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInp();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const authCloud = {
    email,
    user,
    password,
    hasAccount,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleLogIn,
    handleSignUp,
    handleLogOut,
    setHasAccount,
  };
  return (
    <authContext.Provider value={authCloud}>{children}</authContext.Provider>
  );
};

export default AuthContext;
