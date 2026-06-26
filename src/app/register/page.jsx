"use client";

import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      photoURL: userData.photoURL || undefined,
    });
    if (data?.user) {
      toast.success("Registration successful! Please log in.");
      fetch(`${process.env.BETTER_AUTH_URL}/api/send-email?email=${userData.email}&name=${userData.name}`, {
        method: "POST",
      })
      setTimeout(() => {
        redirect("/login");
      }, 1500);
    } else {
      toast.error(error?.message || "Unknown error");
    }
  };

  const handleGoogleRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Create an Account
          </h1>
          <p className="text-slate-500">
            Join MediQueue to start booking tutors
          </p>
        </div>

        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
          {/* Name Field */}
          <TextField isRequired name="name">
            <Label className="text-slate-700 font-medium">Full Name</Label>
            <Input
              placeholder="John Doe"
              className="bg-slate-50 border-slate-200 focus:border-teal-500"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Photo URL Field */}
          <TextField name="photoURL" type="url">
            <Label className="text-slate-700 font-medium">
              Photo URL (Optional)
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="bg-slate-50 border-slate-200 focus:border-teal-500"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-slate-700 font-medium">Email</Label>
            <Input
              placeholder="john@example.com"
              className="bg-slate-50 border-slate-200 focus:border-teal-500"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Password Field with Validation */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6)
                return "Password must be at least 6 characters";
              if (!/[A-Z]/.test(value))
                return "Must contain at least one uppercase letter";
              if (!/[a-z]/.test(value))
                return "Must contain at least one lowercase letter";
              return null;
            }}
          >
            <Label className="text-slate-700 font-medium">Password</Label>
            <Input
              placeholder="Create a strong password"
              className="bg-slate-50 border-slate-200 focus:border-teal-500"
            />
            <Description className="text-xs text-slate-500 mt-1">
              Must be at least 6 characters with uppercase & lowercase letters.
            </Description>
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold rounded-xl py-6 hover:bg-teal-700 transition-colors mt-2"
          >
            Register
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-slate-200"></div>
          <span className="px-4 text-sm text-slate-400">OR</span>
          <div className="grow border-t border-slate-200"></div>
        </div>

        {/* Google Social Login */}
        <Button className="w-full" variant="tertiary" onClick={handleGoogleRegister}>
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-slate-600 mt-8 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            Log in here
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default RegisterPage;
