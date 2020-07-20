import React from "react";
import {
  DEFAULT_THEME_MODE,
  GlobalThemeProvider,
  ThemeModes,
} from "@saruni-ui/theme";

export const ThemeContext = React.createContext(null);

interface ThemeProviderProps {
  children: React.ReactChild;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = React.useState<ThemeModes>(DEFAULT_THEME_MODE);

  const switchMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const isLight = mode === "light";

  return (
    <GlobalThemeProvider theme={() => ({ mode })}>
      <ThemeContext.Provider
        value={{
          isLight,
          mode,
          switchMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </GlobalThemeProvider>
  );
};
