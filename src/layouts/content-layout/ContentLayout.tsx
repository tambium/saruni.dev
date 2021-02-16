import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useGlobalTheme } from "@saruni-ui/theme";
import { graphql } from "gatsby";

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
  // disableTableOfContents: boolean;
  // isTOCDisabled?: boolean;
  // location: Location;
  // section?: string;
  // tableOfContents: {
  //   items: ITOCItem[];
  // };
  // tableOfContentsDepth: number;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  // data: { mdx },
  pageContext: { next, prev, section },
  location,
  // disableTableOfContents,
  // location,
  // tableOfContents,
  // tableOfContentsDepth,
  // section,
}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  // const {
  //   title,
  //   description,
  //   image,
  //   disableTableOfContents,
  //   tableOfContentsDepth,
  // } = mdx.frontmatter;
  // const { headings, body, tableOfContents } = mdx;

  // const isTOCDisabled = true;

  // console.log(tableOfContents);

  // const isTOCDisabled =
  //   disableTableOfContents === true ||
  //   !tableOfContents.hasOwnProperty("items") ||
  //   tableOfContents?.items.length === 0;

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
            {/* {!isTOCDisabled && (
              <TOC
                location={location}
                tableOfContents={tableOfContents}
                tableOfContentsDepth={tableOfContentsDepth}
              />
            )} */}
          </AsideContainer>
        </ContentContainer>
      </LayoutContainer>
    </React.Fragment>
  );
};

// export const query = graphql`
//   query ContentLayoutQuery($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       frontmatter {
//         disableTableOfContents
//         tableOfContentsDepth
//       }
//       tableOfContents
//     }
//   }
// `;
