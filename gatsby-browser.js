import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/react";

import { ThemeContext, ThemeProvider } from "./src/context/theme";
import { darkTheme, GlobalStyle, lightTheme } from "./src/theme";
import { CodeBlock } from "./src/components/code-block";

const components = {
  code: CodeBlock,
  h1: (props) => <h1 {...props} />,
  inlineCode: (props) => <code {...props} />,
  p: (props) => <p css={{ paddingBottom: 12 }} {...props} />,
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
