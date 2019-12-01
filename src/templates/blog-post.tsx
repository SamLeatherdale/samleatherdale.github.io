import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";
import SEO from "../components/seo";
import BlogPost, {BlogPostData} from "../components/BlogPost";

export default function BlogPostPage({data}) {
    const markdown: BlogPostData = data.mdx;
    return (
        <Layout className={`post post-${markdown.frontmatter.path}`}>
            <SEO title={markdown.frontmatter.title} />
            <BlogPost node={markdown} isExcerpt={false} />
        </Layout>
    );
}
export const pageQuery = graphql`
    query($slug: String!) {
        mdx(frontmatter: { path: { eq: $slug } }) {
            ...blogPostFields
        }
    }
`;