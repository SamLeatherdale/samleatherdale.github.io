import React from 'react';
import { FaCode, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/all';
import styled from 'styled-components';
import media, { createMinMaxWidth } from '../styles/media';
import { spaceX, spaceY } from '../styles/mixins';
import { StyleProps } from '../styles/theme';
import ProjectLibrary, { LibraryEnum } from './ProjectLibrary';
import AutoLink from './shared/AutoLink';
import Badge from './shared/Badge';
import { IconButton } from './shared/Button';
import { UList } from './shared/List';

export enum ProjectStatus {
    ALPHA = 'alpha',
    BETA = 'beta'
}

export interface ProjectProps {
    repo?: string;
    liveUrl?: string;
    title: string;
    description: string;
    icon?: string;
    isDesktopOnly: boolean;
    status?: ProjectStatus;
    libraries?: LibraryEnum[];
}

const Project = (props: ProjectProps) => {
  const { repo, liveUrl, title, description, icon, isDesktopOnly, status, libraries } = props;
  const prodUrl = typeof liveUrl === 'string' ? liveUrl : `https://samleatherdale.github.io/${repo}`;
  const sourceUrl = repo ? `https://github.com/SamLeatherdale/${repo}` : '';
  const iconUrl = icon || '/icons/icon-256x256.png';
  const libraryIcons = (libraries ? libraries : []).map(lib => <ProjectLibrary key={lib} library={lib} />);


  return (
    <Grid>
      <Header>
        <IconLink href={prodUrl} inherit newTab>
          <ProjectIcon src={iconUrl} />
        </IconLink>
        {!!libraryIcons.length && <Libraries>{libraryIcons}</Libraries>}
      </Header>
      <Main>
        <AutoLink href={prodUrl} inherit>
          <Title>
            <span>{title}</span>
            {!isDesktopOnly &&
              <MobileIcon
                title="Project is optimized for mobile devices"
              />}
            {status &&
              <Badge
                primary={status === ProjectStatus.BETA}
                danger={status === ProjectStatus.ALPHA}
                title={`This project is currently in ${status}`}
              >In {status}</Badge>
            }
          </Title>
          <p>{description}</p>
        </AutoLink>
      </Main>
      <Nav>
        {prodUrl &&
          <IconButton href={prodUrl} newTab fullWidth>
            <FaExternalLinkAlt /><span>View project</span>
          </IconButton>
        }
        {sourceUrl &&
          <IconButton href={sourceUrl} newTab fullWidth outline>
            <FaCode /><span>View source</span>
          </IconButton>
        }
      </Nav>
    </Grid>
  );
};
export default Project;

const collapse = createMinMaxWidth(media.sizes.tablet);

const Grid = styled.article`
  display: grid;
  padding: 20px 0;
  grid-template-areas: "head main nav";
  grid-template-columns: max-content 1fr max-content;
  width: 100%;
  
  @media (${collapse.max}) {
    grid-template-areas:
          "head main"
          "nav nav";
    grid-template-columns: max-content 1fr;
  }
`;

// Header
const Header = styled.header`
  grid-area: head;
  width: 64px;
`;
const IconLink = styled(AutoLink)`
  display: block;
`;
const ProjectIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
`;
const Libraries = styled(UList)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0 0;
  padding: 4px 0 0;
  border-top: 1px solid ${(p: StyleProps) => p.theme.colors.copyLight};
  ${spaceX('4px')};
`;

// Main
const Main = styled.main`
  grid-area: main;
  padding-left: 25px;
`;
const Title = styled.h3`
  display: flex;
  align-items: center;
  ${spaceX('8px')};
`;
const MobileIcon = styled(FaMobileAlt)`
  font-size: 25px;
  margin-left: 10px;
  color: ${(p: StyleProps) => p.theme.colors.copyLight};
`;

// Nav
const Nav = styled.nav`
  grid-area: nav;
  padding-left: 20px;
  margin-left: 10px;
  border-left: 1px solid ${(p: StyleProps) => p.theme.colors.borderSecondary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (${collapse.min}) {
    ${spaceY('12px')};
  }
  
  @media (${collapse.max}) {
    //Moves over to left
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
    padding-left: 0;
    border: 0;
    ${spaceX('16px')};
    
    > * {
       width: 100%;
    }
  }
`;