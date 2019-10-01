/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

//1import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "../scss/style.scss";
import Header from "./header"
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
