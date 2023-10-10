"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Theme, getInputColor } from "@/app/utils/helpers";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black",
            className
          )}
          ref={ref}
          {...props}
        />
        <MagnifyingGlassIcon
          className={`absolute h-5 w-5 translate left-0 top-1/2 -translate-y-1/2 ${getInputColor(
            theme as Theme
          )}`}
        />
      </div>
    );
  }
);
SearchInput.displayName = "Input";

export { SearchInput };
