"use client";

import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";
import { Icon } from "@iconify/react";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // TODO: Add your login logic and error handling here
  };

  const handleGoogleLogin = () => {
    // TODO: Add your Google authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-500">Log in to your MediQueue account</p>
        </div>

        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
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
              placeholder="Enter your email"
              className="bg-slate-50 border-slate-200 focus:border-teal-500"
            />
            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

          {/* Password Field with Forget Password Link */}
          <div className="w-full">
            <TextField isRequired name="password" type="password">
              <div className="flex justify-between items-center mb-1">
                <Label className="text-slate-700 font-medium">Password</Label>
                <Link
                  href="/forget-password"
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                placeholder="Enter your password"
                className="bg-slate-50 border-slate-200 focus:border-teal-500"
              />
              <FieldError className="text-red-500 text-sm mt-1" />
            </TextField>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold rounded-xl py-6 hover:bg-teal-700 transition-colors mt-2"
          >
            Log In
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-slate-200"></div>
          <span className="px-4 text-sm text-slate-400">OR</span>
          <div className="grow border-t border-slate-200"></div>
        </div>

        {/* Google Social Login */}
        <Button className="w-full" variant="tertiary">
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-slate-600 mt-8 text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
