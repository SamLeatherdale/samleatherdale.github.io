import React from 'react';
import styled, { css } from 'styled-components';
import media from '../styles/media';
import { linkColor } from '../styles/mixins';
import { StyleProps } from '../styles/theme';
import AutoLink from './shared/AutoLink';
import { UList } from './shared/List';
import ThemeSwitch from './ThemeSwitch';

export interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => {
  const { title, subtitle } = props;

  return (
    <header>
      <ThemeSwitch />
      <TitleBox>
        <AutoLink href="/" inherit>
          <Title>{title}</Title>
        </AutoLink>
        <Subtitle>{subtitle}</Subtitle>
      </TitleBox>

      <Nav>
        <NavList>
          <NavLink title="Home" path="/" />
          <NavLink title="About" path="/about" />
          <NavLink title="Blog" path="/blog"/>
        </NavList>
      </Nav>
    </header>
  );
};



interface NavLinkProps {
    title: string;
    path: string;
}

const NavLink = ({ title, path }: NavLinkProps) => (
  <li>
    <StyledLink
      href={path}
      current={isCurrentPage(path)}
    >{title}
    </StyledLink>
  </li>
);

function isCurrentPage(path: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.location.pathname.toLowerCase() === path.toLowerCase();
}

export default Header;

// Title
const TitleBox = styled.div`
  text-align: center;
  padding: 60px 0 20px 0;

  @media (${media.max.mobileL}) {
    // padding-top: 20px;
  }
`;
const Title = styled.h1`
  color: ${(p: StyleProps) => p.theme.colors.titlePrimary};
  font-size: 3em;
  font-weight: normal;
  margin-bottom: 25px;
`;
const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: lighter;
`;

// Nav
const Nav = styled.nav`
  border: 1px solid ${(p: StyleProps) => p.theme.colors.borderPrimary};
  border-right-width: 0;
  border-left-width: 0;
`;
const NavList = styled(UList)`
  display: flex;
  justify-content: center;
`;

// Nav item
const highlightLink = css`
  background-color: ${(p: StyleProps) => p.theme.colors.primary};
  ${linkColor('white')};
`;
type LinkProps = StyleProps & {
  current?: boolean;
}
const StyledLink = styled(AutoLink)`
  display: block;
  padding: 20px 14px;
  transition: ${(p: LinkProps) => p.theme.transitions.fast};
  text-decoration: none;
  ${(p: LinkProps) => linkColor(p.theme.colors.titlePrimary)};
  ${(p: LinkProps) => p.current && highlightLink};
  
  &:hover {
    ${highlightLink}
  }
`;