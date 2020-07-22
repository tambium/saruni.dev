import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

import { ContentLayout } from "../../layouts/content-layout/ContentLayout";
import { SEO } from "../../components/seo";

interface ContentTemplateProps {}

const ContentTemplate: React.FC<ContentTemplateProps> = ({
  data: { mdx },
  location,
  pageContext,
}) => {
  const { prev, next, githubEditUrl } = pageContext;

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
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        slug={slug}
        imageUrl={image}
      />
      <ContentLayout
        disableTableOfContents={disableTableOfContents}
        section={section}
        tableOfContents={tableOfContents}
        tableOfContentsDepth={tableOfContentsDepth}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </ContentLayout>
    </React.Fragment>
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
