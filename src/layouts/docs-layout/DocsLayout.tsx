import React from "react";

import {
  ASIDE_PADDING_LEFT,
  ASIDE_WIDTH,
  CONTENT_WIDTH,
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
  TOPBAR_HEIGHT,
} from "../../constants/layout";
import { Sidebar } from "../../components/sidebar";
import { TOC } from "../../components/toc";
import { ITOCItem, IPrevNext } from "../../types";
import { Topbar } from "../../components/topbar";
import { DocsLayoutFooter } from "./DocsLayoutFooter";

interface DocsLayoutProps {
  children: React.ReactNode;
  disableTableOfContents: boolean;
  location: Location;
  prevNext: IPrevNext;
  tableOfContents: {
    items: ITOCItem[];
  };
  tableOfContentsDepth: number;
}

export const DocsLayout: React.FC<DocsLayoutProps> = (props) => {
  const {
    children,
    disableTableOfContents,
    prevNext,
    tableOfContents,
    tableOfContentsDepth,
  } = props;

  const isTOCDisabled =
    disableTableOfContents === true ||
    !tableOfContents.hasOwnProperty("items") ||
    tableOfContents?.items.length === 0;

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
      <Topbar location={location} />
      <Sidebar location={location} />
      <div
        css={(theme) =>
          mq({
            backgroundColor: theme.colors.background,
            display: "flex",
            paddingTop: [16 + TOPBAR_HEIGHT, 48],
            paddingLeft: [16, 32, 64],
            paddingBottom: [16, 32],
            paddingRight: [16, 32, 0],
            minWidth: 0,
          })
        }
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            width: "100%",
          }}
        >
          {children}
          <DocsLayoutFooter prevNext={prevNext} />
        </div>
        <div
          css={mq({
            display: ["none", "none", "flex"],
            flexShrink: 0,
            paddingLeft: ASIDE_PADDING_LEFT,
            width: ASIDE_WIDTH,
          })}
        >
          {!isTOCDisabled && (
            <TOC
              location={location}
              tableOfContents={tableOfContents}
              tableOfContentsDepth={tableOfContentsDepth}
            />
          )}
        </div>
      </div>
    </div>
  );
};
