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
        <p>The following projects are hosted right here on GitHub Pages.</p>

        <StaticQuery
            query={graphql`
                query ProjectsQuery {
                    allProjectsJson {
                        edges {
                            node {
                                title
                                location
                                icon
                                description
                                isDesktopOnly
                            }                        
                        }
                    }
                }
            `}
            render={data => {
                return data.allProjectsJson.edges.map((edge: any) => {
                    const node: ProjectProps = edge.node;
                    return <Project key={node.location} {...node} />
                });
            }}
        />
    </Layout>
)};

export default Index;
