"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-base-300 bg-base-100/80 backdrop-blur-md shadow-xl p-6">

        {/* Title */}
        <h1 className="text-3xl font-black uppercase tracking-tight text-center">
          {isLogin ? "Login" : "Join BLACK"}
        </h1>

        <p className="text-xs text-center opacity-70 mt-1 uppercase">
          {isLogin
            ? "Welcome back athlete"
            : "Become a member of black athletics"}
        </p>

        {/* Form */}
        <div className="mt-6 space-y-3">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full focus:outline-none"
          />

          {/* Confirm Password */}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full focus:outline-none"
            />
          )}

          {/* Action Button */}
          <button className="btn glitch-btn w-full bg-black text-white hover:bg-red-500 border-none uppercase tracking-widest">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </div>

        {/* Switch */}
        <p className="mt-5 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already part of BLACK?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-red-500 font-bold uppercase hover:underline "
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

        {/* Back link */}
        <div className="mt-4 text-center">
          <Link href="/" className="text-xs opacity-60 hover:opacity-100">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}