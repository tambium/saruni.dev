import React from "react";
import { Reset } from "@saruni-ui/theme";
import { Global, css } from "@emotion/core";

import { ThemeProvider } from "./src/context/theme";

const customTheme = (baseTokens, props) => {
  return {
    ...baseTokens,
    fontFamily:
      '"Inter", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
    fontSize: 16,
  };
};

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap");
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
          }
          code {
            font-size: 14px;
            font-family: "IBM Plex Mono", monospace;
          }
        `}
      />
      <Reset theme={customTheme}>{element}</Reset>
    </ThemeProvider>
  );
}
