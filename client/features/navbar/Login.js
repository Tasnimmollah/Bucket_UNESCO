import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { backColor, setBackColor, fixNav, setFixNav, uLog, setULog } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const changeNav = () => {
      setFixNav(false);
    };
    changeNav();
  }, []);

  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setEmail("");
    setPassword("");
    setULog(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("HANDLESUBMIT", userCredential);
        user = userCredential.user;
        console.log("LOGGED IN USER", user);
      })
      .then(() => {
        navigate("/Home");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log("ENTIRE ERROR", error.message);
      });
  };

  return (
    <div
      className="px-20 pt-32 bg-slate-200 flex flex-row items-center justify-center"
      id="login"
    >
      <div className="w-full max-w-xl pb-20">
        <h1 className="text-6xl text-center pb-20">Log In</h1>
        <hr />
        <form
          onSubmit={(ev) => handleSubmit(ev)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray text-xl font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              required
              placeholder="some@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              required
              placeholder="******************"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-xl text-black font-bold border rounded-xl bg-white px-16 py-2 drop-shadow-md"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="text-xl text-black font-bold border rounded-xl bg-white px-16 py-2 drop-shadow-md"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center text-gray text-xs py-10">
            2022 BucketUNESCO Corp. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
