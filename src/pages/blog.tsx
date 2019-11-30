import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticQuery, graphql, Link} from "gatsby";
import Utils from "../classes/Utils";
import BlogPost from "../components/BlogPost";
import {blogPostFields} from "../data/fragments"

const BlogPage = ({ data }) => {
    console.log(data);
    const postCount = data.allMarkdownRemark.totalCount;
    return (
        <Layout slug="blog">
            <SEO title="Blog"/>

            <div>
                <h4>{`${postCount} ${postCount == 1 ? "post" : "posts"}`}</h4>

                <div className="blog-posts">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <BlogPost node={node} key={node.id} isExcerpt={true} />
                    ))}
                </div>
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
              ...blogPostFields
          }
      }
    }
  }
`;

export default BlogPage
