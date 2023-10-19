"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground } from "@/app/utils/helpers";
import { Button } from "./ui/button";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import useStore from "@/app/hooks/useStore";
import { useMediaQuery } from "react-responsive";
import { routes } from "@/app/router/routes";
import SingleLink from "./SingleLink";

const MobileSidebar = () => {
  const { theme } = useTheme();
  const isTabletOrLarger = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobileOrLarger = useMediaQuery({
    query: "(min-width: 550px)",
  });
  const { isMobileMenuOpen } = useStore();
  return (
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && !isTabletOrLarger && (
        <motion.aside
          className={`z-20 h-full py-2 fixed bottom-0 top-16 right-0 ${getThemeBackground(
            theme as Theme
          )}`}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          exit={{ x: "100%" }}>
          <ul className="flex flex-col gap-2">
            {routes.map((route, index) => (
              <SingleLink
                href={route.href}
                icon={route.icon}
                label={route.label}
                key={route.label + index + 123}
              />
            ))}
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
export default MobileSidebar;
