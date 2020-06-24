/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import '../scss/style.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeContext, ThemeContextValue, themeLight } from '../styles/theme';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
    className: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const [theme, updateTheme] = useState(themeLight);

  const themeValue: ThemeContextValue = { updateTheme };

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
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={theme}>
        <div className={className} id="wrap">
          <Header title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}/>
          <main>
            <div id="content">
              {children}
            </div>
          </main>
          <Footer/>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
