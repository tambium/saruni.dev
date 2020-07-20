const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const { normalizeBasePath } = require(`./utils/url`);
const withDefault = require(`./utils/with-default`);
const { getPrevAndNext } = require(`./utils/get-prev-and-next`);

exports.createPages = (
  { graphql, actions: { createPage }, reporter },
  themeOptions
) => {
  reporter.success(`onCreateDocs`);

  const { baseDir, docsPath, githubUrl } = withDefault(themeOptions);

  const contentTemplate = require.resolve(
    `./src/templates/content-template/ContentTemplate.tsx`
  );

  return graphql(
    `
      {
        files: allFile(filter: { extension: { in: ["md", "mdx"] } }) {
          edges {
            node {
              id
              relativePath
              childMdx {
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      reporter.panic(
        `docs: there was an error loading the docs folder!`,
        result.errors
      );
      return;
    }

    // Generate content pages
    const content = result.data.files.edges;

    content.forEach((page) => {
      const {
        childMdx: {
          fields: { slug },
        },
        relativePath,
      } = page.node;

      if (!slug) return;

      // docs, guides, etc.
      const section = slug.split("/")[1];

      const prevAndNext = getPrevAndNext(slug);

      let githubEditUrl;

      if (githubUrl) {
        githubEditUrl = path.join(
          githubUrl,
          "tree",
          path.join("master", baseDir, docsPath),
          relativePath
        );
      }

      createPage({
        path: `${slug}`,
        component: contentTemplate,
        context: {
          section,
          slug,
          githubEditUrl,
          ...prevAndNext,
        },
      });
    });

    reporter.success(`docs pages created`);
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MdxFrontmatter @dontInfer {
      title: String!
      description: String
      image: String
      disableTableOfContents: Boolean
      tableOfContentsDepth: Int
    }
  `);
};

exports.onCreateNode = (
  { node, actions: { createNodeField }, getNode },
  themeOptions
) => {
  if (node.internal.type !== `Mdx`) {
    return;
  }

  const { basePath } = withDefault(themeOptions);

  let value = createFilePath({ node, getNode });
  if (value === "index") value = "";

  createNodeField({
    name: `slug`,
    node,
    value: normalizeBasePath(basePath, value),
  });

  createNodeField({
    name: `id`,
    node,
    value: node.id,
  });
};
