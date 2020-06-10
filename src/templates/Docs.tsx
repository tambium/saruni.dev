import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { DocsLayout } from '../layouts/docs-layout';
import { Link } from '../components/link';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';

const forcedNavOrder = config.sidebar.forcedNavOrder;

interface DocsProps {}

const Docs: React.FC<DocsProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  const {
    allMdx,
    mdx,
    site: {
      siteMetadata: { docsLocation, title },
    },
  } = data;

  const gitHub = require('../components/images/github.svg');

  const navItems = allMdx.edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] };
        }

        let prefix = cur.split('/')[1];

        if (config.gatsby && config.gatsby.trailingSlash) {
          prefix = prefix + '/';
        }

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
        } else {
          return { ...acc, items: [...acc.items, cur] };
        }
      },
      { items: [] }
    );

  const nav = forcedNavOrder
    .reduce((acc, cur) => {
      return acc.concat(navItems[cur]);
    }, [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

        return { title: node.fields.title, url: node.fields.slug };
      }
    });

  // meta tags
  const metaTitle = mdx.frontmatter.metaTitle;

  const metaDescription = mdx.frontmatter.metaDescription;

  let canonicalUrl = config.gatsby.siteUrl;

  canonicalUrl =
    config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
  canonicalUrl = canonicalUrl + mdx.fields.slug;

  return (
    <DocsLayout>
      <React.Fragment>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div>
          <h1
            css={theme => ({
              color: theme.colors.heading,
              fontSize: 32,
              lineHeight: 1.5,
              fontWeight: 500,
            })}
          >
            {mdx.fields.title}
          </h1>
          <div>
            {docsLocation && (
              <Link
                css={{
                  height: '30px',
                  minHeight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                to={`${docsLocation}/${mdx.parent.relativePath}`}
              >
                <img
                  css={{
                    width: '15px',
                    display: 'inline-block',
                    marginRight: '5px',
                  }}
                  src={gitHub}
                  alt={'Github logo'}
                />{' '}
                Edit on GitHub
              </Link>
            )}
          </div>
        </div>
        <div css={theme => ({ color: theme.colors.text })}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <div>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </React.Fragment>
    </DocsLayout>
  );
};

export default Docs;

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;