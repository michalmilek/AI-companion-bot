import clsx from "clsx";

export type Theme = "dark" | "system" | "light";

export function getThemeColor(theme: Theme) {
  if (theme === "dark" || theme === "system") {
    return "dark";
  } else {
    return "gray";
  }
}

export const getThemeBackground = (theme: Theme) => {
  return clsx(
    (theme === "dark" || theme === "system") && "bg-gray-200 text-gray-800",
    theme === "light" && "bg-gray-800 text-gray-200"
  );
};

export const getInputColor = (theme: Theme) => {
  return clsx(
    (theme === "dark" || theme === "system") && "text-white",
    theme === "light" && "text-black"
  );
};
