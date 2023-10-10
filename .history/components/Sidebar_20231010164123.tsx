import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground } from "@/app/utils/helpers";
import { Button } from "./ui/button";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const { theme } = useTheme();
  const isTabletOrLarger = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (!isTabletOrLarger) {
    return null;
  }

  return (
    <motion.aside
      className={`h-full py-2 fixed bottom-0 top-16 left-0 ${getThemeBackground(
        theme as Theme
      )}`}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", duration: 0.3 }}>
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
  );
};

export default Sidebar;
