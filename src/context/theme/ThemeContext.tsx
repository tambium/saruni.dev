import React from "react";
import { Themes } from "./.";
import { getSystemTheme, onSystemThemeChange } from "./utils";

export const ThemeContext = React.createContext(null);

interface ThemeProviderProps {
  children: React.ReactChild;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = React.useState(false);
  const [theme, setTheme] = React.useState<Themes>(null);

  const updateTheme = React.useCallback(
    (newTheme) => {
      if (typeof newTheme === "function") {
        setTheme((currentTheme) => {
          return newTheme(currentTheme);
        });
      } else {
        setTheme(newTheme);
      }
    },
    [setTheme]
  );

  const isLight = theme === "light";

  const switchTheme = () => updateTheme(isLight ? "dark" : "light");

  React.useEffect(() => {
    if (!initialized) {
      setTheme(getSystemTheme());
      setInitialized(true);
    }
    return onSystemThemeChange(updateTheme);
  }, [initialized, setInitialized, setTheme, updateTheme]);

  if (!initialized) return null;

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        theme,
        setTheme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
