"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:flex space-x-4 lg:space-x-8 absolute top-16 left-0 right-0 bg-gray-800 z-50 py-2 px-4">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 flex items-center gap-3">
                  <HomeIcon className="h-5 w-5" />
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 flex items-center gap-3">
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className="hidden lg:flex space-x-4">
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
