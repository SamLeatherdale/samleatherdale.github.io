import React, { Context } from 'react';
import { DefaultTheme } from 'styled-components';
import media, { MediaType } from './media';

export type ThemeColors = {
  // Common
  gatsby: string;
  borderPrimary: string;
  borderSecondary: string;
  // Per theme
  primary: string;
  bgPrimary: string;
  bgSecondary: string;
  titlePrimary: string;
  copyPrimary: string;
  copyLight: string;
  // Bootstrap
  blue: string;
  indigo: string;
  purple: string;
  pink: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  teal: string;
  cyan: string;
};

export interface ThemeType {
  colors: ThemeColors;
  transitions: {
    buttonHover: string;
    fast: string;
  };
  media: MediaType;
}


export type StyleProps = {
  theme: ThemeType;
}

const commonColors = {
  gatsby: '#663399',
  borderPrimary: '#ebebeb',
  borderSecondary: '#ababab',
  // Bootstrap
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
};

const commonTheme = {
  transitions: {
    buttonHover: '0.15s',
    fast: '0.4s'
  },
  media: media
};

export const themeLight: DefaultTheme = {
  ...commonTheme,
  colors: {
    ...commonColors,
    primary: '#4c6dff',
    bgPrimary: '#fff',
    bgSecondary: '#efefef',
    titlePrimary: '#444',
    copyPrimary: '#666',
    copyLight: '#999'
  },
};

export const themeDark: DefaultTheme = {
  ...commonTheme,
  colors: {
    ...commonColors,
    primary: '#ff9900',
    bgPrimary: '#191919',
    bgSecondary: '#252525',
    titlePrimary: '#ddd',
    copyPrimary: '#fff',
    copyLight: '#ccc'
  }
};

export type ThemeContextValue = {
  // theme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
};
export type ThemeContextType = Context<ThemeContextValue>;
export const ThemeContext: ThemeContextType = React.createContext({
  // theme: themeLight,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  updateTheme: (theme: ThemeType) => {}
});