"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground } from "@/app/utils/helpers";
import { Button } from "./ui/button";
import {
  XMarkIcon,
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const MobileSidebar = () => {
  const { theme } = useTheme();
  console.log("🚀 ~ theme:", theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.aside
      key={"mobileSidebar"}
      className={`h-full w-64 fixed bottom-0 top-16 right-0 ${getThemeBackground(
        theme as Theme
      )}`}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", duration: 0.3 }}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-700"
            href="/">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <UserIcon className="h-5 w-5" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <EnvelopeIcon className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </motion.aside>
  );
};
export default MobileSidebar;
