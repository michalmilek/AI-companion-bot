import clsx from "clsx";
import React from "react";

interface BtnInterface extends React.ComponentProps<"button"> {
  isSelected: boolean;
}

const CategoryButton = ({
  className,
  children,
  isSelected,
  ...props
}: BtnInterface) => {
  const buttonClasses = clsx(
    "px-4 py-2 text-sm font-medium rounded-md",
    {
      "bg-gray-700 hover:bg-gray-600 text-white": !isSelected,
      "bg-gray-600 hover:bg-gray-500 text-black": isSelected,
    },
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
