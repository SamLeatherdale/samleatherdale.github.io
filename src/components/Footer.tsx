import { Link } from 'gatsby';
import React from 'react';
import { RiGatsbyLine } from 'react-icons/all';
import styled from 'styled-components';

import socials from '../data/socials';
import media from '../styles/media';
import { linkColor, spaceX } from '../styles/mixins';
import { StyleProps } from '../styles/theme';
import AutoLink from './shared/AutoLink';
import { UList } from './shared/List';

const Footer = () => {
  return (
    <Root>
      <div>Sam Leatherdale</div>
      <SocialList>
        {
          socials.map(social => (
            <li key={social.title}>
              <AutoLink href={social.link} newTab>
                <SocialIcon src={social.icon} alt={social.title} />
              </AutoLink>
            </li>
          ))
        }
      </SocialList>
      <GatsbyLink href="https://gatsbyjs.org" newTab>
        Created with <RiGatsbyLine />
      </GatsbyLink>
    </Root>
  );};

export default Footer;

const Root = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  
  @media (${media.min.tablet}) {
    grid-gap: 24px;
  }
  
  @media (${media.max.tablet}) {
    flex-direction: column;
  }
`;
const SocialList = styled(UList)`
  display: flex;
  ${spaceX('16px')};
`;
const SocialIcon = styled.img`
  width: 48px;
  height: 48px;
`;
const GatsbyLink = styled(AutoLink)`
  ${(p: StyleProps) => linkColor(p.theme.colors.gatsby)};
`;
