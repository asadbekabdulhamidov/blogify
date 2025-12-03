import React from "react";
//images
import LoginImg from "../../assets/png/login-illustration.jpg";
import LogoImg from "../../assets/svg/logo.svg";
import { CgArrowLeft } from "react-icons/cg";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import Input from "../../components/ui/Input";

//firebase
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase.config";

//toast
import { Toaster, toast } from "sonner";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Emial is required"),
  password: yup
    .string()
    .min(6, "min 6 characters")
    .required("Password is required"),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log("Submitted:", data);

    try {
      const cred = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,

        //firestoredan  admin malumotlarini olish
      );
      console.log("login success", cred.user);

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", data.email));
      const snap = await getDocs(q);

      if (snap.empty) {
        // users collection ichida bu email yo‘q
        await signOut(auth);
        toast.error("User ma'lumotlari topilmadi!");
        return;
      }

      const userData = snap.docs[0].data();

      if (userData.role === "admin") {
        toast.success("Admin sifatida tizimga kirdingiz!");
        navigate("/admin");
      } else {
        await signOut(auth);
        toast.error("Faqat adminlar kirishi mumkin!");
      }

      console.log(userData);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:flex">
      <div className="flex justify-center px-5 pt-13 lg:w-[50%] lg:px-0">
        <Toaster position="top-right" richColors closeButton />
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
            <Input
              type="email"
              placeholder="name@gmail.com"
              label="Email"
              name="email"
              error={errors.email}
              register={register}
            />
            <Input
              type="password"
              placeholder="*******"
              label="Password"
              name="password"
              error={errors.password}
              register={register}
            />

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
