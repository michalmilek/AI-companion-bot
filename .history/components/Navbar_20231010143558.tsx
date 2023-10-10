"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  console.log("🚀 ~ theme:", theme);
  return (
    <nav className="bg-gray-800 text-white h-16 flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-50">
      <a
        href="#"
        className="text-2xl font-bold">
        Logo
      </a>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          size="sm"
          variant="gray">
          Upgrade
          <Sparkles className="text-gray-800 fill-gray-800 h-4 w-4" />
        </Button>

        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
