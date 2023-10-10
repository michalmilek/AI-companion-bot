import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Theme, getThemeBackground } from "@/app/utils/helpers";

const MobileSidebar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed z-10 inset-y-0 ${getThemeBackground(theme as Theme)}`}>
      {/* Mobile menu button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}>
        {/* Menu button icon */}
      </button>

      {/* Mobile sidebar */}
      <motion.div
        className={`bg-gray-800 text-white h-screen w-64 fixed top-0 left-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}>
        {/* Mobile sidebar content */}
      </motion.div>
    </aside>
  );
};

export default MobileSidebar;
