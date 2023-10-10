"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setIsMenuOpen(false);
    }
  }, [isDesktopOrLaptop]);

  return (
    <nav className="bg-gray-800 text-white h-16 flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-50">
      <a
        href="#"
        className="text-2xl font-bold">
        Logo
      </a>
      <UserButton />
    </nav>
  );
};

export default Navbar;
