"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground, getThemeColor } from "@/app/utils/helpers";
import { useMediaQuery } from "react-responsive";
import { Bars3Icon } from "@heroicons/react/24/solid";
import useStore from "@/app/hooks/useStore";

const Navbar = () => {
  const { theme } = useTheme();
  const isTabletOrLarger = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore();

  return (
    <nav
      className={`${getThemeBackground(
        theme as Theme
      )} h-16 flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-50 border-b-gray-400 border-b`}>
      <a
        href="#"
        className="text-2xl font-bold">
        Logo
      </a>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          size="sm"
          variant={getThemeColor(theme as Theme)}>
          Upgrade
          <Sparkles
            className={`${
              theme === "light"
                ? "text-gray-800 fill-gray-800"
                : "text-gray-200 fill-gray-200"
            }  h-4 w-4`}
          />
        </Button>

        <UserButton />
        {!isTabletOrLarger && (
          <Button
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant={getThemeColor(theme as Theme)}>
            <Bars3Icon
              className={`${
                theme === "light"
                  ? "text-gray-800 fill-gray-800"
                  : "text-gray-200 fill-gray-200"
              } p-2`}
            />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
