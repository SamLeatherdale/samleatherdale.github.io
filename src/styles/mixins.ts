import { css } from 'styled-components';

export function linkColor(color: string) {
  return css`
    &, &:link, &:visited, &:active, &:hover {
      color: ${color};
    }
  `;
}

export const spaceX = (space: string) => css`
  > * + * { 
    margin-left: ${space}; 
  }
`;
export const spaceY = (space: string) => css` 
  > * + * { 
    margin-top: ${space};
  }
`;
export const spaceXY = (x: string, y = '0') => css`
  ${spaceX(x)};
  ${spaceY(y)};
`;
export const spaceBoth = (space: string) => css`
  ${spaceX(space)};
  ${spaceY(space)};
`;

export function clearfix() {
  return css`
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}