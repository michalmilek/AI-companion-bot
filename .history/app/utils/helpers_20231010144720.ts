export type Theme = "dark" | "system" | "light";

export function getThemeColor(theme: "dark" | "system" | "light") {
  if (theme === "dark" || theme === "system") {
    return "dark";
  } else {
    return "gray";
  }
}
