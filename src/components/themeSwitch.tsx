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
        this.switchTheme = this.switchTheme.bind(this);
        this.setTheme = this.setTheme.bind(this);

        //Check current browser theme
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        this.state = new ThemeSwitchState(mql.matches);
        this.setTheme();
    }

    switchTheme() {
        this.setState(prevState => ({
            dark: !prevState.dark
        }), () => {
            this.setTheme();
        });
    }

    setTheme() {
        const theme = this.state.dark ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
    }

    render() {
        return (
            <i className={["theme-switch", "far", this.state.dark ? "fa-moon" : "fa-sun"].join(" ")}
               onClick={this.switchTheme}
            ></i>
        );
    }
}