import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticQuery, graphql} from "gatsby";
import Project, {ProjectProps} from "../components/project";

const Index = () => {

    return (
    <Layout slug="home">
        <SEO title="Projects"/>

        <h2>GitHub Projects</h2>
        <p>The following are projects I've build in my spare time, mainly to enhance my knowledge of various aspects of web development. The source code is freely available to view and modify on GitHub. I generally use the GNU GPLv3 license for my work, to ensure all modifications stay open and free.</p>

        <StaticQuery
            query={graphql`
                query ProjectsQuery {
                    allProjectsJson {
                        edges {
                            node {
                                title
                                repo
                                liveUrl
                                icon
                                description
                                isDesktopOnly
                                status
                                libraries
                            }                        
                        }
                    }
                }
            `}
            render={data => {
                return data.allProjectsJson.edges.map((edge: any) => {
                    const node: ProjectProps = edge.node;
                    return <Project key={node.repo} {...node} />
                });
            }}
        />
    </Layout>
)};

export default Index;
