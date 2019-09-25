import { Link } from "gatsby"
import React from "react"

export interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => {
    const {title, subtitle} = props;

    return (
    <header>
        <div className="header-title">
            <Link className="inherit-link" to="/">
                <h1 id="title">{title}</h1>
            </Link>
            <h2 id="subtitle">{subtitle}</h2>
        </div>

        <nav id="header_nav">
            <ul>
                <NavLink title="Home" path="/" />
                <NavLink title="About" path="/about" />
            </ul>
        </nav>
    </header>
)};

interface NavLinkProps {
    title: string;
    path: string;
}

const NavLink = ({title, path}: NavLinkProps) => (
    <li><Link to={path}>{title}</Link></li>
);

export default Header
