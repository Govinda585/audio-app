import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import instagram from "../../assets/images/instagram.png";

const Login = ({ loginModel, loginSuccess }) => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
    privacyPolicy: false,
    rememberMe: false,
  });

  const [signup, setSignup] = useState(false);
  const { username, email, password, privacyPolicy, rememberMe } = login;

  const handleLogin = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const loginSignup = (e) => {
    e.preventDefault();
    if (signup === false) {
      alert("login successfully");
      loginSuccess();
    } else {
      alert("signup successfully");
      loginSuccess();
    }
  };

  const loginGoogle = () => {
    loginSuccess();
    if (signup === false) {
      alert("login successfully");
      loginSuccess();
    } else {
      alert("signup successfully");
      loginSuccess();
    }
  };
  const loginFacebook = () => {
    loginSuccess();
    if (signup === false) {
      alert("login successfully");
      loginSuccess();
    } else {
      alert("signup successfully");
      loginSuccess();
    }
  };
  const loginTwitter = () => {
    loginSuccess();
    if (signup === false) {
      alert("login successfully");
      loginSuccess();
    } else {
      alert("signup successfully");
      loginSuccess();
    }
  };
  const loginInstagram = () => {
    loginSuccess();
    if (signup === false) {
      alert("login successfully");
      loginSuccess();
    } else {
      alert("signup successfully");
      loginSuccess();
    }
  };
  return (
    <div>
      <Dialog
        open={loginModel}
        onClose={loginSuccess}
        disableBackdropClick={true}
      >
        <div className="text-center p-6">
          <h1 className="text-2xl">{signup ? "Sign Up" : "Log In"}</h1>
          <h4 className="py-4 text-sidebar">
            {signup
              ? "Please sign up to enter in a app"
              : "Please login to enter in a app"}
          </h4>
          <div className="space-y-5">
            {signup ? (
              <section className="flex space-x-3 items-center">
                <FaUser />
                <input
                  type="text"
                  value={username}
                  name="username"
                  onChange={handleLogin}
                  placeholder="username"
                  className="rounded-md outline-none border p-2"
                />
              </section>
            ) : null}
            <section className="flex space-x-3 items-center">
              <MdEmail />
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleLogin}
                placeholder="email"
                className="rounded-md outline-none border p-2"
              />
            </section>
            <section className="flex space-x-3 items-center">
              <RiLockPasswordFill />
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleLogin}
                placeholder="password"
                className="rounded-md outline-none border p-2"
              />
            </section>
          </div>
          {signup ? (
            <section className="flex items-center space-x-3 my-5">
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={privacyPolicy}
                onChange={handleLogin}
              />
              <h4 className="text-sidebar">I Agree to Privacy Policy</h4>
            </section>
          ) : (
            <section className="flex items-center space-x-3 my-5">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleLogin}
              />
              <h4 className="text-sidebar">Remember me</h4>
            </section>
          )}
          <button
            className="outline-none border rounded-full border-icons text-icons font-bold w-full p-2"
            onClick={loginSignup}
          >
            {signup ? "Sign Up" : "Login"}
          </button>
          <div className="space-y-3">
            <h4 className="mt-5 text-sidebar">
              {signup ? "Signup with" : "Login with"}
            </h4>
            <section className="flex justify-center items-center space-x-5">
              <SiFacebook
                size={25}
                className="text-facebook cursor-pointer"
                onClick={loginFacebook}
              />
              <FcGoogle
                size={28}
                className=" cursor-pointer"
                onClick={loginGoogle}
              />
              <AiFillTwitterCircle
                size={28}
                className="cursor-pointer text-twitter"
                onClick={loginTwitter}
              />
              <img
                src={instagram}
                alt="instagram"
                height="25px"
                width="25px"
                className="cursor-pointer"
                onClick={loginInstagram}
              />
            </section>
          </div>
          <h4 className="text-sidebar mt-7">
            Already have an account?{" "}
            <span
              className="text-icons cursor-pointer"
              onClick={() => setSignup(!signup)}
            >
              {signup ? "Login" : "Sign Up"}
            </span>
          </h4>
        </div>
      </Dialog>
    </div>
  );
};

export default Login;
