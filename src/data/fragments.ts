import {graphql} from "gatsby";

export const blogPostFields = graphql`
    fragment blogPostFields on Mdx {
        id
        frontmatter {
            title
            date(formatString: "MMMM YYYY")
            path
        }
        excerpt
        body
    }
`;