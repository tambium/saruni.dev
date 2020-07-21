import { ThemeModes } from "@saruni-ui/theme";

export const oppositeMode = (mode: ThemeModes): ThemeModes => {
  return mode === "light" ? "dark" : "light";
};
