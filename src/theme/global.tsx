import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");

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
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          height: 100%;
          width: 100%;
        }
        body {
          font-family: ${theme.fonts.family.ui};
          font-size: ${theme.fonts.size.body}px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          text-decoration-skip-ink: auto;
        }

        .gatsby-highlight {
          position: relative;
          .token {
            font-style: normal !important;
          }
        }
        code,
        pre[class*="language-"] code {
          font-family: ${theme.fonts.family.mono};
          font-size: ${theme.fonts.size.micro}px;
        }
      `}
    />
  );
};
