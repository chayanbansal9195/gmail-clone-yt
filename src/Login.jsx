import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://the8-bit.com/wp-content/uploads/2020/10/Redesigned-Gmail.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
