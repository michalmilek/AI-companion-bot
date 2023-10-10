"use client";

import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white h-16 flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-50">
      <a
        href="#"
        className="text-2xl font-bold">
        Logo
      </a>
      <div className="flex items-center">
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <ul className={`lg:flex space-x-4 ${isMenuOpen ? "flex" : "hidden"}`}>
          <li>
            <a
              href="#"
              className="hover:text-gray-300">
              <HomeIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300">
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-300">
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
