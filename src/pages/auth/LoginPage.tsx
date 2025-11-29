import React from "react";
//images
import LoginImg from "../../assets/png/login-illustration.jpg";
import LogoImg from "../../assets/svg/logo.svg";
import { CgArrowLeft } from "react-icons/cg";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <div className="lg:flex">
      <div className="flex justify-center px-5 pt-13 lg:w-[50%] lg:px-0">
        <div className="max-w-md">
          <img src={LogoImg} alt="site logo" />
          <Link
            className="text-link-100 mb-10 flex items-center gap-1 rounded-md px-2.5 py-4"
            to="/"
          >
            <CgArrowLeft />
            Back to Home
          </Link>
          <form
            className="border-text-secondary rounded-2xl border px-6 py-4 md:px-8 md:py-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-link-100 mb-2 text-2xl font-bold md:text-3xl">
              Welcome Back
            </h1>
            <p className="text-text-secondary mb-6">
              Enter your credentials to access your account
            </p>
            <label className="mb-4 block">
              <p className="mb-3 text-[14px] font-medium">Email</p>
              <input
                className="w-full rounded-md border p-[13px] outline-none autofill:bg-white"
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="name@example.com"
              />
            </label>
            <label className="mb-4 block">
              <p className="mb-3 text-[14px] font-medium">Password</p>
              <input
                className="w-full rounded-md border p-[13px] outline-none autofill:bg-white"
                {...register("password", {
                  required: "password is required",
                })}
                type="password"
                placeholder="*********"
              />
            </label>
            <Button className="w-full" variant="primary" size="lg">
              Login
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden min-h-screen items-center justify-center bg-[#f2f1fe] lg:flex lg:w-[50%]">
        <div className="flex flex-col items-center justify-center">
          <img
            className="mb-8 h-[500px] w-[500px] rounded-2xl"
            src={LoginImg}
            alt=""
          />
          <h2 className="mb-4 text-2xl font-bold">Start Your Journey</h2>
          <p className="text-text-secondary">
            Join thousands of creators sharing their stories on Blogify
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
