"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground } from "@/app/utils/helpers";
import { Button } from "./ui/button";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MobileSidebar = () => {
  const { theme } = useTheme();
  return (
    <AnimatePresence mode="wait">
      <motion.aside
        className={`h-full py-2 w-[50px] fixed bottom-0 top-16 right-0 ${getThemeBackground(
          theme as Theme
        )}`}
        initial={{ width: 0 }}
        animate={{ width: "50px" }}
        transition={{ type: "tween", duration: 0.3 }}
        exit={{ width: 0 }}>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className={`flex flex-col items-center gap-2 py-2 ${
                theme === "light" ? "hover:bg-gray-700" : "hover:bg-gray-500"
              } transition-none`}
              href="/">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-2 py-2 px-4 hover:bg-gray-700"
              href="/profile">
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-2 py-2 px-4 hover:bg-gray-700"
              href="/contact">
              <EnvelopeIcon className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </motion.aside>
    </AnimatePresence>
  );
};
export default MobileSidebar;