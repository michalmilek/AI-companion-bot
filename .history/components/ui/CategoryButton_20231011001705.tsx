import clsx from "clsx";
import React from "react";

interface BtnInterface extends React.ComponentProps<"button"> {
  selectedCategory: boolean;
}

const CategoryButton = ({ className, children, ...props }: BtnInterface) => {
  const buttonClasses = clsx(
    "px-4 py-2 text-sm font-medium rounded-md",
    "bg-gray-700 hover:bg-gray-600 text-white",
    className
  );

  return (
    <button
      className={buttonClasses}
      {...props}>
      {children}
    </button>
  );
};

export default CategoryButton;
