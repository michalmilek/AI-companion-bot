"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white h-16 flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-50">
      <a
        href="#"
        className="text-2xl font-bold">
        Logo
      </a>
      <ul className="flex space-x-4">
        <li>
          <a
            href="#"
            className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
