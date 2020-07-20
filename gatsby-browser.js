import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Reset } from "@saruni-ui/theme";
import { Global, css } from "@emotion/core";

import { ThemeProvider } from "./src/context/theme";
import { CodeBlock } from "./src/components/code-block";
import { isExternal as isExternalURL } from "./src/utils/url";

const sharedHeadingCss = {
  "& + *": { marginTop: 12 },
  "&:not(:first-of-type)": { marginTop: 12 },
};

/*
 * Note: we split out `children` from props to avoid
 * linting issues, as described here:
 * https://github.com/gatsbyjs/gatsby/issues/20208#issuecomment-567380743
 */
const components = {
  a: (props) => {
    const { href, children, ...rest } = props;
    const isExternal = isExternalURL(props.href);
    if (isExternal) {
      return (
        <a
          css={(theme) => ({
            color: "pink",
            textDecoration: "none",
          })}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          css={(theme) => ({
            color: "pink",
            textDecoration: "none",
          })}
          to={href}
          {...rest}
        >
          {children}
        </Link>
      );
    }
  },
  code: CodeBlock,
  h1: ({ children, ...props }) => (
    <h1 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 css={{ ...sharedHeadingCss }} {...props}>
      {children}
    </h6>
  ),
  inlineCode: (props) => <code {...props} />,
  p: (props) => <p css={{ paddingBottom: 12 }} {...props} />,
  pre: (props) => <pre css={{ marginBottom: 24 }} {...props} />,
  li: (props) => <li css={{}} {...props} />,
  ul: (props) => (
    <ul
      css={{
        marginLeft: 24,
      }}
      {...props}
    />
  ),
};

export function wrapPageElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
          html,
          body {
            font-family: "Inter", sans-serif !important;
          }
        `}
      />
      <Reset toke>{element}</Reset>
    </ThemeProvider>
  );
}
