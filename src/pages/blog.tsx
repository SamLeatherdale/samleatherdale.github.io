import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { StaticQuery, graphql, Link } from 'gatsby';
import Utils from '../classes/Utils';
import BlogPost, { BlogPostData } from '../components/BlogPost';

const BlogPage = ({ data }) => {
  const postCount = data.allMdx.totalCount;
  const posts: BlogPostData[] = data.allMdx.edges.map(edge => edge.node);
  const months: string[] = [];

  const postsReact: any[] = [];
  let last;

  for (const post of posts) {
    const date = post.frontmatter.date;
    let id;
    if (date !== last) {
      last = date;
      id = `post-month-${Utils.makeStrKey(date)}`;
      months.push(date);
    }
    postsReact.push(<BlogPost node={post} key={post.id} id={id} isExcerpt={true} />);
  }

  return (
    <Layout className="page page-blog">
      <SEO title="Blog"/>


      <div className="blog-grid">
        <div className="blog-posts">
          <h4>{`${postCount} ${postCount == 1 ? 'post' : 'posts'}`}</h4>
          {postsReact}
        </div>

        <nav className="blog-nav">
          <h4>Archive</h4>
          <ol>
            {months.map(month => (
              <li key={month}>
                <a href={`#post-month-${Utils.makeStrKey(month)}`}>
                  <i className={'fas fa-archive'} />{month}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {fileAbsolutePath: { regex: "/posts/"}}) {
      totalCount
      edges {
          node {
              ...blogPostFields
          }
      }
    }
  }
`;

export default BlogPage;
