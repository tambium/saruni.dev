import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

import { SEO } from "../../components/seo";

const ContentTemplate: React.FC = ({ data: { mdx } }) => {
  const { title, description, image } = mdx.frontmatter;
  const { body } = mdx;
  const { slug } = mdx.fields;

  return (
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        slug={slug}
        imageUrl={image}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </React.Fragment>
  );
};

export default ContentTemplate;

export const query = graphql`
  query ContentTemplateQuery($slug: String!) {
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
      }
      body
    }
  }
`;
