import { Button, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {ImSpinner2} from "react-icons/im"
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/auth/authSlice";

const LoginUi = () => {
  const [isLoading,setIsLoading] = useState(false);
  const {register,handleSubmit} = useForm();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();


  const loginHandler = async (user) => {
    setIsLoading(true)
    const {data} = await login(user);
    setIsLoading(false)
    dispatch(addUser({user:data?.user,token:data?.token}))
    if(data?.token){
      nav("/dashboard/home")
    }
    console.log(data);
  }

  return (
    <div className="flex justify-around h-screen items-center bg-[#171717] w-full">
      {/* image section */}
      <div className="">
        <img src="../Login.svg" alt="" className="w-96 h-96" />
      </div>

      {/* form section */}
      <div className=" p-10 rounded-lg text-center bg-slate-300">
        <h1 className="tracking-widest text-lg mb-5 text-black">Welcome To</h1>
        <h1 className="text-6xl font-semibold mb-10 text-black">vendVortex</h1>

        {/* login form */}
        <form onSubmit={handleSubmit(loginHandler)}  className="flex flex-col gap-2">
          <input {...register("email")} id='email' className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="text" placeholder='Example@email.com' />
          <input {...register("password")}id="password" className='outline-0 shadow-2xl mb-5 mt-2 border rounded-lg p-4 w-full text-violet-500' type="password" placeholder='Enter your password' />
          <button
            type="submit"
            mt="sm"
            className={`bg-gray-800 mt-3 px-8 text-lg py-4 ${isLoading && "btn-disabled"}`}
          >
           {
            isLoading ? <ImSpinner2 className='animate-spin mx-auto w-5 h-5'/> : "Login"
           }
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUi;