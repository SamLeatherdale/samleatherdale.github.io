import React from 'react';
import { FaMoon, FaSun } from 'react-icons/all';
import styled, { css } from 'styled-components';
import { ThemeContext, ThemeContextType, ThemeContextValue, themeDark, themeLight } from '../styles/theme';

class ThemeSwitchState {
    dark: boolean;

    constructor(dark = false) {
      this.dark = dark;
    }
}

export default class ThemeSwitch extends React.Component<{}, ThemeSwitchState> {
  context!: ThemeContextValue;
  
  constructor(props) {
    super(props);

    //Bind
    this.setTheme = this.setTheme.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
    this.updateDOMTheme = this.updateDOMTheme.bind(this);

    this.state = new ThemeSwitchState();
  }

  componentDidMount(): void {
    if (sessionStorage && sessionStorage.getItem('color-scheme')) {
      this.setTheme(sessionStorage.getItem('color-scheme') === 'dark');
    } else {
      //Check current browser theme
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      this.setTheme(mql.matches);
    }
  }

  setTheme(dark: boolean) {
    this.setState({ dark: dark }, () => {
      this.updateExternal();
    });
  }

  switchTheme() {
    this.setState(prevState => ({
      dark: !prevState.dark
    }), () => {
      this.updateExternal();
    });
  }

  updateExternal() {
    this.updateDOMTheme();
    this.updateParentComponent();
  }

  updateDOMTheme() {
    const theme = this.state.dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    if (sessionStorage) {
      sessionStorage.setItem('color-scheme', theme);
    }
  }

  updateParentComponent() {
    this.context.updateTheme(this.state.dark ? themeDark : themeLight);
  }

  render() {
    const Component = this.state.dark ? FaMoon : FaSun;
    const StyledComponent = styled(Component)`
      ${ThemeSwitcherStyles}
    `;
    return <StyledComponent onClick={this.switchTheme} />;
  }
}
ThemeSwitch.contextType = ThemeContext;

const ThemeSwitcherStyles = css`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 30px;
`;