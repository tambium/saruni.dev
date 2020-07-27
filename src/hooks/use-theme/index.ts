import React from "react";
import { ThemeContext, ThemeContextProps } from "../../context/theme";

export const useTheme = () =>
  React.useContext<Partial<ThemeContextProps>>(ThemeContext);
