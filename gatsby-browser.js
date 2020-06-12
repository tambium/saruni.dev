import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/react";

import { ThemeContext, ThemeProvider } from "./src/context/theme";
import { darkTheme, lightTheme } from "./src/theme/themes";
import GlobalStyle from "./src/theme/global";
import { CodeBlock } from "./src/components/code-block";

const components = {
  code: CodeBlock,
  inlineCode: (props) => <code {...props} />,
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}

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
