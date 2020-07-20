import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

import { ContentLayout } from "../../layouts/content-layout/ContentLayout";

interface ContentTemplateProps {}

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  data: { mdx },
  location,
  pageContext,
}) => {
  const {
    title,
    description,
    image,
    disableTableOfContents,
    tableOfContentsDepth,
  } = mdx.frontmatter;
  const { headings, body, tableOfContents } = mdx;
  const { slug } = mdx.fields;
  const { section } = pageContext;

  return (
    <ContentLayout
      section={section}
      tableOfContents={tableOfContents}
      tableOfContentsDepth={tableOfContentsDepth}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </ContentLayout>
  );
};

export default ContentTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        description
        image
        disableTableOfContents
        tableOfContentsDepth
      }
      body
      headings {
        depth
        value
      }
      tableOfContents
    }
  }
`;
