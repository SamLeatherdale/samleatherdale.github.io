/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import '../scss/style.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import media from '../styles/media';
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
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={theme}>
        <Wrap className={className}>
          <Header title={title} subtitle={subtitle}/>
          <Main>
            <Content>
              {children}
            </Content>
          </Main>
          <Footer/>
        </Wrap>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  
  > * {
    flex-shrink: 0;
  }
`;
const Main = styled.main`
  flex: 1 1 auto;
`;
const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px;

  @media (${media.max.tablet}) {
    padding: 20px;
  }
`;