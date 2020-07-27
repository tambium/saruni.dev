import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useGlobalTheme } from "@saruni-ui/theme";

import {
  AsideContainer,
  ContentContainer,
  ContentWrapper,
  LayoutContainer,
} from "./styled";
import { Topbar } from "../../components/topbar";
import { Sidebar } from "../../components/sidebar";
import { CONTENT_WIDTH, SIDEBAR_WIDTH } from "../../constants/layout";
import { TOC } from "../../components/toc";
import { ITOCItem } from "../../types";
import { components } from "../../components/mdx";

interface ContentLayoutProps {
  children: React.ReactNode;
  disableTableOfContents: boolean;
  isTOCDisabled?: boolean;
  location: Location;
  section?: string;
  tableOfContents: {
    items: ITOCItem[];
  };
  tableOfContentsDepth: number;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  disableTableOfContents,
  location,
  tableOfContents,
  tableOfContentsDepth,
  section,
}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  const isTOCDisabled =
    disableTableOfContents === true ||
    !tableOfContents.hasOwnProperty("items") ||
    tableOfContents?.items.length === 0;

  return (
    <React.Fragment>
      <Topbar
        isContentLayout
        location={location}
        maxWidth={CONTENT_WIDTH + SIDEBAR_WIDTH}
      />
      <LayoutContainer mode={mode}>
        <Sidebar location={location} section={section} />
        <ContentContainer mode={mode}>
          <MDXProvider components={components({ mode })}>
            <ContentWrapper>{children}</ContentWrapper>
          </MDXProvider>
          <AsideContainer>
            {!isTOCDisabled && (
              <TOC
                location={location}
                tableOfContents={tableOfContents}
                tableOfContentsDepth={tableOfContentsDepth}
              />
            )}
          </AsideContainer>
        </ContentContainer>
      </LayoutContainer>
    </React.Fragment>
  );
};
