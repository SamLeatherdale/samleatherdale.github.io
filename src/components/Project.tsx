import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/all';
import styled from 'styled-components';
import ProjectLibrary, { LibraryEnum } from './ProjectLibrary';
import AutoLink from './shared/AutoLink';
import Button, { IconButton } from './shared/Button';

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
    <div className="project">
      <div className="project-main">
        <div className="project-icon-column">
          <a className="project-icon"
            href={prodUrl}
            style={{ backgroundImage: `url(${iconUrl})` }}></a>
          {!!libraryIcons.length && <div className="project-libraries">
            {libraryIcons}
          </div>}
        </div>
        <AutoLink className="project-text inherit-link" href={prodUrl}>
          <h3 className="project-title">
            {title}
            {!isDesktopOnly &&
                        <i className="project-responsive fas fa-mobile-alt"
                          title="Project is optimized for mobile devices"></i>}
            {status &&
                        <span className={`badge-pill project-badge project-badge-${status}`} title={`This project is currently in ${status}`}>In {status}</span>}
          </h3>
          <p className="project-description">{description}</p>
        </AutoLink>
        <div className="project-source">
          {prodUrl &&
            <IconButton href={prodUrl} newTab>
              <FaExternalLinkAlt /><span className="project-source-label">View project</span>
            </IconButton>
          }
          {sourceUrl &&
            <IconButton href={sourceUrl} newTab outline>
              <FaCode /><span className="project-source-label">View source</span>
            </IconButton>
          }
        </div>
      </div>
    </div>
  );};
export default Project;

const ProjectSourceLabel = styled.span`

`;
