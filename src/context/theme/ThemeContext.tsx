import React from "react";
import {
  DEFAULT_THEME_MODE,
  GlobalThemeProvider,
  ThemeModes,
} from "@saruni-ui/theme";
import { getSystemMode, onSystemModeChange } from "./utils";

export type ThemeContextProps = {
  isLight: boolean;
  mode: ThemeModes;
  switchMode: () => void;
};

export const ThemeContext = React.createContext({});

interface ThemeProviderProps {
  children: React.ReactChild;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = React.useState(false);
  const [mode, setMode] = React.useState<ThemeModes>(DEFAULT_THEME_MODE);

  const switchMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const isLight = mode === "light";

  React.useEffect(() => {
    if (!initialized) {
      setMode(getSystemMode());
      setInitialized(true);
    }
    return onSystemModeChange(setMode);
  }, [initialized, setInitialized, setMode]);

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
