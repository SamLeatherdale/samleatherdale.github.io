import React from "react";
import {Link} from "gatsby";
import Utils from "../classes/Utils";
import {MDXRenderer} from "gatsby-plugin-mdx";

export interface BlogPostData {
    id: string;
    excerpt: string;
    body: string;
    frontmatter: {
        path: string;
        title: string;
        date: string;
    }
}

interface BlogPostProps {
    id: string;
    node: BlogPostData
    isExcerpt: boolean;
}

export default class BlogPost extends React.Component<BlogPostProps, {}> {
    constructor(props: BlogPostProps) {
        super(props);
    }

    render() {
        const {node, isExcerpt, id} = this.props;
        return (
            <article className="blog-post" id={id}>
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

                <div className={`post-body ${this.props.isExcerpt ? "post-excerpt" : "post-markdown"}`}>
                    {(this.props.isExcerpt && false) && <p>{node.excerpt}</p>}
                    <MDXRenderer>{node.body}</MDXRenderer>
                </div>
            </article>
        );
    }
}