import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LoginUi = () => {
  const [email,setEmail] = useState("saw@gmail.com");
  const [password,setPassword] = useState("1111");

  const form = useForm({
    initialValues: { name: "", email: "" },
    validate: {
      // name: (value) =>
      //   value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 3 ? "Password must have at least 3 letters" : null,
    },
  });

  // const fetchLogin = async(userData) =>{
  //   const {data} = await axios.post("https://a.mmsdev.site/api/v1/login",userData);
  //   console.log(data);
  // }

  // // useEffect(()=>{
  // //   fetchLogin();
  // // },[])

  // const loginHandler = async (e) =>{
  //     e.preventDefault();
  //     const userData = {email,password};
  //     await fetchLogin(userData);
  // }


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
        <form action="" className="flex flex-col gap-2">
          <div className="">
            <TextInput
              className="text-start outline-none"
              label="Email"
              type="email"
              placeholder="Enter your Email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              {...form.getInputProps("email")}
            />
          </div>

          <div className="">
            <TextInput
              className="text-start outline-none"
              mt="sm"
              label="Password"
              type="password"
              placeholder="Enter your Password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              {...form.getInputProps("password")}
            />
          </div>
          {/* <input className="bg-black" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
          {/* <input className="bg-black" type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} /> */}
          <Button
            type="submit"
            mt="sm"
            className="bg-gray-800 mt-10 px-8 text-lg"
          >
          <Link to = "/dashboard/home">
          Log In
          </Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginUi;
