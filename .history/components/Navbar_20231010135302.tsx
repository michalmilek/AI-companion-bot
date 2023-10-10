"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
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
