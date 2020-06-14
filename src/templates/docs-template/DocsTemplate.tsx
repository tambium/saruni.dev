import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DocsLayout } from "../../layouts/docs-layout/DocsLayout";

export default function Docs({ data: { mdx }, location, pageContext }) {
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

  return (
    <React.Fragment>
      {/* <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      > */}
      <DocsLayout
        disableTableOfContents={disableTableOfContents}
        location={location}
        prevNext={{ prev, next }}
        tableOfContents={tableOfContents}
        tableOfContentsDepth={tableOfContentsDepth}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </DocsLayout>
      {/* <EditGithub githubEditUrl={githubEditUrl} /> */}
      {/* <PostNav prev={prev} next={next} /> */}
      {/* </Layout> */}
    </React.Fragment>
  );
}

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
