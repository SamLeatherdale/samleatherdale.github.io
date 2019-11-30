import React from "react";

enum ProjectStatus {
    BETA = "beta"
}

enum ProjectLibrary {
    REACT = "react",
    TYPESCRIPT = "ts",
    CANVAS = "canvas",
    API = "api",
    FORK = "forked"
}

export interface ProjectProps {
    repo: string;
    liveUrl?: string;
    title: string
    description: string
    icon?: string
    isDesktopOnly: boolean,
    status?: ProjectStatus,
    libraries?: ProjectLibrary[]
}

const Project = (props: ProjectProps) => {
    const {repo, liveUrl, title, description, icon, isDesktopOnly, status, libraries} = props;
    const prodUrl = typeof liveUrl === "string" ? liveUrl : `https://samleatherdale.github.io/${repo}`;
    const sourceUrl = `https://github.com/SamLeatherdale/${repo}`;
    const iconUrl = icon ? `/images/projects/${icon}` : '/icons/icon-256x256.png';
    const libraryIcons = (libraries ? libraries : []).map((library) => {
        let icon = "";
        let text = "";
        let title = "";
        switch (library) {
            case ProjectLibrary.REACT:
                icon = "fab fa-react";
                title = "React";
                break;
            case ProjectLibrary.TYPESCRIPT:
                text = "TS";
                title = "TypeScript";
                break;
            case ProjectLibrary.CANVAS:
                icon = "fas fa-brush";
                title = "HTML5 Canvas";
                break;
            case ProjectLibrary.API:
                icon = "fas fa-server";
                title = "API";
                break;
            case ProjectLibrary.FORK:
                icon = "fas fa-code-branch";
                title = "Forked project";
                break;
        }
        const props = {title: title, key: library};
        if (icon.length) {
            return <i className={icon} {...props} />
        } else {
            return <span {...props}>{text}</span>
        }
    });


    return (
    <div className="project">
        <div className="project-main">
            <div className="project-icon-column">
                <a className="project-icon"
                   href={prodUrl}
                   style={{backgroundImage: `url(${iconUrl})`}}></a>
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
                {prodUrl && <a className="btn btn-primary-themed" href={prodUrl} target="_blank">
                    <i className="fas fa-external-link-alt"></i><span className="project-source-label">View Project</span>
                </a>}
                <a className="btn btn-outline-themed" href={sourceUrl} target="_blank">
                    <i className="fas fa-code"></i><span className="project-source-label">View Source</span>
                </a>
            </div>
        </div>
    </div>
)};
export default Project;