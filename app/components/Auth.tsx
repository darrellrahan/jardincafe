"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { auth, getError, googleProvider } from "../firebase";

function Auth({ type }: { type: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  function register(name: string, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
        }).catch((error) => {
          alert(getError(error.code));
        });
      })
      .catch((error) => {
        alert(getError(error.code));
      });
  }

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      alert(getError(error.code));
    });
  }

  function google() {
    signInWithPopup(auth, googleProvider).catch((error) => {
      alert(getError(error.code));
    });
  }

  return (
    <section id="auth">
      <div className="h-screen bg-[url('/images/login/bg.png')] bg-cover relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className={`bg-[url('/images/login/bg-white.svg')] z-10 relative h-screen bg-no-repeat px-20 flex items-center`}
        >
          <div className="w-[25.125rem] relative">
            <h1 className="font-semibold text-[#013300] text-[2.75rem] leading-[1.25]">
              {type === "login" ? "Welcome back!" : "Hi there!"}
            </h1>
            <p className="text-[#7c7c7c] text-lg mb-4">
              {type === "login"
                ? "Please enter your detail"
                : "Register now and start exploring"}
            </p>
            {type === "register" && (
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="name"
                  className="text-[#013300] font-medium text-lg"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  className="w-full h-[3.5rem] flex items-center px-4 border-2 border-[#013300] rounded-[0.625rem] bg-transparent"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[#013300] font-medium text-lg"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                className="w-full h-[3.5rem] flex items-center px-4 border-2 border-[#013300] rounded-[0.625rem] bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label
                htmlFor="password"
                className="text-[#013300] font-medium text-lg"
              >
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={passwordType}
                  id="password"
                  className="w-full h-[3.5rem] flex items-center px-4 border-2 border-[#013300] rounded-[0.625rem] bg-transparent"
                />
                <button
                  onClick={() =>
                    setPasswordType(
                      passwordType === "password" ? "text" : "password"
                    )
                  }
                  className="absolute right-4 top-[1.05rem] text-[#7c7c7c] text-[1.5rem]"
                >
                  {passwordType === "password" ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </button>
              </div>
              <a
                href="/forgot"
                className="text-right text-[#7c7c7c] text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              onClick={() => {
                if (
                  type === "register" &&
                  name !== "" &&
                  email !== "" &&
                  password !== ""
                ) {
                  register(name, email, password);
                } else if (
                  type === "login" &&
                  email !== "" &&
                  password !== ""
                ) {
                  login(email, password);
                } else {
                  alert("Please fill all the fields.");
                }
              }}
              className="w-full h-[3.5rem] flex items-center justify-center border-2 border-[#013300] rounded-[0.625rem] bg-[#013300] text-white text-lg hover:bg-transparent hover:text-[#013300] duration-300 ease-linear font-medium"
            >
              {type === "login" ? "Login" : "Register"}
            </button>
            <div className="flex items-center gap-4 my-4">
              <hr className="w-full border border-[#7c7c7c80]" />
              <p className="text-[#7c7c7c] font-medium">OR</p>
              <hr className="w-full border border-[#7c7c7c80]" />
            </div>
            <button
              onClick={google}
              className="w-full h-[3.5rem] flex items-center justify-center border-2 border-[#013300] rounded-[0.625rem] bg-transparent text-[#013300] text-lg hover:bg-[#013300] hover:text-white duration-300 ease-linear"
            >
              <div className="flex items-center gap-3">
                <FcGoogle fontSize="1.75rem" />
                <span className="font-medium">
                  {type === "login" ? "Login" : "Register"} with Google
                </span>
              </div>
            </button>
            <p className="text-[#7c7c7c] font-medium text-center mt-8 w-full">
              {type === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <a
                href={type === "login" ? "/register" : "/login"}
                className="text-[#013300] underline hover:no-underline"
              >
                {type === "login" ? "Register" : "Login"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
