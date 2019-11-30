import React from "react";
import {Link} from "gatsby";
import Utils from "../classes/Utils";

export interface BlogPostData {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
        path: string;
        title: string;
        date: string;
    }
}

interface BlogPostProps {
    node: BlogPostData
    isExcerpt: boolean;
}

export default class BlogPost extends React.Component<BlogPostProps, {}> {
    constructor(props: BlogPostProps) {
        super(props);
    }

    render() {
        const {node, isExcerpt} = this.props;
        return (
            <article className="blog-post">
                {isExcerpt && (
                <Link to={Utils.getBlogLink(node.frontmatter.path)}>
                    <h3>{node.frontmatter.title}</h3>
                </Link>
                )}
                {!isExcerpt && <h1>{node.frontmatter.title}</h1>}

                <div className="post-date">
                    <i className="far fa-calendar"></i>
                    <span>{node.frontmatter.date}</span>
                </div>

                {(this.props.isExcerpt && false) && <p>{node.excerpt}</p>}
                <div className="markdown-content"
                     dangerouslySetInnerHTML={{ __html: node.html }}
                />
            </article>
        );
    }
}