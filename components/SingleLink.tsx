"use client";

import { Route } from "@/app/router/routes";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleLink = ({ href, icon, label }: Route) => {
  const [active, setActive] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const labelLowerCase = label.toLowerCase();
      if (pathname.includes(labelLowerCase)) {
        setActive(true);
      }
    }

    return () => {
      setActive(false);
    };
  }, [label, pathname]);

  useEffect(() => {
    if (pathname === "/" && label === "Home") {
      setActive(true);
    }

    return () => {
      setActive(false);
    };
  }, [pathname, label]);

  return (
    <li>
      <Link
        className={`flex flex-col items-center gap-2 py-2 px-2 rounded-lg ${
          theme === "light" ? "hover:bg-gray-700" : "hover:bg-gray-500"
        } ${clsx(
          active && ` ${theme === "light" ? "bg-gray-700" : "bg-gray-500"}`
        )} transition-none`}
        href={href}>
        {React.cloneElement(icon, { className: "h-5 w-5" })}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SingleLink;
