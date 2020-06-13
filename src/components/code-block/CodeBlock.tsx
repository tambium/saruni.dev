import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor } from "react-live";
import { mdx } from "@mdx-js/react";

import { codeTheme } from "../../theme";

import {
  CopyCode,
  LineNumber,
  Pre,
  PreHeader,
  LiveWrapper,
  LivePreview,
  LiveError,
  StyledEditor,
} from "./styled";
import { CodeCopier } from "./.";

interface CodeBlockProps {
  children: string;
  className: string;
  isLive?: boolean;
  title?: string;
  shouldIncludeLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  isLive,
  title,
  shouldIncludeLineNumbers,
}) => {
  const codeString = children.trim();
  const language = className.replace(/language-/, "") as Language;

  if (isLive) {
    return (
      <LiveProvider
        code={codeString}
        noInline
        theme={codeTheme}
        transformCode={(code) => `/** @jsx mdx */${code}`}
        scope={{ mdx }}
      >
        <LiveWrapper>
          <StyledEditor>
            <LiveEditor />
          </StyledEditor>
          <LivePreview />
        </LiveWrapper>

        <LiveError />
      </LiveProvider>
    );
  }

  return (
    <React.Fragment>
      <PreHeader>
        <span>{title || language}</span>
        <CodeCopier codeString={codeString} />
      </PreHeader>
      <div className="gatsby-highlight">
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={codeTheme}
        >
          {({
            className: blockClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => {
            return (
              <Pre className={blockClassName} style={style}>
                <code>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {shouldIncludeLineNumbers && (
                        <LineNumber>{i + 1}</LineNumber>
                      )}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </code>
              </Pre>
            );
          }}
        </Highlight>
      </div>
    </React.Fragment>
  );
};
