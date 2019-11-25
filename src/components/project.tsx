import React from "react";

export interface ProjectProps {
    repo: string;
    liveUrl?: string;
    title: string
    description: string
    icon?: string
    isDesktopOnly: boolean,
    isBeta: boolean
}

const Project = (props: ProjectProps) => {
    const {repo, liveUrl, title, description, icon, isDesktopOnly, isBeta} = props;
    const prodUrl = liveUrl ? liveUrl : `https://samleatherdale.github.io/${repo}`;
    const sourceUrl = `https://github.com/SamLeatherdale/${repo}`;
    const iconUrl = icon ? `/icons/projects/${icon}` : '/icons/icon-256x256.png';
    return (
    <div className="project">
        <div className="project-main">
            <div className="project-icon-column">
                <a className="project-icon"
                   href={prodUrl}
                   style={{backgroundImage: `url(${iconUrl})`}}></a>
            </div>
            <a className="project-text inherit-link" href={prodUrl}>
                <h3 className="project-title">
                    {title}
                    {!isDesktopOnly &&
                        <i className="project-responsive fas fa-mobile-alt"
                            title="Project is optimized for mobile devices"></i>}
                    {isBeta &&
                        <span className="badge-pill badge-primary project-badge">BETA</span>}
                </h3>
                <p className="project-description">{description}</p>
            </a>
            <div className="project-source">
                <a className="btn btn-primary-themed" href={prodUrl} target="_blank">
                    <i className="fas fa-external-link-alt"></i><span className="project-source-label">View Project</span>
                </a>
                <a className="btn btn-outline-themed" href={sourceUrl} target="_blank">
                    <i className="fas fa-code"></i><span className="project-source-label">View Source</span>
                </a>
            </div>
        </div>
    </div>
)};
export default Project;