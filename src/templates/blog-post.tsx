import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";

export default function BlogPost({data}) {
    const {markdown} = data;
    const {frontmatter, html} = markdown;
    return (
        <Layout slug="blog-post">
            <SEO title={frontmatter.title} />
            <div id="markdown-content"
                 dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    );
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;