import { Button, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/auth/authSlice";

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
        <img src="../Login.svg" alt="" className="w-[75%]" />
      </div>

      {/* form section */}
      <div className=" p-10 text-center h-screen justify-center w-[50%] bg-slate-500 flex flex-col gap-5">
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
      </div>
    </div>
  );
};

export default LoginUi;