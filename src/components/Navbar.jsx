"use client";

import Link from "next/link";
import Image from "next/image";
import HoverTextLink from "@/components/HoverTextLink";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar({ isLoggedIn = false }) {
  return (
    <div className="fixed top-4 left-1/2 z-50 w-[95%] max-w-8xl -translate-x-1/2">
      <div className="navbar bg-base-100/80 backdrop-blur-md rounded-xl border border-base-300 px-5 shadow-lg">

        {/* Logo */}
        <div className="navbar-start">
        <Link href="/" className="flex items-center group">
            <div className="border-2 border-black px-4 py-2 rounded-md transition-all duration-300 group-hover:border-transparent">
            <h1 className="text-3xl font-black tracking-tight uppercase">
                BLACK
                <span className="ml-1 rounded bg-red-500 px-2 py-1 text-xs text-white">
                ATHLETICS
                </span>
            </h1>
            </div>
        </Link>
        </div>

        {/* Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold uppercase text-xs gap-1">
            <li>
              <HoverTextLink href="/" defaultText="Home" hoverText="Home" />
            </li>

            <li>
              <HoverTextLink href="/" defaultText="All Classes" hoverText="All Classes" />
            </li>

            <li>
              <HoverTextLink href="/" defaultText="Community Forum" hoverText="Community Forum" />
            </li>

            {!isLoggedIn && (
              <li>
                <HoverTextLink href="/login" defaultText="Login" hoverText="Login" />
              </li>
            )}

            {isLoggedIn && (
              <li>
                <HoverTextLink href="/dashboard" defaultText="Dashboard" hoverText="Dashboard" />
              </li>
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
            
            {/* Theme Toggle */}
           <ThemeToggle />



          {isLoggedIn ? (
            <>
              <div className="avatar">
                <div className="w-11 rounded-full ring ring-red-500 ring-offset-2">
                  <Image
                    src="https://i.pravatar.cc/150"
                    alt="profile"
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              <button className="btn btn-error text-white">
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="btn glitch-btn bg-black text-white hover:bg-red-500 border-none"
            >
              Become A Member
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}