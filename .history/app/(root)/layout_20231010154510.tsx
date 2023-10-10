"use client";

import MobileSidebar from "@/components/MobileSidebar";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  console.log("🚀 ~ theme:", theme);

  return (
    <div
      className={`h-screen ${clsx(
        (theme === "dark" || "system") && "bg-gray-700",
        theme === "light" && "bg-gray-300"
      )} `}>
      <Navbar />
      <MobileSidebar />
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
