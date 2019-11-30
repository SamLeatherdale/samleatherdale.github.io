import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import BlogPost, {BlogPostData} from "../components/BlogPost";
import {blogPostFields} from "../data/fragments";

export default function BlogPostPage({data}) {
    const markdown: BlogPostData = data.markdownRemark;
    return (
        <Layout slug="blog-post">
            <SEO title={markdown.frontmatter.title} />
            <BlogPost node={markdown} isExcerpt={false} />
        </Layout>
    );
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { path: { eq: $slug } }) {
            ...blogPostFields
        }
    }
`;