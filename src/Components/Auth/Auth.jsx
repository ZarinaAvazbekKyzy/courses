import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import "./Auth.css";
export default function Auth() {
  const {
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
  } = useContext(authContext);

  const navigate = useNavigate();

  const signIn = () => {
    handleLogIn();
    navigate("/");
  };

  return (
    <div className="login">
      <div className="logForm">
        <h2>manage account</h2>
        <p>
          Sign in to your account using email and password provided during{" "}
          <br />
          registration.
        </p>
        <div className="loginContainer">
          <input
            className="logInp"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>{emailError}</p>
          <input
            type="password"
            className="logInp"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>{passwordError}</p>
        </div>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogIn} className="logBtn">
                sign in
              </button>
              <p className="logP">
                Don't have an account?
                <span
                  className="logSpan"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  sing up
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp} className="logBtn">
                sign up
              </button>
              <p className="logP">
                Have an account?
                <span
                  className="logSpan"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  sing in
                </span>
              </p>
            </>
          )}
        </div>
        <button onClick={handleLogOut} className="logBtn">
          log out
        </button>
        {user ? (
          <>
            <p>you are logged in, {user.email}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
