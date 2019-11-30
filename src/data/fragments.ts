import {graphql} from "gatsby";

export const blogPostFields = graphql`
    fragment blogPostFields on MarkdownRemark {
        id
        frontmatter {
            title
            date(formatString: "MMMM YYYY")
            path
        }
        excerpt
        html
    }
`;