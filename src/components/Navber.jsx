"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  MdOutlineInventory2,
  MdLogin,
  MdLogout,
  MdAddBox,
  MdOutlineExplore,
} from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLoggedIn = Cookies.get("token");
  console.log(isLoggedIn);

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-1" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-200">
              <MdOutlineInventory2 className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-800">
              Product<span className="text-indigo-600">Nest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="menu menu-horizontal px-1 font-bold text-gray-600 gap-1">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-600 focus:bg-indigo-50 rounded-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/items"
                  className="hover:text-indigo-600 focus:bg-indigo-50 rounded-xl flex gap-1"
                >
                  <MdOutlineExplore size={20} /> Items
                </Link>
              </li>

              <li>
                <Link
                  href="/add-item"
                  className="text-indigo-600 hover:bg-indigo-50 rounded-xl flex gap-1"
                >
                  <MdAddBox size={20} /> Add Product
                </Link>
              </li>
            </ul>

            <div className="h-6 w-[1px] bg-gray-200 mx-3"></div>

            <Link
              href="/login"
              className="btn btn-primary bg-indigo-600 border-none hover:bg-indigo-700 rounded-2xl px-8 normal-case text-white gap-2 shadow-md"
            >
              <MdLogin size={20} />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-gray-600"
            >
              {isOpen ? <IoClose size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-xl font-bold text-gray-700 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            href="/items"
            onClick={() => setIsOpen(false)}
            className="block text-xl font-bold text-gray-700 hover:text-indigo-600"
          >
            Items
          </Link>

          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full bg-indigo-600 border-none text-white rounded-2xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
