"use client";

import MobileSidebar from "@/components/MobileSidebar";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import useStore from "../hooks/useStore";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isTabletOrLarger = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const { setIsMobileMenuOpen, isMobileMenuOpen } = useStore();

  useEffect(() => {
    if (isTabletOrLarger) {
      setIsMobileMenuOpen(false);
    }
  }, [isTabletOrLarger, setIsMobileMenuOpen]);

  return (
    <div
      className={`h-screen ${clsx(
        (theme === "dark" || "system") && "bg-gray-700",
        theme === "light" && "bg-gray-400"
      )} `}>
      <Navbar />
      {isMobileMenuOpen && !isTabletOrLarger && <MobileSidebar />}
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
