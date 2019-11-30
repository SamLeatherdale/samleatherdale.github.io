import React from "react";

class ThemeSwitchState {
    dark: boolean;

    constructor(dark: boolean = false) {
        this.dark = dark;
    }
}

export default class ThemeSwitch extends React.Component<{}, ThemeSwitchState> {
    constructor(props) {
        super(props);

        //Bind
        this.setTheme = this.setTheme.bind(this);
        this.switchTheme = this.switchTheme.bind(this);
        this.updateDOMTheme = this.updateDOMTheme.bind(this);

        this.state = new ThemeSwitchState();
    }

    componentDidMount(): void {
        if (sessionStorage && sessionStorage.getItem("color-scheme")) {
            this.setTheme(sessionStorage.getItem("color-scheme") === "dark");
        } else {
            //Check current browser theme
            const mql = window.matchMedia("(prefers-color-scheme: dark)");
            this.setTheme(mql.matches);
        }
    }

    setTheme(dark: boolean) {
        this.setState({dark: dark}, () => {
            this.updateDOMTheme();
        });
    }

    switchTheme() {
        this.setState(prevState => ({
            dark: !prevState.dark
        }), () => {
            this.updateDOMTheme();
        });
    }

    updateDOMTheme() {
        const theme = this.state.dark ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
        if (sessionStorage) {
            sessionStorage.setItem("color-scheme", theme);
        }
    }

    render() {
        return (
            <i className={["theme-switch", "far", this.state.dark ? "fa-moon" : "fa-sun"].join(" ")}
               onClick={this.switchTheme}
            ></i>
        );
    }
}