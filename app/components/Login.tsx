import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <section id="login">
      <div className="h-screen bg-[url('/images/login/bg.png')] bg-cover relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="bg-[url('/images/login/bg-white.svg')] z-10 relative h-screen bg-no-repeat p-20">
          <div className="w-[25.125rem] relative">
            <h1 className="font-semibold text-[#013300] text-[2.75rem] leading-[1.25]">
              Welcome back!
            </h1>
            <p className="text-[#7c7c7c] text-lg mb-4">
              Please enter your detail
            </p>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[#013300] font-medium text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full h-[3.8125rem] flex items-center px-4 border-2 border-[#013300] rounded-[0.625rem] bg-transparent"
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
                <button className="absolute right-4 top-5">
                  <AiOutlineEye color="#7c7c7c" fontSize="1.5rem" />
                </button>
                <input
                  type="password"
                  id="password"
                  className="w-full h-[3.8125rem] flex items-center px-4 border-2 border-[#013300] rounded-[0.625rem] bg-transparent"
                />
              </div>
              <a
                href="/forgot"
                className="text-right text-[#7c7c7c] text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full h-[3.8125rem] flex items-center justify-center border-2 border-[#013300] rounded-[0.625rem] bg-[#013300] text-white text-lg hover:bg-transparent hover:text-[#013300] duration-300 ease-linear font-medium">
              Login
            </button>
            <div className="flex items-center gap-4 my-4">
              <hr className="w-full border border-[#7c7c7c80]" />
              <p className="text-[#7c7c7c] font-medium">OR</p>
              <hr className="w-full border border-[#7c7c7c80]" />
            </div>
            <button className="w-full h-[3.8125rem] flex items-center justify-center border-2 border-[#013300] rounded-[0.625rem] bg-transparent text-[#013300] text-lg hover:bg-[#013300] hover:text-white duration-300 ease-linear">
              <div className="flex items-center gap-3">
                <FcGoogle fontSize="1.75rem" />
                <span className="font-medium">Login with Google</span>
              </div>
            </button>
            <p className="text-[#7c7c7c] font-medium text-center absolute -bottom-16 w-full">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-[#013300] underline hover:no-underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
