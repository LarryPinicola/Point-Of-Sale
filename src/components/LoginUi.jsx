import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/auth/authSlice";
import "../style/glassmorphic.css";

const LoginUi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const loginHandler = async (user) => {
    setIsLoading(true);
    const { data } = await login(user);
    setIsLoading(false);
    dispatch(addUser({ user: data?.user, token: data?.token }));
    if (data?.token) {
      nav("/");
    }
    console.log(data);
  };

  return (
    <div className="flex justify-between h-screen items-center bg-[#555555] w-full">
      {/* image section */}
      <div className="h-screen flex justify-center items-center w-[50%]">
        <img src="../Login.svg" alt="" className="w-96 h-96" />
      </div>

      {/* form section */}
      <div className=" p-10 text-center h-screen w-[50%] bg-slate-500 flex flex-col gap-5">
        <h1 className="tracking-widest text-xl mb-5 text-gray-300">
          Welcome To
        </h1>
        <h1 className="text-6xl font-semibold mb-10 text-black">vendVortex</h1>

        {/* login form */}
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col gap-2"
        >
          <input
            {...register("email")}
            id="email"
            className="outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500"
            type="text"
            placeholder="Example@email.com"
          />
          <input
            {...register("password")}
            id="password"
            className="outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            mt="sm"
            className={`bg-gray-800 mt-3 px-8 text-lg py-4 rounded-lg tracking-wide ${
              isLoading && "btn-disabled"
            }`}
          >
            {isLoading ? (
              <ImSpinner2 className="animate-spin mx-auto w-5 h-5" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      {/* form section */}
      <div className=" relative text-center h-screen justify-center w-[53%] bg-gradient-to-b from-[#141b23] from-15% via-[#643549] via-20% to-[#552d3c] to-90% flex flex-col gap-5">
        <div className=" absolute w-[100%] h-screen justify-center bg-gradient-to-r from-[#141b23] from-15% via-transparent via-30% to-transparent to-90% flex flex-col gap-5"></div>
        <div className=" formAni z-10 absolute ml-[80px] w-[500px] px-12 pb-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer">
          <h1 className=" tracking-[1px] mmsFont text-[100px] font-[700] text-[#E8EAED]">
            mms{" "}
            <span className=" dk absolute ml-[-90px] mt-[91px] text-3xl text-cyan-500">
              DARK
            </span>
          </h1>

          <div className=" mx-auto w-[400px] h-9 overflow-hidden mt-[-14px] mb-1">
            <p className=" tracking-[4px] plhtc text-[#E8EAED] text-[26px]">
              Please Login here to continue ...
            </p>
          </div>

          {/* login form */}
          <form
            onSubmit={handleSubmit(loginHandler)}
            className=" flex flex-col gap-2 pt-3"
          >
            <span className=" jumpAniOne">
              <input
                {...register("email")}
                id="email"
                className=" bg-transparent outline-0 shadow-2xl mb-5 mt-2 bc rounded-lg p-3 w-full text-[rgba(255,255,255,0.726)]"
                type="text"
                placeholder="Example@email.com"
              />
            </span>
            <span className=" jumpAniOne">
              <input
                {...register("password")}
                id="password"
                className=" bg-transparent outline-0 shadow-2xl mb-5 mt-2 bc rounded-lg p-3 w-full text-[rgba(255,255,255,0.726)]"
                type="password"
                placeholder="Enter your password"
              />
            </span>

            <div className=" py-3 flex flex-wrap justify-between">
              <div className=" inAniOne flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4"
                />
                <label
                  htmlFor="default-checkbox"
                  className=" txFt ml-2 text-2xl hover:text-cyan-300 font-medium text-[rgba(255,255,255,0.726)]"
                >
                  Remember Me
                </label>
              </div>
              <div className=" inAniTwo text-[rgba(255,255,255,0.726)] hover:text-cyan-300">
                <p className=" txFt text-2xl"> Forget Password?</p>
              </div>
            </div>

            <span className=" upAni">
              <button
                type="submit"
                className={` bg-gradient-to-br from-pink-500 to-yellow-500 mt-3 mx-auto w-32 text-lg py-[10px] rounded-xl tracking-wide btFt hover:bg-gradient-to-br hover:from-transparent hover:to-transparent hover:py-[8px] ${
                  isLoading && "btn-disabled"
                }`}
              >
                {isLoading ? (
                  <ImSpinner2 className="animate-spin mx-auto w-7 h-7" />
                ) : (
                  "Login"
                )}
              </button>
            </span>
          </form>
        </div>
      </div>

      {/* image section */}
      <div className=" relative h-screen flex justify-center items-center">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/017/516/796/original/anastasia-chereshenka-img-0704.gif?1556290395"
          alt=""
          className=" bg-cover"
        />
        <div className=" absolute w-52 mt-[-450px] mr-[-480px]">
          <div className=" bg-[rgba(255,255,255,0.726)] rounded-[50%] w-60 h-24 flex items-center">
            <p className=" text-black text-center flex flex-col items-center">
              <span className=" pl-9 youAgain">... You again ?</span>{" "}
              <span className=" pl-11 text-xl sigh">Sigh ... </span>{" "}
              <span className=" pl-11 text-xl wb">Welcome back !</span>{" "}
              <span className=" pl-2 wdyn">What do you want this time?</span>
            </p>
          </div>
          <div className=" triangle absolute mt-[-27px] mr-[-26px]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginUi;
