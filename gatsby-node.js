/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    /**
     * Create regular pages
     */
    const staticPagesQuery = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

    // Handle errors
    if (staticPagesQuery.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }

    staticPagesQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/page-template.tsx`),
            context: {}, // additional data can be passed via context
        })
    });

    /**
     * Create blog pages
     */
    const blogPostsQuery = await graphql(`
        query {
          allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `);
    blogPostsQuery.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.frontmatter.path}`,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.frontmatter.path,
            },
        })
    })
};

//Create slugs for posts
/*
exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        console.log(`\n`, fileNode.relativePath)
    }
};
 */