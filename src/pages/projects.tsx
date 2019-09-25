import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticQuery, graphql} from "gatsby";
import Project, {ProjectProps} from "../components/project";

const Projects = () => {

    return (
    <Layout>
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
                                isMobile
                            }                        
                        }
                    }
                }
            `}
            render={data => {
                return data.allProjectsJson.edges.map((edge) => <Project {...edge.node} />);
            }}
        />

        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)};

export default Projects
