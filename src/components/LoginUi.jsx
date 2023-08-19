import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const LoginUi = () => {
  const form = useForm({
    initialValues: { name: "", email: "" },
    validate: {
      // name: (value) =>
      //   value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 4 ? "Password must have at least 4 letters" : null,
    },
  });

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
        <form action="" className="">
          <div className="">
            <TextInput
              className="text-start outline-none"
              label="Email"
              placeholder="Enter your Email"
              {...form.getInputProps("email")}
            />
          </div>
          <div className="">
            <TextInput
              className="text-start outline-none"
              mt="sm"
              label="Password"
              placeholder="Enter your Password"
              {...form.getInputProps("password")}
            />
          </div>
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
