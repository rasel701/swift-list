"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLock, MdLogin, MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    if (email === "kamal@ka.com" && password === "kamal123") {
      const token = "mock-kamal-12345-token";
      Cookies.set("token", token, { expires: 1 });
      const redirectPath = searchParams.get("redirect") || "/";
      route.push(redirectPath);
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[450px] bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 md:p-12"
      >
        {/* Back to Home */}
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
        >
          <MdArrowBack className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 mb-6">
            <MdLogin className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Login.
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Access your ProductNest dashboard.
          </p>
        </div>

        {/* Form UI */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                <MdEmail size={20} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="w-full bg-gray-50 border border-gray-200 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-gray-700">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-indigo-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                <MdLock size={20} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-400"
              />
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Sign In
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </div>
        </form>

        {/* Social Login Mockup */}

        <p className="text-center mt-10 text-gray-500 font-medium">
          New here?{" "}
          <Link
            href="/"
            className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
          >
            Create account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
