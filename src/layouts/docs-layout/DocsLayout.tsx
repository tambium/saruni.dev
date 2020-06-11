import React from "react";

import {
  ASIDE_PADDING_LEFT,
  ASIDE_WIDTH,
  CONTENT_WIDTH,
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
  SIDEBAR_MOBILE_HEIGHT,
} from "../../constants/layout";
import { Sidebar } from "../../components/sidebar";
import { TOC } from "../../components/toc";

interface IHeading {
  depth: number;
  value: string;
}

interface DocsLayoutProps {
  children: React.ReactNode;
  disableTableOfContents: boolean;
  headings: IHeading[];
}

export const DocsLayout: React.FC<DocsLayoutProps> = (props) => {
  const { children, disableTableOfContents, headings } = props;

  const isTOCDisabled =
    disableTableOfContents === true || !headings || headings.length === 0;

  return (
    <div
      css={(theme) =>
        mq({
          display: "grid",
          gridTemplateColumns: [
            "1fr",
            `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${
              CONTENT_WIDTH + SIDEBAR_WIDTH
            }px) / 2 + ${SIDEBAR_WIDTH}px)) 1fr`,
            `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${
              CONTENT_WIDTH + SIDEBAR_WIDTH
            }px) / 2 + ${SIDEBAR_WIDTH}px)) ${CONTENT_WIDTH}px 1fr`,
          ],
          height: "100%",
          backgroundColor: theme.colors.background,
        })
      }
    >
      <Sidebar />
      <div
        css={(theme) =>
          mq({
            display: "flex",
            flexGrow: 1,
            paddingTop: [16 + SIDEBAR_MOBILE_HEIGHT, 48],
            paddingLeft: [16, 64],
            paddingBottom: [16, 32],
            paddingRight: [16, 0],
            backgroundColor: theme.colors.background,
          })
        }
      >
        <div css={{ display: "flex", flex: 1, flexDirection: "column" }}>
          {children}
        </div>
        <div
          css={mq({
            display: ["none", "none", "block"],
            paddingLeft: ASIDE_PADDING_LEFT,
            width: ASIDE_WIDTH,
          })}
        >
          {!isTOCDisabled && <TOC headings={headings} />}
        </div>
      </div>
    </div>
  );
};
