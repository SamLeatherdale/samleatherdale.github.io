import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticQuery, graphql, Link} from "gatsby";
import Utils from "../classes/Utils";

const BlogPage = ({ data }) => {
    console.log(data);
    const postCount = data.allMarkdownRemark.totalCount;
    return (
        <Layout slug="blog">
            <SEO title="Blog"/>

            <div>
                <h4>{`${postCount} ${postCount == 1 ? "post" : "posts"}`}</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <article key={node.id}>
                        <Link to={Utils.getBlogLink(node.frontmatter.path)} >
                            <h3>{node.frontmatter.title}{" "}
                                <span> — {node.frontmatter.date}</span>
                            </h3>
                        </Link>
                        <p>{node.excerpt}</p>
                    </article>
                ))}
            </div>
        </Layout>
    )
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: { regex: "/posts/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage
