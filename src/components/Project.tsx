import React from 'react';
import ProjectLibrary, { LibraryEnum } from './ProjectLibrary';

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
        <a className="project-text inherit-link" href={prodUrl}>
          <h3 className="project-title">
            {title}
            {!isDesktopOnly &&
                        <i className="project-responsive fas fa-mobile-alt"
                          title="Project is optimized for mobile devices"></i>}
            {status &&
                        <span className={`badge-pill project-badge project-badge-${status}`} title={`This project is currently in ${status}`}>In {status}</span>}
          </h3>
          <p className="project-description">{description}</p>
        </a>
        <div className="project-source">
          {prodUrl && <a className="btn btn-primary-themed" href={prodUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i><span className="project-source-label">View project</span>
          </a>}
          {sourceUrl &&
            <a className="btn btn-outline-themed" href={sourceUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i><span className="project-source-label">View source</span>
            </a>
          }
        </div>
      </div>
    </div>
  );};
export default Project;