import { Link } from "gatsby"
import React from "react"

import IconLinkedIn from "../images/social/linkedin-dreamstale.png";
import IconGitHub from "../images/social/github-dreamstale.png";
import IconStackOverflow from "../images/social/stackoverflow-dreamstale.png";

export interface HeaderProps {
    title: string;
    subtitle: string;
}

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <div>Sam Leatherdale</div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/samleatherdale/" target="_blank">
                    <img className="social-image" alt="LinkedIn" src={IconLinkedIn} />
                </a>
                <a href="https://github.com/SamLeatherdale" target="_blank">
                    <img className="social-image" alt="GitHub" src={IconGitHub} />
                </a>
                <a href="http://stackoverflow.com/users/5157460/sam-leatherdale?tab=profile" target="_blank">
                    <img className="social-image" alt="StackOverflow" src={IconStackOverflow} />
                </a>
            </div>
            <a className="gatsby-link" href="https://www.gatsbyjs.org" target="_blank">Created with Gatsby.js</a>
        </div>
    </footer>
)};

export default Footer;