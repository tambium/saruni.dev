import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';

import { lightTheme, darkTheme } from './.';
import Header from './../Header';

interface ThemeProviderProps {
  children: React.ReactChild;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkThemeActive, setDarkThemeActive] = React.useState(false);

  React.useEffect(() => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));
    setDarkThemeActive(isDarkThemeActive);
  }, []);

  const toggleActiveTheme = () => {
    setDarkThemeActive(prevState => !prevState);
    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!isDarkThemeActive));
  };

  const currentActiveTheme = isDarkThemeActive ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body,
          blockquote,
          p,
          div,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          ul,
          ol,
          dl,
          img,
          pre,
          form,
          fieldset {
            margin: 0;
            padding: 0;
          }
          img,
          fieldset {
            border: 0;
          }
          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
          }
          html,
          body {
            height: 100%;
            width: 100%;
          }
          #__next {
            height: 100%;
          }
          body {
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
              sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              'Noto Color Emoji';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            -ms-overflow-style: -ms-autohiding-scrollbar;
            text-decoration-skip-ink: auto;
          }
        `}
      />
      <EmotionThemeProvider theme={currentActiveTheme}>
        <Header isDarkThemeActive={isDarkThemeActive} toggleActiveTheme={toggleActiveTheme} />
        {children}
      </EmotionThemeProvider>
    </React.Fragment>
  );
};
