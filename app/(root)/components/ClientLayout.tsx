"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const { theme } = useTheme();

  if (isMounted)
    return (
      <main
        className={`px-10 md:pr-60 pt-20 pb-2 h-full ${clsx(
          theme === "light" && "!bg-gray-400",
          (theme === "dark" || "system") && "!bg-gray-700"
        )} min-h-screen`}>
        {children}
      </main>
    );

  return null;
};

export default ClientLayout;
