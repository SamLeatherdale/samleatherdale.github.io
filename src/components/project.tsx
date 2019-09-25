import React from "react";

export interface ProjectProps {
    location: string;
    title: string
    description: string
    icon: string
    isMobile: string
}

const Project = (props: ProjectProps) => {
    const {location, title, description, icon, isMobile} = props;
    const liveUrl = `https://samleatherdale.github.io/${location}`;
    const sourceUrl = `https://github.com/SamLeatherdale/${location}`;

    return (
    <div className="project">
        <div className="project-main">
            <div className="project-icon-column">
                <a className="project-icon"
                   href={liveUrl}
                   style={{backgroundImage: `url(/images/projects/${icon})`}}></a>
                <a className="project-source-mobile"
                   href={sourceUrl}
                   target="_blank">
                    <div className="btn btn-primary">
                        <i className="fa fa-code"></i><span className="project-source-label">View Source</span>
                    </div>
                </a>
            </div>
            <a className="project-text inherit-link" href={sourceUrl}>
                <h3 className="project-title">
                    {title}
                    {isMobile && <i className="project-responsive fa fa-mobile"></i>}
                </h3>
                <p className="project-description">{description}</p>
            </a>
        </div>
        <div className="project-source">
            <div className="vflex">
                <a className="btn btn-primary" href={sourceUrl} target="_blank">
                    <i className="fa fa-code"></i><span className="project-source-label">View Source</span>
                </a>
            </div>
        </div>
    </div>
)};
export default Project;