import React from "react";
import { Link } from "gatsby";
import { colors, ThemeModes, font } from "@saruni-ui/theme";

import { CodeBlock } from "../../components/code-block";
import { isExternal as isExternalURL } from "../../utils/url";

const sharedHeadingCss = {
  "& + *": { marginTop: 12 },
  "&:not(:first-child)": { marginTop: 32 },
  fontWeight: 500,
};

/*
 * Note: we split out `children` from props to avoid
 * linting issues, as described here:
 * https://github.com/gatsbyjs/gatsby/issues/20208#issuecomment-567380743
 */
export const components = ({ mode }: { mode: ThemeModes }) => ({
  a: (props) => {
    const { href, children, ...rest } = props;
    const isExternal = isExternalURL(props.href);
    if (isExternal) {
      return (
        <a
          css={{
            color: colors.interactive[mode],
            textDecoration: "none",
          }}
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
          css={{
            color: colors.interactive[mode],
            textDecoration: "none",
          }}
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
    <h1 css={{ ...sharedHeadingCss, fontSize: font.size.heading }} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      css={{ ...sharedHeadingCss, fontSize: font.size.subheading }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 css={{ ...sharedHeadingCss, fontSize: font.size.title }} {...props}>
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
  p: (props) => <p css={{ lineHeight: 1.5, paddingBottom: 16 }} {...props} />,
  pre: (props) => <pre css={{ marginBottom: 24 }} {...props} />,
  li: (props) => <li css={{ padding: "4px 0" }} {...props} />,
  ul: (props) => (
    <ul
      css={{
        marginLeft: 24,
      }}
      {...props}
    />
  ),
});
