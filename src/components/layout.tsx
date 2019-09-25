/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "../scss/style.scss";
import Footer from "./footer";

interface LayoutProps {
    children: any;
    slug: string;
}

const Layout = ({children, slug}: LayoutProps) => {
    const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `);

    return (
        <div className={`page-${slug}`} id="wrap">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
                  integrity="sha256-YLGeXaapI0/5IgZopewRJcFXomhRMlYYjugPLSyNjTY=" crossOrigin="anonymous"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                  integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700" />


            <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}/>
            <main>
                <div id="content">
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
};

export default Layout
