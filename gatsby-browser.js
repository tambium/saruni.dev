import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import { ThemeContext, ThemeProvider } from "./src/context/theme";
import { darkTheme, lightTheme } from "./src/theme/themes";
import GlobalStyle from "./src/theme/global";

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <EmotionThemeProvider
              theme={theme === "light" ? lightTheme : darkTheme}
            >
              <React.Fragment>
                <GlobalStyle />
                {element}
              </React.Fragment>
            </EmotionThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
